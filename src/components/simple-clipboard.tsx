import { FC, useState, useEffect } from "react";
import styles from "../styles/simple-clipboard.module.css";

interface IProps {
  valueCopiedToClipboard: string;
}

const SimpleClipboard: FC<IProps> = ({ valueCopiedToClipboard }) => {
  const [status, setStatus] = useState("");

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(valueCopiedToClipboard)
      .then(() => {
        setStatus(`==== > Copied to clipboard: ${valueCopiedToClipboard}`);
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  useEffect(() => {
    // Clear status after 5 seconds
    const timeoutId = setTimeout(() => {
      setStatus("");
    }, 5000);

    // Clear the timeout when the component unmounts or when a new copy is triggered
    return () => clearTimeout(timeoutId);
  }, [status]);

  const elemStatus = status && <span className={styles.status}>{status}</span>;

  return (
    <div>
      <button onClick={handleCopyClick}>Click</button>
      {elemStatus}
    </div>
  );
};

export default SimpleClipboard;
