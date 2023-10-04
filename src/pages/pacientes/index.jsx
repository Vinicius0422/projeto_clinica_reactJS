import { Link, Navigate } from "react-router-dom";
import { Container, Content, BtnsArea, SelectedBtn, NotSelectedBtn } from "../../components/HeaderHome/styleHeader";
import { ContentGeral, PacientesArea, SearchArea, ResultCard, NotResult} from "./stylePaciente";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6"
import { FaRegEdit } from "react-icons/fa"

import { auth, db, storage } from "../../services/firebaseConnection";
import { collection, doc, getDocs, query } from "firebase/firestore";
import Modal from "../../components/Modal";


export default function Pacientes() {

    const listRef = collection(db, "pacientes")

    const [cpfSearch, setCpfSearch] = useState('')
    const [cpfResult, setCpfResult] = useState()
    const [cpfIsEmpty, setCpfIsEmpty] = useState(false)

    const [details, setDetails] = useState(false)
    const [id, setId] = useState()


    async function handleSearch(cpfSearch) {

        const q = query(listRef);

        const querySnapshot = await getDocs(q);

        const isCollectionEmpty = querySnapshot.size === 0;

        if (isCollectionEmpty) {
            setCpfIsEmpty(true)
            return;
        }

        let list = [];

        querySnapshot.forEach((doc) => {
            if (doc.data().cpf === cpfSearch) {   
                setCpfResult(doc.data())
                setId(doc.id)
                list.push({
                    id: doc.id
                })
                return;
            }
            console.log(list)
        })

        if(list.length > 0){
            setCpfIsEmpty(false)
            setCpfSearch('')
        }else{
            setCpfIsEmpty(true)
            setCpfSearch('')
        }
    }


    console.log(cpfIsEmpty)
    return (

        <PacientesArea>
            <Container>
                <Content>
                    <span>Pacientes</span>
                    <BtnsArea>
                        <NotSelectedBtn to="/home">Home</NotSelectedBtn>
                        <SelectedBtn to="/pacientes">Procurar</SelectedBtn>
                        <NotSelectedBtn to="/pacientes/cadastro">Cadastrar</NotSelectedBtn>
                    </BtnsArea>
                </Content>
            </Container>

            <ContentGeral>
                <SearchArea>
                    <span>Procurar</span>

                    <input placeholder="Digite o CPF" value={cpfSearch} onChange={(e) => setCpfSearch(e.target.value)} />

                    <button onClick={() => handleSearch(cpfSearch)}>Pesquisar</button>
                
                
                    {cpfResult && cpfIsEmpty !== true &&

                            <ResultCard>
                                <label>Nome: {cpfResult.nome}</label>
                                <label>Cpf: {cpfResult.cpf}</label>
                                <div>
                                    <FaMagnifyingGlass onClick={() => setDetails(true)} size={15} />
                                    {/* <FaRegEdit size={15} /> */}
                                </div>
                            </ResultCard>}
                    {!cpfResult && cpfIsEmpty === true && <NotResult>
                        Nenhum resultado encontrado
                    </NotResult>}

                
                </SearchArea>
                {details && (
                    <Modal infos={cpfResult} id={id} handleSearch={handleSearch} close={() => setDetails(!details)}/>
                )}
            </ContentGeral>
        </PacientesArea>

    );
}