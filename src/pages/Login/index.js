import React, {useEffect, useState} from 'react';
import { HomePage } from './style';
import api from '../../services/api';
import createHistory from 'history/createBrowserHistory';


const Login = () => {
    const history = createHistory();
    const [cliente, setCliente] = useState([]);
    const [funcionario, setFuncionario] = useState([]);
    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();
    const [erro, setErro] = useState();

    const loadCliente = async () => {
        try {
            const response = await api.get('cliente');
            setCliente(response.data)          
        } catch (error) {
            console.log("Erro load Cliente", error)
        }
    };

    const loadFuncionario = async () => {
        try {
            const response = await api.get('funcionario');
           setFuncionario(response.data)
        } catch (error) {
            console.log("Erro load Funcionario", error)
        }
    };

    useEffect(() =>{
        loadCliente();
        loadFuncionario();
    }, []);

    function logar(){

        if(!usuario || !senha){
            return
        }
        cliente.map((clien) =>{
            if(clien.usuario === usuario.toLowerCase() && clien.cpf === senha.toLowerCase()){
                localStorage.setItem('@LOJA:user',JSON.stringify(clien));
                history.go(0)   
            }else{
                setTimeout(() => {
                    setErro("Login Invalido")
                }, 1000);
                setTimeout(() => {
                    setErro(false)
                }, 6000);
            }
        })

        funcionario.map((funcio) =>{
            if(funcio.nome.toLowerCase() === usuario.toLowerCase() && funcio.cpf === senha.toLowerCase()){
                localStorage.setItem('@LOJA:funcionario',JSON.stringify(funcio));
                history.go(0)
            }else{
                setTimeout(() => {
                    setErro("Login Invalido")
                }, 1000);
                setTimeout(() => {
                    setErro(false)
                }, 6000);
            }
        })  
    }

    return (
        <HomePage>
            <div>
                <input type="text" placeholder="Digite seu email" autoComplete="off" onChange={e => setUsuario(e.target.value)}></input>
                <input type="password" placeholder="Digite sua senha" autoComplete="off" onChange={e => setSenha(e.target.value)}></input>
                {erro && 
                    <span>{erro}</span> }
                <button type="button" onClick={e => logar()}>Entra</button>
                <a href="/cadastro" style={{textDecoration:"none"}}>Cadastra-se</a>
            </div>
        </HomePage>
    )
}
export default Login;