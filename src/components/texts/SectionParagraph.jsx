import styles from "../../constants/style.js";

const SectionParagraph = ({children, bold, content}) => {
  return (
    <p className={`${styles.paragraph1}`}>
      <b>{bold}</b>
      {children}
      {content}
    </p>
  );
};

export default SectionParagraph;
