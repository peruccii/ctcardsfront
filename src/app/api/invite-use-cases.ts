import { ResponseCheckout } from '@/interfaces/response_checkout';
import { InviteRepositoy } from '../invite-repository';
import { ResponseInvite } from '@/interfaces/response_invite';

export class InviteUseCases implements InviteRepositoy {
  //
  async create(formdata: FormData): Promise<ResponseCheckout> {
    const response = await fetch(`http://localhost:4000/checkout`, {
      method: 'POST',
      body: formdata,
    });
    const data = await response.json();
    return data;
  }

  async get(id: string): Promise<ResponseInvite> {
    const response = await fetch(`http://localhost:4000/get/invite/${id}`, {
      method: 'GET',
    });

    const data: ResponseInvite = await response.json();
    return data;
  }
}
