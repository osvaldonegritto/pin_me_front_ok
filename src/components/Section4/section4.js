import React from "react";
function Section4() {
    return(
        <div id="services">
          <div className="accordion-sect4">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Sed ut perspiciatis
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Ut enim ad minima veniam
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, recusandae ullam sed in totam obcaecati, quod laboriosam architecto numquam ipsam earum, ea deserunt neque iusto. Perspiciatis fugit inventore quos autem sed libero ab corporis illum obcaecati. Libero amet, aspernatur omnis praesentium dolor eligendi iste excepturi.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Sit amet, consectetur, adipisci
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at praesentium officia excepturi. Quo cum laboriosam, sunt voluptatem quasi magnam dolor esse iusto doloribus delectus cumque veritatis, officiis quia. Cupiditate?
                    </div>
                  </div>
                </div>
              </div>   
              </div>
         </div>)
}
export default Section4;
