import { FC, useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Box } from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

const PdfViewer: FC<{ file: string }> = ({ file }) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxHeight: "80vh",
        overflow: "scroll",
      }}
    >
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {/* eslint-disable-next-line prefer-spread */}
        {Array.apply(null, Array(numPages))
          .map((_, i) => i + 1)
          .map((page) => (
            <Page pageNumber={page} renderTextLayer={false} />
          ))}
      </Document>
    </Box>
  );
};

export default PdfViewer;
