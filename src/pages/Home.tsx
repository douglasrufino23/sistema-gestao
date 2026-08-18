import { useState } from "react"
import { DisplayEstoque } from "./DisplayEstoque";
import { DisplayPdv } from "./DisplayPdv";
import { DisplayRelatorio } from "./DisplayRelatorio";



export function Home() {
    const [telaAtual, setTelaAtual] = useState<string>('estoque');



    return (
        <>
            <header className='bg-gray-200 flex justify-between '>
                <nav className='w-full'>
                    <ul className='flex flex-col lg:flex-row text-center justify-around '>
                        <li onClick={() => setTelaAtual('estoque')} className='w-full py-4 cursor-pointer hover:bg-gray-300'><a href="#">ESTOQUE</a></li>
                        <li onClick={() => setTelaAtual('pdv')} className='w-full py-4 cursor-pointer hover:bg-gray-300'><a href="#">PDV</a></li>
                        <li onClick={() => setTelaAtual('relatorio')} className="w-full py-4 cursor-pointer hover:bg-gray-300"><a href="#">RELATÓRIO</a></li>
                    </ul>
                </nav>

            </header>
            {telaAtual === 'estoque' ? <DisplayEstoque /> : telaAtual === 'pdv' ? <DisplayPdv /> : telaAtual === 'relatorio' ? <DisplayRelatorio /> : null}
        </>
    )
}
