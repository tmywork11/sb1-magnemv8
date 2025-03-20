<?php
$services = get_field('services');
?>

<section class="section-spacing bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4">
            私たちのデイケアサービスの特長
        </h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            当施設が選ばれる理由を分かりやすくご紹介します。
        </p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-scroll-reveal>
            <?php if ($services): foreach ($services as $index => $service): ?>
                <div class="bg-gray-50 rounded-xl p-8 shadow-sm transition-all duration-700 ease-out transform"
                     data-scroll-reveal-delay="<?php echo $index * 150; ?>">
                    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                        <?php echo wp_get_attachment_image($service['icon'], 'full', false, array('class' => 'h-8 w-8')); ?>
                    </div>
                    <h3 class="text-xl font-medium mb-4"><?php echo esc_html($service['title']); ?></h3>
                    <p class="text-gray-600 leading-relaxed"><?php echo esc_html($service['description']); ?></p>
                </div>
            <?php endforeach; endif; ?>
        </div>

        <div class="text-center mt-16">
            <a href="<?php echo get_permalink(get_page_by_path('services')); ?>" 
               class="group inline-flex items-center px-6 py-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200">
                <span class="font-medium">詳しいサービスを見る</span>
                <svg class="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    </div>
</section>