import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Produto, Title } from './style'

const Produtos = () => {
    const [Produtos, setProduto] = useState([]);
    const [ProdutoFiltrado, setProdutoFiltrado] = useState("");

    const loadProdutos = async () => {
        try {
            const response = await api.get('produto');
            setProduto(response.data)

        } catch (error) {
            console.log("loadProdutos", error)
        }
    };
    ;
    useEffect(() => {
        loadProdutos();
    }, []);

    /*const removeFuncionario = async (funcionario) => {
        await api.delete(`funcionario/${funcionario.id}`)
        loadFuncionarios();
    }*/
    return (
        <>
            {ProdutoFiltrado === "" ? (
                <>
                    <Title>
                        <label>Filtrar</label>
                        <input value={ProdutoFiltrado} onChange={e => setProdutoFiltrado(e.target.value)} type="text" placeholder="Digite o nome ou preço" />
                    </Title>
                    <Produto>
                        {Produtos.map((produto) => {
                            return (
                                <div key={produto.id}>
                                    <div className="cards1">
                                        <h3>{produto.nome}</h3>
                                        <div className="cards2" >
                                            <p>{produto.descricao} </p>
                                        </div>
                                        <img src={produto.fotoLink} />
                                    </div>
                                    <span className="qtd">Estoque: {produto.qtdEstoque}</span>
                                    <div className="cards3">
                                        <p>R$:{produto.valor}</p>
                                        <button>Comprar</button>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </Produto>
                </>
            ) : (
                    <>
                        <Title>
                            <label>Filtrar</label>
                            <input value={ProdutoFiltrado} onChange={e => setProdutoFiltrado(e.target.value)} type="text" placeholder="Digite o nome ou preço" />
                        </Title>
                        <Produto>
                            {Produtos.map((produto) => {
                                if (produto.nome.toUpperCase() === ProdutoFiltrado.toUpperCase()) {
                                    return (
                                        <div key={produto.id}>
                                            <div className="cards1" >
                                                <h3>{produto.nome}</h3>
                                                <div className="cards2" >
                                                    <p>{produto.descricao} </p>
                                                </div>
                                                <img src={produto.fotoLink} />
                                            </div>
                                            <span className="qtd">Estoque: {produto.qtdEstoque}</span>
                                            <div className="cards3">
                                                <p>R$:{produto.valor}</p>
                                                <button>Comprar</button>
                                            </div>
                                        </div>
                                    )
                                } else if (produto.valor == ProdutoFiltrado) {
                                    return (
                                        <div key={produto.id}>
                                            <div className="cards1" >

                                                <h3>{produto.nome}</h3>
                                                <div className="cards2" >
                                                    <p>{produto.descricao} </p>
                                                </div>
                                                <img src={produto.fotoLink} />
                                            </div>

                                            <span className="qtd">Estoque: {produto.qtdEstoque}</span>
                                            <div className="cards3">
                                                <p>R$:{produto.valor}</p>
                                                <button>Comprar</button>

                                            </div>
                                        </div>
                                    )
                                }
                            })
                            }
                        </Produto>
                    </>
                )
            }
        </>
    )
}
export default Produtos;