import { createContext, useEffect, useState } from "react";



export const LocaisColetaContext = createContext()

export const LocaisColetaContextProvider = ({children}) => {
  const [locaisColeta, setLocaisColeta] = useState([])
  const residuos = [
    'Vidro',
    'Plástico',
    'Metal',
    'Orgânico',
    'Papel',
    'Baterias'
  ];

    useEffect(() => {
        getLocaisColeta()
      }, [])

    function getLocaisColeta(){
        fetch("http://localhost:3000/locaisColeta")
        .then(response => response.json())
        .then(dados => setLocaisColeta(dados))
        .catch(erro => console.log(erro))
    }

    function getLocalColetaPorId(id){
        fetch("http://localhost:3000/locaisColeta/" + id)
        .then(response => response.json())
        .then(dados => setLocaisColeta(dados))
        .catch(erro => console.log(erro))
      }
    
    function cadastrarLocal(local){
        try {
            fetch("http://localhost:3000/locaisColeta", {
                method: "POST",
                body: JSON.stringify(local),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(() => {
                alert("Local de Coleta cadastrado com sucesso!")
                getLocaisColeta()
                window.location.href = "/dashboard"
            })
            .catch(() => alert("Erro ao cadastrar Local de Coleta!"))
        } catch (error) {
    
        }
    }

    function removerLocal(id){
        try {
            fetch("http://localhost:3000/locaisColeta/" + id, {
                method: "DELETE"
            })
            .then(() => {
                alert("Local de Coleta deletado com sucesso!")
                getLocaisColeta()
                window.location.href = "/locais"

            })
            .catch(() => alert("Erro ao deletar Local de Coleta!"))
        } catch (error) {
    
        }
    }

    function editarLocal(local, id){
        
        fetch("http://localhost:3000/locaisColeta/" + id, {
          method: "PUT",
          body: JSON.stringify(local),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => { 
          alert("Local de Coleta alterado com sucesso!")
          getLocaisColeta()
          window.location.href = "/locais"

        })
        .catch(() => alert("Erro ao alterar Local de Coleta!"))
      }
        

    return (
        <LocaisColetaContext.Provider value={{residuos, locaisColeta, getLocaisColeta, getLocalColetaPorId, editarLocal, cadastrarLocal, removerLocal}}>
          {children}
        </LocaisColetaContext.Provider>
      )
}

