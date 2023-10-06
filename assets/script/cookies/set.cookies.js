// Establecemos una cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  /**--------------------------------------------|
   # Función para obtener el valor de una cookie |
   ---------------------------------------------*/ 
  function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  /**==========================================================================
   # Función para incrementar el contador de visitantes y mostrarlo en el sitio
   ============================================================================*/
  function incrementCounter() {
    let counter = parseInt(getCookie("visitorCount")) || 0;
    counter++;
    setCookie("visitorCount", counter, 365); 
    document.getElementById("counter").textContent = "Visitantes: " + counter;
  }
  
  window.onload = function() {
    incrementCounter();
  };
  
