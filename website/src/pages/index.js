import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomeHeroImage from '@site/static/img/hero-banner.svg';

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="home-hero">
      <div className="home-hero__container">
        <div className="home-hero__content">
          <h1 className="home-hero__title">{siteConfig.title}</h1>
          <p className="home-hero__description">{siteConfig.tagline}</p>
          <div className="home-hero__actions">
            <Link
              className="button button--primary button--lg"
              to={siteConfig.themeConfig.slackLink}>
              Join our chat channel
            </Link>
          </div>
        </div>
        <div className="home-hero__image-wrapper">
          <HomeHeroImage className="home-hero__image"/>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="United Nations - Critical Raw Materials"
      description="United Nations Critical Raw Materials - Scaling traceability and transparency through decentralisation and digital standards ">
      <main className="homepage-content">
        <HomepageHero/>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
