import styled from 'styled-components';


export const Table = styled.div` 
margin:60px;
column-rule-width: 1px;
border: 1px solid #ddd;
background: whitesmoke;
box-align:  auto;

th{

padding: 10px;
text-align: center;
background-color: #7c7ce0;
color: whitesmoke;

}

td {
    
    text-align: left;
    padding:5px;
    width: 500px;  
}

tr:nth-child(even) {background-color: #c1c1f4;}

tr:hover {
    background-color: #ddd;
}

`;

export const ClienteModal = styled.div`
display: flex;
    background-color: #fff;
    justify-content: center;
    max-width:880px;
    height: 380px;
    margin:150px auto;
    background-color: #f5f5f5;
    

    .formCliente{
        display: flex;
        flex-wrap: wrap;
        flex-flow: row-wrap;
        margin: 0 40px 0 0;
        padding: 30px;
        justify-content: center;
        align-items: center;    
        
        label{
            color: #7C7CE0;
            font-weight: 600;
            display: flex;
            justify-content: flex-end;
            align-self: flex-end;
            width: 100px;
            flex-grow:1;
        }

        input{
            border: none;
            border-bottom: 2px solid;
            width: 270px;
            height: 40px;
            padding: 8px;
            border-color: #7C7CE0;
            color: #000;
            background-color: transparent;
            align-self: flex-end;
            flex-grow: 1;
            
            &:hover,
            &:focus{
                outline: none;
                background-color: #7C7CE0;
                opacity: 0.7;
                color: #fafafa; 
            }

        }
        
        button{
            margin: 50px auto 0px auto;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #3ec300;
            color: #fff;
            width: 120px;
            height: 60px;
            border-radius: 8px;
            border: 0;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            font-weight: 700;

            &:hover{
                background-color: #46d900;
                color: #fafafa;
                cursor: pointer;    
            }
        }
    }
`;


