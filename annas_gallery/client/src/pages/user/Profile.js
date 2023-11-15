import React from "react";
import UserMenu from './../../components/Layout/UserMenu';
import Layout from "../../components/Layout/Layout";

const Profile = () => {
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>

          <div className="col-md-9">
            <h1>user profile</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;