import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Funcionario, Title } from './style'
import { FiTrash2, FiEdit } from 'react-icons/fi'
import Header from '../../components/Header';

const Funcionarios = () => {
    const [Funcionarios, setFuncionarios] = useState([]);

    const loadFuncionarios = async () => {
        try {
            const response = await api.get('funcionario');
            setFuncionarios(response.data)

        } catch (error) {
            console.log("loadFuncionario", error)
        }
    };
    ;
    useEffect(() => {
        loadFuncionarios();
    }, []);

    const removeFuncionario = async (funcionario) => {
        await api.delete(`funcionario/${funcionario.id}`)
        loadFuncionarios();
    }
    return (
        <>
            <Header />
            <Title>
                <h1>Controle de Funcionários</h1>
                <button> Cadastrar </button>
            </Title>
            <Funcionario>
                {Funcionarios.map((funcionario) => {
                    return (
                        <div className="cards0" key={funcionario.id}>
                            <div>
                                <h3>{funcionario.nome}</h3>
                                <p> Cpf: {funcionario.cpf}</p>
                            </div>
                            <span>
                                <a href="#"> Acessar </a>
                                <span>
                                    <FiEdit size={22} style={{ opacity: 0.7 }} />
                                    <FiTrash2 size={22} onClick={() => removeFuncionario(funcionario)} style={{ opacity: 0.7 }} />
                                </span>
                            </span>
                        </div>
                    )
                })
                }
            </Funcionario>
        </>
    )
}
export default Funcionarios;