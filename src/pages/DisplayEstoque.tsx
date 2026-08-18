import React from 'react'
import { Search } from 'lucide-react'

export const DisplayEstoque = () => {
  return (
    <main className='flex flex-col lg:flex-row h-full lg:max-h-293.5'>
      <div className='flex flex-col bg-gray-200'>
        <section className='w-full lg:max-w-82 p-2 '>
          <form className='flex flex-col gap-2'>
            <h3>ADICIONAR PRODUTO</h3>
            <div className='flex flex-col mt-2 '>
              <label htmlFor="">Código do produto</label>
              <div className='relative flex items-center w-full'>
                <input type="text" className='border w-full p-1 bg-white' />
                <Search className='flex absolute right-2 ' />
              </div>
            </div>
            <div>
              <label htmlFor="">Nome do produto</label>
              <input type="text" disabled={true} className='border w-full p-1 bg-white' />
              <div className='flex items-center justify-between mt-2 gap-2'>
                <div>
                  <label htmlFor="">Qntd.</label>
                  <input type="number" disabled={true} className='border w-full p-1 bg-white' />
                </div>
                <div>
                  <label htmlFor="">Preço:</label>
                  <input type="text" disabled={true} className='border w-full p-1 bg-white' />
                </div>
              </div>
            </div>
            <button type="submit" className='border bg-gray-100 p-1'>Adicionar</button>
          </form>
        </section>
        <hr className='mt-4 w-full lg:max-w-82' />
        <section className='w-full lg:max-w-82 p-2'>
          <h3 className='mb-6'>CALCULAR PREÇO/LUCRO</h3>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-2 '>
              <label htmlFor="">Valor pago (R$):</label>
              <input type="text" className='border w-22.5 p-1 text-end bg-white' />
            </div>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-2 '>
              <label htmlFor="">Margem lucro (%):</label>
              <input type="text" className='border w-22.5  p-1 text-end bg-white' />
            </div>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-2 '>
              <label htmlFor="">Valor recomendado (R$):</label>
              <input type="text" className='border w-22.5 p-1 text-end bg-white' />
            </div>
          </div>
        </section>
        <hr className='mt-4 w-full lg:max-w-82'/>
        <section className='lg:flex justify-center hidden items-center h-full max-w-82 p-2 text-center'>
          <p><strong>EM MANUTENÇÂO...</strong></p>
        </section>
      </div>
      <div className='w-full p-2'>
        <section>
          <div className='flex flex-col items-center  bg-gray-200'>
            <label htmlFor="">BUSCAR PRODUTO</label>
            <div className='relative'>
              <input type="text" className='border w-full bg-white'/>
              <Search className='absolute top-0.5 right-'/>
            </div>
            </div>
        </section>
      </div>

    </main>
  )
}
