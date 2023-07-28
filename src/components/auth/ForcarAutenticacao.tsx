import Image from 'next/image'
import router from 'next/router'
import Script  from 'next/script'
import useAuth from '../../data/hook/useAuth'

interface ForcarAutenticacaoProps {
    children?: any
}

export default function ForcarAutenticacao(props : ForcarAutenticacaoProps) {

    const { usuario, carregando } = useAuth()

    function renderizarConteudo() {
        return (
            <>
                <Script id="danger"
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template-cod3r-auth")) {
                                    window.location.href = "/autenticacao"
                                }
                            `
                        }}
                />
                {props.children}
            </>
        )
    }

    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>

                <Image src={'/images/loading.gif'}
                        height="100"
                        priority
                        width="100"
                        alt="loading"
                />
            </div>
        )
    }

    if(!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if(carregando) {
        return renderizarCarregando()
    } else {
        router.push('/autenticacao')
        return null
    }
}