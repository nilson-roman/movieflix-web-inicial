import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "components/Button";
import { requestBackendPost } from "util/requests";

import "./styles.css";

type Props = {
  movieId: string;
};

type FormData = {
  text: string;
  movieId: string;
};

const PostReview = ({ movieId }: Props) => {

  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<FormData>();
  

  const onSubmit = (formData: FormData) => {
    requestBackendPost(formData)
      .then((response) => {
        setHasError(false);
        window.location.reload();
      })
      .catch((error) => {
        setHasError(true);
        console.log("ERRO", error);
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
