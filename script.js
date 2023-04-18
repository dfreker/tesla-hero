let mast = document.getElementById("mast");
let modelsBtn = document.getElementById("models");
let model3Btn = document.getElementById("model3");
let modelxBtn = document.getElementById("modelx");
let modelyBtn = document.getElementById("modely");
let infoBox = document.getElementById("info");

console.log("testing, testing...");

modelsBtn.addEventListener("click", function () {
  mast.style.backgroundImage = "url(images/image-1.png)";
  infoBox.innerHTML = `
  <div>
            <h2>1.9s</h2>
            <p>0-60mph</p>
        </div>
        <div>
            <h2>200mph</h2>
            <p>Top Speed</p>
        </div>
        <div>
            <h2>396miles</h2>
            <p>Max Range</p>
      </div>
      <div class="line"></div>
      <div>
          <h2>Model S</h2>
      </div>`;
});

model3Btn.addEventListener("click", function () {
  mast.style.backgroundImage = "url(images/image-2.png)";
  infoBox.innerHTML = `
  <div>
            <h2>2.3s</h2>
            <p>0-60mph</p>
        </div>
        <div>
            <h2>250mph</h2>
            <p>Top Speed</p>
        </div>
        <div>
            <h2>453miles</h2>
            <p>Max Range</p>
      </div>
      <div class="line"></div>
      <div>
          <h2>Model 3</h2>
      </div>`;
});

modelxBtn.addEventListener("click", function () {
  mast.style.backgroundImage = "url(images/image-3.png)";
  infoBox.innerHTML = `
  <div>
            <h2>2.1s</h2>
            <p>0-60mph</p>
        </div>
        <div>
            <h2>300mph</h2>
            <p>Top Speed</p>
        </div>
        <div>
            <h2>316miles</h2>
            <p>Max Range</p>
      </div>
      <div class="line"></div>
      <div>
          <h2>Model X</h2>
      </div>`;
});

modelyBtn.addEventListener("click", function () {
  mast.style.backgroundImage = "url(images/image-4.png)";
  infoBox.innerHTML = `
  <div>
            <h2>2.6s</h2>
            <p>0-60mph</p>
        </div>
        <div>
            <h2>350mph</h2>
            <p>Top Speed</p>
        </div>
        <div>
            <h2>512miles</h2>
            <p>Max Range</p>
      </div>
      <div class="line"></div>
      <div>
          <h2>Model Y</h2>
      </div>`;
});
