document.addEventListener("DOMContentLoaded", function () {

  const checkContainerInterval = setInterval(() => {
  const destCont = document.getElementById('myContainer');
  if (destCont) {
  destCont.appendChild(iframe);
  clearInterval(checkContainerInterval);
  console.log('destCont', destCont);
}
}, 200)

  const parentDomain = window.location.origin;

  const iframe = document.createElement('iframe');
  iframe.src = 'http://localhost:3000';
  iframe.width = '1200';
  iframe.height = '800';
  iframe.frameBorder = '0';

  iframe.addEventListener('load', function () {
  iframe.contentWindow.postMessage(parentDomain, 'http://localhost:3000');
});
});
