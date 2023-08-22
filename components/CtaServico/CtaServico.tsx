import React from 'react'
import { ArrayTypeNode } from 'typescript'
import Image from 'next/image'
import Link from 'next/link'

export default function CtaServico(props:any){
    return(

        
       <div className={`
            
            px-2
                md:px-[50px]   
                lg:px-[75px]
                xl:px-[100px]
                3xl:px-[150px]
                flex items-center justify-start h-full
            `}>
            
                <div id='mainSlide'
                className={`
                h-full
                flex flex-col lg:flex-row 
                lg:justify-start lg:items-center
                justify-center items-center 
               
                
                `}> 
                    <div className='absolute w-[700px] h-[700px] right-14'>
                        <Image src={'/Logo-HH-PNG.png'} alt='logo' style={{objectFit:'cover', zIndex:2}} fill={true}/>
                    </div>
                    <div id='wrapHeroContent' 
                    className={`

                    text-center
                    lg:text-start

                    flex flex-col 
                    justify-center  
                    items-center  
                    z-10 
                        
                    
                        gap-[15px]
                        md:gap-[25px]

                        xl:gap-[15px]
                        3xl:gap-[25px]
                        
                        lg:w-[648px]
                        xl:w-[800px]
                        3xl:w-[980px]

                `}>

                        <h1 id='heroTitle' 
                        className={`

                       
                            text-[22px]
                            sm:text-[44px]
                            xl:text-[52px]
                            3xl:text-[72px]

                        `}> 
                               {props.ctaTitle}
                        </h1>

                        <p id='paragraphHero' 
                        className={`
                        font-extralight
                        
                            
                            text-[14px] 
                               
                                sm:text-[28px]
                                lg:text-[18px] 
                                xl:text-[24px]
                                3xl:text-[28px] 
                        `}>
                            {props.servico.ctaText}
                        </p>

                        <div 
                        id='wrapButtonsHero'
                        className={`
                        w-full
                        items-center 
                            justify-center
                            sm:justify-around 
                            lg:justify-start 

                                gap-8
                                lg:gap-[15px]
                                xl:gap-[25px]
                                3xl:gap-[40px]
                        flex 
                            
                                
                            
                        `}>
                            <Link href={'/servicos'} 
                            className={`
                            rounded-3xl
                            text-center 
                            bg-purple-500 

                                text-[14px]
                                    sm:text-3xl 
                                    md:text-[30px]
                                    lg:text-[22px]
                                    xl:text-[24px]
                                    3xl:text-[30px]
                               
                                

                                
                                px-[22px]
                                    md:px-[55px]
                                    lg:px-[30px]
                                    3xl:px-[70px]
                                py-1 
                                    lg:py-[3px]
                                    xl:py-[5px]
                                    3xl:py-[10px] 
                            
                            `}>
                                Serviços
                            </Link>
                            
                            <Link href={'/servicos'} 
                            className={`
                            text-center
                           
                            
                            bg-transparent
                            rounded-3xl

                            border
                                3xl:border-2
                            
                            border-white 

                                text-[14px]
                                    sm:text-3xl 
                                    lg:text-[22px]
                                    xl:text-[24px]
                                    3xl:text-[30px]
                               
                               
                                
                                
                                px-[22px]
                                    md:px-[55px]
                                    lg:px-[30px]
                                    3xl:px-[70px]
                                py-1
                                    lg:py:-[3px] 
                                    xl:py-[5px]
                                    3xl:py-[8px] 
                            
                            `}>
                                Serviços
                            </Link>
                        </div>
                       
                    </div>

                </div>
                <div id='filterimg' className='bg-black/60 w-full inset-0 h-full absolute'>
                <Image 
                   style={{
                    objectFit:'cover',
                    zIndex:'-2'
                   }}
                   src={`/services/${props.pastaFotos}}/img2.png`} fill={true} alt='bg'/>
                </div>
            </div>
        
    )
}