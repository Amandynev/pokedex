import Image from "next/image";
import Link from "next/link";

type CardProps = {
  children?: any;
  footer?: any;
  title: string;
  className?: string;
};

export const Card = ({ className, title, children, footer }: CardProps) => {
  return (
    <main className="card-container">
      <div className="card-header">
        <span className="">{title}</span>
      </div>
      <div className="card-content">{children}</div>
      <div className="card-footer">{footer}</div>
    </main>
  );
};
