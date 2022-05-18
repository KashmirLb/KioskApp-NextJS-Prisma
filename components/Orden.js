

const Orden = ({orden}) => {

    const { id, nombre, fecha, pedido, total } = orden

  return (
    <div className="flex gap-4 border p-5">
        <div>
            <div className="border p-5 font-bold">Ciente: {nombre}</div>
            <div className="border p-5">id Pedido: {id}</div>
            <div className="border p-5">Fecha Pedido: {fecha}</div>
            <div className="border p-5">Total pagado: {total}</div>

        </div>
        <div>
            {pedido.map(prod =>(
                <div className="border p-5">
                    <div>Artículo: <span>{prod.nombre}</span></div>
                    <div>Cantidad: <span>{prod.cantidad}</span></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Orden