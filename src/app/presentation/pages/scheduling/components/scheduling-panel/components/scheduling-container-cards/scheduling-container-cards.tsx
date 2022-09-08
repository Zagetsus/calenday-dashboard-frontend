import { Box } from '~/app/presentation/components';
import { SchedulingCardTag } from '~/app/presentation/pages/scheduling/components/scheduling-panel/components';
import makeStyles from './scheduling-container-cards-styles';

function SchedulingContainerCardsComponent() {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <SchedulingCardTag
        data={{
          id: 12,
          customer: 'Marcela Vilar',
          service: 'Corte Feminino',
          observation: null,
          start: '11:00',
          end: '12:00',
          status: true
        }}
      />

      <SchedulingCardTag
        data={{
          id: 15,
          customer: 'Marcela Vilar',
          service: 'Coloração',
          observation: null,
          start: '12:00',
          end: '16:30',
          status: true
        }}
      />
    </Box>
  );
}

export default SchedulingContainerCardsComponent;
