import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ItemTable(){
    return(
        <Table>
            <TableCaption>Items</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Nome</TableHead>
                    <TableHead className="w-[100px]">Link</TableHead>
                    <TableHead className="w-[100px]">Status</TableHead>
                    <TableHead className="text-right">Preço</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">Geladeira</TableCell>
                    <TableCell></TableCell>
                    <TableCell><Badge variant="default">Disponível</Badge></TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className="font-medium">uau</TableCell>
                    <TableCell></TableCell>
                    <TableCell><Badge variant="destructive">Comprado</Badge></TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className="font-medium">uhul</TableCell>
                    <TableCell></TableCell>
                    <TableCell><Badge variant="secondary">Reservado</Badge></TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>

            </TableBody>
        </Table>

    )
}