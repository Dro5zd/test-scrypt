document.addEventListener("DOMContentLoaded", function () {

  const scriptElement = document.getElementById('rh-module-script');
  const customersAffiliateCode = scriptElement.getAttribute('data-affiliate-code');
  const iframePlacementId = scriptElement.getAttribute('data-iframe-placement-id');

  const parentDomain = window.location.origin;

  const urlWithSettings = `http://localhost:3002/?affiliateCode=${customersAffiliateCode}`;

  const iframe = document.createElement('iframe');
  iframe.src = urlWithSettings;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = '0';

  const checkContainerInterval = setInterval(() => {
    const container = document.getElementById(iframePlacementId);
    if (container) {
      container.appendChild(iframe);
      console.log('parentDomain', parentDomain);
      // відправляємо parentDomain на сервер
      clearInterval(checkContainerInterval);
    }
  }, 200)

});

