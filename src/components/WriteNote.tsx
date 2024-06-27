import React from 'react'
import { Button } from './ui/button';
import { FaPenFancy } from "react-icons/fa";

const WriteNote = () => {
  return (
    <div className='font-roboto'>
      <Button className='w-full flex gap-x-2 justify-start font-semibold' variant={'ghost'}>Write Notes <FaPenFancy /></Button>
    </div>
  )
}

export default WriteNote;