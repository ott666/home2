import Container from '@/components/Container/Container'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SobreSection = () => {
  return (
    <section id='sobre' className='pt-5'>
        <Container>
            <div className='flex flex-col'>
            <div id='rowdecima' className={`
            flex flex-col py-10
            `}>
            <span className='italic py-5 text-lg'>Explorando Nossa Jornada e Compromisso de Qualidade.</span>
            <h1 className='text-3xl font-bold max-w-xl'>{"Descubra Nossa História e Compromisso de Excelência"
}</h1>
            </div>
            <div id='wrapSobre'
            className={`
            flex 
            gap-14
            justify-start
            `}> 
                <div id='div_1' 
                className={`
                pb-32
                w-[200px]
                justify-center
                items-center
                h-fit
                flex flex-col`}>
                    
                    <span id='textoAnos'
                    className='
                    text-center
                    font-thin
                    text-[98px]
                    '>
                        10
                    </span>
                    <span id='textoExperiencia'
                    className={`
                    text-xl
                    text-start w-full pb-3
                    font-bold
                    `}>
                        Anos de experiência
                    </span>

                    <p id='paragraphDiv1'
                    className={`
                    text-sm`}>
                       Há mais de 10 anos, a Home Health Ribeirão oferece cuidados domiciliares com expertise e comprometimento.
                    </p>

                </div>
                 <div id='div_2'
                className='min-w-[400px] h-[600px] relative -mb-14 rounded-3xl overflow-hidden shadow-black shadow-lg'>
                    <Image src="/services/internacao/img2.png" alt='img' style={{objectFit:'cover'}} fill={true}/>
                </div>
                <div id='div_3'
                className={`
                flex flex-col 
                max-w-[500px]
                gap-10
                h-fit
                `}>
                    <p className={`font-bold`}>A Home Health Ribeirão é uma empresa de apoio e assistência a pacientes a domicílio, fundada em 2015 pela Diretora de Serviços de Saúde, Francine Florindo.
                    </p>
                    <p>Atendemos mais de 2.000 vidas em diversas cidades da região, incluindo Ribeirão Preto, Sertãozinho e Bebedouro. Nossa missão é priorizar a segurança e o bem-estar dos pacientes, oferecendo serviços abrangentes que vão desde cuidadores de idosos até terapeutas especializados.</p>

                    <Link href={'/sobre'} className='bg-purple-500 py-5 w-[80%]  text-center rounded-3xl text-lg text-white'>Sobre nós</Link>
                </div>
            </div>

            </div>
        </Container>

    </section>
  )
}

export default SobreSection