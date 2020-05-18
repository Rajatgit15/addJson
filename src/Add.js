
import React, { Component } from 'react';

class Add extends Component {
constructor(props){
    super(props)
 this.state={
     total: "",
     index: null
 }
}

 
  handleClick=(el, index)=>{
       this.setState({
          total: Number(el.X)+ Number(el.Y) ,
          index: index
      })
  }
    
  
    
    render() {
        let value = this.props.test
        return (
            <div className="col">
                <table div className="table">
                    <tr>
                        
                        <th >X</th>
                        <th >Y</th>
                        <th>Add</th>
                        <th>Total</th>
                    
                    </tr>
                
                  
                {value.map((el,index)=>{
                    
                    return (
                        <tr key={index}>
                            <td className="pos-x">{el.X}</td>
                            <td>{el.Y}</td>  
                            <td><button onClick={()=>this.handleClick(el, index)}>ADD x+y</button></td>   
                            <td>{this.state.index === index ? this.state.total : ""}</td>
                        </tr>
                    )
                })}
                </table>
            </div>
        );
    }
}

export default Add;