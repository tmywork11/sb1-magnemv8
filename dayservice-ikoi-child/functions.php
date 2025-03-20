<?php
/**
 * Dayservice Ikoi Child Theme functions and definitions
 */

// Enqueue parent and child theme styles
function dayservice_ikoi_child_enqueue_styles() {
    wp_enqueue_style('dayservice-ikoi-style', 
        get_template_directory_uri() . '/style.css',
        array(),
        wp_get_theme()->get('Version')
    );

    wp_enqueue_style('dayservice-ikoi-child-style',
        get_stylesheet_uri(),
        array('dayservice-ikoi-style'),
        wp_get_theme()->get('Version')
    );

    // Google Fonts
    wp_enqueue_style(
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;500;700&display=swap',
        array(),
        null
    );

    // Custom JavaScript
    wp_enqueue_script(
        'dayservice-ikoi-child-script',
        get_stylesheet_directory_uri() . '/js/custom.js',
        array('jquery'),
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('wp_enqueue_scripts', 'dayservice_ikoi_child_enqueue_styles');

// Add custom image sizes
function dayservice_ikoi_child_image_sizes() {
    add_image_size('hero-slide', 1920, 1080, true);
    add_image_size('news-thumbnail', 800, 450, true);
}
add_action('after_setup_theme', 'dayservice_ikoi_child_image_sizes');

// Customize excerpt length
function dayservice_ikoi_child_excerpt_length($length) {
    return 100;
}
add_filter('excerpt_length', 'dayservice_ikoi_child_excerpt_length');

// Customize excerpt more
function dayservice_ikoi_child_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'dayservice_ikoi_child_excerpt_more');