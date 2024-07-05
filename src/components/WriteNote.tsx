import React from 'react'
import { Button } from './ui/button';
import { FaPenFancy } from "react-icons/fa";
import Link from 'next/link';

const WriteNote = () => {
  return (
    <Link href={'/notes/writenotes'} className='font-roboto'>
      <Button className='w-full flex gap-x-2 justify-start font-semibold' variant={'ghost'}>Write Notes <FaPenFancy /></Button>
    </Link>
  )
}

export default WriteNote;