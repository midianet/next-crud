interface EntradaProps{
    texto: string
    valor: any
    somenteLeitura?: boolean
    tipo?: 'text' | 'number'
}

export default function Entrada(props: EntradaProps){
    return (
        <div className="flex flex-col">
            <label>
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'}
                   value={props.valor} 
                   readOnly={props.somenteLeitura}
                   className={`
                     border
                     border-purple-500
                     rounded-lg   
                     focus:outline-none
                     bg-gray-100 
                     px-4 py-2
                     ${props.somenteLeitura ? '' : 'focus:bg-white' }
                     
                   `}
            />
        </div>
    )
}