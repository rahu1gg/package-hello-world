// export package functions

import type { HelloWorldOptions } from './types';

export function helloWorld({ firstName, lastName }: HelloWorldOptions) {
  if (lastName === undefined) {
    console.log(`Hello ${firstName}!`);
    return;
  }

  console.log(`Hello ${firstName} ${lastName}!`);
}
