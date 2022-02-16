import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [productName, setProductName] = useState("");

  useEffect(() => {
    const url = `http://52.26.193.201:3000/products/list`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(response);
        setProductName(json.name);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>{productName}</h2>
    </div>
  );
};

export default App;

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
