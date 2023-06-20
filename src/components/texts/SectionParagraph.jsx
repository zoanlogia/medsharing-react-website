import styles from "../../constants/style";

const SectionParagraph = ({children, bold, content}) => {
  return (
    <p className={`${styles.paragraph1} my-2`}>
      <b className={`${styles.paragraphMd} text-gradient`} > {bold} </b>
      <br />
      {children}
      {content}
    </p>
  );
};

export default SectionParagraph;
