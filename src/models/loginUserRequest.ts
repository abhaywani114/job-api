/**
 * Jobs API (nodeJS)Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface LoginUserRequest {
  email: string;
  password: string;
}

export const loginUserRequestSchema: Schema<LoginUserRequest> = object({
  email: ['email', string()],
  password: ['password', string()],
});