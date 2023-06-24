import React from 'react';

export const hasPermission = (route: string): boolean => {
  return true;
}

export const amountFormatter = (
  amount: number,
  currencyCode = 'EUR',
  locales = 'en-US',
  maximumFractionDigits = 2
) => {
  const options = { minimumFractionDigits: 2, maximumFractionDigits };
  const formattedAmount = parseFloat(amount.toString()).toLocaleString(locales, options);
  return `${formattedAmount} ${currencyCode}`;
};

export const isArrayEmpty = (array: any[]) => array.length === 0;

export const isObjectEmpty = (object: any) => Object.keys(object).length === 0;