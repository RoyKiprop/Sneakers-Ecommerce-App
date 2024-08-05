import { MdWifiCalling3 } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";


function Contacts() {
  return (
    <div className="flex gap-8">
        <div className="flex gap-1 items-center">
            <MdWifiCalling3 className="text-orangeCustom"/>
            <p>Call: (123) 123-4567</p>
        </div>
        <div className="flex gap-1 items-center">
            <HiOutlineMail className="text-orangeCustom"/>
            <p>Email: example@gmail.com</p>
        </div>
      
    </div>
  )
}

export default Contacts
