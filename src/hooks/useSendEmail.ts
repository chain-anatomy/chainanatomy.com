import { useState } from "react";
import emailjs from "@emailjs/browser";

const useSendEmail = (formRef: React.RefObject<HTMLFormElement>) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setIsSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    formRef.current &&
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID as string,
          process.env.REACT_APP_TEMPLATE_ID as string,
          formRef.current,
          process.env.REACT_APP_PUBLIC_KEY as string
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsLoading(true);
            setIsSuccess(true);
          },
          (error) => {
            console.log(error.text);
            setIsLoading(false);
          }
        );
  };

  return { formRef, handleSubmit, isLoading, isSuccess, handleClose };
};

export default useSendEmail;
