export const removeFromMessageData = (searchTerm: string) => {
  const storedData = localStorage.getItem('messageData');

  if (!storedData) {
    console.log("Nenhum dado encontrado em 'messageData'.");
    return;
  }

  const parsedData = JSON.parse(storedData);

  // Verifica se `imageUrls` existe e é um array válido
  if (parsedData.image_urls) {
    const imageArray = JSON.parse(parsedData.image_urls);

    if (Array.isArray(imageArray)) {
      // Filtra os itens que NÃO incluem o `searchTerm`
      const updatedArray = imageArray.filter(
        (item: string) => !item.includes(searchTerm),
      );

      // Atualiza os dados no localStorage somente se algo foi alterado
      if (updatedArray.length !== imageArray.length) {
        parsedData.image_urls = JSON.stringify(updatedArray);
        localStorage.setItem('messageData', JSON.stringify(parsedData));
        console.log(`Itens contendo '${searchTerm}' foram removidos.`);
      } else {
        console.log(`Nenhum item contendo '${searchTerm}' foi encontrado.`);
      }
    } else {
      console.log("'imageUrls' não é um array válido.");
    }
  } else {
    console.log("'imageUrls' não está presente ou está vazio.");
  }
};
