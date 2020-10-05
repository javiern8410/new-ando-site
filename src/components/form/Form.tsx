import React from "react";
import "./form.scss";

const Form: React.FunctionComponent<any> = () => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h4 style={{margin: '10px 0px'}}>
            ¡Descubre la Potencia que le Damos a Tu Negocio!
        </h4>
        <p>
         Accede al Demo que Hemos Preparado Exclusivamente Para Tí AHORA...
        </p>
      </div>
      <div className="form-body">
        <form className="ASdasd">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" name="name" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Agencia</label>
            <input
              type="text"
              name="agency"
              className="form-control"
              required
            />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
            />
          </div>
          <div className="form-footer">
            <button type="submit" className="btn btn-lg btn-purple btn-block">
              ¡Sí, Quiero Ver Mi Demo AHORA!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
