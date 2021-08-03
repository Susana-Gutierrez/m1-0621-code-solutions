
var numberOfClicks = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function handleClicks(events) {
  numberOfClicks = numberOfClicks + 1;
  clickCount.textContent = 'Clicks: ' + numberOfClicks;
  if (numberOfClicks < 4) {
    hotButton.className = 'hot-button cold';
  } else if ((numberOfClicks === 4) || (numberOfClicks < 7)) {
    hotButton.className = 'hot-button cool';
  } else if ((numberOfClicks === 7) || (numberOfClicks < 10)) {
    hotButton.className = 'hot-button tepid';
  } else if ((numberOfClicks === 10) || (numberOfClicks < 13)) {
    hotButton.className = 'hot-button warm';
  } else if ((numberOfClicks === 13) || (numberOfClicks < 16)) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
}

hotButton.addEventListener('click', handleClicks);
