import Image from "next/image"
import { RiMessageFill } from "react-icons/ri"
import { MdModeEditOutline } from "react-icons/md"

const Chat = () => {
    return (
        <div className='position fixed bottom-4 right-2'>
            <div className='space-x-2 md:space-x-4 p-2 rounded-full  flex items-center justify-center'>
                <button className="bg-gray-50 py-2 px-3 rounded-xl font-semibold">Chat with us 👋</button>
                <div className="relative flex items-center justify-center hover:bg-white rounded-full">
                    <div className=" absolute hover:top-0 hover:p-3 md:hover:p-5 cursor-pointer bg-white rounded-full">
                        <MdModeEditOutline className='text-white hover:text-blue-500 hover:text-[27px] text-0  md:hover:text-[30px]' />
                    </div>
                    <div className=" p-3 md:p-5 cursor-pointer bg-gray-800 rounded-full">
                        <RiMessageFill className='text-white text-[27px] md:text-[30px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat