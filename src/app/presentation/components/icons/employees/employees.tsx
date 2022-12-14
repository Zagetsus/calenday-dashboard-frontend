import React from 'react';

interface EmployeesProps {
  fill?: string;
}

function Employees({ fill = '#919191' }: EmployeesProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='15'
      fill='none'
      viewBox='0 0 18 15'
    >
      <path
        fill={fill}
        d='M6.75 5.4a1.35 1.35 0 11-2.7 0 1.35 1.35 0 012.7 0zm-3.6 2.925a.675.675 0 01.675-.675h3.15a.675.675 0 01.675.675v.225s0 1.8-2.25 1.8-2.25-1.8-2.25-1.8v-.225zm6.3-2.812c0-.311.252-.563.563-.563h4.274a.563.563 0 010 1.125h-4.275a.563.563 0 01-.562-.563zm.563 2.587a.563.563 0 100 1.125h4.274a.562.562 0 100-1.125h-4.275zM0 1.912A1.912 1.912 0 011.913 0h14.174A1.912 1.912 0 0118 1.913v10.575a1.912 1.912 0 01-1.913 1.912H1.912A1.912 1.912 0 010 12.488V1.913zm1.913-.787a.788.788 0 00-.788.788v10.575c0 .435.353.787.788.787h14.174a.787.787 0 00.788-.787V1.913a.787.787 0 00-.788-.788H1.912z'
      />
    </svg>
  );
}

export default Employees;
