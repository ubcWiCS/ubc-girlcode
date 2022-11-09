import * as React from "react";

import clsx from "clsx";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};

export default function Typography({
  variant,
  color,
  children,
  weight,
  inline,
  ...props
}) {
  const className = clsx(`${color}`, `${inline}`, `${weight}`, variant);

  const Component = variant ? variantsMapping[variant] : "p";

  return (
    <>
      <Component className={className} {...props}>
        {children}
      </Component>
      <style>
        {`
          .blue {
            color: #8eb1df;
          }
          .purple {
            color: #bfb8e9;
          }
          .tan {
            color: #dc9180;
          }
          .white {
            color: #ffffff;
          }
          .bold {
            font-weight: bold;
          }
          .italic {
            font-style: italic;
          }
          .inline{
            display: inline-block;
          }
        `}
      </style>
    </>
  );
}
