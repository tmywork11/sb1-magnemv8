<?php
$args = array(
    'post_type' => 'news',
    'posts_per_page' => 4,
    'orderby' => 'date',
    'order' => 'DESC'
);
$news_query = new WP_Query($args);
?>

<section class="py-12 sm:py-16">
    <div class="max-w-[800px] mx-auto px-4">
        <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold text-gray-900">お知らせ</h2>
            <a href="<?php echo get_post_type_archive_link('news'); ?>" 
               class="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors">
                お知らせ一覧
                <svg class="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </div>
        
        <div class="space-y-4">
            <?php if ($news_query->have_posts()): while ($news_query->have_posts()): $news_query->the_post(); ?>
                <article class="flex items-center space-x-6 py-4 px-4 border-b border-gray-100 hover:bg-gray-50 rounded-lg transition-all duration-200">
                    <time class="text-sm text-gray-500 w-24 flex-shrink-0">
                        <?php echo get_the_date('Y.m.d'); ?>
                    </time>
                    <span class="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full w-20 text-center flex-shrink-0">
                        <?php echo get_field('news_category'); ?>
                    </span>
                    <a href="<?php the_permalink(); ?>" class="text-gray-900 group-hover:text-blue-600 transition-colors duration-200 flex-grow">
                        <?php the_title(); ?>
                    </a>
                    <svg class="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </article>
            <?php endwhile; endif; wp_reset_postdata(); ?>
        </div>
    </div>
</section>