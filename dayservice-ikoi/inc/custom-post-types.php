<?php
if (!defined('ABSPATH')) exit;

function dayservice_ikoi_register_post_types() {
    // News Post Type
    register_post_type('news',
        array(
            'labels' => array(
                'name'                  => __('お知らせ', 'dayservice-ikoi'),
                'singular_name'         => __('お知らせ', 'dayservice-ikoi'),
                'menu_name'             => __('お知らせ', 'dayservice-ikoi'),
                'add_new'              => __('新規追加', 'dayservice-ikoi'),
                'add_new_item'         => __('新規お知らせを追加', 'dayservice-ikoi'),
                'edit_item'            => __('お知らせを編集', 'dayservice-ikoi'),
                'new_item'             => __('新規お知らせ', 'dayservice-ikoi'),
                'view_item'            => __('お知らせを表示', 'dayservice-ikoi'),
                'search_items'         => __('お知らせを検索', 'dayservice-ikoi'),
                'not_found'            => __('お知らせが見つかりませんでした', 'dayservice-ikoi'),
                'not_found_in_trash'   => __('ゴミ箱にお知らせが見つかりませんでした', 'dayservice-ikoi'),
            ),
            'public'              => true,
            'has_archive'         => true,
            'show_in_rest'        => true,
            'menu_position'       => 5,
            'menu_icon'           => 'dashicons-megaphone',
            'supports'            => array('title', 'editor', 'thumbnail'),
            'rewrite'            => array('slug' => 'news'),
        )
    );

    // News Category Taxonomy
    register_taxonomy('news_category', 'news',
        array(
            'labels' => array(
                'name'              => __('お知らせカテゴリー', 'dayservice-ikoi'),
                'singular_name'     => __('お知らせカテゴリー', 'dayservice-ikoi'),
                'search_items'      => __('カテゴリーを検索', 'dayservice-ikoi'),
                'all_items'         => __('全てのカテゴリー', 'dayservice-ikoi'),
                'parent_item'       => __('親カテゴリー', 'dayservice-ikoi'),
                'parent_item_colon' => __('親カテゴリー:', 'dayservice-ikoi'),
                'edit_item'         => __('カテゴリーを編集', 'dayservice-ikoi'),
                'update_item'       => __('カテゴリーを更新', 'dayservice-ikoi'),
                'add_new_item'      => __('新規カテゴリーを追加', 'dayservice-ikoi'),
                'new_item_name'     => __('新規カテゴリー名', 'dayservice-ikoi'),
                'menu_name'         => __('カテゴリー', 'dayservice-ikoi'),
            ),
            'hierarchical'      => true,
            'show_ui'           => true,
            'show_admin_column' => true,
            'query_var'         => true,
            'show_in_rest'      => true,
            'rewrite'           => array('slug' => 'news-category'),
        )
    );
}
add_action('init', 'dayservice_ikoi_register_post_types');