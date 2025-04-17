import React from 'react';
import { Theme } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';
import '@site/static/scss/tokens/df-admin/token.scss';

export default function Root({ children }) {
  return <Theme>{children}</Theme>;
}
