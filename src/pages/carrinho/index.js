import React, { useEffect, useState } from 'react';
import {Conteudo, Table } from './style';
import { FiTrash2 } from 'react-icons/fi'
import { FcCancel } from "react-icons/fc";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const Carrinho = () => {

    const [produto, setProduto] = useState([]);

    const buscarProdutos = () => {
        var produtos = JSON.parse(localStorage.getItem('@LOJA:produto'));
        setProduto(produtos)
    }

    useEffect(() => {
        buscarProdutos();
    },[]);

    function limpar(){
        localStorage.removeItem('@LOJA:produto');
        setProduto('')
    }

    return (
       <Conteudo>
        {produto ? (
           <div>
                {produto.map((e) =>{
                return(
                <Table>
                    <tr>
                        <th>Produto</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Valor</th>  
                        <th>Excluir</th>
                    </tr>

                    <tr key={e.id}>
                        <td><img src={e.fotoLink} style={{maxWidth: "65px"}} ></img></td>
                        <td > {e.nome} </td> 
                        <td > {e.descricao}</td> 
                        <td> {e.valor}</td>
                        <td style={{textAlign:"center"}}><FcCancel size={20} onClick={e => limpar()}/></td>
                    </tr>
                </Table>
                )
            })}
           </div>
        ): (
            <div>
                <p> Nenhum produto no carrinho</p>
            </div>
        )}

        
        <Button variant="contained" color="secondary" onClick={e => limpar()} >
        Limpar
        </Button>
        <Button variant="contained" color="primary" onClick={e => limpar() } href="/" >
        Comprar
        </Button>
       
       </Conteudo> 
    )
}

export default Carrinho;