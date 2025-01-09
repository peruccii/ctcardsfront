import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  benefits: string[];
  onSelect: () => void;
  selected: boolean;
  color: string;
}

export function PricingCard({
  name,
  price,
  benefits,
  onSelect,
  selected,
}: PricingCardProps) {
  return (
    <Card
      className={`h-90
        transform transition-all duration-300
        border-gray-200 hover:border-orange-500
        ${selected ? 'ring-2 ring-orange-500 border-orange-500' : ''}
        hover:shadow-lg
      `}
    >
      <CardHeader
        className={`
          text-center transition-colors duration-300
          ${selected || 'hover:bg-orange-50'}
          ${selected ? 'bg-orange-100' : 'bg-gray-50'}
        `}
      >
        <CardTitle
          className={`
            text-2xl font-bold transition-colors duration-300
            ${selected ? 'text-orange-600' : 'text-gray-800'}
            ${selected || 'group-hover:text-orange-600'}
          `}
        >
          {name}
        </CardTitle>
        <CardDescription>
          <span
            className={`
              text-4xl font-bold transition-colors duration-300
              ${selected ? 'text-orange-600' : 'text-gray-800'}
              ${selected || 'group-hover:text-orange-600'}
            `}
          >
            {price}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 h-44">
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <Check
                className={`
                  mr-2 h-5 w-5 transition-colors duration-300
                  ${selected ? 'text-orange-500' : 'text-gray-500'}
                  ${selected || 'group-hover:text-orange-500'}
                `}
              />
              <span className="text-sm text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onSelect}
          variant={selected ? 'default' : 'outline'}
          type="button"
          className={`
            w-full transition-all duration-300
            ${
              selected
                ? 'bg-orange-500 text-white hover:bg-orange-600'
                : 'text-gray-800 hover:bg-orange-500 hover:text-white'
            }
          `}
        >
          {selected ? 'Selecionado' : 'Selecionar'}
        </Button>
      </CardFooter>
    </Card>
  );
}
