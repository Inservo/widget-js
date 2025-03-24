(function () {
  // Create a button element
  var button = document.createElement("button");
  button.innerText = "Click Me";

  // Attempt to insert the button after the current script tag
  var currentScript = document.currentScript;
  if (currentScript && currentScript.parentNode) {
    currentScript.parentNode.insertBefore(button, currentScript.nextSibling);
  } else {
    // Fallback: Append to the body if currentScript isn't available
    document.body.appendChild(button);
  }
})();
