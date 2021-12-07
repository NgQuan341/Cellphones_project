import React, { useState } from "react";
import Card from "../content/Card";

export const Products = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <section className="section" id="sale">
        <div className="search">
          <i className="fa fa-search"></i>
          &nbsp;
          <input
            type="search"
            className="search-input"
            value={searchTerm}
            placeholder="Search here..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <button
            className="main-button"
            onClick={(e) => setSearchTerm(e.target.value)}
            value={"samsung"}
          >
            samsung
          </button>
          <button
            className="main-button"
            onClick={(e) => setSearchTerm(e.target.value)}
            value={"vivo"}
          >
            vivo
          </button>
          <button
            className="main-button"
            onClick={(e) => setSearchTerm(e.target.value)}
            value={"4 GB"}
          >
            Ram 4G
          </button>
          <button
            className="main-button"
            onClick={(e) => setSearchTerm(e.target.value)}
            value={"Exynos 9611 8 multiply"}
          >
            Exynos
          </button>
          <button
            className="main-button"
            onClick={(e) => setSearchTerm(e.target.value)}
            value={"Totolink"}
          >
            Totolink
          </button>
          <button
            className="main-button"
            onClick={(e) => setSearchTerm(e.target.value)}
            value={7790000}
          >
            7,000,000
          </button>
        </div>
        <div className="container">
          <div className="row">
            {products
              .filter((product) => {
                if (searchTerm === "") {
                  return null;
                } else if (
                  product.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  searchTerm === product.old_price ||
                  searchTerm === product.new_price ||
                  product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  searchTerm === product.cpu ||
                  searchTerm === product.ram
                ) {
                  return product;
                }
              })
              .map((product, index) => (
                <>
                  <Card
                    key={index}
                    id={product.id}
                    img={product.img}
                    name={product.name}
                    old_price={product.old_price}
                    new_price={product.new_price}
                    check_price={true}
                    displayAll={false}
                  />
                </>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
