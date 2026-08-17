import {User, Lock} from 'lucide-react';


export function ContainerLogin() {
    return (
        <section className="flex flex-col items-center w-[90%] max-w-125 py-10 sm:gap-12 shadow-2xl shadow-black-900/50 rounded-4xl bg-white  ">
            <h1 className="text-4xl font-bold text-center">
                Acessar o Sistema
            </h1>
            <form className="flex flex-col p-6 items-center gap-6">
                <div className="flex flex-col w-full min-w-62.5 gap-2">
                    <label htmlFor="usuario" className="">Usuário</label>
                    <div className='flex flex-col relative'>
                        <User className='absolute top-2 left-1'/>
                        <input type="text" id="usuario" name="usuario" required className="h-10 px-8 focus:outline-1 rounded-lg bg-gray-200" />
                    </div>
                </div>
                <div className="flex flex-col w-full min-w-62.5">
                    <label htmlFor="senha">Senha</label>
                    <div className='flex flex-col relative '>
                        <Lock className='absolute top-2 left-1'/>
                        <input type="password" id="senha" name="senha" required className="h-10 px-8 focus:outline-1 rounded-lg  bg-gray-200"/>
                    </div>
                </div>
                <button type="submit" className=" w-full p-2 cursor-pointer rounded-lg bg-blue-400 text-white hover:bg-gray-300">Entrar</button>
            </form>
            <p className="text-blue-500 font-bold">Esqueceu a senha? <a href="">Redefinir</a></p>
        </section>

    );
}





