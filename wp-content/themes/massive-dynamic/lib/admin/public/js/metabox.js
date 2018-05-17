jQuery( function($) {
	$(document).click(function(e)
	{
		var elem = $(e.target);

		if (elem.attr('class') && elem.filter('[class*=dodelete]').length)
		{
			e.preventDefault();

			var p = elem.parents('.wpa_group:first');

			if(p.length <= 0)
				p = elem.parents('.postbox'); /*wp*/

			var the_name = elem.attr('class').match(/dodelete-([a-zA-Z0-9_-]*)/i);

			the_name = (the_name && the_name[1]) ? the_name[1] : null ;

			/* todo: expose and allow editing of this message */
			if (confirm('This action can not be undone, are you sure?'))
			{
				if (the_name)
				{
					$('.wpa_group-'+ the_name, p).not('.tocopy').remove();
				}
				else
				{
					elem.parents('.wpa_group:first').remove();
				}

				if(!the_name)
				{
					var the_group = elem.parents('.wpa_group');
					if(the_group && the_group.attr('class'))
					{
						the_name = the_group.attr('class').match(/wpa_group-([a-zA-Z0-9_-]*)/i);
						the_name = (the_name && the_name[1]) ? the_name[1] : null ;
					}
				}
				checkLoopLimit(the_name);

				$.wpalchemy.trigger('wpa_delete');
			}
		}
	});

	$(document).on('click', '[class*=docopy-]', function(e)
	{
		e.preventDefault();

		var p = $(this).parents('.wpa_group:first');

		if(p.length <= 0)
			p = $(this).parents('.postbox'); /*wp*/

		var the_name = $(this).attr('class').match(/docopy-([a-zA-Z0-9_-]*)/i)[1];

		var the_group = $('.wpa_group-'+ the_name +'.tocopy', p).first();

		var the_clone = the_group.clone().removeClass('tocopy last');

		var the_props = ['name', 'id', 'for', 'class'];

		the_group.find('*').each(function(i, elem)
		{
			for (var j = 0; j < the_props.length; j++)
			{
				var the_prop = $(elem).attr(the_props[j]);

				if (the_prop)
				{
					var reg = new RegExp('\\['+the_name+'\\]\\[(\\d+)\\]', 'i');
					var the_match = the_prop.match(reg);

					if (the_match)
					{
						the_prop = the_prop.replace(the_match[0], '['+ the_name + ']' + '['+ (+the_match[1]+1) +']');

						$(elem).attr(the_props[j], the_prop);
					}

					the_match = null;

					// todo: this may prove to be too broad of a search
					the_match = the_prop.match(/n(\d+)/i);

					if (the_match)
					{
						the_prop = the_prop.replace(the_match[0], 'n' + (+the_match[1]+1));

						$(elem).attr(the_props[j], the_prop);
					}
				}
			}
		});

		// increment the group id
		var reg       = new RegExp('\\[(\\d+)\\]$', 'i');
		var the_id    = the_group.attr('id');
		var the_match = the_id.match(reg);
		if (the_match)
		{
			the_group.attr('id', the_id.replace(the_match[0], '['+ (+the_match[1]+1) +']'));
		}

		if ($(this).hasClass('ontop'))
		{
			$('.wpa_group-'+ the_name, p).first().before(the_clone);
		}
		else
		{
			the_group.before(the_clone);
		}

		checkLoopLimit(the_name);

		$.wpalchemy.trigger('wpa_copy', [the_clone]);
	});

	function checkLoopLimit(name)
	{
		var elems = $('.docopy-' + name);

		$.each(elems, function(idx, elem){

			var p = $(this).parents('.wpa_group:first');

			if(p.length <= 0)
				p = $(this).parents('.postbox'); /*wp*/

			var the_class = $('.wpa_loop-' + name, p).attr('class');

			if (the_class)
			{
				var the_match = the_class.match(/wpa_loop_limit-([0-9]*)/i);

				if (the_match)
				{
					var the_limit = the_match[1];

					if ($('.wpa_group-' + name, p).not('.wpa_group.tocopy').length >= the_limit)
					{
						$(this).hide();
					}
					else
					{
						$(this).show();
					}
				}
			}

		});

	}

	/* do an initial limit check, show or hide buttons */
	$('[class*=docopy-]').each(function()
	{
		var the_name = $(this).attr('class').match(/docopy-([a-zA-Z0-9_-]*)/i)[1];

		checkLoopLimit(the_name);
	});
});

(function($){ /* not using jQuery ondomready, code runs right away in footer */

	/* use a global dom element to attach events to */
	$.wpalchemy = $('<div></div>').attr('id','wpalchemy').appendTo('body');

})(jQuery);

;(function($) {

	"use strict";

	var validation    = [];
	var bindings      = [];
	var items_binding = [];
	var dependencies  = [];

	$(document).on('click', '.vp-wpa-group-title', function(e){
		e.preventDefault();
		var group     = $(this).parents('.wpa_group:first');
		var control   = group.find('.vp-controls:first');
		var siblings  = group.siblings('.wpa_group:not(.tocopy)');
		var container = $('html, body');
		if(control.hasClass('vp-hide'))
		{
			if(siblings.exists())
			{
				siblings.each(function(i, el){
					$(this).find('.vp-controls').first().slideUp('fast', function() {
						$(this).addClass('vp-hide')
						.slideDown(0, function(){
							if(i == siblings.length - 1)
							{
								container.animate({
									scrollTop: group.offset().top - $('#wpadminbar').height()
								}).promise().done(function(){
									control.slideUp(0,function() {
										$(this).removeClass('vp-hide')
										.slideDown('fast');
									});
								});
							}
						});
					});
				});
			}
			else
			{
				container.animate({
					scrollTop: group.offset().top - $('#wpadminbar').height()
				}).promise().done(function(){
					control.slideUp(0,function() {
						$(this).removeClass('vp-hide')
						.slideDown('fast');
					});
				});
			}
		}
		else
		{
			control.slideUp('fast', function() {
				$(this).addClass('vp-hide')
				.slideDown(0);
			});
		}
		return false;
	});

	function vp_init_fields($elements)
	{
		$elements.each(function(){
			if($(this).parents('.tocopy').length <= 0)
			{
				vp.init_controls($(this));

				var id         = $(this).attr('id'),
					name       = $(this).attr('id'),
					rules      = $(this).attr('data-vp-validation'),
					bind       = $(this).attr('data-vp-bind'),
					items_bind = $(this).attr('data-vp-items-bind'),
					dep        = $(this).attr('data-vp-dependency'),
					type       = $(this).getDatas().type;

				// init validation
				rules && validation.push({name: id, rules: rules, type: type});
				// init binding
				if(typeof bind !== 'undefined' && bind !== false)
				{
					bind && bindings.push({bind: bind, type: type, source: id});
				}
				// init items binding
				if(typeof items_bind !== 'undefined' && items_bind !== false)
				{
					items_bind && items_binding.push({bind: items_bind, type: type, source: id});
				}
				// init dependancies
				if(typeof dep !== 'undefined' && dep !== false)
				{
					dep && dependencies.push({dep: dep, type: 'field', source: id});
				}
			}
		});
	}

	function vp_init_groups($elements)
	{
		$elements.each(function(){
			if($(this).parents('.tocopy').length <= 0 && !$(this).hasClass('.tocopy'))
			{
				var dep  = $(this).attr('data-vp-dependency'),
					type = $(this).getDatas().type,
					id   = $(this).attr('id');
				if(typeof dep !== 'undefined' && dep !== false)
				{
					dep && dependencies.push({dep: dep, type: 'section', source: id});
				}
			}
		});
	}

	function vp_mb_sortable()
	{
		var textareaIDs = [];
		$('.wpa_loop.vp-sortable').sortable({
			items: '>.wpa_group',
			handle: '.vp-wpa-group-heading',
			axis: 'y',
			opacity: 0.5,
			tolerance: 'pointer',
			start: function(event, ui) { // turn TinyMCE off while sorting (if not, it won't work when resorted)
				if(typeof window.KIA_metabox !== 'undefined')
				{
					textareaIDs = [];
					vp.tinyMCE_save();
					$(ui.item).find('.customEditor textarea').each(function(){
						if($(this).parents('.tocopy').length <= 0)
						{
							try { tinyMCE.execCommand('mceRemoveControl', false, this.id); } catch(e){}
							textareaIDs.push(vp.jqid(this.id));
						}
					});
				}
			},
			stop: function(event, ui) { // re-initialize TinyMCE when sort is completed
				if(typeof window.KIA_metabox !== 'undefined')
				{
					for (var i = textareaIDs.length - 1; i >= 0; i--) {
						var $textarea = $(textareaIDs[i]);
						$textarea.val(switchEditors.wpautop($textarea.val()));
					}
					textareaIDs = textareaIDs.join(", ");
					try {
						KIA_metabox.runTinyMCE($(textareaIDs));
						vp.tinyMCE_save();
						for (var i = textareaIDs.length - 1; i >= 0; i--) {
							var $textarea = $(textareaIDs[i]);
							$textarea.val(switchEditors.pre_wpautop($textarea.val()));
						}
					} catch(e){}
				}
			}
		});
	}

	$(document).ready(function () {
		vp_init_fields(jQuery('.vp-metabox .vp-field'));
		vp_init_groups(jQuery('.vp-metabox .vp-meta-group'));
		process_binding(bindings);
		process_items_binding(items_binding);
		process_dependency(dependencies);
		vp_mb_sortable();
	});

	vp.is_multianswer = function(type){
		var multi = ['vp-checkbox', 'vp-checkimage', 'vp-multiselect'];
		if(jQuery.inArray(type, multi) !== -1 )
		{
			return true;
		}
		return false;
	};

	// image controls event bind
	vp.custom_check_radio_event(".vp-metabox", ".vp-field.vp-checkimage .field .input label");
	vp.custom_check_radio_event(".vp-metabox", ".vp-field.vp-radioimage .field .input label");

	// Bind event to WP publish button to process metabox validation
	$('#post').on( 'submit', function(e){

		var submitter = $("input[type=submit][clicked=true]"),
		    action    = submitter.val(),
		    errors    = 0;

		// update tinyMCE textarea content
		vp.tinyMCE_save();

		$('.vp-field').removeClass('vp-error');
		$('.validation-msg.vp-error').remove();
		$('.vp-metabox-error').remove();

		errors = vp.fields_validation_loop(validation);

		if(errors > 0)
		{
			var $notif = $('<span class="vp-metabox-error vp-js-tipsy" original-title="' + errors + ' error(s) found in metabox"></span>');

			if(action === 'Save Draft')
			{
				$('#minor-publishing-actions .spinner, #minor-publishing-actions .ajax-loading').hide();
				$notif.tipsy();
				$notif.insertAfter('#minor-publishing-actions .spinner, #minor-publishing-actions .ajax-loading');
				$('#save-post').prop('disabled', false).removeClass('button-disabled');
			}
			else if(action === 'Publish' || action === 'Update')
			{
				$('#publishing-action .spinner, #publishing-action .ajax-loading').hide();
				$notif.tipsy();
				$notif.insertAfter('#publishing-action .spinner, #publishing-action .ajax-loading');
				$('#publish').prop('disabled', false).removeClass('button-primary-disabled');
			}

			var margin_top = Math.ceil((submitter.outerHeight() - $notif.height()) / 2);
			if(margin_top > 0)
				$notif.css('margin-top', margin_top);
			e.preventDefault();
			return;
		}

		// add hidden field before toggle to force submit
		$(this).find('.vp-toggle .vp-input').each(function(){
			var hidden = $('<input>', {type: 'hidden', name: this.name, value: 0});
			$(this).before(hidden);
		});

	});

	$("#post input[type=submit]").click(function() {
		$("input[type=submit]", $(this).parents("form")).removeAttr("clicked");
		$(this).attr("clicked", "true");
	});

	function process_binding(bindings)
	{
		for (var i = 0; i < bindings.length; i++)
		{
			var field   = bindings[i];
			var temp    = field.bind.split('|');
			var func    = temp[0];
			var dest    = temp[1];
			var ids     = [];

			var prefix  = '';
			prefix      = field.source.replace('[]', '');
			prefix      = prefix.substring(0, prefix.lastIndexOf('['));

			dest = dest.split(/[\s,]+/);

			for (var j = 0; j < dest.length; j++)
			{
				dest[j] = prefix + '[' + dest[j] + ']';
				ids.push(dest[j]);
			}

			for (j = 0; j < ids.length; j++)
			{
				vp.binding_event(ids, j, field, func, '.vp-metabox', 'metabox');
			}
		}
	}

	function process_items_binding(items_binding)
	{
		for (var i = 0; i < items_binding.length; i++)
		{
			var field   = items_binding[i];
			var temp    = field.bind.split('|');
			var func    = temp[0];
			var dest    = temp[1];
			var ids     = [];

			var prefix  = '';
			prefix      = field.source.replace('[]', '');
			prefix      = prefix.substring(0, prefix.lastIndexOf('['));

			dest = dest.split(/[\s,]+/);

			for (var j = 0; j < dest.length; j++)
			{
				dest[j] = prefix + '[' + dest[j] + ']';
				ids.push(dest[j]);
			}

			for (j = 0; j < ids.length; j++)
			{
				vp.items_binding_event(ids, j, field, func, '.vp-metabox', 'metabox');
			}
		}
	}

	function process_dependency(dependencies)
	{
		for (var i = 0; i < dependencies.length; i++)
		{
			var field  = dependencies[i];
			var temp   = field.dep.split('|');
			var func   = temp[0];
			var dest   = temp[1];
			var ids    = [];
			var prefix = '';

			if(field.type === 'field')
			{
				// strip [] (which multiple option field has)
				prefix = field.source.replace('[]', '');
				prefix = prefix.substring(0, prefix.lastIndexOf('['));
			}
			else if(field.type === 'section')
			{
				var $source = jQuery(vp.jqid(field.source));
				if($source.parents('.wpa_group').length > 0)
				{
					prefix = jQuery(vp.jqid(field.source)).parents('.wpa_group').first().attr('id');
				}
				else
				{
					// get the closest 'postbox' class parent id
					prefix = jQuery(vp.jqid(field.source)).parents('.postbox').attr('id');
					// strip the '_metabox'
					prefix = prefix.substring(0, prefix.lastIndexOf('_'));
				}
			}

			dest = dest.split(',');

			for (var j = 0; j < dest.length; j++)
			{
				dest[j] = prefix + '[' + dest[j] + ']';
				ids.push(dest[j]);
			}

			for (j = 0; j < ids.length; j++)
			{
				vp.dependency_event(ids, j, field, func, '.vp-metabox');
			}
		}
	}

	$.wpalchemy.on('wpa_copy', function(event, clone){

		bindings      = [];
		dependencies  = [];
		items_binding  = [];

		// delete tocopy hidden field
		clone.find('input[class="tocopy-hidden"]').first().remove();

		vp_init_fields(clone.find('.vp-field'));
		vp_init_groups(clone.find('.vp-meta-group'));

		clone.find('.vp-wpa-group-title:first').click();

		process_binding(bindings);
		process_items_binding(items_binding);
		process_dependency(dependencies);
	});

}(jQuery));