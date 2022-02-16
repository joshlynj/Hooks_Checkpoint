// I am not finished! Sorry in advance....

import React, { useState, useEffect } from "react";
import List from "./Components/List";
//import { formatProductData } from "./helperFunctions"

const url = `http://52.26.193.201:3000/products/list/`;

function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then(formatData)
    .then(console.log);
}

function formatData(data) {
  return data;
}

const App = () => {
  let [productData, setProductData] = useState([]);
  let [product, setProduct] = useState([]);
  useEffect(() => {
    getData(url).then((allProductData) => {
      setProductData(allProductData);
    });
  }, []);

  const productClicked = (id) => {
    let productSearch = "http://52.26.193.201:3000/products/" + id;
    fetch(productSearch)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => alert("Product not found."));
  };

  return (
    <div className="App">
      <List products={productData} productClicked={productClicked} />
    </div>
  );
};

export default App;

//   useEffect(() => {
//     const url = `http://52.26.193.201:3000/products/list`;

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(response);
//         setProductName(json.name);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>{productName}</h2>
//     </div>
//   );
// };

// useEffect(() => {
//   const url = `http://52.26.193.201:3000/products/list`;

//   const fetchData = async () => {
//     try {
//       const response = await fetch(url);
//       const json = await response.json();
//       console.log(json.name);
//       setProductName(json.name);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   fetchData();
// }, []);

//  useEffect(() => {
//     fetch(`http://52.26.193.201:3000/products/list`)
//         .then(response => response.json())
//         .then(({ data: books }) => {
//             updateBooks(books);
//         });
// }, []);

// function App() {
// 	const URL = `http://52.26.193.201:3000/products/list`;
// 	const [product, setProduct] = useState(1);
// 	const [productData, setProductData] = useState({});

// 	async function fetchProductData() {
// 		fetch(URL + product)
// 			.then((res) => res.json())
// 			.then(productData);
// 	}

// 	useEffect(() => {
// 		fetchProductData(product);
// 	}, [product]);

// 	const ConditionalHTML = productData.name ? (
// 		<>
// 			<h1>{productData.name.toUpperCase()}</h1>
// 		</>
// 	) : (
// 		<></>
// 	);

// 	return (
// 		<div className="App">
// 			<h1>useEffect Hook Demo</h1>
// 			<h2>Input a Pokemon's Name (or Number)</h2>
// 			<input id="user-input" />
// 			<button
// 				onClick={(e) => {
// 					setProduct(document.querySelector("#user-input").value);
// 				}}
// 			>
// 				LOOK UP PRODUCT
// 			</button>
// 			{ConditionalHTML}
// 		</div>
// 	);
// }
