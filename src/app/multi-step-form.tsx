/** eslint-disable react/no-children-prop */
'use client';

import { useState } from 'react';
import RenderFormStep from '@/components/RenderFormStep';
import { useForm } from '@tanstack/react-form';
import { steps, stepsTitleContent } from './steps/steps';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import ProgressBar from '@/components/ProgressBar';
import { FormValues } from '@/interfaces/form_values';
import RenderCard from '@/components/RenderCard';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { InviteUseCases } from './api/invite-use-cases';
import useUploadPhotos from '@/components/useUploadPhotos';
import MakeInvite from './factory/make-invite';
import { useMessage } from '@/components/MessageContext';

export default function MultiStepForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { data } = useMessage();
  const { replace, push } = useRouter();
  const params = new URLSearchParams(searchParams);
  const { files, setFiles } = useUploadPhotos();

  const [currentStepContent, setCurrentStepContent] = useState(
    stepsTitleContent[Number(searchParams.get('step'))],
  );

  const handleNext = () => {
    if (Number(searchParams.get('step')) < steps.length - 1) {
      params.set('step', String(Number(searchParams.get('step')) + 1));
      replace(`${pathname}?${params.toString()}`, { scroll: false });
      setCurrentStepContent(
        stepsTitleContent[Number(searchParams.get('step')) + 1],
      );
    }
  };

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (Number(searchParams.get('step')) > 0) {
      params.set('step', String(Number(searchParams.get('step')) - 1));
      replace(`${pathname}?${params.toString()}`, { scroll: false });
      setCurrentStepContent(
        stepsTitleContent[Number(searchParams.get('step')) - 1],
      );
    }
  };

  const form = useForm<FormValues>({
    onSubmit: async ({ value }) => {
      const formdata = MakeInvite(value, searchParams, data);

      const invite = new InviteUseCases();

      const response = await invite.create(formdata);

      if (response) push(response.url_checkout);
    },
  });
  return (
    <div
      className="min-h-screen flex items-center justify-center "
      id="target-section"
    >
      <Card className="w-full max-w-[1700px] h-full  shadow-lg overflow-hidden border-2 border-orange-100 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-50 backdrop-contrast-125">
        <BorderBeam borderWidth={3} />
        <div className="flex flex-col md:flex-row sm:m-6 rounded-lg bg-white">
          <div className="w-full md:w-1/2 sm:p-12 p-2  items-center">
            <ProgressBar
              steps={steps}
              currentStep={Number(searchParams.get('step'))}
            />

            <h2 className="sm:text-2xl text-sm  sm:justify-start justify-center flex  font-bold mt-8 mb-4">
              {currentStepContent}
            </h2>
            <form
              className="space-y-8 h-auto"
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                void form.handleSubmit();
              }}
            >
              {RenderFormStep(
                Number(searchParams.get('step')),
                form,
                params,
                pathname,
                replace,
                setFiles,
                files,
              )}
              <div className="sm:items-end items-center sm:justify-end justify-center bottom-4 right-4 flex gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={Number(searchParams.get('step')) === 0}
                  className="py-2.5 px-6 text-sm rounded-full bg-gray-600 shadow-lg shadow-gray-500/50 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-l"
                >
                  Voltar
                </button>
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  // eslint-disable-next-line react/no-children-prop
                  children={([canSubmit]) => (
                    <button
                      className={`py-2.5 px-6 text-sm rounded-full font-semibold text-center cursor-pointer transition-all duration-500 text-white shadow-xs ${
                        !canSubmit
                          ? 'bg-gray-500 shadow-none cursor-not-allowed'
                          : 'bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 shadow-lg shadow-orange-500/50 hover:bg-gradient-to-l'
                      }`}
                      type="button"
                      onClick={handleNext}
                      disabled={!canSubmit}
                    >
                      Prosseguir
                    </button>
                  )}
                />
                <button type="submit">submit</button>
              </div>
            </form>
          </div>
          {RenderCard(params.get('type')!, params, files)}
        </div>
      </Card>
    </div>
  );
}
