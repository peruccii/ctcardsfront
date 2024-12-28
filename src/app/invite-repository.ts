import { ResponseInvite } from '@/interfaces/response_invite';

export abstract class InviteRepositoy {
  abstract create(formdata: FormData): Promise<Response>;
  abstract get(id: string): Promise<ResponseInvite>;
}
