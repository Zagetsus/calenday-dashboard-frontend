import { Box, ButtonTag, Typography } from '~/app/presentation/components';
import { DashboardTitleProps } from '~/app/presentation/pages/dashboard/components/interfaces';
import makeStyles from './dashboard-heading-styles';

function DashboardTitleComponent({
  handleOpenCreateModal,
  children
}: DashboardTitleProps) {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>{children}</Typography>

      <ButtonTag onClick={handleOpenCreateModal} variantStyle='contained'>
        Novo agendamento
      </ButtonTag>
    </Box>
  );
}

export default DashboardTitleComponent;
