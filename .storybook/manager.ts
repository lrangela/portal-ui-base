import { addons } from 'storybook/manager-api';
import './theme-builder/register';

addons.setConfig({
  showAddonPanel: true,
  addonPanelInRight: false,
  selectedPanel: 'portal/theme-builder/panel',
});
