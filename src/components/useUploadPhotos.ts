import { useState } from 'react';

export default function useUploadPhotos() {
  const [files, setFiles] = useState<File[] | null>([]);

  return { files, setFiles };
}
