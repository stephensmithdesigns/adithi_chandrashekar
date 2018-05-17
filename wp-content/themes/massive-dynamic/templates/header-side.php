<?php
//Default header template

global $headerSideTheme ;

$headerSideTheme = pixflow_get_theme_mod('header_side_theme',PIXFLOW_HEADER_SIDE_THEME);
$headerPosition = pixflow_get_theme_mod('header_position',PIXFLOW_HEADER_POSITION);
$headerBorder = pixflow_get_theme_mod('header_border_enable', PIXFLOW_HEADER_BORDER_ENABLE);

global $copyright;
$copyright = pixflow_get_theme_mod('footer_copyright_text');
$copyright = ($copyright === null)?PIXFLOW_FOOTER_COPYRIGHT_TEXT:$copyright;

global $menuStyle;
if ( 'modern' == $headerSideTheme){
    $menuStyle = 'style-modern ';
    $menuStyle .= 'style-'.pixflow_get_theme_mod('header_side_modern_style',PIXFLOW_HEADER_SIDE_MODERN_STYLE);
}else{
    $headerAlign = pixflow_get_theme_mod('header_side_align',PIXFLOW_HEADER_SIDE_ALIGN);
    $menuStyle = 'style-'. $headerAlign;
}

function pixflow_genHeaderSideLogo(){
    global $headerSideTheme;
    $retString = '<div class="logo"><a href="'.esc_url(home_url('/')).'">';
    if(pixflow_get_theme_mod('logo_style',PIXFLOW_LOGO_STYLE)=='dark'){
        $logo=pixflow_get_theme_mod('dark_logo', PIXFLOW_DARK_LOGO);
    }else{
        $logo=pixflow_get_theme_mod('light_logo', PIXFLOW_LIGHT_LOGO);
    }
    $attachment_id = pixflow_get_image_id( $logo );
    if($attachment_id){
        $image_array = wp_get_attachment_image_src($attachment_id, 'pixflow_logo');
        $logo = (false == $image_array)?PIXFLOW_PLACEHOLDER_BLANK:$image_array[0];
    }
    $retString .= '<img src="'.esc_url($logo).'"/>';
    $retString .= '</a></div>';
    print($retString);

}

function pixflow_genHeaderSideMenu(){
    global $headerSideTheme;
    ob_start();
    //wrapping the nav tag in nav-modern-side div
    if('modern' == $headerSideTheme){
    ?>
        <div class="nav-modern-side hidden-tablet hidden-phone">
        <div class="nav-modern-button">
            <span class="icon-th-small default"></span>
            <span class="icon-th-small hover"></span>
        </div>
    <?php } ?>

        <nav class="navigation hidden-tablet hidden-phone">
            <?php
            wp_nav_menu(array(
                'container' =>'',
                'menu_class' => 'clearfix',
                'before'     => '',
                'theme_location' => 'primary-nav',
                'walker'     => new PixflowCustomNavWalker(),
                'fallback_cb' => false
            ));
            ?>
        </nav>
        <?php
        //closing nav-modern-side div
        if('modern' == $headerSideTheme){
        ?>
        </div>
        <?php
        }
        $retString = ob_get_clean();
        print($retString);

}

function pixflow_genHeaderSideIcons(){
    global $headerSideTheme;
    /* Icon Packs */
    $searchEnable = pixflow_get_theme_mod('search_enable',PIXFLOW_SEARCH_ENABLE);
    $notificationEnable = pixflow_get_theme_mod('notification_enable',PIXFLOW_NOTIFICATION_ENABLE);
    $shopCartEnable = pixflow_get_theme_mod('shop_cart_enable',PIXFLOW_SHOP_CART_ENABLE);
    if(!$notificationEnable){
        return;
    }

    $iconset=pixflow_get_theme_mod('header_icons',PIXFLOW_HEADER_ICONS);
    switch($iconset){
        case ("setone"):
            $searchicon="icon-search3";
            $notifcationicon="icon-notification";
            $shopicon="icon-shopcart2";
            break;
        case ("settwo"):
            $searchicon="icon-search5";
            $notifcationicon="icon-bell3";
            $shopicon="icon-shopping-cart";
            break;
    }

    ?>
        <div class="icons-holder hidden-tablet hidden-phone">
            <ul class="icons-pack clearfix"  >
                <li class="icon search-item">
                    <a class="elem-container search">
                        <span class="<?php echo esc_attr($searchicon) ?> default"></span>
                        <span class="<?php echo esc_attr($searchicon) ?> hover"></span>
                    </a>
                </li>
                <li class="icon shopcart-item">
                    <a class="elem-container shopcart">
                        <span class="<?php echo esc_attr($shopicon) ?> default"></span>
                        <span class="<?php echo esc_attr($shopicon) ?> hover"></span>
                    </a>
                </li>
                <li class="icon notification-item">
                    <a class="notification elem-container">
                        <span class="<?php echo esc_attr($notifcationicon) ?> default"></span>
                        <span class="<?php echo esc_attr($notifcationicon) ?> hover"></span>
                    </a>
                </li>
            </ul>
        </div>
    <?php
}

function pixflow_genHeaderSideFooter(){
    global $headerSideTheme;
    global $menuStyle;
    global $copyright;
    $footer_status = (pixflow_get_theme_mod('header_side_footer',PIXFLOW_HEADER_SIDE_FOOTER) == true)?'':'md-hidden';
    ?>

    <div class="footer hidden-tablet hidden-phone <?php echo esc_attr($footer_status); ?>">
        <?php
        if('modern' == $headerSideTheme){
            ?>
            <div class="info">
                <a>
                    <span class="icon-th-menu"></span>
                </a>
                <div class="footer-content">
                    <ul class="footer-socials">
                    <?php
                    $socials = pixflow_get_active_socials();
                    if($socials){
                    foreach ($socials as $social ){
                    $title = $social['title'];
                    $icon = $social['icon'];
                    $link = $social['link'];
                    ?>
                    <li data-social="<?php echo esc_attr($title) ?>" class="icon">
                        <a href="<?php echo esc_url($link) ?>" title="<?php echo esc_attr($title) ?>" target="_blank">
                            <span class="<?php echo esc_attr($icon) ?> default"></span>
                            <span class="<?php echo esc_attr($icon) ?> hover"></span>
                        </a>
                    </li>

                    <?php } } ?>
                    </ul>
                    <div class="copyright <?php $c = ("" == $copyright) ? 'md-hidden' : ''; echo esc_attr($c);?>">
                        <p><?php echo esc_attr($copyright)?></p>
                    </div>
                </div>
            </div>
        <?php
        }elseif('standard' == $headerSideTheme){ ?>
            <div class="info">
                <div class="footer-content">
                    <ul class="footer-socials">
                    <?php
                    $socials = pixflow_get_active_socials();
                    if($socials){
                        foreach ($socials as $social ){
                                $title = $social['title'];
                                $icon = $social['icon'];
                                $link = $social['link'];
                                ?>
                                <li data-social="<?php echo esc_attr($title) ?>" class="icon">
                                    <a href="<?php echo esc_url($link) ?>" title="<?php echo esc_attr($title) ?>" target="_blank">
                                        <span class="<?php echo esc_attr($icon) ?> default"></span>
                                        <span class="<?php echo esc_attr($icon) ?> hover"></span>
                                    </a>
                                </li>

                            <?php } } ?>
                    </ul>
                    <div class="copyright <?php echo ("" == $copyright) ? 'md-hidden' : '';?>">
                        <p><?php echo esc_attr($copyright)?></p>
                    </div>
                </div>
            </div>
            <?php
        }else{ ?>
            <ul class="footer-socials">
                <li class="icon info">
                    <a>
                        <span class="icon-gathermenu"></span>
                    </a>
                    <div class="footer-content">
                        <span><?php echo esc_attr($copyright)?></span>
                    </div>
                </li>
            <?php
            $socials = pixflow_get_active_socials();
            if($socials){
                $i = 0;
                foreach ($socials as $social ){
                    $i++;
                    if($i>4) break;
                    $title = $social['title'];
                    $icon = $social['icon'];
                    $link = $social['link'];
                ?>
                <li data-social="<?php echo esc_attr($title) ?>" class="icon">
                    <a href="<?php echo esc_url($link) ?>" title="<?php echo esc_attr($title) ?>" target="_blank">
                        <span class="<?php echo esc_attr($icon) ?> default"></span>
                        <span class="<?php echo esc_attr($icon) ?> hover"></span>
                    </a>
                </li>

            <?php }}
            if('modern' == $headerSideTheme)
                {   ?>
                <li class="icon info" >
                    <a>
                        <span class="icon-info"></span>
                    </a>
                    <div class="footer-content"><span><?php echo esc_attr($copyright)?></span></div>
                </li>
            <?php } ?>
            </ul>
        <?php
        }
    ?>
    </div>
<?php
}

function pixflow_genHeaderSide() {
    pixflow_genHeaderSideLogo();
    pixflow_genHeaderSideIcons();
    pixflow_genHeaderSideMenu();
    pixflow_genHeaderSideFooter();
}
$headerClass = ' header-'.pixflow_get_theme_mod('header_responsive_skin',PIXFLOW_HEADER_RESPONSIVE_SKIN).' logo-'.pixflow_get_theme_mod('logo_responsive_skin',PIXFLOW_LOGO_RESPONSIVE_SKIN);
$headerTheme = ($headerSideTheme == 'standard')?'classic':$headerSideTheme;
$headerClass .= ($headerSideTheme == 'standard')?' standard-mode':'';
?>

<header  class="<?php echo esc_attr($headerPosition).' side-'.esc_attr($headerTheme).esc_attr($headerClass); ?>">
    <div class="color-overlay <?php echo 'border-'.esc_attr($headerPosition); if($headerBorder == true) echo " border-enabled"; else echo "border-disable";    ?>"></div>
    <div class="texture-overlay"></div>
    <div class="bg-image"></div>
    <div class="content side <?php echo esc_attr($menuStyle); ?>" >
        <?php pixflow_genHeaderSide();

        $iconset=pixflow_get_theme_mod('header_icons',PIXFLOW_HEADER_ICONS);
        if($iconset=="setone"){
            $gathericon="icon-gathermenu";
        }
        else
        {
            $gathericon="icon-hamburger-menu";
        }

        ?>
        <a class="navigation-button hidden-desktop visible-tablet" href="#">
            <span class="<?php echo esc_attr($gathericon); ?>"></span>
        </a>
        <?php if(( is_single() && pixflow_get_theme_mod('sidebar-switch-single',PIXFLOW_SIDEBAR_SWITCH_SINGLE)) ||
            (((is_front_page() && is_home()) ||  is_home() ) && pixflow_get_theme_mod('sidebar-switch-blog',PIXFLOW_SIDEBAR_SWITCH_BLOG))||
            (is_page() && pixflow_get_theme_mod('sidebar-switch',PIXFLOW_SIDEBAR_SWITCH))){
                    ?>
                <a class="mobile-sidebar hidden-desktop visible-tablet"><i class="icon-plus5"></i></a>
                <?php
                }
        if((in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) )) || class_exists( 'WooCommerce' )){
            if(is_woocommerce()&& pixflow_get_theme_mod('sidebar-switch-shop',PIXFLOW_SIDEBAR_SWITCH_SHOP)){?>
                <a class="mobile-sidebar hidden-desktop visible-tablet"><i class="icon-plus5"></i></a>
            <?php
            global $woocommerce;
            $cart_url = wc_get_cart_url(); ?>
            <a class="mobile-shopcart hidden-desktop visible-tablet" href="<?php echo esc_url($cart_url); ?>"><span class="icon-shopcart"></span></a>
        <?php }} ?>
    </div>
</header>
<?php
//Because it pushes the entire content down, we should put mobile menu here
get_template_part( 'templates/navigation-mobile' );
