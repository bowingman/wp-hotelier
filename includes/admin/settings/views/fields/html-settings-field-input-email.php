<?php
/**
 * Field "Input Email"
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( isset( $this->options[ $args[ 'id' ] ] ) ) {
	$value = $this->options[ $args[ 'id' ] ];
} else {
	$value = isset( $args[ 'std' ] ) ? $args[ 'std' ] : '';
}

$placeholder = isset( $args[ 'placeholder' ] ) ? $args[ 'placeholder' ] : '';
$multiple    = isset( $args[ 'multiple' ] ) ? 'multiple' : '';
$size        = ( isset( $args[ 'size' ] ) && ! is_null( $args[ 'size' ] ) ) ? $args[ 'size' ] : 'regular';
?>

<div class="htl-ui-setting htl-ui-setting--email htl-ui-setting--<?php echo esc_attr( $args[ 'id' ] ); ?>">
	<input type="email" class="<?php echo esc_attr( $size ); ?>-text htl-ui-input htl-ui-input--email" id="hotelier_settings[<?php echo esc_attr( $args[ 'id' ] ); ?>]" name="hotelier_settings[<?php echo esc_attr( $args[ 'id' ] ); ?>]" value="<?php echo esc_attr( $value ); ?>" placeholder="<?php echo esc_attr( $placeholder ); ?>" <?php echo esc_attr( $multiple ); ?>/>

	<label class="htl-ui-label htl-ui-label--text htl-ui-setting__description htl-ui-setting__description--email htl-ui-setting__description--<?php echo esc_attr( $args[ 'id' ] ); ?>" for="hotelier_settings[<?php echo esc_attr( $args[ 'id' ] ); ?>]"><?php echo wp_kses_post( $args[ 'desc' ] ); ?></label>
</div>
