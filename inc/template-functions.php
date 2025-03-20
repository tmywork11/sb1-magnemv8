<?php
if (!defined('ABSPATH')) exit;

function dayservice_ikoi_body_classes($classes) {
    if (is_singular()) {
        $classes[] = 'singular';
    }

    if (is_front_page()) {
        $classes[] = 'front-page';
    }

    return $classes;
}
add_filter('body_class', 'dayservice_ikoi_body_classes');

function dayservice_ikoi_register_menus() {
    register_nav_menus(array(
        'primary' => __('メインメニュー', 'dayservice-ikoi'),
        'footer' => __('フッターメニュー', 'dayservice-ikoi'),
    ));
}
add_action('init', 'dayservice_ikoi_register_menus');

function dayservice_ikoi_register_sidebars() {
    register_sidebar(array(
        'name'          => __('サイドバー', 'dayservice-ikoi'),
        'id'            => 'sidebar-1',
        'description'   => __('メインサイドバーウィジェットエリア', 'dayservice-ikoi'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'dayservice_ikoi_register_sidebars');