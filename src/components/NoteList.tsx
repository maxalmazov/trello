import React from "react";

import { makeStyles, fade } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import NoteCard from "./NoteCard";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  cardList: {
    margin: theme.spacing(12, 1)
  },
  paper: {
    padding: theme.spacing(1),
    background: "#DFE1E6",
    alignItem: "center"
  },
  title: {
    textAlign: "center"
  },
  verticalScrollBar: {
    maxHeight: "100%",
    overflow: "auto"
  },
  addCard: {
    cursor: "pointer",
    padding: theme.spacing(1),
    borderRadius: 5,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.8)
    }
  }
}));

const NoteList = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.cardList} item md="auto">
      <Paper className={classes.paper}>
        <Box overflow="auto" display="flex">
          <Box flexGrow={1}>
            <Typography align="left" variant="h6" gutterBottom>
              {'title'}
            </Typography>
          </Box>
          <Box>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </Box>

        </Box>
        {'renderItemCard()'}
        <Box flexGrow={1} className={classes.addCard}>
          <Typography align="left" variant="caption" gutterBottom>
            + Add another card
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default NoteList;
