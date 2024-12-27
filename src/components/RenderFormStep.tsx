import {  ReactFormExtendedApi } from "@tanstack/react-form";
import { Input } from "./ui/input";
import HandleInviteTypeButtons from "./ui/handle-invite-type-buttons";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { FormValues } from "@/interfaces/form_values";
import { FieldInfo } from "./Fieldinfo";
import { InviteType } from "@/app/enums/invite_type";
import HandleInvitePlanButtons from "./ui/handle-invite-plan-buttons";
import { InvitePlan } from "@/app/enums/invite_plan";

export const renderFormStep = (
  step: number,
  form: ReactFormExtendedApi<FormValues>,
) => {

  switch (step) {
    case 0:
      return (
        <div className="grid grid-cols-3 h-96 md:grid-cols-1 sm:grid-cols-1 gap-6 overflow-auto">
          <HandleInviteTypeButtons text="Casais" formApi={form} value={InviteType.LOVE} />
          <HandleInviteTypeButtons text="Melhor amigo(a)" formApi={form}  value={InviteType.BESTFRIENDS} />
          <HandleInviteTypeButtons text="Aniversario" formApi={form}  value={InviteType.BIRTHDAY}/>
        </div>
      );
    case 1:
      return (
        <div className="grid grid-cols-2 h-96 md:grid-cols-2 gap-2 overflow-auto">
          <HandleInvitePlanButtons text="Basico" formApi={form} value={InvitePlan.BASIC}/>
          <HandleInvitePlanButtons text="Premium" formApi={form} value={InvitePlan.PREMIUM}/>
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
            <form.Field
              name="title"
              validators={{
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: ({ value }) =>
                  value.length < 5 && "Titulo deve conter no minimo 5 caracteres",
              }}
            >
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
            <form.Field
              name="sub_title"
              validators={{
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: ({ value }) =>
                  value.length < 5 && "Sub Titulo deve conter no minimo 5 caracteres",
              }}
            >
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
            <form.Field
              name="date"
              validators={{
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: ({ value }) =>
                  value.toISOString().length <= 0 && "Data campo obrigatorio",
              }}
            >
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
            <form.Field
              name="url_music"
              validators={{
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: ({ value }) =>
                  !value.match(/^https:\/\//) && "Titulo deve conter no minimo 5 caracteres",
              }}
            >
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
            <form.Field
              name="message"
              validators={{
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: ({ value }) =>
                  value.length > 307 && "Titulo deve conter no minimo 5 caracteres",
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
                    maxLength={307}
                    placeholder="Digite sua descrição aqui"
                    className="mt-2 text-lg w-full"
                    rows={6}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <small>{field.state.value.length} / 307</small>
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>
        </div>
      );
  }
};
