import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Política de Privacidade
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Última atualização: 4 de janeiro de 2025
          </p>

          <div className="space-y-6">
            <Section title="1. Introdução">
              Sua privacidade é importante para nós. Esta Política de
              Privacidade descreve como coletamos, usamos, armazenamos e
              protegemos suas informações pessoais quando você utiliza nossa
              plataforma.
            </Section>

            <Section title="2. Informações que Coletamos">
              Coletamos as seguintes informações quando você utiliza nossa
              plataforma:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Informações de Cadastro: Nome, data de início do
                  relacionamento, mensagem personalizada, fotos do casal e
                  endereço de email cadastrado.
                </li>
                <li>
                  Informações de Pagamento: Endereço de email cadastrado no
                  Stripe para processamento do pagamento e envio do link da
                  página personalizada.
                </li>
              </ul>
            </Section>

            <Section title="3. Como Usamos Suas Informações">
              Utilizamos suas informações para:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Processar o pagamento e enviar o link da página personalizada
                  via email.
                </li>
                <li>
                  Personalizar e criar a página do casal com as informações
                  fornecidas.
                </li>
                <li>Melhorar nossos serviços e suporte ao cliente.</li>
              </ul>
            </Section>

            <Section title="4. Compartilhamento de Informações">
              Não compartilhamos suas informações pessoais com terceiros, exceto
              conforme necessário para processar pagamentos (Stripe) e conforme
              exigido por lei.
            </Section>

            <Section title="5. Segurança">
              Implementamos medidas de segurança para proteger suas informações
              pessoais contra acesso, uso ou divulgação não autorizados. No
              entanto, nenhuma transmissão de dados pela internet é
              completamente segura, e não podemos garantir a segurança absoluta.
            </Section>

            <Section title="6. Retenção de Dados">
              Reteremos suas informações pessoais apenas pelo tempo necessário
              para cumprir as finalidades para as quais foram coletadas ou
              conforme exigido por lei.
            </Section>

            <Section title="7. Seus Direitos">
              Você tem o direito de acessar, corrigir ou excluir suas
              informações pessoais. Para exercer esses direitos, entre em
              contato conosco pelo email:{' '}
              <Link href="#" className="text-blue-600 hover:underline">
                peruccii2917@hotmail.com
              </Link>
            </Section>

            <Section title="8. Alterações nesta Política de Privacidade">
              Podemos atualizar esta Política de Privacidade periodicamente.
              Quando fizermos isso, revisaremos a data da /última atualização/
              no topo desta página. É sua responsabilidade revisar esta política
              periodicamente para se manter informado sobre quaisquer
              alterações.
            </Section>

            <Section title="9. Contato">
              Se você tiver alguma dúvida sobre esta Política de Privacidade,
              entre em contato conosco pelo email:{' '}
              <Link href="#" className="text-blue-600 hover:underline">
                peruccii2917@hotmail.com
              </Link>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}
