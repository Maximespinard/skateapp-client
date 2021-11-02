import React from 'react';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Grid, TextField, Button, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { logAdmin } from '../../redux/features/adminSlice';

const AdminLogin = () => {
  const useStyles = makeStyles({
    root: {
      height: '100vh',
    },
    formContainer: {
      width: '40%',
    },
    textField: {
      width: '100%',
    },
  });

  const classes = useStyles();
  const { root, formContainer, textField } = classes;

  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    dispatch(logAdmin(data));
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      className={root}
    >
      <Typography mb={8} variant="h3" component="h1">
        Bienvenue
      </Typography>
      <form className={formContainer} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={5} direction="column" justifyContent="center">
          <Grid item>
            <TextField
              className={textField}
              id="admin-username"
              label="Identifiant"
              variant="outlined"
              size="medium"
              required
              type="email"
              {...register('username')}
            />
          </Grid>
          <Grid item>
            <TextField
              className={textField}
              id="admin-password"
              label="Mot de passe"
              variant="outlined"
              type="password"
              required
              {...register('password')}
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              size="large"
              variant="contained"
              startIcon={<KeyboardArrowRightIcon />}
              style={{ width: '100%' }}
            >
              Connexion
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default AdminLogin;
