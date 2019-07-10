jQuery(function ($) {
	'use strict';
	/* global jQuery */

	var HTL_Admin = {
		init: function () {
			this.toggle_advanced();
			this.see_pro_features();
		},

		toggle_advanced: function () {
			$(document).on('click', '.htl-ui-text-icon--show-advanced', function () {
				var _this = $(this);
				var show_label = _this.attr('data-show-text');
				var hide_label = _this.attr('data-hide-text');
				var wrapper = _this.parent().find('.htl-ui-advanced-settings-wrapper');

				if (_this.hasClass('open')) {
					_this.text(show_label).removeClass('open');
				} else {
					_this.text(hide_label).addClass('open');
				}

				wrapper.toggleClass('open');
			});
		},

		see_pro_features: function () {
			$('.see-pro-version-features').on('click', function (e) {
				e.preventDefault();

				$('html, body').animate({
					scrollTop: $('.hotelier-settings-pro-features').offset().top
				}, 1000);
			});
		}
	};

	$(document).ready(function () {
		HTL_Admin.init();
	});
});
