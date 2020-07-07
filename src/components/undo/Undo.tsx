import React from 'react';
import { Undo as UndoIcon, Redo as RedoIcon } from '@material-ui/icons'
import { Button } from '@material-ui/core';

interface UndoProps {
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
}

export const Undo = ({ canUndo, canRedo, onUndo, onRedo }: UndoProps) => (
  <>
    <Button onClick={onUndo} disabled={!canUndo}>
      <UndoIcon/>
    </Button>
    <Button onClick={onRedo} disabled={!canRedo}>
      <RedoIcon/>
    </Button>
  </>
);
