var ace = require('brace');

module.exports = function(md) {
	require('brace/mode/markdown');
	require('brace/theme/solarized_light');

	var editor = ace.edit('markdown-editor');

	editor.getSession().setMode('ace/mode/markdown');
	editor.setTheme('ace/theme/solarized_light');

	var parsed = editor.setValue(md);

	editor.clearSelection();

	return parsed;
};
