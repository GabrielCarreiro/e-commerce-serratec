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
import {Conteudo} from './style'


/*import Cliente from '../../models/Cliente';*/
const ControleProduto = () => {
    const [produto, setProduto] = useState([]);
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [categoria, setCategoria] = useState([]);
    const [funcionario, setFuncionario] = useState([]);


    const loadProduto = async () => {
        try {
            const response = await api.get('produto');
            setProduto(response.data)
        } catch (error) {
            console.log("loadProduto", error)
        }
    };

    const loadCategoria = async () => {
        try {
            const response = await api.get('categoria');
            setCategoria(response.data)
        } catch (error) {
            console.log("loadCategoria", error)
        }
    };

    const loadFuncionario = async () => {
        try {
            const response = await api.get('funcionario');
            setFuncionario(response.data)
        } catch (error) {
            console.log("loadFuncionario", error)
        }
    };

    
    useEffect(() => {
        loadProduto();
        loadCategoria();
        loadFuncionario();
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
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const removeProduto = async (produto) => {
        await api.delete(`produto/${produto.id}`)
        loadProduto();
    }


    return (
        <>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead >
                            <TableRow style={{ backgroundColor: "#FFFFFF !important" }}>
                                <StyledTableCell>Nome</StyledTableCell>
                                <StyledTableCell align="center">Valor</StyledTableCell>
                                <StyledTableCell align="center">Categoria</StyledTableCell>
                                <StyledTableCell align="center">Estoque</StyledTableCell>
                                <StyledTableCell align="center">Gerenciar</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {produto.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.nome}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.valor}</StyledTableCell>
                                    <StyledTableCell align="center">{row.nomeCategoria}</StyledTableCell>
                                    <StyledTableCell align="center">{row.qtdEstoque}</StyledTableCell>
                                    <StyledTableCell align="center"> <FiTrash2 size={20} onClick={() => removeProduto(row)} /> <FiEdit size={20} /></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div>
                    <button type="button" onClick={handleOpen}>
                        Open Modal
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}

                    >
                        {                          
                            <Conteudo>
                                 <form>
                                     <div className="grupo">
                                        <label id="nome"> Nome </label>
                                            <input type="text" id="nome"/>

                                        <label id="descricao"> Descrição </label>
                                            <input type="text" id="descricao"/>

                                        <label id="qtdEstoque"> Estoque </label>
                                        <input type="text" id="qtdEstoque"/>

                                        <label id="valor"> valor </label>
                                        <input type="text" id="valor"/>

                                        <label id="categoria"> Categoria </label>
                                        <select id="categoria"> 
                                            {categoria.map((categ)=>{
                                                return(
                                                    <option value={categ.id}>{categ.nome}</option>
                                                )
                                            })}
                                            
                                        </select>
                                        <label id="funcionario"> Funcionario </label>
                                        <select id="funcionario"> 
                                            {funcionario.map((funcio)=>{
                                                return(
                                                    <option value={funcio.id}>{funcio.nome}</option>
                                                )
                                            })}
                                            
                                        </select>

                                     </div>
                                </form>
                            </Conteudo>
                            
                        }
                    </Modal>
                </div>
            </div>
        </>
    )
}
export default ControleProduto;