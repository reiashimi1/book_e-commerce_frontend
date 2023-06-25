import { notify } from 'react-notify-toast';

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

export const showSuccess = (message = 'Success', timeout = 4000) => {
  notify.show(message, 'custom', timeout, {
    background: '#11b771',
    text: 'white'
  });
};

export const showError = (error = 'Error', timeout = 4000) => {
  notify.show(error, 'custom', timeout, {
    background: '#ed1414',
    text: 'white',
  });
};
