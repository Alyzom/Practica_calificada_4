import React, { useState } from "react";
import { connect } from "react-redux";
import { loginSuccess, loginFailure } from "../../actions/authActions2";
import "./style.css";

import data from "./Ingredientes.json";

const Dashboard = ({ isAuthenticated, loginSuccess, loginFailure }) => {
  const ingredientes = data.cocina || [];
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);

  const arrayOrdenEstablecido = [
    "Pan inferior",
    "Lechuga",
    "Tomate",
    "Mortadella",
    "Salsa secreta",
    "Pan superior",
  ];

  const handleIngredientClick = (ingrediente) => {
    const nuevosIngredientes = [...ingredientesSeleccionados];
    const index = nuevosIngredientes.findIndex((i) => i.nombre === ingrediente.nombre);

    if (index === -1) {
      nuevosIngredientes.push(ingrediente);
    } else {
      nuevosIngredientes.splice(index, 1);
    }

    setIngredientesSeleccionados(nuevosIngredientes);
  };

  const compararArrays = () => {
    const esOrdenCorrecto =
      JSON.stringify(ingredientesSeleccionados.map((i) => i.nombre)) === JSON.stringify(arrayOrdenEstablecido);

    console.log(
      "ingredientesSeleccionados:",
      ingredientesSeleccionados.map((i) => i.nombre)
    );
    console.log("arrayOrdenEstablecido:", arrayOrdenEstablecido);

    if (esOrdenCorrecto) {
      setIngredientesSeleccionados([]);
      alert("¡Orden correcto! ¡Hamburguesa lograda!");
    } else {
      setIngredientesSeleccionados([]);
      alert("El orden es incorrecto. ¡Inténtalo de nuevo!");
    }
  };

  const reversedIngredientesSeleccionados = [...ingredientesSeleccionados].reverse();

  return (
    <div className="container">
      <main>
        <section className="ingredientes">
          <div className="lista">
            <ul>
              {ingredientes.map((ingrediente, index) => (
              <li key={index}
              onClick={() => handleIngredientClick(ingrediente)}
              >
                {ingrediente.nombre}
              </li>
              ))}
            </ul>
          </div>
          <button type="button" onClick={compararArrays} className="cocinar">
                {""} Cocinar
          </button>
        </section>
        <section className="muestra">
            {reversedIngredientesSeleccionados.length > 0 ? (
              <>
              {reversedIngredientesSeleccionados.map((ingrediente, index) => (
                <span key={index}>{ingrediente.nombre}</span>
              ))}
              <p>Total de ingredientes: {reversedIngredientesSeleccionados.length}</p>
              </>
            ) : (
              "agregar ingredientes"
            )}
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps, { loginSuccess, loginFailure })(
  Dashboard
);
