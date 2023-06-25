import React from 'react';
import { Routes, routeType } from "../utils/routes";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import _ from "lodash";

const NavigationRoutes = () => {
  const userRole = useSelector((state) => _.get(state, 'userReducer.role', null));

  return (
    <div className="flex ml-20 text-gray-800 uppercase text-lg">
      {Routes.map((route: routeType, index: number) => {
        if (route.permission === userRole) {
          return (
            <Link key={index} to={route.redirectTo}>
              <div className="cursor-pointer mx-10 hover:text-cyan-800 flex-1 w-full">{route.label}</div>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default NavigationRoutes;
