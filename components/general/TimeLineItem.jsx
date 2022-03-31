export function TimeLineItem({ title, points, link }) {
  return (
    <>
      <a
        href={link}
        className={`font-medium text-black text-lg ${
          link ? 'cursor-pointer' : 'cursor-not-allowed'
        } `}
      >
        {title}
      </a>
      <ul className="text-gray-800">
        {points?.map((point, index) => (
          <li key={index} className="list-decimal">
            {point}{' '}
          </li>
        ))}
      </ul>
    </>
  );
}
