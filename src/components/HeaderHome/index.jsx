import { Container, Content, BtnArea } from './styleHeader'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';

export default function Header(){

    const { user, } = useContext(AuthContext)

    return(
        <Container>
            <Content>
                <span>Bem-Vindo(a), {user.nome}</span>

                <BtnArea>
                    <Link to="/pacientes">Área Pacientes</Link>
                    <Link to="/profissionais">Área do Profissional</Link>
                    <Link to="/consultas">Marcação de consultas</Link>
                </BtnArea>
            </Content>
        </Container>
    );
}