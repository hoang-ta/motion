'use client';

import {
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';

export default function Example() {
  const y = useMotionValue(0);
  const yRange = [0, 100];
  const opacityRange = [1, 0];
  const opacity = useTransform(y, yRange, opacityRange);

  return (
    <div className='h-[500px]'>
      <motion.div
        style={{ y, opacity }}
        onPan={(e, info) => y.set(e.clientY)}
        onPanEnd={() => y.set(0)}
        className='h-10 w-10 cursor-grab rounded-full bg-gray-400'
      />
    </div>
  );
}
