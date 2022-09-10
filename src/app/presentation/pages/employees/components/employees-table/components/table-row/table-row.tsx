import {
  Avatar,
  Box,
  Button,
  IconButton,
  Typography
} from '~/app/presentation/components';
import {
  EditIcon,
  SchedulingIcon,
  TrashIcon
} from '~/app/presentation/components/icons';
import makeStyles from './table-row-styles';

function TableRowComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Box className='name'>
        <Box className={classes.avatarBox}>
          <Avatar />

          <Box>
            <Typography className='name'>Leila Ferreira</Typography>
            <Typography className='occupation'>Cabeleireira</Typography>
          </Box>
        </Box>
      </Box>
      <Box className='create-at'>
        <Typography className={classes.rowText}>Outubro/2021</Typography>
      </Box>
      <Box className='phone'>
        <Typography className={classes.rowText}>+55 11 9 5555-4444</Typography>
      </Box>
      <Box className='email'>
        <Typography className={classes.rowText}>
          leilacabeleireiraleila@uol.com.br
        </Typography>
      </Box>
      <Box className='services'>
        <Button
          className={classes.button}
          startIcon={<SchedulingIcon size={16} />}
        >
          Ver agendamentos
        </Button>
      </Box>
      <Box className='actions'>
        <Box>
          <IconButton>
            <EditIcon fill='#0086E8' />
          </IconButton>
          <IconButton>
            <TrashIcon fill='#EE0000' />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default TableRowComponent;
