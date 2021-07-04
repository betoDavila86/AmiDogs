import { Typography, Link } from '@material-ui/core'

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {new Date().getFullYear()}{' '}
            {'Copyright © '}
            <Link color="inherit" href="https://alberto-davila.netlify.app">
                Portfolio
            </Link>
            {'.'}
        </Typography>
    );
}