import Image from 'next/image'
import React from 'react'

function BreadCrumbGenerico(props:any) {
  return (
    <div className='flex h-[60vh] relative items-center justify-center '>
      <div className='absolute inset-0 bg-black/50'>
      </div>
        <Image style= {{objectFit:'cover', zIndex:-1}}src={`/services/acompanhamento/img3.png`} alt='fundo' fill={true}/>
        <h1 className='text-center text-5xl z-[5] text-white font-bold'>{props.props}</h1>
    
    </div>
    
  )
}

export default BreadCrumbGenerico