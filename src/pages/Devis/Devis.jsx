import { useTheme } from "../../hooks/useTheme.jsx";
import styles, { layout } from "../../constants/style.js";
import { Rainfall, Select } from "../../components/index";

import {
  Navbar,
  Footer,
  SectionTitle,
  InputGroup,
  Button,
  Textarea,
  SuccessModal,
} from "../../components/index";
import { AnimatePresence, motion as m } from "framer-motion";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";

const Devis = () => {
  const { theme } = useTheme();

  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      mail: "",
      phone: "",
      society: "",
      country: "",
      status: "",
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

      country: Yup.string()
        .max(20, "le nom du pays ne doit pas éxcéder 20 caractères.")
        .required("le nom du pays est obligatoire"),

      // status est un select option
      status: Yup.string()
      .oneOf(["1", "2", "3", "4", "5"], "le statut est obligatoire")
      .required("le statut est obligatoire"),

      message: Yup.string()
        .max(500, "le message ne doit pas éxcéder 500 caractères.")
        .required("le message est obligatoire"),
    }),

    onSubmit: (values) => {
      console.log(values);
      setShowModal(true);
    },
  });

  const status = [
    { value: "0", label: "" },
    { value: "1", label: "CRO" },
    { value: "2", label: "Laboratoire" },
    { value: "3", label: "Groupe de recherche" },
    { value: "4", label: "Institut public" },
    { value: "5", label: "Autre" },
  ];

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
            <SuccessModal
              title="Votre demande de devis a bien été envoyé ✨"
              content={"Nous vous recontacterons au plus vite. 🎉"}
              closeModal={() => setShowModal(false)}
            />
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
              <SectionTitle size={"100% 40%"}>Demande de devis</SectionTitle>

              <div className={`${styles.paragraph} mt-6`}>
                Pour faire une demande de devis, obtenir des détails sur nos
                prestations
                <div className="flex items-center mt-5">
                  <span className="me-2">↳ </span>
                  <Link to={"tel:0148753914"}>
                    <p className="">
                      <span className="font-poppins font-semibold text-[20px] leading-[30.8px] text-gradient">
                        Contactez notre support.{" "}
                      </span>
                      <span className="ms-2 py-[6px] px-4 card-white rounded-[10px] mb-2 hover:font-bold">
                        {" "}
                        ☎️ 01 48 75 39 14{" "}
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex gap-10 xxs:flex-wrap md:flex-nowrap sm:my-5 sm:px-16 px-6 sm:py-12 py-4 w-full bg-black-gradient-2 rounded-[20px] box-shadow">
              <div className="mt-6 h-[auto] w-full flex flex-col justify-between">
                <div className={`${styles.paragraph}`}>
                  <h2 className="text-[22px] leading-[34.8px]">
                    🔄
                    <span className="font-poppins font-semibold text-[20px] leading-[30.8px] text-gradient">
                      {" "}
                      Pour une randomisation
                    </span>
                  </h2>
                  <ul>
                    <li>
                      → Randomisation par internet et/ou téléphone, sur iPad
                      et/ou iPhone
                    </li>
                    <li>→ Randomisation en ouvert, simple ou double aveugle</li>
                    <li>→ Durée de la randomisation</li>
                    <li>→ Nombre de patients</li>
                  </ul>
                </div>
                <div className={`${styles.paragraph}`}>
                  <h2 className="text-[22px] leading-[34.8px]">
                    📈
                    <span className="font-poppins font-semibold text-[20px] leading-[30.8px] text-gradient">
                      Pour un e-CRF
                    </span>
                  </h2>
                  <ul>
                    <li>
                      → Type d&apos;étude (Si randomisée, ajouter les questions
                      ci-dessus)
                    </li>
                    <li>
                      → Nombre d&apos;items du CRF Papier (à + ou - 50 items)
                    </li>
                    <li>→ Durée des inclusions</li>
                    <li>→ Durée du suivi</li>
                    <li>→ Nombre de patients</li>
                    <li>→ Nombre de centres</li>
                  </ul>
                </div>
                <div className={`${styles.paragraph}`}>
                  <h2 className="text-[22px] leading-[34.8px]">
                    <span>Nous vous contacterons</span>
                    <span className="font-poppins font-semibold text-[20px] leading-[30.8px] text-gradient">
                      {" "}
                      dès réception de votre demande.
                    </span>
                  </h2>
                </div>
                {/* <div className="white__gradient right-0 w-[40%] h-[40%] absolute xxs:hidden md:block"></div> */}
              </div>
              <form
                id="support"
                className={`flex align-baseline flex-col w-full`}
                onSubmit={formik.handleSubmit}
              >
                <InputGroup
                  className={"flex flex-col w-full form-group mt-6"}
                  label={"Société"}
                  htmlFor={"society"}
                  classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                  classInput={
                    "bg-primary border-b-4 border-white-500 h-[25px] placeholder-gray-500"
                  }
                  placeholder={"Inscrivez votre société"}
                  type={"text"}
                  needed={true}
                  value={formik.values.society}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.society && formik.errors.society ? (
                  <small className="text-red-400">
                    {formik.errors.society}
                  </small>
                ) : (
                  ""
                )}

                <InputGroup
                  className={"flex flex-col w-full form-group mt-6"}
                  label={"Pays"}
                  htmlFor={"country"}
                  classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                  classInput={
                    "bg-primary border-b-4 border-white-500 h-[25px] placeholder-gray-500"
                  }
                  placeholder={"Inscrivez votre pays"}
                  type={"text"}
                  needed={true}
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.country && formik.errors.country ? (
                  <small className="text-red-400">
                    {formik.errors.country}
                  </small>
                ) : (
                  ""
                )}

                <InputGroup
                  className={"flex flex-col w-full form-group mt-6"}
                  label={"Nom"}
                  htmlFor="name"
                  classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                  classInput={
                    "bg-primary border-b-4 border-white-500 h-[25px] placeholder-gray-500"
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
                  className={"flex flex-col w-full form-group mt-6"}
                  label={"Mail"}
                  htmlFor={"mail"}
                  classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                  classInput={
                    "bg-primary border-b-4 border-white-500 h-[25px] placeholder-gray-500"
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
                  className={"flex flex-col w-full form-group mt-6"}
                  label={"Téléphone"}
                  htmlFor={"phone"}
                  classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                  classInput={
                    "bg-primary border-b-4 border-white-500 h-[25px] placeholder-gray-500"
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

                <Select
                  className={"flex flex-col w-full form-group mt-6"}
                  label={"Statut"}
                  htmlFor={"status"}
                  classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                  classInput={
                    "bg-primary border-b-4 border-white-500 h-[25px] placeholder-gray-500"
                  }
                  options={status}
                  placeholder={"Indiquez votre statut"}
                  needed={true}
                  value={formik.values.status}
                  status={status}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.status && formik.errors.status ? (
                  <small className="text-red-400">
                    {formik.errors.status}
                  </small>
                ) : (
                  ""
                )}

                <Textarea
                  className={"flex flex-col w-full form-group mt-6"}
                  label={"Message"}
                  htmlFor={"message"}
                  classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                  classInput={
                    "border rounded-xl border-white-500 h-[100px] placeholder-gray-500 p-1"
                  }
                  placeholder={"Tapez ici votre message"}
                  needed={true}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message ? (
                  <small className="text-red-400">
                    {formik.errors.message}
                  </small>
                ) : (
                  ""
                )}

                <Button
                  customClass={`mt-6`}
                  text="Demander un devis"
                  icon={"🧾"}
                  type={"submit"}
                />
              </form>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Devis;
