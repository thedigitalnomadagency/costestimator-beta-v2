import { configActionTypes } from './config-action-types';

export const setConfig = (config) => ({
  type: configActionTypes.SET_CONFIG,
  payload: config,
});

export const addConfig = (priceConfig) => ({
  type: configActionTypes.ADD_CONFIG,
  payload: priceConfig,
});

export const setNewConfig = (priceConfig) => ({
  type: configActionTypes.SET_NEW_CONFIG,
  payload: priceConfig,
});

export const deleteConfig = (priceConfig) => ({
  type: configActionTypes.DELETE_CONFIG,
  payload: priceConfig,
});
