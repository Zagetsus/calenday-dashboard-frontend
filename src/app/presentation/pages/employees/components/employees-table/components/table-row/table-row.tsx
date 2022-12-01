import { format } from 'date-fns';
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
import { TableRowProps } from '~/app/presentation/pages/employees/components/employees-table/components/interfaces/table-row-props.interface';
import makeStyles from './table-row-styles';

function TableRowComponent({ employee, openScheduling }: TableRowProps) {
  const classes = makeStyles();
  const date = format(new Date(employee.createdAt), 'MMMM/yyyy');

  return (
    <Box className={classes.container}>
      <Box className='name'>
        <Box className={classes.avatarBox}>
          <Avatar />

          <Box>
            <Typography className='name'>{employee.name}</Typography>
            <Typography className='occupation'>{employee.specialty}</Typography>
          </Box>
        </Box>
      </Box>
      <Box className='create-at'>
        <Typography className={classes.rowText}>{date}</Typography>
      </Box>
      <Box className='phone'>
        <Typography className={classes.rowText}>{employee.phone}</Typography>
      </Box>
      <Box className='email'>
        <Typography className={classes.rowText}>{employee.email}</Typography>
      </Box>
      <Box className='services'>
        <Button
          className={classes.button}
          onClick={openScheduling}
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
