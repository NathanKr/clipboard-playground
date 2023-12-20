const ClipboardPlayground = () => {
    function clickHandler() {
        const textToCopy = "nathan@nathankrasney.com";
    
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            console.log("Text successfully copied to clipboard");
          })
          .catch((err) => {
            console.error("Unable to copy text to clipboard", err);
          });
      }
    

  return (
    <div>
      <p>
        Click on the button will copy nathan@nathankrasney.com to the clipboard
      </p>
      <p>You can use later CTRL V to retrive it</p>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default ClipboardPlayground;
