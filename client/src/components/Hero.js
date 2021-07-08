import { Container, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Card } from '../components'

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    }
}));

const Hero = ({ user, pets }) => {
    const classes = useStyles();
    console.log(pets);

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                {user && <>
                    <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                        {pets.length > 1 ? "Mis mascotas" : "Mi mascota"}
                    </Typography>
                    <div className={classes.petsContainer}>
                        {pets && pets.length ? <Grid container spacing={1} justify="center">
                            {pets.map(pet => {
                                return <Grid item key={pet.id}>
                                    <Card pet={pet} />
                                </Grid>
                            })}
                        </Grid> : <span>No has añadido ninguna mascota</span>}
                    </div>
                </>}

                {!user && <>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Presentamos AmiDogs
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Encuentra amigos de paseo para tu pequeño de cuatro patas en tu zona o aquella zona que quieras conocer. Hay muchos perros deseando hacer nuevos amigos y
                        pasar un buen rato.
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary" component={RouterLink} to='/sign-in'>
                                    Acceso
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" component={RouterLink} to='/sign-up'>
                                    Registro
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </>}
            </Container>
        </div>
    );
}
export default Hero;