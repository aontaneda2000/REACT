/***************************************************/
/* DESTRUCTURING ==> desestructuración de Objetos */
/**************************************************/
/* La asignación desestructurante también funciona con objetos. */

const usuario = {
  nombre: "Jesús",
  edad: 30,
  correo: "jesus@email.com",
};

// 1 ASIGNAR los MISMOs nombres de clave del OBJETO  USUARIO EN desestructuración
// 2 REMPLAZAR EL NOMBRE : DEL OBJETO EN CASO DE TENER OTRA CONSTANTE CON ESE NOMBRE
// 3 = VALOR POR DEFECTO EN CASO DE NORECIBIR LA INF
const { nombre: n, edad = "S/E", correo } = usuario;

const nombre = "Juanito";

console.log(
  `mi nombre es ${n} y tengo la edad de ${edad} y mi correo es ${correo}`
);

// => 1 OBTENER DATOS DE UN FORMULARIO===========
const dataForm = {
  correo: "js@correo.com",
  password: "9854474",
};

/* RECIBE INFORMACION DESTRUCTURACION */
function enviarFormulario({ correo, password }) {
  /* DESTRUCTURACION aqui o en zona de parametros*/
  // const {correo, password} = obj

  console.log(`El usuario es: ${correo} y la contraseña es ${password}`);
}
/* recibe obj */
enviarFormulario(dataForm);
