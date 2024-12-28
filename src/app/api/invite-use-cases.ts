import { InviteRepositoy } from '../invite-repository';
import { BASE_URL } from './base-urls';
import { endpoints } from './endpoints';
import { ResponseInvite } from '@/interfaces/response_invite';

export class InviteUseCases implements InviteRepositoy {
  //
  async create(formdata: FormData): Promise<Response> {
    return await fetch(`${BASE_URL}/${endpoints.CHECKOUT}`, {
      headers: { 'Content-type': 'multipart/form-data' },
      method: 'POST',
      body: formdata,
    });
  }

  async get(id: string): Promise<ResponseInvite> {
    const response = await fetch(`${BASE_URL}/${endpoints.GET_INVITE}/${id}`, {
      method: 'GET',
    });
    const data: ResponseInvite = await response.json();
    return data;
  }
}
