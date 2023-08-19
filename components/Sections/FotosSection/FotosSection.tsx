import React from 'react';
import ImageMasonry from '@/components/Masonry';
import Container from '@/components/Container/Container';


export default function FotosSection(){
    return(
        <section id='Galeria' className={`
        py-10 
        `}>
            
        <Container>
            <h1 className='text-[28px] py-5 text-center font-bold'>Galeria de fotos</h1>
            <ImageMasonry/>

        </Container>
        </section>
        
    )
}