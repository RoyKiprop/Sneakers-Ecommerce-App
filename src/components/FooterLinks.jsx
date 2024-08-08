/* eslint-disable react/prop-types */

function FooterLinks  ({ title, links })  {
  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-grayishBlue hover:text-orangeCustom">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinks;
