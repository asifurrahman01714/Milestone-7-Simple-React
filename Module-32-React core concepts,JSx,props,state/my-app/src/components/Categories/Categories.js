import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
const products = [
    {name:'Asus', category:'Laptop'},
    {name:'Dell', category:'Laptop'},
    {name:'HP', category:'Laptop'},
    {name:'Lenovo', category:'Laptop'},
    {name:'Acer', category:'Laptop'},
    {name:'Canon', category:'Camera'},
    {name:'Nikon', category:'Camera'},
    {name:'Sony', category:'Camera'},
    {name:'Samsung', category:'Mobile'},
    {name:'Apple', category:'Mobile'},
    {name:'Huawei', category:'Mobile'},
    {name:'Oppo', category:'Mobile'},
];
const Categories = () => {
    const [category, setCategory] = useContext(CategoryContext);
    const [newCategory, setNewCategory] = React.useState([]);
    React.useEffect(()=>{   
    const filteringProducts = products.filter(product => product.category === category);
    console.log(filteringProducts);
    setNewCategory(filteringProducts);
    },[])
    return (
        <div>
            <h1>Category  :{category}</h1>
            <h2>Total finding products :{filteringProducts.length}</h2>
            <button onClick={()=> setCategory('Laptop')}>Laptop</button>
            <button onClick={()=> setCategory('Mobile')}>Mobile</button>
            <button onClick={()=> setCategory('Camera')}>Camera</button>
            {
                filteringProducts.map(product => <CategoryDetails product={product}/>)
            }
        </div>
    );
};

export default Categories;