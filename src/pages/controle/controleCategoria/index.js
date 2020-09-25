import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FiTrash2, FiEdit } from 'react-icons/fi'
import Modal from '@material-ui/core/Modal';
import { TabUnselectedSharp, TrafficRounded } from '@material-ui/icons';


/*import Cliente from '../../models/Cliente';*/
const ControleCategoria = () => {
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [categoria, setCategoria] = useState([]);
    const [status, setStatus] = useState();
    const [newIdCate, setNewIdCate] = useState();
    const [newNomeCate, setNewNomeCate] = useState('');
    const [newDescriCate, setNewDescriCate] = useState('');
    const [idCate, setIdCate] = useState();



    const loadCategoria = async () => {
        try {
            const response = await api.get('categoria');
            setCategoria(response.data)
        } catch (error) {
            console.log("Erro load Categoria", error)
        }
    };


    useEffect(() => {
        loadCategoria();
    }, []);

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.light,
            color: theme.palette.common.black,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);


    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });

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

    const useStylesModel = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classesModel = useStylesModel();
    const classes = useStyles();


    const handleOpen = () => {
        setStatus(true)
        setOpen(true);
    };

    const handleOpenCadastrar = () => {
        setStatus(false)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const removeCategoria = async (catego) => {
        await api.delete(`categoria/${catego.id}`)
        loadCategoria();
    };

    async function cadastrarCategoria(e) {
        e.preventDefault();

        const params = {
            nome:newNomeCate,
            descricao:newDescriCate
        }

        console.log(newNomeCate)
        console.log(params)

        try {
            await api.post(`categoria`, params);
            loadCategoria();
            handleClose();

        } catch (error) {
            console.log('Erro ao cadastrar a categoria', error);
        }
    }

    async function alterarProduto(e) {
        e.preventDefault();

        const params = {
            nome:newNomeCate,
            descricao:newDescriCate
        }

        try {
            await api.put(`categoria/${idCate}`, params);
            loadCategoria();
            handleClose();
        } catch (error) {
            console.log('Erro ao alterar Categoria', error);
            

        }
    }

    function teste(catego) {
        setIdCate(catego)
        handleOpenCadastrar();
    }


    return (
        <>
            <button type="button" onClick={handleOpen}>
                Open Modal
                    </button>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead >
                            <TableRow >
                                <StyledTableCell align="center">ID</StyledTableCell>
                                <StyledTableCell align="center">Nome</StyledTableCell>
                                <StyledTableCell align="center">Descrição</StyledTableCell>
                                <StyledTableCell align="center">Gerenciar</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {categoria.map((catego) => (
                                <StyledTableRow key={catego.id} >
                                    <StyledTableCell component="th" scope="row">
                                        {catego.id}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{catego.nome}</StyledTableCell>
                                    <StyledTableCell align="center">{catego.descricao}</StyledTableCell>
                                    <StyledTableCell align="center"> <FiTrash2 size={20} onClick={() => removeCategoria(catego)} />
                                    <FiEdit size={20} onClick={e => teste(catego.id)} /></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}>
                        {
                            <div>
                                {status ? (
                                    <form onSubmit={cadastrarCategoria}>
                                        <div className="grupo">
                                            <label id="nome"> Nome </label>
                                            <input type="text" id="nome" value={newNomeCate} onChange={e => setNewNomeCate(e.target.value)}/>
                                            <label id="descricao"> Descrição </label>
                                            <input type="text" value={newDescriCate} onChange={e => setNewDescriCate(e.target.value)} id="descricao" />
                                            <button type="submit" > Cadastrar</button>
                                        </div>
                                    </form>
                                ) : (
                                        <form onSubmit={alterarProduto}>
                                            <div className="grupo">
                                                <label id="nome" > Nome </label>
                                                <input type="text" value={newNomeCate} onChange={e => setNewNomeCate(e.target.value)} id="nome" />
                                                <label id="descricao"> Descrição </label>
                                                <input type="text" value={newDescriCate} onChange={e =>  setNewDescriCate(e.target.value)} id="descricao" />
                                                <button type="submit" > Alterar</button>
                                            </div>
                                        </form>
                                    )}
                            </div>
                        }
                    </Modal>
                </div>

            </div>
        </>
    )
}
export default ControleCategoria;