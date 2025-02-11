import { ResponseInvite } from '@/interfaces/response_invite';
import Carousel from './Carrousel';
import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { useFetchImagesAsFiles } from './useFetchImagesFromFirebase';
import ReactPlayer from 'react-player';
import { differenceInDays } from 'date-fns';
interface RenderCardWithDataProps {
  type: string;
  data: ResponseInvite;
}

function calculateDaysBetween(dateString: string): number {
  const [day, month, year] = dateString.split('/').map(Number);
  const givenDate = new Date(year, month - 1, day);

  const today = new Date();

  return Math.abs(differenceInDays(givenDate, today));
}
const RenderCardWithData: React.FC<RenderCardWithDataProps> = ({
  type,
  data,
}) => {
  const bgColor = data.bg_color;
  const card_color = data.card_color;
  const [play, setPlay] = useState(false);
  const e = data.email.slice(0, 3);
  const slug = `slug-${e}-${data.invite_type}-${data.invite_plan}-${data.names}`;
  const files = useFetchImagesAsFiles(slug);

  function handlePlayMusic() {
    setPlay((prevPlay) => !prevPlay);
  }

  let dynamicMessage = '';
  if (data.date != null) {
    switch (type) {
      case 'LOVE':
        const daysTogether = calculateDaysBetween(String(data.date));
        dynamicMessage = `Juntos há ${daysTogether} dias`;
        break;
      case 'BESTFRIENDS':
        const friendshipDays = calculateDaysBetween(String(data.date));
        dynamicMessage = `Amizade de ${friendshipDays} dias`;
        break;
      case 'BIRTHDAY':
        const daysAlive = calculateDaysBetween(String(data.date));
        dynamicMessage = `Parabéns! 🎉 Você já viveu ${daysAlive} dias incríveis!`;
        break;
      default:
        dynamicMessage = '';
    }
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
          <div className="absolute top-0 w-full text-center mt-4">
            {data.url_music && (
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={handlePlayMusic}
                  style={{ backgroundColor: card_color }}
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full  text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                  aria-label={play ? 'Pause music' : 'Play music'}
                >
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                  <div className="relative transition-transform duration-300 ease-in-out group-active:scale-90">
                    {play ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6 pl-1" />
                    )}
                  </div>
                  <span className="sr-only">{play ? 'Pause' : 'Play'}</span>
                </button>
                <ReactPlayer
                  url={data.url_music}
                  playing={play}
                  onPause={() => setPlay(false)}
                  onPlay={() => setPlay(true)}
                  width={1}
                  height={1}
                />
              </div>
            )}
          </div>
          <div className="card-container">
            <div className="card">
              <div
                className="imgBox bg-blue-500"
                style={{ backgroundColor: card_color }}
              >
                <div className="bark"></div>
                <p className="text-center text-2xl font-bold text-white">
                  {data.names ?? 'Nome do casal'}
                </p>
                <Carousel images={files} plan={data.invite_plan} />
                <p className="text-center mt-2 text-white">{dynamicMessage}</p>
              </div>
              <div className="details">
                <h4 className="color1"> {data.title}</h4>
                <h4 className="color2 margin"> {data.sub_title}</h4>
                {data.message}
              </div>
            </div>
          </div>
        </div>
      );
    case 'BESTFRIENDS':
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
          <div className="absolute top-0 w-full text-center mt-4">
            {data.url_music && (
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={handlePlayMusic}
                  style={{ backgroundColor: card_color }}
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full  text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                  aria-label={play ? 'Pause music' : 'Play music'}
                >
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                  <div className="relative transition-transform duration-300 ease-in-out group-active:scale-90">
                    {play ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6 pl-1" />
                    )}
                  </div>
                  <span className="sr-only">{play ? 'Pause' : 'Play'}</span>
                </button>
                <ReactPlayer
                  url={data.url_music}
                  playing={play}
                  onPause={() => setPlay(false)}
                  onPlay={() => setPlay(true)}
                  width={1}
                  height={1}
                />
              </div>
            )}
          </div>
          <div className="card-container">
            <div className="card">
              <div
                className="imgBox bg-blue-500"
                style={{ backgroundColor: card_color }}
              >
                <div className="bark"></div>
                <p className="text-center text-2xl font-bold text-white">
                  {data.names ?? 'Seu nome e de seu amigo(a)'}
                </p>
                <Carousel images={files} plan={data.invite_plan} />
                <p className="text-center mt-2 text-white">{dynamicMessage}</p>
              </div>
              <div className="details">
                <h4 className="color1"> {data.title}</h4>
                <h4 className="color2 margin"> {data.sub_title}</h4>
                {data.message}
              </div>
            </div>
          </div>
        </div>
      );
    case 'BIRTHDAY':
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
          <div className="absolute top-0 w-full text-center mt-4">
            {data.url_music && (
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={handlePlayMusic}
                  style={{ backgroundColor: card_color }}
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full  text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                  aria-label={play ? 'Pause music' : 'Play music'}
                >
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                  <div className="relative transition-transform duration-300 ease-in-out group-active:scale-90">
                    {play ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6 pl-1" />
                    )}
                  </div>
                  <span className="sr-only">{play ? 'Pause' : 'Play'}</span>
                </button>
                <ReactPlayer
                  url={data.url_music}
                  playing={play}
                  onPause={() => setPlay(false)}
                  onPlay={() => setPlay(true)}
                  width={1}
                  height={1}
                />
              </div>
            )}
          </div>
          <div className="card-container">
            <div className="card">
              <div
                className="imgBox bg-blue-500"
                style={{ backgroundColor: card_color }}
              >
                <div className="bark"></div>
                <p className="text-center text-2xl font-bold text-white">
                  {data.names ?? 'Nome do aniversariante'}
                </p>
                <Carousel images={files} plan={data.invite_plan} />
                <p className="text-center mt-2 text-white">{dynamicMessage}</p>
              </div>
              <div className="details">
                <h4 className="color1"> {data.title}</h4>
                <h4 className="color2 margin"> {data.sub_title}</h4>
                {data.message}
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return 'a';
  }
};
export default RenderCardWithData;
