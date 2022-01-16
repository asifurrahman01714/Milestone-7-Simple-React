### How to install fontawesome icon in react?
```bash
1.npm i --save @fortawesome/fontawesome-svg-core
2.npm install --save @fortawesome/free-solid-svg-icons
3.npm install --save @fortawesome/react-fontawesome
```
### How to use fontawesome icon in react?
```bash
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />
```

### A thumb role for beginners
```bash
you have to use eventHandler ,where there is state actually.
```
### React router documentation
```bash
https://reacttraining.com/react-router/web/guides/quick-start
```
### Install react router
```bash
npm i react-router-dom
```

### Pass dynamic data to react router
```bash
1. <h3><Link to={`/product/${key}`}>{name}</Link> </h3>
    or
<h3><Link to={"/product/"+ key}}>{name}</Link> </h3>

2. <Route path="/product/:productId">
            <ProductDetails/>
    </Route>

3. import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ProductDetails = () => {
    console.log(useParams());
    const {productId} = useParams();
    return (
        <div>
            <h1>Product Id :{productId}</h1>
        </div>
    );
};
```

### Use React developer chrome extension