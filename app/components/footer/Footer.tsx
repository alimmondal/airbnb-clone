/* eslint-disable react/no-unescaped-entities */
"use client";
import { AiOutlineDown } from "react-icons/ai";

import useFooterModal from "@/app/hooks/useFooterModal";
import Container from "../Container";

const FooterComponent = () => {
  const footerModal = useFooterModal();
  return (
    <div className="fixed z-10 bottom-0 w-full bg-slate-50 shadow-sm">
      <div className="py-3 border-t-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <ul className="flex gap-3 list-disc">
              <li>
                <a href="">&copy; {new Date().getFullYear()} </a>
              </li>

              <li className="hover:underline mx-3">
                <a href="https://itroomab.com" target="_blank">
                  Created by alim
                </a>
              </li>
              <li className="hover:underline">
                <a href="/privacy">Privacy</a>
              </li>
            </ul>
            <div
              onClick={footerModal.onOpen}
              className="flex flex-row items-center gap-1 hover:underline cursor-pointer"
            >
              Support & resource
              <span>
                <AiOutlineDown />
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FooterComponent;
