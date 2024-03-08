import React, { useEffect } from "react";
import { RenderingEngine, Enums } from "@cornerstonejs/core";
import { initialiseCornerstone } from "./initCornerstone.jsx";

const { ViewportType } = Enums;

const DcmImage = ({ dicomId }) => {
  useEffect(() => {
    const run = async () => {
      const imageIds = [
        `dicomweb://localhost:8080/dicom/downloadImage/${dicomId}`,
      ];

      const element = document.createElement("div");
      element.id = "cornerstone-element";
      element.style.width = "500px";
      element.style.height = "450px";
      element.style.position = "absolute"; // Position element absolutely
      element.style.top = "90px"; // Align to top of content div
      element.style.left = "600px"; // Align to left of content div
      element.style.zIndex = "2"; // Ensure it appears above content div
      element.style.backgroundColor = "black";
      document.getElementById("content").appendChild(element);

      const renderingEngineId = "myRenderingEngine";
      const renderingEngine = new RenderingEngine(renderingEngineId);
      console.log(renderingEngine);
      const viewportId = "DX_STACK";
      const viewportInput = {
        viewportId,
        type: ViewportType.STACK,
        element,
        defaultOptions: {
          background: [0, 0, 0],
        },
      };

      renderingEngine.enableElement(viewportInput);

      const viewport = renderingEngine.getViewport(viewportId);
      console.log(viewport);
      const stack = [imageIds[0]];

      await viewport.setStack(stack);

      viewport.render();
    };

    run();
  }, []);

  return (
    <>
      <div id="content"></div>
    </>
  );
};

export default DcmImage;
