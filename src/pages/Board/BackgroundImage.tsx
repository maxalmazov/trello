import React, {
  ChangeEvent,
  useCallback,
  useState
} from 'react';
import { IconButton} from '@material-ui/core';
import { Wallpaper } from '@material-ui/icons';

import {
  BackgroundImageFormModal,
  BackgroundImageWrapper
} from './BackgroundImage.styled';
import { DropTargetMonitor } from 'react-dnd';
import BackgroundImageForm from './BackgroundImageForm';

const BackgroundImage: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileDrop = useCallback(
    (item: any, monitor: DropTargetMonitor) => {
      if (monitor) {
        const files = monitor.getItem().files;

        saveImage(files[0])
      }
    },
    [],
  );

  const handleFileForm = (event: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    if (null !== event.target.files[0]) {
      // @ts-ignore
      saveImage(event.target.files[0])
    }

  };

  const saveImage = (image: File) => {
    handleClose();
    console.log(image);
  };

  return(
    <BackgroundImageWrapper>
      <IconButton onClick={handleOpen}>
        <Wallpaper/>
      </IconButton>
      <BackgroundImageFormModal
        open={open}
        onClose={handleClose}
      >
        <BackgroundImageForm onDrop={handleFileDrop} submit={handleFileForm} cancel={handleClose}/>
      </BackgroundImageFormModal>
    </BackgroundImageWrapper>
  )
};

export default BackgroundImage;
