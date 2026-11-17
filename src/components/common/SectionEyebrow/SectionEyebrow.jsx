import styles from './SectionEyebrow.module.css';

/**
 * Small label shown above a section heading, e.g. "— About".
 */
function SectionEyebrow({ children, as: Tag = 'p', className = '', ...props }) {
  return (
    <Tag className={`${styles.eyebrow} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}

export default SectionEyebrow;
