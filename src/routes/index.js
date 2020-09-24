import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Funcionarios from '../pages/funcionarios';
import Produtos from '../pages/produto';
import Home from '../pages/home';
import ControleProduto from '../pages/controle/controleProduto';

const Routes = ()=>(
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/funcionario" component={Funcionarios}/>
        <Route path="/produto" component={Produtos}/>
        <Route path="/controle/produto" component={ControleProduto}/>
    </Switch>
)

export default Routes;