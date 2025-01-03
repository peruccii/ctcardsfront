import Link from 'next/link';

export const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Termos de Uso
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Última atualização: 03 de janeiro de 2025
          </p>

          <div className="space-y-6">
            <Section title="1. Aceitação dos Termos">
              Ao acessar e utilizar a nossa plataforma, você concorda em cumprir
              e ficar vinculado aos seguintes Termos de Uso. Caso não concorde
              com qualquer parte destes termos, você não deve utilizar a
              plataforma.
            </Section>

            <Section title="2. Descrição do Serviço">
              Nossa plataforma permite que casais, aniversariantes, melhores
              amigo(a)s criem uma página personalizada preenchendo um formulário
              com seu nome, data de início do relacionamento, uma mensagem
              personalizada e até 7 fotos. Após o preenchimento, o
              casal/aniversariante/amigo é direcionado para o checkout e, ao
              concluir o pagamento, recebe um link com um QR Code via email.
            </Section>

            <Section title="3. Cadastro e Segurança">
              Para utilizar o serviço, você deve fornecer um endereço de email
              válido. Não compartilharemos seu email com terceiros.
            </Section>

            <Section title="4. Privacidade">
              Respeitamos a sua privacidade. Não utilizamos seus dados para
              qualquer tipo de processamento ou venda de dados para terceiros. O
              email cadastrado é utilizado apenas para o envio do link da página
              personalizada.
            </Section>

            <Section title="5. Conteúdo do Usuário">
              Você é responsável pelo conteúdo que insere na plataforma,
              incluindo fotos, mensagens e informações do relacionamento. Não
              nos responsabilizamos por qualquer conteúdo impróprio ou ilegal
              carregado pelos usuários.
            </Section>

            <Section title="6. Pagamentos e Reembolsos">
              Ss pagamentos são processados através do Stripe ou Mercado Pago.
              Após a conclusão do pagamento, o casal receberá um link para a
              página personalizada via email. Não oferecemos reembolsos, exceto
              em casos excepcionais a nosso exclusivo critério.
            </Section>

            <Section title="7. Modificações no Serviço">
              Nós nos comprometemos a manter o serviço ativo e disponível pelo
              período contratado, conforme o plano escolhido (1 ano no plano
              básico ou tempo de 5 anos no plano premium). No entanto, em
              circunstâncias excepcionais que fujam ao nosso controle, como
              questões legais, técnicas ou financeiras, reservamo-nos o direito
              de modificar ou descontinuar o serviço. Caso seja necessário
              descontinuar o serviço, tomaremos todas as medidas possíveis para
              notificar os usuários com antecedência e garantir a preservação
              das páginas ou oferecer soluções alternativas sempre que possível.
              O Cute Cards não se responsabiliza por eventuais perdas
              decorrentes de modificações ou descontinuação em situações
              extraordinárias, mas faremos o possível para minimizar o impacto.
            </Section>

            <Section title="8. Limitação de Responsabilidade">
              Em nenhuma circunstância seremos responsáveis por qualquer dano
              indireto, incidental, especial ou consequente decorrente de ou
              relacionado ao uso ou incapacidade de uso da plataforma.
            </Section>

            <Section title="9. Alterações nos Termos">
              Podemos atualizar estes Termos de Uso periodicamente. Quando
              fizermos isso, revisaremos a data da /última atualização/ no topo
              desta página. É sua responsabilidade revisar estes Termos de Uso
              periodicamente para se manter informado sobre quaisquer
              alterações.
            </Section>

            <Section title="10. Contato">
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em
              contato conosco pelo email:{' '}
              <Link href="#" className="text-blue-600 hover:underline">
                peruccii2917@hotmail.com
              </Link>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      <p className="text-gray-700">{children}</p>
    </div>
  );
}
