import styles from "./modules/tienda.module.css";
import { getCamisetas } from "../utils/querys";
import { useState, useEffect } from "react";
import CamisetaGrid from "../components/home/camisetaGrid/camisetaGrid";

function Tienda() {
  const [camisetas, setCamisetas] = useState([]);
  const [ligaSeleccionada, setLigaSeleccionada] = useState("Todas");

  const ligas = [
    { nombre: "LaLiga", img: "/img/ligas/laliga.webp" },
    { nombre: "Premier League", img: "/img/ligas/premier.webp" },
    { nombre: "Serie A", img: "/img/ligas/seriea.webp" },
    { nombre: "Bundesliga", img: "/img/ligas/bundesliga.webp" },
    { nombre: "Ligue 1", img: "/img/ligas/ligue1.webp" },
  ];

  useEffect(() => {
    const fetchCamisetas = async () => {
      try {
        const data = await getCamisetas();
        setCamisetas(data);
      } catch (error) {
        console.error("Error cargando camisetas", error);
      }
    };

    fetchCamisetas();
  }, []);

  const camisetasFiltradas =
    ligaSeleccionada === "Todas"
      ? camisetas
      : camisetas.filter(
          (c) => c.liga === ligaSeleccionada
        );

  return (
    <div className={styles.tiendaContainer}>
      <h2>Camisetas de fútbol</h2>

      {/* FILTROS */}
      <div className={styles.filtros}>
        <button
          onClick={() => setLigaSeleccionada("Todas")}
          className={`${styles.botonTodas} ${
            ligaSeleccionada === "Todas" ? styles.botonActiva : ""
          }`}
        >
          Todas
        </button>

        {ligas.map((liga) => (
          <img
            key={liga.nombre}
            src={liga.img}
            alt={liga.nombre}
            onClick={() => setLigaSeleccionada(liga.nombre)}
            className={
              ligaSeleccionada === liga.nombre
                ? styles.activa
                : ""
            }
          />
        ))}
      </div>

      {/* GRID */}
      <div className={styles.camisetasGrid}>
        {camisetasFiltradas.map((item) => (
          <CamisetaGrid key={item.id} camiseta={item} />
        ))}
      </div>
    </div>
  );
}

export default Tienda;
