// This is a list of the pictures to show. I'd like to do this dynamically.
var pics = new Array(
"Pictures/1.jpg",
"Pictures/2.jpg"
);
shuffle(pics);
var picIndex = 0;

var quotes = new Array(
"It’s not that I’m so smart, it’s just that I stay with problems longer.  —Albert Einstein",
"Eighty percent of success is showing up.  —Woody Allen",
"I respect faith, but doubt is what gets you an education.  —Wilson Mizner",
"The greatest obstacle to discovery is not ignorance; it is the illusion of knowledge.  —Daniel J. Boorstin",
"The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.  —William Arthur Ward",
"If you don’t make mistakes, you’re not working on hard enough problems. And that’s a big mistake.  —Frank Wilczek",
"Insanity: doing the same thing over and over again and expecting different results.  —Albert Einstein",
"Do not confuse motion and progress. A rocking horse keeps moving but does not make any progress.  —Alfred A. Montapert",
"I don’t know the key to success, but the key to failure is trying to please everybody.  —Bill Cosby",
"Tomorrow is often the busiest day of the week.  —Spanish Proverb",
"Be yourself; everyone else is already taken.  —Oscar Wilde",
"There is a great difference between worry and concern. A worried person sees a problem, and a concerned person solves a problem.  —Harold Stephens",
"It is easier to fight for one’s principles than to live up to them.  —Alfred Adler",
"I hear: I forget / I see: I remember / I do: I understand —Chinese Proverb",
"Discipline is just choosing between what you want now and what you want most.  —Unknown Author",
"The very best thing you can do for the whole world is to make the most of yourself.  —Wallace Wattles",
"Good judgment comes from experience, and experience comes from bad judgment.  —Barry LePatner",
"When I do good, I feel good; when I do bad, I feel bad, and that is my religion.  —Abraham Lincoln",
"Success consists of going from failure to failure without loss of enthusiasm.  —Winston Churchill",
"If it weren’t for my lawyer, I’d still be in prison. It went a lot faster with two people digging.  —Joe Martin",
"Acquaintance, n.: A person whom we know well enough to borrow from, but not well enough to lend to.  —Ambrose Bierce",
"The difference between death and taxes is death doesn’t get worse every time Congress meets.  —Will Rogers",
"Time flies like an arrow; fruit flies like a banana.  —Groucho Marx",
"Those are my principles. If you don’t like them I have others.  —Groucho Marx",
"Quidquid latine dictum sit, altum sonatur. (Whatever is said in Latin sounds profound.) —Unknown Author",
"The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.  —Calvin Trillin",
"My friends tell me I have an intimacy problem. But they don’t really know me.  —Garry Shandling",
"I don’t deserve this award, but I have arthritis and I don’t deserve that either.  —Jack Benny",
"I always wanted to be somebody, but now I realize I should have been more specific.  —Lily Tomlin",
"If God wanted us to fly, He would have given us tickets.  —Mel Brooks",
"If I only had a little humility, I’d be perfect.  —Ted Turner",
"When I read about the evils of drinking, I gave up reading.  —Henny Youngman",
"The secret of life is honesty and fair dealing. If you can fake that, you’ve got it made.  —Groucho Marx",
"Hofstadter’s Law: It always takes longer than you expect, even when you take into account Hofstadter’s Law.  —Douglas Hofstadter",
"Honest criticism is hard to take, particularly from a relative, a friend, an acquaintance, or a stranger.  —Franklin P. Jones",
"Education is what remains after one has forgotten what one has learned in school.  —Albert Einstein",
"Millions long for immortality who do not know what to do with themselves on a rainy Sunday afternoon.  —Susan Erz",
"Computers are useless. They can only give you answers.  —Pablo Picasso",
"A genius! For 37 years I’ve practised fourteen hours a day, and now they call me a genius!  —Pablo Sarasate",
"The bad news is time flies. The good news is you’re the pilot.  —Michael Althsuler",
"The reasonable man adapts himself to the world; the unreasonable one persists to adapt the world to himself. Therefore all progress depends on the unreasonable man.  —George Bernard Shaw",
"In God we trust; all others bring data.  —Dr. W. Edwards Deming",
"The difference between the right word and the almost right word is the difference between lightning and a lightning bug.  —Mark Twain",
"My definition of a free society is a society where it is safe to be unpopular.  —Adlai E. Stevenson Jr.",
"Logic will get you from A to B. Imagination will take you everywhere.  —Albert Einstein",
"In preparing for battle I have always found that plans are useless, but planning is indispensable.  —Dwight D. Eisenhower",
"The opposite of a correct statement is a false statement. But the opposite of a profound truth may well be another profound truth.  —Niels Bohr",
"Before you go and criticize the younger generation, just remember who raised them.  —Unknown Author",
"Talent hits a target no one else can hit; Genius hits a target no one else can see.  —Arthur Schopenhauer",
"It is amazing what you can accomplish if you do not care who gets the credit.  —Harry Truman",
"A conclusion is the place where you got tired thinking.  —Martin H. Fischer",
"You can do anything, but not everything.  —David Allen",
"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.  —Antoine de Saint-Exupéry",
"The richest man is not he who has the most, but he who needs the least.  —Unknown Author",
"You miss 100 percent of the shots you never take.  —Wayne Gretzky",
"Courage is not the absence of fear, but rather the judgement that something else is more important than fear.  —Ambrose Redmoon",
"You must be the change you wish to see in the world.  —Gandhi",
"When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.  —Lin-Chi",
"To the man who only has a hammer, everything he encounters begins to look like a nail.  —Abraham Maslow",
"We are what we repeatedly do; excellence, then, is not an act but a habit.  —Aristotle",
"A wise man gets more use from his enemies than a fool from his friends.  —Baltasar Gracian",
"Do not seek to follow in the footsteps of the men of old; seek what they sought.  —Basho",
"Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.  —Georg Christoph Lichtenberg",
"What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.  —John Ruskin",
"The real voyage of discovery consists not in seeking new lands but seeing with new eyes.  —Marcel Proust",
"Work like you don’t need money, love like you’ve never been hurt, dance like no one’s watching —Unknown Author",
"Even if you’re on the right track, you’ll get run over if you just sit there.  —Will Rogers",
"Before I got married I had six theories about bringing up children; now I have six children and no theories.  —John Wilmot",
"What the world needs is more geniuses with humility, there are so few of us left.  —Oscar Levant",
"Always forgive your enemies; nothing annoys them so much.  —Oscar Wilde",
"I’ve gone to hundreds of fortune-tellers, and been told thousands of things, but nobody ever told me I was a policewoman getting ready to arrest her.  —New York City detective",
"When you go into court you are putting your fate into the hands of twelve people who weren’t smart enough to get out of jury duty.  —Norm Crosby",
"Those who believe in telekinetics, raise my hand.  —Kurt Vonnegut",
"Sometimes I worry about being a success in a mediocre world.  —Lily Tomlin",
"If the lessons of history teach us anything it is that nobody learns the lessons that history teaches us.  —Anon",
"When I was a boy I was told that anybody could become President. Now I’m beginning to believe it.  —Clarence Darrow",
"Laughing at our mistakes can lengthen our own life. Laughing at someone else’s can shorten it.  —Cullen Hightower",
"I don’t mind what Congress does, as long as they don’t do it in the streets and frighten the horses.  —Victor Hugo",
"I took a speed reading course and read ‘War and Peace’ in twenty minutes. It involves Russia.  —Woody Allen",
"The person who reads too much and uses his brain too little will fall into lazy habits of thinking.  —Albert Einstein",
"Believe those who are seeking the truth. Doubt those who find it.  —André Gide",
"It is the mark of an educated mind to be able to entertain a thought without accepting it.  —Aristotle",
"I’d rather live with a good question than a bad answer.  —Aryeh Frimer",
"We learn something every day, and lots of times it’s that what we learned the day before was wrong.  —Bill Vaughan",
"I have made this letter longer than usual because I lack the time to make it shorter.  —Blaise Pascal",
"An inventor is simply a fellow who doesn’t take his education too seriously.  —Charles F. Kettering",
"Asking a working writer what he thinks about critics is like asking a lamppost how it feels about dogs.  —Christopher Hampton",
"Better to write for yourself and have no public, than to write for the public and have no self.  —Cyril Connolly",
"The cure for boredom is curiosity. There is no cure for curiosity.  —Ellen Parr",
"Advice is what we ask for when we already know the answer but wish we didn’t.  —Erica Jong",
"Some people like my advice so much that they frame it upon the wall instead of using it.  —Gordon R. Dickson",
"Imagination was given to man to compensate him for what he is not, and a sense of humor was provided to console him for what he is.  —Oscar Wilde"
);
shuffle(quotes);
var quoteIndex = 0;

Date.prototype.getDayName = function() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[this.getDay()];
}

Date.prototype.getMonthName = function() {
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return months[this.getMonth()];
}

// Event timings
$interval = 10
repeat(putPicture,$interval);
repeat(putDate,$interval);
repeat(putTime,1);
repeat(putQuote,$interval);

function repeat(handle, seconds) {
  setTimeout(handle);
  setInterval(handle, seconds*1000);
}

/**
 * This approach uses only 2 images ever
 */
function putPicture() {

  // Acquire images
  $moveToFront = $('#bgxRoot img').last();
  $moveToBack = $('#bgxRoot img').first();

  // Move the back one to the front
  var which = Math.floor(Math.random()*4); //0,1,2,3
  var theta = (which * 4) -6;
  $moveToFront.attr('src',pics[picIndex]);
  $moveToFront.addClass("fader");
  $moveToFront.css('opacity', '1');
  $moveToFront.css('animation-name','bgxFadeIn'+which);
  $moveToFront.css('transform','rotate(' + theta + 'deg)');
  $('#bgxRoot').prepend($moveToFront);
  //console.log(">>> back-to-front: "+$moveToFront.attr('src'));

  // Move the front one to the back
  $moveToBack.css('opacity', '0');
  $moveToBack.css('animation-name','bgxFadeOut');
  //console.log(">>> front-to-back: "+$moveToBack.attr('src'));

  // Increment picture
  picIndex++;
  picIndex %= pics.length;
}

function putDate() {
  $('#DateRoot').empty();
  var date = new Date();
  var putString = "";
  putString += date.getDayName();
  putString += ", " + date.getMonthName();
  putString += " " + date.getDate();
  $('#DateRoot').append(putString);
  //console.log(putString);
}

function putTime() {
  $('#TimeRoot').empty();
  var date = new Date();
  var meridian = "am";
  var putString = "";
  var hours = date.getHours();
  if (hours>12) {
    meridian = "pm";
    hours -= 12;
  }
  if (hours == 0) hours = 12;
  putString += hours;
  putString += ":" + padder(date.getMinutes());
  putString += " " + meridian;
  $('#TimeRoot').append(putString);
  //console.log(putString);
}

function putQuote() {
  $('#QuoteRoot').empty();
  //console.log(quoteIndex+": "+quotes[quoteIndex]);
  $('#QuoteRoot').append(quotes[quoteIndex]);
  quoteIndex++;
  quoteIndex %= quotes.length;
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

function padder(x) {
  var pad = "";
  if (x<10) pad += '0';
  return pad+x;
}
