import { FC } from "react";

interface IProps {
  valueCopiedToClipboard: string;
}

const ClipboardWithTooltip: FC<IProps> = ({ valueCopiedToClipboard }) => {

  const handleCopyClick = () => {
    navigator.clipboard.writeText(valueCopiedToClipboard).then(() => {
      console.log(`======> Copied: ${valueCopiedToClipboard}`);
    });
  };

  
  return (
    <div>
      <button title="copy to clipboard" onClick={handleCopyClick}>
        Click
      </button>
    </div>
  );
};

export default ClipboardWithTooltip;
