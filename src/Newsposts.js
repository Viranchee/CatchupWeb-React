import React from 'react';

function HNCells(props) {
    return (
        <h1>{props.title}</h1>
    )
}

function Newsposts(props) { 
    
    return ( 
        <tr >
        <td colSpan = "2" > 
        {
            <HNCells  {...props}/>
        }
        </td> 
        </tr>);
}
        
        
export default Newsposts;
        
