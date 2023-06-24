import React, { ReactNode } from 'react';
import NavigationBar from './NavigationBar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="min-h-screen flex flex-row bg-gray-100">
        <div className="flex-1">
          <NavigationBar />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
