//Make sure to import React and ReactDOM into your /src/index.js
import React from 'react'
import ReactDOM from 'react-dom'


// Define these exported classes
export class OlderCoaster extends React.Component {
// class OlderCoaster extends React.Component {
  // your code here
  render() {
    return (
    // <div id="blog-post">
    <div class="oldercoaster">
    <p>Two grannies having the time of their life!</p>
    <p>Passengers:</p>
    <ul>
      <li>Agnes</li>
      <li>Muriel</li>
    </ul>
    </div>
    //////////////////EXPECTED BY TEST
    // <div id="blog-post">
    // <p>Two grannies having the time of their life!</p>
    // <p>Passengers:</p>
    // <ul><li>Agnes</li><li>Muriel</li></ul></div>
    // ' to equal '
    // <div class="oldercoaster">
    // <p>Two grannies having the time of their life!</p>
    // <p>Passengers:</p><ul><li>Agnes</li><li>Muriel</li></ul></div>





    //////////////////
    )
  } //render
} //OlderCoaster

export class InFrontOfYou extends React.Component {
// class InFrontOfYou extends React.Component {
  // your code here
  render(){
    return(
    <div>
      <p>You shouldn't look too far.</p>
      <p>Sometimes, the solution is right in front of you.</p>
    </div>
    //////////////////expected by test
    // <div><p>You `shouldn&#x27;t` look too far.</p>
    // <p>Sometimes, the solution is right in front of you.</p>
    // </div>
    // ' to equal '
    // <div><p>You shouldn&#x27;t look too far.</p>
    // <p>Sometimes, the solution is right in front of you.</p></div>




    /////////////////
    )
  }
}

export class ButcherShop extends React.Component {
// class ButcherShop extends React.Component {
  // your code here


  render(){
    const BUTCHER_PRODUCTS = [
      'Tenderloin',
      'Short ribs',
      'Beef shin',
      'Ribeye'
    ];

    // const products = [<li>BUTCHER_PRODUCTS[0]</li>,<li>BUTCHER_PRODUCTS[1]</li>,<li>BUTCHER_PRODUCTS[2]</li>,<li>BUTCHER_PRODUCTS[3]</li>];
    const products = [<li>{BUTCHER_PRODUCTS[0]}</li>,<li>{BUTCHER_PRODUCTS[1]}</li>,<li>{BUTCHER_PRODUCTS[2]}</li>,<li>{BUTCHER_PRODUCTS[3]}</li>];

    //////////
    return (
    <div class="butcher-shop">
      <p>Hello! We have the following products for sale today:</p>
      <ul>
        {products}
      </ul>
    </div>
    )
    /////////
  }
}

//
export class App extends React.Component{
// class App extends React.Component{
  render(){
    return(
      // {OlderCoaster}
      // {InFrontOfYou}
      // {ButcherShop}
      <div id="app">
        <OlderCoaster/>
        <InFrontOfYou/>
        <ButcherShop/>
      </div>

    )
  }

}
//
ReactDOM.render(
  <div>

    // render your components here! Refer back to the previous README if you are lost
    <App />
  </div>,
  document.getElementById('root')
)
