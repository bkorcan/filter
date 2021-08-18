import Grid from '@material-ui/core/Grid';
import Style from '../styles/filter.module.css'
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CheckIn from './check_in'
import CheckOut from './check_out'
import Where from './where';
import Guest from './guest';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1280,
    }
  }
});

export default function Home() {
  return (
    <MuiThemeProvider theme={theme}>

      <Grid container className={Style.container} >

        <Grid item xs={6} sm={3} className={Style.item} >
          {/* <Button variant="contained" className={Style.button}>1</Button> */}
          <Where/>
        </Grid>

        <Grid item xs={6} sm={3} className={Style.item}>
          {/* <Button variant="contained" className={Style.button}>2</Button> */}
          <CheckIn className={Style.button}/>
        </Grid>

        <Grid item xs={6} sm={3} className={Style.item} >
          {/* <Button variant="contained" className={Style.button}>3</Button> */}
          <CheckOut/>
        </Grid>

        <Grid item xs={6} sm={3} className={Style.item} >
          {/* <Button variant="contained" className={Style.button}>4</Button> */}
          <Guest/>
        </Grid>

      </Grid>

    </MuiThemeProvider>

  )
}
