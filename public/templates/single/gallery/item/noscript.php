<?php
/*
 * Gallery Item Type: Noscript Fallback
 * @since 1.0.0
 * @modified 1.0.0
 */
/**
 * @var \Photography_Portfolio\Frontend\Gallery\Attachment $attachment
 */
global $attachment;
?>
<noscript>
	<img src="<?php echo esc_url( $attachment->get_image_url( 'large' ) ) ?>"
	     alt="<?php echo esc_attr( $attachment->caption ) ?>"/>
</noscript>