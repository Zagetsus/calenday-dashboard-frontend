import { Box, ButtonTag, Typography } from '~/app/presentation/components';
import { DashboardTitleProps } from '~/app/presentation/pages/dashboard/components/interfaces';
import makeStyles from './dashboard-heading-styles';

function DashboardTitleComponent({ children }: DashboardTitleProps) {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>{children}</Typography>

      <ButtonTag variantStyle='contained'>Novo agendamento</ButtonTag>
    </Box>
  );
}

export default DashboardTitleComponent;
