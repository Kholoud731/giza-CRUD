import { UseFormRegister } from "react-hook-form";
import { FlightFormInputs } from "../flight/types";
import { LoginFormInputs } from "../login/types";

export interface ActionButtonProps{
    onClick: ()=>void
    text: string
    isNav?: boolean
}

export interface ErrorDescription {
    statusText?: string;
    message?: string;
  }

export interface InputProps {
    name: string
    value?: string
    holder: string 
    type: 'text' | 'date' | 'email' | 'password'
    reg: UseFormRegister<FlightFormInputs > | UseFormRegister< LoginFormInputs>
    error?:string 
  }