<?php get_header(); ?>

<main>
    <section class="hero-section">
        <div class="hero-slide">
            <img src="https://images.unsplash.com/photo-1519671845924-1fd18db430b8?auto=format&fit=crop&w=1920&h=1080&q=80" alt="緑豊かな森の中の散歩道">
            <div class="hero-overlay"></div>
            <div class="container">
                <h1 class="hero-title">
                    くつろげる<br>
                    居場所で<br>
                    のびのびと
                </h1>
            </div>
        </div>
    </section>

    <section class="section news-section">
        <div class="container">
            <h2 class="section-title">お知らせ</h2>
            <?php
            $args = array(
                'post_type' => 'news',
                'posts_per_page' => 4
            );
            $news_query = new WP_Query($args);
            if ($news_query->have_posts()): ?>
                <div class="news-list">
                    <?php while ($news_query->have_posts()): $news_query->the_post(); ?>
                        <article class="news-item">
                            <time><?php echo get_the_date('Y.m.d'); ?></time>
                            <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        </article>
                    <?php endwhile; ?>
                </div>
            <?php endif; wp_reset_postdata(); ?>
        </div>
    </section>

    <?php get_template_part('template-parts/features'); ?>
    <?php get_template_part('template-parts/services'); ?>
    <?php get_template_part('template-parts/access'); ?>
</main>

<?php get_footer(); ?>