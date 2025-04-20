import React from "react";
import { CustomTextProps } from "../types/types";

/**
 * CustomText component for displaying text with customizable styling
 */
const CustomTextBox: React.FC<CustomTextProps> = ({
  text,
  textStyle,
  textClassName = "",
  as = "p",
  containerStyle,
  containerClassName = "",
  children,
  onClick,
}) => {
  const TextComponent = as as keyof JSX.IntrinsicElements;

  const content = text || children;

  // If we have a container style or className, wrap in a div
  if (containerStyle || containerClassName) {
    return (
      <div style={containerStyle} className={containerClassName}>
        <TextComponent
          style={textStyle}
          className={textClassName}
          onClick={onClick}
        >
          {content}
        </TextComponent>
      </div>
    );
  }

  // Otherwise just render the text component directly
  return (
    <TextComponent
      style={textStyle}
      className={textClassName}
      onClick={onClick}
    >
      {content}
    </TextComponent>
  );
};

export default CustomTextBox;
