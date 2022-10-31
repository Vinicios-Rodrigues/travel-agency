import { Form } from "../Form/Form";
import style from "./mainStyle.module.scss";
export const Main = () => {
  return (
    <main className={style.main}>
      <Form />
    </main>
  );
};
