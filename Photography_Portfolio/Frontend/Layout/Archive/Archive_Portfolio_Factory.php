<?php


namespace Photography_Portfolio\Frontend\Layout\Archive;


use Photography_Portfolio\Frontend\Layout_Factory;

class Archive_Portfolio_Factory extends Layout_Factory {

	function find_slug() {

		return pp_get_archive_layout();
	}


	public function get_layout_class( $layout_slug ) {

		return PP_Instance()->layouts->find_class( 'archive', $layout_slug );
	}
}