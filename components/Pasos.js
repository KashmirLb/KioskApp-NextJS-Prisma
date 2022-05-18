import { useRouter } from 'next/router'

const pasos = [
    {paso: 1, nombre: 'Menú', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Datos y Total', url: '/total'},

]

const Pasos = () => {

    const router = useRouter()

    const calcularProgreso = () => {
        
        let valor;

        if(router.pathname==="/" || router.pathname==="/ordenes"){
            valor=2
        }
        else if(router.pathname==="/resumen"){
            valor=50
        }
        else{
            valor=100
        }

        return valor
    }
  return (
    <>
        <div className="flex justify-between mb-5">
            {pasos.map(paso =>(
                <button 
                    key={paso.paso} 
                    className="font-bold text-2xl" 
                    onClick={()=>{
                        router.push(paso.url)
                    }}
                >
                    {paso.nombre}
                </button>
            ))}
        </div>
        <div className='bg-gray-100 mb-10'>
            <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10" style={{width: `${calcularProgreso()}%`}}>

            </div>
        </div>
    </>
  )
}

export default Pasos