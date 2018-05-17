<?php
/**
 * Toggle Tab2 Shortcode
 *
 * @author Pixflow
 */

add_shortcode('md_toggle_tab2', 'pixflow_get_style_script'); // pixflow_sc_toggle_tab2

function pixflow_sc_toggle_tab2( $atts, $content = null ) {
    $output = $title = $el_id = $icon = $heading_size='';

    extract( shortcode_atts( array(
        'title'        => 'Section',
        'icon'         => 'icon-empty',
    ), $atts ) );

    $css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, 'wpb_accordion_section group', 'md_toggle_tab2', $atts );
    $id= pixflow_sc_id('toggle_section2');
    $style = '';


    // Refine for RTL style
    if ($icon == 'icon-empty') {
        if (!is_rtl()) {
            $style = 'style="padding-left:0"';
        } else {
            $style = 'style="padding-right:0"';
        }
    }

    if($icon == 'icon-empty'){
        $style .= 'style="padding-left:0"';
    }
    $output .= "\n\t\t\t" . '<div class="'.$css_class.'" id="'.$id.'">';
    $output .= "\n\t\t\t\t" . '<h3 class="wpb_toggle_header" '.$style.'>
                                    <span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-s"></span>
                                    <div class="icon_left">
                                        <span class="icon '.$icon.'"></span>
                                    </div>
                                    <a href="#'.sanitize_title($title).'" onclick="return false">'.$title.'</a>
                                </h3>';

    $output .= "\n\t\t\t\t" . '<div class="wpb_toggle_content ui-accordion-content vc_clearfix">';
    $output .= ($content=='' || $content==' ') ? esc_attr__("Empty section. Drag a shortcode here to add content.", 'massive-dynamic') : "\n\t\t\t\t" . pixflow_js_remove_wpautop($content);
    $output .= "\n\t\t\t\t" . '</div>';
    $output .= "\n\t\t\t" . '</div> '. "\n";
    ob_start();
    ?>
    <script type="text/javascript">
        var $ = jQuery;
        $(function(){
            if($('body').hasClass('vc_editor')){
                $('#<?php echo esc_attr($id); ?>').closest('.vc_md_toggle2').find('.md-toggle2-add-tab').remove();
                $('#<?php echo esc_attr($id); ?>').closest('.vc_md_toggle2').find('.wpb_accordion_section').last().append('<a style="cursor: pointer;padding:5px 10px; width:100%;background-color: #ddd" class="md-toggle2-add-tab vc_control-btn"><strong>+</strong>Add new tab</a>');
                $('#<?php echo esc_attr($id); ?>').closest('.vc_md_toggle2').find('.md-toggle2-add-tab').click(function(e){
                    e.preventDefault();
                    $(this).closest('.mBuilder-element').parent().closest('.mBuilder-element').find('a.vc_control-btn[title="Add new Section"] .vc_btn-content').last().click();
                })
            }

        });
    </script>
    <?php
    $output.=ob_get_clean();
    return $output;

}
