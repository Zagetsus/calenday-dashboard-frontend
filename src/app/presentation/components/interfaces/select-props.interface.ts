import { SelectChangeEventProps } from '~/app/presentation/components';

type SelectOption = {
  label: string;
  value: string;
};
export interface SelectProps {
  label: string;
  options: SelectOption[];
  variant?: 'standard' | 'outlined' | 'filled';
  IconComponent?: React.ElementType;
  value?: string;
  valueDisabledDefault?: string;
  fullWidth?: boolean;
  name?: string;
  onChange?: (event: SelectChangeEventProps) => void;
}
