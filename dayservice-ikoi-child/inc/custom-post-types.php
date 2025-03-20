<?php
/**
 * Register custom post types
 */

function dayservice_ikoi_child_register_post_types() {
    // News Post Type
    register_post_type('news',
        array(
            'labels' => array(
                'name' => __('お知らせ', 'dayservice-ikoi-child'),
                'singular_name' => __('お知らせ', 'dayservice-ikoi-child'),
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-megaphone',
            'rewrite' => array('slug' => 'news'),
        )
    );
}
add_action('init', 'dayservice_ikoi_child_register_post_types');