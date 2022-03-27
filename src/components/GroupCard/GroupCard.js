import React from 'react';
import Card from '../Card/Card';

const Groupcard = () => {
   const products =[
        {id: 1, name:'laptop pro', price:13000},
        {id: 2, name:'laptop cro', price:13000},
        {id: 3, name:'laptop sro', price:13000}
    ]
    return (
        <div>
            <h1>Hi this is card group section</h1>
            <div className="card-group">
                {
                    products.map(product => <Card product={product}
                    key={product.id}></Card>)
                }
            </div>
        </div>
    );
};

export default Groupcard;