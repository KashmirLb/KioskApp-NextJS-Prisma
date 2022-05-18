import Image from "next/image"
import { useRouter } from "next/router"
import useQuiosco from "../hooks/useQuiosco"

const Categoria = ({categoria}) => {

  const router = useRouter()

  const { categoriaActual, handleClickCategoria } = useQuiosco()
  const { nombre, icono, id } = categoria
  return (
    <div className={`${categoriaActual?.id ===id ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
        <Image
          width={70}
          height={70}
          src={`/assets/img/icono_${icono}.svg`}
          alt="Imagen Icono"
        />
        <button
          type="button"
          className="text-2xl font-bold hover:cursor-pointer"
          onClick={()=>{
            handleClickCategoria(id)
            router.push("/")
          }}
        >
          {nombre}
        </button>
    </div>
  )
}

export default Categoria