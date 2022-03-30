import { Grid, Box } from '@mui/material';

interface Props {
  title: string,
}

const Footer: React.FC<Props> = (props) => {
  return (
    <>
      <Grid container py={5}>
        <Grid item xs={11}>
          <Box sx={{ width: 150, color: 'primary.main' }}>
            {props.title}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;