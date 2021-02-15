import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 6,
    flexGrow: 1,
   
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 300,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}));

export default function DesignNew({id, title, url, index, onClick, isSelected}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} style={{textAlign:'center'}}>
              <img className={classes.img} src={url} />
            </ButtonBase>
          </Grid>
          <Grid item container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" style={{textAlign:'center'}}>
                    {`Title: ${title}`}
                </Typography>
                <Typography variant="subtitle1" gutterBottom style={{textAlign:'center'}}>
                  {`ID: ${id}`}
                </Typography>
                <Typography variant="subtitle1" gutterBottom style={{textAlign:'center'}}>
                  {`URL: ${url}`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer', textAlign:'center' }}>
                <Button variant="contained" onClick={onClick(index)}>{isSelected ? 'Remove' : 'Compare'}</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
