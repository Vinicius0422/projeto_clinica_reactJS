import styled from "styled-components";

export const PacientesArea = styled.div`
    display: flex;
`;

export const ContentGeral = styled.div`
        height: 100vh;
        width: calc(100% - 300px);
        display: flex;
        flex-direction: column;
        padding: 90px 15px;
        justify-content: center;
`;

export const SearchArea = styled.div`
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        span{
        font-size: 20px;
        font-weight: bold;
    }

    input{
        margin-top: 15px;
        width: 400px;
        border: none;
        background-color: #eee;
        padding: 7px 12px;
        border-radius: 5px;
        outline: 0;
    }

    button{
        margin-top: 15px;
        padding: 10px 15px;
        width: fit-content;
        border-radius: 5px;
        border: none;
        background-color: #01314B;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
    }

`;

export const ResultCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    background-color: #eee;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.7);

    div svg{
        cursor: pointer;
    }

    div svg+svg{
        margin-left: 5px;
    }

`;

export const NotResult = styled.div`
    margin-top: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
`;

