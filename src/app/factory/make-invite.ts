import { FormValues } from '@/interfaces/form_values';

export function makeInvite(value: FormValues) {
  const formdata = new FormData();

  formdata.append('title', value.title);
  formdata.append('sub_title', value.sub_title);
  formdata.append('message', value.message);
  formdata.append('email', value.email);
  formdata.append('date', value.date.toISOString());
  formdata.append('invite_type', value.invite_type);
  formdata.append('invite_plan', value.invite_plan);
  if (value.url_music && value.url_music.length)
    formdata.append('url_music', value.url_music);
  value.images.forEach((image) => formdata.append('imageUrls', image));

  return formdata;
}
