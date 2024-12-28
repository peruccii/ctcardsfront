export const renderCard = (type: string) => {
  switch (type) {
    case 'LOVE':
      return (
        <div className="w-full md:w-1/2 bg-[#fffff] border-2 border-b-neutral-800 h-[800px] rounded-lg flex items-center justify-center relative overflow-hidden">
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
              box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.5),
                20px 0 60px rgba(0, 0, 0, 0.5);
              transition: 1s;
            }

            .card:hover {
              transform: rotate(15deg) scale(1.2);
              box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.5),
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
              max-height: 400px;
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
              padding: 10px; /* Aumenta o padding para criar espaço em torno do texto */
              z-index: -1;
              margin-top: 70px;
            }

            .card .details p {
              font-size: 15px;
              line-height: 1; /* Ajuste o espaçamento entre as linhas */
              padding: 5px 0; /* Adiciona padding para espaçar as linhas */
              text-align: left; /* Alinha o texto à esquerda para uma melhor leitura */
            }

            .card .details h4 {
              text-align: center;
              font-family: 'Amatic SC', cursive;
              font-size: 26px;
              line-height: 1.2; /* Ajuste o espaçamento entre as linhas */
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
              <div className="imgBox bg-red-500">
                <div className="bark"></div>
              </div>
              <div className="details">
                <h4 className="color1">Youre not a Fossil! (YET)</h4>
                <h4 className="color2 margin">(HAPPY BIRTHDAY)</h4>
                <p>Dear Dad,</p>
                <p>Lets see.. .</p>
                <p>Youre never around, you</p>
                <p>hate the music Im into, you</p>
                <p>practically despise the movies I</p>
                <p>like, and yet somehow you still</p>
                <p>manage to be the best dad every year.</p>
                <p>How do you do that? :)</p>
                <p className="text-right">Happy Birthday, papa!</p>
                <p className="text-right">♥Sarah</p>
              </div>
            </div>
          </div>
        </div>
      );
    case 'BESTFRIENDS':
      return (
        <div className="w-full md:w-1/2 bg-[#fffff] border-2 border-b-neutral-800 h-[800px] rounded-lg flex items-center justify-center relative overflow-hidden">
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
              box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.5),
                20px 0 60px rgba(0, 0, 0, 0.5);
              transition: 1s;
            }

            .card:hover {
              transform: rotate(15deg) scale(1.2);
              box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.5),
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
              max-height: 400px;
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
              padding: 10px; /* Aumenta o padding para criar espaço em torno do texto */
              z-index: -1;
              margin-top: 70px;
            }

            .card .details p {
              font-size: 15px;
              line-height: 1; /* Ajuste o espaçamento entre as linhas */
              padding: 5px 0; /* Adiciona padding para espaçar as linhas */
              text-align: left; /* Alinha o texto à esquerda para uma melhor leitura */
            }

            .card .details h4 {
              text-align: center;
              font-family: 'Amatic SC', cursive;
              font-size: 26px;
              line-height: 1.2; /* Ajuste o espaçamento entre as linhas */
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
              <div className="imgBox bg-blue-500">
                <div className="bark"></div>
              </div>
              <div className="details">
                <h4 className="color1">Youre not a Fossil! (YET)</h4>
                <h4 className="color2 margin">(HAPPY BIRTHDAY)</h4>
                <p>Dear Dad,</p>
                <p>Lets see.. .</p>
                <p>Youre never around, you</p>
                <p>hate the music Im into, you</p>
                <p>practically despise the movies I</p>
                <p>like, and yet somehow you still</p>
                <p>manage to be the best dad every year.</p>
                <p>How do you do that? :)</p>
                <p className="text-right">Happy Birthday, papa!</p>
                <p className="text-right">♥Sarah</p>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return '';
  }
};
