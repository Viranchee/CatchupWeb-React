import React from 'react';
import Newsposts from "./Newsposts"

function Table(props) {
   
   const dataJSX = props.data.map (post => <Newsposts {...post} key={post.id}/>)
   
   return (
      <table className="table-bordered table col-sm-8 col-lg-10 col-md-10 col-xl-11" id="contentHn">
      <tbody>{dataJSX}</tbody>
      </table>
      )
   }
   
   export default Table