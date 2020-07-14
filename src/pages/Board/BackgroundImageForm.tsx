import React, { ChangeEvent } from 'react';

import {
  BackgroundImageFormCaption,
  BackgroundImageFormWrapper
} from './BackgroundImage.styled';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import {
  Button,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core';

export interface TargetBoxProps {
  onDrop: (props: TargetBoxProps, monitor: DropTargetMonitor) => void;
  submit: (event: ChangeEvent<HTMLInputElement>) => void;
  cancel: () => void;
}

const BackgroundImageForm: React.FC<TargetBoxProps> = (props) => {
  const { onDrop, submit, cancel } = props;
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop(item, monitor) {
      if (onDrop) {
        onDrop(props, monitor);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const submitInput = () => {
    const fileInput = document.getElementById('file');

    if (fileInput != null) {
      fileInput.click();
    }
  };

  const isActive = canDrop && isOver;

  return(
    <BackgroundImageFormWrapper ref={drop} isActive={isActive}>
      <BackgroundImageFormCaption>
        <div>
          <CardContent>
            {
              isActive ?
                <Typography gutterBottom={true} variant={'h5'} component={'h2'}>
                  Release to drop
                </Typography> :
                <Typography gutterBottom={true} variant={'h5'} component={'h2'}>
                  Drag file here
                </Typography>
            }
          </CardContent>
          {
            isActive ? null :
              <CardActions>
                <Button onClick={submitInput}>
                  Choose
                </Button>
                <Button onClick={cancel}>
                  Close
                </Button>
              </CardActions>
          }
        </div>
        <input onChange={submit} id={'file'} hidden={true} type={'file'}/>
      </BackgroundImageFormCaption>
    </BackgroundImageFormWrapper>
  )
};

export default BackgroundImageForm;
