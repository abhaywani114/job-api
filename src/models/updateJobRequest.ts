/**
 * Jobs API (nodeJS)Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface UpdateJobRequest {
  company: string;
}

export const updateJobRequestSchema: Schema<UpdateJobRequest> = object({
  company: ['company', string()],
});