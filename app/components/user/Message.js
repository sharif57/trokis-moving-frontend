import { MessageCircle } from 'lucide-react'
import React from 'react'

export default function Message() {
  return (
    <div className='  flex justify-end -mt-36'>
        <MessageCircle className='size-16 text-black' />
        {/* <p className='text-white text-xl'>You have a new message</p> */}
    </div>
  )
}
