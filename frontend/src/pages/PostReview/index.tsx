import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "components/Button";
import { requestBackendPost } from "util/requests";

import "./styles.css";
import { toast } from "react-toastify";

type Props = {
  movieId: string;
  onSubmitForm: Function;
};

type FormData = {
  text: string;
  movieId: string;
};

const PostReview = ({ movieId, onSubmitForm }: Props) => {

  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<FormData>();
  
  const clearForm = () => {
    setValue('text', "");
  }

  const onSubmit = (formData: FormData) => {
    requestBackendPost(formData)
      .then((response) => {
        setHasError(false);
        clearForm();
        onSubmitForm();
        toast.info("Avaliação enviada com sucesso!")
      })
      .catch((error) => {
        setHasError(true);
        clearForm();
        console.log("ERRO", error);
        toast.error("Erro ao enviar a avaliação!")
      });
  };

  return (
    <div className="base-card review-card">
      {hasError && (
        <div className="alert alert-danger">Erro ao publicar a review</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("text", {
              required: "Campo obrigatório",
            })}
            type="text"
            className={`form-control base-input ${
              errors.text ? "is-invalid" : ""
            }`}
            placeholder="Deixe sua avaliação aqui"
            name="text"
          />
          {setValue('movieId', movieId)}
          <div className="invalid-feedback d-block">
            {errors.text?.message}
          </div>
        </div>
        <div className="review-submit">
          <Button text="Salvar Avaliação" />
        </div>
      </form>
    </div>
  );
};

export default PostReview;
