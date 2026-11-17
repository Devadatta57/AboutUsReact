import Icon from '@/components/common/Icon';
import styles from './DetailBlocks.module.css';

/*
 * Content of a "Read more" panel. Each block in `details` has a `type`:
 * paragraphs, quote, cards, table or features.
 */
function DetailBlocks({ blocks }) {
  return (
    <div className={styles.panel}>
      {blocks.map((block, index) => {
        const Block = BLOCKS[block.type];
        return Block ? <Block key={index} {...block} /> : null;
      })}
    </div>
  );
}

function Paragraphs({ items }) {
  return (
    <div className={styles.paragraphs}>
      {items.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}

function BlockHeading({ icon, title, as: Tag = 'h3' }) {
  return (
    <Tag className={styles.blockHeading}>
      {icon && (
        <span className={styles.headingIcon}>
          <Icon name={icon} />
        </span>
      )}
      {title}
    </Tag>
  );
}

function Quote({ icon, title, paragraphs }) {
  return (
    <div className={styles.quote}>
      <BlockHeading icon={icon} title={title} />
      <blockquote className={styles.quoteBody}>
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </blockquote>
    </div>
  );
}

function Cards({ items }) {
  return (
    <ul className={styles.cards}>
      {items.map((item) => (
        <li key={item.title} className={styles.card}>
          <BlockHeading icon={item.icon} title={item.title} />
          {item.paragraphs.map((text) => (
            <p key={text} className={styles.cardText}>
              {text}
            </p>
          ))}
        </li>
      ))}
    </ul>
  );
}

function Table({ columns, rows }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.initiative}>
              <th scope="row" data-label={columns[0]}>
                {row.initiative}
              </th>
              <td data-label={columns[1]}>{row.description}</td>
              <td data-label={columns[2]}>
                <ul className={styles.impact}>
                  {row.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Features({ icon, title, intro, subtitle, items }) {
  return (
    <div className={styles.features}>
      <BlockHeading icon={icon} title={title} />
      {intro && <p className={styles.featuresIntro}>{intro}</p>}
      {subtitle && <h4 className={styles.featuresSubtitle}>{subtitle}</h4>}
      <ul className={styles.featureList}>
        {items.map((item) => (
          <li key={item.label} className={styles.feature}>
            <Icon name={item.icon} className={styles.featureIcon} />
            <span className={styles.featureLabel}>{item.label}</span>
            <span className={styles.featureText}>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const BLOCKS = {
  paragraphs: Paragraphs,
  quote: Quote,
  cards: Cards,
  table: Table,
  features: Features,
};

export default DetailBlocks;
