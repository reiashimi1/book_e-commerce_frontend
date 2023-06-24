import React from 'react';

export type routeType = {
  label: string,
  redirectTo: string,
  permission: string
}

export const Routes = [
  {
    label: 'Home',
    redirectTo: '/',
    permission: 'customer',
  },
  {
    label: 'Home',
    redirectTo: '/admin-home',
    permission: 'admin',
  },
  {
    label: 'Books',
    redirectTo: '/books',
    permission: 'customer',
  },
  {
    label: 'Library',
    redirectTo: '/library',
    permission: 'admin',
  },
  {
    label: 'Orders',
    redirectTo: '/orders',
    permission: 'customer',
  },
  {
    label: 'All orders',
    redirectTo: '/all-orders',
    permission: 'admin',
  },
]