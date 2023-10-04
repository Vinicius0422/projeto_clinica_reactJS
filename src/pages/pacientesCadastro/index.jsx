import { useState } from "react";
import { BtnsArea, Container, Content, NotSelectedBtn, SelectedBtn } from "../../components/HeaderHome/styleHeader";
import { ContentGeral, PacientesArea } from "../pacientes/stylePaciente";
import {AreaCadastro, ButtonArea, Input1, Input2, Input3, Input4} from "./pacientesCadastroStyle"
import { toast } from "react-toastify";
import { addDoc, collection, getDocs} from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export default function PacientesCadastro() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairo] = useState('');
    const [cidade, setCidade] = useState('');
    const [contatos, setContatos] = useState('');

    async function validateCPFandRG(cpf, rg){
        const listRef = collection(db, "pacientes")
        const querySnapshot = await getDocs(listRef);
        
        const isCollectionEmpty = querySnapshot.size === 0;
    
        if (isCollectionEmpty) {
            return;
        }
    
        // Usar um loop for...of em vez de um forEach
        for (const doc of querySnapshot.docs) {
            if (doc.data().cpf === cpf && doc.data().rg === rg) {   
                throw new Error("CPF e RG já cadastrados!")
            } else if (doc.data().rg === rg){
                throw new Error("RG já cadastrado")
            } else if (doc.data().cpf === cpf){
                throw new Error("CPF já cadastrado")
            }
        }

    }

    const handleCadastro = async (e) => {
        e.preventDefault();
        if(nome === '' || cpf === '' || endereco === '' || cep === '' || bairro === '' || cidade === '' || contatos === ''){
            toast.error("Favor preencha todos os campos")
            return;
        }

        try{
            await validateCPFandRG(cpf, rg);
            await addDoc(collection(db, "pacientes"), {
                nome: nome,
                cpf: cpf,
                rg: rg,
                endereco: endereco,
                cep: cep,
                bairro: bairro,
                cidade: cidade,
                contatos: contatos,
            })
            
            setNome('')
            setCpf('')
            setRg('')
            setEndereco('')
            setCep('')
            setBairo('')
            setCidade('')
            setContatos('')
            toast.success("Paciente cadastrado com sucesso")
        } catch(erro){
            toast.error(erro.message)
        }


    }

    return (
        <PacientesArea>
            <Container>
                <Content>
                    <span>Pacientes</span>
                    <BtnsArea>
                        <NotSelectedBtn to="/home">Home</NotSelectedBtn>
                        <NotSelectedBtn to="/pacientes">Procurar</NotSelectedBtn>
                        <SelectedBtn to="/pacientes/cadastro">Cadastrar</SelectedBtn>
                    </BtnsArea>
                </Content>
            </Container>
            <ContentGeral>
                <AreaCadastro>
                    
                    <form onSubmit={(e) => handleCadastro(e)}>
                    <Input1>
                    <label>Nome Completo</label>
                    <input type="text" placeholder="Digite o nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </Input1>
                    <Input2>
                    <label>CPF</label>
                    <input type="text" placeholder="Digite o CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                    </Input2>
                    <Input2>
                    <label>RG</label>
                    <input type="text" placeholder="Digite o RG" value={rg} onChange={(e) => setRg(e.target.value)}/>
                    </Input2>
                    <Input1>
                    <label>Endereço</label>
                    <input type="text" placeholder="Digite o endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
                    </Input1>
                    <Input2>
                    <label>CEP</label>
                    <input type="text" placeholder="Digite o CEP" value={cep} onChange={(e) => setCep(e.target.value)}/>
                    </Input2>
                    <Input2>
                    <label>Bairro</label>
                    <input type="text" placeholder="Digite o bairro" value={bairro} onChange={(e) => setBairo(e.target.value)}/>
                    </Input2>
                    <Input3>
                    <label>Cidade</label>
                    <input type="text" placeholder="Digite a cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
                    </Input3>
                    <Input4>
                    <label>Contatos</label>
                    <input type="text" placeholder="Digite os contatos" value={contatos} onChange={(e) => setContatos(e.target.value)}/>
                    </Input4>

                    <ButtonArea>
                    <button type="submit">Salvar</button>
                    </ButtonArea>
                    </form>
                </AreaCadastro>

            </ContentGeral>
        </PacientesArea>
    )
}