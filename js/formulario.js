const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
	matricula: /^[Z0-9\_\-]{1,40}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	materia: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.


}

const campos = {
	matricula: false,
	nombre: false,
	apellido: false,
	materia: false,
	nota: false
}
function validarNota() {
	var nota = document.getElementById("nota").value;
	if (nota < 0 || nota > 100 || isNaN(nota)) {
		alert("Error: la nota debe ser un número entre 0 y 100.");
		return false;
	}
	Inser()
	return true;
}
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "matricula":
			validarCampo(expresiones.matricula, e.target, 'matricula');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "materia":
			validarCampo(expresiones.materia, e.target, 'materia');
		break;
		case "nota":
			validarCampo(expresiones.nota, e.target, 'nota');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
	Inser()
});

// MOSTRAR DATOS EN TABLA

function Inser(){
 var matricula=document.getElementById("matricula").value
 var nombre=document.getElementById("nombre").value
 var apellido=document.getElementById("apellido").value
 var materia=document.getElementById("materia").value
 var nota=document.getElementById("nota").value

if(materia!="" & nombre!="" & apellido!="" & materia!="" & nota!=""){
	var cuerpo=`
	<tr>
	<th>${nombre}</th>
	<th>${apellido}</th>
	<th>${matricula}</th>
	<th>${materia}</th>
	<th>${nota}</th>
	</tr>
	`;
   document.getElementById("cuerpo").innerHTML+=cuerpo
}
}


function r(){
	var matricula=document.getElementById("matricula").value=""
	var nombre=document.getElementById("nombre").value=""
	var apellido=document.getElementById("apellido").value=""
	var materia=document.getElementById("materia").value=""
	var nota=document.getElementById("nota").value=""
}
