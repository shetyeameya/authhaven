import React from "react";
import { ButtonProps } from "../types/types";

/**
 * CustomButton component with direct styling and no loading state
 */
const CustomButton: React.FC<ButtonProps> = ({
  buttonChildren,
  buttonVariant = "solid",
  buttonSize = "md",
  buttonColor = "primary",
  buttonLeftIcon,
  buttonRightIcon,
  buttonFullWidth = false,
  buttonRounded = false,
  buttonDisabled = false,
  buttonClassName = "",
  buttonStyle,
  buttonOnClick,
  primaryButtonColor,
  primaryButtonTextColor,
  ...rest
}) => {
  // Default colors if custom colors aren't provided
  const defaultPrimaryColor = "#2563EB"; // blue-600
  const defaultPrimaryHoverColor = "#1D4ED8"; // blue-700
  const defaultPrimaryTextColor = "white";

  // Use custom colors if provided, otherwise fallback to defaults
  const primaryColorValue = primaryButtonColor || defaultPrimaryColor;
  const primaryTextColorValue =
    primaryButtonTextColor || defaultPrimaryTextColor;
  const primaryHoverColorValue = primaryButtonColor
    ? adjustColorBrightness(primaryButtonColor, -10) // Darken by 10% for hover
    : defaultPrimaryHoverColor;

  // Base styles for the button
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    minWidth: "150px",
    minHeight: "44px",
    cursor: buttonDisabled ? "not-allowed" : "pointer",
    opacity: buttonDisabled ? 0.6 : 1,
    transition: "background-color 0.2s, border-color 0.2s, color 0.2s",
  };

  // buttonVariant and color styles
  const getbuttonVariantStyle = () => {
    switch (buttonVariant) {
      case "solid":
        return getSolidStyle(buttonColor);
      case "outline":
        return getOutlineStyle(buttonColor);
      case "ghost":
        return getGhostStyle(buttonColor);
      case "link":
        return getLinkStyle(buttonColor);
      default:
        return getSolidStyle(buttonColor);
    }
  };

  // Size styles
  const getSizeStyle = () => {
    switch (buttonSize) {
      case "xs":
        return { fontSize: "0.75rem", padding: "0.25rem 0.5rem" };
      case "sm":
        return { fontSize: "0.875rem", padding: "0.375rem 0.75rem" };
      case "md":
        return { fontSize: "1rem", padding: "0.5rem 1rem" };
      case "lg":
        return { fontSize: "1.125rem", padding: "0.625rem 1.25rem" };
      case "xl":
        return { fontSize: "1.25rem", padding: "0.75rem 1.5rem" };
      default:
        return { fontSize: "1rem", padding: "0.5rem 1rem" };
    }
  };

  // Width style
  const getWidthStyle = () => {
    return buttonFullWidth ? { width: "100%" } : {};
  };

  // Border radius style
  const getBorderRadiusStyle = () => {
    return buttonRounded
      ? { borderRadius: "9999px" }
      : { borderRadius: "0.375rem" };
  };

  // Color buttonVariants
  const getSolidStyle = (buttonColor: string) => {
    switch (buttonColor) {
      case "primary":
        return {
          backgroundColor: primaryColorValue,
          color: primaryTextColorValue,
          ":hover": { backgroundColor: primaryHoverColorValue },
        };
      case "secondary":
        return {
          backgroundColor: "#4B5563", // gray-600
          color: "white",
          ":hover": { backgroundColor: "#374151" }, // gray-700
        };
      case "success":
        return {
          backgroundColor: "#10B981", // green-500
          color: "white",
          ":hover": { backgroundColor: "#059669" }, // green-600
        };
      case "danger":
        return {
          backgroundColor: "#EF4444", // red-500
          color: "white",
          ":hover": { backgroundColor: "#DC2626" }, // red-600
        };
      case "warning":
        return {
          backgroundColor: "#F59E0B", // amber-500
          color: "white",
          ":hover": { backgroundColor: "#D97706" }, // amber-600
        };
      case "info":
        return {
          backgroundColor: "#06B6D4", // cyan-500
          color: "white",
          ":hover": { backgroundColor: "#0891B2" }, // cyan-600
        };
      case "light":
        return {
          backgroundColor: "#E5E7EB", // gray-200
          color: "#1F2937", // gray-800
          ":hover": { backgroundColor: "#D1D5DB" }, // gray-300
        };
      case "dark":
        return {
          backgroundColor: "#1F2937", // gray-800
          color: "white",
          ":hover": { backgroundColor: "#111827" }, // gray-900
        };
      default:
        return {
          backgroundColor: primaryColorValue,
          color: primaryTextColorValue,
          ":hover": { backgroundColor: primaryHoverColorValue },
        };
    }
  };

  const getOutlineStyle = (buttonColor: string) => {
    switch (buttonColor) {
      case "primary":
        return {
          backgroundColor: "transparent",
          color: primaryColorValue,
          border: `1px solid ${primaryColorValue}`,
          ":hover": {
            backgroundColor: adjustColorBrightness(primaryColorValue, 95, true),
          }, // Very light version for hover
        };
      case "secondary":
        return {
          backgroundColor: "transparent",
          color: "#4B5563", // gray-600
          border: "1px solid #4B5563",
          ":hover": { backgroundColor: "#F9FAFB" }, // gray-50
        };
      case "success":
        return {
          backgroundColor: "transparent",
          color: "#10B981", // green-500
          border: "1px solid #10B981",
          ":hover": { backgroundColor: "#ECFDF5" }, // green-50
        };
      case "danger":
        return {
          backgroundColor: "transparent",
          color: "#EF4444", // red-500
          border: "1px solid #EF4444",
          ":hover": { backgroundColor: "#FEF2F2" }, // red-50
        };
      case "warning":
        return {
          backgroundColor: "transparent",
          color: "#F59E0B", // amber-500
          border: "1px solid #F59E0B",
          ":hover": { backgroundColor: "#FFFBEB" }, // amber-50
        };
      case "info":
        return {
          backgroundColor: "transparent",
          color: "#06B6D4", // cyan-500
          border: "1px solid #06B6D4",
          ":hover": { backgroundColor: "#ECFEFF" }, // cyan-50
        };
      case "light":
        return {
          backgroundColor: "transparent",
          color: "#6B7280", // gray-500
          border: "1px solid #E5E7EB", // gray-200
          ":hover": { backgroundColor: "#F9FAFB" }, // gray-50
        };
      case "dark":
        return {
          backgroundColor: "transparent",
          color: "#1F2937", // gray-800
          border: "1px solid #1F2937",
          ":hover": { backgroundColor: "#F9FAFB" }, // gray-50
        };
      default:
        return {
          backgroundColor: "transparent",
          color: primaryColorValue,
          border: `1px solid ${primaryColorValue}`,
          ":hover": {
            backgroundColor: adjustColorBrightness(primaryColorValue, 95, true),
          },
        };
    }
  };

  const getGhostStyle = (buttonColor: string) => {
    switch (buttonColor) {
      case "primary":
        return {
          backgroundColor: "transparent",
          color: primaryColorValue,
          ":hover": {
            backgroundColor: adjustColorBrightness(primaryColorValue, 95, true),
          },
        };
      case "secondary":
        return {
          backgroundColor: "transparent",
          color: "#4B5563", // gray-600
          ":hover": { backgroundColor: "#F9FAFB" }, // gray-50
        };
      case "success":
        return {
          backgroundColor: "transparent",
          color: "#10B981", // green-500
          ":hover": { backgroundColor: "#ECFDF5" }, // green-50
        };
      case "danger":
        return {
          backgroundColor: "transparent",
          color: "#EF4444", // red-500
          ":hover": { backgroundColor: "#FEF2F2" }, // red-50
        };
      case "warning":
        return {
          backgroundColor: "transparent",
          color: "#F59E0B", // amber-500
          ":hover": { backgroundColor: "#FFFBEB" }, // amber-50
        };
      case "info":
        return {
          backgroundColor: "transparent",
          color: "#06B6D4", // cyan-500
          ":hover": { backgroundColor: "#ECFEFF" }, // cyan-50
        };
      case "light":
        return {
          backgroundColor: "transparent",
          color: "#9CA3AF", // gray-400
          ":hover": { backgroundColor: "#F9FAFB" }, // gray-50
        };
      case "dark":
        return {
          backgroundColor: "transparent",
          color: "#1F2937", // gray-800
          ":hover": { backgroundColor: "#F9FAFB" }, // gray-50
        };
      default:
        return {
          backgroundColor: "transparent",
          color: primaryColorValue,
          ":hover": {
            backgroundColor: adjustColorBrightness(primaryColorValue, 95, true),
          },
        };
    }
  };

  const getLinkStyle = (buttonColor: string) => {
    switch (buttonColor) {
      case "primary":
        return {
          backgroundColor: "transparent",
          color: primaryColorValue,
          padding: 0,
          ":hover": { textDecoration: "underline" },
        };
      case "secondary":
        return {
          backgroundColor: "transparent",
          color: "#4B5563", // gray-600
          padding: 0,
          ":hover": { textDecoration: "underline" },
        };
      case "success":
        return {
          backgroundColor: "transparent",
          color: "#10B981", // green-500
          padding: 0,
          ":hover": { textDecoration: "underline" },
        };
      case "danger":
        return {
          backgroundColor: "transparent",
          color: "#EF4444", // red-500
          padding: 0,
          ":hover": { textDecoration: "underline" },
        };
      case "warning":
        return {
          backgroundColor: "transparent",
          color: "#F59E0B", // amber-500
          padding: 0,
          ":hover": { textDecoration: "underline" },
        };
      case "info":
        return {
          backgroundColor: "transparent",
          color: "#06B6D4", // cyan-500
          padding: 0,
          ":hover": { textDecoration: "underline" },
        };
      case "light":
        return {
          backgroundColor: "transparent",
          color: "#9CA3AF", // gray-400
          padding: 0,
          ":hover": { textDecoration: "underline" },
        };
      case "dark":
        return {
          backgroundColor: "transparent",
          color: "#1F2937", // gray-800
          padding: 0,
          ":hover": { textDecoration: "underline" },
        };
      default:
        return {
          backgroundColor: "transparent",
          color: primaryColorValue,
          padding: 0,
          ":hover": { textDecoration: "underline" },
        };
    }
  };

  // Helper function to adjust color brightness (darken/lighten)
  function adjustColorBrightness(
    hex: string,
    percent: number,
    lighten = false
  ) {
    // Convert hex to RGB
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    if (lighten) {
      // Lighten
      r = Math.min(255, r + Math.floor(r * (percent / 100)));
      g = Math.min(255, g + Math.floor(g * (percent / 100)));
      b = Math.min(255, b + Math.floor(b * (percent / 100)));
    } else {
      // Darken
      r = Math.max(0, r - Math.floor(r * (percent / 100)));
      g = Math.max(0, g - Math.floor(g * (percent / 100)));
      b = Math.max(0, b - Math.floor(b * (percent / 100)));
    }

    // Convert back to hex
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  // Combine all styles
  const getbuttonStyle = {
    ...baseStyle,
    ...getbuttonVariantStyle(),
    ...getSizeStyle(),
    ...getWidthStyle(),
    ...getBorderRadiusStyle(),
    ...buttonStyle,
  };

  // Handle hover state programmatically
  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    const hoverStyles = getbuttonVariantStyle()[":hover"];
    if (hoverStyles) {
      Object.entries(hoverStyles).forEach(([key, value]) => {
        e.currentTarget.style[key as any] = value as string;
      });
    }
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonVariantStyles = getbuttonVariantStyle();
    const hoverStyles = buttonVariantStyles[":hover"];

    if (hoverStyles) {
      Object.keys(hoverStyles).forEach((key) => {
        e.currentTarget.style[key as any] =
          (buttonVariantStyles[
            key as keyof typeof buttonVariantStyles
          ] as string) || "";
      });
    }
  };

  return (
    <button
      className={buttonClassName}
      style={getbuttonStyle}
      disabled={buttonDisabled}
      onClick={buttonOnClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...rest}
    >
      {buttonLeftIcon && (
        <span style={{ marginRight: "0.5rem" }}>{buttonLeftIcon}</span>
      )}
      {buttonChildren}
      {buttonRightIcon && (
        <span style={{ marginLeft: "0.5rem" }}>{buttonRightIcon}</span>
      )}
    </button>
  );
};

export default CustomButton;
