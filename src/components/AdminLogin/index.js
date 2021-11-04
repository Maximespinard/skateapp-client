import React from 'react';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';

import { Grid, TextField, Button, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Toaster from '../Toaster';
import { useLoginAdminMutation } from '../../redux/services/adminApi';

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
  const [loginAdmin, { isLoading }] = useLoginAdminMutation();
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    await loginAdmin(data)
  };

  return (
    <>
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
          <Grid
            container
            spacing={5}
            direction="column"
            justifyContent="center"
          >
            <Grid item>
              <TextField
                className={textField}
                id="admin-username"
                label="Identifiant"
                variant="outlined"
                size="medium"
                required
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
                startIcon={!isLoading ? <KeyboardArrowRightIcon /> : null}
                style={{ width: '100%' }}
              >
                {isLoading ? <CircularProgress color="inherit" /> : 'Connexion'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Toaster />
    </>
  );
};

export default AdminLogin;
