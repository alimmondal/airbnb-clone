"use client";
import useFooterModal from "@/app/hooks/useFooterModal";
const FooterContent = () => {
  const footerModal = useFooterModal();
  return (
    <div
      onClick={footerModal.onOpen}
      className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-3
            xl:grid-cols-3
            2xl:grid-cols-3
            gap-40
            p-10
          "
    >
      <div className="">
        <h1 className="font-bold mb-1">Support</h1>
        <ul className="">
          <li>
            <a href="">Help Center</a>
          </li>
          <li>
            <a href="">Get Help with a safety issue</a>
          </li>
          <li>
            <a href="">Air Cover</a>
          </li>
          <li>
            <a href="">Anti-discrimination</a>
          </li>
          <li>
            <a href="">Disability support</a>
          </li>
          <li>
            <a href="">Cancellation options</a>
          </li>
          <li>
            <a href="">Report neighborhood concern</a>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-bold mb-1">Hosting</h1>
        <ul>
          <li>
            <a href="">Airbnb your home</a>
          </li>
          <li>
            <a href="">AirCover for Hosts</a>
          </li>
          <li>
            <a href="">Hosting resources</a>
          </li>
          <li>
            <a href="">Community forum</a>
          </li>
          <li>
            <a href="">Hosting responsibly</a>
          </li>
          <li>
            <a href="">Airbnb-friendly apartments</a>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-bold mb-1">Airbnb</h1>
        <ul>
          <li>
            <a href="">News-room</a>
          </li>
          <li>
            <a href="">Get Help with a safety issue</a>
          </li>
          <li>
            <a href="">New features</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Investors</a>
          </li>
          <li>
            <a href="">Gift cards</a>
          </li>
          <li>
            <a href="">Airbnb.org emergency stays</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterContent;
