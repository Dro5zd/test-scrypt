document.addEventListener("DOMContentLoaded", function () {

  const scriptElement = document.getElementById('rh-module-script');

// Отримання значення атрибута data-affiliate-code
  const customersAffiliateCode = scriptElement.getAttribute('data-affiliate-code');

// Отримання значення атрибута data-iframe-placement-id
  const iframePlacementId = scriptElement.getAttribute('data-iframe-placement-id');

  console.log(scriptElement, customersAffiliateCode, iframePlacementId);




  // const queryString = window.location.search;
  // const scriptSearchParams = new URLSearchParams(queryString);
  // console.log('queryString test', queryString)
  // console.log('scriptSearchParams test', scriptSearchParams)

  // const customersAffiliateCode = scriptSearchParams.get('affiliateCode');
  // const customersAffiliateCode = document.currentScript;
  console.log('customersAffiliateCode test', customersAffiliateCode)
  // const iframePlacementId = scriptSearchParams.get('iframePlacementId');
  // const iframePlacementId = document.currentScript.getAttribute('data-iframe-placement-id');

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
  // iframe.src = 'http://localhost:3002/';
  iframe.src = urlWithSettings;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = '0';

  const checkContainerInterval = setInterval(() => {
    const container = document.getElementById(iframePlacementId);
    if (container) {
      container.appendChild(iframe);
      iframe.contentWindow.postMessage(parentDomain, 'http://localhost:3000/');
      // iframe.contentWindow.postMessage(searchParams, 'https://module5.rhelpers.com/');
      clearInterval(checkContainerInterval);
    }
  }, 200)

  // iframe.addEventListener('load', function () {
  //   // iframe.contentWindow.postMessage(parentDomain, 'https://module5.rhelpers.com/');
  //   // console.log('parentDomain test шт ищч', parentDomain)
  //   // iframe.contentWindow.postMessage(parentDomain, 'http://localhost:3002/');
  // });
});
