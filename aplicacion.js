//Se corrigio las rutas del CCS y del JS para conección  con el html
//se agrego async en la function 
//Ivan Macias 4/5


const baseEndpoint = 'https://api.github.com/';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.getElementsByClassName('name');
const $b = document.getElementsByClassName('blog');
const $l = document.getElementsByClassName('location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(response);
  const data= await response.json
  nombre.textContent = '${data.name}';
  blog.textContent = '${data.blog}';
  loc.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nombre.texconContent = `Algo salió mal: ${err})`
  
}

displayUser('stolinski').catch(handleError);