import React from 'react';
import { ReactComponent as IconSvg } from '@/public/assets/icons/social/instagram.svg'; // Adjust the path as necessary

const Icon = ({ fill = 'currentColor', ...props }) => (
  <IconSvg {...props} style={{ fill }} />
);

export default Icon;