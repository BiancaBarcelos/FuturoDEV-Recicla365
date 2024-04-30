import { TextField } from "@mui/material";
import "../../index.css"
import "./style.css"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UsuariosContext } from "../../context/UsuariosContext";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";



 
function Login() {

  const {login} = useContext(UsuariosContext)
  
  const {register, handleSubmit, formState: {errors}} = useForm();

  async function fazerLogin(formValue) {
    await login(formValue.email, formValue.senha)
  }

   return(

     <div className="divisaoPage">
      <div className="colunaTxt">
        <img src="./src/assets/logo_recicla.svg" alt="" />
        <form className="containerCadastro" onSubmit={handleSubmit(fazerLogin)}>
          <div className="formRow">
            <TextField
                id="email"
                className="width-3"
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
                className="width-3"
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
          <div>
            <button className="btn btn1" type="submit">ENTRAR</button>
            <Link className="btn2" to="/cadastroUsuarios">Criar Conta</Link>
          </div>
        </form>
       
        <Footer></Footer>        

      </div>
      <div className="colunaImg">
        <img src="./src/assets/bg_login.png" alt="" />
      </div>
     </div>
   )
  }

export default Login;