import { getFullPageLicenseKey } from './modules/LicenseKey.js';

const style = getComputedStyle(document.documentElement);

var myFullpage = new fullpage('#fullpage', {
  licenseKey: getFullPageLicenseKey(),
  anchors: ['intro', 'portfolio', 'contact'],
  sectionsColor: [style.getPropertyValue('--color-turquoise'), style.getPropertyValue('--color-yellow-orange'), style.getPropertyValue('--color-sunset-orange')],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Introduction', 'Portfolio', 'Contact']
});
