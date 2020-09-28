import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {Conteudo} from './style';
import { useHistory } from 'react-router-dom';

const Cadastro = () => {

    const [newNomeClien, setnewNomeClien] = useState();
    const [newCpf, setNewCpf] = useState();
    const [newEmail, setNewEmail] = useState();
    const [newUsuario, setNewUsuario] = useState();
    const history = useHistory();

    
    async function cadastrarCliente(e) {
        e.preventDefault();
        const params = {
            nome:newNomeClien,
            usuario:newUsuario.toLowerCase(),
            cpf: newCpf,
            email: newEmail,
            dataNascimento: "1992-02-01T00:00:00Z",
                endereco: {
                rua: "Rua dos Bobos",
                numero: "0",
                complemento: "",
                bairro: "Castanheira",
                cidade: "Metropolis",
                estado: "SP",
                cep: "23451234"
            }
        }
        try {
            await api.post(`cliente`, params);
            history.push('/');
        } catch (error) {
            console.log('Erro ao cadastrar Cliente', error);
        }
    }

    return (
        <>   
             <Conteudo>
                <div>
                    <form onSubmit={cadastrarCliente} >
                    <label id="nome">Nome</label>
                    <input type="text" id="nome" value={newNomeClien} onChange={e => setnewNomeClien(e.target.value)} placeholder="Digite seu nome" autoComplete="off"/>
                    <br/>
                    <label id="cpf">CPF</label>
                    <input type="text" id="cpf" value={newCpf} onChange={e => setNewCpf(e.target.value)} placeholder="Somente os 11 dígitos" autoComplete="off" maxlength="11"/>
                    <br/>
                    <label id="email">E-mail</label>
                    <input type="text" id="email" value={newEmail} onChange={e => setNewEmail(e.target.value)} placeholder="digiteseuemail@email.com" autoComplete="off"/>
                    <br/>
                    <label id="usuario">Usuario</label>
                    <input type="text" id="usuario" value={newUsuario} onChange={e => setNewUsuario(e.target.value)} placeholder="Nome de usuário" autoComplete="off"/>
                    <br/>
                    <button type="submit"> Cadastrar </button>
                    </form>
                </div>   
            </Conteudo>        
        </>
    )
}
export default Cadastro;