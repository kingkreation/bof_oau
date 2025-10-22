import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

/**
 * Props for the Link component
 * @property {string} to - The destination path
 * @property {React.ReactNode} children - The content to be wrapped by the link
 * @property {string} className - Additional CSS classes
 * @property {boolean} external - Whether the link points to an external resource
 * @property {React.HTMLAttributes<HTMLAnchorElement>} props - Additional anchor props
 */
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

/**
 * Reusable Link component that handles both internal and external navigation
 * Uses React Router for internal links and standard anchor tags for external links
 * 
 * @param {LinkProps} props - Link component properties
 * @returns A styled link element
 */
const Link: React.FC<LinkProps> = ({ 
  to, 
  children, 
  className = '', 
  external = false,
  ...props 
}) => {
  // Base styles for all links
  const baseStyles = "transition-colors duration-200";
  
  // Determine if the link is external by checking for http/https or external prop
  const isExternal = external || to.startsWith('http://') || to.startsWith('https://');

  if (isExternal) {
    return (
      <a 
        href={to}
        className={twMerge(baseStyles, className)}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink 
      to={to} 
      className={twMerge(baseStyles, className)}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
