import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const ControleCliente = () => {
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [cliente, setCliente] = useState([]);
    const [IdClient,setIdClient] = useState();
    const [newNomeClien, setnewNomeClien] = useState();
    const [newCpf, setNewCpf] = useState();
    const [newEmail, setNewEmail] = useState();
    const [newUsuario, setNewUsuario] = useState();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

    const loadCliente = async () => {
        try {
            const response = await api.get('cliente');
            setCliente(response.data)
        } catch (error) {
            console.log("Erro load Cliente", error)
        }
    };


    useEffect(() => {
        loadCliente();
    }, []);



    const removeCliente = async (client) => {
        await api.delete(`cliente/${client.id}`)
        loadCliente();
    };


    async function alterarCliente(e) {
        e.preventDefault();

        const params = {
            nome:newNomeClien,
            usuario:newUsuario,
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
            await api.put(`cliente/${IdClient}`, params);
            loadCliente();
            handleClose();
        } catch (error) {
            console.log('Erro ao alterar Cliente', error);
        }
    }

    function OpenModal(client) {
        setIdClient(client)
        handleOpen();
    }

    return (
        <>
            {cliente.map((client) => {
                return (
                    <div key={client.id} className="cards">
                        {client.nome}
                        {client.cpf}
                        {client.email}
                        {client.usuario}
                        <button type="button" onClick={e => OpenModal(client.id)}>Alterar</button>
                        <button type="button" onClick={() => removeCliente(client)}> Excluir </button>
                    </div>
                )
            })}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {<div>
                    <form onSubmit={alterarCliente}>
                    <label id="nome">Nome</label>
                    <input type="text" id="nome" value={newNomeClien} onChange={e => setnewNomeClien(e.target.value)}/>

                    <label id="cpf">CPF</label>
                    <input type="text" id="cpf" value={newCpf} onChange={e => setNewCpf(e.target.value)}/>

                    <label id="email">Email</label>
                    <input type="text" id="email" value={newEmail} onChange={e => setNewEmail(e.target.value)}/>

                    <label id="usuario">Usuario</label>
                    <input type="text" id="usuario" value={newUsuario} onChange={e => setNewUsuario(e.target.value)}/>

                    <button type="submit"> Alterar </button>
                    </form>
                </div>
            }
            </Modal>
        </>
    )
}
export default ControleCliente;