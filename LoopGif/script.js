var gifs = new Array();
for (i=1; i<=41; i++) {
	gifs.push(i+".gif");
}
shuffle(gifs);
var gifIndex = 0;

// Event timings
$interval = 60
repeat(putGif,$interval);

function repeat(handle, seconds) {
  setTimeout(handle);
  setInterval(handle, seconds*1000);
}

function putGif() {
  $image = $('#randomGif');
  $image.attr('src',"gifs/"+gifs[gifIndex]);
  gifIndex++;
  gifIndex %= gifs.length;
  console.log(">>>> "+$image.attr('src'));
}

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
