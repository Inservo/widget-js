(function () {
  var styleEl = document.createElement("style");
  styleEl.innerHTML = `
    @keyframes fadeInOverlay {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeOutOverlay {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    @keyframes scaleInContent {
      0% { opacity: 0; transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
    }
    @keyframes scaleOutContent {
      0% { opacity: 1; transform: scale(1); }
      100% { opacity: 0; transform: scale(0.9); }
    }
  `;
  document.head.appendChild(styleEl);

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
  button.style.boxSizing = "border-box";
  button.style.display = "inline-block";

  var modalOverlay = document.createElement("div");
  Object.assign(modalOverlay.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "9999",
    opacity: "0",
    pointerEvents: "none",
  });

  var modalContent = document.createElement("div");
  Object.assign(modalContent.style, {
    backgroundColor: "#FFFFFF",
    padding: "10px",
    borderRadius: "10px",
    position: "relative",
    opacity: "0",
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
    modalOverlay.style.animation = "fadeOutOverlay 0.5s forwards";
    modalContent.style.animation = "scaleOutContent 0.5s forwards";
    setTimeout(function () {
      modalOverlay.style.pointerEvents = "none";
    }, 500);
    iframe.src = widgetUrl;
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
    modalOverlay.style.pointerEvents = "auto";
    modalOverlay.style.animation = "fadeInOverlay 0.5s forwards";
    modalContent.style.animation = "scaleInContent 0.5s forwards";
  };

  var currentScript = document.currentScript;
  if (currentScript && currentScript.parentNode) {
    currentScript.parentNode.insertBefore(button, currentScript.nextSibling);
  } else {
    document.body.appendChild(button);
  }
})();
