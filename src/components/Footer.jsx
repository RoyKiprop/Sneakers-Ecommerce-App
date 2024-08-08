
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import CopyRight from './CopyRight';

const Footer = () => {
  return (
    <footer className="bg-black p-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
        <FooterInfo />
        <FooterLinks title="Useful Links" links={['Home', 'Shop', 'About Us', 'Contact Us']} />
        <FooterContact />
      </div>
     
      <CopyRight/>
     
    </footer>
  );
};

export default Footer;
