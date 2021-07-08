import {
    Container,
    CssBaseline,
    Avatar,
    Typography,
    TextField,
    Button,
    Grid,
    Link,
    Box,
    FormControl,
    InputLabel,
    Select,
    FormLabel,
    Radio,
    RadioGroup,
    FormControlLabel
} from '@material-ui/core';
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
    }
}));

export default function SignUp({ onSignUp }) {
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();

        const signUpData = {
            email: event.target.email.value,
            password: event.target.password.value,
            nameDog: event.target.name.value,
            breed: event.target.breed.value,
            age: event.target.age.value,
            character: event.target.character.value,
            size: event.target.size.value,
            gender: event.target.gender.value
        }
        onSignUp(signUpData);

    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PetsIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registro
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
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
                        </Grid>
                        <Grid item xs={12}>
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
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="name"
                                label="Nombre mascota"
                                type="text"
                                id="name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="breed"
                                label="Raza"
                                type="text"
                                id="raza"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="age">Edad</InputLabel>
                                <Select
                                    native
                                    label="Edad"
                                    name="age"
                                    inputProps={{
                                        name: 'age',
                                        id: 'age',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value="cachorro">Cachorro</option>
                                    <option value="joven">Joven</option>
                                    <option value="adulto">Adulto</option>
                                    <option value="senior">Senior</option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="character">Personalidad</InputLabel>
                                <Select
                                    native
                                    label="Personalidad"
                                    name="character"
                                    inputProps={{
                                        name: 'character',
                                        id: 'character',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value="asustadizo">Asustadizo</option>
                                    <option value="sociable">Sociable</option>
                                    <option value="reactivo">Reactivo</option>
                                    <option value="tímido">Tímido</option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="size">Tamaño</InputLabel>
                                <Select
                                    native
                                    label="Tamaño"
                                    inputProps={{
                                        name: 'size',
                                        id: 'size',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value="pequeño">Pequeño</option>
                                    <option value="mediano">Mediano</option>
                                    <option value="grande">Grande</option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <FormControl component="fieldset" >
                                <FormLabel component="legend">Género</FormLabel>
                                <RadioGroup aria-label="gender" name="gender" row>
                                    <FormControlLabel value="hembra" control={<Radio />} label="Hembra" />
                                    <FormControlLabel value="macho" control={<Radio />} label="Macho" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Confirmar
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Link to='/sign-in' variant="body2" component={RouterLink}>
                                <Typography component="div">
                                    <Box textAlign="right">
                                        Ya tienes cuenta? Accede
                                    </Box>
                                </Typography>
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