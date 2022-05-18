import Layout from "../layout/Layout"
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "../components/ResumenProducto"
import { formatearDinero } from "../helpers"

export default function Resumen(){

    const { pedido, total } = useQuiosco()

    return(
        <Layout pagina="Resumen">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-4xl font-black">Resumen</h1>
                    <p className="text-2xl my-10">Revisa tu pedido</p>
                </div>
                <div>
                    <p className="p-4 text-2xl font-bold text-gray-500">Total: </p>
                    <p className="text-3xl font-bold px-4">{formatearDinero(total)}</p>
                </div>
            </div>
            

            { pedido.length === 0 ? (
                <p className="text-center text-2xl">No hay elementos en tu pedido</p>
            ) : (

                pedido.map(producto => (
                    <ResumenProducto
                        key={producto.id}
                        producto={producto}
                    />
                ))

            )}
        </Layout>
    )
}