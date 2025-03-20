<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <div class="flex items-center justify-between h-16">
            <div class="flex items-center space-x-3">
                <h1 class="text-lg font-bold">
                    <a href="<?php echo esc_url(home_url('/')); ?>">
                        デイサービス憩
                    </a>
                </h1>
            </div>

            <nav class="main-navigation">
                <ul class="flex items-center space-x-8">
                    <li><a href="#about">初めての方へ</a></li>
                    <li><a href="#services">サービス</a></li>
                    <li><a href="#pricing">料金</a></li>
                    <li><a href="#access">アクセス</a></li>
                </ul>
            </nav>

            <a href="tel:096-341-3501" class="hidden lg:inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                <span class="text-sm font-medium">TELで見学申込</span>
            </a>

            <button class="lg:hidden p-2" aria-label="メニュー">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </div>
</header>