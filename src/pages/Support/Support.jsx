import { useTheme } from "@/hooks/useTheme.jsx";
import styles, { layout } from "@/constants/style.js";
import supportNoBg from "@/assets/images/supportNoBg.png";

import { AnimatePresence, motion as m } from "framer-motion";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Rainfall from "@/components/animations/Rainfall.jsx";
import SuccessModal from "@/components/modals/SuccessModal.jsx";
import Navbar from "@/components/navbar/Navbar.jsx";
import SectionTitle from "@/components/texts/SectionTitle.jsx";
import InputGroup from "@/components/inputs/InputGroup.jsx";
import Textarea from "@/components/inputs/Textarea.jsx";
import Button from "@/components/buttons/Button.jsx";
import Footer from "@/components/footer/Footer.jsx";

const Support = () => {
  const { theme } = useTheme();

  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      mail: "",
      phone: "",
      society: "",
      study: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "le nom ne doit pas éxcéder 20 caractères.")
        .required("Le nom est obligatoire"),

      mail: Yup.string()
        .email("l'email est invalide")
        .required("l'email est obligatoire"),

      phone: Yup.string()
        .matches(/^[0-9]+$/, "le numéro de téléphone est invalide")

        .required("le numéro de téléphone est obligatoire"),

      society: Yup.string()
        .max(20, "le nom de la société ne doit pas éxcéder 20 caractères.")
        .required("le nom de la société est obligatoire"),

      study: Yup.string()
        .max(50, "le nom de l'étude ne doit pas éxcéder 20 caractères.")
        .required("le nom de l'étude est obligatoire"),

      message: Yup.string()
        .max(500, "le message ne doit pas éxcéder 500 caractères.")
        .required("le message est obligatoire"),
    }),

    onSubmit: (values) => {
      console.log(values);
      setShowModal(true);
    },
  });

  return (
    <AnimatePresence>
      <div className={`${theme} w-full overflow-hidden static`}>
        {showModal && (
            <m.div
              className="backdrop"
              initial={{ opacity: 0, y: 20 }} // Animation initiale : opacité à 0 et décalage de 20 pixels vers le bas
              animate={{ opacity: 1, y: 0 }} // Animation d'entrée : opacité à 1 et décalage de 0 pixels
              exit={{ opacity: 0, y: -20 }} // Animation de sortie : opacité à 0 et décalage de 20 pixels vers le haut>
            >
              <SuccessModal title="Votre message a bien été envoyé ✨" content={"Nous reviendrons vers vous au plus vite. 🎉"}  closeModal={() => setShowModal(false)} />
              <Rainfall />
            </m.div>
          )}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={` ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div className={`${layout.sectionInfo} xxs:my-5`}>
              <SectionTitle size={"100%"}>Support</SectionTitle>
              <p className={`${styles.paragraph} mt-6`}>
                Pour toute demande sur l&apos;utilisation de nos produits,
                <br /> <br /> ↳ un problème rencontré, <br /> ↳ une question
                technique, <br /> <br />
                <span className="text-[24px] leading-[30.8px]">
                  Contactez notre support. <span className="ms-2"> ☎️ </span>
                </span>
              </p>
            </div>
            <div className="flex gap-10 xxs:flex-wrap md:flex-nowrap xxs:items-center sm:my-5 sm:px-16 px-6 sm:py-12 py-4 w-full bg-[#d9D9D9] box-shadow rounded-2xl">
              <form
                id="support"
                className={`flex align-baseline flex-col w-full`}
                onSubmit={formik.handleSubmit}
              >
                <InputGroup
                  className={"flex flex-col w-full form-group mt-6 text-primary"}
                  label={"Nom"}
                  htmlFor="name"
                  classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                  classInput={
                    "bg-primary -b-4 -indigo-500 h-[25px] placeholder-gray-500"
                  }
                  placeholder="Inscrivez votre nom"
                  type="text"
                  needed={true}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <small className="text-red-400">{formik.errors.name}</small>
                ) : (
                  ""
                )}

                <InputGroup
                  className={"flex flex-col w-full form-group mt-6 text-primary"}
                  label={"Mail"}
                  htmlFor={"mail"}
                  classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                  classInput={
                    "bg-primary  -indigo-500 h-[25px] placeholder-gray-500"
                  }
                  placeholder={"Inscrivez votre mail"}
                  type={"email"}
                  needed={true}
                  value={formik.values.mail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mail && formik.errors.mail ? (
                  <small className="text-red-400">{formik.errors.mail}</small>
                ) : (
                  ""
                )}

                <InputGroup
                  className={"flex flex-col w-full form-group mt-6 text-primary"}
                  label={"Téléphone"}
                  htmlFor={"phone"}
                  classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                  classInput={
                    "bg-primary  h-[25px] placeholder-gray-500"
                  }
                  placeholder={"Inscrivez votre numéro"}
                  type={"tel"}
                  needed={true}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.phone && formik.errors.phone ? (
                  <small className="text-red-400">{formik.errors.phone}</small>
                ) : (
                  ""
                )}

                <InputGroup
                  className={"flex flex-col w-full form-group mt-6 text-primary"}
                  label={"Société"}
                  htmlFor={"society"}
                  classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                  classInput={
                    "bg-primary  h-[25px] placeholder-gray-500"
                  }
                  placeholder={"Inscrivez votre société"}
                  type={"text"}
                  needed={true}
                  value={formik.values.society}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.society && formik.errors.society ? (
                  <small className="text-red-400">{formik.errors.society}</small>
                ) : (
                  ""
                )}

                <InputGroup
                  className={"flex flex-col w-full form-group mt-6 text-primary"}
                  label={"Nom de l'etude"}
                  htmlFor={"study"}
                  classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                  classInput={
                    "bg-primary  h-[25px] placeholder-gray-500"
                  }
                  placeholder={"Inscrivez le nom de l'étude"}
                  type={"text"}
                  needed={true}
                  value={formik.values.study}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.study && formik.errors.study ? (
                  <small className="text-red-400">{formik.errors.study}</small>
                ) : (
                  ""
                )}

                <Textarea
                  className={"flex flex-col w-full form-group mt-6 text-primary border-1"}
                  label={"Message"}
                  htmlFor={"message"}
                  classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                  classInput={
                    "  h-[100px] placeholder-gray-500 p-1"
                  }
                  placeholder={"Tapez ici votre message"}
                  needed={true}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message ? (
                  <small className="text-red-400">{formik.errors.message}</small>
                ) : (
                  ""
                )}

                <Button
                  customClass={`mt-6 shadow-xl`}
                  text="Envoyer"
                  icon={"📨"}
                  type={"submit"}
                />
              </form>
              <div className="mt-6 h-full w-full flex items-center justify-center">
                <img
                  className="object-cover lg:w-[500px] lg:h-[500px]"
                  src={supportNoBg}
                  alt="support"
                />
                {/* <div className="white__gradient right-0 w-[40%] h-[40%] absolute xxs:hidden md:block"></div> */}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Support;
