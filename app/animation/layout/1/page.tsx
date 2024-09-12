'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './styles.css';

export default function Example() {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div className='wrapper'>
      <button
        className='button'
        onClick={() => setShowSecond((s) => !s)}
      >
        Animate
      </button>
      {showSecond ? (
        <div className='second-element' />
      ) : (
        <div className='element' />
      )}
    </div>
  );
}
