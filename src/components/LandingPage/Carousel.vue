<template>
  <div class="container">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
        <li data-target="#myCarousel" data-slide-to="5"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner">

        <div class="item active">
          <img src="static/assets/app_logo/Capitals.png" alt="Capitals" style="width:100%;">
          <div class="carousel-caption">
            <h3>Capitals</h3>
            <p>Associate countries and their capitals</p>
          </div>
        </div>

        <div class="item">
          <img src="static/assets/app_logo/Find on Map.png" alt="FindOnMap" style="width:100%;">
          <div class="carousel-caption">
            <h3>FindOnTheMap</h3>
            <p>Find the location you are with only a street view</p>
          </div>
        </div>

        <div class="item">
          <img src="static/assets/app_logo/History MCQ.png" alt="MCQ" style="width:100%;">
          <div class="carousel-caption">
            <h3>MCQ</h3>
            <p>Questions about the world</p>
          </div>
        </div>

        <div class="item">
          <img src="static/assets/app_logo/PicFind.png" alt="PicFind" style="width:100%;">
          <div class="carousel-caption">
            <h3>PicFind</h3>
            <p>Find the correct picture with only a description</p>
          </div>
        </div>

        <div class="item">
          <img src="static/assets/app_logo/Travel The World.png" alt="Travel The World" style="width:100%;">
          <div class="carousel-caption">
            <h3>TravelTheWorld</h3>
            <p>Take a of a monument everyday !</p>
          </div>
        </div>


        <div class="item">
          <img src="static/assets/app_logo/Sail.png" alt="Sail" style="width:100%;">
          <div class="carousel-caption">
            <h3>Sail</h3>
            <p>Find new land in 3 dimensions</p>
          </div>
        </div>

      </div>

      <!-- Left and right controls -->
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    data() {
      return {}
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .glyphicon-chevron-right:before, .glyphicon-chevron-left:before {
    color: #5a6cfc;
  }

  .carousel-indicators .active  {
    background-color: #a9b2f9;
  }

  .carousel-indicators li {
    border: 1px solid #a9b2f9;
  }

  .carousel-control.right {
    background-image: none;
    right: -100px;
  }

  .carousel-control.left {
    background-image: none;
    left: -100px;
  }

  .carousel-caption {
    display: none;
  }

  @media (min-width: 768px) {
    .container {
      width: 475px;
    }

    .carousel-indicators {
      bottom: -35px;
    }
  }
</style>
