import { Box, Typography } from '~/app/presentation/components';
import { DashboardMainResumeProps } from '~/app/presentation/pages/dashboard/components/interfaces';
import makeStyles from './dashboard-main-resume-styles';

function DashboardMainResumeComponent({
  totalCalls,
  date,
  averageTime
}: DashboardMainResumeProps) {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <Box>
        <Typography className={classes.callsText}>
          <strong>{totalCalls}</strong> atendimentos
        </Typography>
        <Typography className={classes.dateText}>{date}</Typography>
      </Box>
      <Box>
        <Typography className={classes.title}>
          Tempo médio atendimento
        </Typography>
        <Typography className={classes.averageTime}>
          {averageTime} <span>min</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default DashboardMainResumeComponent;
