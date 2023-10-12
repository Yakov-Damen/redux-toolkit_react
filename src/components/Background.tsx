import Box from "./Box";
import Header from "./Header";
import TextField from "./TextField";

export default function Background() {
  return (
    <div style={{ width: "800px", height: "800px", background: "gray" }}>
      <Header/>
      <Box/>
      <TextField/>
    </div>
  );
}
