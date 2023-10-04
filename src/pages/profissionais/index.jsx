import { useState } from "react";
import { BtnsArea, Container, Content, NotSelectedBtn, SelectedBtn } from "../../components/HeaderHome/styleHeader";
import { ContentGeral, SearchArea } from "../pacientes/stylePaciente";
import { Button, ContentProfissionais, FilterArea, ProfissionaisArea, Result } from "./styleProfissionais";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

import { GrSchedules } from "react-icons/gr"

export default function Profissionais() {

    const [nome, setNome] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [filter, setFilter] = useState('');
    const [resultEmpty, setResultEmpty] = useState(false);
    const [result, setResult] = useState()
    const [selected1, setSelected1] = useState(false)
    const [selected2, setSelected2] = useState(false)

    const findByName = async (nome) => {
        setResultEmpty(false)
        setResult()
        const listRef = collection(db, "profissionais")
        const querySnapshot = await getDocs(listRef)
        const isCollectionEmpty = querySnapshot.size === 0;

        if (isCollectionEmpty) {
            setResultEmpty(true)
            return;
        }

        let list = [];

        querySnapshot.forEach((doc) => {
            if (doc.data().nome === nome) {
                list.push({
                    nome: doc.data().nome,
                    especialidade: doc.data().especialidade,
                })
            }
        })

        if (list.length > 0) {
            setResult(list);
            setNome('')
        } else {
            setResultEmpty(true);
            setNome('')
        }
    }

    function handleFilter(action) {
        if (action === 'nome') {
            setSelected1(true)
            setSelected2(false)
            setEspecialidade('')
        } else {
            setSelected1(false)
            setSelected2(true);
            setNome('')
        }
        setFilter(action)
        setResult()
        setResultEmpty(false)
    }

    const findByArea = async (especialidade) => {
        setResultEmpty(false)
        setResult()
        const listRef = collection(db, "profissionais")
        const querySnapshot = await getDocs(listRef)
        const isCollectionEmpty = querySnapshot.size === 0;

        if (isCollectionEmpty) {
            setResultEmpty(true)
            return;
        }

        let list = [];

        querySnapshot.forEach((doc) => {
            if (doc.data().especialidade === especialidade) {
                list.push({
                    nome: doc.data().nome,
                    especialidade: doc.data().especialidade,
                })
            }
        })

        if (list.length > 0) {
            setResult(list);
            setNome('')
        } else {
            setResultEmpty(true);
            setNome('')
        }
    }

    return (
        <ProfissionaisArea>
            <Container>
                <Content>
                    <span>Profissionais</span>

                    <BtnsArea>
                        <NotSelectedBtn to="/home">Home</NotSelectedBtn>
                        <SelectedBtn to="/profissionais">Procurar</SelectedBtn>
                    </BtnsArea>
                </Content>
            </Container>
            <ContentGeral>
                <ContentProfissionais>

                    <span>Procurar por</span><br />
                    <div>
                        <Button selected={selected1} onClick={() => handleFilter('nome')}>Nome</Button>
                        <Button selected={selected2} onClick={() => handleFilter('especialidade')}>Especialidade</Button>
                    </div>
                    {filter === 'nome' && (
                        <FilterArea>
                            <input type="text" placeholder="Digite o nome..." value={nome} onChange={(e) => { setNome(e.target.value) }} />
                            <button onClick={() => findByName(nome)}>Pesquisar</button>


                            {resultEmpty && (
                                <div>
                                    <span>Nenhum resultado encontrado!</span>
                                </div>
                            )}

                            <Result>
                                <ul>
                                    {result && (
                                        result.map((r) => (
                                            <li key={r.nome}>
                                                <span>{r.nome}</span>
                                                <span>{r.especialidade}</span>
                                                <GrSchedules size={18} />
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </Result>
                        </FilterArea>
                    )}
                    {filter === 'especialidade' && (

                        <FilterArea>
                            <input type="text" placeholder="Digite a especialidade..." value={especialidade} onChange={(e) => { setEspecialidade(e.target.value) }} />
                            <button onClick={() => findByArea(especialidade)}>Pesquisar</button>


                            {resultEmpty && (
                                <div>
                                    <span>Nenhum resultado encontrado!</span>
                                </div>
                            )}

                            <Result>
                                <ul>
                                    {result && (
                                        result.map((r) => (
                                            <li key={r.nome}>
                                                <span>{r.nome}</span>
                                                <span>{r.especialidade}</span>
                                                <GrSchedules size={18} />
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </Result>
                        </FilterArea>
                    )}

                    {/* <input type="text" placeholder="Digite o nome..."/>
                    <input type="text" placeholder="Digite a especialidade..."/> */}
                </ContentProfissionais>
            </ContentGeral>
        </ProfissionaisArea>
    );
}