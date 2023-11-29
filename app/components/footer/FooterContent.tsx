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
            gap-4
            sm:gap-20
            md:gap-4
            lg:gap-40
            xl:gap-40
            2xl:gap-40
            sm:p-1
            md:p-9
            lg:p-10
          "
    >
      <div className="">
        <h1 className="font-bold mb-1">Support</h1>
        <ul className="lg:text-base md:tex-base sm:text:sm text-xs">
          <li className="hover:underline">
            <a href="https://itroomab.com">Help Center</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Get Help with a safety issue</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Air Cover</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Anti-discrimination</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Disability support</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Cancellation options</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Report neighborhood concern</a>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-bold mb-1">Hosting</h1>
        <ul className="lg:text-base md:tex-base sm:text:sm text-xs">
          <li className="hover:underline">
            <a href="https://itroomab.com">Airbnb your home</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">AirCover for Hosts</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Hosting resources</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Community forum</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Hosting responsibly</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Airbnb-friendly apartments</a>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-bold mb-1">Airbnb</h1>
        <ul className="lg:text-base md:tex-base sm:text:sm text-xs">
          <li className="hover:underline">
            <a href="https://itroomab.com">News-room</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Get Help with a safety issue</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">New features</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Careers</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Investors</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Gift cards</a>
          </li>
          <li className="hover:underline">
            <a href="https://itroomab.com">Airbnb.org emergency stays</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterContent;
