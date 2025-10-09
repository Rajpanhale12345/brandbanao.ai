
import "./BoxCard.css";


export default function BoxCard({ size = 200, labels = {} }) {
  // labels lets you override the face text if you want
  const {
    front = "Trust",
    back = "Revenue",
    right = "Confidence",
    left = "Futuristic",
    top = "Innovation",
    bottom = "Efficiency  ",
  } = labels;

  return (
    <>
      <div className="boxcard-scene">
        <br /><br />
        <div className="text">
         <span className="terms">
          Terms that </span><br /><span className = "define"  style={{ color : "#d94f5c"}}>define
            <br /></span> us <br /> 
        </div><br /><br /><br /><br />
      <div
        className="box-card"
        style={{ width: size, height: size }}
        aria-label="3D rotating box card"
      >
        <div className="face front">{front}</div>
        <div className="face back">{back}</div>
        <div className="face right">{right}</div>
        <div className="face left">{left}</div>
        <div className="face top">{top}</div>
        <div className="face bottom">{bottom}</div>
      </div>
     <br /><br /><br /><br />
    </div>
 
    </>
  );
}
