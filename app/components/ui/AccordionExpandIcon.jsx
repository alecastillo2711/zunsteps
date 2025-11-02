import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "next/image";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Searcher } from "./Searcher";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { ConceptItem } from "./ConceptItem";
import VerticalLinearStepper from "./VerticalLinearStepper";
import { ModuloContext } from "@/app/lib/contexts/ModulosContext";
import { NoResults } from "./NoResults";
import { PaginatorDots } from "./PaginatorDots";

export default function AccordionExpandIcon({ seccion }) {
  const { modulo } = React.useContext(ModuloContext);
  const { mNombre, mResumen } = modulo;
  const [resultSearch, setResultSearch] = React.useState();

  //Cantidad de puntos por pintar
  let countDots = (seccion.acciones.length / 5).toFixed(0);
  //Mostrar en grupos de 5 los contenidos
  const [leftValue, setLeftValue] = React.useState(0);
  const [rightValue, setRightValue] = React.useState(5);
  const [showPaginButton, setShowPaginButton] = React.useState(true);

  //Mostrar los 5 siguientes
  const handlePaging = () => {
    //Condicion para mostrar o no el boton para paginar
    if (seccion.acciones.length - rightValue <= 5) {
      setShowPaginButton(false);
    }
    //Aunmemtando de 5 en 5 la dimencion de la muestra de paginado
    setLeftValue(leftValue + 5);
    setRightValue(rightValue + 5);
  };

  const searchAccion = (goal, list) => {
    let lowerGoal = goal.toLowerCase();
    let result = list.filter((el) =>
      el.aNombre.toLowerCase().includes(lowerGoal)
    );
    setResultSearch(result);
  };
  const restSearch = () => {
    setResultSearch();
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Typography variant="h5" color="primary.main">
              {mNombre}
            </Typography>
            <Image
              src={"/getLogo.png"}
              alt="imaga"
              width={150}
              height={50}
            ></Image>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            {/* <ResponsiveDialog
              title={"Atajo1"}
              importat={true}
              content={<VerticalLinearStepper />}
            />
            <ResponsiveDialog title={"Atajo2"} importat={false} /> */}
          </Box>
          <Typography color="primary.text">{mResumen}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded="true">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h6" color="primary.text">
            {seccion.sNombre}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="primary.text">
            A continuación te mostramos las acciones que consideramos más
            importantes en esta sección, pero puedes buscar la que desees desde
            la barra de búsqueda.
          </Typography>
          <Searcher
            collection={seccion.acciones}
            searchFunction={searchAccion}
            resetFunction={restSearch}
          />
          <Typography variant="h6">Contenidos:</Typography>

          {
            /***Con eto me aseguro de que no existan resultados de la busqueda */
            resultSearch && resultSearch.length === 0 && <NoResults />
          }
          {resultSearch
            ? resultSearch.map((el) => <ConceptItem key={el.id} accion={el} />)
            : seccion.acciones
                .slice(leftValue, rightValue)
                .map((el) => <ConceptItem key={el.id} accion={el} />)}
          {
            //Asegurandome que el existan mas de 5 contenidos para mostrar el boton de paginacion quintuple
            showPaginButton && seccion.acciones.length > 5 && (
              <PaginatorDots
                handlePaging={handlePaging}
                dots={countDots}
                showNext={showPaginButton}
              />
            )
          }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
