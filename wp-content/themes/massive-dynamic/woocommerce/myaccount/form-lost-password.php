<?php
/**
 * Lost password form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-lost-password.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.3.0
 */
 

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

?>

<?php wc_print_notices(); ?>

<form method="post" class="woocommerce-ResetPassword lost_reset_password">

	<article class="account-title">
		<h1><?php esc_attr_e('Lost Password','massive-dynamic'); ?></h1>
		<h3><?php esc_attr_e('Password Recovery','massive-dynamic'); ?></h3>
		<a class="public-logout" href="<?php echo esc_url($aa = wc_get_endpoint_url( 'customer-logout', '', wc_get_page_permalink( 'myaccount' ) )); ?>" ><?php esc_attr_e('LOGIN / REGISTER','massive-dynamic'); ?></a>
	</article>

	<div class="wrap-content">

		<?php if( 'lost_password' == $args['form'] ) : ?>

			<p class="paragraph"><?php echo apply_filters( 'woocommerce_lost_password_message', esc_attr__( 'Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.', 'massive-dynamic' ) ); ?></p>

			<p class="form-row form-row-first"><label for="user_login"><?php esc_attr_e( 'Username or email', 'massive-dynamic' ); ?></label> <input class="input-text" type="text" name="user_login" id="user_login" /></p>

		<?php else : ?>

			<p><?php echo apply_filters( 'woocommerce_reset_password_message', esc_attr__( 'Enter a new password below.', 'massive-dynamic') ); ?></p>

			<p class="form-row form-row-first">
				<label for="password_1"><?php esc_attr_e( 'New password', 'massive-dynamic' ); ?> <span class="required">*</span></label>
				<input type="password" class="input-text" name="password_1" id="password_1" />
			</p>
			<p class="form-row form-row-last">
				<label for="password_2"><?php esc_attr_e( 'Re-enter new password', 'massive-dynamic' ); ?> <span class="required">*</span></label>
				<input type="password" class="input-text" name="password_2" id="password_2" />
			</p>

			<input type="hidden" name="reset_key" value="<?php echo isset( $args['key'] ) ? $args['key'] : ''; ?>" />
			<input type="hidden" name="reset_login" value="<?php echo isset( $args['login'] ) ? $args['login'] : ''; ?>" />

		<?php endif; ?>

		<div class="clear"></div>

		<?php do_action( 'woocommerce_lostpassword_form' ); ?>

		<p class="form-row woocommerce-form-row">
			<input type="hidden" name="wc_reset_password" value="true" />
			<input type="submit" class="button" value="<?php echo 'lost_password' == $args['form'] ? esc_attr__( 'Reset Password', 'massive-dynamic' ) : esc_attr__( 'Save', 'massive-dynamic' ); ?>" />
		</p>

		<?php wp_nonce_field( $args['form'] ); ?>

	</div> <!-- end wrap content -->

</form>
