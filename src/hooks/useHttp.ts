import { useEffect, useRef, useState } from 'react';
import { ImageListResponse } from '../components/ImageListItem/ImageListItem.types';


const useHttp = (offset = 1, searchTerm: string) => {
  const [data, setData] = useState<ImageListResponse | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const LIMIT = 12

  const refResponse = useRef<Response | null>(null);

  useEffect(() => {
    const trendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=${LIMIT}&offset=${offset}`
    const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${searchTerm}&limit=${LIMIT}&offset=${offset}`;
    const requestOptions = { method: 'GET' };
    let isSearch = false
    const sendRequest = async () => {
      try {
        if (searchTerm) {
          isSearch = true
          refResponse.current = await fetch(searchUrl, requestOptions);
        } else {
          refResponse.current = await fetch(trendingURL, requestOptions);
        }
        if (!refResponse.current.ok) throw new Error('Request failed!');
        return refResponse.current.json();
      } catch (err: any) {
        setErrorMessage(err.message || 'Something went wrong!');
      }
    }
    sendRequest().then((data) => {
      const items = data.data.map((item: any) => {
        const newImages = Object.keys(item.images).map((key) => {
          return { name: key, ...item.images[key] }
        })
        return { ...item, imagesArray: newImages }
      })

      data.data = items;
      data.meta.isSearch = isSearch;
      setData(data);
      setIsPending(false);

    }).catch((err) => {
      setIsPending(false);
      setErrorMessage(err.message || 'Something went wrong!');
    })
  }, [offset, searchTerm]);
  return { data, isPending, errorMessage };
}

export default useHttp