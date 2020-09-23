import styled from 'styled-components';

export const Produto = styled.div`
    background-color: #7c7ce0;
    margin-top: 40px;
    max-width: 900px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    div{
        background-color: #fafafa;
        padding: 5px;
        border-radius: 8px;
        
        .cards1{
            display: block;
            text-align: center;
            max-width:250px;
            height: 260px;
            
            h3{
                color: #4d4d4d;
            }
            img{
                max-width: 100%;
                max-height: 180px;
             }
        }

        .cards2{
            height: 40px;
            
             p{
                color: #7d7d7d; 
            }
        }
        .cards3{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: bold;
            color: #424242;
            font-size: 18px;

            button{
                width: 80px;
                height: 35px;
                background-color: #3ec300;
                color: #fff;
                border: 0;
                border-radius: 8px;
                cursor: pointer;

                &:hover{
                    background-color: #46d900;
                    color: #fafafa;
                }
               
            }
        }

        .qtd{
            margin-left: 4px;
            color: #a1a1a1; 
        }
        
    }

`;


export const Title = styled.div`
    display: flex;
    justify-content: flex-end;

    label{
        color: #fff;
        margin-right: 7px;
        margin-top: 3px;
    }

    input{
        height: 25px;
        border-radius: 20px;
        border: 0;
        padding: 8px;
        color:  #4d4d4d;
    }

`;
