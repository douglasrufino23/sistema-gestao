import { useEffect, useState } from 'react';
import { Search } from 'lucide-react'
import { ContainerListaEstoque } from '../components/ContainerListaEstoque'
import { useAdicionarItem } from '../hooks/useFetchEstoque';
import { useExibirListaEstoque } from '../hooks/useFetchEstoque';
import type { Produto } from '../hooks/useFetchEstoque';




export const DisplayEstoque = () => {


  // LÓGICA ADICIONAR PRODUTO AO ESTOQUE


  const { adicionarItem,  carregando } = useAdicionarItem();

  const [cod, setCod] = useState<number>();
  const [produto, setProduto] = useState<string>('');
  const [qntd, setQntd] = useState<number>(0);
  const [preco, setPreco] = useState<number | null>(null);



  const AdicionarItem = (e: React.FormEvent) => {
    e.preventDefault();
    


    const numeroSorteado = Math.floor(Math.random() * 9999);
    const novoProduto: Produto = {
      cod: cod || numeroSorteado,
      produto: produto.toUpperCase().trim(),
      quantidade: qntd,
      preco: preco ?? 0,
      editar: false,
      excluir: false,
    };

    adicionarItem(novoProduto)




  };

  // LÓGICA EXIBIR LISTA DE PRODUTOS
  const [busca, setBusca] = useState<string | number>('');
  const { ListarProdutos, rows } = useExibirListaEstoque();

  useEffect(() => {
    ListarProdutos(busca);

 
  }, [busca]);






  // LÓGICA CALCULAR PREÇO / LUCRO

  const [pago, setPago] = useState<number | null>(null);
  const [margem, setMargem] = useState<number | null>(null);
  const [resultado, setResultado] = useState<number | null>(null);


  useEffect(() => {
    if (!pago || !margem || isNaN(pago) || isNaN(margem)) {
      setResultado(null);
    } else {
      setResultado(pago + (pago * (margem / 100)));
    }
  }, [pago, margem]);



  return (
    <main className='flex flex-col lg:flex-row h-full w-full overflow-hidden'>
      <div className='flex flex-col items-center text-xl w-full lg:w-xl lg:shrink-0 text-white bg-[#C0BABC] pt-8'>
        <section className='w-[90%] p-2 '>
          <form onSubmit={AdicionarItem} className='grid gap-6 w-full '>
            <h3 className='font-extrabold  text-[#354974] text-4xl text-center'>CADASTRAR PRODUTO</h3>
            <div className='flex flex-col mt-2 '>
              <label htmlFor="">Código do produto</label>
              <div className='relative flex items-center w-full'>
                <input type="text" onChange={(e) => setCod(Number(e.target.value))} className='w-full p-1 text-black bg-white' />
                <Search className='flex absolute right-2 text-black' />
              </div>
            </div>
            <div className=''>
              <label htmlFor="">Nome do produto</label>
              <input type="text" value={produto} onChange={(e) => setProduto(String(e.target.value))} className=' w-full p-1 text-black bg-white' />
              <div className='flex items-center justify-around mt-2 gap-2'>
                <div>
                  <label htmlFor="">Qntd.</label>
                  <input type="text" onChange={(e) => setQntd(Number(e.target.value))} className=' w-full p-1 text-black bg-white' />
                </div>
                <div>
                  <label htmlFor="">Preço:</label>
                  <input type="text"
                    value={preco ? preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}
                    onChange={(e) => {
                      const apenasNumeros = e.target.value.replace(/\D/g, '');
                      setPreco(apenasNumeros ? Number(apenasNumeros) / 100 : null)
                    }} className=' w-full p-1 text-black bg-white' />
                </div>
              </div>
            </div>
            <button type="submit" className='w-full border mt-4 p-1 cursor-pointer font-bold text-green-900 bg-gray-100 '>{carregando ? 'Adicionando...' : 'Adicionar'}</button>
          </form>
        </section>
        <hr className='mt-4 w-full ' />
        <section className='w-full  p-2'>
          <h3 className='mb-6 font-bold text-[#354974] text-3xl sm:text-4xl text-center'>CALCULAR PREÇO/LUCRO</h3>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-2 '>
              <label htmlFor="">Valor pago (R$):</label>
              <input type="text"
                value={pago ? pago.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}
                onChange={(e) => {
                  const apenasNumeros = e.target.value.replace(/\D/g, '');
                  setPago(apenasNumeros ? Number(apenasNumeros) / 100 : null)
                }}
                className=' w-22.5 p-1 text-end text-black bg-white' />
            </div>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-2 '>
              <label htmlFor="">Margem lucro (%):</label>
              <input type="text" onChange={(e) => setMargem(Number(e.target.value))} className=' w-22.5  p-1 text-end text-black bg-white' />
            </div>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-2 '>
              <label htmlFor="">Valor recomendado (R$):</label>
              <input type="text" 
              value={resultado !== null? resultado.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}) : ''} 
              disabled className=' w-22.5 p-1 text-end text-black bg-white' />
            </div>
          </div>
        </section>
        <hr className='mt-4 w-full ' />
        <section className='lg:flex items-center justify-center hidden  h-full text-center'>
          <p className='text-4xl text-[#354974]'><strong>EM MANUTENÇÂO...</strong></p>
        </section>
      </div>
      <div className='w-full flex-1'>
        <section className='lg-max-h-293.5'>
          <div className='flex flex-col items-center  p-10 lg:m-2 rounded-lg gap-4 text-white bg-[#C0BABC]'>
            <h3 className='text-3xl'>BUSCAR PRODUTO</h3>
            <div className='flex justify-center relative w-full max-w-2xl'>
              <input type="text" className='border w-full  p-1 text-black bg-white'  onChange={(e) => setBusca(e.target.value)}/>
              <Search className='absolute top-1 right-1 text-black' />
            </div>
          </div>
        </section>
        <section className='lg:max-h-293.5 p-5'>
          <ContainerListaEstoque rows={rows} />
        </section>
      </div>

    </main>
  )
}
