import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            A blood bank collects, separates, tests and stores blood until a
            patient needs it. If you’ve donated blood before, you’ve been part
            of the blood banking process. The first blood bank in the United
            States was established in 1937 by Dr. Bernard Fantus at Cook County
            Hospital in Chicago. At the time, it was not possible to store blood
            for more than a few days. Most transfusions were person-to-person, a
            dangerous process which made it hard to find donors. Hoping to solve
            this problem, Dr. Fantus began experimenting with ways to safely
            store blood. Initially called the Blood Preservation Laboratory, he
            changed the name to “blood bank” which was less likely to scare away
            potential donors. The ability to collect and store blood for an
            extended period of time revolutionized how doctors treated patients.
            Donating blood was no longer a high-risk process and patients in
            need had access to blood they needed for survival.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
