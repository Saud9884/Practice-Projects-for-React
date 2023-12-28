import { useState } from "react";
import QRCode from "react-qr-code";
import './styles.css';


export default function QrCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode() {
        setQrCode(input);
    }
  return (
    <div>
        <h1>QR Code Generator</h1>
        <div className="input-container">
            <input onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter Your Value Here" />
            <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>Generate</button>
        </div>
        <div>
            <QRCode 
            id="qr-code-value"
            value={qrCode}
            size={250}
            bgColor="#fff"

            />
        </div>
    </div>
  )
}
