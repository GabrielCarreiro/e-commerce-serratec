import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Funcionarios from '../pages/funcionarios';
import Produtos from '../pages/produto'
import Home from '../pages/home'

const Routes = ()=>(
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/funcionario" component={Funcionarios}/>
        <Route path="/produto" component={Produtos}/>
    </Switch>
)

export default Routes;