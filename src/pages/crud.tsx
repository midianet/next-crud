import Botao from "@/components/Botao"
import Formulario from "@/components/Formulario"
import Tabela from "@/components/table/Tabela"
import Layout from "@/components/template/Layout"
import Cliente from "@/model/Cliente"

export default function Crud() {
  const clientes = [
      new Cliente('Marcos', 18, '1'),
      new Cliente('Maria', 5, '2'),
      new Cliente('Glauce', 50, '3'),
      new Cliente('Gisele', 25, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
      console.log(cliente.nome)
  }
  
  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  return (
      <Layout 
        titulo="Crud"
        subtitulo="Cadastro de exemplo">
          <div className="flex flex-col w-full bg-white text-gray-800 rounded-md">
            <div className="flex justify-end">
              <Botao className="mt-4 mr-6" cor="blue" >Novo Cliente</Botao>
            </div>
            <div className="p-6" >
                {/* <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} ></Tabela> */}
                <Formulario />
            </div>
          </div>
        </Layout>
  )
}
