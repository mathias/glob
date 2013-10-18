var init_puzzle_1,
    arg1,
    arg2,
    run_puzzle_1,
    set_screen_height_divs,
    init_begin_link,
    showId,
    output_1,
    output_arrow_1;

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
  output_1 = $('#output-1');
  output_arrow_1 = $('#output-arrow-1');

  _.each([arg1, arg2], function(el) { el.keyup(run_puzzle_1) });
};

run_puzzle_1 = function() {
  var val1, val2, new_value, expected_value;

  expected_value = 4;

  val1 = parseInt(arg1.val());
  val2 = parseInt(arg2.val());

  output_1.show();
  output_arrow_1.show();

  if (_.isFinite(val1) && _.isFinite(val2)) {
    new_value = val1 + val2;
    output_1.children('span.data').text(new_value);

    if (new_value === expected_value) {
      puzzle_1_correct();
    }
  } else if (arg1.val().length === 0 || arg2.val().length === 0) {
    output_1.hide();
    output_arrow_1.hide();
  } else {
    output_1.children('span.data').text("Error: Not a number");
  }
}

puzzle_1_correct = function() {
  $('#puzzle-1-correct').show();
  $('#puzzle-2-link').click(function(e) {
    e.preventDefault();
    showId('puzzle-2');
  });
};
