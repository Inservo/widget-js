(function () {
  // Inject CSS for overlay and modal transitions
  var styleEl = document.createElement("style");
  styleEl.innerHTML = `
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

  // Retrieve the widget URL from the script tag's data attribute or use a fallback.
  var currentScript = document.currentScript;
  var widgetUrl =
    (currentScript && currentScript.dataset.widgetUrl) ||
    "http://localhost:5173/widget/restaurants/DEFAULT";

  // Create modal overlay and content elements.
  var modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";

  var modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  // Create close button inside the modal.
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
    // Optionally reset the iframe.
    iframe.src = widgetUrl;
  };
  modalContent.appendChild(closeButton);

  // Create the iframe for the booking widget.
  var iframe = document.createElement("iframe");
  iframe.src = widgetUrl;
  Object.assign(iframe.style, {
    width: "512px",
    height: "min(700px, 90vh)",
    border: "none",
  });
  modalContent.appendChild(iframe);

  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  // Expose a global function to open the modal.
  window.openReservationWidget = function () {
    // Reset iframe in case it navigated away.
    iframe.src = widgetUrl;
    modalOverlay.classList.add("show");
    // Slight delay to let the overlay show up before animating the content.
    setTimeout(function () {
      modalContent.classList.add("show");
    }, 10);
  };

  // Also expose a function to close the modal (optional).
  window.closeReservationWidget = function () {
    modalContent.classList.remove("show");
    modalOverlay.classList.remove("show");
    iframe.src = widgetUrl;
  };

  // For debugging, you can log that the widget is ready.
  console.log(
    "Reservation widget loaded. Use window.openReservationWidget() to open it."
  );
})();
