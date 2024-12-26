import { Check, Dot } from "lucide-react";
import React from "react";

interface ProgressBarProps {
  steps: string[];
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full border-orange-500  border-2  flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                index < currentStep
                  ? "bg-orange-600 text-white"
                  : index === currentStep
                    ? "bg-transparent text-blue-800"
                    : "text-gray-500"
              }`}
            >
              {index === currentStep ? (
                <Dot size={48} color="#ff5900" />
              ) : index < currentStep ? (
                <Check size={16} color="#ffffff" />
              ) : null}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-[3px] rounded-xl mx-2 transition-all duration-300 ${
                index < currentStep ? "bg-orange-500" : "bg-gray-200"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
