(function () {
  var button = document.createElement("button");
  button.innerText = "Book Now";

  button.style.padding = "8px 12px";
  button.style.backgroundColor = "#000000";
  button.style.radius = "30px";
  button.style.color = "#FFFFFF"

  // Attempt to insert the button after the current script tag
  var currentScript = document.currentScript;
  if (currentScript && currentScript.parentNode) {
    currentScript.parentNode.insertBefore(button, currentScript.nextSibling);
  } else {
    // Fallback: Append to the body if currentScript isn't available
    document.body.appendChild(button);
  }
})();
