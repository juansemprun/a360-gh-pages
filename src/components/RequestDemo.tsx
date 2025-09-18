import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function RequestDemoComponent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        theme: 'light',
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#6F61C0',
            'cal-text': '#6F61C0',
            'cal-text-emphasis': '#4D408D',
            'cal-border-emphasis': '#4D408D',
            'cal-text-error': 'pink',
            'cal-border': '#A090E0',
            'cal-border-default': '#A090E0',
            'cal-border-booker': '#A090E0',
            'cal-text-muted': '#C0B8FF',
            'cal-bg-emphasis': '#E1DFFF',
            'cal-border-booker-width': '3px',
          },
          dark: {},
        },
      });
    })();
  }, []);

  return (
    <Cal
      namespace="30min"
      calLink="manuel.air360/30min"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  );
}
