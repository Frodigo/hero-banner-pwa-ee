import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './heroBanner.css';
import { shape, string } from 'prop-types';



// Component for testing setup
const HeroBanner = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    return (
        <div className={classes.heroBlock}>
            <div>Content Type: {props.contentType}</div>
            <div>Appearance: {props.appearance}</div>
        </div>
    );
};

HeroBanner.propTypes = {
    classes: shape({
        heroBlock: string
    }),
    contentType: string,
    appearance: string
};

export default HeroBanner;
