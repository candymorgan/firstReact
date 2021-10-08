import { Component } from 'react'

  class Compstate extends Component {
      constructor() {
          super()
      
          this.state = {
               counter: 0
          }
      }

      clickMe(){
          this.setState({
              counter: this.state.counter + 1
          })
      }
      
    render() {
        return (
            <div>
              <h1>{this.state.counter}</h1> 
                <button className="btn" onClick={()=>this.clickMe()}>increment </button>
                
            </div>
        )
    }
}
export default Compstate