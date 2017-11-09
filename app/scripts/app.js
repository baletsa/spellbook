const $ = require('jquery');

$.getJSON('data/spellData.json', function(data) {

  function SortByName(a, b) {
    var aName = a.name.toLowerCase();
    var bName = b.name.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
  }

  var spellbook = $(data.spells).sort(SortByName);

  var cantrip = $('.cantrips ul'),
    l1 = $('.one ul'),
    l2 = $('.two ul'),
    l3 = $('.three ul'),
    l4 = $('.four ul'),
    l5 = $('.five ul'),
    l6 = $('.six ul'),
    l7 = $('.seven ul'),
    l8 = $('.eight ul'),
    l9 = $('.nine ul');

  $.each(spellbook, function() {

    var c = this.class;
    var cl = c.toLowerCase().split(',').join('');

    var scribe = '<li><a class="' + cl + '" data-modal="' + this.name + '">' + this.name + '</a></li>';

    if (this.level.indexOf('1') >= 0) {
      l1.append(scribe);
    }
    else if (this.level.indexOf('2') >= 0) {
      l2.append(scribe);
    }
    else if (this.level.indexOf('3') >= 0) {
      l3.append(scribe);
    }
    else if (this.level.indexOf('4') >= 0) {
      l4.append(scribe);
    }
    else if (this.level.indexOf('5') >= 0) {
      l5.append(scribe);
    }
    else if (this.level.indexOf('6') >= 0) {
      l6.append(scribe);
    }
    else if (this.level.indexOf('7') >= 0) {
      l7.append(scribe);
    }
    else if (this.level.indexOf('8') >= 0) {
      l8.append(scribe);
    }
    else if (this.level.indexOf('9') >= 0) {
      l9.append(scribe);
    }
    else {
      cantrip.append(scribe);
    }

    var modalContent =
      '<section class="spell-modal" data-name="' + this.name + '">' +
      '<div class="modal-header"><h1>' + this.name + '</h1><span>';
    if (this.level !== 'Cantrip') {
      modalContent += this.level + ' ' + this.school;
    }
    else {
      modalContent += this.school + ' ' + this.level;
    }
    if (this.ritual === 'yes') {
      modalContent += ' (Ritual)</span></div>';
    }
    else {
      modalContent += '</span></div>';
    }
    modalContent += '<div class="modal-body"><div class="spell-info">' +
      '<div class="casting-time"><span>Casting Time:</span>' + this.casting_time + '</div>' +
      '<div class="range"><span>Range:</span>' + this.range + '</div>';
    if (this.material !== undefined) {
      modalContent += '<div class="components"><span>Components:</span>' + this.components + ' (' + this.material + ')' + '</div>';
    }
    else {
      modalContent += '<div class="components"><span>Components:</span>' + this.components + '</div>';
    }
    if (this.concentration !== 'no') {
      modalContent += '<div class="duration"><span>Duration:</span> Concentration, ' + this.duration + '</div>';
    }
    else {
      modalContent += '<div class="duration"><span>Duration:</span> ' + this.duration + '</div>';
    }
    modalContent += '</div>' + '<div class="spell-desc">' + this.desc;
    if (this.higher_level !== undefined) {
      modalContent += '<div class="higher-level">' + this.higher_level + '</div>';
    }
    modalContent += '<div class="source"><span class="pages">' + this.page + ',</span><span class="class-tags"><strong>Available to:</strong> ' 
      + this.class + '</span></div></div></div>' +
      '<footer><button class="modal-close" type="button">Close</button></footer>' +
      '</section>';
    $('main').append(modalContent);

  });

  $('body').on('click', '.spell-list a', function() {

    var target = $(this).data('modal');

    $('[data-name="' + target + '"]').addClass('active');

  });

  $('body').on('click', '.modal-close', function() {
    $(this).closest('.spell-modal').removeClass('active');
  });

  $('.class-menu a').click(function() {
    if (!$(this).hasClass('active')) {
      var role = '.' + $(this).attr('class');
      $('.class-menu a').removeClass('active');
      $('.spell-list li').hide();
      $('.spell-list a').filter(role).parent('li').show();
      $(this).addClass('active');
      if ($(this).hasClass('ranger') || $(this).hasClass('paladin')) {
        $('.spell-list .cantrips, .spell-list .six, .spell-list .seven, .spell-list .eight, .spell-list .nine').hide();
      }
      else {
        $('.spell-list section').show();
      }
    }
  });

  $('header .all').click(function() {
    $('.class-menu a').removeClass('active');
    $('.spell-list section').show();
    $('.spell-list li').show();
  });

});
