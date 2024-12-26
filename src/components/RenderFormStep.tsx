import { FieldApi, ReactFormExtendedApi } from "@tanstack/react-form";
import { Input } from "./ui/input";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { FormValues } from "@/interfaces/form_values";

export const renderFormStep = (
  step: number,
  form: ReactFormExtendedApi<FormValues>,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
    return (
      <>
        {field.state.meta.isTouched && field.state.meta.errors.length ? (
          <em className="text-red-500 text-sm">
            {field.state.meta.errors.join(",")}
          </em>
        ) : null}
        {field.state.meta.isValidating ? "Validating..." : null}
      </>
    );
  }

  switch (step) {
    case 0:
      return (
        <div className="grid grid-cols-3 h-96 md:grid-cols-1 sm:grid-cols-1 gap-6 overflow-auto">
          <InteractiveHoverButton text="Casais" />
          <InteractiveHoverButton text="Melhor amigo(a)" />
          <InteractiveHoverButton text="Aniversario" />
        </div>
      );
    case 1:
      return (
        <div className="grid grid-cols-2 h-96 md:grid-cols-2 gap-2 overflow-auto">
          <InteractiveHoverButton text="Basico" />
          <InteractiveHoverButton text="Premium" />
        </div>
      );
    case 2:
      return (
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-1 h-96 overflow-auto">
          <div>
            <form.Field
              name="email"
              validators={{
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: ({ value }) =>
                  !value.match(/^[^@]+@[^@]+\.[^@]+$/) && "Invalid email",
              }}
            >
              {(field) => (
                <>
                  <Label
                    htmlFor="email"
                    className="text-lg flex items-center gap-2"
                  >
                    E-mail{" "}
                    <p className="text-xs">( para receber seu QRcode )</p>
                  </Label>
                  <Input
                    name="email"
                    maxLength={150}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder={`Digite o valor do campo`}
                    className="mt-2 text-lg"
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>
          <div>
            <form.Field name="title">
              {(field) => (
                <>
                  <Label className="text-lg">Titulo</Label>
                  <Input
                    name="title"
                    placeholder={`Digite o valor do campo`}
                    className="mt-2 text-lg"
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>
          <div>
            <form.Field name="sub_title">
              {(field) => (
                <>
                  <Label className="text-lg">Sub titulo</Label>
                  <Input
                    name="sub_title"
                    placeholder={`Digite o valor do campo`}
                    className="mt-2 text-lg"
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>
          <div>
            <form.Field name="date">
              {(field) => (
                <>
                  <Label className="text-lg">Data</Label>
                  <Input
                    name="date"
                    placeholder={`Digite o valor do campo`}
                    className="mt-2 text-lg"
                    onChange={(e) =>
                      field.handleChange(new Date(e.target.value))
                    }
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>
          <div>
            <form.Field name="url_music">
              {(field) => (
                <>
                  <Label className="text-lg">Url Musica</Label>
                  <Input
                    name="url_music"
                    placeholder={`Digite o valor do campo`}
                    className="mt-2 text-lg"
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>
        </div>
      );
    default:
      return (
        <div className="space-y-6 h-96 overflow-auto">
          <div>
            <form.Field name="message">
              {(field) => (
                <>
                  <Label htmlFor="message" className="text-lg">
                    Descrição detalhada
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Digite sua descrição aqui"
                    className="mt-2 text-lg w-full"
                    rows={6}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>
        </div>
      );
  }
};
