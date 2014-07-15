var ace = require('brace');

module.exports = function(html) {
	require('brace/mode/html');
	require('brace/theme/solarized_light');

	var editor = ace.edit('html-editor');

	editor.getSession().setMode('ace/mode/html');
	editor.setTheme('ace/theme/solarized_light');

	var parsed = editor.setValue(html);

	editor.clearSelection();

	return parsed;
};
