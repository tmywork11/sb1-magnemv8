<?php
/**
 * テーマの機能を定義
 */

// スタイルとスクリプトの読み込み
function dayservice_ikoi_enqueue_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;500;700&display=swap',
        array(),
        null
    );

    // メインのスタイルシート
    wp_enqueue_style(
        'dayservice-ikoi-style',
        get_stylesheet_uri(),
        array('google-fonts'),
        wp_get_theme()->get('Version')
    );

    // JavaScriptの読み込み
    wp_enqueue_script(
        'dayservice-ikoi-script',
        get_template_directory_uri() . '/js/main.js',
        array(),
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('wp_enqueue_scripts', 'dayservice_ikoi_enqueue_scripts');

// テーマサポートの追加
function dayservice_ikoi_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // メニューの登録
    register_nav_menus(array(
        'primary' => __('メインメニュー', 'dayservice-ikoi'),
        'footer'  => __('フッターメニュー', 'dayservice-ikoi'),
    ));
}
add_action('after_setup_theme', 'dayservice_ikoi_setup');

// カスタム投稿タイプの登録
require_once get_template_directory() . '/inc/custom-post-types.php';

// カスタマイザーの設定
require_once get_template_directory() . '/inc/customizer.php';

// テンプレート関数
require_once get_template_directory() . '/inc/template-functions.php';

// ACFフィールドの設定
require_once get_template_directory() . '/inc/acf-fields.php';