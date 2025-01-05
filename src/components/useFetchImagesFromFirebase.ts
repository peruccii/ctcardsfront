import storage from '@/config/firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';

export const useFetchImagesAsUrls = (userEmail: string) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Coloque o hook useEffect fora de qualquer condição ou loop
  useEffect(() => {
    if (!userEmail) {
      setIsLoading(false); // Caso o email não seja válido, encerre o carregamento
      return; // Não execute nada se userEmail não estiver disponível
    }

    const fetchImages = async () => {
      try {
        const folderRef = ref(storage, userEmail);
        const folderList = await listAll(folderRef);

        const urlPromises = folderList.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return url; // Retorna a URL da imagem
        });

        const urls = await Promise.all(urlPromises);
        setImageUrls(urls); // Armazena as URLs das imagens
      } catch (error) {
        console.error('Error fetching image URLs: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [userEmail]); // useEffect é chamado sempre que userEmail mudar

  return { imageUrls, isLoading }; // Retorna as URLs das imagens e o status de carregamento
};
