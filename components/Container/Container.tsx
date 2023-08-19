import { ReactNode } from "react";

type Props={
    children:ReactNode
}

export default function Container({children}:Props){
    return(
        <div className={`
        h-full
        mx-2
        sm:px-[50px]
        lg:px-[100px]
        xl:px-[150px]
        2xl:px-[200px]
        3xl:px-[300px]
        
        
        `}>
            {children}
        </div>
    )
}