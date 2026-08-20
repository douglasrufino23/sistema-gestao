import { useEffect, useState  } from 'react';
import { Search } from 'lucide-react'
import { ContainerListaEstoque } from '../components/ContainerListaEstoque'

export interface Produto {
  cod: number;
  produto: string;
  quantidade: number;
  preco: number;
  editar: boolean;
  excluir: boolean
}


export const DisplayEstoque = () => {
  const [cod, setCod] = useState<number>();
  const [produto, setProduto] = useState<string>('');
  const [qntd, setQntd] = useState<number>(0);
  const [preco, setPreco] = useState<number>(0.00);


  const [pago, setPago] = useState<number | null>(null);
  const [margem, setMargem] = useState<number | null>(null);
  const [resultado, setResultado] = useState<number | null>(null);

  const AdicionarItem = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
    const numeroSorteado = Math.floor(Math.random() * 9000) + 1000;

    const novoProduto: Produto = {
      cod: cod || numeroSorteado,
      produto: produto.trim(),
      quantidade: qntd,
      preco: preco,
      editar: false,
      excluir: false,
    };

    try {
      const response = await fetch('http://localhost:3000/estoque', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(novoProduto)
      });

      if (response.status === 201) {
        alert('Cadastrado com sucesso!');
      }
      else {
        alert(response.status)
      }
    } catch (err) {
        alert('Erro ao acessar API.')
    }
  };

  useEffect(() => {
    if (!pago || !margem ||isNaN(pago) || isNaN(margem)) {
      setResultado(null);
    } else {
      setResultado(pago + pago * (margem / 100));
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
              <input type="text" onChange={(e) => setProduto(String(e.target.value))} className=' w-full p-1 text-black bg-white' />
              <div className='flex items-center justify-around mt-2 gap-2'>
                <div>
                  <label htmlFor="">Qntd.</label>
                  <input type="text" onChange={(e) => setQntd(Number(e.target.value))} className=' w-full p-1 text-black bg-white' />
                </div>
                <div>
                  <label htmlFor="">Preço:</label>
                  <input type="text" onChange={(e) => setPreco(Number(e.target.value))} className=' w-full p-1 text-black bg-white' />
                </div>
              </div>
            </div>
            <button type="submit" className='w-full border mt-4  font-bold text-green-900 bg-gray-100 p-1'>Adicionar</button>
          </form>
        </section>
        <hr className='mt-4 w-full ' />
        <section className='w-full  p-2'>
          <h3 className='mb-6 font-bold text-[#354974] text-3xl sm:text-4xl text-center'>CALCULAR PREÇO/LUCRO</h3>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-2 '>
              <label htmlFor="">Valor pago (R$):</label>
              <input type="text" onChange={(e) => setPago(Number(e.target.value))} className=' w-22.5 p-1 text-end text-black bg-white' />
            </div>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-2 '>
              <label htmlFor="">Margem lucro (%):</label>
              <input type="text" onChange={(e) => setMargem(Number(e.target.value))} className=' w-22.5  p-1 text-end text-black bg-white' />
            </div>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-2 '>
              <label htmlFor="">Valor recomendado (R$):</label>
              <input type="text" value={resultado ? resultado : ''} disabled className=' w-22.5 p-1 text-end text-black bg-white' />
            </div>
          </div>
        </section>
        <hr className='mt-4 w-full '/>
        <section className='lg:flex items-center justify-center hidden  h-full text-center'>
          <p className='text-4xl text-[#354974]'><strong>EM MANUTENÇÂO...</strong></p>
        </section>
      </div>
      <div className='w-full flex-1'>
        <section className='lg-max-h-293.5'>
          <div className='flex flex-col items-center  p-10 lg:m-2 rounded-lg gap-4 text-white bg-[#C0BABC]'>
            <h3 className='text-3xl'>BUSCAR PRODUTO</h3>
            <div className='flex justify-center relative w-full max-w-2xl'>
              <input type="text" className='border w-full  p-1 text-black bg-white'/>
              <Search className='absolute top-1 right-1 text-black'/>
            </div>
            </div>
        </section>
        <section className='lg:max-h-293.5 p-5'>
          <ContainerListaEstoque/>
        </section>
      </div>

    </main>
  )
}
