import Facebook from "../../img/Facebook.svg";
import Instagram from "../../img/Instagram.svg";
import Youtube from "../../img/Youtube.svg";
import Twitter from "../../img/Twitter.svg";

const Footer = () => {
  const GetCurrentYear = () => {
    const d = new Date();
    const currentYear = d.getFullYear();
    return <>{currentYear}</>;
  }

  return (
    <div className="flex flex-col gap-3 md:gap-9 items-center text-sm md:text-lg mt-4 md:mt-8 py-6 md:py-16">
      <div className="flex gap-12 justify-center items-center">
        <span>
          <img src={Facebook} alt="Facebook icon" className="w-4 md:w-6 h-7" />
        </span>
        <span>
          <img src={Instagram} alt="Instagram icon" className="w-4 md:w-6 h-7" />
        </span>
        <span>
          <img src={Twitter} alt="Twitter icon" className="w-4 md:w-6 h-7" />
        </span>
        <span>
          <img src={Youtube} alt="Youtube icon" className="w-4 md:w-6 h-7" />
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-12 items-center text-gray-900 font-bold">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className="text-gray-500 font-bold">&#169; <GetCurrentYear /> MovieBox by Etanami Olatunji</p>
    </div>
  );
};

export default Footer;
