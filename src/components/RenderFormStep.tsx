import { ReactFormExtendedApi } from '@tanstack/react-form';
import { Input } from './ui/input';
import HandleInviteTypeButtons from './ui/handle-invite-type-buttons';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { FormValues } from '@/interfaces/form_values';
import { FieldInfo } from './Fieldinfo';
import { InviteType } from '@/app/enums/invite_type';
import FileUploadDropzone from './ui/upload-photo';
import ColorPickerDemo from './ui/color-picker';
import PaymentMethod from './ui/payment-method';
import { useMessage } from './MessageContext';
import { useParamsSet } from './SetParams';
import { PricingCard } from './PricingCards';
import { CustomDateInput } from './ui/custom-date-input';

const RenderFormStep = (
  step: number,
  form: ReactFormExtendedApi<FormValues>,
  params: URLSearchParams,
  pathname: string,
  replace: (
    url: string,
    options?: { scroll?: boolean; shallow?: boolean },
  ) => void,
  setFiles: React.Dispatch<React.SetStateAction<File[] | null>>,
  files: File[] | null,
) => {
  const { data, setData } = useMessage();
  const { handle } = useParamsSet();
  switch (step) {
    case 0:
      return (
        <div className="grid grid-cols-1 sm:grid-cols-1 h-96 gap-2 overflow-auto">
          <HandleInviteTypeButtons
            text="Casais"
            formApi={form}
            value={InviteType.LOVE}
          />
          <HandleInviteTypeButtons
            text="Melhor amigo(a)"
            formApi={form}
            value={InviteType.BESTFRIENDS}
          />
          <HandleInviteTypeButtons
            text="Aniversário"
            formApi={form}
            value={InviteType.BIRTHDAY}
          />
        </div>
      );
    case 1:
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="h-96">
            <PricingCard
              onSelect={() => {
                params.set('plan', 'BASIC');
                replace(`${pathname}?${params.toString()}`, { scroll: false });
              }}
              selected={params.get('plan') === 'BASIC'}
              name="Básico"
              price="R$ 10,00"
              benefits={['Podendo selecionar até 3 fotos', '1 ano de acesso']}
              color="#6366F1"
            />
          </div>
          <div className="h-96">
            <PricingCard
              onSelect={() => {
                params.set('plan', 'PREMIUM');
                replace(`${pathname}?${params.toString()}`, { scroll: false });
              }}
              selected={params.get('plan') === 'PREMIUM'}
              name="Premium"
              price="R$ 20,00"
              benefits={[
                'Podendo selecionar até 7 fotos',
                '5 anos de acesso',
                'Com direito a música',
              ]}
              color="#F97316"
            />
          </div>
        </div>
      );
    case 2:
      return (
        <div className=" max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <form.Field
                name="email"
                validators={{
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: ({ value }) =>
                    !value.match(/^[^@]+@[^@]+\.[^@]+$/) && 'Invalid email',
                }}
              >
                {(field) => (
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-base sm:text-sm flex items-center gap-2 mb-2"
                    >
                      E-mail{' '}
                      <span className="text-xs">
                        ( para receber seu QRcode )
                      </span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      value={data.email}
                      maxLength={150}
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                        setData(
                          data.message,
                          data.title,
                          data.sub_title,
                          e.target.value,
                          data.url_music,
                          data.date,
                        );
                      }}
                      placeholder="Digite o valor do campo"
                      className="w-full text-base sm:text-lg"
                    />
                    <FieldInfo field={field} />
                  </div>
                )}
              </form.Field>
            </div>

            <div className="space-y-4">
              <form.Field
                name="title"
                validators={{
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: ({ value }) =>
                    value.length < 5 &&
                    'Título deve conter no minimo 5 caracteres',
                }}
              >
                {(field) => (
                  <div>
                    <Label
                      htmlFor="title"
                      className="text-base sm:text-sm mb-2"
                    >
                      Título
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      maxLength={50}
                      value={data.title}
                      placeholder="Digite o valor do campo"
                      className="w-full text-base sm:text-lg"
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                        setData(
                          data.message,
                          e.target.value,
                          data.sub_title,
                          data.email,
                          data.url_music,
                          data.date,
                        );
                      }}
                    />
                    <FieldInfo field={field} />
                  </div>
                )}
              </form.Field>
            </div>

            <div className="space-y-4">
              <form.Field
                name="names"
                validators={{
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: ({ value }) =>
                    value.length < 5 &&
                    'Nomes deve conter no minimo 5 caracteres',
                }}
              >
                {(field) => (
                  <div>
                    <Label
                      htmlFor="names"
                      className="text-base sm:text-sm mb-2"
                    >
                      Nomes
                    </Label>
                    <Input
                      id="names"
                      name="names"
                      value={params.get('names') ?? ''}
                      placeholder="Digite o valor do campo"
                      className="w-full text-base sm:text-lg"
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                        handle('names', e.target.value);
                      }}
                    />
                    <FieldInfo field={field} />
                  </div>
                )}
              </form.Field>
            </div>

            <div className="space-y-4">
              <form.Field
                name="sub_title"
                validators={{
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: ({ value }) =>
                    value.length < 5 &&
                    'Subtítulo deve conter no minimo 5 caracteres',
                }}
              >
                {(field) => (
                  <div>
                    <Label
                      htmlFor="sub_title"
                      className="text-base sm:text-sm mb-2"
                    >
                      Subtítulo
                    </Label>
                    <Input
                      id="sub_title"
                      name="sub_title"
                      maxLength={50}
                      value={data.sub_title ?? ''}
                      placeholder="Digite o valor do campo"
                      className="w-full text-base sm:text-lg"
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                        setData(
                          data.message,
                          data.title,
                          e.target.value,
                          data.email,
                          data.url_music,
                          data.date,
                        );
                      }}
                    />
                    <FieldInfo field={field} />
                  </div>
                )}
              </form.Field>
            </div>

            <CustomDateInput />

            {params.get('plan') === 'PREMIUM' && (
              <div className="space-y-4">
                <form.Field
                  name="url_music"
                  validators={{
                    onChangeAsyncDebounceMs: 500,
                    onChangeAsync: ({ value }) =>
                      value && !value.match(/^https:\/\/.+/) && 'URL invalida',
                  }}
                >
                  {(field) => (
                    <div>
                      <Label
                        htmlFor="url_music"
                        className="text-sm sm:text-sm mb-2"
                      >
                        Url Música
                      </Label>
                      <Input
                        id="url_music"
                        name="url_music"
                        value={data.url_music ?? ''}
                        placeholder="Digite o valor do campo"
                        className="w-full text-base sm:text-lg"
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                          setData(
                            data.message,
                            data.title,
                            data.sub_title,
                            data.email,
                            e.target.value,
                            data.date,
                          );
                        }}
                      />
                      <FieldInfo field={field} />
                    </div>
                  )}
                </form.Field>
              </div>
            )}
          </div>
          <div className=" w-full p-1 mt-8 overflow-auto">
            <FileUploadDropzone
              setFiles={setFiles}
              files={files}
              formApi={form}
            />
          </div>
          <div className="flex gap-4">
            <ColorPickerDemo
              label="Cor do cartão"
              defaultColor={`${params.get('type') === 'LOVE' ? '#f56565' : params.get('type') === 'BESTFRIENDS' ? '#3B82F6' : '#F59E0B'}`}
              paramsSet="card_color"
              params={params}
              pathname={pathname}
              replace={replace}
            />
            <ColorPickerDemo
              label="Cor do background"
              defaultColor="#ffffff"
              paramsSet="bg"
              params={params}
              pathname={pathname}
              replace={replace}
            />
          </div>
        </div>
      );
    case 3: {
      return (
        <div className="space-y-6 h-96 overflow-auto">
          <div>
            <form.Field
              name="message"
              validators={{
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: ({ value }) =>
                  value.length < 5 &&
                  'Sua mensageem deve conter no minimo 5 caracteres',
              }}
            >
              {(field) => (
                <>
                  <Label htmlFor="message" className="text-lg">
                    Sua mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    maxLength={360}
                    value={data.message ?? undefined}
                    placeholder="Digite sua descrição aqui"
                    className="mt-2 text-lg w-full"
                    rows={6}
                    onChange={(e) => {
                      field.handleChange(e.target.value);
                      setData(
                        e.target.value,
                        data.title,
                        data.sub_title,
                        data.email,
                        data.url_music,
                        data.date,
                      );
                    }}
                  />
                  <small>
                    {field.state.value != undefined
                      ? field.state.value.length
                      : 0}{' '}
                    / 360
                  </small>
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>
        </div>
      );
    }
    default:
      return <PaymentMethod />;
  }
};

export default RenderFormStep;
