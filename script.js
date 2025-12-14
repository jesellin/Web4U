/* Script para resaltar la navegación "Estás aquí" / "You are here" */
(function(){
  // Seleccionamos todos los enlaces de la barra de navegación
  const links = document.querySelectorAll('.site-nav a');
  
  // Obtenemos el nombre del archivo actual de la URL
  const path = location.pathname; 
  const cur = path.substring(path.lastIndexOf('/') + 1);

  // Borramos si ya existía algún cartel de "here" previo
  const existing = document.querySelector('.site-nav .here'); 
  if(existing) existing.remove();
  
  links.forEach(a=>{
    const href = a.getAttribute('href');
    if(!href) return; // Si no tiene href, lo ignoramos

    // Comparamos si el enlace coincide con la página actual
    // También controlamos el caso de la raíz (carpeta vacía) que suele ser index.html
    if(href === cur || (cur === '' && href === 'index.html') || (cur === '' && href === 'index_en.html')){
      
      const d = document.createElement('div'); 
      d.className = 'here'; 
      
      // Detectamos el idioma del HTML para poner el texto correcto
      if(document.documentElement.lang === 'en') {
          d.textContent = 'You are here';
      } else {
          d.textContent = 'Estás aquí';
      }
      
      // Añadimos el cartelito debajo del enlace
      a.parentNode.appendChild(d);
    }
  });
})();