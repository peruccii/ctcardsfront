import React, { ReactNode } from 'react';

type CardProps = {
  bgColor: string;
  cardColor: string;
  children: ReactNode;
};

const CardTemplate = ({ children, bgColor, cardColor }: CardProps) => {
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
      <div className="card-container">
        <div className="card">
          <div
            className="imgBox bg-blue-500"
            style={{ backgroundColor: cardColor }}
          >
            <div className="bark"></div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
