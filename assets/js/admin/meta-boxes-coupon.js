jQuery(function ($) {
	'use strict';
	/* global jQuery */
	/* eslint-disable no-alert */

	var HTL_Coupon_Meta = {
		init: function () {
			this.init_datepickers();
		},

		init_datepickers: function () {
			var datepickers = $('.coupon-settings').find('.htl-ui-input--datepicker');

			datepickers.datepicker({
				dateFormat: 'yy-mm-dd',
				minDate: 0,
				changeMonth: true,
				beforeShow: function () {
					$('#ui-datepicker-div').addClass('htl-ui-custom-datepicker');
				}
			});
		}
	};

	$(document).ready(function () {
		HTL_Coupon_Meta.init();
	});
});
