import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";

const SuccessModal = ({ closeModal, title, content ,children }) => {

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modal = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: { opacity: 1, scale: 1 },
  };

  const [isModalOpen, setIsModalOpen] = useState(true);

  const modalEl = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (!modalEl.current) {
        return;
      }
      // if click was not inside of the element. "!" means not
      // in other words, if click is outside the modal element
      if (!modalEl.current.contains(event.target)) {
        setIsModalOpen(false);
        closeModal();
      }
    };
    // the key is using the `true` option
    // `true` will enable the `capture` phase of event handling by browser
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleModalClose = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
    closeModal();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <m.div
          key="success-modal"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => handleModalClose(e)}
          className="z-50 fixed top-[50%] right-[50%] bg-blue-gradient rounded-2xl"
          style={{
            transform: "translate(50%, -50%)",
          }}
          ref={modalEl}
        >
          <m.div className="flex-col flex items-center justify-center h-auto w-[100%]" variants={modal}>
            <h1 className="text-3xl p-4 text-primary">
              {title}
            </h1>
            <p className="p-5 text-[20px] text-primary">
              {content}
            </p>
            {children}
            {/* <button
              className="text-primary text-lg font-medium p-4"
              onClick={(e) => handleModalClose(e)}
            >
              ❌
            </button> */}
          </m.div>
       
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
