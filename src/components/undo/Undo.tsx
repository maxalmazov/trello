import React from 'react';
import { Undo as UndoIcon, Redo as RedoIcon } from '@material-ui/icons'
import { Button } from '@material-ui/core';


export const Undo = ({ canUndo, canRedo, onUndo, onRedo }: any) => (
  <>
    <Button onClick={onUndo} disabled={!canUndo}>
      <UndoIcon/>
    </Button>
    <Button onClick={onRedo} disabled={!canRedo}>
      <RedoIcon/>
    </Button>
  </>
);
