import React from 'react';
import admin from '../assets/admin.png';

const AdminSignIn = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-10">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden max-w-4xl">
        <div className="bg-blue-500 p-10 flex flex-col items-center justify-center w-96">
          <div className="flex flex-col items-center">
            <h2 className="text-white text-3xl font-bold my-4">Admin Sign In</h2>
            <div className="w-52 h-52 bg-yellow-400 rounded-full mb-4">
              <img src={admin} alt="" />
            </div>
          </div>
        </div>

        <div className="p-12 w-1/2 ">
          <div className=" m-5">
            <div className="">
              <button className="text-blue-500 border-b-2 pb-2 border-blue-500 focus:outline-none">
                Sign In
              </button>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl ">
              <div className="card-body">
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-600">Username</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600">Create Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Create Password"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div className="form-control flex-none">
                        <label className="flex gap-2 cursor-pointer">
                          <span className="label-text">Remember me</span>
                          <input type="checkbox" checked="" className="checkbox checkbox-primary" />
                        </label>
                      </div>
                      <div>
                        <h1>Forget Your Password</h1>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      localStorage.setItem('token', 'sgfgigdifgiagsihoau374663689wknala$%%Q%hgsaj')
                    }
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;
