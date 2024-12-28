import { InviteRepositoy } from '../invite-repository';
import { BASE_URL } from './base-urls';

export class CreateInvite implements InviteRepositoy {
  async create(formdata: FormData): Promise<Response> {
    return await fetch(`${BASE_URL}/${endpoints.CHECKOUT}`, {
      headers: { 'Content-type': 'multipart/form-data' },
      method: 'POST',
      body: formdata,
    });
  }
}
