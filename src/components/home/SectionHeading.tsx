import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
}) => {
  const isDark = tone === 'dark';

  return (
    <div className={`section-heading ${align === 'center' ? 'section-heading--center' : ''}`}>
      <span className={`eyebrow ${isDark ? 'eyebrow--dark' : ''}`}>{eyebrow}</span>
      <h2 className={isDark ? 'heading-on-dark' : ''}>{title}</h2>
      {description && <p className={isDark ? 'copy-on-dark' : ''}>{description}</p>}
    </div>
  );
};

export default SectionHeading;
