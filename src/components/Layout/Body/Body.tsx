import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import ImageListComponent from '../../ImageList/ImageList';
import { ImageListResponse } from '../../ImageListItem/ImageListItem.types';
import SearchAppBar from '../Search/Search';
import Paginator from '../Paginator/Paginator';
import useHttp from '../../../hooks/useHttp';

const appName = 'GIPHY NAV'
const ITEMS_PER_PAGE = 12;


const Body: React.FC = () => {
  const [items, setItems] = useState<ImageListResponse | null>(null);
  const [offset, setoffset] = useState(1)
  const [searchTerm, setsearchTerm] = useState('')
  const [pageCount, setpageCount] = useState(0)
  const { data, isPending, errorMessage } = useHttp(offset, searchTerm)

  const onPageChange = (value: number) => {
    const newOffset = (value - 1) * ITEMS_PER_PAGE + 1;
    setoffset(newOffset)
  }

  const onSearch = (searchTerm: string) => {
    setsearchTerm(searchTerm);
  }

  useEffect(() => {
    if (data) {
      applyData(data)
    }
    return () => {
      setItems(null)
    }
  }, [data])

  const applyData = (data: any) => {
    let isMounted = true;
    if (isMounted) {
      setItems(data)
      setpageCount(Math.ceil(data.pagination.total_count / ITEMS_PER_PAGE / 2))
    }
    return () => {
      isMounted = false;
    }

  }


  return (
    <>
      <SearchAppBar title={ appName } searchHandler={ onSearch } />
      { !isPending ? <ImageListComponent imageItems={ items } /> : <p role="paragraph"> Loading... </p> }
      { errorMessage && <Alert severity="error">{ errorMessage }</Alert> }
      <Paginator changePageHandler={ onPageChange } pageCount={ pageCount } />
    </>
  );
}

export default Body;