/** eslint-disable react/no-children-prop */
'use client';

import { useState } from 'react';
import { renderFormStep } from '@/components/RenderFormStep';
import { useForm } from '@tanstack/react-form';
import { steps, stepsTitleContent } from './steps/steps';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import ProgressBar from '@/components/ProgressBar';
import { FormValues } from '@/interfaces/form_values';
import { renderCard } from '@/components/RenderCard';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ResponseCheckout } from '@/interfaces/response_checkout';
import { makeInvite } from './factory/make-invite';
import { CreateInvite } from './api/create-invite';

export default function MultiStepForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();
  const params = new URLSearchParams(searchParams);

  const [currentStepContent, setCurrentStepContent] = useState(
    stepsTitleContent[Number(searchParams.get('step'))],
  );

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
      const formdata = makeInvite(value);

      const invite = new CreateInvite();

      const data = await invite.create(formdata);

      const response: ResponseCheckout = await data.json();

      if (data.status === 200) push(response.urlStripe);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <Card className="w-full max-w-[1400px] shadow-lg overflow-hidden border-2 border-orange-100 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-50 backdrop-contrast-125">
        <BorderBeam borderWidth={3} />
        <div className="flex flex-col md:flex-row m-6 rounded-lg bg-white">
          <div className="w-full md:w-1/2 p-12">
            <ProgressBar
              steps={steps}
              currentStep={Number(searchParams.get('step'))}
            />

            <h2 className="text-2xl font-bold mt-8 mb-4">
              {currentStepContent}
            </h2>
            <form className="space-y-8 h-auto">
              {renderFormStep(Number(searchParams.get('step')), form)}
              <div className="items-end justify-end bottom-4 right-4 flex gap-4">
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
                      onClick={(e) => {
                        if (canSubmit) handleNext(e);
                      }}
                      disabled={!canSubmit}
                    >
                      Prosseguir
                    </button>
                  )}
                />
              </div>
            </form>
          </div>
          {renderCard(form.state.values.title)}
        </div>
      </Card>
    </div>
  );
}
