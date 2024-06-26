import React from 'react'
import { Button } from './ui/button';

const CreateNote = () => {
  return (
    <div className='font-roboto '>
      <Button className='w-full mt-2 font-semibold' variant={'ghost'}>Add Note +</Button>
    </div>
  )
}

export default CreateNote;