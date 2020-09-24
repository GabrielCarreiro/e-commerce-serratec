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


/*import Cliente from '../../models/Cliente';*/
const ControleProduto = () => {
    const [produto, setProduto] = useState([]);
    

    const loadProduto = async () => {
        try {
            const response = await api.get('produto');
            setProduto(response.data)
        } catch (error) {
            console.log("loadProduto", error)
        }
    };
    useEffect(() => {
        loadProduto();
    }, []);

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
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

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });

    const classes = useStyles();



    return (
        <>
            <div>
                
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                <StyledTableCell align="right">Calories</StyledTableCell>
                                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {produto.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.nome}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.valor}</StyledTableCell>
                                    <StyledTableCell align="right">{row.descricao}</StyledTableCell>
                                
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>

        </>
    )
}
export default ControleProduto;