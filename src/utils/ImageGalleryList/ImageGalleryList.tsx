import { styled } from '@mui/material';

const ImageGalleryList = styled('ul')(({ theme }: any) => ({
  display: 'grid',
  padding: 0,
  gap: 8,
  [theme.breakpoints.up('xs')]: {
    gridTemplateColumns: 'repeat(1, 1fr)'
  },
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
}));

export default ImageGalleryList;