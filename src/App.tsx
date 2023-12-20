import "./App.css";
import ClipboardWithTooltip from "./components/clipboard-with-tooltip";

function App() {
  const textToCopy = "nathan@nathankrasney.com";

  return (
    <>
      <p>Click on the button will copy {textToCopy} to the clipboard</p>
      <p>You can use later CTRL V to retrive it</p>
      <ClipboardWithTooltip valueCopiedToClipboard={textToCopy} />
    </>
  );
}

export default App;
