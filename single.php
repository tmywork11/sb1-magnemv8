<?php get_header(); ?>

<main id="primary" class="site-main">
    <?php
    while (have_posts()):
        the_post();
        get_template_part('template-parts/content', 'single');

        if (comments_open() || get_comments_number()):
            comments_template();
        endif;

        the_post_navigation(array(
            'prev_text' => '&larr; %title',
            'next_text' => '%title &rarr;'
        ));
    endwhile;
    ?>
</main>

<?php
get_sidebar();
get_footer();