//var $ = require('jquery');

var LMI = {
  common: {
    init: function() {

      var spellbook = jsonSpellData;
      var spellList = $('.spell-list');
      var spell = $('.spell-list a');

      var cantrip = $('.cantrips ul');
      var l1 = $('.one ul');
      var l2 = $('.two ul');
      var l3 = $('.three ul');
      var l4 = $('.four ul');
      var l5 = $('.five ul');
      var l6 = $('.six ul');
      var l7 = $('.seven ul');
      var l8 = $('.eight ul');
      var l9 = $('.nine ul');

      $.each(spellbook, function() {

        c = this.class;
        cl = c.toLowerCase().split(',').join('');
        scribe = '<li><a class="' + cl + '" data-modal="' + this.name + '">' + this.name + '</a></li>';

        if (this.level.indexOf("1") >= 0) {
          l1.append(scribe);
        } else if (this.level.indexOf("2") >= 0) {
          l2.append(scribe);
        } else if (this.level.indexOf("3") >= 0) {
          l3.append(scribe);
        } else if (this.level.indexOf("4") >= 0) {
          l4.append(scribe);
        } else if (this.level.indexOf("5") >= 0) {
          l5.append(scribe);
        } else if (this.level.indexOf("6") >= 0) {
          l6.append(scribe);
        } else if (this.level.indexOf("7") >= 0) {
          l7.append(scribe);
        } else if (this.level.indexOf("8") >= 0) {
          l8.append(scribe);
        } else if (this.level.indexOf("9") >= 0) {
          l9.append(scribe);
        } else {
          cantrip.append(scribe);
        }

        modalContent =
          '<div class="spell-modal" data-name="' + this.name + '">' +
          '<div class="modal-header"><h1>' + this.name + '</h1><span>';
        if (this.level !== 'Cantrip') {
          modalContent += this.level + ' ' + this.school + '</span></div>';
        } else {
          modalContent += this.school + ' ' + this.level + '</span></div>';
        }
        modalContent += '<div class="spell-info">' +
          '<div class="casting-time"><span>Casting Time:</span>' + this.casting_time + '</div>' +
          '<div class="range"><span>Range:</span>' + this.range + '</div>';
        if (this.material !== undefined) {
          modalContent += '<div class="components"><span>Components:</span>' + this.components + ' (' + this.material + ')' + '</div>';
        } else {
          modalContent += '<div class="components"><span>Components:</span>' + this.components + '</div>';
        }
        if (this.concentration !== 'no') {
          modalContent += '<div class="duration"><span>Duration:</span> Concentration, ' + this.duration + '</div>';
        } else {
          modalContent += '<div class="duration"><span>Duration:</span> ' + this.duration + '</div>';
        }
        modalContent += '</div>' +
          '<div class="spell-desc">' + this.desc + '</div>' +
          '<button class="modal-close" type="button">Close</button>' +
          '</div>';

        $('main').append(modalContent);

      });

      $('body').on('click', '.spell-list a', function() {

        target = $(this).data('modal');

        $('[data-name="' + target + '"]').addClass('active');

      });

      $('body').on('click', '.modal-close', function() {
        $(this).closest('.spell-modal').removeClass('active');
      });


      $('.class-menu a').click(function() {
        if (!$(this).hasClass('active')) {
          cl = '.' + $(this).attr('class');
          $('.class-menu a').removeClass('active');
          $('.spell-list li').hide();
          $('.spell-list a').filter(cl).parent('li').show();
          $(this).addClass('active');
          if ($(this).hasClass('ranger') || $(this).hasClass('paladin')) {
            $('.spell-list .cantrips').hide();
          } else {
            $('.spell-list .cantrips').show();
          }
        }
      });

      $('header .all').click(function() {
        $('.class-menu a').removeClass('active');
        $('.spell-list .cantrips').show();
        $('.spell-list li').show();
      });

    }
  }
};

var LMIModules = {
  fire: function(func, funcname, args) {

    var ns = LMI;

    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && ns[func] && typeof ns[func][funcname] === 'function') {
      ns[func][funcname](args);
    }
  },

  loadEvents: function() {
    //fire common functions first
    LMIModules.fire('common');

    //find modules to load based on data attributes
    var moduleTrigger = $('[data-module]');

    if (moduleTrigger.length) {

      var moduleNames = [];
      var modules = [];

      //find the names of each trigger
      moduleTrigger.each(function() {
        names = $(this).data("module").split(' ');
        for (var i = 0; i < names.length; i++) {
          moduleNames.push(names[i]);
        }
      });

      //sort out duplicates
      for (var i = 0; i < moduleNames.length; i++) {
        if (($.inArray(moduleNames[i], modules)) === -1) {
          modules.push(moduleNames[i]);
        }
      }

      //load function based on data attribute value as names
      $.each(modules, function(i, classnm) {
        LMIModules.fire(classnm);
      });
    }
  }
};

$(document).ready(LMIModules.loadEvents);
