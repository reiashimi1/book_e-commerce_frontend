import React from 'react';
import { useSelector } from "react-redux";
import _ from "lodash";
import Layout from "../layout/Layout";

const ProfilePage = () => {
  const firstName = useSelector((state) => _.get(state, 'userReducer.firstName', ''));
  const lastName = useSelector((state) => _.get(state, 'userReducer.lastName', ''));
  const email = useSelector((state) => _.get(state, 'userReducer.email', ''));
  const userRole = useSelector((state) => _.get(state, 'userReducer.role', ''));

  return (
    <Layout>
      <div className="flex justify-center w-full mt-20">
        <div className="border border-cyan-800 w-1/2 p-10 bg-slate-200 rounded-xl">
          <div className="text-3xl font-semibold mb-10">My Profile</div>
          <div className="flex justify-between border-b border-cyan-800 p-2">
            <div className="text-cyan-900 font-bold">First Name</div>
            <div className="text-cyan-900 font-semibold">{firstName}</div>
          </div>
          <div className="flex justify-between border-b border-cyan-800 p-2">
            <div className="text-cyan-900 font-bold">Last Name</div>
            <div className="text-cyan-900 font-semibold">{lastName}</div>
          </div>
          <div className="flex justify-between border-b border-cyan-800 p-2">
            <div className="text-cyan-900 font-bold">Email</div>
            <div className="text-cyan-900 font-semibold">{email}</div>
          </div>
          <div className="flex justify-between border-b border-cyan-800 p-2">
            <div className="text-cyan-900 font-bold">Role</div>
            <div className="text-cyan-900 font-semibold">{userRole.toUpperCase()}</div>
          </div>
          <div className="flex justify-between p-2">
            <div className="text-cyan-900 font-bold">Profile Photo</div>
            <div className="text-cyan-900 font-semibold italic">No image</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage;