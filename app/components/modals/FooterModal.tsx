"use client";

import useFooterModal from "@/app/hooks/useFooterModal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FooterContent from "../footer/FooterContent";
import FModal from "./FModal";

const FooterModal = () => {
  const router = useRouter();
  const footerModal = useFooterModal();
  const [isLoading, setIsLoading] = useState(false);

  const bodyContent = (
    <div className="flex ">
      <div className="">
        <FooterContent />
      </div>
    </div>
  );

  return (
    <FModal
      disabled={isLoading}
      isOpen={footerModal.isOpen}
      // title="Login"
      onClose={footerModal.onClose}
      body={bodyContent}
      // footer={footerContent}
    />
  );
};

export default FooterModal;
