import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

const FeatureList = [
  {
    title: '첫번째',
    Svg: require('@site/static/images/common/img-login.svg').default,
    description: <>내용내용</>
  },
  {
    title: '두번째',
    Svg: require('@site/static/images/common/img-login.svg').default,
    description: <>내용내용</>
  },
  {
    title: '세번째',
    Svg: require('@site/static/images/common/img-login.svg').default,
    description: <>내용내용</>
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
