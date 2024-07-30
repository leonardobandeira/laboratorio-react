import { Dialog, DialogClose, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableRow } from "./components/ui/table";
import { Search, PlusCircle } from 'lucide-react'
import { DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import useForm from "./hooks/useForm";
import { useEffect } from "react";

export default function App() {
  const { getProdutos, addProduto } = useForm();
  const dummyProdutos = [
    { nome: 'Mesa', preco: '150.00' },
    { nome: 'Cadeira', preco: '50.00' },
    { nome: 'Sofá', preco: '600.00' },
    { nome: 'Geladeira', preco: '1200.00' },
    { nome: 'Fogão', preco: '800.00' },
    { nome: 'Micro-ondas', preco: '300.00' },
    { nome: 'Cama', preco: '900.00' },
    { nome: 'Guarda-roupa', preco: '700.00' },
    { nome: 'Escrivaninha', preco: '200.00' },
  ];

  useEffect(() => {
    dummyProdutos.forEach(produto => addProduto(produto))
  }, [])

  const produtos = getProdutos()

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-left text-4xl font-semibold">
        <h1>Gerenciador de Pedidos</h1>
        <hr className="my-4 border-gray-200 " />
      </div>
      <div className="flex items-center justify-between mb-8">
        <form className="flex items-center gap-4">
          <Input name="id" placeholder="ID do pedido" className="w-auto"></Input>
          <Input name="nome" placeholder="Nome do pedido" className="w-auto"></Input>
          <Button type="submit" variant="ghost">
            <Search className="w-4 h-4 mr-2" />
            Filtrar resultado
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default"><PlusCircle className="w-4 h-4 mr-2" />Novo produto</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="border-b-2">
              <DialogTitle className="font-bold">Novo produto</DialogTitle>
              <DialogDescription className="text-xs text-gray-400 pb-2">Adicionar um novo Produto</DialogDescription>
            </DialogHeader>
            <form className="space-y-2">
              <div className="flex flex-row text-right gap-4 items-center">
                <Label htmlFor="nome_produto">Produto:</Label>
                <input type="text" className="flex-grow p-2" id="nome_produto" placeholder="Farinha de trigo" />
              </div>

              <div className="flex flex-row text-right gap-4 items-center">
                <Label htmlFor="preco_produto">Preço:</Label>
                <input type="text" className="flex-grow p-2" id="preco_produto" placeholder="R$1,99" />
              </div>

              <DialogFooter>
                <DialogClose asChild><Button type="button" variant="outline">Cancelar</Button></DialogClose>
                <Button type="submit" variant="default">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

      </div>


      <div className="border p-4 rounded-lg">
        <Table>
          <TableHead>ID</TableHead>
          <TableHead>Produto</TableHead>
          <TableHead>Preço</TableHead>

          <TableBody>
            {produtos.map(
              (produto) => {
                return (
                  <TableRow key={produto.id}>
                    <TableCell>{produto.id}</TableCell>
                    <TableCell>{produto.nome}</TableCell>
                    <TableCell>{produto.preco}</TableCell>
                  </TableRow>
                )
              }
            )
            }
          </TableBody>
        </Table>
      </div>
    </div >
  )
}