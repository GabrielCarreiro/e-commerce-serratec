import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { Funcionario, Title, Form } from './style'
import { FiTrash2, FiEdit } from 'react-icons/fi'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Header from '../../../components/Header'
/*import Cliente from '../../models/Cliente';*/
const Funcionarios = () => {
    const [Funcionarios, setFuncionarios] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [newNome, setNewNome] = useState('');
    const [newCpf, setNewCpf] = useState('');
    const [idFuncio, setIdFuncio] = useState();
    const [status, setStatus] = useState();
    /*const [cliente, setCliente] = useState(new Cliente());*/
    const loadFuncionarios = async () => {
        try {
            const response = await api.get('funcionario');
            setFuncionarios(response.data)

        } catch (error) {
            console.log("loadFuncionario", error)
        }
    };
    
    useEffect(() => {
        loadFuncionarios();

    }, []);

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

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));


    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render


    const handleOpen = () => {
        setStatus(1)
        setOpen(true);
    };

    const handleNew = () => {
        
        setStatus(0)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const removeFuncionario = async (funcionario) => {
        await api.delete(`funcionario/${funcionario.id}`)
        loadFuncionarios();
    }


    async function alterarCliente(e) {
        e.preventDefault();

        const params = {
            nome: newNome,
            cpf: newCpf
        };

        try {
            await api.put(`funcionario/${idFuncio}`, params);
            loadFuncionarios();
            setNewNome('');
            setNewCpf('');
            handleClose();
        } catch (error) {
            console.log('error alterar Cliente', error);
        }
    }

    async function cadastraCliente(e) {
        e.preventDefault();

        const params = {
            nome: newNome,
            cpf: newCpf
        };

        try {
            await api.post(`funcionario`, params);
            loadFuncionarios();
            setNewNome('');
            setNewCpf('');
            handleClose();
        } catch (error) {
            console.log('error alterar Cliente', error);
        }
    }

    function handleModal(funcionario){
        setIdFuncio(funcionario.id);
        handleOpen();
    }


    return (
        <>
            <Header />
            <Title>
                <button onClick={handleNew}> Cadastrar </button>
            </Title>
            <Funcionario>
                {Funcionarios.map((funcionario) => {
                    return (
                        <div className="cards0" key={funcionario.id}>
                            <div>
                                <h3>{funcionario.nome}</h3>
                                <p> Cpf:{funcionario.cpf}</p>                                             
                            </div>
                            <span>
                                 <FiEdit size={22} style={{ opacity: 0.7 }} onClick={() => handleModal(funcionario)} />
                                 <FiTrash2 size={22} onClick={() => removeFuncionario(funcionario)} style={{ opacity: 0.7 }} />
                            </span>
                        </div>
                    )
                })
                }

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                    {status > 0 ? (
                        <div>
                            <Form>
                                <form onSubmit={alterarCliente} >
                                    <input type="text" value={newNome} onChange={e => setNewNome(e.target.value)} placeholder="Digite o nome"/>
                                    <input type="text" value={newCpf} onChange={e => setNewCpf(e.target.value)}  placeholder="Digite o cpf"/>
                                    <button type="submit">Alterar</button>
                                </form>
                            </Form>
                        </div>
                    ) : (
                            <div>
                                <Form>
                                    <form onSubmit={cadastraCliente} >
                                        <input type="text" value={newNome} onChange={e => setNewNome(e.target.value)} placeholder="Digite o nome"/>
                                        <input type="text" value={newCpf} onChange={e => setNewCpf(e.target.value)} placeholder="Digite o cpf"/>
                                        <button type="submit">Cadastrar</button>
                                    </form>
                                </Form>
                            </div>
                        )
                    }
                </Modal>
            </Funcionario>

        </>
    )
}
export default Funcionarios;
