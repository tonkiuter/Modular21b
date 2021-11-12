import React, { Component }from 'react';
import ReactToPrint from 'react-to-print';
import HojaUrgencias from './HojaUrgencias';

class PdfComponent extends Component {
     
    render() {
      return (
        <div>
          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
          />
          <HojaUrgencias ref={(response) => (this.componentRef = response)} />
        </div>
      );
    }
 
}
 
export default PdfComponent;