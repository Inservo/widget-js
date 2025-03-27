(function () {
  var styleEl = document.createElement("style");
  styleEl.innerHTML = `
    .modal-content-reservo {
      background-color: #ffffff;
      padding: 0;
      margin: 0;
      border-radius: 10px;
      position: absolute;
      right: 16px;
      bottom: 16px;
      opacity: 0;
      transform: scale(0.9);
      transition: opacity 0.3s ease, transform 0.3s ease;
      will-change: opacity, transform;
      z-index: 9999;
    }
    .modal-content-reservo.show {
      opacity: 1;
      transform: scale(1);
    }
    /* Mobile full-screen styles */
    @media (max-width: 768px) {
      .modal-content-reservo {
        width: 100% !important;
        height: 100vh !important;
        border-radius: 0 !important;
        padding: 0 !important;
      }
      .modal-content-reservo iframe {
        width: 100% !important;
        height: 100vh !important;
      }
    }
  `;
  document.head.appendChild(styleEl);

  var currentScript = document.currentScript;
  var widgetUrl = currentScript && currentScript.dataset.widgetUrl;

  var button = document.createElement("button");
  button.innerHtml = `
    <svg
      width="24"
      height="24"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9771 5.9545L10 0L9.02287 5.9545C8.75311 7.59844 7.4927 8.90306 5.85904 9.22931L2 10L5.85904 10.7707C7.4927 11.0969 8.75311 12.4016 9.02287 14.0455L10 20L10.9771 14.0455C11.2469 12.4016 12.5073 11.0969 14.141 10.7707L18 10L14.141 9.22931C12.5073 8.90306 11.2469 7.59844 10.9771 5.9545Z"
        fill=#ffffff
      />
      <path
        d="M15.5341 3.54817L15.28 2L15.0259 3.54817C14.9558 3.97559 14.6281 4.31479 14.2033 4.39962L13.2 4.6L14.2033 4.80038C14.6281 4.88521 14.9558 5.22441 15.0259 5.65183L15.28 7.2L15.5341 5.65183C15.6042 5.22441 15.9319 4.88521 16.3567 4.80038L17.36 4.6L16.3567 4.39962C15.9319 4.31479 15.6042 3.97559 15.5341 3.54817Z"
        fill=#ffffff
      />
    </svg>
  `;
  button.style.all = "unset";
  button.style.padding = "8px 8px";
  button.style.borderRadius = "8px";
  button.style.cursor = "pointer";
  button.style.postion = "absolute";
  button.style.bottom = "16px";
  button.style.right = "16px";
  button.style.border = "none";
  button.style.zIndex = "9000";

  var modalContent = document.createElement("div");
  modalContent.className = "modal-content-reservo";

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
  };
  modalContent.appendChild(closeButton);

  var iframe = document.createElement("iframe");
  iframe.src = widgetUrl;
  Object.assign(iframe.style, {
    width: "512px",
    height: "min(700px, 85vh)",
    border: "none",
    borderRadius: "10px",
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
