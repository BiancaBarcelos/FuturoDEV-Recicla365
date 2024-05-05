import { LocaisColetaContext } from "../../context/LocaisColetaContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import MultipleSelectChip from "../../components/MultipleSelectChip";


function FormLocal({local, acao, id}) {

    const idUsuario = localStorage.getItem("idUsuario")
    const {cadastrarLocal, residuos, editarLocal} = useContext(LocaisColetaContext)
    const [logradouro,setLogradouro] = useState(local && local.logradouro ? local.logradouro :'')
    const [bairro,setBairro] = useState(local && local.bairro ? local.bairro :'')
    const [cidade,setCidade] = useState(local && local.cidade ? local.cidade :'')
    const [estado,setEstado] = useState(local && local.estado ? local.estado :'')
    const [residuosAceitos, setResiduosAceitos] = useState(local && local.residuos ? local.residuos :[])
    const {register, handleSubmit, setValue, getValues, formState: {errors}} = useForm();

    
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

    const registrarLocal = async (formValue) => {
        formValue = {...formValue,"residuos":residuosAceitos}
        await cadastrarLocal(formValue)
    }
  
      const mudarLocal = async (formValue) => {
        formValue = {...formValue,"residuos":residuosAceitos}
        await editarLocal(formValue, id)
      }

    return(
        <form className="containerCadastro" onSubmit={acao === "editar" ? handleSubmit(mudarLocal) : handleSubmit(registrarLocal)}>
          <h2>{acao === 'cadastrar' ? 'Cadastrar Locais': 'Editar Local'}</h2>
          <div className="itensForm formRow">
              <TextField
                  id="usuario"
                  className="width-1"
                  margin="normal" 
                  label="Usuário" 
                  variant="outlined"
                  value={idUsuario}
                  color={errors?.usuario ? "error" : "success"}
                  helperText={errors?.usuario && `${errors.usuario?.message}`}
                  
                  {...register("usuario", {
                      required: "Esse campo é obrigatório"
                  })}
              />
              <TextField
                id="nomeLocal"
                className="width-2"
                margin="normal" 
                label="Nome do Local" 
                defaultValue={local && local.nomeLocal ? local.nomeLocal :''}
                variant="outlined"
                color={errors?.nomeLocal ? "error" : "success"}
                helperText={errors?.nomeLocal && `${errors.nomeLocal?.message}`}
                
                {...register("nomeLocal", {
                    required: "Esse campo é obrigatório"
                })}
            />
          </div>
          <div className="formRow">
            <TextField
                id="descricao"
                className="width-3"
                margin="normal" 
                label="Descrição" 
                defaultValue={local && local.descricao ? local.descricao :''}
                variant="outlined"
                color={errors?.descricao ? "error" : "success"}
                helperText={errors?.descricao && `${errors.descricao?.message}`}
                
                {...register("descricao", {
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
                defaultValue={local && local.cep ? local.cep :''}
                variant="outlined"
                name="cep"
                color={errors?.cep ? "error" : "success"}
                helperText={errors?.cep && `${errors.cep?.message}`}
                
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
                defaultValue={local && local.numero ? local.numero :''}
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
                defaultValue={local && local.complemento ? local.complemento :''}
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
          <div className="formRow">
            <TextField
                id="coordenadas"
                className="width-1"
                margin="normal" 
                label="Coordenadas"                 
                defaultValue={local && local.coordenadas ? local.coordenadas :''}
                variant="outlined"
                color={errors?.coordenadas ? "error" : "success"}
                helperText={errors?.coordenadas && `${errors.coordenadas?.message}`}
                
                {...register("coordenadas", {
                    required: "Esse campo é obrigatório"
                })}
            />
            <MultipleSelectChip setResiduosAceitos={setResiduosAceitos} residuosAceitos={residuosAceitos} nomeCampo='Resíduos Aceitos' residuos={residuos}/>
          </div>

         
          
          <div className="linhaBtn">
            <button className="btn width-1 btn1 marginAuto" type="submit">{acao === 'cadastrar' ? 'Cadastrar': 'Salvar'}</button>
          </div>
        </form>
    )
}

export default FormLocal