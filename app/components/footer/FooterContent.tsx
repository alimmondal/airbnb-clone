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
          "
    >
      <div className="">
        <h1 className="font-bold mb-1">Support</h1>
        <ul className="lg:text-base md:tex-base sm:text:sm text-xs">
          <li className="hover:underline">
            <a href="#">Help Center</a>
          </li>
          <li className="hover:underline">
            <a href="#">Get Help with a safety issue</a>
          </li>
          <li className="hover:underline">
            <a href="#">Air Cover</a>
          </li>
          <li className="hover:underline">
            <a href="#">Anti-discrimination</a>
          </li>
          <li className="hover:underline">
            <a href="#">Disability support</a>
          </li>
          <li className="hover:underline">
            <a href="#">Cancellation options</a>
          </li>
          <li className="hover:underline">
            <a href="#">Report neighborhood concern</a>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-bold mb-1">Hosting</h1>
        <ul className="lg:text-base md:tex-base sm:text:sm text-xs">
          <li className="hover:underline">
            <a href="#">Airbnb your home</a>
          </li>
          <li className="hover:underline">
            <a href="#">AirCover for Hosts</a>
          </li>
          <li className="hover:underline">
            <a href="#">Hosting resources</a>
          </li>
          <li className="hover:underline">
            <a href="#">Community forum</a>
          </li>
          <li className="hover:underline">
            <a href="#">Hosting responsibly</a>
          </li>
          <li className="hover:underline">
            <a href="#">Airbnb-friendly apartments</a>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-bold mb-1">Airbnb</h1>
        <ul className="lg:text-base md:tex-base sm:text:sm text-xs">
          <li className="hover:underline">
            <a href="#">News-room</a>
          </li>
          <li className="hover:underline">
            <a href="#">Get Help with a safety issue</a>
          </li>
          <li className="hover:underline">
            <a href="#">New features</a>
          </li>
          <li className="hover:underline">
            <a href="#">Careers</a>
          </li>
          <li className="hover:underline">
            <a href="#">Investors</a>
          </li>
          <li className="hover:underline">
            <a href="#">Gift cards</a>
          </li>
          <li className="hover:underline">
            <a href="#">Airbnb.org emergency stays</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterContent;
