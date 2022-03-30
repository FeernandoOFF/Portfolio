import { Link } from 'next/link';

export function ItemRail() {
  let projects = [
    'Dana Lite',
    'Spotify Clone',
    'Zoom Clone',
    'Todo App +',
    'Trip Advisor',
  ];

  return (
    <div>
      <div className="reel font-mono flex flex-row flex-nowrap items-center mx-auto justify-between overflow-x-scroll mt-32 mb-28 cursor-pointer py-2">
        {projects.map((title, i) => {
          return <div key={i}>{title}</div>;
        })}
      </div>
      <Link passHref={true} href="/">
        <button className="mx-auto bg-cYellow px-4 py-3 rounded-md inline-block text-white font-semibold mb-32 text-lg cursor-pointer">
          See My work
        </button>
      </Link>
    </div>
  );
}
/* <PortfolioItem
              key={title}
              onClick={setActive}
              index={i}
              title={title}
              active={active == i}
            ></PortfolioItem> */
