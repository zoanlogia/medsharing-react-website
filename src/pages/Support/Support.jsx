import { useTheme } from "../../hooks/useTheme.jsx";
import styles, { layout } from "../../constants/style.js";
import { support } from "../../assets/index";

import {
  Navbar,
  Footer,
  SectionTitle,
  InputGroup,
  Button,
  Textarea,
} from "../../components/index";
import { useFormik } from "formik";
import * as Yup from "yup";

const Support = () => {
  const { theme } = useTheme();

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
    },
  });

  return (
    <div className={`${theme} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={layout.sectionInfo}>
            <SectionTitle size={"100%"}>Support</SectionTitle>
          </div>
          <div className="flex gap-10 justify-center  sm:my-5 sm:px-16 px-6 sm:py-12 py-4 w-full bg-black-gradient-2 rounded-[20px] box-shadow">
            <form
              id="support"
              className={`flex align-baseline flex-col w-full`}
              onSubmit={formik.handleSubmit}
            >
              <InputGroup
                className={"flex flex-col w-[100%] form-group mt-6"}
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
                <span className="text-red-400">{formik.errors.name}</span>
              ) : (
                ""
              )}

              <InputGroup
                className={"flex flex-col w-[100%] form-group mt-6"}
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
                <span className="text-red-400">{formik.errors.mail}</span>
              ) : (
                ""
              )}

              <InputGroup
                className={"flex flex-col w-[100%] form-group mt-6"}
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
                <span className="text-red-400">{formik.errors.phone}</span>
              ) : (
                ""
              )}

              <InputGroup
                className={"flex flex-col w-[100%] form-group mt-6"}
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
                <span className="text-red-400">{formik.errors.society}</span>
              ) : (
                ""
              )}

              <InputGroup
                className={"flex flex-col w-[100%] form-group mt-6"}
                label={"Nom de l'etude"}
                htmlFor={"study"}
                classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                classInput={
                  "bg-primary border-b-4 border-white-500 h-[25px] placeholder-gray-500"
                }
                placeholder={"Inscrivez le nom de l'étude"}
                type={"text"}
                needed={true}
                value={formik.values.study}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.study && formik.errors.study ? (
                <span className="text-red-400">{formik.errors.study}</span>
              ) : (
                ""
              )}

              <Textarea
                className={"flex flex-col w-[100%] form-group mt-6"}
                label={"Message"}
                htmlFor={"message"}
                classLabel={`font-poppins font-normal text-[20px] leading-[30.8px]`}
                classInput={
                  "bg-primary border rounded-xl border-white-500 h-[100px] placeholder-gray-500 p-1"
                }
                placeholder={"Tapez ici votre message"}
                needed={true}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message ? (
                <span className="text-red-400">{formik.errors.message}</span>
              ) : (
                ""
              )}

              <Button customClass={`mt-6`} text="Valider" type={"submit"} />
            </form>
            <div className="flex items-center">
              <img className="w-[100%] object-contain rounded-2xl" src={support} alt="support" />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Support;
