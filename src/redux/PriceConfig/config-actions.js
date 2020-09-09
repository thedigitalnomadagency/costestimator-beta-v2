import { configActionTypes } from './config-actions-types';

export const addConfig = (priceConfig) => ({
  type: configActionTypes.ADD_CONFIG,
  payload: priceConfig,
});

export const deleteConfig = (priceConfig) => ({
  type: configActionTypes.DELETE_CONFIG,
  payload: priceConfig,
});
