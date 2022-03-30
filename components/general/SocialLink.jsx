import Link from 'next/link';

export function SocialLink({ children, href }) {
  return (
    <Link href={href || '/'}>
      <div className="w-14 h-14 bg-lightGreen rounded-md shadow-lg flex items-center justify-center">
        {/* <div > */}
        {children}
        {/* </div> */}
      </div>
    </Link>
  );
}
