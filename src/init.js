import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} ✈`);

// callback : server 시작 시 작동하는 함수
app.listen(PORT, handleListening);
