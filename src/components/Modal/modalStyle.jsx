import styled from "styled-components";

export const Details = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
    padding: 110px 0;
`;

export const DetailsArea = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    height: 100%;
    margin: 0 auto;
    max-width: 800px;
    border-radius: 5px;
    box-shadow: 0 0 20px  rgba(0,0,0,0.6);
    padding-left: 25px;

    svg{
        cursor: pointer;
        color: #01314B;
        position: absolute;
        top: 15px;
        right: 15px;
    }
`;

export const Inputs = styled.form`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    label{
        margin-bottom: 5px;
        color: #000;
        font-weight: 600;
    }

    input{
        border-radius: 5px;
        border: solid 1px #eee1;
        background-color: #cfcfcf;
        padding: 8px;
        outline: none;
        margin-right: 25px;
        margin-bottom: 25px;
        color: #000;
        font-weight: 500;
        letter-spacing: 0.5px;
        font-size: 15px;
    }

    input:disabled{
        cursor: not-allowed;
    }

    button{
        position: absolute;
        bottom: 25px;
        padding: 15px 25px;
        right: 60px;
        border-radius: 5px;
        color: #fff;
        background-color: #01314B;
        border: none;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.5s;
    }

    button:hover{
        background-color: #000;
    }
`;