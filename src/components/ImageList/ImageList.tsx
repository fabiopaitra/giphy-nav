
import { Typography } from '@mui/material';
import ImageGalleryList from '../../utils/ImageGalleryList/ImageGalleryList';
import ImageListItemComponent from '../ImageListItem/ImageListItem';
import { ImageListResponse, Item } from '../ImageListItem/ImageListItem.types';



const ImageListComponent: React.FC<{ imageItems: null | ImageListResponse }> = (props) => {
  const { imageItems } = props;

  return (
    <>
      <Typography mt={ 4 } color='Highlight' data-testid="image-title" component='h2'>{ imageItems?.meta.isSearch ? 'Search Results' : 'Trending' }</Typography>
      <ImageGalleryList>
        { imageItems && imageItems.data.map((item: Item, index) => (
          <ImageListItemComponent key={ index } item={ item } />
        )) }
      </ImageGalleryList>
    </>
  );
}

export default ImageListComponent;