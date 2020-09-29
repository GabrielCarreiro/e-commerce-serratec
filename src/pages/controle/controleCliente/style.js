import styled from 'styled-components';


export const Table = styled.div` 
    margin:60px;
    column-rule-width: 1px;
    border: 1px solid #ddd;
    background: whitesmoke;
    box-align:  auto;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

th{

padding: 18px;
text-align: center;
background-color: #f5f5f5;
color: #303030;

}

td {
    
    text-align: center;
    padding:5px;
    width: 500px;  
    color: #303030;
    border-radius: 3px;

}

tr{
    transition: 0.2s;
}

tr:nth-child(even) {
    background-color: #c1c1f4;
    
}


tr:hover {
    background-color: #ddd;
}

`;

export const ClienteModal = styled.div`
    display: flex;
    background-color: #fff;
    margin: 150px auto;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    max-width: 500px;
    justify-content: center;

    form {
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;
        align-items:center;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        opacity: 0.9;
    }

    form input {
        width: 100%;
        margin: 10px 0;
        border: 0;
        margin-bottom: 10px;
        border-bottom: 1px solid #7c7ce0;
        padding: 6px;
        color: #303030;
    
        &:hover,
        &:focus{
            outline: none;
            background-color: #7C7CE0;
            opacity: 0.7;
            color: #fff;    
        }

        &::placeholder{
            color: #cdcdcd;
        }    
    }

    form label{
        text-align: center;
        font-weight: bold;
        color: #7c7ce0;
        width: 1000px;
    }

    form button{
        width: 75px;
        height: 30px;
        background-color: #3ec300;
        color: #fff;
        border: 0;
        border-radius: 6px;
        transition: 0.2s;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        text-align: center;
        margin: 10px 0;
        padding: 5px;
        font-size: 16px;
        font-weight: bold;

        &:hover{
            background-color: #46d900;
            color: #fafafa;
        }
}
  
`;



