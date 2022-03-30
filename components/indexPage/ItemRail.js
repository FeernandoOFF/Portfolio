import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ButtonComponent } from '../general/ButtonComponent';
import { PortfolioItem } from './PortfolioItem';

export function ItemRail() {
  function handleScroll() {
    console.log('Scroll');
  }

  function nextPage(i) {
    console.log('nextPage', i);
    setVisible(projects.slice(i - 2, i + 2));
  }

  const reelRef = useRef(null);
  let projects = [
    'Dana Lite',
    'Spotify Clone',
    'Zoom Clone',
    'Todo App +',
    'Trip Advisor 1',
    'Trip Advisor 2',
    'Trip Advisor 3',
    'Trip Advisor 4',
    'Trip Advisor 5',
  ];
  const [visible, setVisible] = useState(projects.slice(0, 5));

  // useEffect(() => {
  //   reelRef.current?.addEventListener('scroll', handleScroll);
  //   return () => {
  //     reelRef.current?.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <div
        ref={reelRef}
        className="font-mono flex flex-row flex-nowrap items-center justify-between overflow-x-hidden mt-32 mb-28 py-2"
      >
        {visible.map((project, index) => (
          <PortfolioItem
            key={project}
            onClick={nextPage}
            index={index}
            title={project}
            active={index == 2}
          />
        ))}
      </div>
      <ButtonComponent href="/projects" className="mb-32" primary>
        See My work
      </ButtonComponent>
    </div>
  );
}
