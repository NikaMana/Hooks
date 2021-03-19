import React from 'react'
import { useAlert } from './Alert/AlertContext'
export default function Main() {
    const {show} = useAlert()
    return (
        <>
            <h1>Context</h1>
            <button onClick={() => show('Text')} className='btn btn-success'>Alert</button>            
        </>
    )
}