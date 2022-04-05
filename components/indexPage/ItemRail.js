import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ButtonComponent } from '../general/ButtonComponent';
import { PortfolioItem } from './PortfolioItem';

export function ItemRail({ projects }) {
  function nextPage(i) {
    setVisible(projects.slice(i - 2, i + 2));
  }

  const reelRef = useRef(null);
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
        {projects.map((project, index) => (
          <PortfolioItem
            key={project.name}
            // onClick={nextPage}
            index={index}
            project={project}
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
