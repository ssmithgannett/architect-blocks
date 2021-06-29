<?php
/**
 * Plugin Name: Architect 2 Gutenberg Blocks
 * Plugin URI: https://sasmithmedia@bitbucket.org/sasmithmedia/architect-2.a.git
 * Description: Gutenberg blocks for Architect 2.0
 * Author: Sean Smith
 * Author URI: https://despace.design
 * Version: 0.5 (production)

 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
