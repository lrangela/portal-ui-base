import React from 'react';
import { addons, types } from 'storybook/manager-api';
import { AddonPanel } from 'storybook/internal/components';
import { ThemeBuilderPanel } from './ThemeBuilderPanel';

const ADDON_ID = 'portal/theme-builder';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Theme Builder',
    render: ({ active, key }) =>
      React.createElement(
        AddonPanel,
        { active, key },
        React.createElement(ThemeBuilderPanel),
      ),
  });
});
