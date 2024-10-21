import { useState } from "react";
import "./App.css";

const phrases = [
  "ไม่",
  "ไม่ได้จิงๆหรอคะคนฉวยย",
  "เลี้ยงของกินอะไรก็ได้ 1 อย่าง",
  "พาไปเที่ยว",
  "ซื้ออะไรก็ได้ 1 อย่าง",
  "นี้ก็ไม่ได้หรอ",
  "จะไม่ใจอ่อนกับเด็กตาดำๆจิงๆหรองับ",
  "ใจอ่อนหน่อยด่ะม่ายคะคนฉวยยยของเค้า",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="val-container">
      {" "}
      {yesPressed ? (
        <>
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm93emcwaG5uamRtbzZlczgwc2gzN3E5NWZjYWFxYjA0Zm9kengydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Kc4eV3neG8BgstFSmx/giphy.gif"
            alt="yes-pic"
          />
          <div className="val-text">ตัวเล็กน่ารักที่สุดในโลกเลยยยมาจุ๊บที</div>
        </>
      ) : (
        <>
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTN1eWc2bHBqbW1nY2gwamlwcW9ncnBld2k5c3pxcm9xNGtkcDFoYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lmHi82w5qt9z39HVVJ/giphy.gif"
            alt="bear-asking"
          />
          <div className="val-text">หายโกรธด่ะม่ายยยย</div>
          <div>
            <button
              className="button yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              ก็ได้
            </button>
            <button
              onClick={() => setNoCount(noCount + 1)}
              className="button no-button"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
