import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CircleCheck, CircleX } from 'lucide-react';

export function AccordionPlan() {
  return (
    <Accordion type="multiple" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Plano Básico</AccordionTrigger>
        <AccordionContent className="flex-col gap-4">
          <div className="flex gap-2 items-center mb-2">
            <CircleCheck color="#3fff0a" />
            <span>Podendo selecionar até 3 fotos</span>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <CircleCheck color="#3fff0a" />
            <span>1 ano de acesso</span>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <CircleX color="#ff0a0a" />
            <span>Sem direito a música</span>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Plano Premium</AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-2 items-center mb-2">
            <CircleCheck color="#3fff0a" />
            <span>Podendo selecionar até 7 fotos</span>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <CircleCheck color="#3fff0a" />
            <span>5 anos de acesso</span>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <CircleCheck color="#3fff0a" />
            <span>Com direito a música</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
