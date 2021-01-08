import React, { Component } from "react";
import displayPicture from "../images/displayPicture.jpg";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <table className="container">
          <tbody>
            <tr>
              <td className="display-picture">
                <center>
                  <img
                    src={displayPicture}
                    alt="Hari Narayana Batta (New York)"
                    // style={{ width: "350px" }}
                    style={{ width: "100%", height: "auto" }}
                  />
                </center>
              </td>
              <td style={{ padding: "30px", textAlign: "center" }}>
                <h3>Hi! I'm Hari Narayana Batta.</h3>
                <hr />
                <h5>
                  Master of Science in Computer Science student at George Mason
                  University.
                </h5>
                <hr />
                <p style={{ textAlign: "center" }}>
                  <a href="https://github.com/hbatta/">GitHub</a>
                  {"\u00A0"} {"\u00A0"} | {"\u00A0"} {"\u00A0"}
                  <a href="https://www.linkedin.com/in/harinarayanabatta/">LinkedIn</a>
                  {"\u00A0"} {"\u00A0"} | {"\u00A0"} {"\u00A0"}
                  <a href="mailto:harinarayanabatta@gmail.com">Email</a>
                  {"\u00A0"} {"\u00A0"} | {"\u00A0"} {"\u00A0"}
                  <a href="https://open.spotify.com/user/31zxiiotptio27svdqqazqb2znqi">Spotify</a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
