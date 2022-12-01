import { useForm } from 'react-hook-form';
import {
  Box,
  ButtonTag,
  Divider,
  InputTag,
  Modal,
  SelectTag,
  Slide,
  Typography
} from '~/app/presentation/components';
import { ClosedIcon } from '~/app/presentation/components/icons';
import { SchedulingCreateModalProps } from '~/app/presentation/pages/scheduling/interfaces';
import makeStyles from './scheduling-create-modal-styles';

function SchedulingCreateModalComponent({
  open,
  handleClose
}: SchedulingCreateModalProps) {
  const { control, handleSubmit } = useForm({
    mode: 'onTouched'
  });
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

          <Typography component={'h1'} className={classes.title}>
            Criar Novo agendamento
          </Typography>

          <form>
            <Box>
              <Typography className={classes.subtitle}>Cliente</Typography>

              <Box className={classes.formRow}>
                <InputTag
                  name={'cpf'}
                  control={control}
                  title={'CPF'}
                  placeholder='ex: 123.123.123-12'
                />
                <InputTag
                  name={'phone'}
                  control={control}
                  disabled
                  title={'Celular'}
                  placeholder='ex: (12) 1 2312-1234'
                />
              </Box>

              <Box className={classes.formRow}>
                <InputTag
                  name={'name'}
                  control={control}
                  disabled
                  title={'Nome'}
                  placeholder='Nome completo'
                />
              </Box>
            </Box>

            <Divider />

            <Box className={classes.formBox}>
              <Typography className={classes.subtitle}>Serviço</Typography>

              <Box className={classes.formRow}>
                <SelectTag
                  label={'Serviço que deseja agendar:'}
                  options={[{ label: 'Corte de feminino', value: '1' }]}
                />
                <SelectTag
                  label={'Escolha o profissional'}
                  options={[{ label: 'Corte de feminino', value: '1' }]}
                />
              </Box>
            </Box>

            <Divider />

            <Box className={classes.formBox}>
              <Typography className={classes.subtitle}>Data e hora</Typography>

              <Box className={classes.formRow}>
                <InputTag
                  name={'date'}
                  control={control}
                  title={'Data'}
                  placeholder='00/00/0000'
                  type='date'
                />

                <SelectTag
                  label={'Horário'}
                  options={[{ label: 'Corte de feminino', value: '1' }]}
                />
              </Box>
            </Box>

            <Divider />

            <Box className={classes.formBox}>
              <ButtonTag fullWidth variantStyle={'contained'}>
                Marcar agendamento
              </ButtonTag>
            </Box>
          </form>
        </Box>
      </Slide>
    </Modal>
  );
}

export default SchedulingCreateModalComponent;
