import Link from 'next/link';

export function ButtonComponent({ primary, children, href }) {
  if (primary) {
    return (
      <Link href={href ? href : '/'}>
        <button className="text-white font-semibold lg:px-8 px-4 py-3 rounded-lg bg-cYellow mr-6 lg:mr-14 shadow-md">
          {children}
        </button>
      </Link>
    );
  }

  return (
    <Link href={href}>
      <button className="font-semibold lg:px-8 px-4 py-3 rounded-lg bg-lightGreen text-black">
        {children}
      </button>
    </Link>
  );
}
