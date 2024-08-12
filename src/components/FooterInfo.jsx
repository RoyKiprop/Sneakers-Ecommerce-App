
import { FaFacebookF, FaInstagram} from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

function FooterInfo () {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-4">Sneakers Co </h2>
      <p className="text-grayishBlue mb-6">
        At Sneakers Co, we curate diverse, quality products ensuring a stress-free shopping experience. Our dedicated team provides prompt support. Join our community.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-lightGrayishBlue hover:text-orangeCustom">
          <FaFacebookF size={24} />
        </a>
        <a href="#" className="text-lightGrayishBlue hover:text-orangeCustom">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="text-lightGrayishBlue hover:text-orangeCustom">
          <BsTwitterX size={24} />
        </a>
      </div>
    </div>
  )
}

export default FooterInfo;
