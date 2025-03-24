// Immediately Invoked Function to avoid polluting global scope
(function() {
    // 1. Create a container <div> for the chat widget
    var widgetContainer = document.createElement('div');
    widgetContainer.id = 'reserv-widget-container';
    // Apply basic styles: fixed position at bottom-right, some width/height
    widgetContainer.style.position = 'fixed';
    widgetContainer.style.bottom = '20px';
    widgetContainer.style.right = '20px';
    widgetContainer.style.width = '400px';
    widgetContainer.style.height = '600px';
    widgetContainer.style.zIndex = '9999';  // ensure it overlays other elements

    // 2. Create the iframe element pointing to the widget URL
    var iframe = document.createElement('iframe');
    iframe.src = 'https://app.inservo.co.uk/widget/restaurants/6718dc7499e54be8fc16c426/reservo';  // URL of the chat widget content
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = 'none';       // remove default iframe border
    iframe.setAttribute('title', 'Reservo Chat');  // accessibility: title for the iframe

    // 3. Insert the iframe into the container, and append container to page
    widgetContainer.appendChild(iframe);
    document.body.appendChild(widgetContainer);
})();
