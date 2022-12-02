import { useState } from "react"
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md"

export default function Frequent() {
  const [links, setLinks] = useState("link-one")


  const handleLinks = (click: string) => {
    if(links === ""){
      setLinks(click)
    } else if (links === click ){
      setLinks("")
    } else {
      setLinks("")
    }
  }

  return (
    <div className="flex flex-col mx-14 md:mx-14 mt-16">
      <h1 className="text-center text-4xl my-4 hover:text-blue-500 cursor-pointer font-semibold">Frequently Asked Questions</h1>
        <ul>
        <li className="my-6">
          <div onClick={() => handleLinks("link-one")} className="flex cursor-pointer items-cennpm ter space-x-3">
            {links === "link-one" ? <MdOutlineKeyboardArrowUp className="text-2xl"/> : <MdOutlineKeyboardArrowDown className="text-2xl"/>}
            <h3 className="text-xl  text-blue-400">How do i become a member?</h3>
          </div>
          {links === "link-one" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}
        </li>
        <li className="my-6">
          <div onClick={() => handleLinks("link-two")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-two" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">Do i need to deposit right Away?</h3>
          </div>
          {links === "link-two" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div>: ""}
          
        </li>
        <li className="my-6">
          <div onClick={() => handleLinks("link-three")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-three" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">Do i need to downoad the software to trade?</h3>
          </div>
          {links === "link-three" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}

        </li>
        <li className="my-6">
          <div onClick={() => handleLinks("link-four")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-four" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">At what age is trading permitted?</h3>
          </div>
          {links === "link-four" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}

        </li>
        <li className="my-6">
          <div onClick={() => handleLinks("link-five")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-five" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">Which currency can be used for trading?</h3>
          </div>
          {links === "link-five" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}

        </li>
        <li className="my-6">
          <div onClick={() => handleLinks("link-six")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-six" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">How can I deposit funds into my trading account ?</h3>
          </div>
          {links === "link-six" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}

        </li>
        <li className="my-6">
          <div onClick={() => handleLinks("link-seven")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-seven" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">How can I deposit funds into my trading account?</h3>
          </div>
          {links === "link-seven" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}

        </li>
        <li className="my-6">
          <div onClick={() => handleLinks("link-eight")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-eight" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">Can I see history of all my transactions?</h3>
          </div>
          {links === "link-eight" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}

        </li>
        <li className="my-6">
          <div onClick={() => handleLinks("link-nine")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-nine" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">Which currencies does brokersite.com accept?</h3>
          </div>
          {links === "link-nine" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}

        </li>

        <li className="my-6">
          <div onClick={() => handleLinks("link-ten")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-ten" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">What are conditions for withdrawals?</h3>
          </div>
          {links === "link-ten" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}

        </li>
        <li className="my-6">
          <div onClick={() => handleLinks("link-eleven")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-eleven" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">What payment methods are available for withdrawal?</h3>
          </div>
          {links === "link-eleven" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}

        </li>
        <li className="my-6">
          <div onClick={() => handleLinks("link-twelve")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-twelve" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">How fast will I receive my funds?</h3>
          </div>
          {links === "link-twelve" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}

        </li>
        <li className="my-6">
          <div onClick={() => handleLinks("link-thirteen")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-thirteen" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">Do I need to provide any document for withdrawal?</h3>
          </div>
          {links === "link-thirteen" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}

        </li>
        <li className="my-6">
          <div onClick={() => handleLinks("link-fourteen")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-fourteen" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">Can I withdraw from my account money that I deposited before trading?</h3>
          </div>
          {links === "link-fourteen" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}

        </li>

        <li className="my-6">
          <div onClick={() => handleLinks("link-fifteen")} className="flex cursor-pointer items-center space-x-3">
            {links === "link-fifteen" ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowDown className="text-2xl" />}
            <h3 className="text-xl  text-blue-400">I have a question that is not here?</h3>
          </div>
          {links === "link-fifteen" ? <div className="pl-10">
            <p>This can be done quickly and easily. Click the Registration button and fill out a simple form, after which a welcome email will be sent to your e-mail address. Using the registration data, log in to your Members Area, where you can carry out all activities related to management of your account.</p>
          </div> : ""}

        </li>
        </ul>
    </div>
  )
}
