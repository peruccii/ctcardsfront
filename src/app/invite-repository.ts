import { ResponseInvite } from '@/interfaces/response_invite';

export abstract class InviteRepositoy {
  abstract create(formdata: FormData);
  abstract get(id: string);
}
