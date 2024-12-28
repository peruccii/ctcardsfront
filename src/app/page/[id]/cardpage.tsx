import { InviteUseCases } from '@/app/api/invite-use-cases';
import { InviteRepositoy } from '@/app/invite-repository';

interface searchParamsProps {
  searchParams: {
    id: string;
  };
}

export const CardPage = async (
  { searchParams }: searchParamsProps,
  repo: InviteRepositoy = new InviteUseCases(),
) => {
  const id = searchParams.id;

  const data = await repo.get(id);

  return <h1>{data.message}</h1>;
};
