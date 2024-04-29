import { TextField } from "@mui/material";
import "../../index.css"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UsuariosContext } from "../../context/UsuariosContext";
import { Link } from "react-router-dom";






 
function Login() {

  const {login} = useContext(UsuariosContext)
  
  const {register, handleSubmit, formState: {errors}} = useForm();

  async function fazerLogin(formValue) {
    await login(formValue.email, formValue.senha)
  }

   return(

     <div>
      <div>
        <img src="./src/assets/logo_recicla.svg" alt="" />
        <form onSubmit={handleSubmit(fazerLogin)}>
          <div className="formRow">
            <TextField
                id="email"
                className="fullWidth"
                margin="normal" 
                label="Login"  
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
                className="fullWidth"
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
            <button type="submit">ENTRAR</button>
            <Link to="/cadastroUsuarios">Criar Conta</Link>
          </div>
        </form>
      </div>
      <div>
        <img src="./src/assets/bg_login.png" alt="" />
      </div>
     </div>
   )
  }

export default Login;