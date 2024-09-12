'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function DragExample() {
  const boundingBox = useRef(null);

  return (
    <div ref={boundingBox} className='h-64 w-full p-6'>
      <motion.div
        drag
        // this prevents the element from being dragged outside of the bounding box
        dragConstraints={boundingBox}
        // dragMomentum={false}
        className='h-10 w-10 rounded-full bg-gray-400'
      />
    </div>
  );
}
