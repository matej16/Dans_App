import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function MainPageCard(props) {
  const [imageUrl] = useState(props.imageurl);
  const [title] = useState(props.title)
  const [description] = useState(props.description);
  const [redirectPage] = useState(props.redirectPage);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={event =>  window.location.href=redirectPage}>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={imageUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MainPageCard.propTypes = {
  imageurl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  redirectPage: PropTypes.string,
}