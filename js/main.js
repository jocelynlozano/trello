window.addEventLister("load"function()){
	var form = document.getElementId("form");
	var dentro = document.getElementById("dentro");
	var anadirTarjeta = document.getElementById("anadirTarjeta");
	var boton = document.getElementById("boton");
	var texto = document.getElementById("texto");

	dentro.classList.add("ocultar");
	form.addEventListener("click", mostrar);
	function mostrar() {
		añadirTarjeta.classList.add("ocultar");
		dentro.classList.remove("ocultar");
};
