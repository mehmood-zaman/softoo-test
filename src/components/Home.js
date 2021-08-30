import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import Loader from "react-loader-spinner";

const Home = (props) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const handleClick = (id) => {
    props.addToCart(id);
  };

  console.log(filteredItems);
  const render = () => {
    const itemsToRender =
      filteredItems.length > 0 ? filteredItems : props.items;
    return itemsToRender.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.name} />

            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                handleClick(item.id);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <span className="card-title">{item.name}</span>
            <p>
              <b>Price: {item.price}$</b>
            </p>
            <p>
              <b>Color: {item.colour}</b>
            </p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <input
        placeholder="Filter by colour"
        onChange={(event) => {
          if (event.target.value) {
            var filtered = props.items.filter((p) =>
              String(p.colour)
                .toLowerCase()
                .startsWith(event.target.value)
            );

            setFilteredItems(filtered);
          } else {
            setFilteredItems([]);
          }
        }}
      />
      {props.loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader type="TailSpin" color="#ee6e73" height={80} width={80} />
        </div>
      ) : (
        <div className="box">{render()}</div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    items: state.items,
    loading: state.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
