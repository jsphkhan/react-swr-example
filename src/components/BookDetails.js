import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation, useParams } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: 20,
        marginTop: 64
    }
});

const BookDetails = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const {name, pic} = location.state;

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Button onClick={() => history.goBack()}>Back</Button>
                    <Typography variant="h6">
                        Book Details
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.root}>
                <h1>{name}</h1>
                <img src={pic} alt={name} />
            </div>
        </>
    )
}

export default BookDetails;