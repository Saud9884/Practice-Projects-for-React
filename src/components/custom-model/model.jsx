
export default function Model({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Model"} className="model">
      <div className="model-content">
        <div className="header">
          <span onClick={onClose} className="cancel-button">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">{body ? body : "Body"}</div>
        <div className="footer">
          <h2>{footer ? footer : "Footer"}</h2>
        </div>
      </div>
    </div>
  );
}
