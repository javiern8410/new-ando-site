import React from "react";
import "./form.scss";

const noSubmit = (e:any) => {
  e.preventDefault();
  alert("Muchas Gracias, recibimos ");
  const form:any = document.getElementById("capture");
  form && form.reset();
}

const Form: React.FunctionComponent<any> = () => {
  return (
    <div className="form-container" id="capture-form"  data-aos="fade-left">
        <form id="capture" method="post" onSubmit={noSubmit}>
          <div className="form-title">
            <h3>
              Accede al Demo que Hemos Preparado Para Tí...
            </h3>
          </div>
          <div>
            <label>Nombre</label>
          </div>

          <div>
            <input type="text" className="form-control form-control-lg" required />
          </div>

          <div>
            <label>Agencia</label>
          </div>

          <div>
            <input type="text" className="form-control form-control-lg" required />
          </div>

          <div>
            <label>Email</label>
          </div>

          <div>
            <input type="email" className="form-control form-control-lg" required />
          </div>

          <div className="form-footer">
            <button type="submit" className="btn btn-lg btn-purple btn-block">
              ¡Sí, Quiero Ver Mi Demo AHORA!
            </button>
          </div>
        </form>
    </div>
  );
};

export default Form;
