import "./App.css";
import SimpleClipboard from "./components/simple-clipboard";

function App() {
  const textToCopy = "nathan@nathankrasney.com";

  return (
    <>
      <p>Click on the button will copy {textToCopy} to the clipboard</p>
      <p>You can use later CTRL V to retrive it</p>
      <SimpleClipboard valueCopiedToClipboard={textToCopy} />
    </>
  );
}

export default App;
