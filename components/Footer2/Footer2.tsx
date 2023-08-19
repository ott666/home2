import React from 'react'
import Container from '../Container/Container'
import Image from 'next/image'
function Footer() {
  return (
    <Container>
        <div className='flex flex-row justify-between pt-2'>
            <div id='wraplogo'
                className='w-[250px] relative h-[250px]'>
                <Image src={'/Logo-HH-PNG.png'} fill={true} alt='logo'/>

            </div>
            <div id='div2'
                className='flex flex-col pt-4 w-[400px]'>
                <h4>Fale Conosco</h4>
                <div className='ml-2'>
                    <p>(16) 3911-4777 | (16) 99170-6391</p>
                    <p>Aberto todos os dias 24 horas</p>
                    <p>Rangel Pestana, 547 - Sala 03 Vila Virginia - Ribeirão Preto - SP (Em frente ao Banco do Brasil)</p>
                </div>
                </div>
            <div id='div3'
            className='flex flex-col pt-4 w-[300px]'>
                <h3>Siga-nos</h3>
                <span>Acompanhe as ativadades e novidades em nossas redes sociais.</span>
                <div id='wrap-icons' className='flex'>
                    <span>1</span>
                    <span>3</span>
                    <span>2</span>
                </div>
            

            </div>
        </div>
    </Container>
  )
}

export default Footer