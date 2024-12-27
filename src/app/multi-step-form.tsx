/** eslint-disable react/no-children-prop */
"use client";

import { useState } from "react";
import { renderFormStep } from "@/components/RenderFormStep";
import { useForm } from "@tanstack/react-form";
import { steps, stepsTitleContent } from "./steps/steps";
import { Card } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import ProgressBar from "@/components/ProgressBar";
import { FormValues } from "@/interfaces/form_values";
import { renderCard } from "@/components/RenderCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { InviteType } from "./enums/invite_type";
import { InvitePlan } from "./enums/invite_plan";

export default function MultiStepForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const [currentStepContent, setCurrentStepContent] = useState(
    stepsTitleContent[Number(searchParams.get("step"))],
  );

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (Number(searchParams.get("step")) < steps.length - 1) {
      params.set("step", String(Number(searchParams.get("step")) + 1));
      replace(`${pathname}?${params.toString()}`, { scroll: false });
      setCurrentStepContent(
        stepsTitleContent[Number(searchParams.get("step")) + 1],
      );
    }
  };

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (Number(searchParams.get("step")) > 0) {
      params.set("step", String(Number(searchParams.get("step")) - 1));
      replace(`${pathname}?${params.toString()}`, { scroll: false });
      setCurrentStepContent(
        stepsTitleContent[Number(searchParams.get("step")) - 1],
      );
    }
  };



  const form = useForm<FormValues>({
    defaultValues: {
      title: "",
      sub_title: "",
      message: "",
      email: "",
      date: new Date(),
      url_music: null,
      invite_type:  InviteType as unknown as InviteType,
      invite_plan: InvitePlan as unknown as InvitePlan
    },
    onSubmit: async ({ value }) => {

    const formdata = new FormData();

    formdata.append('title', value.title)
    formdata.append('sub_title', value.sub_title)
    formdata.append('message', value.message)
    formdata.append('email', value.email)
    formdata.append('date', value.date.toISOString())
    if ( value.url_music && value.url_music.length ) formdata.append('url_music', value.url_music)
    formdata.append('invite_type', value.invite_type)
    formdata.append('invite_plan', value.invite_plan)

     const rs = await fetch('http://localhost:3000/checkout', {
        headers: { "Content-type": "multipart/form-data" },
        method: 'POST',
        body: formdata
     })
     const data = await rs.json()
     console.log(data)
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <Card className="w-full max-w-[1400px] shadow-lg overflow-hidden border-2 border-orange-100 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-50 backdrop-contrast-125">
        <BorderBeam borderWidth={3} />
        <div className="flex flex-col md:flex-row m-6 rounded-lg bg-white">
          {/* lado esquerdo */}
          <div className="w-full md:w-1/2 p-12">
            <ProgressBar
              steps={steps}
              currentStep={Number(searchParams.get("step"))}
            />

            <h2 className="text-2xl font-bold mt-8 mb-4">
              {currentStepContent}
            </h2>
            <form className="space-y-8 h-auto">
              {renderFormStep(Number(searchParams.get("step")), form)}
              <div className="items-end justify-end bottom-4 right-4 flex gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={Number(searchParams.get("step")) === 0}
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
                {/* <button
                  type="button"
                  onClick={(e) => {
                    handleNext(e);
                  }}
                  disabled={currentStep === steps.length - 1}
                >
                  Prosseguir
                </button> */}
              </div>
            </form>
          </div>
          {/* lado direito */}
          {renderCard(form.state.values.title)}
        </div>
      </Card>
    </div>
  );
}
