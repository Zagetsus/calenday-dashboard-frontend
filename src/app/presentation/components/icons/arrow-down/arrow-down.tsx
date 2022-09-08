import { SVGProps } from 'react';

type ArrowDownProps = SVGProps<SVGSVGElement> & {
  fill?: string;
  width?: number;
  height?: number;
};

function ArrowDown({
  fill = '#222',
  width = 12,
  height = 8,
  ...rest
}: ArrowDownProps) {
  return (
    <svg
      {...rest}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 12 8'
    >
      <path
        fill={fill}
        d='M11.686.45a1.071 1.071 0 00-1.514 0L6 4.613 1.828.45A1.071 1.071 0 00.314 1.966L5.24 6.892c.419.42 1.099.42 1.518 0l4.927-4.926a1.071 1.071 0 000-1.515z'
      />
    </svg>
  );
}

export default ArrowDown;
