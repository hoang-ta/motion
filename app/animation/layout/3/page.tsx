import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function Example() {
  const [showExtraContent, setShowExtraContent] =
    useState(false);

  return (
    <div className='wrapper'>
      <button
        className='button'
        onClick={() => setShowExtraContent((b) => !b)}
      >
        Toggle height
      </button>
      <div className='element'>
        <div className='inner'>
          <h1>Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height
            is tricky, but satisfying when it works.
          </p>
          {showExtraContent ? (
            <p>
              This extra content will change the height of
              the drawer. Some even more content to make the
              drawer taller and taller and taller...
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
