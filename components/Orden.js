import { formatearDinero, formatearFecha } from "../helpers"
import ModalProducto from "./ModalProducto"

const Orden = ({orden}) => {

    const { id, nombre, fecha, pedido, total } = orden

  return (
    <div className="flex gap-4 border p-5">
        <div>
            <div className="border p-5 font-bold">Cliente: {nombre}</div>
            <div className="border p-5">id Pedido: {id}</div>
            <div className="border p-5">Fecha Pedido: {formatearFecha(fecha)}</div>
            <div className="border p-5">Total pagado: {formatearDinero(total)}</div>

        </div>
        <div>
            <h3 className="border p-5 font-bold">Articulos:</h3>
            {pedido.map(prod =>(
                <div className="border p-5" key={prod.id}>
                    <div>Artículo: <span>{prod.nombre}</span></div>
                    <div>Cantidad: <span>{prod.cantidad}</span></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Orden