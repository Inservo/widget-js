(function () {
  // Function to initialize the Reservo widget on the page.
  function initReservoWidget() {
    // Create the Reservo notification element.
    var notificationDiv = document.createElement("div");
    notificationDiv.id = "reservo-notification";
    notificationDiv.style.cssText =
      "width: 340px; height: 82px; padding-top: 20px; padding-bottom: 16px; padding-left: 20px; padding-right: 20px; border-radius: 30px; border-width: 2.25px; border-style: solid; filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06)); background-color: #FFFFFF; color: #b2151b; border-color: #b2151b; position: absolute; right: 24px; bottom: 88px; opacity: 0; visibility: hidden; transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;";
    notificationDiv.innerHTML = `
      <div
        style="
          height: 20px;
          width: 20px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: -30%;
          right: 0;
          cursor: pointer;
          filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
          background-color: #B3B3B3;
        "
        id="reservo-notification-close"
      >
        <svg
          width="8px"
          height="8px"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5712 0L6.28453 4.28572L1.99887 0L0.570312 1.42857L4.85597 5.71429L0.570312 10L1.99887 11.4286L6.28453 7.14286L10.5712 11.4286L11.9997 10L7.71409 5.71429L11.9997 1.42857L10.5712 0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
      <div
        style="
          height: 36px;
          width: 36px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: -25%;
          left: 50%;
          transform: translateX(-50%);
          background-color: #b2151b;
          border-color: #FFFFFF;
        "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9771 5.9545L10 0L9.02287 5.9545C8.75311 7.59844 7.4927 8.90306 5.85904 9.22931L2 10L5.85904 10.7707C7.4927 11.0969 8.75311 12.4016 9.02287 14.0455L10 20L10.9771 14.0455C11.2469 12.4016 12.5073 11.0969 14.141 10.7707L18 10L14.141 9.22931C12.5073 8.90306 11.2469 7.59844 10.9771 5.9545Z"
            fill="#ffffff"
          />
          <path
            d="M15.5341 3.54817L15.28 2L15.0259 3.54817C14.9558 3.97559 14.6281 4.31479 14.2033 4.39962L13.2 4.6L14.2033 4.80038C14.6281 4.88521 14.9558 5.22441 15.0259 5.65183L15.28 7.2L15.5341 5.65183C15.6042 5.22441 15.9319 4.88521 16.3567 4.80038L17.36 4.6L16.3567 4.39962C15.9319 4.31479 15.6042 3.97559 15.5341 3.54817Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <p style="margin: 0; font-family: 'Inter', sans-serif; font-size: 14px; line-height: 24px; text-align: left;">
        Looking to book, update, or cancel your reservation? I'm here to help—let's chat!
      </p>
    `;
    document.body.appendChild(notificationDiv);

    // Create the Reservo widget button.
    var widgetAnchor = document.createElement("a");
    widgetAnchor.id = "reservo-widget";
    widgetAnchor.href = "https://app.inservo.co.uk/widget/restaurants/6718dc7499e54be8fc16c426/reservo";
    widgetAnchor.className = "iframe";
    widgetAnchor.style.cssText =
      "display: none; position: fixed; right: 24px; bottom: 24px; width: 48px; height: 48px; font-family: 'Inter', sans-serif; font-size: 18px; font-style: normal; font-weight: 400; letter-spacing: 0px;";
    widgetAnchor.innerHTML = `
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <rect width="46" height="46" rx="23" fill="#b2151b" />
          <path
            d="M26 23H28C28.5304 23 29.0391 23.2107 29.4142 23.5858C29.7893 23.9609 30 24.4696 30 25V36L26 32H20C19.4696 32 18.9609 31.7893 18.5858 31.4142C18.2107 31.0391 18 30.5304 18 30V29M22 23C22 23.5304 21.7893 24.0391 21.4142 24.4142C21.0391 24.7893 20.5304 25 20 25H14L10 29V18C10 16.9 10.9 16 12 16H20C20.5304 16 21.0391 16.2107 21.4142 16.5858C21.7893 16.9609 22 17.4696 22 18V23Z"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32.5865 11.5727L32.0002 8L31.4139 11.5727C31.2521 12.5591 30.4958 13.3418 29.5156 13.5376L27.2002 14L29.5156 14.4624C30.4958 14.6582 31.2521 15.4409 31.4139 16.4273L32.0002 20L32.5865 16.4273C32.7483 15.4409 33.5046 14.6582 34.4848 14.4624L36.8002 14L34.4848 13.5376C33.5046 13.3418 32.7483 12.5591 32.5865 11.5727Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="54"
            height="54"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="29.8091"
            y1="11.2399"
            x2="35.1948"
            y2="15.5484"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#ffffff" stop-opacity="0.6" />
            <stop offset="1" stop-color="#ffffff" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="29.8091"
            y1="11.2399"
            x2="35.1948"
            y2="15.5484"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#ffffff" stop-opacity="0.6" />
            <stop offset="1" stop-color="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
    `;
    document.body.appendChild(widgetAnchor);

    // Attach event listener to the notification's close button.
    var notificationClose = document.getElementById("reservo-notification-close");
    if (notificationClose) {
      notificationClose.addEventListener("click", function () {
        notificationDiv.style.opacity = "0";
        notificationDiv.style.visibility = "hidden";
      });
    }
    var widgetUrl =
      (currentScript && currentScript.dataset.widgetUrl) ||
      "http://localhost:5173/widget/restaurants/DEFAULT";
    // Load the external Reservo widget script.
    var reservoScript = document.createElement("script");
    reservoScript.type = "text/javascript";
    reservoScript.async = true;
    reservoScript.src = widgetUrl;
    var firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(reservoScript, firstScript);

    // If not in an iframe, show the widget button and notification.
    if (window === window.top) {
      widgetAnchor.style.display = "inline-block";
      setTimeout(function () {
        notificationDiv.style.visibility = "visible";
        notificationDiv.style.opacity = "1";
      }, 2000);
    }
  }

  // Expose the init function and an open helper.
  window.initReservoWidget = initReservoWidget;
  window.openReservoWidget = function () {
    var widgetButton = document.getElementById("reservo-widget");
    if (widgetButton) {
      widgetButton.click();
    }
  };

  console.log("Reservo widget script loaded. Call initReservoWidget() to initialize.");
})();
