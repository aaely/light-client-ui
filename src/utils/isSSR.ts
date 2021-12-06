/* eslint-disable @typescript-eslint/no-inferrable-types */
export const isSSR: boolean = !(
    typeof window !== 'undefined' && window.document?.createElement
  );