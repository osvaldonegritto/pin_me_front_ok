import React from "react";
import logofooter from '../../img-pin/footer-logo.svg';
function Section6() {
    return(
    <div>
        <footer id="footer">
            <div className="footer-text">
              <p className="paragraph">2020 &copy; All rights reserved.</p>
            </div>
            <div className="footer-logo">
            {/* <img src="./img-pin/footer-logo.svg" alt=""/> */}
             <img src={logofooter} alt=""/>
            </div>
        </footer>
    </div>)
}
export default Section6;