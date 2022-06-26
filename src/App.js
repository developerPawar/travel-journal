import React from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const returnDetails = data.map(details => {
    return (
      <Cards 
          key = {details.id}
          details = {details}
      />
    )
  })

  return (
    <>
      <Navbar />     
      {/* <Cards /> */}
      <section>
        {returnDetails}
      </section>
    </>
  )
}

export default App;
