import React from 'react'
import Servicos from '@/data/servicos.json'
import BreadCrumbServicos from '@/components/BreadCrumbServicos/BreadCrumbServicos'
import ContentServico from '@/components/ContentServico/ContentServico'
import Container from '@/components/Container/Container'

function page({params}:any) {
    const servico = Servicos.find(({ pseudo }) =>  pseudo === params.pseudo)
    return (
      <>
    <BreadCrumbServicos Servico={servico}/>
    <Container>

    <ContentServico servico={servico}/>
    </Container>
    </>
  )
}

export default page