const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Se agrega un '.name' debido a que es una clase 
const $b = document.querySelector('.blog'); // igual con blog ya que en el HTML es una clase no un id
// const $l = document.querySelector('.location'); Se omite esta line ya que no existe en HTML
//agrega el async a la funcion
async function displayUser(username) {
  //Se agrega el try catch para la funcion await 
  try{
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    $n.textContent = `${data.name}`; //se agregan backtics
    $b.textContent = `${data.blog}`; // Se cambian comillas simples por backtics
    // $l.textContent = '${data.location}';

  }catch(err){
    handleError(err);

  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski');