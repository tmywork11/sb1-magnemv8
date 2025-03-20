<?php
if (post_password_required()) return;
?>

<div id="comments" class="comments-area">
    <?php if (have_comments()): ?>
        <h2 class="comments-title">
            <?php
            $comment_count = get_comments_number();
            printf(
                _n(
                    'コメント（%1$s）',
                    'コメント（%1$s）',
                    $comment_count,
                    'dayservice-ikoi'
                ),
                number_format_i18n($comment_count)
            );
            ?>
        </h2>

        <ol class="comment-list">
            <?php
            wp_list_comments(array(
                'style'      => 'ol',
                'short_ping' => true,
            ));
            ?>
        </ol>

        <?php the_comments_navigation(); ?>
    <?php endif; ?>

    <?php
    comment_form(array(
        'title_reply' => 'コメントを残す',
        'label_submit' => 'コメントを送信',
    ));
    ?>
</div>