import { ResponseCheckout } from '@/interfaces/response_checkout';
import { InviteRepositoy } from '../invite-repository';
import { ResponseInvite } from '@/interfaces/response_invite';
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export class InviteUseCases implements InviteRepositoy {
  //
  async create(formdata: FormData): Promise<ResponseCheckout> {
    const response = await fetch(`${BASE_URL}/checkout`, {
      method: 'POST',
      body: formdata,
    });
    const data = await response.json();
    return data;
  }

  async get(id: string): Promise<ResponseInvite> {
    const response = await fetch(`${BASE_URL}/get/invite/${id}`, {
      method: 'GET',
    });

    const data: ResponseInvite = await response.json();
    return data;
  }
}
