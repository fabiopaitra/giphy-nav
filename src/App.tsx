import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Footer from './components/Layout/Footer/Footer';
import Body from './components/Layout/Body/Body';

import styles from './App.module.scss';

const appName = 'GIPHY NAV'

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Grid container spacing={2} className={styles.darkBg}>
      <Grid item xs={12}>
        <Container maxWidth="xl">
          <Body />
          <Footer title={appName} />
        </Container>
      </Grid>
    </Grid>
  </>
)

export default App