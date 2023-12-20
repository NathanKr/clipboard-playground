import "./App.css";
import GenericClipboard from "./components/generic-clipboard";

function App() {
  const textToCopy = "nathan@nathankrasney.com";

  return (
    <>
      <p>Click on the button will copy {textToCopy} to the clipboard</p>
      <p>You can use later CTRL V to retrive it</p>
      <GenericClipboard valueCopiedToClipboard={textToCopy}>
        <button>Click</button>
      </GenericClipboard>
    </>
  );
}

export default App;
