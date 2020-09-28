import React, { useEffect, useState } from 'react';
import { Conteudo, Table } from './style';
import { FiTrash2 } from 'react-icons/fi'
import { FcCancel } from "react-icons/fc";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';



const Carrinho = () => {

    const [produto, setProduto] = useState([]);
    const [valorTotal, setValorTotal] = useState(false);
    const [login, setLogin] = useState();
    const [produtoAtua, setProdutoAtua] = useState();
    var total = [];
    const history = useHistory();


    const buscarProdutos = () => {
        var produtos = JSON.parse(localStorage.getItem('@LOJA:produto'));
        setProduto(produtos)
    }

    useEffect(() => {
        buscarProdutos();
        atualizarEstoque();
    }, []);

    function limpar() {
        localStorage.removeItem('@LOJA:produto');
        setProduto('')
    }

    const calcularValorTotal = () => {
        produto.map((e) => {
            total.push(e.valor)
        })
        if(!valorTotal){
           setValorTotal(total.reduce((total, currentElement) => total + currentElement))
        }
    }

    async function atualizarEstoque(){
        try {
            const response =  await api.get('produto'); 
            setProdutoAtua(response.data)
        } catch (error) {
            console.log("erro ao atualizar o estoque" ,error )
        }
    }
    
    const comprar = async () =>{

        var teste = '';
      
        if(!localStorage.getItem('@LOJA:user')){
            setLogin(<Alert  severity="error">
            <AlertTitle style={{textAlign: "left"}}>---Erro</AlertTitle>
            Você precisa estar logado para comprar!!!!
            </Alert>);
            setTimeout(() => {
                setLogin(false)
            }, 3000);

       
        

            return;
        }else{

             produto.map( async(prod,t) => { 
                atualizarEstoque();
                    produtoAtua.map((x) =>{
                        if(x.nome === prod.nome){
                            teste = x;
                        }
                    })             
                    if(teste){       
                        const params = {
                            nome: prod.nome,
                            descricao: prod.descricao,
                            qtdEstoque: teste.qtdEstoque -1,
                            valor: prod.valor,
                            idCategoria: prod.idCategoria,
                            idFuncionario: prod.idFuncionario,
                            dataFabricao: prod.dataFabricacao,
                            fotoLink: prod.fotoLink
                            }
                                alterarEstoque(params,prod.id)        
                            }    
                })
             
        }
        setTimeout(() => {
            limpar();
            history.push("/sucesso")
        }, 3000);
    }
    
    async function alterarEstoque (params, produtoID){
        try {
           await api.put(`produto/${produtoID}`, params); 
           atualizarEstoque();            
         } catch (error) {
             console.log('Erro na compra', error);
         }
    }

    function removerProduto(a){
        var produtos = JSON.parse(localStorage.getItem('@LOJA:produto'));

        produtos.splice(a,1)
         
        localStorage.setItem('@LOJA:produto',JSON.stringify(produtos));
        buscarProdutos();
    }


    return (
        <Conteudo>
            {produto ? (
                <div>
                    {produto.map((p, a) => {
                        return (
                            <Table key={p.id}>
                                <tr>
                                    <th>Produto</th>
                                    <th>Nome</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                    <th>Excluir</th>
                                </tr>
                                <tr>         
                                    <td><img src={p.fotoLink} style={{ maxWidth: "65px" }} ></img></td>
                                    <td> {p.nome} </td>
                                    <td> {p.descricao}</td>
                                    <td> {p.valor}</td>
                                    <td style={{ textAlign: "center" }}><FcCancel size={20} onClick={e => removerProduto(a)} /></td>
                                </tr>
                            </Table>
                        )
                    })}
                    <div>

                    <p> Valor Total R$ {valorTotal} </p>
                    <Button id="btnTotal" variant="contained" onClick={e => calcularValorTotal()}  size="10" >Calcular</Button>
                        


                    </div>
                </div>
            ) : (
                    <div>
                        <p> Nenhum produto no carrinho</p>
                    </div>
                )}

            <Button id="btnLimpar" variant="contained" color="secondary" onClick={e => limpar()} >
                Limpar
            </Button>
       
            <Button id="btnComprar" variant="contained" color="primary" onClick={e => comprar()}  >
                Comprar
        </Button>
        
        <span id="msgLog">{login}</span>
        </Conteudo>
    )
}

export default Carrinho;