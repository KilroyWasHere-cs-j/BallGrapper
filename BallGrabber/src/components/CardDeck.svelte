<div class="wrapper bg-white rounded-lg">
  <div class="one border-solid border-2 border-baseballRed rounded-lg">One</div>
  <div class="two border-solid border-2 border-baseballRed rounded-lg">Two</div>
  <div class="three border-solid border-2 border-baseballRed rounded-lg">Three</div>
  <div class="four border-solid border-2 border-baseballRed rounded-lg">Four</div>
  <div class="five border-solid border-2 border-sky-500 rounded-lg">Five</div>
  <div class="six border-solid border-2 border-sky-500 rounded-lg">Six</div>
</div>

<style>
  .wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  margin-top: 100px;
}

.one {
  grid-column: 1;
  grid-row: 1;
}

.two {
  grid-column: 2;
  grid-row: 1;
}

.three {
  grid-column: 3;
  grid-row: 1;
}

.four {
  grid-column: 1;
  grid-row: 2;
}

.five {
  grid-column: 2;
  grid-row: 2;
}

.six {
  grid-column: 3;
  grid-row: 2;
}

</style>