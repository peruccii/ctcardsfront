export default function HowItWorks() {
  return (
    <section className="py-24 relative ">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Como funciona ?
            </h2>
            <p className="w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              Em apenas três passos simples, você cria seu cartão de mensagens
              personalizado e o acessa <br />
              facilmente através de um QR code único enviado para seu e-mail.
            </p>
          </div>
          <div className="w-full justify-start items-center gap-4 flex md:flex-row flex-col">
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                  1
                </h3>
                <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                  Preenchendo informações
                </h4>
              </div>
              <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                Preencha todas as informações necessárias para a criação do seu
                cartão personalizado. Inclua mensagem, design e qualquer outro
                detalhe relevante.
              </p>
            </div>
            <svg
              className="md:flex hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                stroke="#4F46E5"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                  2
                </h3>
                <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                  Pagamento
                </h4>
              </div>
              <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                Realize o pagamento para concluir a criação do seu cartão. O
                processo é rápido e seguro.
              </p>
            </div>
            <svg
              className="md:flex hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                stroke="#4F46E5"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                  3
                </h3>
                <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                  QR code
                </h4>
              </div>
              <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                Após a confirmação do pagamento, você receberá um QR code no seu
                e-mail. Ao escanear o código, você terá acesso imediato ao seu
                cartão personalizado, disponível online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
