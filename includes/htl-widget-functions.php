<?php
/**
 * Widget Functions.
 *
 * @author   Benito Lopez <hello@lopezb.com>
 * @category Core
 * @package  Hotelier/Functions
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

// Include widget classes.
include_once( 'widgets/abstract-htl-widget.php' );
include_once( 'widgets/class-htl-widget-booking.php' );
include_once( 'widgets/class-htl-widget-rooms-filter.php' );
include_once( 'widgets/class-htl-widget-room-search.php' );
include_once( 'widgets/class-htl-widget-rooms.php' );

/**
 * Register Widgets.
 */
function htl_register_widgets() {
	register_widget( 'HTL_Widget_Booking' );
	register_widget( 'HTL_Widget_Rooms_Filter' );
	register_widget( 'HTL_Widget_Room_Search' );
	register_widget( 'HTL_Widget_Rooms' );
}
add_action( 'widgets_init', 'htl_register_widgets' );
