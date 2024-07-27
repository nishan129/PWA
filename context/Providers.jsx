"use client";
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../app/api/uploadthing/core";

// import {SessionProvider} from "next-auth/react";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { SessionProvider } from 'next-auth/react';


export default function Providers({children}) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <Toaster
        position="top-center"
        reverseOrder={false}/>     
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />   
        <SessionProvider>
       <Provider store={store}>
       {children}
       </Provider>
       </SessionProvider>
    </ThemeProvider>
  );
}
