import { InviteRepositoy } from '../invite-repository';

export class CreateInvite implements InviteRepositoy {
  async create(formdata: FormData): Promise<any> {
    return await fetch('http://localhost:3000/checkout', {
      headers: { 'Content-type': 'multipart/form-data' },
      method: 'POST',
      body: formdata,
    });
  }
}
