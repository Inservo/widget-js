(function () {
  var styleEl = document.createElement("style");
  styleEl.innerHTML = `
    @keyframes widgetSlideUp {
      from { opacity: 0; transform: translateY(100%); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes widgetSlideDown {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(100%); }
    }
    .modal-content-reservo {
      background-color: #ffffff;
      padding: 0;
      margin: 0;
      border-radius: 10px;
      position: fixed;
      right: 16px;
      bottom: 16px;
      opacity: 0;
      will-change: opacity, transform;
      z-index: 9500;
      transform: translateY(50%);
      transition: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .modal-content-reservo.show {
      animation: widgetSlideUp 0.5s forwards;
    }
    /* Mobile full-screen styles */
    @media (max-width: 768px) {
      .modal-content-reservo {
        width: 100% !important;
        height: 100vh !important;
        border-radius: 0 !important;
        padding: 0 !important;
        right: 0 !important;
        left: 0 !important;
        transform: translateY(100%);
        transition: none;
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
  button.innerHTML = `
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_6882_80206)">
      <rect width="46" height="46" rx="23" fill="#B2151B"/>
      <path d="M26 23H28C28.5304 23 29.0391 23.2107 29.4142 23.5858C29.7893 23.9609 30 24.4696 30 25V36L26 32H20C19.4696 32 18.9609 31.7893 18.5858 31.4142C18.2107 31.0391 18 30.5304 18 30V29M22 23C22 23.5304 21.7893 24.0391 21.4142 24.4142C21.0391 24.7893 20.5304 25 20 25H14L10 29V18C10 16.9 10.9 16 12 16H20C20.5304 16 21.0391 16.2107 21.4142 16.5858C21.7893 16.9609 22 17.4696 22 18V23Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M32.5855 11.5727L31.9992 8L31.4129 11.5727C31.2511 12.5591 30.4948 13.3418 29.5146 13.5376L27.1992 14L29.5146 14.4624C30.4948 14.6582 31.2511 15.4409 31.4129 16.4273L31.9992 20L32.5855 16.4273C32.7474 15.4409 33.5036 14.6582 34.4838 14.4624L36.7992 14L34.4838 13.5376C33.5036 13.3418 32.7474 12.5591 32.5855 11.5727Z" fill="white"/>
      <path d="M35.3197 10.1289L35.1672 9.2L35.0148 10.1289C34.9727 10.3854 34.7761 10.5889 34.5212 10.6398L33.9192 10.76L34.5212 10.8802C34.7761 10.9311 34.9727 11.1346 35.0148 11.3911L35.1672 12.32L35.3197 11.3911C35.3617 11.1346 35.5584 10.9311 35.8132 10.8802L36.4152 10.76L35.8132 10.6398C35.5584 10.5889 35.3617 10.3854 35.3197 10.1289Z" fill="white"/>
      </g>
      <defs>
      <filter id="filter0_d_6882_80206" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4" dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6882_80206"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6882_80206" result="shape"/>
      </filter>
      </defs>
    </svg>

  `;
  button.style.all = "unset";
  button.style.padding = "0";
  button.style.borderRadius = "8px";
  button.style.cursor = "pointer";
  button.style.position = "fixed";
  button.style.bottom = "16px";
  button.style.right = "16px";
  button.style.border = "none";
  button.style.zIndex = "9000";
  document.body.appendChild(button);

  var modalContent = document.createElement("div");
  modalContent.className = "modal-content-reservo";
  document.body.appendChild(modalContent);

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
    modalContent.style.animation = "widgetSlideDown 0.5s forwards";
    setTimeout(function () {
      modalContent.classList.remove("show");
      modalContent.style.animation = "";
    }, 300);
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

  var animStyle = document.createElement("style");
  animStyle.innerHTML = `
    @keyframes widgetSlideUp {
      from { opacity: 0; transform: translateY(100%); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes widgetSlideDown {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(100%); }
    }
  `;
  document.head.appendChild(animStyle);

  button.onclick = function () {
    modalContent.style.animation = "widgetSlideUp 0.5s forwards";
    setTimeout(function () {
      modalContent.classList.add("show");
      modalContent.style.animation = "";
    }, 500);
  };

  if (currentScript && currentScript.parentNode) {
    currentScript.parentNode.insertBefore(button, currentScript.nextSibling);
  } else {
    document.body.appendChild(button);
  }
})();
