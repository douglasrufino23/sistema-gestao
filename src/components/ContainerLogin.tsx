


export function ContainerLogin() {
    return (
        <section className="flex flex-col items-center w-8/9 max-w-180 py-10 gap-15 rounded-4xl bg-white  ">
            <h1 className="text-4xl text-center">
                Acessar o Sistema
            </h1>
            <form className="w-1/2 flex flex-col items-center gap-3">
                <div className="flex flex-col w-3/4 min-w-62.5">
                    <label htmlFor="usuario" className="">Usuário</label>
                    <input type="text" id="usuario" name="usuario" required className="h-8 px-2 focus:outline-1 rounded-2xl bg-gray-200" />
                </div>
                <div className="flex flex-col w-3/4 min-w-62.5">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" name="senha" required className="h-8 px-2 focus:outline-1 rounded-2xl  bg-gray-200"/>
                </div>
                <button type="submit" className=" p-2 px-3 cursor-pointer rounded-2xl bg-gray-200 hover:bg-gray-300">Entrar</button>
            </form>
            <p className="">Esqueceu a senha? <a href="">Redefinir</a></p>
        </section>

    );
}





