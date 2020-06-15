import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import AvTimer from "@material-ui/icons/AvTimer";
import PlaylistAddCheck from "@material-ui/icons/PlaylistAddCheck";

const useStyles = makeStyles(theme => ({
  cardActionsBottom: {
    justifyContent: "flex-start"
  },
  button: {
    margin: theme.spacing(1),
    color: "white"
  },
  butttonSuccess: {
    background: "#61BD4F"
  },
  buttonWarning: {
    background: "#F2D73A"
  },
  buttonDanger: {
    background: "#EC5A46"
  },
  leftIcon: {
    fontSize: "20px",
    marginRight: theme.spacing(1)
  },
  badgeComment: {
    "& span": {
      right: 10
    }
  }
}));

const TrelloCardActions = () => {
  const classes = useStyles();
  return (
    <CardActions className={classes.cardActionsBottom}>
        <Button
          size={'small'}
          variant={'contained'}
        >
          <AvTimer className={classes.leftIcon} />
          Today
        </Button>

        <Badge
          badgeContent={'comment'}
          color={'error'}
        >
          <ChatBubbleOutline className={classes.leftIcon} />
        </Badge>

<FormatAlignLeft className={classes.leftIcon} />
      <Button
        size={'small'}
        variant={'contained'}
      >
        <PlaylistAddCheck className={classes.leftIcon} />
        1/2
      </Button>
    </CardActions>
  );
};
export default TrelloCardActions;
