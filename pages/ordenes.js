import React from 'react'
import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import Orden from '../components/Orden'

export default function Ordenes(){

    const { ordenes } = useQuiosco()
  return (
      <Layout page="Ordenes Pendientes">
          
                <div>
                    <h1 className="text-4xl font-black">Ordenes pendientes</h1>
                    <p className="text-2xl my-10">Ordenes creadas y pendientes por enviar:</p>
                </div>
                <div>
                    
                    {ordenes.map( orden => (
                        <Orden
                            key={orden.id}
                            orden={orden}
                        />
                    ))}
                </div>
            
      </Layout>
  )
}

