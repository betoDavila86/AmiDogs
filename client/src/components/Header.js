import { AppBar, Toolbar, Typography } from '@material-ui/core'
import PetsIcon from '@material-ui/icons/Pets';

import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    }
}));

const Header = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <AppBar position="relative">
            <Toolbar>
                <PetsIcon className={classes.icon} />
                <Typography variant="h5" color="inherit" noWrap>
                    <span style={{cursor: 'pointer'}} onClick={() => history.push('/')}>AmiDogs</span>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default Header;