import { useEffect, useCallback } from "react"
import useQuiosco from "../hooks/useQuiosco"
import Layout from "../layout/Layout"
import { formatearDinero } from "../helpers"

export default function Total(){

    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

    const comprobarPedido = useCallback(() => {
        return pedido.length===0||nombre ===""
    },[pedido, nombre])


    useEffect(()=>{
        comprobarPedido()
    },[])

  

    return(
        <Layout pagina="Total Pedido">
            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10">Confirmar tu pedido</p>

            <form
                onSubmit={colocarOrden}
            >
                <div>
                    <label className="block uppercase text-slate-800 font-bold text-xl" htmlFor="nombre">
                        Nombre
                    </label>

                    <input
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 ,t-3 p-2 rounded-md"
                        id="nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />

                </div>

                <div className="mt-10">
                    <p className="text-2xl"> 
                        Total a pagar { " "} <span className="font-bold">{formatearDinero(total)}</span>
                    </p>
                </div>

                <div>
                    <input
                        type="submit"
                        value="Confirmar Pedido"
                        className={`${!comprobarPedido() ? "bg-indigo-600" : "bg-indigo-100"} w-full lg:w-auto px-5 py-2 mt-5 rounded uppercase font-bold text-white text-center`}
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>
        </Layout>
    )
}