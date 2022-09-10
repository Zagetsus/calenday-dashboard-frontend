import dynamic from 'next/dynamic';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Box, Typography } from '~/app/presentation/components';
import { DashboardAttendanceChartProps } from '~/app/presentation/pages/dashboard/components/interfaces';
import theme from '~/styles/theme';
import makeStyles from './dashboard-attendance-chart-styles';

function DashboardAttendanceChartComponent({
  date
}: DashboardAttendanceChartProps) {
  const classes = makeStyles();

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Typography className={classes.title}>
          Número de atendimentos
        </Typography>
        <Typography className={classes.subtitle}>{date}</Typography>
      </Box>

      <ResponsiveContainer width='100%' aspect={4}>
        <LineChart width={690} height={120} data={data}>
          <Tooltip />
          <Line
            type='monotone'
            dataKey='pv'
            stroke={theme.palette.primary.main}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default DashboardAttendanceChartComponent;
