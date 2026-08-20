import { useNavigate } from "react-router-dom";


export function Home() {
    
    const navigate = useNavigate();



    return (
        <>
            <header className=' flex justify-between text-white font-extrabold text-3xl shadow-lg relative z-999 shadow-[#607aa5]  bg-[#607aa5] '>
                <nav className='w-full'>
                    <ul className='flex flex-col lg:flex-row text-center justify-around '>
                        <li onClick={() => { navigate('/sistema/estoque')}} className='w-full py-4 cursor-pointer  hover:shadow-md hover:shadow-white transition-scale duration-200 hover:text-4xl hover:bg-[#4f6daf]'><a href="#">ESTOQUE</a></li>
                        <li onClick={() => { navigate('/sistema/pdv')}} className='w-full py-4 cursor-pointer hover:shadow-md hover:shadow-white transition-scale duration-200 hover:text-4xl hover:bg-[#4f6daf]'><a href="#">PDV</a></li>
                        <li onClick={() => { navigate('/sistema/relatorio')}} className="w-full py-4 cursor-pointer hover:shadow-md hover:shadow-white transition-scale duration-200 hover:text-4xl hover:hover:bg-[#4f6daf]"><a href="#">RELATÓRIO</a></li>
                    </ul>
                </nav>

            </header>
        </>   
    )
}
