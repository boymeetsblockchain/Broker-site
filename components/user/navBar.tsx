import { MdOutlineMenu } from "react-icons/md"
import { useContextState } from "../../context/context"

const NavBar = () => {
    const {userSidebar, setUserSidebar} = useContextState()

  return (
    <div className='relative bg-black p-4'>
        <MdOutlineMenu className="text-4xl text-white absolute top-3" onClick={() => setUserSidebar(prev => !prev)}/>
        <h2 className="text-white text-center text-2xl">Broker Site</h2>
    </div>
  )
}

export default NavBar