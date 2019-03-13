import React, { Component } from 'react';
import Newsposts from "./Newsposts"

class Table extends Component {

 render() {
    // {this.props.data}
     return (
     <table className="table-bordered table col-sm-8 col-lg-10 col-md-10 col-xl-11" id="contentHn">
        <tbody><Newsposts /></tbody>
     </table>
     );
 }
}

export default Table;