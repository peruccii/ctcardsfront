import { IFieldObject } from '@/components/MessageContext';
import { getColorTypeInvite } from '@/components/TypeInviteColor';
import { FormValues } from '@/interfaces/form_values';

function MakeInvite(
  value: FormValues,
  searchParams: URLSearchParams,
  data: IFieldObject,
) {
  const formdata = new FormData();
  const dateNow = new Date().toISOString();
  const date = new Date(data.date);
  const cardColor =
    searchParams.get('card_color') ??
    getColorTypeInvite(searchParams.get('type')!);

  formdata.append('title', data.title ?? '');
  formdata.append('sub_title', data.sub_title ?? '');
  formdata.append('payment_method', localStorage.getItem('payment_method')!);
  formdata.append('message', data.message ?? '');
  formdata.append('email', data.email ?? '');
  formdata.append('card_color', cardColor!);
  formdata.append('bg_color', searchParams.get('bg') ?? '#FFFFFF');
  formdata.append('names', searchParams.get('names')!);
  formdata.append('date', date.toISOString());
  formdata.append('createdAt', dateNow);
  formdata.append('invite_type', searchParams.get('type')!);
  formdata.append('invite_plan', searchParams.get('plan')!);
  if (value.url_music && value.url_music.length)
    formdata.append('url_music', data.url_music ?? null);
  if (value.image_urls && value.image_urls.length) {
    value.image_urls.forEach((image) => formdata.append('image_urls', image));
  } else {
    formdata.append('image_urls', '');
  }

  return formdata;
}

export default MakeInvite;
