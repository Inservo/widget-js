(function () {
  var styleEl = document.createElement("style");
  styleEl.innerHTML = `
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    .modal-overlay.show {
      display: flex;
    }
    .modal-content {
      background-color: #ffffff;
      border-radius: 10px;
      position: relative;
      opacity: 0;
      transform: scale(0.9);
      transition: opacity 0.3s ease, transform 0.3s ease;
      will-change: opacity, transform;
    }
    .modal-content.show {
      opacity: 1;
      transform: scale(1);
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
  modalOverlay.className = "modal-overlay"

  var modalContent = document.createElement("div");
  modalContent.className = "modal-content"

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
    modalContent.classList.remove("show");
    modalOverlay.classList.remove("show");
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
    modalOverlay.classList.add("show");
    modalContent.classList.add("show");
  };

  var currentScript = document.currentScript;
  if (currentScript && currentScript.parentNode) {
    currentScript.parentNode.insertBefore(button, currentScript.nextSibling);
  } else {
    document.body.appendChild(button);
  }
})();
