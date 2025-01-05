import { ResponseInvite } from '@/interfaces/response_invite';
// import ReactPlayer from 'react-player';
import Carousel from './Carrousel';
// import { useState } from 'react';
// import { Pause, Play } from 'lucide-react';
import CardTemplate from './CardTemplate';
import {
  useFetchImagesAsFiles,
  useFetchImagesAsUrls,
} from './useFetchImagesFromFirebase';

export const RenderCardWithData = (type: string, data: ResponseInvite) => {
  const bgColor = data.bg_color;
  const card_color = data.card_color;
  // const [play, setPlay] = useState(false);
  const { imageUrls, isLoading } = useFetchImagesAsUrls(data.email);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  switch (type) {
    case 'LOVE':
      return (
        <div
          style={{ backgroundColor: String(bgColor), height: '100vh' }}
          className="w-full flex items-center justify-center  overflow-hidden"
        >
          <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Indie+Flower');
            @import url('https://fonts.googleapis.com/css?family=Amatic+SC');

            .card-container {
              font-family: 'Indie Flower', cursive;
              perspective: 2000px;
              width: 300px;
              height: 400px;
            }

            .card {
              color: #013243;
              width: 100%;
              height: 100%;
              background: #e0e1dc;
              transform-style: preserve-3d;
              transform: translate(0, 0) perspective(2000px);
              box-shadow:
                inset 300px 0 50px rgba(0, 0, 0, 0.5),
                20px 0 60px rgba(0, 0, 0, 0.5);
              transition: 1s;
            }

            .card:hover {
              transform: rotate(15deg) scale(1.2);
              box-shadow:
                inset 20px 0 50px rgba(0, 0, 0, 0.5),
                0 10px 100px rgba(0, 0, 0, 0.5);
            }

            .card:before {
              content: '';
              position: absolute;
              top: -5px;
              left: 0;
              width: 100%;
              height: 5px;
              background: #bac1ba;
              transform-origin: bottom;
              transform: skewX(-45deg);
            }

            .card:after {
              content: '';
              position: absolute;
              top: 0;
              right: -5px;
              width: 5px;
              height: 100%;
              background: #92a29c;
              transform-origin: left;
              transform: skewY(-45deg);
            }

            .card .imgBox {
              width: 100%;
              height: 100%;
              position: relative;
              transform-origin: left;
              transition: 0.7s;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            .card .bark {
              position: absolute;
              background: #e0e1dc;
              width: 100%;
              height: 100%;
              opacity: 0;
              transition: 0.7s;
            }

            .card .imgBox img {
              min-width: 250px;
              max-height: 200px; /* Ajusta a altura da imagem */
              margin-bottom: 10px; /* Espaçamento entre imagem e data */
            }

            .card:hover .imgBox {
              transform: rotateY(-135deg);
            }

            .card:hover .bark {
              opacity: 1;
              transition: 0.6s;
              box-shadow: 300px 200px 100px rgba(0, 0, 0, 0.4) inset;
            }

            .card .details {
              position: absolute;
              top: 0;
              left: 0;
              box-sizing: border-box;
              padding: 10px;
              z-index: -1;
              margin-top: 70px;
            }

            .card .details p {
              font-size: 15px;
              line-height: 1;
              padding: 5px 0;
              text-align: left;
            }

            .image {
              width: 250px; /* Largura fixa para todas as imagens */
              height: 200px; /* Altura fixa para todas as imagens */
              object-fit: cover; /* Garante que a imagem se ajuste ao tamanho sem distorcer */
              margin-bottom: 10px; /* Espaço entre a imagem e o texto */
            }

            .card .details h4 {
              text-align: center;
              font-family: 'Amatic SC', cursive;
              font-size: 26px;
              line-height: 1.2;
            }

            .text-right {
              text-align: right;
            }

            .color1 {
              color: #1bbc9b;
            }

            .color2 {
              color: #c0392b;
            }
          `}</style>
          <div className="card-container">
            <div className="card">
              <div
                className="imgBox bg-blue-500"
                style={{ backgroundColor: card_color }}
              >
                <div className="bark"></div>
                <p className="text-center text-1xl text-white">{data.names}</p>
                <Carousel images={imageUrls} />
                <p className="text-center text-white">Data: </p>
              </div>
              <div className="details">
                <h4 className="color1"> {data.title}</h4>
                <h4 className="color2 margin"> {data.sub_title}</h4>
                {data.message}
                <p className="text-right">Happy Birthday, papa!</p>
                <p className="text-right">♥ Eu te amo</p>
              </div>
            </div>
          </div>
        </div>
      );
    case 'BESTFRIENDS':
      return (
        <CardTemplate bgColor={bgColor} cardColor={card_color}>
          <p className="text-center text-1xl text-white">{data.names}</p>
          {/* <Carousel images={files} /> */}
          <p className="text-center text-white">Data: </p>
          <div className="details">
            <h4 className="color1"> {data.title}</h4>
            <h4 className="color2 margin"> {data.sub_title}</h4>
            {data.message}
            <p className="text-right">Amizade</p>
            <p className="text-right">♥ Eu te amo</p>
          </div>
        </CardTemplate>
      );
    case 'BIRTHDAY':
      return (
        <CardTemplate bgColor={bgColor} cardColor={card_color}>
          <p className="text-center text-1xl text-white">{data.names}</p>
          {/* <Carousel images={files} /> */}
          <p className="text-center text-white">Data: </p>

          <div className="details">
            <h4 className="color1"> {data.title}</h4>
            <h4 className="color2 margin"> {data.sub_title}</h4>
            {data.message}
            <p className="text-right">Happy Birthday, papa!</p>
            <p className="text-right">♥ Eu te amo</p>
          </div>
        </CardTemplate>
      );
    default:
      return 'a';
  }
};
