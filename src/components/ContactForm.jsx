
function ContactForm  () {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-darkGrayishBlue">Name</label>
          <input 
            type="text" 
            placeholder="Your name" 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-darkGrayishBlue">Email</label>
          <input 
            type="email" 
            placeholder="Your email" 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400" 
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-darkGrayishBlue">Phone</label>
          <input 
            type="text" 
            placeholder="Your phone" 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-darkGrayishBlue">Subject</label>
          <input 
            type="text" 
            placeholder="Subject" 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400" 
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-darkGrayishBlue">Message</label>
        <textarea 
          placeholder="Your Message" 
          rows="4" 
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400" 
        />
      </div>
      <button 
        type="submit" 
        className=" bg-orangeCustom text-white py-2 px-4 rounded-md shadow-sm hover:bg-orangeCustom focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orangeCustom"
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm;
