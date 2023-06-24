import React from 'react';
import { Routes, routeType } from "../utils/routes";
import { Link } from 'react-router-dom';

const NavigationRoutes = () => {
  const currentPermission = 'customer';

  return (
    <div className="flex ml-20 text-gray-800 uppercase text-lg">
      {Routes.map((route: routeType, index: number) => {
        if (route.permission === currentPermission) {
          return (
            <Link key={index} to={route.redirectTo}>
              <div className="cursor-pointer mx-10 hover:text-cyan-800">{route.label}</div>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default NavigationRoutes;
