import React from 'react';

export interface InventoryProps {
  fill?: string;
}

function Inventory({ fill = '#919191' }: InventoryProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      fill='none'
      viewBox='0 0 18 18'
    >
      <path
        fill={fill}
        d='M16.2 0H1.8C.9 0 0 .81 0 1.8v2.709c0 .648.387 1.206.9 1.521V16.2c0 .99.99 1.8 1.8 1.8h12.6c.81 0 1.8-.81 1.8-1.8V6.03c.513-.315.9-.873.9-1.521V1.8c0-.99-.9-1.8-1.8-1.8zm-.9 16.2H2.7V6.3h12.6v9.9zm.9-11.7H1.8V1.8h14.4v2.7z'
      />
      <path fill={fill} d='M6.3 9h5.4v1H6.3V9z' />
    </svg>
  );
}

export default Inventory;
