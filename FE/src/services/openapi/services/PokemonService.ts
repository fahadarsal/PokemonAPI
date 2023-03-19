/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pokemon } from '../models/Pokemon';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PokemonService {

    /**
     * @returns Pokemon Success
     * @throws ApiError
     */
    public static getWeatherForecast(): CancelablePromise<Array<Pokemon>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Pokemon',
        });
    }

}
