import Image from "next/image"
import { RiWhatsappLine } from "react-icons/ri"
import message from "../public/images/message.png"

const Whatsapp = () => {
    return (
        <div className='position fixed bottom-4 left-2'>
            <div className='space-x-2 md:space-x-4  p-2 rounded-full  flex items-center justify-center'>
                <div className="p-2 bg-green-400 rounded-full">
                    <RiWhatsappLine className='text-white text-[30px] md:text-[40px]' />
                </div>
                <Image src={message} alt="" className="" height={50}/>
            </div>
        </div>
    )
}

export default Whatsapp