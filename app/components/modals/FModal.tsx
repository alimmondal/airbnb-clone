/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useHover } from "@/app/hooks/useHover";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit?: () => void | undefined;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const FModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const { isHovered, bind } = useHover();
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled || !onSubmit) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed
          bottom-0
          right-0
          w-full 
          z-50
          outline-none 
          focus:outline-none

        "
      >
        <div
          className="
          relative 
          w-full
          mx-auto 
          h-full 
          lg:h-1/5
          xl:h-1/5
          md:h-1/6
          overflow-hidden
               
          "
        >
          {/*content*/}
          <div
            className={`
            border-t-[1px]
            rounded-t
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-t-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
            >
              {/*header*/}
              <div
                className="
                flex 
                items-center 
                p-4
                rounded-t
                justify-center
                relative
                "
              >
                <button
                  className={`
                    p-4
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-2
                     ${isHovered ? "rotate-90" : ""}
                  `}
                  {...bind}
                  onClick={handleClose}
                >
                  <IoMdClose size={24} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>

              {/*body*/}
              <div className="relative p-6 flex-auto">{body}</div>

              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                      outline
                    />
                  )}
                  {actionLabel && (
                    <Button
                      disabled={disabled}
                      label={actionLabel}
                      onClick={handleSubmit}
                    />
                  )}
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FModal;
