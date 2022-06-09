import React, { useEffect } from 'react';

import MyComponent from 'dw-components';

import 'dw-components/dist/index.css';

                   

const Example = (props) => {



    useEffect(()=>{

        initializeIcons ();

    },[]);



    return (

        <MyComponent />

    );

}



export default Example;