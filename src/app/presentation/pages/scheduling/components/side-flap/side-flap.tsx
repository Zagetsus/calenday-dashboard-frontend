import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './side-flap-styles';

function SideFlapComponent() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Calendário</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs='desktop'
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
}

export default SideFlapComponent;
