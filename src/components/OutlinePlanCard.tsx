import { Card, CardContent, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import PdfViewer from "./PdfViewer.tsx";
import lesson1 from "../assets/lesson1.pdf";
import lesson2 from "../assets/lesson2.pdf";
import lesson3 from "../assets/lesson3.pdf";
import lesson4 from "../assets/lesson4.pdf";
import lesson5 from "../assets/lesson5.pdf";
import lesson6 from "../assets/lesson6.pdf";

const mapper: Record<number, string> = {
  0: lesson1,
  1: lesson2,
  2: lesson3,
  3: lesson4,
  4: lesson5,
  5: lesson6,
};

const OutlinePlanCard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Урок 1" />
          <Tab label="Урок 2" />
          <Tab label="Урок 3" />
          <Tab label="Урок 4" />
          <Tab label="Урок 5" />
          <Tab label="Урок 6" />
        </Tabs>
        <PdfViewer file={mapper[value]} />
      </CardContent>
    </Card>
  );
};

export default OutlinePlanCard;
