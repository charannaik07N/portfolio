// global.d.ts
declare module 'tailwindcss-animate';
declare module 'tailwindcss-animate/transform' {
  import { Config } from 'tailwindcss';
  const config: Config;
  export default config;
}