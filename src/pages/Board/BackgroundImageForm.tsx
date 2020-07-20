import React, { ChangeEvent } from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { Close as CloseIcon, FolderOpen } from '@material-ui/icons';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader, IconButton,
  Typography
} from '@material-ui/core';

import {
  BackgroundImageFormCaption,
  BackgroundImageFormWrapper, CloseModalWrapper
} from './BackgroundImage.styled';

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
    const fileInput = document.getElementById('backgroundImageInput');

    if (fileInput != null) {
      fileInput.click();
    }
  };

  const isActive = canDrop && isOver;

  return(
    <BackgroundImageFormWrapper ref={drop} isActive={isActive}>
      {
        isActive ? null :
          <CloseModalWrapper onClick={cancel}>
            <CloseIcon/>
          </CloseModalWrapper>
      }
      <BackgroundImageFormCaption>
          <CardHeader
            title={isActive ?
              'Release to drop':
              <>
                Drag file here or choose
                <IconButton onClick={submitInput}>
                  <FolderOpen/>
                </IconButton>
              </>
            }
          />
        <input onChange={submit} id={'backgroundImageInput'} hidden={true} type={'file'}/>
      </BackgroundImageFormCaption>
    </BackgroundImageFormWrapper>
  )
};

export default BackgroundImageForm;
