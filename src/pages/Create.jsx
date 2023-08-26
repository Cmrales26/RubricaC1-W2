import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useFormik } from "formik";
import * as Yup from "yup"

const Create = (props) => {
  const { Categorias } = useContext(DataContext);

  const validationSchema = Yup.object({

    image: Yup.string().required("Imagen Link is required")
      .min(10, "Link must be at least 10 characters")
      .max(200, "Link must be at most 200 characters")
      .matches(
        /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
        "This link format is not allowed."
      ),

    sport: Yup.string().required("Sport Name is Required")
      .min(3, "Sport name must be at least 3 characters")
      .max(20, "Sport name must be at most 20 characters")
      .matches(
        /^(?!\s)(.*\S)?(?<!\s)$/,
        "No spaces at the beginning or end are allowed"
      ),

    category: Yup.string().required("Sport Category is Required"),

    description: Yup.string().required("Sport Description is Required")
      .min(50, "Sport description must be at least 50 characters")
      .max(200, "Sport description musth be at most 200 characters")
      .matches(
        /^(?!\s)(.*\S)?(?<!\s)$/,
        "No spaces at the beginning or end are allowed"
      ),

    tpInfo: Yup.string().required("A top performer team or player is Required")
      .min(3, "Top performer must be at least 3 characters")
      .max(15, "Top performer must be at most 15 characters")
      .matches(
        /^(?!\s)(.*\S)?(?<!\s)$/,
        "No spaces at the beginning or end are allowed"
      ),

    tpLink: Yup.string().required("Top Performer link is Required")
      .min(10, "Top performer link must be at least 10 characters")
      .max(50)
      .matches(
        /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
        "This link format is not allowed"
      )
  })

  const formik = useFormik({
    initialValues: {
      image: "",
      sport: "",
      category: "",
      description: "",
      tpInfo: "",
      tpLink: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newSportData = {
        image: values.image,
        name: values.sport,
        description: values.description,
        category: values.category,
        teamorplayer: values.tpInfo,
        teamorplayerinfo: values.tpLink
      }

      const newData2 = [...JSON.parse(localStorage.getItem("datacard2")) || []];
      newData2.push(newSportData);

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
    }
  })

  return (
    <>
      <div className="contenedor-todo">
        <div className="card-preview">
          <h1>Card Preview</h1>
          <div className="card cardsportsadd">
            <div className="imagenadd">
              <img src={formik.values.image} alt="Agregar Imagen" />
            </div>
            <div className="informationadd">
              <div className="nombre">
                <h2>{formik.values.sport}</h2>
              </div>
              <div className="categoria">
                <p>
                  Catergory: <span>{formik.values.category}</span>
                </p>
              </div>
              <div className="descriptioncardadd">
                <p>{formik.values.description}</p>
              </div>
            </div>
            <div className="botoncardadd">
              <a href={formik.values.tpLink} target="_blank">
                Top Performer: <span className="performer">{formik.values.tpInfo}</span>
              </a>
            </div>
          </div>
        </div>

        {/* !!FORMULARIO */}

        <div className="formulario">
          <h3>Add Sport</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="imagen divform">
              <label htmlFor="image">Image-url</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Imagen Link"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image.trim()}
                required
              />

              {formik.touched.image && formik.errors.image ? (
                <div className="error">{formik.errors.image}</div>
              ) : null}

            </div>

            <div className="sport-cat divform">
              <div className="divform">
                <label htmlFor="sport">Sport</label>
                <input
                  type="text"
                  id="sport"
                  name="sport"
                  placeholder="Sport Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sport}
                  required
                />

                {formik.touched.sport && formik.errors.sport ? (
                  <div className="error">{formik.errors.sport}</div>
                ) : null}

              </div>
              <div className="divform">
                <label htmlFor="category">Category</label>

                <select
                  name="category"
                  className="Select-Form"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
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

                {formik.touched.category && formik.errors.category ? (
                  <div className="error">{formik.errors.category}</div>
                ) : null}

              </div>
            </div>

            <div className="description divform">
              <label htmlFor="description">Description</label>

              <textarea
                name="description"
                id="description"
                cols="30"
                placeholder="Sport Description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                rows="10"
              ></textarea>

              {formik.touched.description && formik.errors.description ? (
                <div className="error">{formik.errors.description}</div>
              ) : null}

            </div>

            <div className="topperformace divform">
              <label htmlFor="tpInfo">Top Performance Name</label>
              <input
                type="text"
                id="tpInfo"
                name="tpInfo"
                placeholder="Top Performance Player / Team"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tpInfo}
                required
              />

              {formik.touched.tpInfo && formik.errors.tpInfo ? (
                <div className="error">{formik.errors.tpInfo}</div>
              ) : null}

              <label htmlFor="tpLink">Top Performance Page</label>
              <input
                type="text"
                id="tpLink"
                name="tpLink"
                placeholder="Top Performance Player / Team Link"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tpLink}
                required
              />

              {formik.touched.tpLink && formik.errors.tpLink ? (
                <div className="error">{formik.errors.tpLink}</div>
              ) : null}

            </div>

            <div className="botonadd">
              <button type="submit" className="addsport">ADD SPORT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
