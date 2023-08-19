import Container from '@/components/Container/Container'
import React from 'react'
import Servicos from '@/data/servicos.json'
import ServicoCard from '@/components/ServicoCard/ServicoCard'

function ServicosSection() {
  return (
    <section id='ServicosSection' className='bg-purple-600/90 pt-14 pb-5'>

        <Container>
            <h1 id="titleServicosSection"
            className={`
            text-[28px] 
            py-10
            font-bold
            text-white
            text-center`}>
            
                Nossos serviços
             </h1>

             <div id='wrap-servicos'
             className={`
             flex flex-wrap justify-between gap-y-5
             `}>
                {Servicos.map((servico)=>(
                <ServicoCard key={servico.id} Servico={servico} />
                                
                ))}

             </div>
        </Container>

    </section>
  )
}

export default ServicosSection