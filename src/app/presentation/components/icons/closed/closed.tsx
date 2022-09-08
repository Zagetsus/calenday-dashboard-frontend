import React from 'react';

export interface ClosedProps {
  fill?: string;
}

function Closed({ fill = '#B1B1B1' }: ClosedProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='28'
      fill='none'
      viewBox='0 0 24 28'
    >
      <path
        fill={fill}
        d='M22.936 3.214l-1.008-1.11a1.403 1.403 0 00-2.118 0L1.085 22.727c-.585.645-.585 1.69 0 2.334l1.007 1.11a1.403 1.403 0 002.12 0L22.935 5.547c.585-.645.585-1.69 0-2.334z'
      />
      <path
        fill={fill}
        d='M21.93 26.135l1.01-1.108c.585-.643.585-1.687 0-2.33L4.19 2.102a1.407 1.407 0 00-2.12 0L1.06 3.21c-.585.644-.585 1.687 0 2.33l18.75 20.595a1.407 1.407 0 002.12 0z'
      />
    </svg>
  );
}

export default Closed;
