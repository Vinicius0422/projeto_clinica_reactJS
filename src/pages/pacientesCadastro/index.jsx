import { useState } from "react";
import { BtnsArea, Container, Content, NotSelectedBtn, SelectedBtn } from "../../components/HeaderHome/styleHeader";
import { ContentGeral, PacientesArea } from "../pacientes/stylePaciente";
import {AreaCadastro, ButtonArea, Input1, Input2, Input3, Input4, Input5, Input6, Input7, Input8} from "./pacientesCadastroStyle"
import { toast } from "react-toastify";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
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
    const [errors, setErrors] = useState('');

    async function validateCPFandRG(cpf, rg){
        setErrors('')
        const listRef = collection(db, "pacientes")
        const q = query(listRef);

        const querySnapshot = await getDocs(q);

        const isCollectionEmpty = querySnapshot.size === 0;
        console.log(isCollectionEmpty)

        if (isCollectionEmpty === false) {
            querySnapshot.forEach((doc) => {
                if (doc.data().cpf === cpf && doc.data().rg === rg) {   
                    setErrors("CPF e RG já cadastrados")
                    return;
                } else if (doc.data().rg === rg){
                    setErrors("RG já cadastrado")
                    return;
                } else if (doc.data().cpf === cpf){
                    setErrors("CPF já cadastrado")
                    return;
                }
            })
        }

        return;
    }

    async function handleCadastro(e){
        e.preventDefault();
        if(nome === '' || cpf === '' || endereco === '' || cep === '' || bairro === '' || cidade === '' || contatos === ''){
            toast.error("Favor preencha todos os campos")
            return;
        }

        validateCPFandRG(cpf, rg)

        if(errors){
            toast.error(errors)
            return;
        }
        
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

    }

    return (
        <PacientesArea>
            <Container>
                <Content>
                    <span>Pacientes</span>
                    <BtnsArea>
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
                    <input type="text" placeholder="Digite o nome" value={nome} onChange={(e) => setNome(e.target.value)} on/>
                    </Input1>
                    <Input2>
                    <label>CPF</label>
                    <input type="text" placeholder="Digite o CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                    </Input2>
                    <Input3>
                    <label>RG</label>
                    <input type="text" placeholder="Digite o RG" value={rg} onChange={(e) => setRg(e.target.value)}/>
                    </Input3>
                    <Input4>
                    <label>Endereço</label>
                    <input type="text" placeholder="Digite o endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
                    </Input4>
                    <Input5>
                    <label>CEP</label>
                    <input type="text" placeholder="Digite o CEP" value={cep} onChange={(e) => setCep(e.target.value)}/>
                    </Input5>
                    <Input6>
                    <label>Bairro</label>
                    <input type="text" placeholder="Digite o bairro" value={bairro} onChange={(e) => setBairo(e.target.value)}/>
                    </Input6>
                    <Input7>
                    <label>Cidade</label>
                    <input type="text" placeholder="Digite a cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
                    </Input7>
                    <Input8>
                    <label>Contatos</label>
                    <input type="text" placeholder="Digite os contatos" value={contatos} onChange={(e) => setContatos(e.target.value)}/>
                    </Input8>

                    <ButtonArea>
                    <button type="submit">Salvar</button>
                    </ButtonArea>
                    </form>
  
                </AreaCadastro>

            </ContentGeral>
        </PacientesArea>
    )
}