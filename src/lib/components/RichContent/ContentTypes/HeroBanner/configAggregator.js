import { getAdvanced } from "@magento/pagebuilder/lib/utils";

export default (node) => {
    const desktopImageElement = node.querySelector('[data-element="desktop_image"]');
    const mobileImageElement = node.querySelector('[data-element="mobile_image"]');
    const headingElement = node.querySelector('[data-element="heading"]');
    const buttonElement = node.querySelector('[data-element="button_url"]');

    return {
        desktopImage: desktopImageElement.getAttribute('src'),
        mobileImage: mobileImageElement.getAttribute('src'),
        heading: headingElement.innerText,
        buttonText: buttonElement.innerText,
        buttonUrl: buttonElement.getAttribute('href'),
        ...getAdvanced(node)
    };
};
