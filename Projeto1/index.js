var container = document.getElementById("app")
//var titulo = document.createElement("h1")
//titulo.innerHTML = "Título inserido por javascript"
//container.appendChild(titulo)

function Contador(props){

    //let numero = 0;
    const [numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1)
        console.log("Somei e ficou= " + numero)
    }

    function subtrair(){
        setNumero(numero - 1)
        console.log("Subtraí e ficou= " + numero)
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair} >-</button>
        </React.Fragment>
        
    )
}

function App(){
    return (
        <React.Fragment>
            <h1>Vote no seu preferido</h1>
            <Contador titulo="Bring Me The Horizon"/>
            <Contador titulo="Avenged Sevenfold"/>
            <Contador titulo="Slipknot"/>
        </React.Fragment>
        
        
    );
}



ReactDOM.render(React.createElement(App, null, null), container)