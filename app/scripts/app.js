//var $ = require('jquery');

var LMI = {
  common: {
    init: function() {

      var spellbook = jsonSpellData;
      var spellList = $('.spell-list');
      var spell = $('.spell-list a');

      var cantrip = $('.cantrips ul');
      var levelOne = $('.one ul');
      var levelTwo = $('.two ul');
      var levelThree = $('.three ul');
      var levelFour = $('.four ul');
      var levelFive = $('.five ul');
      var levelSix = $('.six ul');
      var levelSeven = $('.seven ul');
      var levelEight = $('.eight ul');
      var levelNine = $('.nine ul');

      $.each(spellbook, function() {

        scribe = '<li><a class="' + this.class + '" data-modal="' + this.name + '">' + this.name + '</a></li>';

        if (this.level.indexOf("1") >= 0) {
          levelOne.append(scribe);
        } else if (this.level.indexOf("2") >= 0) {
          levelTwo.append(scribe);
        } else if (this.level.indexOf("3") >= 0) {
          levelThree.append(scribe);
        } else if (this.level.indexOf("4") >= 0) {
          levelFour.append(scribe);
        } else if (this.level.indexOf("5") >= 0) {
          levelFive.append(scribe);
        } else if (this.level.indexOf("6") >= 0) {
          levelSix.append(scribe);
        } else if (this.level.indexOf("7") >= 0) {
          levelSeven.append(scribe);
        } else if (this.level.indexOf("8") >= 0) {
          levelEight.append(scribe);
        } else if (this.level.indexOf("9") >= 0) {
          levelNine.append(scribe);
        } else {
          cantrip.append(scribe);
        }

        if (this.concentration === 'yes') {
          modalContent =
            '<div class="spell-modal" data-name="' + this.name + '">' +
            '<div class="modal-header"><h1>' + this.name + '</h1><span>' + this.level + ' ' + this.school + '</span></div>' +
            '<div class="spell-info">' +
            '<div class="casting-time"><span>Casting Time:</span>' + this.casting_time + '</div>' +
            '<div class="range"><span>Range:</span>' + this.range + '</div>' +
            '<div class="components"><span>Components:</span>' + this.components + '</div>' +
            '<div class="duration"><span>Duration:</span> Concentration, ' + this.duration + '</div>' +
            '</div>' +
            '<div class="spell-desc">' + this.desc + '</div>' +
            '<button class="modal-close" type="button">Close</button>' +
            '</div>';
        } else {
          modalContent =
            '<div class="spell-modal" data-name="' + this.name + '">' +
            '<div class="modal-header"><h1>' + this.name + '</h1><span>' + this.level + ' ' + this.school + '</span></div>' +
            '<div class="spell-info">' +
            '<div class="casting-time"><span>Casting Time:</span>' + this.casting_time + '</div>' +
            '<div class="range"><span>Range:</span>' + this.range + '</div>' +
            '<div class="components"><span>Components:</span>' + this.components + '</div>' +
            '<div class="duration"><span>Duration:</span>' + this.duration + '</div>' +
            '</div>' +
            '<div class="spell-desc">' + this.desc + '</div>' +
            '<button class="modal-close" type="button">Close</button>' +
            '</div>';
        }

        $('main').append(modalContent);

      });

      $('body').on('click', '.spell-list a', function() {

        target = $(this).data('modal');

        $('[data-name="' + target + '"]').addClass('active');

      });

      $('body').on('click', '.modal-close', function() {
        $(this).closest('.spell-modal').removeClass('active');
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
