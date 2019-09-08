import React, { Component } from "react";
import MainHead from "../comp/general/header";
import Layout from "../comp/general/layout";
import Link from "next/link";
import Header from '../comp/general/header'
import ServiceWrapper from '../comp/servises/serviceWraper'
class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <ServiceWrapper/>
        </Layout>
      </React.Fragment>
    );
  }
}
export default Main;
