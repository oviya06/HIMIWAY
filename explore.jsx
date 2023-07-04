import React from "react";
import axios from "axios";
import Button from '@mui/material/Button'; 
import Appps from "./userappbar";

class Explore extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get(`http://localhost:8080/getAllCycleDetails`).then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }
alert = () => {
  window.alert("Added to cart");
}
  render() {
    return (
      <div>
        <Appps/>
          <table style={{marginLeft:"300px",marginTop:"70px"}}>
            <tbody class="display">
              {this.state.posts.map((post) => (
                <tr>
                  <td>
                    <img src={post.img} alt="hello" style={{width: "250px",height:"250px",display:"inline-block"}}/>
                  </td><br/><br/><br/>
                  <td>𝐓𝐢𝐭𝐥𝐞: {post.title}<br/>
                      𝐏𝐫𝐢𝐜𝐞: {post.price}<br/>
                      𝐂𝐨𝐥𝐨𝐫: {post.color}<br/>
                      𝐒𝐡𝐢𝐩𝐩𝐢𝐧𝐠: {post.shipping}<pre/><br/>
                      <Button onClick={this.alert} style={{color:"maroon"}}>Add to Cart</Button></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    );
  }
}
export default Explore;