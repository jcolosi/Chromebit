// EDIT UPCOMING RELEASES HERE
var deployments = [];
deployments.push(["Event A", 1,22,2017,21,00]);
deployments.push(["Event B", 3,24,2017,21,00]);
deployments.push(["Event C", 5,1,2017,00,00]);

var MillisPerSecond = 1000;
var MillisPerMinute = 60 * MillisPerSecond;
var MillisPerHour = 60 * MillisPerMinute;
var MillisPerDay = 24 * MillisPerHour;

setInterval(populate,50);

function populate() {
  $('#DeployRoot').empty();

  for (var q of deployments) {
    //console.log(name);
    var name = q[0];
    var then = new Date(q[3],q[1]-1,q[2],q[4],q[5]).getTime();
    var now = new Date().getTime();
    var delta = then - now;

    var d = Math.floor(delta/MillisPerDay);
				delta %= MillisPerDay
    var h = Math.floor(delta/MillisPerHour);
				delta %= MillisPerHour
    var m = Math.floor(delta/MillisPerMinute);
				delta %= MillisPerMinute
    var s = Math.floor(delta/MillisPerSecond);
				delta %= MillisPerSecond
    var x = padder(delta);

				// Add a deployment
    $row = $('<div/>').addClass("deploy");
    $row.append($('<span/>').addClass("title").text(name));
    $row.append($('<br/>'));
    $row.append($('<span/>').addClass("number").text(d));
    $row.append($('<span/>').addClass("attribute").text(" days"));
    $row.append($('<span/>').addClass("number").text(h));
    $row.append($('<span/>').addClass("attribute").text(" hours"));
    $row.append($('<span/>').addClass("number").text(m));
    $row.append($('<span/>').addClass("attribute").text(" minutes"));
    $row.append($('<span/>').addClass("number").text(s));
    $row.append($('<span/>').addClass("attribute").text(" seconds"));
    $row.append($('<span/>').addClass("millis").text(x));

    $('#DeployRoot').append($row);
  }
}

function padder(x) {
  var pad = "";
  if (x<10) pad += '0';
  if (x<100) pad += '0';
  return pad+x;
}
