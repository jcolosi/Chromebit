var loops = [
"z00001.gif", "z00002.mp4", "z00003.gif", "z00004.mp4", "z00005.gif", "z00006.mp4", "z00007.gif", "z00008.mp4", "z00009.gif", "z00010.mp4", "z00011.gif", "z00012.mp4", "z00013.gif", "z00014.mp4", "z00015.gif", "z00016.mp4", "z00017.mp4", "z00018.mp4", "z00019.gif", "z00020.mp4", "z00021.gif", "z00022.mp4", "z00023.gif", "z00024.mp4", "z00025.gif", "z00026.mp4", "z00027.gif", "z00028.mp4", "z00029.gif", "z00030.mp4", "z00031.mp4", "z00032.gif", "z00033.mp4", "z00034.gif", "z00035.mp4", "z00036.gif", "z00037.mp4", "z00038.gif", "z00039.mp4", "z00040.gif", "z00041.mp4", "z00042.gif", "z00043.mp4", "z00044.mp4", "z00045.gif", "z00046.mp4", "z00047.gif", "z00048.mp4", "z00049.gif", "z00050.mp4", "z00051.gif", "z00052.mp4", "z00053.gif", "z00054.mp4", "z00055.gif", "z00056.mp4", "z00057.gif", "z00058.mp4", "z00059.gif", "z00060.mp4", "z00061.gif", "z00062.mp4", "z00063.gif", "z00064.mp4", "z00065.mp4", "z00066.gif", "z00067.mp4", "z00068.gif", "z00069.mp4", "z00070.gif", "z00071.mp4", "z00072.gif", "z00073.mp4", "z00074.gif", "z00075.mp4", "z00076.gif", "z00077.mp4", "z00078.mp4", "z00079.mp4", "z00080.mp4", "z00081.gif", "z00082.mp4", "z00083.gif", "z00084.mp4", "z00085.gif", "z00086.mp4", "z00087.gif", "z00088.mp4", "z00089.gif", "z00090.mp4", "z00091.gif", "z00092.mp4", "z00093.gif", "z00094.mp4", "z00095.mp4", "z00096.gif", "z00097.mp4", "z00098.gif", "z00099.mp4", "z00100.gif", "z00101.mp4", "z00102.mp4", "z00103.gif", "z00104.mp4", "z00105.gif", "z00106.mp4", "z00107.gif", "z00108.mp4", "z00109.gif", "z00110.mp4", "z00111.gif", "z00112.mp4", "z00113.gif", "z00114.mp4", "z00115.gif", "z00116.mp4", "z00117.gif", "z00118.mp4", "z00119.gif", "z00120.mp4", "z00121.gif", "z00122.mp4", "z00123.gif", "z00124.mp4", "z00125.gif", "z00126.mp4", "z00127.mp4", "z00128.gif", "z00129.mp4", "z00130.gif", "z00131.mp4", "z00132.mp4", "z00133.gif", "z00134.mp4", "z00135.gif", "z00136.mp4", "z00137.gif", "z00138.mp4", "z00139.gif", "z00140.mp4", "z00141.mp4", "z00142.gif", "z00143.mp4", "z00144.gif", "z00145.mp4", "z00146.gif", "z00147.mp4", "z00148.mp4", "z00149.gif", "z00150.mp4", "z00151.gif", "z00152.mp4", "z00153.gif", "z00154.mp4", "z00155.mp4", "z00156.gif", "z00157.mp4", "z00158.gif", "z00159.mp4", "z00160.gif", "z00161.mp4", "z00162.mp4", "z00163.gif", "z00164.mp4", "z00165.gif", "z00166.mp4", "z00167.gif", "z00168.gif", "z00169.gif", "z00170.gif", "z00171.gif", "z00172.gif", "z00173.gif", "z00174.gif", "z00175.gif", "z00176.gif", "z00177.gif", "z00178.gif", "z00179.gif", "z00180.gif", "z00181.gif", "z00182.gif", "z00183.gif", "z00184.gif", "z00185.gif", "z00186.gif", "z00187.gif", "z00188.gif", "z00189.gif", "z00190.gif", "z00191.gif", "z00192.gif", "z00193.gif", "z00194.gif", "z00195.gif", "z00196.gif", "z00197.gif", "z00198.gif", "z00199.gif", "z00200.gif", "z00201.gif", "z00202.gif",
];

shuffle(loops);
var loopIndex = 0;

// Event timings
$interval = 20;//60
repeat(putLoop,$interval);

function repeat(handle, seconds) {
  setTimeout(handle);
  setInterval(handle, seconds*1000);
}

function putLoop() {
  var loop = loops[loopIndex++];
  loopIndex %= loop.length;
  if (loop.endsWith(".gif")) putGif(loop);
  else putMovie(loop);
}

function putGif(loop) {
  $('#refMedia').empty();

  $image = $('<img/>');
  $image.attr('src','media/'+loop);
  $image.addClass('viewMedia');

  $('#refMedia').prepend($image);
}

function putMovie(loop) {
  $('#refMedia').empty();

  $video = $('<video/>');
  $video.prop('loop',true);
  $video.prop('autoplay',true);
  $video.prop('muted',true);
  $video.addClass('viewMedia');

  $source = $('<source/>');
  $source.attr('src', 'media/'+loop);
  $source.attr('type', 'video/mp4');

  $video.prepend($source);

  $('#refMedia').prepend($video);
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
