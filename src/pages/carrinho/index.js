import React, { useEffect, useState } from 'react';
import {Conteudo} from './style';

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
                    <div key={e.id}>
                    <p> {e.nome} </p> 
                    <p> {e.descricao} </p> 
                    <p> {e.valor}</p> <br/>
                    </div>
                )
            })}
           </div>
        ): (
            <div>
                <p> Nenhum produto no carrinho</p>
            </div>
        )}
        <button onClick={e => limpar()}> Limpar Lixeira </button>
        <button onClick={e => limpar()}> <a href="/"> Finalizar Compra </a></button>
       </Conteudo> 
    )
}

export default Carrinho;