import configAggregator from '../configAggregator';

test('heroBanner config aggregator retrieves values from heroBanner content type', () => {
  const node = document.createElement('div');
  node.innerHTML =
    '<div class="hero-block" data-content-type="hero_banner" data-appearance="default" data-element="main" style="margin: 0px; padding: 0px;"><figure class="hero-block__figure"><img class="hero-block__image pagebuilder-mobile-hidden" src="https://magento2ee.test/media/wysiwyg/shoes2.jpeg" alt="figure" title="SHop!" data-element="desktop_image" style="border-style: none; border-width: 1px; border-radius: 0px; max-width: 100%; height: auto;"><img class="hero-block__image pagebuilder-mobile-only" src="https://magento2ee.test/media/wysiwyg/shoes2.jpeg" alt="figure" title="SHop!" data-element="mobile_image" style="border-style: none; border-width: 1px; border-radius: 0px; max-width: 100%; height: auto;"></figure><section class="hero-block__tape"><h2 class="hero-block__heading" data-element="heading">Seasonal styles up to 40%</h2><a class="hero-block__action" href="#" target="" data-link-type="default" data-element="button_url">Shop now!</a></section></div>';

  expect(configAggregator(node)).toEqual(
    expect.objectContaining({
      heading: 'Seasonal styles up to 40%',
      buttonText: 'Shop now!',
      buttonUrl: '#',
      desktopImage: 'https://magento2ee.test/media/wysiwyg/shoes2.jpeg',
      mobileImage: 'https://magento2ee.test/media/wysiwyg/shoes2.jpeg'
    })
  );
});
