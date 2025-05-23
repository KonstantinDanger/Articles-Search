import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const timeToRedirect = 3000;
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, timeToRedirect);
  }, [navigate]);

  return (
    <>
      <h2>Сторінка не знайдена. Перенаправляємо на домашню сторінку...</h2>
    </>
  );
}
