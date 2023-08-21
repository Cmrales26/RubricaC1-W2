import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

const Create = (props) => {
  const { Categorias, datacard2, setDatacard2, } = useContext(DataContext);

  // DATOS HOOK

  const [image, setImage] = useState("");

  const addImage = (e) => {
    setImage(e.target.value);
  };

  const [sport, setSport] = useState("");

  const addSport = (e) => {
    setSport(e.target.value);
  };

  const [category, setCategory] = useState("");

  const addCategory = (e) => {
    setCategory(e.target.value);
  };

  const [description, setDescription] = useState();

  const addDescription = (e) => {
    setDescription(e.target.value);
  };

  const [tpInfo, setTpInfo] = useState("");

  const addtpInfo = (e) => {
    setTpInfo(e.target.value);
  };

  const [tpLink, setTpLink] = useState("");

  const addtpLink = (e) => {
    setTpLink(e.target.value);
  };

  // AGREGAR DEPORTE
  const addSporttodata = (e) => {
    e.preventDefault();
    const newData2 = [...JSON.parse(localStorage.getItem("datacard2")) || []];
    console.log(newData2)

    const newSportadd = {
      image,
      name: sport,
      description,
      category,
      teamorplayer: tpInfo,
      teamorplayerinfo: tpLink,
    };
    newData2.push(newSportadd);

    // Almacena los datos actualizados en el localStorage
    localStorage.setItem("datacard2", JSON.stringify(newData2));

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });

    props.setOverview(false);
    props.setContent(true);
    props.setCreate(false);
  };

  return (
    <>
      <div className="contenedor-todo">
        <div className="card-preview">
          <h1>Card Preview</h1>
          <div className="card cardsportsadd">
            <div className="imagenadd">
              <img src={image} alt="Agregar Imagen" />
            </div>
            <div className="informationadd">
              <div className="nombre">
                <h2>{sport}</h2>
              </div>
              <div className="categoria">
                <p>
                  Catergory: <span>{category}</span>
                </p>
              </div>
              <div className="descriptioncardadd">
                <p>{description}</p>
              </div>
            </div>
            <div className="botoncardadd">
              <a href={tpLink} target="_blank">
                Top Performer: <span className="performer">{tpInfo}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="formulario">
          <h3>Add Sport</h3>
          <form action="">
            <div className="imagen divform">
              <label htmlFor="Image">Image-url</label>
              <input
                type="text"
                id="Image"
                name="Image"
                placeholder="Imagen Link"
                onChange={addImage}
                value={image}
                required
              />
            </div>

            <div className="sport-cat divform">
              <div className="divform">
                <label htmlFor="Sport">Sport</label>
                <input
                  type="text"
                  id="Sport"
                  name="Sport"
                  placeholder="Sport Name"
                  onChange={addSport}
                  value={sport}
                  required
                />
              </div>
              <div className="divform">
                <label htmlFor="Category">Category</label>

                <select
                  name="Category"
                  className="Select-Form"
                  onChange={addCategory}
                  value={category}
                  required
                >
                  <option className="option-Form" value="">
                    Choose a sport Category
                  </option>
                  {Categorias.map((opcion, index) => (
                    <option className="option-Form" value={opcion} key={index}>
                      {opcion}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="description divform">
              <label htmlFor="Description">Description</label>

              <textarea
                name="Desctiption"
                id=""
                cols="30"
                placeholder="Sport Description"
                onChange={addDescription}
                value={description}
                rows="10"
              ></textarea>
            </div>

            <div className="topperformace divform">
              <label htmlFor="top-Performance">Top Performance Name</label>
              <input
                type="text"
                id="top-Performance"
                name="top-Performance"
                placeholder="Top Performance Player / Team"
                onChange={addtpInfo}
                value={tpInfo}
                required
              />
              <label htmlFor="top-Performanceurl">Top Performance Page</label>
              <input
                type="text"
                id="top-Performanceurl"
                name="top-Performanceurl"
                placeholder="Top Performance Player / Team Link"
                onChange={addtpLink}
                value={tpLink}
                required
              />
            </div>

            <div className="botonadd">
              <button className="addsport" onClick={addSporttodata}>ADD SPORT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
