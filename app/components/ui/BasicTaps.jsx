"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AccordionExpandIcon from "./AccordionExpandIcon";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //este es un array de prueba para despues adaptarlo a la data
  const sections = ["primera", "segunda", "tercera", "cuarta"];
  //************************************************************** */

  return (
    <Box sx={{ width: "600px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {sections.map((el) => (
            <Tab key={el} label={el} {...a11yProps(sections.indexOf(el))} />
          ))}
        </Tabs>
      </Box>
      {sections.map((el) => {
        return (
          <CustomTabPanel value={value} index={sections.indexOf(el)}>
            {/* {sections[sections.indexOf(el)]} */}
            <AccordionExpandIcon />
          </CustomTabPanel>
        );
      })}
    </Box>
  );
}
