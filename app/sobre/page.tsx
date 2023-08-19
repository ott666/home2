import Container from '@/components/Container/Container'
import Image from 'next/image'
import React from 'react'
import PerguntasSection from '@/components/Sections/PerguntasSection/PerguntasSection'
import GoogleMaps from '@/components/GoogleMaps'
import ContactSection from '@/components/Sections/ContactSection/ContactSection'

import BreadCrumbGenerico from '@/components/BreadCrumbGenerico/BreadCrumbGenerico'

function page() {
  return (
    <> 
    <BreadCrumbGenerico props='Sobre' />
    <Container>

        <div id='wraprow' className={`
        flex flex-row`}>

                <div id='esquerda ' className='w-[100%]'>
                    <h1 className='text-xl '>A Home Health Ribeirão é uma empresa DE APOIO E ASSISTENCIA A PACIENTE A DOMICÍLIO, que oferece serviços para auxiliar nos cuidados de quem você ama.
                    </h1>
                    <p>Operamos através de franqueados de propriedade e operação independentes, profissionais devidamente selecionados e capacitados para o atendimento de enfermagem e cuidados a paciente domiciliar. Por esse motivo, a segurança e o bem-estar de nossos clientes/pacientes são a prioridade em nossos serviços. Independentemente de você precisar ficar em sua própria casa, com um parente ou amigo, nós podemos ajudar.

</p>
                    <p>Após alguns anos trabalhando com sua saudosa mãe e grande empreendedora do ramo de Home Care a Sra. Rita Mega, A Home Health Ribeirão foi fundada em 2015 pela nossa Diretora de Serviços de Saúde Francine Florindo que logo viu na área de cuidados e saúde domiciliar sua grande paixão; vindas de uma família que conta com grandes médicos e enfermeiras em Ribeirão e Região não poderia ser diferente.

</p>
                    <p>Além da grande experiencia no atendimento de enfermagem domiciliar e equipe de cuidadores de idosos, a empresa segue em fase de crescimento agregando a sua equipe profissionais como Fisioterapeutas, Nutricionistas, médicos da família e médicos especialistas, enfermeiras especialistas em feridas e lesões, Fono, Psicólogos e terapeutas, locação de equipamentos, coleta de exames domiciliar e curso de cuidador de idosos, tudo para o atendimento total necessário ao paciente levando em consideração a individualidade e necessidade de cada vida.

</p>
                    <p>Contamos hoje com o atendimento de mais de 2.000 (Duas Mil) vidas em Ribeirão Preto e Região como Pontal, Bebedouro, Brodowski, São Simão, Cravinhos, Jardinópolis, Monte Alto, Serrana, Barrinha, Sertãozinho, Santa Rosa do Viterbo, Batatais e mais!

</p>
                    <p>Entre em contato pelo nosso WhatsApp que se encontra disponível 24 horas por dia, ou pelas nossas redes sociais no Facebook e/ou Instagram, ou pelos nossos telefones. Ficaremos felizes em atendê-los

</p>
                </div>
                <div className='direita flex flex-col  w-full'>
            <div className='relative w-[100%] h-full'>
            <Image style={{objectFit:'cover'}} src={`/team/quem-somos.png`} fill={true} alt='a'/>

            </div>
        <p className='text-bold text-lg'>Missão</p>
        <p className='text-sm'>Oferecer melhor qualidade de vida para todas as pessoas.</p>
        <p className='text-bold text-lg'>Visão</p>
        <p className='text-sm'>Tornar-se referência de cuidado e qualidade no segmento de serviços home care.</p>
        <p className='text-bold text-lg'>Valores</p>
        <p className='text-sm'>Ética, Responsabilidade, Integridade a vida, Amor ao próximo, Segurança e Respeito.</p>
        </div>
        </div>
        

    </Container>
    <PerguntasSection/>
    <GoogleMaps/>
    <ContactSection/>
    </>
  )
}

export default page