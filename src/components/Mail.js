
import styles from "../styles/Mail.module.scss";

const Mailto = ({ email, subject, body, children }) => {
    return (
        <div className={styles.contact}>
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
      </div>
    );
  };

  export default Mailto;