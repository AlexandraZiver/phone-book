import style from "./NotFound.module.scss";

const ErrorPath = () => (
  <div className={style.Container}>
    <p className={style.Text}>Error! The path is not found</p>
  </div>
);

export default ErrorPath;
