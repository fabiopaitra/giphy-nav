import { ImageListItem, ImageListItemBar, IconButton } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import { Item } from './ImageListItem.types';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ResponsiveDialog from '../Dialog/Dialog';

const ImageListItemComponent: React.FC<{ item: Item }> = (props) => {
  const { item } = props;
  const { images, title, imagesArray } = item;
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return <>
    <ImageListItem >
      <img
        src={ `${images.fixed_height_downsampled.url}` }
        srcSet={ `${images.fixed_height_downsampled.url}` }
        alt={ title }
        style={ { height: `${images.fixed_height_downsampled.height}px` } }
        loading="lazy" />
      <ImageListItemBar
        data-testid={ 'text-box-id' }
        role="contentinfo"
        subtitle={ title }
        onClick={ handleOpen }
        actionIcon={ <IconButton
          sx={ { color: 'rgba(255, 255, 255, 0.54)' } }
          aria-label={ `info about ${title}` }
        >
          <InfoIcon />
        </IconButton> } />
    </ImageListItem>

    <Dialog
      fullScreen={ fullScreen }
      fullWidth={ true }
      open={ open }
      onClose={ handleClose }
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        { "What's your prefered size? " }
      </DialogTitle>
      { imagesArray.map((imageList: any) => (
        <ResponsiveDialog key={ imageList.name } item={ imageList } ></ResponsiveDialog>
      )) }
      <DialogActions>
        <Button onClick={ handleClose } autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </>
}

export default ImageListItemComponent