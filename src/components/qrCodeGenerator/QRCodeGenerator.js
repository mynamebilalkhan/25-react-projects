import "./QRCodeGenerator.css";
import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQRCode = () => {
    setQrCode(input);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1>QR Code Generator</h1>
        <div className="qr-code-input-box">
          <input
            onChange={(e) => setInput(e.target.value)}
            disabled={qrCode && qrCode.trim() !== "" ? true : false}
            type=""
            name="qr-code"
            placeholder="Enter your value here..."
          />
          <button onClick={handleGenerateQRCode}>Generate</button>
        </div>
        <div className="qr-code-box">
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
