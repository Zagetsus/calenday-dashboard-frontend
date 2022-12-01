import { render } from '@testing-library/react';
import { SchedulingCreateModalTag } from '~/app/presentation/components';
import { SchedulingCreateModalProps } from '~/app/presentation/pages/scheduling/interfaces';

const makeSut = (props: SchedulingCreateModalProps) => {
  return render(<SchedulingCreateModalTag {...props} />);
};

describe('Scheduling create modal component', () => {
  const closeFn = jest.fn();
  it('should have modal', () => {
    const { getByTestId } = makeSut({
      open: true,
      handleClose: closeFn()
    });
    const modal = getByTestId('scheduling-create-modal');
    expect(modal).toBeInTheDocument();
  });
});
