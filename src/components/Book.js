import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      //maxWidth: 345,
      marginBottom: 20
    },
    media: {
      height: 140,
    },
    author: {
        marginTop: 10
    }
});

const Book = ({ id, name, pic, author, sold, ISBN}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <Link to={{ pathname: `/details/${id}`, state: {
                name, 
                pic
            }}}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={pic}
                    title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        <div className={classes.author}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {author}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                ISBN: {ISBN}
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Button size="small" color="primary" disabled={sold}>
                    Buy
                </Button>
                <Button size="small" color="primary">
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

Book.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    pic: PropTypes.string,
    author: PropTypes.string,
    sold: PropTypes.bool,
    ISBN: PropTypes.string
}

export default Book;