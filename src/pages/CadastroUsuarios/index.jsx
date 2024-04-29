import { TextField } from "@mui/material";
import "../../index.css"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UsuariosContext } from "../../context/UsuariosContext";
import { Link } from "react-router-dom";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/en-gb';






 
function CadastroUsuarios() {

  const {cadastrarUsuario} = useContext(UsuariosContext)
  
  const {register, handleSubmit, formState: {errors}} = useForm();

  async function registraUsuario(formValue) {
    await cadastrarUsuario(formValue)
    console.log(formValue)
  }

   return(

     <div>
      <div>
        <img src="./src/assets/logo_recicla.svg" alt="" />
        <form onSubmit={handleSubmit(registraUsuario)}>
        <div className="formRow">
            <TextField
                id="nome"
                className="fullWidth"
                margin="normal" 
                label="Nome" 
                variant="outlined"
                color={errors?.nome ? "error" : "success"}
                helperText={errors?.nome && `${errors.nome?.message}`}
                
                {...register("nome", {
                    required: "Esse campo é obrigatório"
                })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="cpf"
                className="fullWidth"
                margin="normal" 
                label="CPF" 
                variant="outlined"
                color={errors?.cpf ? "error" : "success"}
                helperText={errors?.cpf && `${errors.cpf?.message}`}
                
                {...register("cpf", {
                    required: "Esse campo é obrigatório"
                })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="sexo"
                className="fullWidth"
                margin="normal" 
                label="Sexo" 
                variant="outlined"
                color={errors?.sexo ? "error" : "success"}
                helperText={errors?.sexo && `${errors.sexo?.message}`}
                
                // {...register("sexo", {
                //     required: "Esse campo é obrigatório"
                // })}
            />
          </div>
          <div className="formRow">
            <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale='en-gb'>
              <DatePicker
                  id="dataNascimento"
                  label="Data de Nascimento"
                  slotProps={{textField: { variant: 'outlined', color:"success"}}} 
                 
              />
            </LocalizationProvider>

          </div>
          <div className="formRow">
            <TextField
                id="email"
                className="fullWidth"
                margin="normal" 
                label="e-Mail" 
                type="email"
                variant="outlined"
                color={errors?.email ? "error" : "success"}
                helperText={errors?.email && `${errors.email?.message}`}
                
                // {...register("email", {
                //     required: "Esse campo é obrigatório"
                // })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="senha"
                className="fullWidth"
                margin="normal" 
                label="Senha" 
                type="password"
                variant="outlined"
                color={errors?.senha ? "error" : "success"}
                helperText={errors?.senha && `${errors.senha?.message}`}
                
                // {...register("senha", {
                //     required: "Esse campo é obrigatório"
                // })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="cep"
                className="fullWidth"
                margin="normal" 
                label="CEP" 
                variant="outlined"
                color={errors?.cep ? "error" : "success"}
                helperText={errors?.cep && `${errors.cep?.message}`}
                
                // {...register("cep", {
                //     required: "Esse campo é obrigatório"
                // })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="numero"
                className="fullWidth"
                margin="normal" 
                label="Nº" 
                variant="outlined"
                color={errors?.numero ? "error" : "success"}
                helperText={errors?.numero && `${errors.numero?.message}`}
                
                // {...register("numero", {
                //     required: "Esse campo é obrigatório"
                // })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="complemento"
                className="fullWidth"
                margin="normal" 
                label="Complemento" 
                variant="outlined"
                color={errors?.complemento ? "error" : "success"}
                helperText={errors?.complemento && `${errors.complemento?.message}`}
                
                // {...register("complemento", {
                //     required: "Esse campo é obrigatório"
                // })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="logradouro"
                className="fullWidth"
                margin="normal" 
                label="Logradouro" 
                variant="outlined"
                color={errors?.logradouro ? "error" : "success"}
                helperText={errors?.logradouro && `${errors.logradouro?.message}`}
                
                // {...register("logradouro", {
                //     required: "Esse campo é obrigatório"
                // })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="bairro"
                className="fullWidth"
                margin="normal" 
                label="Bairro" 
                variant="outlined"
                color={errors?.bairro ? "error" : "success"}
                helperText={errors?.bairro && `${errors.bairro?.message}`}
                
                // {...register("bairro", {
                //     required: "Esse campo é obrigatório"
                // })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="cidade"
                className="fullWidth"
                margin="normal" 
                label="Cidade" 
                variant="outlined"
                color={errors?.cidade ? "error" : "success"}
                helperText={errors?.cidade && `${errors.cidade?.message}`}
                
                // {...register("cidade", {
                //     required: "Esse campo é obrigatório"
                // })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="estado"
                className="fullWidth"
                margin="normal" 
                label="Estado" 
                variant="outlined"
                color={errors?.estado ? "error" : "success"}
                helperText={errors?.estado && `${errors.estado?.message}`}
                
                // {...register("estado", {
                //     required: "Esse campo é obrigatório"
                // })}
            />
          </div>
          
          <div className="formRow">
            <Link to="/login">Voltar para Login</Link>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
      <div>
        <img src="./src/assets/bg_login.png" alt="" />
      </div>
     </div>
   )
  }

export default CadastroUsuarios;