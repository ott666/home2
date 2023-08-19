import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
interface CardPerguntaProps{
    pergunta:PerguntaProps

}

interface PerguntaProps{
    id:string
    title:string
    text:string
}

export default function CardPergunta(props:CardPerguntaProps){
    return(
        
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>{props.pergunta.title}</AccordionTrigger>
                  <AccordionContent>
                    {props.pergunta.text}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          }
          
    
