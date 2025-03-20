<?php
/**
 * Template part for displaying news posts
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('news-item'); ?>>
    <div class="news-meta">
        <time class="news-date"><?php echo get_the_date('Y.m.d'); ?></time>
        <?php
        $categories = get_the_terms(get_the_ID(), 'news_category');
        if ($categories && !is_wp_error($categories)): ?>
            <span class="news-category">
                <?php echo esc_html($categories[0]->name); ?>
            </span>
        <?php endif; ?>
    </div>
    
    <?php if (is_singular()): ?>
        <h1 class="entry-title"><?php the_title(); ?></h1>
    <?php else: ?>
        <h2 class="entry-title">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h2>
    <?php endif; ?>

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