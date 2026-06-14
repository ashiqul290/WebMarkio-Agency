// app/not-found.tsx
import Image from 'next/image'
import Link from 'next/link'
import imgnotfound from '@/assets/notfound.png'
export default function NotFound() {
  return (
    <>
    <div className='mt-10'>
    <Image src={imgnotfound} alt="not found" width={500} height={500} className="mx-auto"/>
    <div className=" text-center mt-5">
      <h2 className=" font-bold font-inter text-[36px] text-white">oops! The page you requested was not found!</h2>
      <p className="text-[#8fa1aa] my-5 text-[16px] font-normal font-nunito">Sorry, But the page you are looking for does't exist!</p>
      <Link href="/"><button className=" shadow-[0_3px_0_4px] shadow-white text-white py-2 px-4 rounded hover:bg-primary cursor-pointer"> Back To Home</button></Link>
    </div>
    </div>
    </>
  )
}