import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"
import { useRouter } from "next/router"

const Sidebar = () => {

    const router = useRouter();
    const { categorias } = useQuiosco()

  return (
    <>
        <Image width={300} height={100} src="/assets/img/logo.svg" alt="Imagen logotipo"/>

        <nav className="mt-10">
            {categorias.map( categoria => (
                <Categoria categoria={categoria} key={categoria.id}/>
            ))}
            <div className="flex items-center gap-4 w-full border p-5 bg-indigo-600 hover:bg-indigo-800 text-white uppercase font-bold hover:cursor-pointer"
            onClick={()=>router.push("/ordenes")}>
              Ordenes pendientes
            </div>
        </nav>
    </>
  )
}

export default Sidebar