import cl from "./title.module.css";

type Props = {
  size: AppLogo;
  title: string;
};

export const AppTitle = ({ size, title }: Props) => {
  const isLogoBig = size === "big";

  return (
    <div
      className={isLogoBig ? `${cl.app_title_big}` : `${cl.app_title_small}`}
    >
      <div
        className={isLogoBig ? `${cl.ellipse1_big}` : `${cl.ellipse1_small}`}
      ></div>
      <div
        className={isLogoBig ? `${cl.ellipse2_big}` : `${cl.ellipse2_small}`}
      ></div>
      <div>{title}</div>
    </div>
  );
};
