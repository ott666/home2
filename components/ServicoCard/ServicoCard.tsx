import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface propsServico{
    Servico:servico
}

interface servico{
    title:string
    textCard:string
    pseudo:string
    pastaFotos:string
    
}

function ServicoCard(props:propsServico) {
  return (
    <Link href={`/servicos/${props.Servico.pseudo}`} className='group hover:-translate-y-2 duration-500 w-[300px] py-5 rounded-3xl gap-2 bg-gray-300 hover:bg-gray-400 hover:text-black hover:shadow-black/70 hover:shadow-2xl flex flex-col items-center'>
        <div id='wrapImgServico'
        className={`
        relative
        w-[250px]
        h-[250px]
        rounded-full overflow-hidden
        duration-700
        group-hover:brightness-110 
        `}>

        <Image src={`/services/${props.Servico.pastaFotos}/img1.png`} fill={true} alt={props.Servico.pseudo} style={{objectFit:'cover'}} className='hover:scale-110 duration-300'/>
        </div>
        <div id='wrap-texto' className={`w-[250px]`}>

        <h2 className={`
        text-lg 
        font-bold
        `}>
            {props.Servico.title}
        </h2>
        <p
        className='
        text-sm
        '>{props.Servico.textCard}
        </p>
        </div>
    </Link>
  )
}

export default ServicoCard