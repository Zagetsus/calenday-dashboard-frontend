import React from 'react';

interface CustomerProps {
  fill?: string;
}

function Customer({ fill = '#919191' }: CustomerProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='12'
      fill='none'
      viewBox='0 0 18 12'
    >
      <path
        fill={fill}
        d='M8.454 8.182a4.463 4.463 0 10-4.94 0 7.105 7.105 0 00-3.37 2.596.595.595 0 10.968.684 5.958 5.958 0 019.745 0 .594.594 0 001.107-.223.597.597 0 00-.14-.461 7.104 7.104 0 00-3.37-2.596zM2.711 4.469a3.273 3.273 0 116.547 0 3.273 3.273 0 01-6.547 0zm15.035 7.135a.59.59 0 01-.826-.142 5.967 5.967 0 00-4.873-2.53.595.595 0 010-1.19 3.273 3.273 0 10-.885-6.427.595.595 0 01-.736-.41.603.603 0 01.409-.736 4.762 4.762 0 011.212-.163 4.456 4.456 0 012.47 8.176 7.164 7.164 0 013.378 2.596.596.596 0 01-.15.826z'
      />
    </svg>
  );
}

export default Customer;
