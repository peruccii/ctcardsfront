import { InviteUseCases } from '@/app/api/invite-use-cases';
import { InviteRepositoy } from '@/app/invite-repository';

export const fetchInvite = async (id: string) => {
  const repo: InviteRepositoy = new InviteUseCases();
  const data = await repo.get(id);
  return data;
};
