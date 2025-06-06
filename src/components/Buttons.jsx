import styles from "./Buttons.module.css";

const ButtonsAvail = ({ onButtonClick }) => {
  const buttons = [
    "C", "<-","1", "2", "+",
    "3", "4", "-", 
    "5", "6", "*", 
    "7", "8", "/", 
    "=", "9", "0", "."
  ];

  return (
    <div className={styles.buttonCon}>
      {buttons.map((button) => (
        <button
          key={button}
          className={styles.but}
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsAvail;
