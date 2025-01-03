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
  const cardColor =
    searchParams.get('card_color') ??
    getColorTypeInvite(searchParams.get('type')!);

  formdata.append('title', data.title ?? '');
  formdata.append('sub_title', data.title ?? '');
  formdata.append('payment_method', localStorage.getItem('payment_method')!);
  formdata.append('message', data.message ?? '');
  formdata.append('email', data.email ?? '');
  formdata.append('card_color', cardColor!);
  formdata.append('bg_color', searchParams.get('bg') ?? '#FFFFFF');
  formdata.append('names', searchParams.get('names')!);
  formdata.append('date', searchParams.get('date')!);
  formdata.append('createdAt', dateNow);
  formdata.append('invite_type', searchParams.get('type')!);
  formdata.append('invite_plan', searchParams.get('plan')!);
  if (value.url_music && value.url_music.length)
    formdata.append('url_music', searchParams.get('url_music')!);
  value.imageUrls.forEach((image) => formdata.append('imageUrls', image));

  return formdata;
}

export default MakeInvite;
