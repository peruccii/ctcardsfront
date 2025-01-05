import storage from '@/config/firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';

const convertUrlToFile = async (
  url: string,
  filename: string,
): Promise<File> => {
  const response = await fetch(url);
  const blob = await response.blob();
  return new File([blob], filename, { type: blob.type });
};

export const useFetchImagesAsFiles = (userEmail: string) => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      if (!userEmail) return;

      try {
        const folderRef = ref(storage, userEmail);
        const folderList = await listAll(folderRef);

        const imageFiles = await Promise.all(
          folderList.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return convertUrlToFile(url, item.name);
          }),
        );

        setFiles(imageFiles);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    fetchImages();
  }, [userEmail]);

  return files;
};
