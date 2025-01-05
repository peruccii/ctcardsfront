'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CreditCard, QrCode } from 'lucide-react';

export default function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('card');

  useEffect(() => {
    localStorage.setItem(
      'payment_method',
      paymentMethod === 'pix' ? 'PIX' : 'STRIPE',
    );
  }, [paymentMethod]);

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-8">
      <RadioGroup
        value={paymentMethod}
        onValueChange={(value) => setPaymentMethod(value as 'pix' | 'card')}
        className="flex flex-col gap-4"
      >
        <Label htmlFor="pix" className="cursor-pointer">
          <Card
            className={`h-40 w-full ${paymentMethod === 'pix' ? 'border-green-500 border-2 shadow-lg' : 'border-dashed border-2'}`}
          >
            <CardContent className="flex flex-col items-center justify-center h-full">
              <QrCode
                className={`h-12 w-12 mb-2 ${paymentMethod === 'pix' ? 'text-green-500' : 'text-gray-400'}`}
              />
              <span className="font-semibold">PIX</span>
              <RadioGroupItem value="pix" id="pix" className="sr-only" />
            </CardContent>
          </Card>
        </Label>
        <Label htmlFor="card" className="cursor-pointer">
          <Card
            className={`h-40 w-full ${paymentMethod === 'card' ? 'border-purple-500 border-2 shadow-lg' : 'border-dashed border-2'}`}
          >
            <CardContent className="flex flex-col items-center justify-center h-full">
              <CreditCard
                className={`h-12 w-12 mb-2 ${paymentMethod === 'card' ? 'text-purple-500' : 'text-gray-400'}`}
              />
              <span className="font-semibold">Cartão de crédito</span>
              <RadioGroupItem value="card" id="card" className="sr-only" />
            </CardContent>
          </Card>
        </Label>
      </RadioGroup>
    </div>
  );
}
