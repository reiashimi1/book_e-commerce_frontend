import React from 'react';
import UserDropdown from './UserDropdown';
import NavigationRoutes from "./NavigationRoutes";

const NavigationBar = () => {
  return (
    <nav className="bg-white">
      <div className="relative items-center h-16 lg:h-20 shadow flex">
        <div className="flex w-full">
          <NavigationRoutes />
        </div>
        <div className="lg:flex w-full justify-end">
          <div className="flex mr-6">
            <UserDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
