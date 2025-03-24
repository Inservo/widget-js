<script>
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready – initializing widget');
    // Your widget code here:
    (function() {
      // 1. Create overlay container for the modal (hidden by default)
      var modalOverlay = document.createElement('div');
      modalOverlay.id = 'reservation-modal-overlay';
      Object.assign(modalOverlay.style, {
        position: 'fixed', top: '0', left: '0',
        width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'none', alignItems: 'center', justifyContent: 'center',
        zIndex: '9999'
      });

      // 2. Create the iframe for the reservation widget content
      var resIframe = document.createElement('iframe');
      resIframe.src = 'https://app.inservo.co.uk/widget/restaurants/6718dc7499e54be8fc16c426';
      resIframe.width = '80%'; 
      resIframe.height = '80%'; 
      resIframe.style.border = 'none';
      resIframe.setAttribute('title', 'Reservation Widget');

      // 3. Create a close button for the modal
      var closeBtn = document.createElement('button');
      closeBtn.textContent = '×';
      Object.assign(closeBtn.style, {
        position: 'absolute', top: '20px', right: '20px',
        fontSize: '24px', color: '#fff', background: 'transparent', border: 'none',
        cursor: 'pointer'
      });
      closeBtn.onclick = function() {
        modalOverlay.style.display = 'none';
      };

      // 4. Append iframe and close button to the overlay
      modalOverlay.appendChild(closeBtn);
      modalOverlay.appendChild(resIframe);
      document.body.appendChild(modalOverlay);

      // 5. Create an "Open Reservation" button that toggles the modal
      var openBtn = document.createElement('button');
      openBtn.id = 'open-reservation-btn';
      openBtn.textContent = 'Book Now';
      Object.assign(openBtn.style, {
        position: 'fixed', bottom: '20px', right: '20px',
        padding: '10px 20px', fontSize: '16px',
        backgroundColor: '#0069d9', color: '#fff', border: 'none', borderRadius: '5px',
        cursor: 'pointer', zIndex: '9999'
      });
      openBtn.onclick = function() {
        modalOverlay.style.display = 'flex';
      };

      // 6. Append the open button to the page
      document.body.appendChild(openBtn);
      console.log('Widget added to the page');
    })();
  });
</script>

