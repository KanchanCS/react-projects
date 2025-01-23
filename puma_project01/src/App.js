import React from "react";
import "./App.css";
import Header from "./Components/Header.js";
import Hero from "./Components/Hero.js";
import Footer from "./Components/Footer.js";
import shooes from './Assests/img1.jpg';
import shooes2 from './Assests/img4.jpg';
import shooes3 from './Assests/img3.jpg';

const App = () => {
  const data = [{
    title: 'BMW M Motorsport',
    price: '5999',
    tranding: 'vimal',
    img: shooes
  },
    {
      title: 'Scuderia Ferrari',
      price: '4999',
      tranding: 'vimal-A',
      img:shooes2 
    },
    {
      title: 'Mercedes-AMG Petronas F1',
      price: '3999',
      tranding: 'vimal-B',
      img: shooes3 
    },
    {
      title: 'Smashic Unisex Sneakers',
      price: '2999',
      tranding: 'vimal-C',
      img: shooes2 
    },
    {
      title: 'PUMA Court Shatter',
      price: '1999',
      tranding: 'vimal-S',
      img: shooes
    }
  ]


  return (
    <div className="app">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '100px' }}>
        {/* map method */}

        {
          data.map((ele) => {
            return (<Hero Title={ele.title} Price={ele.price} Img={ele.img} Tranding={ele.tranding}/>)
          })
        }

        {/* <Hero title={data[0].title} price= {data[0].price} tranding={data[0].tranding} img={data[0].img} />
        <Hero title={data[1].title} price={data[1].price} tranding={data[1].tranding} img={ data[1].img} />
        <Hero title={data[2].title} price={data[2].price} tranding={data[2].tranding} img={ data[2].img} />
        <Hero title={data[3].title} price={data[3].price} tranding={data[3].tranding} img={ data[3].img} />
        <Hero title='PUMA Court Shatter' price='1999' tranding='vimal-S' img={ shooes} /> */}
      </div>
      <Footer />
    
    </div>
  );
};

export default App;
