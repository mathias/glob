var init_puzzle_1,
    arg1,
    arg2,
    button1,
    run_puzzle_1,
    set_screen_height_divs,
    init_begin_link,
    showId;

$(function() {
  set_screen_height_divs();
  init_begin_link();
  init_puzzle_1();
});

set_screen_height_divs = function() {
  var divs = $('.screen-height');
  _.each(divs, function(div) {
    $(div).css('width', window.innerWidth);
    $(div).css('height', window.innerHeight);
  });
};

showId = function(elID) {
    var el = document.getElementById(elID);
    el.scrollIntoView(true);
}

init_begin_link = function() {
  $('#begin').click(function(e) {
    e.preventDefault();
    showId('puzzle-1')
  });
};

/* Puzzle 1 */
init_puzzle_1 = function() {
  arg1 = $('input[name="arg1"]');
  arg2 = $('input[name="arg2"]');
  button1 = $('button#puzzle-1');

  button1.click(run_puzzle_1);

};

run_puzzle_1 = function() {
  var val1, val2, new_value, expected_value;

  expected_value = 4;

  val1 = parseInt(arg1.val());
  val2 = parseInt(arg2.val());

  if (_.isFinite(val1) && _.isFinite(val2)) {
    new_value = val1 + val2;
  } else {
    return alert("Error. One of the arguments is not a number.");
  }

  if (new_value === expected_value) {
    alert("Correct!");
  } else {
    alert("Incorrect. Try again!");
  }
}
