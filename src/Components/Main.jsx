import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState(0);
    const [listaContatos, setListacontatos] = useState([]);
    const [estado, setEstado] = useState("");

    const registrar = (event) =>{
      event.preventDefault();
      alert("Deu certo");
      setListacontatos([...listaContatos,
      {
        nomeSalvo: nome,
        telefoneSalvo: telefone,
        estadoSalvo: estado,
      }
    ]);
    };

    console.table(listaContatos);

    return(
      <main>
        <form action="" onSubmit={registrar}>
            <label htmlFor="nome">Nome:</label>
            <input
            type="text"
            nome="nome-contato"
            id="nome"
            onChange={
            (event)=> setNome(event.target.value)}/>
            

            <label htmlFor="telefone">Telefone:</label>
            <input type="tel"
            name="telefone-contato"
            id="telefone"
            value={telefone}
            onChange={
            (event)=> setTelefone(event.target.value)}/>
           

            <label htmlFor="estado">Estado:</label>
            <input type="text"
            nome="estado-contato"
            id="estado"
            value={estado}
            onChange={
            (event)=> setEstado(event.target.value)}/>
            
            <input type="reset" value="Apagar" />
            <button> Salvar </button>
        </form>
         
        {
      listaContatos.map((telefone, index )=>
        <div key={index} >
              <p>{telefone.nomeSalvo}</p>
              <p>{telefone.telefoneSalvo}</p>
              <p>{telefone.estadoSalvo}</p>
        </div>)}
      </main>
    );
}

