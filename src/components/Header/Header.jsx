import style from "./headerStyle.module.scss";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style['content-header']}>
        <h1>Agência de viagens</h1>
      </div>
    </header>
  );
};
