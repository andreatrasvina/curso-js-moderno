
const criptomonedasSelect = document.querySelector('#criptomonedas');

//promise que resuelve al cargar las criptomonedas
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
        resolve(criptomonedas);
});


document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();
})

function consultarCriptomonedas(){
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

    fetch(url)
        .then(consulta => consulta.json())
        .then(resultado => obtenerCriptomonedas(resultado.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas))
}

//llenando el select de options con el nombre de la criptocoin
function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(criptomoneda => {
        console.log(criptomoneda.CoinInfo.Name);

        const { FullName, Name } = criptomoneda.CoinInfo;
        const option = document.createElement('OPTION');
        option.value = Name;
        option.textContent = FullName;

        criptomonedasSelect.appendChild(option);
    });
}