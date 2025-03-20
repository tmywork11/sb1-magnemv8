<?php
/**
 * Template part for displaying search results
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="entry-header">
        <?php the_title(sprintf('<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url(get_permalink())), '</a></h2>'); ?>

        <?php if ('post' === get_post_type()): ?>
            <div class="entry-meta">
                <time class="entry-date"><?php echo get_the_date('Y.m.d'); ?></time>
                <?php
                $categories = get_the_category();
                if ($categories): ?>
                    <span class="entry-category">
                        <?php echo esc_html($categories[0]->name); ?>
                    </span>
                <?php endif; ?>
            </div>
        <?php endif; ?>
    </header>

    <div class="entry-summary">
        <?php the_excerpt(); ?>
    </div>
</article>