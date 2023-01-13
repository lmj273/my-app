import React from "react";
import "./modal.css";
import Dog from "../img/f.jpg";

function Modal(abc) {
  const { open, close, header } = abc;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button type="button" className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <img src={Dog} alt="" />
            <div>Hellow</div>
          </main>
          <footer>
            <button type="button" className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
export default Modal;
