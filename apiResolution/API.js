
const Correo = document.querySelector('#Correo').value;
const contraseña = document.querySelector('#contraseña').value;

const form = document.querySelector('#formulario');

const get_data = () =>{
    const datos = new FormData(form);
    const datosprocesados = Object.fromEntries(datos.entries());
    form.reset();
    return datosprocesados
}

const full = async () => {

    const newUser = get_data();

    try{
        const response = await fetch('http://localhost:3000/users',{
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        if(response.ok){
            const jsonrespuesta = await response.json();

            const {email, username , password} = jsonrespuesta;

            alert("felicidades te registraste ;)");

        }
    }

    catch(error){
        console.log(error);
    }
}
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    full();
})

const filtro ={
    const url = await fetch('http://localhost:3000/users');
    .then(response => response.json())
    .then(datos => {
      // Buscar el usuario que coincida con los valores de los inputs
      const usuario = datos.usuarios.find(usuario => {
        return usuario.nombreUsuario === nombreUsuario && usuario.contrasena === contrasena;
      });

      // Verificar si se encontró el usuario
      if (usuario) {
        alert("¡Bienvenido, " + nombreUsuario + "!");
        // Aquí podrías redirigir al usuario a otra página o mostrar otro contenido
      } else {
        alert("Nombre de usuario o contraseña incorrectos.");
      }
    })
    catch(error){
        console.error(error);
    };
};
