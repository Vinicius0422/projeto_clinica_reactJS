import styled from "styled-components";

export const ProfissionaisArea = styled.div`
    display: flex;
`;

export const ContentProfissionais = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


    span{
        font-size: 20px;
        font-weight: 500;
    }
`;

export const Button = styled.button`
        margin-top: 15px;
        margin-right: 15px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        background-color: ${props => props.selected ? '#C1333D' : '#eee'};
        color: ${props => props.selected ? '#fff' : '#000'};
        font-weight: 500;
        cursor: pointer;

    Button:hover{
        background-color: #C1333D;
        color: #fff;
    }
`;

export const FilterArea = styled.div`

    margin-top: 50px;

    div{
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }

    input, button{
        border-radius: 5px;
        font-size: 15px;
    }

    input{
        width: 300px;
        border: 2px solid #ccc;
        margin-right: 20px;
        outline: none;
        padding: 5px;
    }

    button{
        border: none;
        background-color: #01314B;
        color: #fff;
        font-weight: 500;
        cursor: pointer;
        padding: 7px;
    }
`;

export const Result = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;

    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
        width: 100%;
    }

    li{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ddd;
        padding: 5px;
        border-radius: 5px;
        border: 2px solid #ccc;
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.6);


        & + li{
        margin-top: 10px;
    }
        
        span{
            font-size: 15px;
        }

        svg{
            cursor: pointer;
        }
    }

    
`;