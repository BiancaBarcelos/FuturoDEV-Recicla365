import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UsuariosContext } from "../../context/UsuariosContext";
import { Link } from "react-router-dom";
import "./style.css"
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";


function FormUsuario({usuario, acao, id}) {
    const [logradouro,setLogradouro] = useState(usuario && usuario.logradouro ? usuario.logradouro :'')
    const [bairro,setBairro] = useState(usuario && usuario.bairro ? usuario.bairro :'')
    const [cidade,setCidade] = useState(usuario && usuario.cidade ? usuario.cidade :'')
    const [estado,setEstado] = useState(usuario && usuario.estado ? usuario.estado :'')
    const {cadastrarUsuario, editarUsuario, removerUsuario} = useContext(UsuariosContext)
    const {register, handleSubmit, setValue, getValues, formState: {errors}} = useForm();
  
    const registraUsuario = async(formValue)=>{
      console.log(formValue)
      await cadastrarUsuario(formValue)
    }

    const mudarUsuario = async (formValue) => {
      await editarUsuario(formValue, id)
    }
  
    const buscarCep = () => {
      let cep = getValues('cep')
  
      if(!!cep && cep.length == 8){
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then(dados => {
          setLogradouro(dados.logradouro)
          setValue('logradouro', dados.logradouro)
          setBairro(dados.bairro)
          setValue('bairro', dados.bairro)
          setCidade(dados.localidade)
          setValue('cidade', dados.localidade)
          setEstado(dados.uf)
          setValue('estado', dados.uf)
        })
        .catch(error => console.log(error))
      }
    }

    function interacaoForm(acao) {
      if(acao==='cadastrar'){
        return (
          <>
            <button className="btn width-1 btn1" type="submit">Cadastrar</button>
            <Link className="btn2" to="/login">Voltar para Login</Link>
          </>
        )
        
      } else {
        return (
          <>
            <button className="btn width-1 btn1 marginAuto" type="submit">Salvar</button>
          </>
        )
      }
    }

    return (
        <form className="containerCadastro" onSubmit={acao === "editar" ? handleSubmit(mudarUsuario) : handleSubmit(registraUsuario)}>
          <h2>{acao === 'cadastrar' ? 'Cadastrar Usuário': 'Editar Usuário'}</h2>
          <div className="itensForm formRow">
              <TextField
                  id="nome"
                  className="width-2"
                  margin="normal" 
                  label="Nome" 
                  defaultValue={usuario && usuario.nome ? usuario.nome :''}
                  variant="outlined"
                  color={errors?.nome ? "error" : "success"}
                  helperText={errors?.nome && `${errors.nome?.message}`}
                  
                  {...register("nome", {
                      required: "Esse campo é obrigatório"
                  })}
              />
              <TextField
                id="cpf"
                className="width-1"
                margin="normal" 
                label="CPF" 
                defaultValue={usuario && usuario.cpf ? usuario.cpf :''}
                variant="outlined"
                color={errors?.cpf ? "error" : "success"}
                helperText={errors?.cpf && `${errors.cpf?.message}`}
                inputProps={{ maxLength: 11 }}
                
                {...register("cpf", {
                    required: "Esse campo é obrigatório",
                })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="sexo"
                className="width-4"
                margin="normal" 
                label="Sexo" 
                defaultValue={usuario && usuario.sexo ? usuario.sexo :''}
                variant="outlined"
                color={errors?.sexo ? "error" : "success"}
                helperText={errors?.sexo && `${errors.sexo?.message}`}
                
                {...register("sexo", {
                    required: "Esse campo é obrigatório"
                })}
            />
            <TextField
                id="dataNascimento"
                className="width-4"
                margin="normal" 
                label="Data de Nascimento" 
                defaultValue={usuario && usuario.dataNascimento ? usuario.dataNascimento :''}
                variant="outlined"
                color={errors?.dataNascimento ? "error" : "success"}
                helperText={errors?.dataNascimento && `${errors.dataNascimento?.message}`}
                
                {...register("dataNascimento", {
                    required: "Esse campo é obrigatório"
                })}
            />


            {/* <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale='en-gb'>
              <DatePicker
                  id="dataNascimento"
                  label="Data de Nascimento"
                  defaultValue={usuario && usuario.dataNascimento? dayjs(usuario.dataNascimento) :null }
                  helperText={errors?.dataNascimento && `${errors.dataNascimento?.message}`}
                  {...register("dataNascimento", {
                      required: "Esse campo é obrigatório"
                  })}
                  slotProps={
                    {
                      textField: {
                         variant: 'outlined', 
                         color:"success", 
                         margin:"normal",
                      },
                    }
                  }
              />
            </LocalizationProvider> */}

          </div>
          
          <div className="formRow">
            <TextField
                id="email"
                className="width-4"
                margin="normal" 
                label="e-Mail" 
                type="email"
                defaultValue={usuario && usuario.email ? usuario.email :''}
                variant="outlined"
                color={errors?.email ? "error" : "success"}
                helperText={errors?.email && `${errors.email?.message}`}
                
                {...register("email", {
                    required: "Esse campo é obrigatório"
                })}
            />
            <TextField
                id="senha"
                className="width-4"
                margin="normal" 
                label="Senha"
                defaultValue={usuario && usuario.senha ? usuario.senha :''}
                type={acao === 'editar' ? "text" : "password"}
                variant="outlined"
                color={errors?.senha ? "error" : "success"}
                helperText={errors?.senha && `${errors.senha?.message}`}
                
                {...register("senha", {
                    required: "Esse campo é obrigatório"
                })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="cep"
                className="width-1"
                margin="normal" 
                label="CEP" 
                defaultValue={usuario && usuario.cep ? usuario.cep :''}
                variant="outlined"
                name="cep"
                color={errors?.cep ? "error" : "success"}
                helperText={errors?.cep && `${errors.cep?.message}`}
                inputProps={{ maxLength: 8 }}

                {...register("cep", {
                    required: "Esse campo é obrigatório",
                    onBlur: () => buscarCep()
                })}
            />
            <TextField
                id="numero"
                className="width-1"
                margin="normal" 
                label="Nº"
                defaultValue={usuario && usuario.numero ? usuario.numero :''}
                variant="outlined"
                color={errors?.numero ? "error" : "success"}
                helperText={errors?.numero && `${errors.numero?.message}`}
                
                {...register("numero", {
                    required: "Esse campo é obrigatório"
                })}
            />
            <TextField
                id="complemento"
                className="width-1"
                margin="normal" 
                label="Complemento" 
                defaultValue={usuario && usuario.complemento ? usuario.complemento :''}
                variant="outlined"
                color={errors?.complemento ? "error" : "success"}
                helperText={errors?.complemento && `${errors.complemento?.message}`}
                
                {...register("complemento", {
                  required: "Esse campo é obrigatório"
              })}
            />

          </div>
          
          <div className="formRow">
            <TextField
                id="logradouro"
                className="width-3"
                margin="normal" 
                label="Logradouro"
                name="logradouro" 
                value={logradouro}
                onChange={e => setLogradouro(e.target.value)}
                variant="outlined"
                color={errors?.logradouro ? "error" : "success"}
                helperText={errors?.logradouro && `${errors.logradouro?.message}`}
                
                {...register("logradouro", {
                    required: "Esse campo é obrigatório"
                })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="bairro"
                className="width-1"
                margin="normal" 
                label="Bairro"
                name="bairro" 
                value={bairro}
                onChange={e => setBairro(e.target.value)}
                variant="outlined"
                color={errors?.bairro ? "error" : "success"}
                helperText={errors?.bairro && `${errors.bairro?.message}`}
                
                {...register("bairro", {
                    required: "Esse campo é obrigatório"
                })}
            />
            <TextField
                id="cidade"
                className="width-1"
                margin="normal" 
                label="Cidade"
                name="cidade" 
                value={cidade}
                onChange={e => setCidade(e.target.value)}
                variant="outlined"
                color={errors?.cidade ? "error" : "success"}
                helperText={errors?.cidade && `${errors.cidade?.message}`}
                
                {...register("cidade", {
                    required: "Esse campo é obrigatório"
                })}
            />
            <TextField
                id="estado"
                className="width-1"
                margin="normal" 
                label="Estado"
                name="estado" 
                value={estado}
                onChange={e => setEstado(e.target.value)}
                variant="outlined"
                color={errors?.estado ? "error" : "success"}
                helperText={errors?.estado && `${errors.estado?.message}`}
                
                {...register("estado", {
                    required: "Esse campo é obrigatório"
                })}
            />
          </div>
         
          
          <div className="linhaBtn">
            {interacaoForm(acao)}
          </div>
        </form>
    )
}

export default FormUsuario