<?php
$features = get_field('features');
?>

<section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4">私たちの強み</h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            デイサービス憩では、お一人おひとりに寄り添った個別対応を大切にしています
        </p>

        <?php get_template_part('template-parts/comparison-table'); ?>

        <h3 class="text-2xl font-bold text-center mb-8">3つの特徴的なサービス</h3>
        <div class="grid md:grid-cols-3 gap-8" data-scroll-reveal>
            <?php if ($features): foreach ($features as $index => $feature): ?>
                <div class="text-center p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
                     data-scroll-reveal-delay="<?php echo $index * 200; ?>">
                    <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-6">
                        <?php echo wp_get_attachment_image($feature['icon'], 'full', false, array('class' => 'h-10 w-10')); ?>
                    </div>
                    <h3 class="text-xl font-semibold"><?php echo esc_html($feature['title']); ?></h3>
                </div>
            <?php endforeach; endif; ?>
        </div>
    </div>
</section>