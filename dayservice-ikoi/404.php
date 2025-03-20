<?php get_header(); ?>

<main id="primary" class="site-main">
    <section class="error-404 not-found">
        <header class="page-header">
            <h1 class="page-title">ページが見つかりません</h1>
        </header>

        <div class="page-content">
            <p>お探しのページは移動または削除された可能性があります。</p>
            <div class="error-404-search">
                <?php get_search_form(); ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>