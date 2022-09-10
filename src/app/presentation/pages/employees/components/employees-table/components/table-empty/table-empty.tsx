import { Box, ButtonTag, Typography } from '~/app/presentation/components';
import { AddEmployeeIcon } from '~/app/presentation/components/icons';
import makeStyles from './table-empty-styles';

function TableEmptyComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <AddEmployeeIcon />

      <Box className={classes.textBox}>
        <Typography>NÃO HÁ FUNCIONÁRIOS CADASTRADOS </Typography>
        <ButtonTag>Cadastrar funcionário</ButtonTag>
      </Box>
    </Box>
  );
}

export default TableEmptyComponent;
