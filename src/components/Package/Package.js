import React from "react";
import "./Package.css";
import Card from "../Card";
import data from "../Data";
import Heading from "../Heading/Heading";
const Package = () => {
  return (
    <>
      <section className="package">
        <Heading smallHead="startup" boldHead="packages" />
        <div className="container">
          <div className="row">
            {data.map((cardd, i) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={i}>
                  <Card
                    head={cardd.heading}
                    image={cardd.image}
                    list={cardd.list}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Package;
