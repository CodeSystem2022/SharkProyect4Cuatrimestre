import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../components/Products';
import Carousel from '../components/Carousel';




const Home = () => {
    return (
       
            <div>
                {/*Seccion de productos*/}
                <Link to="/Products">
                    <img src="https://helix-aries-969.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F53c78f00-661f-4e94-be61-bb401036ef16%2F8636c9f5-981f-4689-86a8-156b3df65142%2Fbotontienda.jpg?table=block&id=09f05d5e-3873-4b1c-85fb-0211f86aaaa1&spaceId=53c78f00-661f-4e94-be61-bb401036ef16&width=2000&userId=&cache=v2" 
                    height={300} //esto despues se cambia en el CSS
                    alt="Ver tienda" />
                </Link>
                <Carousel/>
            
                {/* ... */}
            </div>
       
    );
};

export default Home;
