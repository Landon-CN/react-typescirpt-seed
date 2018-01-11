// export { default as Page } from './Page/Page';
import React from 'react';
import Loadable from 'react-loadable';
function test(){
    return  Loadable({
    loader: () =>{
        return  import('./Page/Page')
    },
    loading:()=>{return <div>123</div>}
  });

}

  export {
    test
  }