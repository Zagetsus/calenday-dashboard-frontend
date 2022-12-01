import { render, screen } from '@testing-library/react';
import { SelectTag } from '~/app/presentation/components';
import { SelectProps } from '~/app/presentation/components/interfaces';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' }
];

const makeSut = (
  props: SelectProps = {
    label: 'Test Select',
    options,
    value: '1'
  }
) => {
  return render(<SelectTag {...props} />);
};

describe('Select Component', () => {
  test('should have select', () => {
    makeSut();
    const select = screen.getByTestId('select');
    expect(select).toBeInTheDocument();
  });

  test('should have select with option 1 selected', () => {
    makeSut({ label: '', options, value: '1' });
    const select = screen.getByTestId('select');
    expect(select).toHaveTextContent('Option 1');
  });

  test('should have select with option 2 selected', () => {
    makeSut({ label: '', options, value: '2' });
    const select = screen.getByTestId('select');
    expect(select).toHaveTextContent('Option 2');
  });

  test('should have select with option value disabled', () => {
    makeSut({
      label: '',
      options,
      value: '2',
      valueDisabledDefault: '2'
    });
    const select = screen.getByTestId('select');
    expect(select).toHaveTextContent('Option 2');
  });
});
