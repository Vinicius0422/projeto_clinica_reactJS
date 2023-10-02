import { useEffect, useState } from "react";
import { Input1, Input2, Input3, Input4 } from "../../pages/pacientesCadastro/pacientesCadastroStyle";
import { Details, DetailsArea, Inputs } from "./modalStyle"
import { FaX } from "react-icons/fa6"
import { toast } from "react-toastify";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export default function Modal({ infos, close, id, handleSearch }) {

    const [nomeEdit, setNomeEdit] = useState('');
    const [enderecoEdit, setEnderecoEdit] = useState('');
    const [cepEdit, setCepEdit] = useState('');
    const [bairroEdit, setBairroEdit] = useState('');
    const [cidadeEdit, setCidadeEdit] = useState('');
    const [contatosEdit, setContatosEdit] = useState('');

    useEffect(()=>{
        setNomeEdit(infos.nome);
        setEnderecoEdit(infos.endereco)
        setCepEdit(infos.cep)
        setBairroEdit(infos.bairro)
        setCidadeEdit(infos.cidade)
        setContatosEdit(infos.contatos)
    }, [])


    const handleEdit = async(e) => {
        e.preventDefault();
        if(nomeEdit === '' || enderecoEdit === '' || cepEdit === '' || bairroEdit === '' || cidadeEdit === '' || contatosEdit === ''){
            toast.error("Favor preencha todos os campos")
            return;
        }

        const docRef = doc(db, "pacientes", id)
        await updateDoc(docRef, {
            ...infos, 
            nome: nomeEdit,
            endereco: enderecoEdit,
            cep: cepEdit,
            bairro: bairroEdit,
            cidade: cidadeEdit,
            contatos: contatosEdit
        })

        handleSearch(infos.cpf)
        toast.success("Atualizado com sucesso!")
    }

    return (
        <Details>
            <DetailsArea>
                <FaX size={25} onClick={close} />
                <Inputs onSubmit={(e)=>handleEdit(e)}>
                    <Input1>
                        <label>Nome Completo</label>
                        <input type="text" placeholder="Digite o nome" value={nomeEdit} onChange={(e)=>setNomeEdit(e.target.value)}/>
                    </Input1>
                    <Input2>
                        <label>CPF</label>
                        <input type="text" placeholder="Digite o CPF" value={infos.cpf} disabled={true}/>
                    </Input2>
                    <Input2>
                        <label>RG</label>
                        <input type="text" placeholder="Digite o RG" value={infos.rg} disabled={true}/>
                    </Input2>
                    <Input1>
                        <label>Endereço</label>
                        <input type="text" placeholder="Digite o endereço" value={enderecoEdit} onChange={(e)=>setEnderecoEdit(e.target.value)}/>
                    </Input1>
                    <Input2>
                        <label>CEP</label>
                        <input type="text" placeholder="Digite o CEP" value={cepEdit} onChange={(e)=>setCepEdit(e.target.value)}/>
                    </Input2>
                    <Input2>
                        <label>Bairro</label>
                        <input type="text" placeholder="Digite o bairro" value={bairroEdit} onChange={(e)=>setBairroEdit(e.target.value)}/>
                    </Input2>
                    <Input3>
                        <label>Cidade</label>
                        <input type="text" placeholder="Digite a cidade" value={cidadeEdit} onChange={(e)=>setCidadeEdit(e.target.value)}/>
                    </Input3>
                    <Input4>
                        <label>Contatos</label>
                        <input type="text" placeholder="Digite os contatos" value={contatosEdit} onChange={(e)=>setContatosEdit(e.target.value)}/>
                    </Input4>
                    <button type="submit">Salvar</button>
                </Inputs>
            </DetailsArea>
        </Details>
    );
}