import styled from 'styled-components';


export const Table = styled.div` 
margin:60px;
column-rule-width: 1px;
border: 1px solid #ddd;
background: whitesmoke;
box-align:  auto;
border-radius: 5px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

th{

padding: 18px;
text-align: center;
background-color: #f5f5f5;
color: #5c5c5c;


}

td {
    
    text-align: center;
    padding:5px;
    width: 500px;  
    color: #303030;
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




