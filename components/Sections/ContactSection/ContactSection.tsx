import Container from '@/components/Container/Container'
import Image from 'next/image'
import React from 'react'
import { ObjectFlags } from 'typescript'

function ContactSection() {
  return (
    <section className='py-10'>
    <Container>
        <div className='flex flex-row items-center shadow-black shadow-lg gap-10 text-white justify-center pt-5 pb-10 rounded-3xl bg-gray-200'>
            <div className='flex hover:-translate-y-2 w-[30%] pl-5 pt-3 pb-2  gap-5  justify-start bg-purple-500 rounded-3xl duration-700 hover:shadow-black hover:shadow-lg'>
                <div id='wrapicon'
                className='relative group  duration-700 w-[50px] h-[50px] border-2 border-black rounded-3xl overflow-hidden'
                >
                <Image src={'/icons/acompanhamento.svg'} alt='icon' fill={true} style={{objectFit:'cover'}}/>
                </div>
                <div className='flex flex-col'>
                    <p className='text-2xl font-bold '>Endereço</p>
                    <p className='text-lg'>Rangel Pestana, 547</p>
                    <p className='text-lg'>Ribeirão Preto, SP 14030-210</p>
                </div>
            </div>

            <div className='flex hover:-translate-y-2 w-[30%] pl-5 pt-3 pb-2 gap-5 bg-purple-500 rounded-3xl duration-700 hover:shadow-black hover:shadow-lg'>
                <div id='wrapicon'
                className='relative group  duration-700 w-[50px] h-[50px] border-2 border-black rounded-3xl overflow-hidden'
                >
                <Image src={'/icons/acompanhamento.svg'} alt='icon' fill={true} style={{objectFit:'cover'}}/>
                </div>
                <div className='flex flex-col'>
                    <p className='text-2xl font-bold'>E-mail:</p>
                    <p className='text-lg'>vendas.3@stockprint.com.br</p>
                    <p className='text-lg'>vendas2@stockprint.com.br</p>
                </div>
            </div>

            <div className='flex hover:-translate-y-2 w-[30%] pl-5 pt-3 pb-2 gap-5 bg-purple-500 rounded-3xl duration-700 hover:shadow-black hover:shadow-lg'>
                <div id='wrapicon'
                className='relative group  duration-700 w-[50px] h-[50px] border-2 border-black rounded-3xl overflow-hidden'
                >
                <Image src={'/icons/acompanhamento.svg'} alt='icon' fill={true} style={{objectFit:'cover'}}/>
                </div>
                <div className='flex flex-col '>
                    <p className='text-2xl font-bold'>Telefones:</p>
                    <p className='text-lg'>(16) 99170-6391</p>
                    <p className='text-lg'>(16) 3911-4777</p>
                </div>
            </div>
        </div>
        <div id='wraprow2' className=' mt-10 bg-gray-300 shadow-black shadow-lg w-[80%] flex flex-col justify-center gap-5  mx-auto px-14 h-[370px]'>
            <div className='flex justify-center gap-2 '>
                <input placeholder='Seu nome' className='w-[50%]  text-start pl-5 rounded-3xl py-6 '/>
                <input placeholder='Seu e-mail' className='w-[50%] text-start pl-5 rounded-3xl py-6 '/>
            </div>
            
                <input placeholder='Assunto' className='w-[100%]  text-start pl-5 rounded-3xl py-6 '/>

                <input placeholder='Mensagem' className='w-[100%] text-start pl-5 rounded-3xl py-12 '/>
            
            

        </div>
    </Container>
    </section>
    )
}

export default ContactSection