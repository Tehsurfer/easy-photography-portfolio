<?php


namespace Photography_Portfolio\Admin;


class PP_Post_Meta {


	/**
	 * PP_Post_Meta constructor.
	 */
	public function __construct() {

		add_action( 'cmb2_init', [ $this, 'add_metabox' ] );
	}


	function add_metabox() {

		$cmb = new_cmb2_box(
			array(
				'id'           => 'pp_post_meta',
				'title'        => __( 'Photography Portfolio', 'pp-plugin' ),
				'object_types' => array( 'pp_post' ),
				'context'      => 'normal',
				'priority'     => 'high',
			)
		);

		$cmb->add_field(
			array(
				'name'         => 'Gallery',
				'desc'         => '',
				'id'           => 'pp_gallery',
				'type'         => 'file_list',
				'preview_size' => array( 125, 125, true ), // Default: array( 50, 50 )
				// Optional, override default text strings
				'text'         => array(
					'add_upload_files_text' => esc_html__( 'Add Images', 'pp-plugin' ),
					'remove_image_text'     => esc_html__( 'Remove Image', 'pp-plugin' ),
					'file_text'             => esc_html__( 'File:', 'pp-plugin' ),
					'file_download_text'    => esc_html__( 'Download', 'pp-plugin' ),
					'remove_text'           => esc_html__( 'Remove', 'pp-plugin' ),
				),
			)
		);


		/*
		 * Allow metabox extension
		 */
		do_action( 'pp/core/metabox', $cmb );

	}
}