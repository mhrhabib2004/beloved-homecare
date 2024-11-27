import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-gray-100">
      <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div className="lg:py-5 p-5  ">
        <a href="/" className="flex  items-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5ead91ea510c452399fa85b6/1594201662743-EIXP8P5VYFIGIGOQZB3J/BHLTD+LOGO+WATERMARK.png?format=1500w"
            className="lg:h-20 h-16  mr-3 sm:h-9"
            alt="Landwind Logo"
          /></a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-indigo-600 font-bold">Resources</div>
          <a className="my-3 block" href="/#">
            Documentation <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Tutorials <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Support <span className="text-teal-600 text-xs p-1">New</span>
          </a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-indigo-600 font-bold">Support</div>
          <a className="my-3 block" href="/#">
            Help Center <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Conditions <span className="text-teal-600 text-xs p-1"></span>
          </a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
          <a className="my-3 block" href="/#">
            XXX XXXX, Floor 4 San Francisco, CA <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            contact@company.com <span className="text-teal-600 text-xs p-1"></span>
          </a>
        </div>
      </div>

      <div className="bg-gray-100 pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/#" className="w-6 mx-1 text-gray-500 hover:text-indigo-600">
              <FaTwitter size={20} />
            </a>
            <a href="/#" className="w-6 mx-1 text-gray-500 hover:text-indigo-600">
              <FaFacebookF size={20} />
            </a>
            <a href="/#" className="w-6 mx-1 text-gray-500 hover:text-indigo-600">
              <FaYoutube size={20} />
            </a>
            <a href="/#" className="w-6 mx-1 text-gray-500 hover:text-indigo-600">
              <FaInstagram size={20} />
            </a>
            <a href="/#" className="w-6 mx-1 text-gray-500 hover:text-indigo-600">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;