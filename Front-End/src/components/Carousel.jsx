

function Carousel() {
    return (      
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="img/slide.jpg" className="d-block w-100" alt="slide1" />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="img/slide2.jpg" className="d-block w-100" alt="slide2" />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="img/slide3.jpg" className="d-block w-100" alt="slide3" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    );
  }

  
  export default Carousel;