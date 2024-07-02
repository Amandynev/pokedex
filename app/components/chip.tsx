// import cn from "classnames";

type chipType = {
  className: string;
  style: any;
  title: string;
  icon: any;
  children: any;
};

const Chip = ({ icon, title, className, style, children }: chipType) => (
  <div className={cn("chip", className)} style={style}>
    {icon && <div className="icon">{icon}</div>}
    <div>{title || children}</div>
  </div>
);

export default Chip;
