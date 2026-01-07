import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import styles from "../components/Reusables/footer.module.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `none`,
  "&:not(:last-child)": {
    borderBottom: "none",
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "var(--black-color)", // ✔ Fondo personalizado
  flexDirection: "row-reverse",

  // Rotación del ícono cuando se expande
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },

  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
    color: "var(--white-color)", // ✔ Color del span
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "2px 0 0 0",
  borderTop: "none", // ❌ Sin borde interno
  backgroundColor: "var(--black-color)", // ✔ Fondo igual
  color: "var(--white-color)", // ✔ Texto dentro
}));

export default function Acordeon() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.acordeonContainer}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span">Tienda</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="ul" className={styles.listaTienda}>
            <li>
              <NavLink to="/Tienda">Camisetas</NavLink>
            </li>
            <li>
              <NavLink to="/CajasMisteriosas">Cajas sorpresa</NavLink>
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
