import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Bootstrap from "./css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
 
    <main>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      {children}
      <Footer></Footer>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
