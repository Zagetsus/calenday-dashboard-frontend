import React from 'react';

export interface AddEmployeeProps {
  fill?: string;
}

function AddEmployee({ fill = '#DEDEDE' }: AddEmployeeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='79'
      height='110'
      fill='none'
      viewBox='0 0 79 110'
    >
      <path
        fill={fill}
        fillRule='evenodd'
        d='M62.75 70.5H55V86H39.5v7.75H55v15.5h7.75v-15.5h15.5V86h-15.5V70.5zM28.309 9.81a7.752 7.752 0 10-8.618 12.889 7.752 7.752 0 008.618-12.89zm-12.92-6.448a15.5 15.5 0 1117.213 25.776A15.5 15.5 0 0115.398 3.362h-.008zm-.921 32.185h19.064A13.717 13.717 0 0147.25 49.266V55H39.5v-5.735a5.89 5.89 0 00-5.968-5.968H14.468A5.89 5.89 0 008.5 49.266V70.5h7.75v25.653a1.55 1.55 0 001.55 1.55H24v7.904h-6.2a9.3 9.3 0 01-9.3-9.3V78.25a8.215 8.215 0 01-7.75-8.525v-20.46a13.718 13.718 0 0113.717-13.718z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export default AddEmployee;
