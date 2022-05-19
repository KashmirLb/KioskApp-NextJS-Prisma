export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('es-ES',{
        style:"currency",
        currency: "EUR"

    })
}

export const formatearFecha = fecha => {
    const nuevaFecha = new Date(parseInt(fecha));

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return nuevaFecha.toLocaleDateString('es-ES', opciones)
}
