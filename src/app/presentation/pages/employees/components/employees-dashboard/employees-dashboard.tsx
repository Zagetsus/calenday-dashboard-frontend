import { Box, ButtonTag, Typography } from '~/app/presentation/components';
import { EmployeesDashboardProps } from '~/app/presentation/pages/employees/components/interfaces';
import makeStyles from './employees-dashboard-styles';

function EmployeesDashboardComponent({
  managers,
  hairdressers,
  manicures,
  others,
  openModal
}: EmployeesDashboardProps) {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography className='title'>EQUIPE ATUAL</Typography>

      <Box className={classes.content}>
        <Box>
          <Typography className='title'>{managers}</Typography>
          <Typography className='text'>GERENTE</Typography>
        </Box>
        <Box>
          <Typography className='title'>{hairdressers}</Typography>
          <Typography className='text'>CABELEIREIROS</Typography>
        </Box>
        <Box>
          <Typography className='title'>{manicures}</Typography>
          <Typography className='text'>MANICURES</Typography>
        </Box>
        <Box>
          <Typography className='title'>{others}</Typography>
          <Typography className='text'>OUTROS</Typography>
        </Box>
      </Box>

      <ButtonTag onClick={openModal} variantStyle='contained'>
        Novo Funcionário
      </ButtonTag>
    </Box>
  );
}

export default EmployeesDashboardComponent;
