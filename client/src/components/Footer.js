import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../utils/copyright';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Beto Dávila
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Frontend developer
            </Typography>
            <Copyright />
        </footer>
    );
}

export default Footer;