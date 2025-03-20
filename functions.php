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

    // Tailwind CSS
    wp_enqueue_style(
        'dayservice-ikoi-tailwind',
        get_template_directory_uri() . '/dist/assets/index.css',
        array(),
        wp_get_theme()->get('Version')
    );

    // メインのスタイルシート
    wp_enqueue_style(
        'dayservice-ikoi-style',
        get_stylesheet_uri(),
        array('dayservice-ikoi-tailwind', 'google-fonts'),
        wp_get_theme()->get('Version')
    );

    // JavaScriptの読み込み
    wp_enqueue_script(
        'dayservice-ikoi-script',
        get_template_directory_uri() . '/assets/js/main.js',
        array('jquery'),
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

// jQuery Migrate警告の無効化
function dayservice_ikoi_disable_jquery_migrate($scripts) {
    if (!is_admin() && isset($scripts->registered['jquery'])) {
        $script = $scripts->registered['jquery'];
        if ($script->deps) {
            $script->deps = array_diff($script->deps, array('jquery-migrate'));
        }
    }
}
add_action('wp_default_scripts', 'dayservice_ikoi_disable_jquery_migrate');

// カスタム投稿タイプの登録
require_once get_template_directory() . '/inc/custom-post-types.php';

// カスタマイザーの設定
require_once get_template_directory() . '/inc/customizer.php';

// テンプレート関数
require_once get_template_directory() . '/inc/template-functions.php';