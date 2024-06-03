'use client'
import React from "react";
import { useRestarQuery, useSumarQuery, traerNumerosQuery } from "@/query/contador"
import { useQuery } from "@tanstack/react-query"
import { incrementarNumero } from "@/servicio/contador";

export function Contador() {
    const numero = useQuery(traerNumerosQuery).data?.numero ?? 0;

    const {mutate: mutarSuma} = useSumarQuery()
    const {mutate: mutarResta} = useRestarQuery() 

    const sumar = async () => {
        try{
            await mutarSuma(); //mutar, cambiar la base de datos
            console.log('Mutación');
            console.log('exito')
        }catch(error){
            console.error('error');
        }
    }

    const restar = async () => {
        try{
            await mutarResta(); //mutar, cambiar la base de datos
            console.log('Mutación');
            console.log('exito')
        }catch(error){
            console.error('error');
        }
    }

    return (
        <>
            <h1>Contador</h1>
            <h1>{numero}</h1> 
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
        </>
    )
}