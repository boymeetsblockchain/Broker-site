import Image  from "next/image"
import {FaHome} from 'react-icons/fa'
import Chat from "../components/chat"
import Login from "../components/Login"
import Whatsapp from "../components/whatsapp"

export default function signIn() {
  return (
    <div className="relative">
      <Login />
      <Whatsapp />
      <Chat />
    </div>
  )
}
