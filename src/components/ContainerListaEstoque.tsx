import { Trash2, Edit } from 'lucide-react'
import type { Produto } from '../hooks/useFetchEstoque'

interface Props {
    rows: Produto[];
}

export function ContainerListaEstoque({ rows }: Props) {

    const excluirItem = (cod: number) => {
        console.log('Excluir item:', cod)
    }

    return (
        <table className='md:w-full'>
            <thead className=''>
                <tr className=''>
                    
                    <th className='w-[30%] text-start'>Código</th>
                    <th className='w-[50%] text-start'>Produto</th>
                    <th className='w-[10%]'>Qntd</th>
                    <th className='w-[10%]'>Preço</th>
                    <th className='w-[5%]'></th>
                    <th className='w-[5%]'></th>
                    
                </tr>
            </thead>
            <tbody>
                {rows.map((produto: Produto) => (
                    <tr key={produto.cod} className='hover:bg-gray-200'>
                        <td className='w-[30%]'>{produto.cod}</td>
                        <td className='w-[50%]'>{produto.produto}</td>
                        <td className='w-[10%] text-center'>{produto.quantidade}</td>
                        <td className='w-[10%] text-center'>{produto.preco}</td>
                        <td className='cursor-pointer'><Edit className='text-blue-600'/></td>
                        <td className='p-2 cursor-pointer'><Trash2 onClick={() => excluirItem(produto.cod)} className='text-red-800'/></td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}
