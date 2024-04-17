	
import React from 'react';
 
const SimpleWithChildren =
  ({ children }: // nome do parâmetro
    { children: React.ReactNode }) // tipo do parâmetro
    : React.ReactNode => { // retorno da função
 
    return (<div> {children} </div>)
 
  }
 
 
export default SimpleWithChildren;
