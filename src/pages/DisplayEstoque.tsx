import React from 'react'
import { Search } from 'lucide-react'
import { ContainerListaEstoque } from '../components/ContainerListaEstoque'

export const DisplayEstoque = () => {
  return (
    <main className='flex flex-col lg:flex-row h-full w-full overflow-hidden'>
      <div className='flex flex-col w-full lg:w-82 lg:shrink-0 text-white bg-green-950'>
        <section className='w-full lg:max-w-82 p-2 '>
          <form className='w-full'>
            <h3 className='font-bold text-center'>ADICIONAR PRODUTO</h3>
            <div className='flex flex-col mt-2 '>
              <label htmlFor="">Código do produto</label>
              <div className='relative flex items-center w-full'>
                <input type="text" className='border w-full p-1 text-black bg-white' />
                <Search className='flex absolute right-2 text-black' />
              </div>
            </div>
            <div className=''>
              <label htmlFor="">Nome do produto</label>
              <input type="text" className='border w-full p-1 text-black bg-white' />
              <div className='flex items-center justify-around mt-2 gap-2'>
                <div>
                  <label htmlFor="">Qntd.</label>
                  <input type="number" className='border w-full p-1 text-black bg-white' />
                </div>
                <div>
                  <label htmlFor="">Preço:</label>
                  <input type="text" className='border w-full p-1 text-black bg-white' />
                </div>
              </div>
            </div>
            <button type="submit" className='border mt-4 w-full font-bold text-green-900 bg-gray-100 p-1'>Adicionar</button>
          </form>
        </section>
        <hr className='mt-4 w-full lg:max-w-82' />
        <section className='w-full lg:max-w-82 p-2'>
          <h3 className='mb-6 font-bold text-center'>CALCULAR PREÇO/LUCRO</h3>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-2 '>
              <label htmlFor="">Valor pago (R$):</label>
              <input type="text" className='border w-22.5 p-1 text-end text-black bg-white' />
            </div>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-2 '>
              <label htmlFor="">Margem lucro (%):</label>
              <input type="text" className='border w-22.5  p-1 text-end text-black bg-white' />
            </div>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-2 '>
              <label htmlFor="">Valor recomendado (R$):</label>
              <input type="text" className='border w-22.5 p-1 text-end text-black bg-white' />
            </div>
          </div>
        </section>
        <hr className='mt-4 w-full lg:max-w-82'/>
        <section className='lg:flex justify-center hidden items-center max-h-full max-w-82 p-2 text-center'>
          <p><strong>EM MANUTENÇÂO...</strong></p>
        </section>
      </div>
      <div className='w-full flex-1'>
        <section className='lg-max-h-293.5'>
          <div className='flex flex-col items-center  p-10 lg:m-2 rounded-lg gap-4 text-white bg-green-950'>
            <h3 className='text-3xl'>BUSCAR PRODUTO</h3>
            <div className='flex justify-center relative w-full max-w-2xl'>
              <input type="text" className='border w-full  p-1 text-black bg-white'/>
              <Search className='absolute top-1 right-1 text-black'/>
            </div>
            </div>
        </section>
        <section className='lg:max-h-293.5'>
          <ContainerListaEstoque/>
        </section>
      </div>

    </main>
  )
}
