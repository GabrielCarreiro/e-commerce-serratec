import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '@material-ui/core/Modal';
import Login from '../../pages/Login';
import { BotaoNav } from './style';
import { BarraNav } from './style';
import {FaUserCircle} from 'react-icons/fa'
import createHistory from 'history/createBrowserHistory'
import { FiShoppingCart } from "react-icons/fi";


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
  const history = createHistory();
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [clienLog, setclienLog] = useState();
  const [funcioLog, setFuncioLog] = useState();
  const [login, setLogin] = useState();
 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function verificarLogin(){
    if(localStorage.getItem('@LOJA:user')){
      setLogin(JSON.parse(localStorage.getItem('@LOJA:user')))
      setclienLog(true)
    }else if(localStorage.getItem('@LOJA:funcionario')){
      setLogin(JSON.parse(localStorage.getItem('@LOJA:funcionario')))
      setFuncioLog(true)
    }
  }

  useEffect(()=>{
    verificarLogin()
  },[])

  function LogOut(){
    if(localStorage.getItem('@LOJA:user')){
      localStorage.removeItem('@LOJA:user')
      history.go(0)
    }else if(localStorage.getItem('@LOJA:funcionario')){
      localStorage.removeItem('@LOJA:funcionario')
      history.go(0)
    }
  }


  return (
    <div className={classes.root}>
      <BarraNav>
      <AppBar position="fixed" style={{ backgroundColor: "#5c5ca8", boxShadow: "0 4px 4px -4px rgb(0,0,0)" }} >
        
        <Toolbar>

          <Button color="inherit" href="/">ADVANCED STORE</Button>
          <a href="/carrinho" style={{textDecoration:"none", color: "#fff"}}><Button color="inherit"> <FiShoppingCart size={24}/>  Carrinho </Button></a>

          <Typography style={{ flex: 1 }} />
          {login && 
            <span sytle={{marginLeft:"-50px"}}>
              Bem vindo {login.nome } !
            </span>
          }
          
          {clienLog || funcioLog ?(
                <FaUserCircle size={24} style={{marginTop: "0px"}}/>
          ):(
            <Button color="inherit" onClick={handleOpen}>Login</Button>
          )}
        <BotaoNav>
          {funcioLog &&
              <Button id="btnGer" color="inherit" href="/controle" >
                Gerenciar
              </Button>
          }
          </BotaoNav>
          <Button color="inherit" onClick={e => LogOut() }>LogOut</Button>
        </Toolbar>
      </AppBar>
      </BarraNav>    
      <div>
        <Modal
          open={open}
          onClose={handleClose}>
          {<Login/>}
        </Modal>
      </div>
    </div>
  );
}

export default ButtonAppBar;
