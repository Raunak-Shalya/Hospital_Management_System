import dicomParser from "dicom-parser";
import * as cornerstone from "@cornerstonejs/core";
import * as cornerstoneTools from "@cornerstonejs/tools";

// import cornerstoneDICOMImageLoader from "@cornerstonejs/dicom-image-loader/dist/dynamic-import/cornerstoneDICOMImageLoader.min.js";

// import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import cornerstoneDICOMImageLoader from "@cornerstonejs/dicom-image-loader";

export const initialiseCornerstone = async () => {
  cornerstoneDICOMImageLoader.external.cornerstone = cornerstone;
  cornerstoneDICOMImageLoader.external.dicomParser = dicomParser;
  cornerstoneDICOMImageLoader.configure({
    beforeSend: function (xhr) {
      // Add custom headers here (e.g. auth tokens)
      //xhr.setRequestHeader('x-auth-token', 'my auth token');
    },

    decodeConfig: {
      convertFloatPixelDataToInt: false,
    },
  });

  let maxWebWorkers = 1;

  if (navigator.hardwareConcurrency) {
    maxWebWorkers = Math.max(navigator.hardwareConcurrency - 1, 1);
  }

  var config = {
    maxWebWorkers,
    startWebWorkersOnDemand: true,
    taskConfiguration: {
      decodeTask: {
        initializeCodecsOnStartup: false,
        strict: false,
      },
    },
  };

  cornerstoneDICOMImageLoader.webWorkerManager.initialize(config);

  await cornerstone.init();
};
