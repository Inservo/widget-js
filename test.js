(function () {
  var styleEl = document.createElement("style");
  styleEl.innerHTML = `
    @keyframes overlayFadeIn {
      from { background-color: rgba(0, 0, 0, 0); }
      to { background-color: rgba(0, 0, 0, 0.5); }
    }
    @keyframes overlayFadeOut {
      from { background-color: rgba(0, 0, 0, 0.5); }
      to { background-color: rgba(0, 0, 0, 0); }
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      background-color: rgba(0, 0, 0, 0);
      pointer-events: none;
      transition: background-color 0.3s ease;
    }
    .modal-overlay.show {
      pointer-events: auto;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .modal-content {
      background-color: #ffffff;
      padding: 10px;
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
  button.style.borderRadius = "20px";
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
  closeButton.innerHTML = `
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 5.5L5.5 15.5M5.5 5.5L15.5 15.5" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  Object.assign(closeButton.style, {
    position: "absolute",
    top: "16px",
    right: "16px",
    padding: "11.5px",
    background: "transparent",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    borderRadius: "10px",
    zIndex: "9999",
  });

  closeButton.onclick = function () {
    modalContent.classList.remove("show");
    modalOverlay.classList.remove("show");
  };
  modalContent.appendChild(closeButton);

  var iframe = document.createElement("iframe");
  iframe.src =
    widgetUrl;
  Object.assign(iframe.style, {
    width: "512px",
    height: "min(700px, 85vh)",
    border: "none",
  });
  modalContent.appendChild(iframe);

  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  button.onclick = function () {
    modalOverlay.classList.add("show");
    setTimeout(function () {
      modalContent.classList.add("show");
    }, 10);
  };

  if (currentScript && currentScript.parentNode) {
    currentScript.parentNode.insertBefore(button, currentScript.nextSibling);
  } else {
    document.body.appendChild(button);
  }
})();
