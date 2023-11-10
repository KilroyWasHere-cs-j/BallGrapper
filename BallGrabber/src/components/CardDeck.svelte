<div class="wrapper w-full h-full flex flex-col justify-center items-center m-6">
  <div class="one border-solid border-4 shadow-lg border-baseballRed rounded-lg bg-white w-[250px] h-[250px]">Pic One</div>
  <div class="two border-solid border-4 shadow-lg border-baseballRed rounded-lg bg-white w-[250px] h-[250px]">Pic Two</div>
  <div class="three border-solid border-4 shadow-lg border-baseballRed rounded-lg bg-white w-[250px] h-[250px]">Pic Three</div>
  <div class="four border-solid border-4 shadow-lg border-baseballRed rounded-lg bg-white w-[250px] h-[250px]">Pic Four</div>
  <div class="five border-solid border-4 shadow-lg border-baseballRed rounded-lg bg-white w-[250px] h-[250px]">Pic Five</div>
  <div class="six border-solid border-4 shadow-lg border-baseballRed rounded-lg bg-white w-[250px] h-[250px]">Pic Six</div>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    grid-auto-rows: minmax(50px, auto);
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