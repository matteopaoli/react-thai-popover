import { createRoot } from "react-dom/client";
import ThaiPopover from './src/ThaiPopover';
import './styles.css'; // Ensure you import your CSS file

const root = createRoot(document.getElementById('root'));

root.render(
  <div className="full-page">
    <p className="centered-text">
      In Thai to say "Hello" you say: <ThaiPopover bg="#FFF898">สวัสดีครับ</ThaiPopover>
    </p>
  </div>
);

