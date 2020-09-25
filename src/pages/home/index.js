import React from 'react';
import { HomePage } from './style';

const Home = () => {

    return (
        <HomePage>
            <div>
                <input type="text" placeholder="Digite seu email" autoComplete="off"></input>
                <input type="password" placeholder="Digite sua senha" autoComplete="off"></input>
                <button type="submit">Entra</button>
                <a href="/cadastro">Cadastra-se</a>
            </div>
        </HomePage>
    )
}
export default Home;