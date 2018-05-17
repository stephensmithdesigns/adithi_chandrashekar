<?php
/**
 * The main pixflow_customizer class
 */
class pixflow_customizer
{

    function __construct()
    {
        // Include necessary files like below comment
        //include_once(dirname(__FILE__) . '/includes/functions/color-functions.php');

        // Include the controls initialization script
        include_once(PIXFLOW_THEME_CUSTOMIZER . '/includes/controls/controls-init.php');
        add_action('customize_register', array($this, 'include_files'), 1);
        add_action('customize_controls_print_styles', array($this, 'styles'));
        add_action('customize_controls_print_scripts', array($this, 'custom_js'), 999);
        remove_action( 'admin_init', 'vc_page_welcome_redirect' );
//        set_transient( '_vc_page_welcome_redirect', 0, 30 );
    }

    /**
     * Include the necessary files
     */
    function include_files()
    {

        include_once(PIXFLOW_THEME_CUSTOMIZER . '/includes/controls/class-pixflow_Customize_Checkbox_Control.php');
        include_once(PIXFLOW_THEME_CUSTOMIZER . '/includes/controls/class-pixflow_Customize_Image_Control.php');
        include_once(PIXFLOW_THEME_CUSTOMIZER . '/includes/controls/class-pixflow_Customize_Radio_Control.php');
        include_once(PIXFLOW_THEME_CUSTOMIZER . '/includes/controls/class-pixflow_Customize_Sliderui_Control.php');
        include_once(PIXFLOW_THEME_CUSTOMIZER . '/includes/controls/class-pixflow_Customize_RGBA_Control.php');
        include_once(PIXFLOW_THEME_CUSTOMIZER . '/includes/controls/class-pixflow_Customize_Switch_Control.php');
        include_once(PIXFLOW_THEME_CUSTOMIZER . '/includes/controls/class-pixflow_Customize_Gradient_Control.php');
        include_once(PIXFLOW_THEME_CUSTOMIZER . '/includes/controls/class-pixflow_Customize_Text_Control.php');
        include_once(PIXFLOW_THEME_CUSTOMIZER . '/includes/controls/class-pixflow_Customize_Textarea_Control.php');
        include_once(PIXFLOW_THEME_CUSTOMIZER . '/includes/controls/class-pixflow_Select_Control.php');
        include_once(PIXFLOW_THEME_CUSTOMIZER . '/includes/controls/class-pixflow_Customize_Description_Control.php');
        include_once(PIXFLOW_THEME_CUSTOMIZER . '/includes/controls/class-pixflow_Customize_TitleText_Control.php');

    }

    /**
     * Enqueue the stylesheets and scripts required.
     */
    function styles()
    {
        $options = apply_filters('customizer/config', array());

        $customizer_url = isset($options['url_path']) ? $options['url_path'] : plugin_dir_url(__FILE__);
        wp_register_style('customizer-css', $customizer_url . 'assets/css/customizer.min.css', NULL, NULL, 'all');
        wp_register_style('customizer-ui', $customizer_url . 'assets/css/jquery-ui-1.10.0.custom.css', NULL, NULL, 'all');
        wp_register_style('pixflow-icon-font-library-css', pixflow_path_combine(PIXFLOW_THEME_CSS_URI,'iconfonts.min.css'), NULL, NULL, 'all');
        wp_enqueue_style('pixflow-icon-font-library-css');
        wp_enqueue_style('massivebuilderfonts', PIXFLOW_THEME_LIB_URI . '/customizer/assets/css/massivebuilderfonts.min.css',array(),PIXFLOW_THEME_VERSION);
        wp_enqueue_style('customizer-css');
        wp_enqueue_style('customizer-ui');
        wp_enqueue_script('plugins-js', pixflow_path_combine(PIXFLOW_THEME_JS_URI, 'plugins.min.js'), array(), null,true);
        wp_enqueue_script('isotope', pixflow_path_combine(PIXFLOW_THEME_JS_URI, 'isotope.min.js'), array(), null,true);
        wp_enqueue_script('carofredsel', pixflow_path_combine(PIXFLOW_THEME_JS_URI, 'jquerycaroufredsel.min.js'), array(), null,true);
        wp_enqueue_script('customizer_js', $customizer_url . 'assets/js/customizer.min.js', array(),PIXFLOW_THEME_VERSION,true);

        if ( defined( 'MD_Shortcodes_VER' ) ) {
            $noShortcodesMsg1 = esc_attr__('You Don\'t Need Shortcodes','massive-dynamic');
            $noShortcodesMsg2 = esc_attr__('There\'s no need to use shortcodes in blog and shop pages, because they have their own templates. To add contents to these pages, you should use post or product in WordPress dashboard.','massive-dynamic');
        }else{
            $noShortcodesMsg1 = esc_attr__('Need Required Plugins Here','massive-dynamic');
            $noShortcodesMsg2 = esc_attr__('Please install "Massive Dynamic Shortcodes" plugin first, then use shortcode button here.','massive-dynamic');
        }

        global $md_uniqueSettings;
        $customizerLocalizedOptions = array(
            'loadingImg'       => $customizer_url . 'assets/images/loader.gif',
            'importFileUrl'       => content_url().'/uploads/demo/importing.txt',
            'THEME_IMAGES_URI' => PIXFLOW_THEME_IMAGES_URI,
            'THEME_CUSTOMIZER_URI'  => PIXFLOW_THEME_LIB_URI . '/customizer',
            'ajax_url' => admin_url( 'admin-ajax.php' ),
            'ajax_nonce' => wp_create_nonce( 'ajax-nonce' ),
            'uniqueSettings' => json_encode($md_uniqueSettings),
            'forbiddenUrl' => PIXFLOW_THEME_URI. '/forbidden.php',
            'adminUrl' => admin_url(),
            'applyChanges' => esc_attr__('Applying Changes','massive-dynamic'),
            'yourWebsite' => esc_attr__('Your Website','massive-dynamic'),
            'back' => esc_attr__('Back','massive-dynamic'),
            'shortcodes' => esc_attr__('SHORTCODES','massive-dynamic'),
            'noshortcodes1' => $noShortcodesMsg1,
            'noshortcodes2' => $noShortcodesMsg2,
            'chooseTemplate' => esc_attr__('PICK YOUR TEMPLATE','massive-dynamic'),
            'showAll' => esc_attr__('show all','massive-dynamic'),
            'business' => esc_attr__('business','massive-dynamic'),
            'store' => esc_attr__('store','massive-dynamic'),
            'portfolio' => esc_attr__('portfolio','massive-dynamic'),
            'personal' => esc_attr__('personal','massive-dynamic'),
            'blog' => esc_attr__('blog','massive-dynamic'),
            'viewDemo' => esc_attr__('View Demo','massive-dynamic'),
            'demoImporter1' => esc_attr__('What You Get In This Package','massive-dynamic'),
            'demoImporter2' => esc_attr__('This package will import the content you choose using bottoms below. Please note that choosing media, will increase the import time dramatically. Also you need to install required plugins like contact form 7 before importing the demos.','massive-dynamic'),
            'demoImporter3' => esc_attr__('New builder settings will overwrite your current settings, are you sure about this?','massive-dynamic'),
            'importConfirm' => esc_attr__('Yes, Im sure about this','massive-dynamic'),
            'importing' => esc_attr__('importing','massive-dynamic'),
            'faildImport' => esc_attr__('Network error, try again!','massive-dynamic'),
            'faildImportServer' => esc_attr__('Your Server Prevent Remote File Get','massive-dynamic'),
            'faildImportPermission' => esc_attr__('Folder Permission is not correct ','massive-dynamic'),
            'imported' => esc_attr__('IMPORTED!','massive-dynamic'),
            'importDemo' => esc_attr__('import template','massive-dynamic'),
            'mastersettingMsg1' => wp_kses( __('You are about to change <a class="mastersettingMsg1">master template settings,</a> current unique settings of this page will be lost! Are you sure?','massive-dynamic'),array('a' => array('class' => array()))),
            'mastersettingMsgTitle' => esc_attr__('CAUTION!','massive-dynamic'),
            'mastersettingMsgYes' => esc_attr__('Yes, Do it','massive-dynamic'),
            'mastersettingMsgNo' => esc_attr__('No, Don\'t','massive-dynamic'),
            'mastersettingMsgPost' => esc_attr__('All post detail pages will be change on this action. Do you want to continue?','massive-dynamic'),
            'mastersettingMsgPortfolio' => esc_attr__('All portfolio detail pages will be change on this action. Do you want to continue?','massive-dynamic'),
            'mastersettingMsgProduct' => esc_attr__('All product detail pages will be change on this action. Do you want to continue?','massive-dynamic'),
            'remove' => esc_attr__('Remove','massive-dynamic'),
            'changeImage' => esc_attr__('Change Image','massive-dynamic'),
            'websiteOptions' => esc_attr__('Website Options','massive-dynamic'),
            'pressEnter' => esc_attr__('Press return or enter to open this panel','massive-dynamic'),
            'uniqueSetting' => esc_attr__('Unique setting','massive-dynamic'),
            'generalSetting' => esc_attr__('General setting','massive-dynamic'),
            'search' => esc_attr__('Search','massive-dynamic'),
            'layout_options' => esc_attr__('LAYOUT & OPTIONS','massive-dynamic'),
            'layout_options_desc' => esc_attr__('Here you can find the major settings of your website, Options like website width and background, header styles, website logos, social networks, website typography and etc.','massive-dynamic'),
            'builder_save' => esc_attr__('BUILDER SAVE & TOOLS','massive-dynamic'),
            'builder_save_desc' => esc_attr__('Here you can Save your changes, switch between general and unique setting, go to dashboard, add new posts and pages, check your website in responsive views, read documentation and get other information, import pre-made websites and check the current page in front-end view.','massive-dynamic'),
            'demo_importer' => esc_attr__('DEMO IMPORTER','massive-dynamic'),
            'demo_importer_desc' => esc_attr__('Use demo importer to get access to more than 30 pre-made websites. It helps you to get the layout you want quickly, then easily replace your own content.','massive-dynamic'),
            'website_preview' => esc_attr__('WEBSITE PREVIEW','massive-dynamic'),
            'website_preview_desc' => esc_attr__('This is the preview area of Massive Builder. All changes can be viewed here, also you can change the position of header elements, footer widgets and shortcodes in this area.','massive-dynamic'),
            'shortcodes_panel' => esc_attr__('SHORTCODES PANEL','massive-dynamic'),
            'shortcodes_panel_desc' => esc_attr__('Click on this button to open shortcode\'s panel.','massive-dynamic'),
            'using_shortcodes' => esc_attr__('USING SHORTCODES','massive-dynamic'),
            'using_shortcodes_desc' => esc_attr__('Drag & Drop elements into website preview area. Move your mouse over dropped shortcode and click the setting button, then add your own content.','massive-dynamic'),
            'menuPreviewTitle' => esc_attr__('Attention!','massive-dynamic'),
            'menuPreviewText'  => esc_attr__(' For applying your changes you should save all changes. Do You want to Save them?' , 'massive-dynamic'),
            'menuPreviewYes' => esc_attr__('Yes Do It!','massive-dynamic'),
            'menuPreviewNo' => esc_attr__('No Don\'t','massive-dynamic'),
            'noNewsletter' => esc_attr__('No Newsletter','massive-dynamic'),
            'allDone' => esc_attr__('All Done!','massive-dynamic'),
            'menuName' => esc_attr__('Menu Name','massive-dynamic'),
            'addMenu' => esc_attr__('ADD MENU','massive-dynamic'),
            'howToUse' => esc_attr__('HOW TO USE','massive-dynamic'),
            'editMenuSystem' => esc_attr__('Click button above to edit your menu system.','massive-dynamic'),
            'createMegaMenu' => esc_attr__('To create a mega menu open the first menu item and click the mega menu check box.','massive-dynamic'),
            'createSubMenu' => esc_attr__('You can create sub menus by dragging menu items to the right.','massive-dynamic'),
            'previewChanges' => esc_attr__('Preview Changes','massive-dynamic'),
            'editMenuSysBtn' => esc_attr__('Click button above to edit your menu system.To create a mega menu open the first menu item and click the mega menu.','massive-dynamic'),
            'loading' => esc_attr__('Loading...','massive-dynamic'),
            'siteSettings' => esc_attr__('SITE SETTINGS','massive-dynamic'),
            'shortcodes' => esc_attr__('SHORTCODES','massive-dynamic'),
            'setting' => esc_attr__('SETTING','massive-dynamic'),
            'widgets' => esc_attr__('WIDGETS','massive-dynamic'),
            'content' => esc_attr__('CONTENT','massive-dynamic'),
            'media' => esc_attr__('MEDIA','massive-dynamic'),
            'purchase_code_status'=>pixflow_get_theme_mod('purchase_code_status',PIXFLOW_PURCHASE_CODE_STATUS),
            'md_theme_version' => wp_get_theme()->get( 'Version' ) ,
            'google_font_url' => PIXFLOW_THEME_LIB_URI . '/googlefonts.txt' ,
            'google_font_small_url' => PIXFLOW_THEME_LIB_URI . '/googlefonts-small.txt',
            'md_version_customizer_content' =>esc_attr__('Ver','massive-dynamic'),
            'md_version_customizer_content_2' =>esc_attr__('Update','massive-dynamic'),
            'md_shortcodes_button_customizer' =>esc_attr__('add element', 'massive-dynamic') ,
            'customizer_url' =>  admin_url( 'customize.php' )


        );

        wp_localize_script( 'customizer_js', 'customizerValues', $customizerLocalizedOptions );
        wp_enqueue_script( 'niceScroll',pixflow_path_combine(PIXFLOW_THEME_LIB_URI, 'assets/script/jquery.nicescroll.min.js'),false,null,true);
        wp_register_script('customizer-required', $customizer_url . '/assets/js/required.min.js',array(),PIXFLOW_THEME_VERSION,true);
        $required = $_SESSION['required'];
        wp_localize_script('customizer-required', 'required', $required);
        wp_enqueue_script('customizer-required');

    }

    /**
     * If we've specified an image to be used as logo, replace the default theme description with a div that will have our logo as background.
     */
    function custom_js()
    {
        global $img,$current_user,$firstName,$lastName,$return,$url,$edit_profile;
        $current_user = wp_get_current_user();

        $firstName= $current_user->user_firstname!=''?$current_user->user_firstname:"Your ";
        $lastName=$current_user->user_lastname!=''?$current_user->user_lastname:"Name";
        $edit_profile = get_edit_user_link($current_user->ID);

        $img = get_avatar( $current_user->user_email, 56 , PIXFLOW_THEME_CUSTOMIZER_URI.'/assets/images/avatar.jpg','Avatar' );

        if ( $return ) {
            $return = wp_unslash( $return );
            $return = wp_validate_redirect( $return );
        }
        if ( ! $return ) {
            if ( $url ) {
                $return = $url;
            } elseif ( current_user_can( 'edit_theme_options' ) || current_user_can( 'switch_themes' ) ) {
                $return = admin_url( 'themes.php' );
            } else {
                $return = admin_url();
            }
        }
        if ( function_exists('is_plugin_active') && is_plugin_active( 'analytics360/analytics360.php' ) ) {
            $analyticUrl= admin_url().'options-general.php?page=analytics360.php';
            $analyticTarget='_blank';
        }else{
            $analyticUrl= admin_url();
            $analyticTarget='_blank';
        }
        $customizerLocalizedSentences = array(
            'publishPanel' => esc_attr__('PUBLISH PANEL','massive-dynamic'),
            'save' => esc_attr__('Save','massive-dynamic'),
            'generalPageSetting' => esc_attr__('General setting','massive-dynamic'),
            'uniquePageSetting' => esc_attr__('Unique setting','massive-dynamic'),
            'avatarImage' => $img,
            'edit_profile_customizer' => $edit_profile,
            'fullname' => $firstName.' '.$lastName,
            'logo_path' => PIXFLOW_THEME_LIB_URI.'/assets/img/builder-logo.png',
            'edit_profile'=> esc_attr__('Edit Profile','massive-dynamic'),
            'importDemo' => esc_attr__('import template','massive-dynamic'),
            'adminURL' => esc_url(admin_url()),
            'dashboard' => esc_attr__('  Dashboard','massive-dynamic'),
            'saveAndView' => esc_attr__('Publish','massive-dynamic'),
            'edit_content' => esc_attr__('Edit Content','massive-dynamic'),
            'demos' => esc_attr__('Import Template','massive-dynamic') ,
        );
        $options = apply_filters('customizer/config', array());
        $customizer_url = isset($options['url_path']) ? $options['url_path'] : plugin_dir_url(__FILE__);
        wp_register_script('customizer-scripts', $customizer_url . 'assets/js/customizer-scripts.min.js',array(),PIXFLOW_THEME_VERSION,true);
        wp_localize_script( 'customizer-scripts', 'customizerSentences', $customizerLocalizedSentences );
        wp_enqueue_script('customizer-scripts');
    }

}

if((isset($_SERVER['QUERY_STRING']) && strpos($_SERVER['QUERY_STRING'],'vc_action=vc_inline')===false) || !isset($_SERVER['QUERY_STRING'])){
        $md_customizer = new pixflow_customizer();
        include_once(PIXFLOW_THEME_CUSTOMIZER . '/customizer-init.php');
}

function pixflow_updateFrontPageControllers(){
    set_theme_mod('front_page_type',get_option('show_on_front'));
    set_theme_mod('front_page_static_page',get_option('page_on_front'));
    set_theme_mod('front_page_posts_page',get_option('page_for_posts'));

}
add_action('customize_register', 'pixflow_updateFrontPageControllers');

function pixflow_frontPageDisplay(){
    update_option( 'show_on_front', pixflow_get_theme_mod('front_page_type',get_option('show_on_front')) );
    update_option( 'page_on_front', pixflow_get_theme_mod('front_page_static_page',get_option('page_on_front')) );
    update_option( 'page_for_posts', pixflow_get_theme_mod('front_page_posts_page',get_option('page_for_posts')) );
    $attachmentID = pixflow_get_image_id(pixflow_get_theme_mod('favicon'));
    if($attachmentID){
        update_option( 'site_icon', $attachmentID );
    }
}
add_action ( 'customize_save_after', 'pixflow_frontPageDisplay',100 );

// Temporary solution to solve Theme conflict issue with changesset feature
function pixflow_fix_changeset_issue(){
    $changeset_posts = get_posts( array( 'post_type' => 'customize_changeset'));
    foreach( $changeset_posts as $post ) {
        // Delete's each post.
        wp_delete_post( $post->ID, true);
        // Set to False if you want to send them to Trash.
    }
}
add_action ( 'customize_save_after', 'pixflow_fix_changeset_issue',100 );
