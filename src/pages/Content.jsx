import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

const Content = () => {
  const { datacard2, Categorias, theme } = useContext(DataContext);
  const [filtro, setFiltro] = useState("");

  const [localdatacard2, setLocaldatacard2] = useState([])

  const handleCategoriaChange = (e) => {
    const selectedCategoria = e.target.value;
    setFiltro(selectedCategoria);
  };

  useEffect(() => {
    if (localStorage.getItem("datacard2")) {
      return
    } else {
      localStorage.setItem("datacard2", JSON.stringify(datacard2))
    }
  }, [datacard2]);

  useEffect(() => {
    const storageData = localStorage.getItem("datacard2");
    if (storageData) {
      setLocaldatacard2(JSON.parse(storageData))
    }
  }, [])

  const filteredData = filtro ? localdatacard2.filter((deporte) => deporte.category === filtro) : localdatacard2;

  return (
    <div className="Container">
      <div className="title-and-filter">
        <div className={theme ? "titulo activetitulo" : "titulo"}>
          <h1>Sports</h1>
        </div>
        <div className="filter">
          <select
            name="categoria"
            value={filtro}
            onChange={handleCategoriaChange}
          >
            <option value="">Choose a sport Category</option>
            {Categorias.map((opcion, index) => (
              <option value={opcion} key={index}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="card-container">
        {filteredData.map((deportes, index) => (
          <div className={theme ? "card cardsports activecard" : "card cardsports"} key={index}>
            <div className="imagen">
              <img src={deportes.image} alt="" />
            </div>
            <div className="information">
              <div className="nombre">
                <h2>{deportes.name}</h2>
              </div>
              <div className="categoria">
                <p>
                  Catergory: <span>{deportes.category}</span>
                </p>
              </div>
              <div className="descriptionsports">
                <p>{deportes.description}</p>
              </div>
            </div>
            <div className="boton">
              <a href={deportes.teamorplayerinfo} target="_blank">
                Top Performer:{" "}
                <span className="performer">{deportes.teamorplayer}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
