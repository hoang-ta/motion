'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './styles.css';

export default function Example() {
  const [showSecond, setShowSecond] = useState(false);
  const duration = 2;
  return (
    <div className='wrapper'>
      <motion.button
        layout
        className='button'
        onClick={() => setShowSecond((s) => !s)}
      >
        Animate
      </motion.button>
      <motion.div
        layout
        className={
          showSecond ? 'second-element' : 'element'
        }
        transition={{ duration }}
        style={{ borderRadius: '12px' }}
      />
    </div>
  );
}
