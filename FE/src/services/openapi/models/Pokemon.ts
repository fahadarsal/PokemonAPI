/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Base } from './Base';
import type { Name } from './Name';

export type Pokemon = {
    id?: number;
    name?: Name;
    type?: Array<string> | null;
    base?: Base;
};

