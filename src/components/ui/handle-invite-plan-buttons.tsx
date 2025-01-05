import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FormValues } from '@/interfaces/form_values';
import { ReactFormExtendedApi } from '@tanstack/react-form';
import { InvitePlan } from '@/app/enums/invite_plan';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  formApi: ReactFormExtendedApi<FormValues>;
  value: InvitePlan;
}

const HandleInvitePlanButtons = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = 'Button', className, formApi, value, ...props }, ref) => {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  return (
    <formApi.Field name="invite_plan">
      {(field) => (
        <>
          <button
            name="invite_plan"
            ref={ref}
            type="button"
            onClick={() => {
              field.handleChange(value);
              params.set('plan', value);
              replace(`${pathname}?${params.toString()}`, { scroll: false });
            }}
            className={cn(
              `group relative shadow-md w-full h-24 cursor-pointer overflow-hidden rounded-xl border  ${params.get('plan') === value ? 'bg-primary text-primary-foreground' : 'bg-background'} p-2 text-center font-semibold`,
              className,
            )}
            {...props}
          >
            <div className="flex-col">
              <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                {text}
              </span>
            </div>
            <small className="group-hover:text-primary-foreground ">
              {value === 'BASIC' ? 'R$ 10,00' : 'R$ 20,00'}
            </small>
            <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
              <span>{text}</span>
              <ArrowRight />
            </div>
            <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
          </button>
        </>
      )}
    </formApi.Field>
  );
});

HandleInvitePlanButtons.displayName = 'HandleInviteTypeButtons';

export default HandleInvitePlanButtons;
