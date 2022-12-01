import { Box, Modal, Slide, Typography } from '~/app/presentation/components';
import { ClosedIcon } from '~/app/presentation/components/icons';
import { TableTag } from '~/app/presentation/pages/employees/components/employees-scheduling-modal/components';
import { ModalProps } from '~/app/presentation/pages/employees/components/interfaces';
import makeStyles from './employees-scheduling-modal-styles';

function EmployeesSchedulingModalComponent({ open, handleClose }: ModalProps) {
  const classes = makeStyles();

  return (
    <Modal
      data-testid='scheduling-create-modal'
      open={open}
      onClose={handleClose}
      className={classes.modal}
    >
      <Slide in={open} direction={'left'}>
        <Box className={classes.container}>
          <button onClick={handleClose} className={classes.closed}>
            <ClosedIcon />
          </button>

          <Box className={classes.wrapper}>
            <Typography component={'h1'} className={classes.title}>
              Agendamentos
            </Typography>
          </Box>

          <TableTag />
        </Box>
      </Slide>
    </Modal>
  );
}

export default EmployeesSchedulingModalComponent;
