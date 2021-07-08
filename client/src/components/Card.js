import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import silueta from '../assets/img/perro-silueta.png';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 350,
    },
    media: {
        height: 0,
        paddingTop: '65%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
    bullets: {
        display: 'flex',
    },
    bold: {
        fontWeight: '600',
        color: theme.palette.primary.main
    }
}));

export default function CardComponent({ pet }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    let cardMedia;
    const { nameDog, age, size, breed, description = undefined, character, image = undefined } = pet;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if (image) {
        cardMedia = (<CardMedia
            className={classes.media}
            image={image}
            title="pet-picture"
        />)
    } else {
        cardMedia = (<CardMedia
            className={classes.media}
            image={silueta}
            title="pet-picture"
        />)
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="mascota" className={classes.avatar}>
                        {nameDog[0].toUpperCase()}
                    </Avatar>
                }
                title={nameDog}
                subheader={breed}
            />
            {cardMedia}
            <CardContent>
                <div className={classes.bullets}>
                    <ArrowRightIcon color="primary" />
                    <Typography variant="body1" color="textSecondary" component="div">
                        <span className={classes.bold}>Edad: </span>{age.charAt(0).toUpperCase() + age.slice(1)}
                    </Typography>
                </div>
                <div className={classes.bullets}>
                    <ArrowRightIcon color="primary" />
                    <Typography variant="body1" color="textSecondary" component="div">
                        <span className={classes.bold}>Tamaño: </span>{size.charAt(0).toUpperCase() + size.slice(1)}
                    </Typography>
                </div>
                <div className={classes.bullets}>
                    <ArrowRightIcon color="primary" />
                    <Typography variant="body1" color="textSecondary" component="div">
                        <span className={classes.bold}>Caracter: </span>{character.charAt(0).toUpperCase() + character.slice(1)}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {description ?
                        <Typography variant="body2" color="textSecondary">{description}</Typography> :
                        <Typography variant="body2" color="textSecondary">{'No se ha añadido descripción de la mascota'}</Typography>}
                </CardContent>
            </Collapse>
        </Card >
    );
}
