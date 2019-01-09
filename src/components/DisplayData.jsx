import React from "react";

class DisplayData extends React.Component{

    render(){

        // let required =[
        //     "State",
        //     "Lat",
        //     "Long",
        //     "EstimatedPopulation",
        //     "TotalWages"
        // ];

        // {required.map((element) => 
        //     <h1>{this.props.data[element]}</h1>
        // )}
        
        return(
            <div>
                <div id="list-header">{this.props.data["LocationText"]} </div>
                <ul>
                    <li className="list-layout">State: {this.props.data["State"]}</li>
                    <li className="list-layout">Location:( {this.props.data["Lat"]},{this.props.data["Long"]})</li>
                    <li className="list-layout">Population (Estimated): {this.props.data["EstimatedPopulation"]}</li>
                    <li className="list-layout">Total Wages: {this.props.data["TotalWages"]}</li>
                </ul>  
            </div>
        );
    }
}

export default DisplayData;