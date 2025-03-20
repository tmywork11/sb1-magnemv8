<?php
/**
 * Template part for displaying pricing information
 */

$price_examples = get_field('price_examples');
$price_pdf = get_field('price_pdf');
?>

<section class="py-24 bg-paper-100">
    <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4">料金のご案内</h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            実際の利用例をもとに、料金の目安をご紹介いたします
        </p>
        
        <div class="mt-12 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <?php if ($price_examples): foreach ($price_examples as $example): ?>
                <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
                    <!-- 利用者プロフィール -->
                    <div class="bg-primary-600 p-6 text-white">
                        <div class="flex items-center space-x-3 mb-4">
                            <div class="p-2 bg-white/10 rounded-lg">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold"><?php echo esc_html($example['persona']['name']); ?>（<?php echo esc_html($example['persona']['age']); ?>歳）</h3>
                                <p class="text-primary-50">介護度：<?php echo esc_html($example['persona']['care_level']); ?></p>
                            </div>
                        </div>
                        <p class="text-sm text-primary-50"><?php echo esc_html($example['persona']['situation']); ?></p>
                    </div>

                    <!-- 利用内容 -->
                    <div class="p-6 bg-primary-50/50">
                        <div class="mb-4">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-medium">利用形態</span>
                                <span class="text-primary-600 font-bold"><?php echo esc_html($example['usage']['type']); ?></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-medium">利用時間</span>
                                <span class="text-primary-600"><?php echo esc_html($example['usage']['time']); ?></span>
                            </div>
                        </div>
                        <div class="space-y-1">
                            <p class="text-sm font-medium text-primary-600">ご利用サービス：</p>
                            <ul class="text-sm space-y-1">
                                <?php if ($example['usage']['services']): foreach ($example['usage']['services'] as $service): ?>
                                    <li class="flex items-center space-x-2">
                                        <span class="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                                        <span><?php echo esc_html($service['name']); ?></span>
                                    </li>
                                <?php endforeach; endif; ?>
                            </ul>
                        </div>
                    </div>

                    <!-- 料金詳細 -->
                    <div class="p-6 space-y-4">
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">サービス費用</span>
                                <span><?php echo esc_html($example['costs']['service_fee']); ?></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">保険負担（1割）</span>
                                <span class="font-medium"><?php echo esc_html($example['costs']['insurance_cost']); ?></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">食事代</span>
                                <span><?php echo esc_html($example['costs']['meal_cost']); ?></span>
                            </div>
                            <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                                <span class="font-bold">1日あたりの自己負担</span>
                                <span class="text-xl font-bold text-primary-600"><?php echo esc_html($example['costs']['total_cost']); ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; endif; ?>
        </div>

        <!-- 注意事項 -->
        <div class="mt-8 max-w-3xl mx-auto">
            <div class="bg-primary-50 rounded-lg p-4">
                <div class="flex items-start space-x-3">
                    <svg class="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div class="space-y-2 text-sm text-primary-800">
                        <p>※ 上記は一例です。実際の料金は介護度や利用時間、オプションサービスにより異なります。</p>
                        <p>※ 介護保険サービスの自己負担額は、所得に応じて1割から3割となります。</p>
                        <p>※ 送迎範囲外の場合は、別途送迎料金が発生する場合があります。</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 料金表ダウンロード -->
        <?php if ($price_pdf): ?>
            <div class="text-center mt-12">
                <a
                    href="<?php echo esc_url($price_pdf['url']); ?>"
                    target="_blank"
                    class="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 transform hover:-translate-y-1"
                >
                    <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    詳しい料金表をダウンロード (PDF)
                </a>
            </div>
        <?php endif; ?>
    </div>
</section>