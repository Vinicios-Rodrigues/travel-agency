import style from "./formStyle.module.scss";
import { useForm } from "react-hook-form";
import { Selection } from "../Selection/Selection";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <form
      className={style.formContainer}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className={style.wraperSection}>
        <section className={style.containerInputs}>
          <h3>Dados Pessoais</h3>
          <div>
            <input
              placeholder="Digite seu Nome"
              type="text"
              {...register("nome", { required: "Campo obrigatório" })}
            />
            <span>{errors.nome?.message}</span>
          </div>
          <div>
            <input
              placeholder="Digite seu e-mail"
              type="email"
              {...register("email", { required: "Campo obrigatório" })}
            />
            <span>{errors.email?.message}</span>
          </div>

          <div>
            <input
              placeholder="Telefone"
              type="number"
              {...register("telefone", { required: "Campo obrigatório" })}
            />
            <span>{errors.telefone?.message}</span>
          </div>
          <div>
            <input
              placeholder="Digite seu CPF"
              type="text"
              {...register("cpf", { required: "Campo obrigatório" })}
            />
            <span>{errors.cpf?.message}</span>
          </div>
        </section>
        <section className={style.containerSelect}>
          <h3>Selecione o País e Cidade</h3>

          <Selection />
        </section>
      </div>
      <button onClick={() => reset()} className="button">
        Enviar
      </button>
    </form>
  );
};
