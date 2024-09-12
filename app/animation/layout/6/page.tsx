'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './styles.css';
import { useOnClickOutside } from 'usehooks-ts';

function Card({ card, setActiveCard }) {
  return (
    <div
      className='card'
      onClick={() => setActiveCard(card)}
      style={{ borderRadius: 20 }}
    >
      <img
        src={card.image}
        alt='image'
        style={{ borderRadius: 20 }}
      />
      <button
        aria-hidden
        tabIndex={-1}
        className='close-button'
        style={{ opacity: 0 }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          height='20'
          width='20'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18 18 6M6 6l12 12'
          />
        </svg>
      </button>
      <div className='card-content'>
        <div className='card-text'>
          <h2 className='card-heading'>Game of the day</h2>
        </div>
        <div
          className='extra-info'
          style={{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <img
            src={card.logo}
            width={40}
            height={40}
            alt='play'
            className='rounded-lg'
          />
          <div className='desc-wrapper'>
            <span className='game-title'>{card.title}</span>
            <span className='game-subtitle'>
              {card.description}
            </span>
          </div>
          <button className='get-button'>Get</button>
        </div>
      </div>

      <div
        className='long-description'
        style={{
          position: 'absolute',
          top: '100%',
          opacity: 0,
        }}
      >
        <div>
          <p>
            <b>Are you ready?</b> {card.longDescription}
          </p>
          <p>
            <b>The never ending adventure</b>
            In this game set in a fairy tale world, players
            embark on a quest through mystical lands filled
            with enchanting forests and towering mountains.
          </p>
        </div>
      </div>
    </div>
  );
}

function ActiveCard({ activeCard, setActiveCard }) {
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveCard(null));

  return (
    <div
      ref={ref}
      className='card card-active'
      style={{ borderRadius: 0 }}
    >
      <div className='card-inner'>
        <img
          src={activeCard.image}
          alt='image'
          style={{ borderRadius: 0 }}
        />
        <button
          className='close-button'
          aria-label='Close button'
          onClick={() => setActiveCard(null)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            height='20'
            width='20'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18 18 6M6 6l12 12'
            />
          </svg>
        </button>
        <div className='card-content active-card-content'>
          <div className='card-text'>
            <h2 className='card-heading'>
              Game of the day
            </h2>
          </div>
          <div
            className='extra-info'
            style={{
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            <img
              src={activeCard.logo}
              width={40}
              height={40}
              alt='play'
              className='rounded-lg'
            />
            <div className='desc-wrapper'>
              <span className='game-title'>
                {activeCard.title}
              </span>
              <span className='game-subtitle'>
                {activeCard.description}
              </span>
            </div>
            <button className='get-button'>Get</button>
          </div>
        </div>
      </div>

      <div className='long-description'>
        <p>
          <b>Are you ready?</b> {activeCard.longDescription}
        </p>
        <p>
          <b>The never ending adventure </b>
          In this game set in a fairy tale world, players
          embark on a quest through mystical lands filled
          with enchanting forests and towering mountains.
          Players can explore the world, build their own
          viking
        </p>
      </div>
    </div>
  );
}

export default function StyledWithoutDrag() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setActiveCard(null);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () =>
      window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className='cards-wrapper'>
      {CARDS.map((card) => (
        <Card
          key={card.title}
          card={card}
          setActiveCard={setActiveCard}
        />
      ))}
      <AnimatePresence>
        {activeCard ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='overlay'
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeCard ? (
          <ActiveCard
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

const CARDS = [
  {
    title: 'Vikings',
    subtitle: 'Clash of the Norse Warriors',
    description: 'A game about vikings',
    longDescription:
      'A game about vikings, where you can play as a viking and fight other vikings. You can also build your own viking village and explore the world.',
    image:
      'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game.webp',
    logo: 'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game-logo.webp',
  },
];
