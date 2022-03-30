import DialogContent from '@mui/material/DialogContent';
import { ImageListItem, ImageListItemBar } from '@mui/material';

const ResponsiveDialog: React.FC<{ item: any }> = (props) => {
  const { item } = props;

  if (item.url) {
    return (
      <DialogContent style={{ overflowY: 'unset' }}>
        <ImageListItem>
          <img
            src={`${item.url}`}
            srcSet={`${item.url}`}
            alt={item.name}
            loading="lazy" />
          <ImageListItemBar subtitle={item.name} />
        </ImageListItem>
      </DialogContent>
    );
  } else {
    return null
  }
}

export default ResponsiveDialog;