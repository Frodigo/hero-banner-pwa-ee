import React from 'react';
import { render } from '@testing-library/react';
import HeroBanner from '../heroBanner';

const mockedProps = {
  appearance: 'default',
  border: '',
  borderColor: '',
  borderRadius: '',
  borderWidth: '',
  buttonText: 'Shop now!',
  buttonUrl: '#',
  children: [],
  contentType: 'hero_banner',
  cssClasses: ['hero-block'],
  desktopImage: 'http://placehold.it/200x200',
  heading: 'Seasonal styles up to 40%',
  marginBottom: '0px',
  marginLeft: '0px',
  marginRight: '0px',
  marginTop: '0px',
  mobileImage: 'http://placehold.it/200x200',
  paddingBottom: '0px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  textAlign: ''
};

test('Display hero banner on the page with desktop image', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      matches: true
    }))
  });

  const { asFragment } = render(<HeroBanner {...mockedProps} />);
  expect(asFragment).toMatchSnapshot();
});

test('Display hero banner on the page with mobile image', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      matches: false
    }))
  });

  const { asFragment } = render(<HeroBanner {...mockedProps} />);
  expect(asFragment).toMatchSnapshot();
});
