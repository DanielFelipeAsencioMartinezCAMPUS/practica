const form = document.querySelector('#form');


const get_data = () =>{
    const datos = new FormData(form);
    const datosprocesados = Object.fromEntries(datos.entries());
    form.reset();
    return datosprocesados
}

const full = async () => {

    const user = get_data();

    try{
        const response = await fetch('http://localhost:3000/users',{
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user)
        });
        if(response.ok){
            const jsonrespuesta = await response.json();

            const {email, username , password} = jsonrespuesta;
            console.log({email,username,password});
            

        }
        const pruebas = await fetch('http://localhost:3000/users');
    }

    catch(error){
        console.log(error);
    }

}

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    full();
})