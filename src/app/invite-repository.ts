import { ResponseCheckout } from '@/interfaces/response_checkout';
import { ResponseInvite } from '@/interfaces/response_invite';

export abstract class InviteRepositoy {
  abstract create(formdata: FormData): Promise<ResponseCheckout>;
  abstract get(id: string): Promise<ResponseInvite>;
}
