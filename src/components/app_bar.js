import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '@material-ui/core/Modal';
import Home from '../pages/home'


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
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function ButtonAppBar() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="absolute" style={{ backgroundColor: "#5c5ca8", boxShadow: "0 4px 4px -4px rgb(0,0,0)" }} >
        <Toolbar>
          <Button color="inherit" href="/">AdvancedStore</Button>
          <Button color="inherit"> <a href="/carrinho" style={{textDecoration:"none", color: "#fff"}}> Carrinho  </a></Button>
          <Typography style={{ flex: 1 }} />
          <Button color="inherit" style={{ boxShadow: "0 4px 4px -4px rgb(0,0,0)" }} onClick={handleOpen}>Login</Button>
          <Button color="inherit">LogOut</Button>
        </Toolbar>
      </AppBar>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {<Home/>}
        </Modal>
      </div>
    </div>
  );
}

export default ButtonAppBar;