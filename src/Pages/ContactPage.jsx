import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <div className="mx-28 flex flex-col lg:flex-row items-start justify-between bg-gray-50 p-10">
      <div className="lg:w-1/2 pr-0 lg:pr-10">
        <h1 className="text-4xl font-bold text-black mb-4">
          How can I help you?
        </h1>
        <p className="text-lg text-darkGrayishBlue mb-8">
          Get in touch with us through our contact form for any inquiries or
          questions regarding our products.
        </p>
        <ContactInfo />
      </div>
      <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
