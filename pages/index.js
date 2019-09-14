import React, { Component } from "react";
import MainHead from "../comp/general/header";
import Layout from "../comp/general/layout";
import Link from "next/link";
import Header from '../comp/general/header'
import ServiceWrapper from '../comp/servises/serviceWrapper'
import WorkshopWrapper from "../comp/workshops/workshopWrapper";
import Calender from "../comp/workshops/calender";
import ProductList from '../comp/products/productList';
import JobWrapper from '../comp/jobs/jobWrapper';
import Blog from '../comp/blog/blog';
import FlowChart from '../comp/flowChart/flowChartWrapper'
class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          {/* <ServiceWrapper/> */}
          {/* <WorkshopWrapper/> */}
          {/* <Calender /> */}
          {/* <ProductList /> */}
          {/* <JobWrapper /> */}
          {/* <Blog /> */}
          <FlowChart />
        </Layout>
      </React.Fragment>
    );
  }
}
export default Main;
