interface SchedulingProps {
  fill?: string;
  size?: number;
}

function Scheduling({ fill = '#919191', size = 22 }: SchedulingProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 22 22'
    >
      <path
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M17 3H5a4 4 0 00-4 4v10a4 4 0 004 4h12a4 4 0 004-4V7a4 4 0 00-4-4zM1 9h20M7 1v4-4zm8 0v4-4z'
      />
    </svg>
  );
}

export default Scheduling;
