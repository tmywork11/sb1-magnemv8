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

    // FAX Number
    $wp_customize->add_setting('contact_fax', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('contact_fax', array(
        'label' => __('FAX番号', 'dayservice-ikoi'),
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

    // Business Address
    $wp_customize->add_setting('business_address', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('business_address', array(
        'label' => __('所在地', 'dayservice-ikoi'),
        'section' => 'contact_info',
        'type' => 'textarea',
    ));

    // Access Map URL
    $wp_customize->add_setting('access_map_url', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('access_map_url', array(
        'label' => __('Google Maps 埋め込みURL', 'dayservice-ikoi'),
        'section' => 'contact_info',
        'type' => 'url',
    ));

    // Careers Section
    $wp_customize->add_section('careers_section', array(
        'title' => __('採用情報', 'dayservice-ikoi'),
        'priority' => 35,
    ));

    // Indeed URL
    $wp_customize->add_setting('indeed_url', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('indeed_url', array(
        'label' => __('Indeed求人ページURL', 'dayservice-ikoi'),
        'section' => 'careers_section',
        'type' => 'url',
    ));

    // Careers Description
    $wp_customize->add_setting('careers_description', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('careers_description', array(
        'label' => __('採用情報の説明文', 'dayservice-ikoi'),
        'section' => 'careers_section',
        'type' => 'textarea',
    ));

    // Careers Background Image
    $wp_customize->add_setting('careers_bg_image', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'careers_bg_image', array(
        'label' => __('背景画像', 'dayservice-ikoi'),
        'section' => 'careers_section',
    )));
}
add_action('customize_register', 'dayservice_ikoi_customize_register');