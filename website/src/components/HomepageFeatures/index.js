import React from 'react';
import clsx from 'clsx';

const FeatureList = [
  {
    title: 'CRM Producers and manufacturers',
    Svg: require('@site/static/img/crm-producers.svg').default,
    description: (
      <>
        Lorem Ipsum is simply dummy text of the printing and type setting industry.
      </>
    ),
  },
  {
    title: 'ESG standards and certifiers',
    Svg: require('@site/static/img/esg-standards-and-certifiers.svg').default,
    description: (
      <>
        Lorem Ipsum is simply dummy text of the printing and type setting industry.
      </>
    ),
  },
  {
    title: 'ESG Traceability software platforms',
    Svg: require('@site/static/img/esg-traceability-software-platforms.svg').default,
    description: (
      <>
        Lorem Ipsum is simply dummy text of the printing and type setting industry.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4 home-feature')}>
      <div className="home-feature__image">
        <Svg className="home-feature__icon" role="img" />
      </div>
      <div className="home-feature__content">
        <h3 className="home-feature__title">{title}</h3>
        <p className="home-feature__description">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="home-features">
      <div className="home-features__container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
