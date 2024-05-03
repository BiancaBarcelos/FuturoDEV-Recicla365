import { createContext, useEffect, useState } from "react";

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    getUsuarios()
  }, [])

  function getUsuarios(){
    fetch("http://localhost:3000/usuarios")
    .then(response => response.json())
    .then(dados => setUsuarios(dados))
    .catch(erro => console.log(erro))
  }

  function getUsuarioPorId(id){
    fetch("http://localhost:3000/usuarios/" + id)
    .then(response => response.json())
    .then(dados => setUsuarios(dados))
    .catch(erro => console.log(erro))
  }

  async function login(email, senha){
    try {
      
      const response = await fetch("http://localhost:3000/usuarios")
      const dados = await response.json()

      let usuarioExiste = false

      dados.map(usuario => {
        if(usuario.email == email){
          usuarioExiste = true
          if(usuario.senha == senha){
            localStorage.setItem("isAutenticado", true)
            localStorage.setItem("idUsuario", usuario.id)
            window.location.href = "/dashboard"
            return
          }

          alert("Senha incorreta!")
          return
        }

      })

      if(!usuarioExiste){
        alert("Não existe um usuário com esse email!")
      }

    } catch {

    }
  }

  function logout() {
    localStorage.setItem("isAutenticado", false)
    localStorage.removeItem("idUsuario")
    window.location.href = "/login"
  }

  function validarRegistro(documento){
    
      let usuarioJaCadastrado = false
      console.log(documento)
      usuarios.map(usuario => {
        if(usuario.cpf === documento){
          usuarioJaCadastrado = true
          
        }
      })
      return usuarioJaCadastrado

  }
  function cadastrarUsuario(usuario){

    try {
      const documentoAtual = validarRegistro(usuario.cpf)
      console.log('existe?',documentoAtual)
      if (documentoAtual) {
        alert("Usuário já cadastrado!")
      }else {
        fetch("http://localhost:3000/usuarios", {
          method: "POST",
          body: JSON.stringify(usuario),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => { 
          alert("Usuário cadastrado com sucesso!")
          getUsuarios()
        })
        .catch(() => alert("Erro ao cadastrar Usuário!"))
        

      }
    } catch (error) {
    
    }
  }

  function editarUsuario(usuario, id){
    fetch("http://localhost:3000/usuarios/" + id, {
      method: "PUT",
      body: JSON.stringify(usuario),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => { 
      alert("Usuário alterado com sucesso!")
      getUsuarios()
    })
    .catch(() => alert("Erro ao alterar Usuário!"))
  }

  function removerUsuario(id){
    fetch("http://localhost:3000/usuarios/" + id, {
      method: "DELETE",
    })
    .then(() => { 
      alert("Usuário deletado com sucesso!")
      getUsuarios()
    })
    .catch(() => alert("Erro ao deletar Usuário!"))
  }


  return (
    <UsuariosContext.Provider value={{usuarios, login, editarUsuario, removerUsuario, cadastrarUsuario, getUsuarioPorId, logout}}>
      {children}
    </UsuariosContext.Provider>
  )
}

