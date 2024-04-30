import { TextField } from "@mui/material";
import "../../index.css"
import "./style.css"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UsuariosContext } from "../../context/UsuariosContext";
import { Link } from "react-router-dom";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/en-gb';
import Footer from "../../components/Footer";

 
function CadastroUsuarios() {

  const {cadastrarUsuario} = useContext(UsuariosContext)
  
  const {register, handleSubmit, formState: {errors}} = useForm();

  async function registraUsuario(formValue) {
    await cadastrarUsuario(formValue)
    console.log(formValue)
  }

   return(

     <div className="divisaoPage">
      <div className="colunaForm">
        <img src="./src/assets/logo_recicla.svg" alt="" />
        <form className="containerCadastro" onSubmit={handleSubmit(registraUsuario)}>
        <div className="itensForm formRow">
            <TextField
                id="nome"
                className="width-2"
                margin="normal" 
                label="Nome" 
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
                className="width-1"
                margin="normal" 
                label="Sexo" 
                variant="outlined"
                color={errors?.sexo ? "error" : "success"}
                helperText={errors?.sexo && `${errors.sexo?.message}`}
                
                {...register("sexo", {
                    required: "Esse campo é obrigatório"
                })}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale='en-gb'>
              <DatePicker
                  id="dataNascimento"
                  label="Data de Nascimento"
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
            </LocalizationProvider>

          </div>
          
          <div className="formRow">
            <TextField
                id="email"
                className="width-3"
                margin="normal" 
                label="e-Mail" 
                type="email"
                variant="outlined"
                color={errors?.email ? "error" : "success"}
                helperText={errors?.email && `${errors.email?.message}`}
                
                {...register("email", {
                    required: "Esse campo é obrigatório"
                })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="senha"
                className="width-1"
                margin="normal" 
                label="Senha" 
                type="password"
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
                variant="outlined"
                color={errors?.cep ? "error" : "success"}
                helperText={errors?.cep && `${errors.cep?.message}`}
                
                {...register("cep", {
                    required: "Esse campo é obrigatório"
                })}
            />
            <TextField
                id="numero"
                className="width-1"
                margin="normal" 
                label="Nº" 
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
                variant="outlined"
                color={errors?.estado ? "error" : "success"}
                helperText={errors?.estado && `${errors.estado?.message}`}
                
                {...register("estado", {
                    required: "Esse campo é obrigatório"
                })}
            />
          </div>
         
          
          <div className="linhaBtn">
            <button className="btn btn1" type="submit">Cadastrar</button>
            <Link className="btn2" to="/login">Voltar para Login</Link>
          </div>
        </form>
        <Footer/>
      </div>
      <div className="colunaImgCadastroUsuario">
        <img src="./src/assets/bg_login.png" alt="" />
      </div>
     </div>
   )
  }

export default CadastroUsuarios;