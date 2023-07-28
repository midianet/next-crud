import AvatarUsuario from "./AvatarUsuario"
import BotaoAlternarTema from "./BotaoAlternarTema"
import Titulo from "./Titulo"
import useAppData from "@/data/hook/useAppData"

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps){
    const {tema, alternarTema} = useAppData()

    return (
        <div className={`flex`} >
            <Titulo 
               titulo={props.titulo}
               subtitulo={props.subtitulo}
            />
            <div className={`
                flex flex-grow justify-end itens-center
            `} >
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
                <AvatarUsuario className="ml-3 mt-[-5px]" />
            </div>
        </div>
    )
}