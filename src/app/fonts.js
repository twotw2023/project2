import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
export const shablon = localFont({
  src: './shablon.ttf',
  variable: '--font-shablon',
});

export const sprayFont = localFont({
  src: './Spray-Letters.otf',
  variable: '--font-sprayFont',
});

export const body = localFont({
  src: './body.ttf',
  variable: '--font-body',
});
