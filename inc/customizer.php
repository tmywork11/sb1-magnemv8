<?php
if (!defined('ABSPATH')) exit;

function dayservice_ikoi_customize_register($wp_customize) {
    // Contact Information Section
    $wp_customize->add_section('contact_info', array(
        'title' => __('お問い合わせ情報', 'dayservice-ikoi'),
        'priority' => 30,
    ));

    // Phone Number
    $wp_customize->add_setting('contact_phone', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('contact_phone', array(
        'label' => __('電話番号', 'dayservice-ikoi'),
        'section' => 'contact_info',
        'type' => 'text',
    ));

    // Business Hours
    $wp_customize->add_setting('business_hours', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('business_hours', array(
        'label' => __('営業時間', 'dayservice-ikoi'),
        'section' => 'contact_info',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'dayservice_ikoi_customize_register');