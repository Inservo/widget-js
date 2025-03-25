(function () {
  var currentScript = document.currentScript;
  var widgetUrl = currentScript && currentScript.dataset.widgetUrl;

  var button = document.createElement("button");
  button.innerText = "Book Now";

  button.style.all = "unset"
  button.style.padding = "8px 12px";
  button.style.backgroundColor = "#000000";
  button.style.borderRadius = "10%";
  button.style.color = "#FFFFFF";
  button.style.cursor = "pointer";
  button.style.fontSize = "14px";
  button.style.fontFamily = "Inter, sans-serif";
  button.style.display = "inline-block";

  var modalOverlay = document.createElement("div");
  Object.assign(modalOverlay.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    visibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "9999",
  });

  var modalContent = document.createElement("div");
  Object.assign(modalContent.style, {
    backgroundColor: "#FFFFFF",
    padding: "10px",
    borderRadius: "10px",
    position: "relative",
  });

  var closeButton = document.createElement("button");
  closeButton.innerText = "X";
  Object.assign(closeButton.style, {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
  });

  closeButton.onclick = function () {
    modalOverlay.style.visibility = "hidden";
    iframe.src =
      widgetUrl;
  };

  modalContent.appendChild(closeButton);

  var iframe = document.createElement("iframe");
  iframe.src =
    widgetUrl;
  Object.assign(iframe.style, {
    width: "512px",
    height: "700px",
    border: "none",
  });

  modalContent.appendChild(iframe);
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  button.onclick = function () {
    modalOverlay.style.visibility = "visible";
  };

  // Attempt to insert the button after the current script tag
  var currentScript = document.currentScript;
  if (currentScript && currentScript.parentNode) {
    currentScript.parentNode.insertBefore(button, currentScript.nextSibling);
  } else {
    // Fallback: Append to the body if currentScript isn't available
    document.body.appendChild(button);
  }
})();
