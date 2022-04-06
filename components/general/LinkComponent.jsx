import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function LinkComponent(props) {
  const route = useRouter();
  return (
    <Link href={props.href}>
      <button
        onClick={props.onClick}
        className={` lg:mx-4 text-lg font-semibold    my-6 lg:my-0  ${
          route.pathname == props.href ? 'text-gray-500' : 'text-black'
        } `}
      >
        {props.title ? props.title : props.children}
      </button>
    </Link>
  );
}

export default LinkComponent;
