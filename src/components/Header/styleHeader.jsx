import styled from 'styled-components'

export const Container = styled.header`
    padding: 0;
    margin: 0;
    background-color: #01314B;
    position: relative;
    height: 100vh;
    width: 280px;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 25px;
    height: 100%;

    span{
        font-size: 18px;
        color: #fff;
        font-weight: 500;
    }
`;

export const BtnArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 0;
    align-items: center;
    width: 160px;
    font-size: 13px;
    height: 100%;

    a{
        text-decoration: none;
        color: #000;
        background-color: #fff;
        margin-bottom: 25px;
        padding: 10px 15px;
        border-radius: 5px;
        width: 100%;
        text-align: center;
        transition: .5s;
    }

    a:hover{
        background-color: #000;
        color: #fff;
    }
`;