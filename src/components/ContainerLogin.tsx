import {User, Lock} from 'lucide-react';


export function ContainerLogin() {
    return (
        <section className="flex flex-col items-center w-[90%] max-w-125  py-6 sm:py-10 px-4 sm:px-8 gap-6 shadow-2xl shadow-black/50 rounded-4xl bg-white  ">
            <h1 className="text-3xl sm:text-4xl font-bold text-center">
                Acessar o Sistema
            </h1>
            <form className="flex flex-col w-full max-w-sm p-6 items-center gap-6">
                <div className="flex flex-col w-full min-w-62.5 gap-2">
                    <label htmlFor="usuario" className="">Usuário</label>
                    <div className='flex flex-col relative'>
                        <User className='absolute top-2 left-1'/>
                        <input type="text" placeholder=' ' id="usuario" name="usuario" required className="h-10 px-8 focus:outline-1  not-placeholder-shown:bg-blue-100 rounded-lg bg-gray-200" />
                    </div>
                </div>
                <div className="flex flex-col w-full min-w-62.5">
                    <label htmlFor="senha">Senha</label>
                    <div className='flex flex-col relative '>
                        <Lock className='absolute top-2 left-1'/>
                        <input type="password" placeholder=' ' id="senha" name="senha" required className="h-10 px-8 focus:outline-1 not-placeholder-shown:bg-blue-100 rounded-lg  bg-gray-200"/>
                    </div>
                </div>
                <button type="submit" className=" w-full p-2 cursor-pointer rounded-lg bg-blue-400 text-white hover:bg-blue-500">Entrar</button>
            </form>
            <p className="text-blue-400 font-bold">Esqueceu a senha? <a href="#" className='font-bold'>Redefinir</a></p>
        </section>

    );
}





