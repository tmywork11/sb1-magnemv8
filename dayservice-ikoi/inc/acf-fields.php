<?php
if (!defined('ABSPATH')) exit;

if (function_exists('acf_add_local_field_group')):

acf_add_local_field_group(array(
    'key' => 'group_pricing_section',
    'title' => '料金表設定',
    'fields' => array(
        array(
            'key' => 'field_price_pdf',
            'label' => '料金表PDF',
            'name' => 'price_pdf',
            'type' => 'file',
            'instructions' => '料金表のPDFファイルをアップロードしてください。',
            'required' => 0,
            'return_format' => 'array',
            'library' => 'all',
            'mime_types' => 'pdf',
        ),
        array(
            'key' => 'field_price_examples',
            'label' => '料金例',
            'name' => 'price_examples',
            'type' => 'repeater',
            'instructions' => '実際の利用例と料金を追加してください。',
            'required' => 0,
            'min' => 0,
            'max' => 0,
            'layout' => 'block',
            'sub_fields' => array(
                array(
                    'key' => 'field_persona',
                    'label' => '利用者プロフィール',
                    'name' => 'persona',
                    'type' => 'group',
                    'sub_fields' => array(
                        array(
                            'key' => 'field_persona_name',
                            'label' => '名前',
                            'name' => 'name',
                            'type' => 'text',
                            'required' => 1,
                        ),
                        array(
                            'key' => 'field_persona_age',
                            'label' => '年齢',
                            'name' => 'age',
                            'type' => 'number',
                            'required' => 1,
                        ),
                        array(
                            'key' => 'field_persona_care_level',
                            'label' => '介護度',
                            'name' => 'care_level',
                            'type' => 'text',
                            'required' => 1,
                        ),
                        array(
                            'key' => 'field_persona_situation',
                            'label' => '利用状況',
                            'name' => 'situation',
                            'type' => 'textarea',
                            'required' => 1,
                            'rows' => 3,
                        ),
                    ),
                ),
                array(
                    'key' => 'field_usage',
                    'label' => '利用内容',
                    'name' => 'usage',
                    'type' => 'group',
                    'sub_fields' => array(
                        array(
                            'key' => 'field_usage_type',
                            'label' => '利用形態',
                            'name' => 'type',
                            'type' => 'text',
                            'required' => 1,
                        ),
                        array(
                            'key' => 'field_usage_time',
                            'label' => '利用時間',
                            'name' => 'time',
                            'type' => 'text',
                            'required' => 1,
                        ),
                        array(
                            'key' => 'field_usage_services',
                            'label' => 'ご利用サービス',
                            'name' => 'services',
                            'type' => 'repeater',
                            'required' => 1,
                            'min' => 1,
                            'layout' => 'table',
                            'sub_fields' => array(
                                array(
                                    'key' => 'field_service_name',
                                    'label' => 'サービス名',
                                    'name' => 'name',
                                    'type' => 'text',
                                    'required' => 1,
                                ),
                            ),
                        ),
                    ),
                ),
                array(
                    'key' => 'field_costs',
                    'label' => '料金詳細',
                    'name' => 'costs',
                    'type' => 'group',
                    'sub_fields' => array(
                        array(
                            'key' => 'field_service_fee',
                            'label' => 'サービス費用',
                            'name' => 'service_fee',
                            'type' => 'text',
                            'required' => 1,
                        ),
                        array(
                            'key' => 'field_insurance_cost',
                            'label' => '保険負担（1割）',
                            'name' => 'insurance_cost',
                            'type' => 'text',
                            'required' => 1,
                        ),
                        array(
                            'key' => 'field_meal_cost',
                            'label' => '食事代',
                            'name' => 'meal_cost',
                            'type' => 'text',
                            'required' => 1,
                        ),
                        array(
                            'key' => 'field_total_cost',
                            'label' => '1日あたりの自己負担',
                            'name' => 'total_cost',
                            'type' => 'text',
                            'required' => 1,
                        ),
                    ),
                ),
            ),
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'page_template',
                'operator' => '==',
                'value' => 'default',
            ),
        ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
));

endif;