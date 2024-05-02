document.addEventListener("DOMContentLoaded", function () {

  const scriptSearchParams = new URLSearchParams(window.location.search);

  const customersAffiliateCode = scriptSearchParams.get('affiliateCode')
  const iframePlacementId = scriptSearchParams.get('iframePlacementId')

  const checkContainerInterval = setInterval(() => {
    const container = document.getElementById(iframePlacementId);
    if (container) {
      container.appendChild(iframe);
        // iframe.contentWindow.postMessage(parentDomain, 'http://localhost:3000/');
      clearInterval(checkContainerInterval);
    }
  }, 200)

  const parentDomain = window.location.origin;

  console.log('parentDomain test', parentDomain)

  function objectToSearchParams(value) {
    const params = new URLSearchParams();

    params.append('affiliateCode', value);

    return params;
  }

  const searchParams = objectToSearchParams(customersAffiliateCode);

 const urlWithSettings = `http://localhost:3002/?${searchParams}`;

  const iframe = document.createElement('iframe');
  iframe.src = urlWithSettings;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = '0';
});
