
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function ContactInfo ()  {
  return (
    <div className="space-y-6">
      <div className="flex items-start">
        <FaPhoneAlt className="text-orangeCustom text-2xl mr-4" />
        <div>
          <p className="font-bold text-black">Contact no:</p>
          <p className="text-darkGrayishBlue">(123) 123-4567</p>
        </div>
      </div>
      <div className="flex items-start">
        <FaEnvelope className="text-orangeCustom text-2xl mr-4" />
        <div>
          <p className="font-bold text-black">Email:</p>
          <p className="text-darkGrayishBlue">example@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo;
