function Footer() {
    return (
      <footer className="bg-[#121926] py-20">
        <div className="container mx-auto px-6 md:px-28 flex flex-wrap justify-between">
          
          {/* Company Info */}
          <div className="w-full md:w-[30%] mb-8 md:mb-0">
            <img src="/build/Images/footer-Image.svg" alt="Company Logo" />
            <p className="mt-5 text-[#FFFFFFCC] text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam mi, imperdiet vitae tortor non.
            </p>
            <div className="mt-8 flex gap-5">
              {['facebook', 'instagram', 'x', 'linkedin'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="flex items-center justify-center bg-[#2a303c] rounded-full h-12 w-12 hover:bg-[#f5a322]"
                  aria-label={icon}
                >
                  <img src={`/build/Images/${icon}_icon.svg`} alt={`${icon} icon`} />
                </a>
              ))}
            </div>
          </div>
  
          {/* Useful Links */}
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <h4 className="text-[24px] text-white font-bold">Useful Links</h4>
            <div className="mt-5 flex flex-col gap-5">
              {['Home', 'Services', 'About Us', 'Testimonial'].map((link) => (
                <a key={link} href="#" className="text-[#FFFFFFCC] text-[18px] hover:text-[#f5a322]">
                  {link}
                </a>
              ))}
            </div>
          </div>
  
          {/* Contact Us */}
          <div className="w-full md:w-auto">
            <h4 className="text-[24px] text-white font-bold">Contact Us</h4>
            <div className="mt-5 flex flex-col gap-5">
              <div className="flex items-start gap-2">
                <img src="/build/Images/location_icon.svg" alt="Location" />
                <p className="text-[#FFFFFFCC] text-[18px]">OSWALD, New South Wales(NSW), 2321</p>
              </div>
              <div className="flex items-start gap-2">
                <img src="/build/Images/contact_icon.svg" alt="Phone" />
                <p className="text-[#FFFFFFCC] text-[18px]">(02) 4955 3474</p>
              </div>
              <div className="flex items-start gap-2">
                <img src="/build/Images/message_icon.svg" alt="Email" />
                <p className="text-[#FFFFFFCC] text-[18px]">info@thera.com</p>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    );
  }
  
  export default Footer;
  