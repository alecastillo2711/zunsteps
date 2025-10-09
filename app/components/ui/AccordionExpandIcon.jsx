import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "next/image";
import { Box } from "@mui/material";
import { Searcher } from "./Searcher";
import ResponsiveDialog from "./ResponsiveDialog";
import { ConceptItem } from "./ConceptItem";
import VerticalLinearStepper from "./VerticalLinearStepper";
import { ModuloContext } from "@/app/lib/contexts/ModulosContext";

export default function AccordionExpandIcon({ seccion }) {
  const { modulo } = React.useContext(ModuloContext);
  const { mNombre, mResumen } = modulo;

  console.log(seccion);
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
            <ResponsiveDialog
              title={"Atajo1"}
              importat={true}
              content={<VerticalLinearStepper />}
            />
            <ResponsiveDialog title={"Atajo2"} importat={false} />
          </Box>
          <Typography color="primary.text">{mResumen}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Searcher />
          {seccion.acciones.slice(0, 5).map((el) => (
            <ConceptItem accion={el} />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
