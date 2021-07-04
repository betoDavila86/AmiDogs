import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#a1887f',
            light: '#d3b8ae',
            dark: '#725b53'
        },
        secondary: {
            main: '#cfd8dc',
            light: '#ffffff',
            dark: '#9ea7aa'
        }
    },
});

export default theme;