import Container from "@/components/Container/Container";
import React from "react";
import Perguntas from "@/data/perguntas.json"
import CardPergunta from "@/components/CardPergunta/CardPergunta";

export default function PerguntasSection(){
    return(
        <section id="frequentes" className={`
         text-black py-20`}>
            
        <Container>
            <h1 className={`text-2xl text-center font-bold py-5`}>Perguntas frequentes</h1>
            <div id="wrapper"
            className={`
            flex flex-wrap 
            justify-between items-start
            gap-y-5
            w-full
            `}>
                {Perguntas.map((pergunta)=>(
                    <div key={pergunta.id} className="w-full lg:w-[48%]">
                    <CardPergunta pergunta={pergunta}/>
                    </div>
                ))}
            
                
            </div>
        </Container>
 
        </section>
    )
}