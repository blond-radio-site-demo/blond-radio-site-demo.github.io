const quotes = ["The Best Way To Get Started Is To Quit Talking And Begin Doing.", "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.", "Don’t Let Yesterday Take Up Too Much Of Today.", "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.", "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.", "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.", "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.", "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.", "We May Encounter Many Defeats But We Must Not Be Defeated.", "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do."]

const oracle = ["It has the audacity to rain today.", "List I just- I just wanna color. I don't wanna draw. Someone send me a coloring book or something.", "Ghosty gets toast-y", "2 or 1? Google says 2. I listen to the big man.", "We don't sleep tonight, we die like men and regret it later.", "I wish you could set your status to an image so I can just insert the 'many thoughts, head full' meme", "You know, sometimes I forget you gotta look out for the lake monsters."];


// Used to generate text for the various generators based on which list you want used
function oracleGenerator() {
  let x = document.getElementById("gen-text");
    let index = Math.floor(Math.random() * oracle.length);
    x.innerHTML = oracle[index];
}


function quoteGenerator() {
  let x = document.getElementById("gen-text");
  let index = Math.floor(Math.random() * quotes.length);
  x.innerHTML = quotes[index];
}


/*
<!-- Navbar -->
<div class="w3-top">
  <div class="w3-bar w3-black w3-card">
    <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="menuToggle()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
    <a href="index.html" class="w3-bar-item w3-button w3-padding-large">Home</a>
    <a href="about.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small">About</a>
    <a href="transcripts.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Transcripts</a>
    <a href="contact.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Contact</a>
    <div class="w3-dropdown-hover w3-hide-small">
      <button class="w3-padding-large w3-button" title="">Generators <i class="fa fa-caret-down"></i></button>
      <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="quotes.html" class="w3-bar-item w3-button">Inspirational Quote</a>
        <a href="ghosty.html" class="w3-bar-item w3-button">Ghosty's Oracle</a>
      </div>
    </div>
  </div>
</div>

<!-- Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) -->
<div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style="margin-top:46px">
  <a href="about.html" class="w3-bar-item w3-button w3-padding-large" onclick="menuToggle()">About</a>
  <a href="transcripts.html" class="w3-bar-item w3-button w3-padding-large" onclick="menuToggle()">Transcripts</a>
  <a href="contact.html" class="w3-bar-item w3-button w3-padding-large" onclick="menuToggle()">Contact</a>
  <a href="quotes.html" class="w3-bar-item w3-button w3-padding-large" onclick="menuToggle()">Quotes</a>
  <a href="ghosty.html" class="w3-bar-item w3-button w3-padding-large" onclick="menuToggle()">Oracle</a>
</div>

*/
