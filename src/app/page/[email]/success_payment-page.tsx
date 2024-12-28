import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mail } from 'lucide-react';

interface searchParamsProps {
  searchParams: {
    email: string;
  };
}

export default function SuccessPaymentPage({
  searchParams,
}: searchParamsProps) {
  const email = searchParams.email;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <Mail className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            E-mail Enviado!
          </CardTitle>
          <CardDescription className="text-center">
            Informações enviadas com sucesso
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">
            O QR code e o link do site foram enviados para o seu e-mail.
          </p>
          <p className="text-center text-sm text-gray-500">
            Por favor, verifique sua caixa de entrada e a pasta de spam.
          </p>
          <p className="text-center text-sm text-gray-400">Email: {email}</p>
        </CardContent>
      </Card>
    </div>
  );
}
