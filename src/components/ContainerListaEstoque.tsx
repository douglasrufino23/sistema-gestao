

import { useState } from 'react'


export function ContainerListaEstoque() {
    const [lista, setLista] = useState([
        {
        cod: '115151',
        nome: 'Leite',
        qtd: '3',
        preco: '3,29'
    },
    {
        cod: '7897854525649',
        nome: 'Arroz',
        qtd: '12',
        preco: '23,29'
    },
    {
        cod: '7965656566554',
        nome: 'Macarrão',
        qtd: '5',
        preco: '5,29'
    },
    {
        cod: '162226262611611',
        nome: 'Roller 2L',
        qtd: '86',
        preco: '9,29'
    },
    {
        cod: '78895552662161261',
        nome: 'Coca Cola 2L',
        qtd: '10',
        preco: '14,29'
    }

])

    return (
        <table className='md:w-full p-4 '>
            <thead className=''>
                <tr className=''>
                    
                    <th className='w-[30%] text-start'>Código</th>
                    <th className='w-[50%] text-start'>Produto</th>
                    <th className='w-[10%]'>Qntd</th>
                    <th className='w-[10%]'>Preço</th>
                    
                </tr>
            </thead>
            <tbody>
                {lista.map((produto) => (
                    <tr key={produto.cod} className='hover:bg-gray-200'>
                        <td className='w-[30%]'>{produto.cod}</td>
                        <td className='w-[50%]'>{produto.nome}</td>
                        <td className='w-[10%] text-center'>{produto.qtd}</td>
                        <td className='w-[10%] text-center'>{produto.preco}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}
