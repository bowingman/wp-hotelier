jQuery(function ($) {
	'use strict';
	/* global jQuery, wp */
	/* eslint-disable no-multi-assign */

	var HTL_Settings = {
		init: function () {
			this.show_uploader();
			this.show_unforce_ssl();
			this.show_pets_message();
			this.show_book_now_quantity();
			this.seasonal_dates_datepicker();
			this.add_seasonal_rule();
		},

		show_uploader: function () {
			var uploader_button = $('.htl-uploader');
			var field = uploader_button.prev();
			var file_frame;

			uploader_button.on('click', function (e) {
				e.preventDefault();

				// If the media frame already exists, reopen it.
				if (file_frame) {
					file_frame.open();
					return;
				}

				// Create the media frame.
				file_frame = wp.media.frames.file_frame = wp.media({
					states: [
						new wp.media.controller.Library({
							filterable: 'all',
							multiple: false
						})
					]
				});

				// When an image is selected, run a callback.
				file_frame.on('select', function () {
					var selection = file_frame.state().get('selection');
					var file_path = '';

					selection.map(function (attachment) {
						attachment = attachment.toJSON();

						if (attachment.url) {
							file_path = attachment.url;
						}
					});

					field.val(file_path);
				});

				// Finally, open the modal.
				file_frame.open();
			});
		},

		show_unforce_ssl: function () {
			var force_ssl_input = $('input[name="hotelier_settings[enforce_ssl_booking]"]');
			var unforce_ssl_field = $('#hotelier_settings\\[unforce_ssl_booking\\]').closest('tr');

			unforce_ssl_field.hide();

			if (force_ssl_input.is(':checked')) {
				unforce_ssl_field.show();
			}

			force_ssl_input.on('click', function () {
				var _this = $(this);

				if (_this.is(':checked')) {
					unforce_ssl_field.show();
				} else {
					unforce_ssl_field.hide();
				}
			});
		},

		show_pets_message: function () {
			var pets_input = $('input[name="hotelier_settings[hotel_pets]"]');
			var pets_message = $('#hotelier_settings\\[hotel_pets_message\\]').closest('tr');

			pets_message.hide();

			if (pets_input.is(':checked')) {
				pets_message.show();
			}

			pets_input.on('click', function () {
				var _this = $(this);

				if (_this.is(':checked')) {
					pets_message.show();
				} else {
					pets_message.hide();
				}
			});
		},

		show_book_now_quantity: function () {
			var book_now_behaviour = $('input[name="hotelier_settings[book_now_redirect_to_booking_page]"]');
			var book_now_quantity = $('#hotelier_settings\\[book_now_allow_quantity_selection\\]').closest('tr');

			book_now_quantity.hide();

			if (book_now_behaviour.is(':checked')) {
				book_now_quantity.show();
			}

			book_now_behaviour.on('click', function () {
				var _this = $(this);

				if (_this.is(':checked')) {
					book_now_quantity.show();
				} else {
					book_now_quantity.hide();
				}
			});
		},

		add_seasonal_rule: function () {
			$('#hotelier-seasonal-schema-table').on('htl_multi_text_before_clone_row', function (e) {
				// Destroy datepicker
				e.row.find('.htl-ui-input--start-date').datepicker('destroy').removeAttr('id');
				e.row.find('.htl-ui-input--end-date').datepicker('destroy').removeAttr('id');
			});

			$('#hotelier-seasonal-schema-table').on('htl_multi_text_after_add_row', function (e) {
				// Init datepicker again
				HTL_Settings.seasonal_dates_datepicker();
			});
		},

		seasonal_dates_datepicker: function () {
			var table = $('#hotelier-seasonal-schema-table');
			var from_inputs = table.find('.htl-ui-input--start-date');
			var to_inputs = table.find('.htl-ui-input--end-date');

			from_inputs.datepicker({
				dateFormat: 'yy-mm-dd',
				minDate: 0,
				changeMonth: true,
				onClose: function () {
					var date = $(this).datepicker('getDate');

					if (date) {
						date.setDate(date.getDate() + 1);
						$(this).closest('tr').find('.htl-ui-input--end-date').datepicker('option', 'minDate', date);
					}
				}
			});

			to_inputs.datepicker({
				dateFormat: 'yy-mm-dd',
				minDate: 1,
				changeMonth: true
			});
		}
	};

	$(document).ready(function () {
		HTL_Settings.init();
	});
});
