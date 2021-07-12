document.addEventListener("adobe_dc_view_sdk.ready", function () {
  var adobeDCView = new AdobeDC.View({
    clientId: "6f8d56f7b3154dcf99f211f51fbf2b79",
    divId: "adobe-dc-view",
  });
  adobeDCView.previewFile(
    {
      content: { location: { url: "https://www.tu990.mx/pdf/gaceta.pdf" } },
      metaData: { fileName: "gaceta.pdf" },
    },
    { embedMode: "SIZED_CONTAINER" }
  );
});

document.addEventListener("adobe_dc_view_sdk.ready", function () {
  var adobeDCView = new AdobeDC.View({
    clientId: "6f8d56f7b3154dcf99f211f51fbf2b79",
    divId: "adobe-dc-view2",
  });
  adobeDCView.previewFile(
    {
      content: { location: { url: "https://www.tu990.mx/pdf/aviso.pdf" } },
      metaData: { fileName: "Aviso.pdf" },
    },
    { embedMode: "IN_LINE" }
  );
});

/* Pass the embed mode option here */
const viewerConfig = {
  embedMode: "LIGHT_BOX",
};

/* Wait for Adobe Document Services PDF Embed API to be ready and enable the View PDF button */
document.addEventListener("adobe_dc_view_sdk.ready", function () {
  document.getElementById("view-pdf-btn").disabled = false;
});

/* Function to render the file using PDF Embed API. */
function previewFile() {
  /* Initialize the AdobeDC View object */
  var adobeDCView = new AdobeDC.View({
    /* Pass your registered client id */
    clientId: "6f8d56f7b3154dcf99f211f51fbf2b79",
  });

  /* Invoke the file preview API on Adobe DC View object */
  adobeDCView.previewFile(
    {
      /* Pass information on how to access the file */
      content: {
        /* Location of file where it is hosted */
        location: {
          url: "https://www.tu990.mx/pdf/vehiculodc.pdf",
          /*
              If the file URL requires some additional headers, then it can be passed as follows:-
              header: [
                  {
                      key: "<HEADER_KEY>",
                      value: "<HEADER_VALUE>",
                  }
              ]
              */
        },
      },
      /* Pass meta data of file */
      metaData: {
        /* file name */
        fileName: "vehiculodoblecero.pdf",
      },
    },
    viewerConfig
  );
}

function previewFile2() {
  /* Initialize the AdobeDC View object */
  var adobeDCView = new AdobeDC.View({
    /* Pass your registered client id */
    clientId: "6f8d56f7b3154dcf99f211f51fbf2b79",
  });

  /* Invoke the file preview API on Adobe DC View object */
  adobeDCView.previewFile(
    {
      /* Pass information on how to access the file */
      content: {
        /* Location of file where it is hosted */
        location: {
          url: "https://www.tu990.mx/pdf/vehiculoexento.pdf",
          /*
              If the file URL requires some additional headers, then it can be passed as follows:-
              header: [
                  {
                      key: "<HEADER_KEY>",
                      value: "<HEADER_VALUE>",
                  }
              ]
              */
        },
      },
      /* Pass meta data of file */
      metaData: {
        /* file name */
        fileName: "vehiculoexento.pdf",
      },
    },
    viewerConfig
  );
}
