<?php
/**
 * Template part for displaying news items
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('news-item'); ?>>
    <header class="entry-header">
        <div class="news-meta">
            <time class="news-date"><?php echo get_the_date('Y.m.d'); ?></time>
            <?php
            $categories = get_the_category();
            if ($categories): ?>
                <span class="news-category">
                    <?php echo esc_html($categories[0]->name); ?>
                </span>
            <?php endif; ?>
        </div>
        
        <?php the_title('<h2 class="entry-title">', '</h2>'); ?>
    </header>

    <div class="entry-content">
        <?php the_content(); ?>
    </div>
</article>