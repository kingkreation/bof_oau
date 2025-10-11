module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: {
          background: "var(--primary-background)",
          light: "var(--primary-background-light)",
          medium: "var(--primary-background-medium)",
          dark: "var(--primary-background-dark)",
          foreground: "var(--primary-foreground)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)"
        },
        background: {
          main: "var(--bg-main)",
          overlay: {
            light: "var(--bg-overlay-light)",
            medium: "var(--bg-overlay-medium)",
            dark: "var(--bg-overlay-dark)"
          }
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)"
        },
        // Component-specific colors
        button: {
          background: "var(--button-bg)",
          text: "var(--button-text)",
          border: "var(--button-border)"
        },
        header: {
          background: "var(--header-bg)",
          text: "var(--header-text)"
        },
        line: {
          background: "var(--line-bg)"
        },
        link: {
          text: "var(--link-text)"
        },
        footer: {
          background: "var(--footer-bg)",
          text: "var(--footer-text)"
        }
      },
      fontSize: {
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)'
      },
      lineHeight: {
        'tight': 'var(--line-height-tight)',
        'normal': 'var(--line-height-normal)',
        'medium': 'var(--line-height-medium)',
        'relaxed': 'var(--line-height-relaxed)',
        'loose': 'var(--line-height-loose)',
        'extra-loose': 'var(--line-height-extra-loose)',
        'super-loose': 'var(--line-height-super-loose)',
        'ultra-loose': 'var(--line-height-ultra-loose)',
        'mega-loose': 'var(--line-height-mega-loose)'
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)'
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)'
      }
    }
  },
  plugins: []
};