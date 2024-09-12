'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import './styles.css';

export default function Example() {
  const [showExtraContent, setShowExtraContent] =
    useState(false);
  const ref = useRef(null);
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // console.log(
        //   entry,
        //   entry.contentBoxSize,
        //   entry.contentBoxSize[0].blockSize,
        // );
        setHeight(entry.borderBoxSize[0].blockSize);
      }
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  //   console.log(height);
  return (
    <div className='wrapper'>
      <button
        className='button'
        onClick={() => setShowExtraContent((b) => !b)}
      >
        Toggle height
      </button>
      <motion.div
        animate={{ height }}
        style={{ height }}
        className='element'
      >
        <div className='inner' ref={ref}>
          <h1>Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height
            is tricky, but satisfying when it works.
          </p>
          <AnimatePresence>
            {showExtraContent ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.1,
                  },
                }}
              >
                This extra content will change the height of
                the drawer. Some even more content to make
                the drawer taller and taller and taller...
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
