import React from 'react';
import { HomePage } from './style';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <HomePage>
            <div>
                <input type="text" placeholder="Digite seu email" autoComplete="off"></input>
                <input type="password" placeholder="Digite sua senha" autoComplete="off"></input>
                <button type="submit">Entra</button>
                <button type="submit">Cadastra-se</button>
            </div>
        </HomePage>
    )
}
export default Home;