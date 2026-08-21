import { useCallback, useState } from 'react'

export interface Produto {
  cod: number;
  produto: string;
  quantidade: number;
  preco: number;
  editar: boolean;
  excluir: boolean
}

export function useAdicionarItem() {
  const [carregando, setCarregando] = useState<boolean>(false);
  const [rows, setRows] = useState<Produto[]>([])

  const adicionarItem = async (novoProduto: Produto) => {
    setCarregando(true)

    try {
      const response = await fetch('http://localhost:3000/estoque/adicionar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoProduto)
      })

      const res = await response.json();
      if (res.sucess) {
        setRows(res.rows);
      }

      else {
        alert(res.error)
      }
    } catch (err) {
      alert('Erro ao acessar API.')
    }

    finally {
      setCarregando(false);
    }
  }
  return { adicionarItem, rows, carregando }

}

export function useExibirListaEstoque() {
  const [buscando, setBuscando] = useState<boolean>(false);
  const [rows, setRows] = useState<any[]>([]);

  const ListarProdutos = useCallback(async (busca: string | number) => {
    setBuscando(true)
    try {
      const url = `http://localhost:3000/estoque/buscar${busca ? `?busca=${busca}` : ""}`;
      const response = await fetch(url, { method: 'GET' });

      const res = await response.json();
      if (!res.error && Array.isArray(res)) {
        setRows(res)
      }


    } catch (err) {
      alert('Erro ao acessar API')
    }

    finally {
      setBuscando(false);
    }

  }, []);

  return { ListarProdutos, rows, buscando }
}





