import { useState } from "react";
import { Produto } from './../utils/Types'

export default function useForm() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [cont, setCont] = useState(1);

    const getProdutos = () => {
        return [...produtos]
    }

    const addProduto = (produto: Produto) => {
        const novo_produto = {
            ...produto,
            id: cont
        }

        setProdutos([...produtos, novo_produto])
        setCont(cont + 1)
        console.log("add produto", produto.nome)
    }

    return { getProdutos, addProduto };
}