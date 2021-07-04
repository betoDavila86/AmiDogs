import { Container, CssBaseline, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Link, Box } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import Copyright from '../utils/copyright';

import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp({ onSignUp }) {
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();

        const signUpData = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        console.log(signUpData);

    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PetsIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registro de tu mascota
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        name="name"
                        label="Nombre mascota"
                        type="text"
                        id="name"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        name="breed"
                        label="Raza"
                        type="text"
                        id="raza"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Accede
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link to='/sign-in' variant="body2" component={RouterLink}>
                                {"Ya tienes cuenta? Accede"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}