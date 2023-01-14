import { Component } from "react"; 
import Thanks from './thanks.png';


export class Giftlist extends Component{
    state={
        userInput:'',
        presentList:[]
    }
onChangeInfo(e){
    this.setState({userInput:e});
}

addItem(input){
    if(input===''){
        alert('Attention! Empty field! Please, fill out!');
    }
    else{let arrayList=this.state.presentList;
    arrayList.push(input);
    this.setState({presentList:arrayList,userInput:""})
}
}

deleteItem(){
    let arrayList = this.state.presentList;
    arrayList=[];
    this.setState({presentList:arrayList})
}

crossedItem(e){
    const li = e.target;
    li.classList.toggle('crossed');
}


onFormSubmit(e){
    e.preventDefault();
}

    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="Write the type of the gift..."
                onChange={(e)=>{this.onChangeInfo(e.target.value)}}
                value={this.state.userInput} />
            </div>
            
            <div className="container">
                <ul>
                    {this.state.presentList.map((item,index)=>(
                    <li onClick={this.crossedItem} key={index}>{item}<img src={Thanks} alt="thank" width="35px"/></li>
                    ))}
                </ul>
            </div>

            <div className="container">
                <button onClick={()=>this.addItem(this.state.userInput)} className="btn add">ADD</button>
            </div>
            <div className="container">
                <button onClick={()=>this.deleteItem()} className="btn delete">DELETE</button>
            </div>
            </form>
            </div>
        )
    }
}

export default Giftlist;