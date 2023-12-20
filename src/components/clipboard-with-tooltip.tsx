import { FC, useState } from "react";
import styles from "../styles/clipboard-with-tooltip.module.css";

interface IProps{
    valueCopiedToClipboard : string
}

const ClipboardWithTooltip: FC<IProps> = ({valueCopiedToClipboard}) => {
  const [tooltipText, setTooltipText] = useState<string>("Copy to clipboard");

  const handleCopyClick = () => {
    navigator.clipboard.writeText(valueCopiedToClipboard).then(() => {
      setTooltipText(`Copied: ${valueCopiedToClipboard}`);
    });
  };

  const handleMouseOut = () => {
    setTooltipText("Copy to clipboard");
  };

  return (
    <div className={styles.tooltip}>
      <button onClick={handleCopyClick} onMouseOut={handleMouseOut}>
        <span className={styles.tooltiptext}>
          {tooltipText}
        </span>
        Copy text
      </button>
    </div>
  );
};

export default ClipboardWithTooltip;
