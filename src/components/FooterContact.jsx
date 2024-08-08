
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function FooterContact ()  {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Contact Address</h3>
      <div className="flex items-center mb-2">
        <FaPhoneAlt className="text-white mr-2" />
        <p className="text-grayishBlue">(123) 123-4567</p>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="text-white mr-2" />
        <p className="text-grayishBlue">example@gmail.com</p>
      </div>
    </div>
  )
}

export default FooterContact;
