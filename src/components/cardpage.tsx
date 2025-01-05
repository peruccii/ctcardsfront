import { fetchInvite } from './getInvite';

interface searchParamsProps {
  searchParams: {
    id: string;
  };
}

const CardPage = async ({ searchParams }: searchParamsProps) => {
  const id = searchParams.id;
  const data = await fetchInvite(id);

  return <CardComponent data={data} />;
};

export default CardPage;
