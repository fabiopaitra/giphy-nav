import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff"
    }
  }
}));

const Paginator: React.FC<{ pageCount: number, changePageHandler: (value: number) => void }> = (props) => {
  const [page, setPage] = useState(1);
  const { changePageHandler } = props;

  const { pageCount } = props

  const pageHandlerClick = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault()

    setPage(value);
    changePageHandler(value);
  };
  const classes = useStyles();

  return (
    <Pagination
      className={ classes.ul }
      color="primary"
      count={ pageCount }
      page={ page }
      onChange={ pageHandlerClick }
    />
  );
}

export default Paginator