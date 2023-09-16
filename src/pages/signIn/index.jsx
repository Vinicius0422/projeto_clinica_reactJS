import React, { useContext, useState } from "react";
import './style'

import {Container, HeaderLogin, HeaderContent, LoginContainer, LoginArea, LoginContent, InputArea, User, Password, LoginBtn} from './style'

import {FaUserAlt, FaLock} from 'react-icons/fa'
import { AuthContext } from "../../contexts/auth";


export default function SignIn(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext)


    function handleSubmit(e){
        e.preventDefault();

        if(email !== '' && password !== ''){
            signIn(email, password);
        }
    }

    return(
        <Container>
            <HeaderLogin>
                <HeaderContent>
                    <h1>Clinica de Estética</h1>
                    <h2>Welcome</h2>
                </HeaderContent>
            </HeaderLogin>
            <LoginContainer>
                <LoginArea>
                    <LoginContent>
                    <h2>Login</h2>
                    
                    <form onSubmit={handleSubmit}>
                        <InputArea>
                            <User>
                                <FaUserAlt/>
                                <input type="email" 
                                placeholder="email@email.com" 
                                value={email} 
                                onChange={(e)=> setEmail(e.target.value)}/>
                            </User>

                            <Password>
                                <FaLock/>
                                <input type="password"
                                placeholder="********" 
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}/>
                            </Password>
                        </InputArea>

                        <LoginBtn><button>Login</button></LoginBtn>
                    </form>
                    </LoginContent>
                </LoginArea>
            </LoginContainer>
        </Container>
    );
}