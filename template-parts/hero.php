<section class="hero-section">
    <?php
    $slides = get_field('hero_slides');
    if ($slides): ?>
        <?php foreach ($slides as $index => $slide): ?>
            <div class="hero-slide <?php echo $index === 0 ? 'active' : ''; ?>">
                <img src="<?php echo esc_url($slide['image']); ?>" alt="<?php echo esc_attr($slide['title']); ?>">
                <div class="hero-overlay"></div>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>
    
    <div class="absolute inset-0 flex items-center">
        <div class="container">
            <h1 class="vertical-text text-5xl font-bold text-white leading-relaxed tracking-wider ml-24">
                <?php echo nl2br(esc_html(get_field('hero_title'))); ?>
            </h1>
        </div>
    </div>
</section>