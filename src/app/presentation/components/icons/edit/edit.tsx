import React from 'react';

interface EditProps {
  fill?: string;
  size?: number;
}

function Edit({ fill = '#000000', size = 24 }: EditProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        fill={fill}
        fillRule='evenodd'
        d='M19 3.171a1.829 1.829 0 00-1.293.536L4.395 17.019l-.97 3.556 3.556-.97L20.293 6.293A1.829 1.829 0 0019 3.17zm-1.465-1.708a3.829 3.829 0 014.172 6.244l-13.5 13.5a1 1 0 01-.444.258l-5.5 1.5a1 1 0 01-1.228-1.228l1.5-5.5a1 1 0 01.258-.444l13.5-13.5a3.829 3.829 0 011.242-.83z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export default Edit;
