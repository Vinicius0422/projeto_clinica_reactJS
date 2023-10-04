import styled from "styled-components";

export const AreaCadastro = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   form {
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
   }
    
    input{
        border-radius: 5px;
        border: solid 1px #eee1;
        background-color: #eee;
        padding: 8px;
        outline: none;
        margin-right: 25px;
        margin-bottom: 25px;
        text-transform: uppercase;
    }
`;

export const Input1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    
`;
export const Input2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
`;

export const Input3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`;
export const Input4 = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
`;

export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    margin-top: 30px;

    button{
        padding: 15px 35px;
        border: none;
        border-radius: 5px;
        color: #fff;
        background-color: #01314B;
        cursor: pointer;
        transition: all 0.7s;
    }

    button:hover{
        background-color: #000;
        transform: scale(1.03);
    }
`;
