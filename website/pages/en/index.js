/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('sunat.svg')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="#try">Empezar</Button>
            <Button href={siteConfig.repoUrl}>GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Información actualizada de las guías de elaboración de comprobantes electrónicos, descripción de codigos de error y resolución de problemas.',
        image: imgUrl('invoice.png'),
        imageAlign: 'top',
        title: 'Comprobantes Electrónicos',
      },
      {
        content: 'Guía para empezar con la facturación electrónica, requerimientos, beneficios y diferentes opciones para convertirse en emisor electrónico.',
        image: imgUrl('company.png'),
        imageAlign: 'top',
        title: 'Contribuyentes',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Soluciones Tecnológicas para Factura Electrónica</h2>
    <MarkdownBlock>Lista de diferentes soluciones digitales llevar a cabo la **facturación electrónica**, incluyendo proveedores de servicios, proyectos `OpenSource` o de terceros, asi como otras formas de negocio que surgen a partir de este proceso.</MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="dark">
    {[
      {
        content: 'Aprenda mas sobre los comprobantes electrónicos, diferencia de los comprobantes físicos, además descubra los beneficios que puede obtener si accede a este normativa.',
        image: imgUrl('cpe_sunat.png'),
        imageAlign: 'right',
        title: 'Cpe',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Darse de alta como emisor electrónico, verificar que necesita para empezar a emitir `comprobantes electrónicos`, conocer las diferentes soluciones y seleccionar la que se adapte a sus necesidades',
        image: imgUrl('invoice_online.jpg'),
        imageHeight: '100px',
        imageAlign: 'left',
        title: 'Emisor Electrónico',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'Adapte su software a los nuevos requerimientos para adaptarse la facturación electrónica, conozca el ciclo de la emisión de un `cpe` y toda el proceso que debe soportar su sistema para cumplir con las normativas de **SUNAT**.',
        image: imgUrl('einvoice.jpg'),
        imageAlign: 'right',
        title: 'Desarrolladores',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"¿Quienes estan usando esto?"}</h2>
      <p>Este proyecto es usado por todas esta gente.</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
