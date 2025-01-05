'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ResponseInvite } from '@/interfaces/response_invite'; // Ajuste o caminho para o seu arquivo
import { InviteUseCases } from '@/app/api/invite-use-cases';
import { RenderCardWithData } from '@/components/RenderCardWithData';

const InvitePage = () => {
  const [data, setData] = useState<ResponseInvite | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams(); // Obtém o id da URL

  useEffect(() => {
    if (id) {
      const fetchInviteData = async () => {
        try {
          const repo = new InviteUseCases();
          const data = await repo.get(id as string);
          setData(data);
        } catch (err) {
          console.error(err);
          setError('Erro ao buscar os dados');
        } finally {
          setLoading(false);
        }
      };

      fetchInviteData();
    }
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  if (!data) {
    return <p>Nenhum dado encontrado</p>;
  }

  return RenderCardWithData(data.invite_type, data);
};

export default InvitePage;
