import { FC } from "react"

interface IProps {
    name : string 
}


const Icon : FC<IProps> = ({name}) =>{
    
    return (<i className={`fa ${name}`}/>) 
} 

export default Icon