<?php
/**
 * Template part for displaying careers section
 */
?>

<section class="careers-section relative py-24 text-center">
    <div class="absolute inset-0">
        <img
            src="<?php echo esc_url(get_theme_mod('careers_bg_image', 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80')); ?>"
            alt="採用情報の背景画像"
            class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gray-900/60"></div>
    </div>
    
    <div class="relative max-w-3xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-white mb-6">採用情報</h2>
        <p class="text-lg text-gray-200 mb-4">
            <?php echo esc_html(get_theme_mod('careers_description', '私たちと一緒に、高齢者の方々の生活をより豊かにする仕事をしませんか？')); ?>
        </p>
        <p class="text-gray-200 mb-8">
            <?php echo esc_html(get_theme_mod('careers_sub_description', '経験者はもちろん、未経験でも熱意のある方を歓迎します。充実した研修制度で、あなたの成長をサポートします。')); ?>
        </p>
        
        <?php if ($indeed_url = get_theme_mod('indeed_url')): ?>
            <a
                href="<?php echo esc_url($indeed_url); ?>"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 transform hover:-translate-y-1"
            >
                <span class="text-lg font-medium">Indeedで募集要項を見る</span>
                <svg class="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
            </a>
        <?php endif; ?>
    </div>
</section>