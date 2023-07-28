import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/model/Cliente";

interface FormularioProps{
    cliente: Cliente
}

export default function Formulario(props: FormularioProps){
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '')
    const id = props.cliente?.id 

    return (
        <div>
            {id ? (<Entrada valor={id} texto="Código" somenteLeitura />): false}
            <Entrada valor={nome} texto="Nome"/>
            <Entrada valor={idade} texto="Idade" tipo="number"/>
        </div>
    )
}