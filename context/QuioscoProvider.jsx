import { useState, useEffect, createContext} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [ categorias, setCategorias ] = useState([])
    const [ categoriaActual, setCategoriaActual ] = useState({})
    const [ producto, setProducto ] = useState({})
    const [ modal, setModal ] = useState(false)
    const [ pedido, setPedido ] = useState([])
    const [ nombre, setNombre ] = useState("")
    const [ total, setTotal ] = useState(0)
    const [ ordenes, setOrdenes ] = useState([])

    const router = useRouter();

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data)
    }

    const cargarOrdenes = async () => {
        const { data } = await axios('/api/ordenes')
        setOrdenes(data)
    }

    useEffect(()=>{
        obtenerCategorias()
        cargarOrdenes()
        console.log(typeof Date.now())
        console.log( Date.now())
    },[])

    useEffect(()=>{
        setCategoriaActual(categorias[0])
    },[categorias])

    useEffect(()=>{
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)

        setTotal(nuevoTotal)
    },[pedido])

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id)

        setCategoriaActual(categoria[0])
    }

    const handleClickProducto = producto =>{
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId, ...producto}) => {

        if(pedido.some(productoState => productoState.id === producto.id)){
            const pedidoActualizado = pedido.map( productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado)
            toast.success("Pedido actualizado", {
                autoClose: 2000
            })
            return
        }
        setPedido([...pedido, producto])
        toast.success("Agregado al pedido", {
            autoClose: 2000
        })
    }

    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter( producto => producto.id === id)

        setProducto(productoActualizar[0])
        setModal(!modal)
    }

    const handleEliminarProducto = id =>{
        const pedidoActualizado = pedido.filter( producto => producto.id !== id)

        setPedido(pedidoActualizado)
    }

    const colocarOrden = async e => {

        e.preventDefault()

        try {
            await axios.post('api/ordenes', {pedido, nombre, total, fecha: Date.now().toString()})

            //Reset App
                
                setCategoriaActual(categorias[0])
                setPedido([])
                setNombre("")
                setTotal(0)
                cargarOrdenes()

                toast.success("Pedido realizado correctamente!")

                setTimeout(() => {
                    router.push("/")
                },2000)

        } catch (error) {
            console.log(error)
        }
    }

  return (
    
    <QuioscoContext.Provider
        value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            categoriaActual,
            handleClickProducto,
            handleChangeModal, 
            modal,
            producto,
            handleAgregarPedido,
            pedido,
            handleEditarCantidades,
            handleEliminarProducto,
            nombre,
            setNombre,
            colocarOrden,
            total,
            ordenes
        }}
    >
        {children}
    </QuioscoContext.Provider>
  )
}

export {
    QuioscoProvider
}

export default QuioscoContext