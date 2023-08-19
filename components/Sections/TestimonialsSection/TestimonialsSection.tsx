import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialsData from '@/data/testimonials.json'
import Container from '@/components/Container/Container';
import Image from 'next/image';

export default function TestimonialsSection(){
    return(
    <section className='h-[30vh]'>

        <Swiper className={`
        h-full
        flex 
        `}>
            {TestimonialsData.map((testimonial)=>(
                <SwiperSlide key={testimonial.id} className='text-white relative'>
                   <div className='w-full h-full relative bg-purple-600/70 z-2'>
                    <Image style={{objectFit:'cover', objectPosition:'top', zIndex:'-1'}} src={testimonial.img} fill={true} alt='testimonial'/>
                    
                        <div className={`
                        mx-2
                        gap-4
                        sm:px-[50px]
                        lg:px-[100px]
                        xl:px-[150px]
                        2xl:px-[200px]
                        3xl:px-[300px]
                        flex flex-col h-full items-center justify-center
                        `}>

                        <h1 className='text-xl text-center z-3'>{testimonial.name}</h1>
                        <p className='text-lg italic text-center font-bolder z-3'>{testimonial.text}</p>
                        </div>
                        
                 
                </div>
                </SwiperSlide>
            ))}
    </Swiper>        
    </section>


    )
}