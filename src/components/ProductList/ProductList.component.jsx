import React from 'react';
import './ProductList.style.css';
import Product from '../../components/Product/Product.component'
import site from '../../img/portfolio-1.png'
import game from '../../img/game.png'

const ProductlistComponent = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Jamshid(IVY)</h1>
        <p className="pl-desc">
          IVY is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        <Product imgProps = {site} link = {'https://infallible-tereshkova-5acff4.netlify.app/'}/>
        <Product imgProps = {game} link = {'https://jamshidwizard.github.io/StoneScissorPapper/'} />
        <Product txt  = {'Admin panel'} link = {'https://apex-study.herokuapp.com/'}/>
        <Product txt  = {'Blog'} link = {'https://jamshidwizard.github.io/react-blog/'} />  
      </div>
    </div>
  );
}

export default ProductlistComponent;
