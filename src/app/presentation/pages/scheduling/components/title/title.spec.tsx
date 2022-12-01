import { render, screen } from '@testing-library/react';
import { TitleTag } from '~/app/presentation/pages/scheduling/components';
import { TitleProps } from '~/app/presentation/pages/scheduling/interfaces';

const makeSut = (props: TitleProps = {}) => {
  return render(<TitleTag {...props} />);
};

describe('Title Component', () => {
  it('should have title', () => {
    makeSut({ children: 'Titulo' });

    const titleValue = screen.getByText('Titulo');
    expect(titleValue).toBeTruthy();
  });
});
