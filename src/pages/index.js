import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className='flex w-half items-center '>
  <Input />
<Button >
prabin
</Button>
  </div>
  )
}
