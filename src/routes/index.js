import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Funcionarios from '../pages/funcionarios';
import Produtos from '../pages/produto';
import ControleProduto from '../pages/controle/controleProduto';
import ControleCategoria from '../pages/controle/controleCategoria';
import ControleCliente from '../pages/controle/controleCliente';
import Cadastro from '../pages/cadastro'
import Carrinho from '../pages/carrinho'

const Routes = ()=>(
    <Switch>
        <Route path="/" component={Produtos} exact/>
        <Route path="/funcionario" component={Funcionarios}/>  
        <Route path="/carrinho" component={Carrinho}/> 
        <Route path="/cadastro" component={Cadastro}/>    
        <Route path="/controle/produto" component={ControleProduto}/>
        <Route path="/controle/categoria" component={ControleCategoria}/>
        <Route path="/controle/cliente" component={ControleCliente}/>
    </Switch>
)

export default Routes;