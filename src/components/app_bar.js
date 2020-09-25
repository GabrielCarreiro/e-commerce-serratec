import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" style={{backgroundColor:"#5c5ca8", boxShadow: "0 4px 4px -4px rgb(0,0,0)"}} >
        <Toolbar>
          
          <Button color="inherit" href="/produto">AdvancedStore</Button>
          <Button color="inherit">Pedidos</Button>
          <Button color="inherit">Carrinho</Button>
          <Typography style={{ flex: 1 }}/>
          <Button color="inherit" style={{ boxShadow: "0 4px 4px -4px rgb(0,0,0)" }} >Login</Button>
          <Button color="inherit">LogOut</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}



export default ButtonAppBar;