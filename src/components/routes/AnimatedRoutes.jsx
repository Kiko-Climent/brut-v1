import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "../Layout";
import Home from "../../pages/Home";
import Gallery from "../../pages/Gallery";
import About from "../../pages/About";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route 
        path="/"
        element={
          <PageWithAnimation>
            <Layout><Home /></Layout>
          </PageWithAnimation>
        }
        />
        <Route 
        path="/gallery"
        element={
          <PageWithAnimation>
            <Layout><Gallery /></Layout>
          </PageWithAnimation>
        }
        />
        <Route 
        path="/about"
        element={
          <PageWithAnimation>
            <Layout><About /></Layout>
          </PageWithAnimation>
        }
        />
      </Routes>
    </AnimatePresence>
  );
};

const PageWithAnimation = ({children}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoutes;