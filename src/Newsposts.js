import React, {PureComponent} from 'react';
import ReactHtmlParser from 'react-html-parser';

class Newsposts extends PureComponent {
    render() {
        return ( <tr >
            <td colSpan = "2" > 
            {
                ReactHtmlParser(this.props.content_html.replace(' URL', "").replace(/">.*\s<.*\s.*\s.*/g, `" target="_blank" > ${this.props.title}`)+ `</a></div><div>Author: ${this.props.author}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPublished on: ${new Date(this.props.date_published).toLocaleString('en-GB', {
                    timeZoneName: 'short',
                    hc: 'h24',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })}</div></p>`)
            }
            </td> 
            </tr>);
        }
    }

    export default Newsposts;