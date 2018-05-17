<div class="vp-field vp-textarea" data-vp-type="vp-textarea">
	<div class="label">
		<label>
			<?php esc_attr_e('Import', 'massive-dynamic') ?>
		</label>
		<div class="description">
			<p><?php esc_attr_e('Import Options', 'massive-dynamic') ?></p>
		</div>
	</div>
	<div class="field">
		<div class="input">
			<textarea id="vp-js-import_text"></textarea>
			<div class="buttons">
				<input id="vp-js-import" class="vp-button button" type="button" value="<?php esc_attr_e('Import', 'massive-dynamic') ?>" />
				<span>
					<span id="vp-js-import-loader" class="vp-field-loader"><img src="<?php VP_Util_Res::img_out('ajax-loader.gif', ''); ?>"></span>
					<span id="vp-js-import-status"></span>
				</span>
			</div>
		</div>
	</div>
</div>

<div class="vp-field vp-textarea" data-vp-type="vp-textarea">
	<div class="label">
		<label>
			<?php esc_attr_e('Export', 'massive-dynamic') ?>
		</label>
		<div class="description">
			<p><?php esc_attr_e('Export Options', 'massive-dynamic') ?></p>
		</div>
	</div>
	<div class="field">
		<div class="input">
			<textarea id="vp-js-export_text" onclick="this.focus();this.select()" readonly="readonly"></textarea>
			<div class="buttons">
				<input id="vp-js-export" class="vp-button button" type="button" value="<?php esc_attr_e('Export', 'massive-dynamic') ?>" />
				<span>
					<span id="vp-js-export-loader" class="vp-field-loader" ><img src="<?php VP_Util_Res::img_out('ajax-loader.gif', ''); ?>"></span>
					<span id="vp-js-export-status px-display-none"></span>
				</span>
			</div>
		</div>
	</div>
</div>