jQuery(function ($) {
	'use strict';
	/* global jQuery */

	var HTL_Calendar = {
		init: function () {
			this.show_filters();
			this.filters();
			this.datepicker();
		},

		show_filters: function () {
			var show_filters_button = $('.htl-ui-text-icon--show-booking-calendar-filters');
			var sidebar = $('.booking-calendar__sidebar');
			var default_text = show_filters_button.text();
			var show_text = show_filters_button.attr('data-show-text');

			show_filters_button.on('click', function () {
				if (show_filters_button.hasClass('not-visible')) {
					sidebar.show();
					show_filters_button.removeClass('not-visible').text(default_text);
				} else {
					sidebar.hide();
					show_filters_button.addClass('not-visible').text(show_text);
				}
			});
		},

		filters: function () {
			var filters = $('.booking-calendar-filters__item');

			filters.on('click', function () {
				var _filter = $(this);
				var status = _filter.attr('data-status');

				if (_filter.hasClass('not-active')) {
					$('table.booking-calendar-table').find('td.booking-calendar-table__day-booked[data-status="' + status + '"]').removeClass('not-active');
					_filter.removeClass('not-active');
				} else {
					_filter.addClass('not-active');
					$('table.booking-calendar-table').find('td.booking-calendar-table__day-booked[data-status="' + status + '"]').addClass('not-active');
				}
			});
		},

		datepicker: function () {
			$('.booking-calendar-datepicker').find('.htl-ui-input--datepicker').datepicker({
				dateFormat: 'yy-mm-dd',
				beforeShow: function () {
					$('#ui-datepicker-div').addClass('htl-ui-custom-datepicker');
				}
			});
		}
	};

	$(document).ready(function () {
		HTL_Calendar.init();
	});
});
