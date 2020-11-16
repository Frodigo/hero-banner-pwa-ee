import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './heroBanner.css';
import { arrayOf, shape, string } from 'prop-types';

const HeroBanner = props => {
  const classes = mergeClasses(defaultClasses, props.classes);
  const {
    desktopImage,
    mobileImage,
    heading,
    buttonText,
    buttonUrl,
    textAlign,
    border,
    borderColor,
    borderWidth,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    cssClasses
  } = props;
  const rootStyles = {
    textAlign,
    border,
    borderColor,
    borderWidth,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  };

  let image = desktopImage;
  if (mobileImage && window.matchMedia('(max-width: 768px)').matches) {
    image = mobileImage;
  }

  return (
    <div
      className={[classes.heroBlock, ...cssClasses].join(' ')}
      style={rootStyles}
    >
      <figure className={classes.heroBlockFigure}>
        <img className={classes.heroBlockImage} src={image} alt="figure" />
      </figure>
      <section className={classes.heroBlockTape}>
        <h2 className={classes.heroBlockHeading}>{heading}</h2>
        <a className={classes.heroBlockAction} href={buttonUrl}>
          {buttonText}
        </a>
      </section>
    </div>
  );
};

HeroBanner.propTypes = {
  classes: shape({
    heroBlock: string
  }),
  contentType: string,
  appearance: string,
  buttonText: string.isRequired,
  buttonUrl: string.isRequired,
  desktopImage: string.isRequired,
  heading: string.isRequired,
  textAlign: string,
  border: string,
  borderColor: string,
  borderWidth: string,
  marginTop: string,
  marginRight: string,
  marginBottom: string,
  marginLeft: string,
  paddingTop: string,
  paddingRight: string,
  paddingBottom: string,
  paddingLeft: string,
  cssClasses: arrayOf(string)
};

export default HeroBanner;
