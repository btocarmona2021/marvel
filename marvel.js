const apiKey = '89b8da0969692afbc520e5af1e286e54';
const privateKey = '9de3a4924d3e167be39d38b05da8035d6059a796';
const hash = '55d573c484cb82e6edeeec598332662c'
const limit = 100

const sizePhoto ='/detail.'
const contenedor = document.querySelector('.contenedor');
const boton = document.querySelector('#buscar');
boton.addEventListener('click',function () {
    contenedor.innerHTML=''
    let tipo =document.querySelector('#tipo').value;

    const url = `https://gateway.marvel.com:443/v1/public/${tipo}`;
    const urlCompleto = `${url}?limit=${limit}&ts=1&apikey=${apiKey}&hash=${hash}`
    console.log(urlCompleto);
    fetch(urlCompleto).then(async (response) => {
        const respuesta = await response.json();
        const {results} = respuesta.data;

        results.forEach((personaje)=>{
            const card=document.createElement('DIV');
            contenedor.appendChild(card)
            card.classList.add('card');
            const id = document.createElement('P');
            id.classList.add('id-personaje')
            id.textContent= personaje.id;
            card.appendChild(id);
            const nombrePersonaje = document.createElement('P');
            nombrePersonaje.classList.add('nombre-personaje');
            nombrePersonaje.textContent=personaje.name ? personaje.name:personaje.title ? personaje.title : personaje.fullName;
            card.appendChild(nombrePersonaje);
            const imagenPersonaje = document.createElement('IMG');
            imagenPersonaje.classList.add('imagen-personaje');
            const extension = personaje.thumbnail.extension;
            imagenPersonaje.src = personaje.thumbnail.path + sizePhoto + extension;
            card.appendChild(imagenPersonaje);
            const descrip = document.createElement('P');
            descrip.classList.add('descripcion');
            descrip.textContent = personaje.description;
            card.appendChild(descrip);
        })
    })
})
