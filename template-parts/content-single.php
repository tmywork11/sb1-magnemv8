<?php
/**
 * Template part for displaying single posts
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('bg-white rounded-xl shadow-sm overflow-hidden'); ?>>
    <header class="entry-header p-8 bg-primary-50 border-b border-primary-100">
        <div class="flex items-center space-x-4 mb-6">
            <time class="text-sm text-gray-500" datetime="<?php echo get_the_date('c'); ?>">
                <?php echo get_the_date('Y.m.d'); ?>
            </time>
            <?php
            $categories = get_the_terms(get_the_ID(), 'news_category');
            if ($categories && !is_wp_error($categories)): ?>
                <span class="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-600 rounded-full">
                    <?php echo esc_html($categories[0]->name); ?>
                </span>
            <?php endif; ?>
        </div>

        <?php the_title('<h1 class="text-2xl font-bold text-primary-800">', '</h1>'); ?>
    </header>

    <div class="entry-content p-8">
        <div class="prose prose-primary max-w-none">
            <?php
            the_content();

            wp_link_pages(array(
                'before' => '<div class="page-links">' . __('ページ:', 'dayservice-ikoi'),
                'after'  => '</div>',
            ));
            ?>
        </div>
    </div>

    <footer class="entry-footer px-8 py-6 bg-gray-50 border-t border-gray-100">
        <?php
        $categories_list = get_the_category_list(', ');
        if ($categories_list): ?>
            <div class="text-sm text-gray-600">
                カテゴリー: <?php echo $categories_list; ?>
            </div>
        <?php endif; ?>

        <?php
        $tags_list = get_the_tag_list('', ', ');
        if ($tags_list): ?>
            <div class="text-sm text-gray-600 mt-2">
                タグ: <?php echo $tags_list; ?>
            </div>
        <?php endif; ?>
    </footer>
</article>

<?php
// 前後の記事へのナビゲーション
$prev_post = get_previous_post();
$next_post = get_next_post();

if ($prev_post || $next_post): ?>
    <nav class="post-navigation mt-8 grid md:grid-cols-2 gap-4">
        <?php if ($prev_post): ?>
            <a href="<?php echo get_permalink($prev_post); ?>" class="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <svg class="h-5 w-5 text-primary-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 19l-7-7 7-7" />
                </svg>
                <div>
                    <span class="block text-sm text-gray-500">前の記事</span>
                    <span class="block font-medium text-primary-700"><?php echo get_the_title($prev_post); ?></span>
                </div>
            </a>
        <?php endif; ?>

        <?php if ($next_post): ?>
            <a href="<?php echo get_permalink($next_post); ?>" class="flex items-center justify-end p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div class="text-right">
                    <span class="block text-sm text-gray-500">次の記事</span>
                    <span class="block font-medium text-primary-700"><?php echo get_the_title($next_post); ?></span>
                </div>
                <svg class="h-5 w-5 text-primary-600 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 5l7 7-7 7" />
                </svg>
            </a>
        <?php endif; ?>
    </nav>
<?php endif; ?>