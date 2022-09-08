import {
  Box,
  MenuItem,
  Select,
  Typography
} from '~/app/presentation/components';
import { ArrowDownIcon } from '~/app/presentation/components/icons';
import { SelectProps } from '~/app/presentation/components/interfaces';
import makeStyles from './select-styles';

function SelectComponent({
  valueDisabledDefault,
  options,
  ...props
}: SelectProps) {
  function handleShowDefaultMenuItem() {
    if (valueDisabledDefault) {
      return (
        <MenuItem value='none' disabled>
          {valueDisabledDefault}
        </MenuItem>
      );
    }
  }

  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>{props.label}</Typography>

      <Box className={classes.selectBox}>
        <Select
          {...props}
          IconComponent={ArrowDownIcon}
          data-testid='select'
          disableUnderline
          variant='standard'
        >
          {handleShowDefaultMenuItem()}

          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
}

export default SelectComponent;
