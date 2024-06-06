"use client";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { BiDownload } from "react-icons/bi";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex items-center justify-center flex-col relative">
      <img
        src="/assets/images/star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      <a
        href={"/assets/docs/muzaffar_resume.pdf"}
        target="_blank"
        rel="noreferrer"
        className="flex items-center z-20 justify-center gap-3 px-6 py-2 rounded  shadow-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out my-3"
      >
        <BiDownload fontSize={20} /> Download CV
      </a>
      <div className="py-[50px] justify-center flex items-center overflow-hidden z-20">
        <Document
          file="/assets/docs/muzaffar_resume.pdf"
          className="flex justify-center shadow-xl"
        >
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>
      <a
        href={"/assets/docs/muzaffar_resume.pdf"}
        target="_blank"
        rel="noreferrer"
        className="flex items-center z-20 justify-center gap-3 px-6 py-2 rounded  shadow-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out my-3"
      >
        <BiDownload fontSize={20} /> Download CV
      </a>
    </div>
  );
}

export default Resume