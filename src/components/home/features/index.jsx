import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'React',
    Svg: require('@site/static/images/common/logo.svg').default,
    description: <>v18.3.1</>
  },
  {
    title: 'Vite',
    Svg: require('@site/static/images/common/logo.svg').default,
    description: <>v6.1.0</>
  },
  {
    title: 'Nodejs',
    Svg: require('@site/static/images/common/logo.svg').default,
    description: <>v22.14.0</>
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
