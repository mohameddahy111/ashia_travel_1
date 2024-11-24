"use client";


import { SnackbarProvider } from 'notistack';
import * as React from 'react';

export interface ISnackProps {
    children: React.ReactNode;
}

export default function Snack ({children}: ISnackProps) {
  return (
    <SnackbarProvider anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
    {children}
  </SnackbarProvider>
);
}
