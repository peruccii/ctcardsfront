import { useState } from 'react';
import Carousel from './Carrousel';
import { useMessage } from './MessageContext';
import ReactPlayer from 'react-player';
import { Pause, Play } from 'lucide-react';
import { differenceInDays } from 'date-fns';

function calculateDaysBetween(dateString: string): number {
  const today = new Date();
  return differenceInDays(dateString, today);
}

const RenderCard = (
  type: string,
  params: URLSearchParams,
  files: File[] | null,
) => {
  const { data } = useMessage();
  const bgColor = params.get('bg');
  const [play, setPlay] = useState(false);

  function handlePlayMusic() {
    setPlay((prevPlay) => !prevPlay);
  }

  let dynamicMessage = '';
  const date = params.get('date');
  if (date) {
    switch (type) {
      case 'LOVE':
        const daysTogether = calculateDaysBetween(date);
        dynamicMessage = `Juntos há ${daysTogether} dias`;
        break;
      case 'BESTFRIENDS':
        const friendshipDays = calculateDaysBetween(date);
        dynamicMessage = `Amizade de ${friendshipDays} dias`;
        break;
      case 'BIRTHDAY':
        const daysAlive = calculateDaysBetween(date);
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
          style={{ backgroundColor: String(bgColor) }}
          className="w-full md:w-1/1  border-2 border-b-neutral-800 h-[800px] rounded-lg flex items-center justify-center relative overflow-hidden"
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
            <h3 className="text-2xl font-bold text-gray-700">
              Como ficará seu cartão 👇
            </h3>
            {data.url_music && (
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={handlePlayMusic}
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-orange-400 to-red-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
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
                className="imgBox bg-red-500"
                style={{ backgroundColor: String(params.get('card_color')!) }}
              >
                <div className="bark"></div>
                <p className="text-center text-2xl font-bold text-white">
                  {params.get('names') ?? 'Adicione os nomes aqui'}
                </p>
                {/* Imagem */}
                <Carousel images={files} />
                {/* Data */}
                <p className="text-center text-white">{dynamicMessage}</p>
              </div>
              <div className="details">
                <h4 className="color1"> {data.title ?? 'Título'}</h4>
                <h4 className="color2 margin">
                  {' '}
                  {data.sub_title ?? 'Sub Título'}
                </h4>
                {data.message ?? 'Sua mensagem'}
              </div>
            </div>
          </div>
        </div>
      );
    case 'BESTFRIENDS':
      return (
        <div
          style={{ backgroundColor: String(bgColor) }}
          className="w-full md:w-1/1 bg-[#fffff] border-2 border-b-neutral-800 h-[800px] rounded-lg flex items-center justify-center relative overflow-hidden"
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
              max-height: 200px;
              margin-bottom: 10px;
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
            <h3 className="text-2xl font-bold text-gray-700">
              Como ficará seu cartão 👇
            </h3>
            {data.url_music && (
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={handlePlayMusic}
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-orange-400 to-red-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
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
                style={{ backgroundColor: params.get('card_color')! }}
              >
                <div className="bark"></div>
                <p className="text-center font-bold text-2xl text-white">
                  {params.get('names') ?? 'Adicione os nomes aqui'}
                </p>
                <Carousel images={files} />
                <p className="text-center text-white">{dynamicMessage}</p>
              </div>
              <div className="details">
                <h4 className="color1"> {data.title ?? 'Título'}</h4>
                <h4 className="color2 margin">
                  {' '}
                  {data.sub_title ?? 'Sub Título'}
                </h4>
                {data.message ?? 'Sua mensagem'}
              </div>
            </div>
          </div>
        </div>
      );
    case 'BIRTHDAY':
      return (
        <div
          style={{ backgroundColor: String(bgColor) }}
          className="w-full md:w-1/1 bg-[#fffff] border-2 border-b-neutral-800 h-[800px] rounded-lg flex items-center justify-center relative overflow-hidden"
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
              max-height: 200px;
              margin-bottom: 10px;
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
            <h3 className="text-2xl font-bold text-gray-700">
              Como ficará seu cartão 👇
            </h3>
            {data.url_music && (
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={handlePlayMusic}
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-orange-400 to-red-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
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
                className="imgBox bg-yellow-500"
                style={{ backgroundColor: params.get('card_color')! }}
              >
                <div className="bark"></div>
                <p className="text-center text-2xl text-white">
                  {params.get('names') ?? 'Adicione os nomes aqui'}
                </p>
                <Carousel images={files} />
                <p className="text-center text-white">{dynamicMessage}</p>
              </div>
              <div className="details">
                <h4 className="color1"> {data.title ?? 'Título'}</h4>
                <h4 className="color2 margin">
                  {' '}
                  {data.sub_title ?? 'Sub Título'}
                </h4>
                {data.message ?? 'Sua mensagem'}
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return '';
  }
};

export default RenderCard;
