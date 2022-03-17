import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes, ReactNode, useEffect, useState } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  as?: "button" | "link";
  variant?: "contained" | "outlined" | "text";
  href?: "string";
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  label = "",
  as = "button",
  variant = "contained",
  href = "/",
  icon = null,
  children,
  className,
  ...restProps
}) => {
  switch (as) {
    case "link":
      return (
        <Link href={href} passHref>
          <a
            className={clsx(
              styles.Button,
              variant === "outlined" && styles["Button_outlined"],
              variant === "text" && styles["Button_text"],
              className
            )}
          >
            {icon && <div className={styles["Button-Icon"]}>{icon}</div>}
            <p>{label}</p>
          </a>
        </Link>
      );
    default:
      return (
        <button
          type="button"
          className={clsx(
            styles.Button,
            variant === "outlined" && styles["Button_outlined"],
            className
          )}
          {...restProps}
        >
          {icon && <div className={styles["Button-Icon"]}>{icon}</div>}
          {label && <p>{label}</p>}
        </button>
      );
  }
};
