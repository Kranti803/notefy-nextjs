import React from 'react'

const FormErrorMessage = ({message}:{message:string}) => {
  return (
    <p className="text-red-500 text-xs">{message}</p>
  )
}

export default FormErrorMessage