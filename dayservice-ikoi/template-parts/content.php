<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="entry-header">
        <?php if (is_singular()): ?>
            <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
        <?php else: ?>
            <?php the_title(sprintf('<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url(get_permalink())), '</a></h2>'); ?>
        <?php endif; ?>

        <?php if ('post' === get_post_type()): ?>
            <div class="entry-meta">
                <time class="entry-date"><?php echo get_the_date('Y.m.d'); ?></time>
            </div>
        <?php endif; ?>
    </header>

    <div class="entry-content">
        <?php
        if (is_singular()) {
            the_content();
        } else {
            the_excerpt();
        }
        ?>
    </div>
</article>