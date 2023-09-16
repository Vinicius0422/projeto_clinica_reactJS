import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #DFDADA;
`;

export const HeaderLogin = styled.header`
    height: 100%;
    width: 300px;
    background-color: #222;
    color: #eee;
    padding: 100px 0;
`;

export const HeaderContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 30px;
    }

    h2{
        padding-top: 140px;
    }
`;

export const LoginContainer = styled.div`
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

export const LoginArea = styled.div`
    background-color: #BFBEBE;
    width: 450px;
    height: 400px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0, 0.3);
`;

export const LoginContent = styled.div`
    padding: 50px 30px;
    height: 100%;

    h2{
        text-align: center;
    }
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    position: relative;
    height: 210px;
    justify-content: space-around;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    background-color: #FFF;
    border-radius: 10px;

    input{
        color: #B2ACAC;
        font-size: 15px;
        margin-left: 10px;
        flex: 1;
        border: 0;
        padding: 5px 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    input:focus-visible{
        outline: none;
    }

    svg{
        color: #B2ACAC;
        margin-left: 10px;
    }
`;

export const Password = styled.div`
     display: flex;
    align-items: center;
    background-color: #FFF;
    border-radius: 10px;

    input{
        color: #B2ACAC;
        font-size: 15px;
        margin-left: 10px;
        flex: 1;
        border: 0;
        padding: 5px 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    input:focus-visible{
        outline: none;
    }

    svg{
        color: #B2ACAC;
        margin-left: 10px;
    }
`;

export const LoginBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        padding: 12px 45px;
        border-radius: 10px;
        border: none;
        color: #000;
        font-size: 15px;
        cursor: pointer;
    }
`;