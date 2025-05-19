import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function GridItem(){
    return(
        <main className="flex flex-wrap gap-15">
            <Card className="w-65 h-65 border-amber-950 p-5 flex justify-center items-center flex-col">
                <div>
                    <img className="w-52 h-52" src="https://ocondominio.cloudpainel.com.br/source/Gold-03d-150.jpg" alt="" />
                    <div className="flex justify-center flex-col">
                        <p className="flex justify-center">Geladeira</p>
                        <p className="flex justify-center"><Badge variant="destructive" >Comprado</Badge></p>
                        
                    </div>
                </div>
            </Card>

                    <Card className="w-65 h-65 border-amber-950 p-5 flex justify-center items-center flex-col">
                <div>
                    <img className="w-52 h-52" src="https://ocondominio.cloudpainel.com.br/source/Gold-03d-150.jpg" alt="" />
                    <div className="flex justify-center flex-col">
                        <p className="flex justify-center">Geladeira</p>
                        <p className="flex justify-center"><Badge variant="destructive" >Comprado</Badge></p>
                        
                    </div>
                </div>
            </Card>

                    <Card className="w-65 h-65 border-amber-950 p-5 flex justify-center items-center flex-col">
                <div>
                    <img className="w-52 h-52" src="https://ocondominio.cloudpainel.com.br/source/Gold-03d-150.jpg" alt="" />
                    <div className="flex justify-center flex-col">
                        <p className="flex justify-center">Geladeira</p>
                        <p className="flex justify-center"><Badge variant="destructive" >Comprado</Badge></p>
                        
                    </div>
                </div>
            </Card>
        </main>

        
    )
}