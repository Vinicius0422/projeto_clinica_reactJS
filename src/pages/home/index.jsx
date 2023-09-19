import { useContext} from "react";
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import { BtnLogOut, Title } from "./styleHome";


export default function Home(){

    const {signed, user, logout} = useContext(AuthContext);

    async function handleLogout() {
        await logout();
    }

    return(
        <div>
            <Header/>
            <Title>Página Inicial </Title>
            <BtnLogOut onClick={handleLogout}>Sair</BtnLogOut>
        </div>

    );
}