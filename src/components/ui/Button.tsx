import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

/**
 * Base button styling using class-variance-authority
 * Defines common styles and variants for all buttons
 */
const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'focus:ring-green-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-green-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

/**
 * Button component props interface
 * Extends HTML button attributes and variant props
 */
interface ButtonProps extends 
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonClasses> {
  // Required parameters with defaults
  text?: string;                                      // Button text content
  text_font_size?: string;                            // Font size in pixels or predefined size
  text_font_family?: string;                          // Font family name
  text_font_weight?: string;                          // Font weight value
  text_line_height?: string;                          // Line height value
  text_text_align?: 'left' | 'center' | 'right' | 'justify'; // Text alignment
  text_color?: string;                                // Text color (hex, rgb, etc.)
  fill_background_color?: string;                     // Background color (hex, rgb, etc.)
  border_border_radius?: string;                      // Border radius value
  
  // Optional parameters (no defaults)
  border_border?: string;                             // Border style
  layout_width?: string;                              // Width value
  padding?: string;                                   // Padding value
  position?: string;                                  // CSS position value
  margin?: string;                                    // Margin value
  
  // Standard React props
  variant?: 'primary' | 'secondary' | 'outline';      // Button style variant
  size?: 'small' | 'medium' | 'large';                // Button size variant
  disabled?: boolean;                                 // Disabled state
  className?: string;                                 // Additional CSS classes
  children?: React.ReactNode;                         // Child elements
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Click handler
  type?: 'button' | 'submit' | 'reset';               // Button type attribute
}

/**
 * Reusable Button component with extensive customization options
 * Supports various styling properties and behaviors
 * 
 * @param {ButtonProps} props - Button component properties
 * @returns A styled button element
 */
const Button: React.FC<ButtonProps> = ({
  // Required parameters with defaults
  text = "Join Us",
  text_font_size = "16",
  text_font_family = "Inter",
  text_font_weight = "500",
  text_line_height = "20px",
  text_text_align = "left",
  text_color = "#000000",
  fill_background_color = "#00713acc",
  border_border_radius = "8px",
  
  // Optional parameters (no defaults)
  border_border,
  layout_width,
  padding,
  position,
  margin,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  // Validate optional parameters to prevent rendering issues
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ');

  /**
   * Convert design token values to Tailwind classes when possible
   * Falls back to custom values when needed
   */
  
  // Convert font size to Tailwind class or custom value
  const getFontSize = (size: string) => {
    if (size === "16") return "text-base";
    if (size === "14") return "text-sm";
    if (size === "18") return "text-lg";
    return `text-[${size}px]`;
  };

  // Convert font weight to Tailwind class or custom value
  const getFontWeight = (weight: string) => {
    if (weight === "500") return "font-medium";
    if (weight === "400") return "font-normal";
    if (weight === "600") return "font-semibold";
    if (weight === "700") return "font-bold";
    return `font-[${weight}]`;
  };

  // Convert line height to Tailwind class or custom value
  const getLineHeight = (height: string) => {
    if (height === "20px") return "leading-normal";
    if (height === "16px") return "leading-tight";
    if (height === "24px") return "leading-relaxed";
    return `leading-[${height}]`;
  };

  // Convert text alignment to Tailwind class
  const getTextAlign = (align: string) => {
    return `text-${align}`;
  };

  // Convert background color to Tailwind class or custom value
  const getBackgroundColor = (color: string) => {
    if (color === "#00713acc") return "bg-primary-dark";
    return `bg-[${color}]`;
  };

  // Convert text color to Tailwind class or custom value
  const getTextColor = (color: string) => {
    if (color === "#000000") return "text-text-primary";
    if (color === "#FFFFFF") return "text-white";
    return `text-[${color}]`;
  };

  // Convert border radius to Tailwind class or custom value
  const getBorderRadius = (radius: string) => {
    if (radius === "8px") return "rounded-lg";
    if (radius === "4px") return "rounded";
    if (radius === "12px") return "rounded-xl";
    return `rounded-[${radius}]`;
  };

  // Build component classes from all style properties
  const componentClasses = [
    getFontSize(text_font_size),
    `font-[${text_font_family}]`,
    getFontWeight(text_font_weight),
    getLineHeight(text_line_height),
    getTextAlign(text_text_align),
    getTextColor(text_color),
    getBackgroundColor(fill_background_color),
    getBorderRadius(border_border_radius),
    hasValidBorder ? `border-[${border_border}]` : '',
  ].filter(Boolean).join(' ');

  /**
   * Handle button click with safety checks
   * Prevents action when disabled and ensures onClick exists
   */
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={twMerge(
        buttonClasses({ variant, size }),
        componentClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;