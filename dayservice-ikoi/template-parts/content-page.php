<?php
/**
 * Template part for displaying page content
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="page-header">
        <?php the_title('<h1 class="page-title">', '</h1>'); ?>
    </header>

    <div class="page-content">
        <?php
        the_content();

        wp_link_pages(array(
            'before' => '<div class="page-links">' . __('ページ:', 'dayservice-ikoi'),
            'after'  => '</div>',
        ));
        ?>
    </div>
</article>