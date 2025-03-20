<section class="no-results">
    <header class="page-header">
        <h1 class="page-title"><?php _e('コンテンツが見つかりません', 'dayservice-ikoi'); ?></h1>
    </header>

    <div class="page-content">
        <?php if (is_search()): ?>
            <p><?php _e('検索キーワードに一致するコンテンツが見つかりませんでした。', 'dayservice-ikoi'); ?></p>
            <?php get_search_form(); ?>
        <?php else: ?>
            <p><?php _e('お探しのコンテンツが見つかりませんでした。', 'dayservice-ikoi'); ?></p>
        <?php endif; ?>
    </div>
</section>