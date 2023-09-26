import { useContext} from "react";
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/HeaderHome";
import { BtnLogOut, HomeArea, HomeContent, Title } from "./styleHome";


export default function Home(){

    const {signed, user, logout} = useContext(AuthContext);

    async function handleLogout() {
        await logout();
    }

    return(
        <HomeArea>
            <Header/>
            <HomeContent>
                <Title>Página Inicial </Title>
                <BtnLogOut onClick={handleLogout}>Sair</BtnLogOut>
            </HomeContent>
        </HomeArea>

    );
}