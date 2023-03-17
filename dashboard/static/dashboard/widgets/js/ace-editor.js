var WagtailAceEditor;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/js-beautify/js/index.js":
/*!**********************************************!*\
  !*** ./node_modules/js-beautify/js/index.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint node:true */
/* globals define */
/*
  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

*/



/**
The following batches are equivalent:

var beautify_js = require('js-beautify');
var beautify_js = require('js-beautify').js;
var beautify_js = require('js-beautify').js_beautify;

var beautify_css = require('js-beautify').css;
var beautify_css = require('js-beautify').css_beautify;

var beautify_html = require('js-beautify').html;
var beautify_html = require('js-beautify').html_beautify;

All methods returned accept two arguments, the source string and an options object.
**/

function get_beautify(js_beautify, css_beautify, html_beautify) {
  // the default is js
  var beautify = function(src, config) {
    return js_beautify.js_beautify(src, config);
  };

  // short aliases
  beautify.js = js_beautify.js_beautify;
  beautify.css = css_beautify.css_beautify;
  beautify.html = html_beautify.html_beautify;

  // legacy aliases
  beautify.js_beautify = js_beautify.js_beautify;
  beautify.css_beautify = css_beautify.css_beautify;
  beautify.html_beautify = html_beautify.html_beautify;

  return beautify;
}

if (true) {
  // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(/*! ./lib/beautify */ "./node_modules/js-beautify/js/lib/beautify.js"),
    __webpack_require__(/*! ./lib/beautify-css */ "./node_modules/js-beautify/js/lib/beautify-css.js"),
    __webpack_require__(/*! ./lib/beautify-html */ "./node_modules/js-beautify/js/lib/beautify-html.js")
  ], __WEBPACK_AMD_DEFINE_RESULT__ = (function(js_beautify, css_beautify, html_beautify) {
    return get_beautify(js_beautify, css_beautify, html_beautify);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

/***/ }),

/***/ "./node_modules/js-beautify/js/lib/beautify-css.js":
/*!*********************************************************!*\
  !*** ./node_modules/js-beautify/js/lib/beautify-css.js ***!
  \*********************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* AUTO-GENERATED. DO NOT MODIFY. */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


 CSS Beautifier
---------------

    Written by Harutyun Amirjanyan, (amirjanyan@gmail.com)

    Based on code initially developed by: Einar Lielmanis, <einar@beautifier.io>
        https://beautifier.io/

    Usage:
        css_beautify(source_text);
        css_beautify(source_text, options);

    The options are (default in brackets):
        indent_size (4)                         — indentation size,
        indent_char (space)                     — character to indent with,
        selector_separator_newline (true)       - separate selectors with newline or
                                                  not (e.g. "a,\nbr" or "a, br")
        end_with_newline (false)                - end with a newline
        newline_between_rules (true)            - add a new line after every css rule
        space_around_selector_separator (false) - ensure space around selector separators:
                                                  '>', '+', '~' (e.g. "a>b" -> "a > b")
    e.g

    css_beautify(css_source_text, {
      'indent_size': 1,
      'indent_char': '\t',
      'selector_separator': ' ',
      'end_with_newline': false,
      'newline_between_rules': true,
      'space_around_selector_separator': true
    });
*/

// http://www.w3.org/TR/CSS21/syndata.html#tokenization
// http://www.w3.org/TR/css3-syntax/

(function() {

/* GENERATED_BUILD_OUTPUT */
var legacy_beautify_css;
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module) {

/*jshint node:true */
/*
  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function OutputLine(parent) {
  this.__parent = parent;
  this.__character_count = 0;
  // use indent_count as a marker for this.__lines that have preserved indentation
  this.__indent_count = -1;
  this.__alignment_count = 0;
  this.__wrap_point_index = 0;
  this.__wrap_point_character_count = 0;
  this.__wrap_point_indent_count = -1;
  this.__wrap_point_alignment_count = 0;

  this.__items = [];
}

OutputLine.prototype.clone_empty = function() {
  var line = new OutputLine(this.__parent);
  line.set_indent(this.__indent_count, this.__alignment_count);
  return line;
};

OutputLine.prototype.item = function(index) {
  if (index < 0) {
    return this.__items[this.__items.length + index];
  } else {
    return this.__items[index];
  }
};

OutputLine.prototype.has_match = function(pattern) {
  for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
    if (this.__items[lastCheckedOutput].match(pattern)) {
      return true;
    }
  }
  return false;
};

OutputLine.prototype.set_indent = function(indent, alignment) {
  if (this.is_empty()) {
    this.__indent_count = indent || 0;
    this.__alignment_count = alignment || 0;
    this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
  }
};

OutputLine.prototype._set_wrap_point = function() {
  if (this.__parent.wrap_line_length) {
    this.__wrap_point_index = this.__items.length;
    this.__wrap_point_character_count = this.__character_count;
    this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
    this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
  }
};

OutputLine.prototype._should_wrap = function() {
  return this.__wrap_point_index &&
    this.__character_count > this.__parent.wrap_line_length &&
    this.__wrap_point_character_count > this.__parent.next_line.__character_count;
};

OutputLine.prototype._allow_wrap = function() {
  if (this._should_wrap()) {
    this.__parent.add_new_line();
    var next = this.__parent.current_line;
    next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
    next.__items = this.__items.slice(this.__wrap_point_index);
    this.__items = this.__items.slice(0, this.__wrap_point_index);

    next.__character_count += this.__character_count - this.__wrap_point_character_count;
    this.__character_count = this.__wrap_point_character_count;

    if (next.__items[0] === " ") {
      next.__items.splice(0, 1);
      next.__character_count -= 1;
    }
    return true;
  }
  return false;
};

OutputLine.prototype.is_empty = function() {
  return this.__items.length === 0;
};

OutputLine.prototype.last = function() {
  if (!this.is_empty()) {
    return this.__items[this.__items.length - 1];
  } else {
    return null;
  }
};

OutputLine.prototype.push = function(item) {
  this.__items.push(item);
  var last_newline_index = item.lastIndexOf('\n');
  if (last_newline_index !== -1) {
    this.__character_count = item.length - last_newline_index;
  } else {
    this.__character_count += item.length;
  }
};

OutputLine.prototype.pop = function() {
  var item = null;
  if (!this.is_empty()) {
    item = this.__items.pop();
    this.__character_count -= item.length;
  }
  return item;
};


OutputLine.prototype._remove_indent = function() {
  if (this.__indent_count > 0) {
    this.__indent_count -= 1;
    this.__character_count -= this.__parent.indent_size;
  }
};

OutputLine.prototype._remove_wrap_indent = function() {
  if (this.__wrap_point_indent_count > 0) {
    this.__wrap_point_indent_count -= 1;
  }
};
OutputLine.prototype.trim = function() {
  while (this.last() === ' ') {
    this.__items.pop();
    this.__character_count -= 1;
  }
};

OutputLine.prototype.toString = function() {
  var result = '';
  if (this.is_empty()) {
    if (this.__parent.indent_empty_lines) {
      result = this.__parent.get_indent_string(this.__indent_count);
    }
  } else {
    result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
    result += this.__items.join('');
  }
  return result;
};

function IndentStringCache(options, baseIndentString) {
  this.__cache = [''];
  this.__indent_size = options.indent_size;
  this.__indent_string = options.indent_char;
  if (!options.indent_with_tabs) {
    this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
  }

  // Set to null to continue support for auto detection of base indent
  baseIndentString = baseIndentString || '';
  if (options.indent_level > 0) {
    baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
  }

  this.__base_string = baseIndentString;
  this.__base_string_length = baseIndentString.length;
}

IndentStringCache.prototype.get_indent_size = function(indent, column) {
  var result = this.__base_string_length;
  column = column || 0;
  if (indent < 0) {
    result = 0;
  }
  result += indent * this.__indent_size;
  result += column;
  return result;
};

IndentStringCache.prototype.get_indent_string = function(indent_level, column) {
  var result = this.__base_string;
  column = column || 0;
  if (indent_level < 0) {
    indent_level = 0;
    result = '';
  }
  column += indent_level * this.__indent_size;
  this.__ensure_cache(column);
  result += this.__cache[column];
  return result;
};

IndentStringCache.prototype.__ensure_cache = function(column) {
  while (column >= this.__cache.length) {
    this.__add_column();
  }
};

IndentStringCache.prototype.__add_column = function() {
  var column = this.__cache.length;
  var indent = 0;
  var result = '';
  if (this.__indent_size && column >= this.__indent_size) {
    indent = Math.floor(column / this.__indent_size);
    column -= indent * this.__indent_size;
    result = new Array(indent + 1).join(this.__indent_string);
  }
  if (column) {
    result += new Array(column + 1).join(' ');
  }

  this.__cache.push(result);
};

function Output(options, baseIndentString) {
  this.__indent_cache = new IndentStringCache(options, baseIndentString);
  this.raw = false;
  this._end_with_newline = options.end_with_newline;
  this.indent_size = options.indent_size;
  this.wrap_line_length = options.wrap_line_length;
  this.indent_empty_lines = options.indent_empty_lines;
  this.__lines = [];
  this.previous_line = null;
  this.current_line = null;
  this.next_line = new OutputLine(this);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
  // initialize
  this.__add_outputline();
}

Output.prototype.__add_outputline = function() {
  this.previous_line = this.current_line;
  this.current_line = this.next_line.clone_empty();
  this.__lines.push(this.current_line);
};

Output.prototype.get_line_number = function() {
  return this.__lines.length;
};

Output.prototype.get_indent_string = function(indent, column) {
  return this.__indent_cache.get_indent_string(indent, column);
};

Output.prototype.get_indent_size = function(indent, column) {
  return this.__indent_cache.get_indent_size(indent, column);
};

Output.prototype.is_empty = function() {
  return !this.previous_line && this.current_line.is_empty();
};

Output.prototype.add_new_line = function(force_newline) {
  // never newline at the start of file
  // otherwise, newline only if we didn't just add one or we're forced
  if (this.is_empty() ||
    (!force_newline && this.just_added_newline())) {
    return false;
  }

  // if raw output is enabled, don't print additional newlines,
  // but still return True as though you had
  if (!this.raw) {
    this.__add_outputline();
  }
  return true;
};

Output.prototype.get_code = function(eol) {
  this.trim(true);

  // handle some edge cases where the last tokens
  // has text that ends with newline(s)
  var last_item = this.current_line.pop();
  if (last_item) {
    if (last_item[last_item.length - 1] === '\n') {
      last_item = last_item.replace(/\n+$/g, '');
    }
    this.current_line.push(last_item);
  }

  if (this._end_with_newline) {
    this.__add_outputline();
  }

  var sweet_code = this.__lines.join('\n');

  if (eol !== '\n') {
    sweet_code = sweet_code.replace(/[\n]/g, eol);
  }
  return sweet_code;
};

Output.prototype.set_wrap_point = function() {
  this.current_line._set_wrap_point();
};

Output.prototype.set_indent = function(indent, alignment) {
  indent = indent || 0;
  alignment = alignment || 0;

  // Next line stores alignment values
  this.next_line.set_indent(indent, alignment);

  // Never indent your first output indent at the start of the file
  if (this.__lines.length > 1) {
    this.current_line.set_indent(indent, alignment);
    return true;
  }

  this.current_line.set_indent();
  return false;
};

Output.prototype.add_raw_token = function(token) {
  for (var x = 0; x < token.newlines; x++) {
    this.__add_outputline();
  }
  this.current_line.set_indent(-1);
  this.current_line.push(token.whitespace_before);
  this.current_line.push(token.text);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
};

Output.prototype.add_token = function(printable_token) {
  this.__add_space_before_token();
  this.current_line.push(printable_token);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = this.current_line._allow_wrap();
};

Output.prototype.__add_space_before_token = function() {
  if (this.space_before_token && !this.just_added_newline()) {
    if (!this.non_breaking_space) {
      this.set_wrap_point();
    }
    this.current_line.push(' ');
  }
};

Output.prototype.remove_indent = function(index) {
  var output_length = this.__lines.length;
  while (index < output_length) {
    this.__lines[index]._remove_indent();
    index++;
  }
  this.current_line._remove_wrap_indent();
};

Output.prototype.trim = function(eat_newlines) {
  eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

  this.current_line.trim();

  while (eat_newlines && this.__lines.length > 1 &&
    this.current_line.is_empty()) {
    this.__lines.pop();
    this.current_line = this.__lines[this.__lines.length - 1];
    this.current_line.trim();
  }

  this.previous_line = this.__lines.length > 1 ?
    this.__lines[this.__lines.length - 2] : null;
};

Output.prototype.just_added_newline = function() {
  return this.current_line.is_empty();
};

Output.prototype.just_added_blankline = function() {
  return this.is_empty() ||
    (this.current_line.is_empty() && this.previous_line.is_empty());
};

Output.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
  var index = this.__lines.length - 2;
  while (index >= 0) {
    var potentialEmptyLine = this.__lines[index];
    if (potentialEmptyLine.is_empty()) {
      break;
    } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 &&
      potentialEmptyLine.item(-1) !== ends_with) {
      this.__lines.splice(index + 1, 0, new OutputLine(this));
      this.previous_line = this.__lines[this.__lines.length - 2];
      break;
    }
    index--;
  }
};

module.exports.Output = Output;


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Options(options, merge_child_field) {
  this.raw_options = _mergeOpts(options, merge_child_field);

  // Support passing the source text back with no change
  this.disabled = this._get_boolean('disabled');

  this.eol = this._get_characters('eol', 'auto');
  this.end_with_newline = this._get_boolean('end_with_newline');
  this.indent_size = this._get_number('indent_size', 4);
  this.indent_char = this._get_characters('indent_char', ' ');
  this.indent_level = this._get_number('indent_level');

  this.preserve_newlines = this._get_boolean('preserve_newlines', true);
  this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786);
  if (!this.preserve_newlines) {
    this.max_preserve_newlines = 0;
  }

  this.indent_with_tabs = this._get_boolean('indent_with_tabs', this.indent_char === '\t');
  if (this.indent_with_tabs) {
    this.indent_char = '\t';

    // indent_size behavior changed after 1.8.6
    // It used to be that indent_size would be
    // set to 1 for indent_with_tabs. That is no longer needed and
    // actually doesn't make sense - why not use spaces? Further,
    // that might produce unexpected behavior - tabs being used
    // for single-column alignment. So, when indent_with_tabs is true
    // and indent_size is 1, reset indent_size to 4.
    if (this.indent_size === 1) {
      this.indent_size = 4;
    }
  }

  // Backwards compat with 1.3.x
  this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'));

  this.indent_empty_lines = this._get_boolean('indent_empty_lines');

  // valid templating languages ['django', 'erb', 'handlebars', 'php', 'smarty']
  // For now, 'auto' = all off for javascript, all on for html (and inline javascript).
  // other values ignored
  this.templating = this._get_selection_list('templating', ['auto', 'none', 'django', 'erb', 'handlebars', 'php', 'smarty'], ['auto']);
}

Options.prototype._get_array = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || [];
  if (typeof option_value === 'object') {
    if (option_value !== null && typeof option_value.concat === 'function') {
      result = option_value.concat();
    }
  } else if (typeof option_value === 'string') {
    result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
  }
  return result;
};

Options.prototype._get_boolean = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = option_value === undefined ? !!default_value : !!option_value;
  return result;
};

Options.prototype._get_characters = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || '';
  if (typeof option_value === 'string') {
    result = option_value.replace(/\\r/, '\r').replace(/\\n/, '\n').replace(/\\t/, '\t');
  }
  return result;
};

Options.prototype._get_number = function(name, default_value) {
  var option_value = this.raw_options[name];
  default_value = parseInt(default_value, 10);
  if (isNaN(default_value)) {
    default_value = 0;
  }
  var result = parseInt(option_value, 10);
  if (isNaN(result)) {
    result = default_value;
  }
  return result;
};

Options.prototype._get_selection = function(name, selection_list, default_value) {
  var result = this._get_selection_list(name, selection_list, default_value);
  if (result.length !== 1) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result[0];
};


Options.prototype._get_selection_list = function(name, selection_list, default_value) {
  if (!selection_list || selection_list.length === 0) {
    throw new Error("Selection list cannot be empty.");
  }

  default_value = default_value || [selection_list[0]];
  if (!this._is_valid_selection(default_value, selection_list)) {
    throw new Error("Invalid Default Value!");
  }

  var result = this._get_array(name, default_value);
  if (!this._is_valid_selection(result, selection_list)) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can contain only the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result;
};

Options.prototype._is_valid_selection = function(result, selection_list) {
  return result.length && selection_list.length &&
    !result.some(function(item) { return selection_list.indexOf(item) === -1; });
};


// merges child options up with the parent options object
// Example: obj = {a: 1, b: {a: 2}}
//          mergeOpts(obj, 'b')
//
//          Returns: {a: 2}
function _mergeOpts(allOptions, childFieldName) {
  var finalOpts = {};
  allOptions = _normalizeOpts(allOptions);
  var name;

  for (name in allOptions) {
    if (name !== childFieldName) {
      finalOpts[name] = allOptions[name];
    }
  }

  //merge in the per type settings for the childFieldName
  if (childFieldName && allOptions[childFieldName]) {
    for (name in allOptions[childFieldName]) {
      finalOpts[name] = allOptions[childFieldName][name];
    }
  }
  return finalOpts;
}

function _normalizeOpts(options) {
  var convertedOpts = {};
  var key;

  for (key in options) {
    var newKey = key.replace(/-/g, "_");
    convertedOpts[newKey] = options[key];
  }
  return convertedOpts;
}

module.exports.Options = Options;
module.exports.normalizeOpts = _normalizeOpts;
module.exports.mergeOpts = _mergeOpts;


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var regexp_has_sticky = RegExp.prototype.hasOwnProperty('sticky');

function InputScanner(input_string) {
  this.__input = input_string || '';
  this.__input_length = this.__input.length;
  this.__position = 0;
}

InputScanner.prototype.restart = function() {
  this.__position = 0;
};

InputScanner.prototype.back = function() {
  if (this.__position > 0) {
    this.__position -= 1;
  }
};

InputScanner.prototype.hasNext = function() {
  return this.__position < this.__input_length;
};

InputScanner.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__input.charAt(this.__position);
    this.__position += 1;
  }
  return val;
};

InputScanner.prototype.peek = function(index) {
  var val = null;
  index = index || 0;
  index += this.__position;
  if (index >= 0 && index < this.__input_length) {
    val = this.__input.charAt(index);
  }
  return val;
};

// This is a JavaScript only helper function (not in python)
// Javascript doesn't have a match method
// and not all implementation support "sticky" flag.
// If they do not support sticky then both this.match() and this.test() method
// must get the match and check the index of the match.
// If sticky is supported and set, this method will use it.
// Otherwise it will check that global is set, and fall back to the slower method.
InputScanner.prototype.__match = function(pattern, index) {
  pattern.lastIndex = index;
  var pattern_match = pattern.exec(this.__input);

  if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
    if (pattern_match.index !== index) {
      pattern_match = null;
    }
  }

  return pattern_match;
};

InputScanner.prototype.test = function(pattern, index) {
  index = index || 0;
  index += this.__position;

  if (index >= 0 && index < this.__input_length) {
    return !!this.__match(pattern, index);
  } else {
    return false;
  }
};

InputScanner.prototype.testChar = function(pattern, index) {
  // test one character regex match
  var val = this.peek(index);
  pattern.lastIndex = 0;
  return val !== null && pattern.test(val);
};

InputScanner.prototype.match = function(pattern) {
  var pattern_match = this.__match(pattern, this.__position);
  if (pattern_match) {
    this.__position += pattern_match[0].length;
  } else {
    pattern_match = null;
  }
  return pattern_match;
};

InputScanner.prototype.read = function(starting_pattern, until_pattern, until_after) {
  var val = '';
  var match;
  if (starting_pattern) {
    match = this.match(starting_pattern);
    if (match) {
      val += match[0];
    }
  }
  if (until_pattern && (match || !starting_pattern)) {
    val += this.readUntil(until_pattern, until_after);
  }
  return val;
};

InputScanner.prototype.readUntil = function(pattern, until_after) {
  var val = '';
  var match_index = this.__position;
  pattern.lastIndex = this.__position;
  var pattern_match = pattern.exec(this.__input);
  if (pattern_match) {
    match_index = pattern_match.index;
    if (until_after) {
      match_index += pattern_match[0].length;
    }
  } else {
    match_index = this.__input_length;
  }

  val = this.__input.substring(this.__position, match_index);
  this.__position = match_index;
  return val;
};

InputScanner.prototype.readUntilAfter = function(pattern) {
  return this.readUntil(pattern, true);
};

InputScanner.prototype.get_regexp = function(pattern, match_from) {
  var result = null;
  var flags = 'g';
  if (match_from && regexp_has_sticky) {
    flags = 'y';
  }
  // strings are converted to regexp
  if (typeof pattern === "string" && pattern !== '') {
    // result = new RegExp(pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), flags);
    result = new RegExp(pattern, flags);
  } else if (pattern) {
    result = new RegExp(pattern.source, flags);
  }
  return result;
};

InputScanner.prototype.get_literal_regexp = function(literal_string) {
  return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
};

/* css beautifier legacy helpers */
InputScanner.prototype.peekUntilAfter = function(pattern) {
  var start = this.__position;
  var val = this.readUntilAfter(pattern);
  this.__position = start;
  return val;
};

InputScanner.prototype.lookBack = function(testVal) {
  var start = this.__position - 1;
  return start >= testVal.length && this.__input.substring(start - testVal.length, start)
    .toLowerCase() === testVal;
};

module.exports.InputScanner = InputScanner;


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Directives(start_block_pattern, end_block_pattern) {
  start_block_pattern = typeof start_block_pattern === 'string' ? start_block_pattern : start_block_pattern.source;
  end_block_pattern = typeof end_block_pattern === 'string' ? end_block_pattern : end_block_pattern.source;
  this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, 'g');
  this.__directive_pattern = / (\w+)[:](\w+)/g;

  this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, 'g');
}

Directives.prototype.get_directives = function(text) {
  if (!text.match(this.__directives_block_pattern)) {
    return null;
  }

  var directives = {};
  this.__directive_pattern.lastIndex = 0;
  var directive_match = this.__directive_pattern.exec(text);

  while (directive_match) {
    directives[directive_match[1]] = directive_match[2];
    directive_match = this.__directive_pattern.exec(text);
  }

  return directives;
};

Directives.prototype.readIgnored = function(input) {
  return input.readUntilAfter(this.__directives_end_ignore_pattern);
};


module.exports.Directives = Directives;


/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_30126__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Beautifier = (__nested_webpack_require_30126__(16).Beautifier),
  Options = (__nested_webpack_require_30126__(17).Options);

function css_beautify(source_text, options) {
  var beautifier = new Beautifier(source_text, options);
  return beautifier.beautify();
}

module.exports = css_beautify;
module.exports.defaultOptions = function() {
  return new Options();
};


/***/ }),
/* 16 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_31754__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Options = (__nested_webpack_require_31754__(17).Options);
var Output = (__nested_webpack_require_31754__(2).Output);
var InputScanner = (__nested_webpack_require_31754__(8).InputScanner);
var Directives = (__nested_webpack_require_31754__(13).Directives);

var directives_core = new Directives(/\/\*/, /\*\//);

var lineBreak = /\r\n|[\r\n]/;
var allLineBreaks = /\r\n|[\r\n]/g;

// tokenizer
var whitespaceChar = /\s/;
var whitespacePattern = /(?:\s|\n)+/g;
var block_comment_pattern = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;
var comment_pattern = /\/\/(?:[^\n\r\u2028\u2029]*)/g;

function Beautifier(source_text, options) {
  this._source_text = source_text || '';
  // Allow the setting of language/file-type specific options
  // with inheritance of overall settings
  this._options = new Options(options);
  this._ch = null;
  this._input = null;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
  this.NESTED_AT_RULE = {
    "@page": true,
    "@font-face": true,
    "@keyframes": true,
    // also in CONDITIONAL_GROUP_RULE below
    "@media": true,
    "@supports": true,
    "@document": true
  };
  this.CONDITIONAL_GROUP_RULE = {
    "@media": true,
    "@supports": true,
    "@document": true
  };
  this.NON_SEMICOLON_NEWLINE_PROPERTY = [
    "grid-template-areas",
    "grid-template"
  ];

}

Beautifier.prototype.eatString = function(endChars) {
  var result = '';
  this._ch = this._input.next();
  while (this._ch) {
    result += this._ch;
    if (this._ch === "\\") {
      result += this._input.next();
    } else if (endChars.indexOf(this._ch) !== -1 || this._ch === "\n") {
      break;
    }
    this._ch = this._input.next();
  }
  return result;
};

// Skips any white space in the source text from the current position.
// When allowAtLeastOneNewLine is true, will output new lines for each
// newline character found; if the user has preserve_newlines off, only
// the first newline will be output
Beautifier.prototype.eatWhitespace = function(allowAtLeastOneNewLine) {
  var result = whitespaceChar.test(this._input.peek());
  var newline_count = 0;
  while (whitespaceChar.test(this._input.peek())) {
    this._ch = this._input.next();
    if (allowAtLeastOneNewLine && this._ch === '\n') {
      if (newline_count === 0 || newline_count < this._options.max_preserve_newlines) {
        newline_count++;
        this._output.add_new_line(true);
      }
    }
  }
  return result;
};

// Nested pseudo-class if we are insideRule
// and the next special character found opens
// a new block
Beautifier.prototype.foundNestedPseudoClass = function() {
  var openParen = 0;
  var i = 1;
  var ch = this._input.peek(i);
  while (ch) {
    if (ch === "{") {
      return true;
    } else if (ch === '(') {
      // pseudoclasses can contain ()
      openParen += 1;
    } else if (ch === ')') {
      if (openParen === 0) {
        return false;
      }
      openParen -= 1;
    } else if (ch === ";" || ch === "}") {
      return false;
    }
    i++;
    ch = this._input.peek(i);
  }
  return false;
};

Beautifier.prototype.print_string = function(output_string) {
  this._output.set_indent(this._indentLevel);
  this._output.non_breaking_space = true;
  this._output.add_token(output_string);
};

Beautifier.prototype.preserveSingleSpace = function(isAfterSpace) {
  if (isAfterSpace) {
    this._output.space_before_token = true;
  }
};

Beautifier.prototype.indent = function() {
  this._indentLevel++;
};

Beautifier.prototype.outdent = function() {
  if (this._indentLevel > 0) {
    this._indentLevel--;
  }
};

/*_____________________--------------------_____________________*/

Beautifier.prototype.beautify = function() {
  if (this._options.disabled) {
    return this._source_text;
  }

  var source_text = this._source_text;
  var eol = this._options.eol;
  if (eol === 'auto') {
    eol = '\n';
    if (source_text && lineBreak.test(source_text || '')) {
      eol = source_text.match(lineBreak)[0];
    }
  }


  // HACK: newline parsing inconsistent. This brute force normalizes the this._input.
  source_text = source_text.replace(allLineBreaks, '\n');

  // reset
  var baseIndentString = source_text.match(/^[\t ]*/)[0];

  this._output = new Output(this._options, baseIndentString);
  this._input = new InputScanner(source_text);
  this._indentLevel = 0;
  this._nestedLevel = 0;

  this._ch = null;
  var parenLevel = 0;

  var insideRule = false;
  // This is the value side of a property value pair (blue in the following ex)
  // label { content: blue }
  var insidePropertyValue = false;
  var enteringConditionalGroup = false;
  var insideAtExtend = false;
  var insideAtImport = false;
  var insideScssMap = false;
  var topCharacter = this._ch;
  var insideNonSemiColonValues = false;
  var whitespace;
  var isAfterSpace;
  var previous_ch;

  while (true) {
    whitespace = this._input.read(whitespacePattern);
    isAfterSpace = whitespace !== '';
    previous_ch = topCharacter;
    this._ch = this._input.next();
    if (this._ch === '\\' && this._input.hasNext()) {
      this._ch += this._input.next();
    }
    topCharacter = this._ch;

    if (!this._ch) {
      break;
    } else if (this._ch === '/' && this._input.peek() === '*') {
      // /* css comment */
      // Always start block comments on a new line.
      // This handles scenarios where a block comment immediately
      // follows a property definition on the same line or where
      // minified code is being beautified.
      this._output.add_new_line();
      this._input.back();

      var comment = this._input.read(block_comment_pattern);

      // Handle ignore directive
      var directives = directives_core.get_directives(comment);
      if (directives && directives.ignore === 'start') {
        comment += directives_core.readIgnored(this._input);
      }

      this.print_string(comment);

      // Ensures any new lines following the comment are preserved
      this.eatWhitespace(true);

      // Block comments are followed by a new line so they don't
      // share a line with other properties
      this._output.add_new_line();
    } else if (this._ch === '/' && this._input.peek() === '/') {
      // // single line comment
      // Preserves the space before a comment
      // on the same line as a rule
      this._output.space_before_token = true;
      this._input.back();
      this.print_string(this._input.read(comment_pattern));

      // Ensures any new lines following the comment are preserved
      this.eatWhitespace(true);
    } else if (this._ch === '@' || this._ch === '$') {
      this.preserveSingleSpace(isAfterSpace);

      // deal with less propery mixins @{...}
      if (this._input.peek() === '{') {
        this.print_string(this._ch + this.eatString('}'));
      } else {
        this.print_string(this._ch);

        // strip trailing space, if present, for hash property checks
        var variableOrRule = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);

        if (variableOrRule.match(/[ :]$/)) {
          // we have a variable or pseudo-class, add it and insert one space before continuing
          variableOrRule = this.eatString(": ").replace(/\s$/, '');
          this.print_string(variableOrRule);
          this._output.space_before_token = true;
        }

        variableOrRule = variableOrRule.replace(/\s$/, '');

        if (variableOrRule === 'extend') {
          insideAtExtend = true;
        } else if (variableOrRule === 'import') {
          insideAtImport = true;
        }

        // might be a nesting at-rule
        if (variableOrRule in this.NESTED_AT_RULE) {
          this._nestedLevel += 1;
          if (variableOrRule in this.CONDITIONAL_GROUP_RULE) {
            enteringConditionalGroup = true;
          }
          // might be less variable
        } else if (!insideRule && parenLevel === 0 && variableOrRule.indexOf(':') !== -1) {
          insidePropertyValue = true;
          this.indent();
        }
      }
    } else if (this._ch === '#' && this._input.peek() === '{') {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch + this.eatString('}'));
    } else if (this._ch === '{') {
      if (insidePropertyValue) {
        insidePropertyValue = false;
        this.outdent();
      }

      // when entering conditional groups, only rulesets are allowed
      if (enteringConditionalGroup) {
        enteringConditionalGroup = false;
        insideRule = (this._indentLevel >= this._nestedLevel);
      } else {
        // otherwise, declarations are also allowed
        insideRule = (this._indentLevel >= this._nestedLevel - 1);
      }
      if (this._options.newline_between_rules && insideRule) {
        if (this._output.previous_line && this._output.previous_line.item(-1) !== '{') {
          this._output.ensure_empty_line_above('/', ',');
        }
      }

      this._output.space_before_token = true;

      // The difference in print_string and indent order is necessary to indent the '{' correctly
      if (this._options.brace_style === 'expand') {
        this._output.add_new_line();
        this.print_string(this._ch);
        this.indent();
        this._output.set_indent(this._indentLevel);
      } else {
        // inside mixin and first param is object
        if (previous_ch === '(') {
          this._output.space_before_token = false;
        } else if (previous_ch !== ',') {
          this.indent();
        }
        this.print_string(this._ch);
      }

      this.eatWhitespace(true);
      this._output.add_new_line();
    } else if (this._ch === '}') {
      this.outdent();
      this._output.add_new_line();
      if (previous_ch === '{') {
        this._output.trim(true);
      }
      insideAtImport = false;
      insideAtExtend = false;
      if (insidePropertyValue) {
        this.outdent();
        insidePropertyValue = false;
      }
      this.print_string(this._ch);
      insideRule = false;
      if (this._nestedLevel) {
        this._nestedLevel--;
      }

      this.eatWhitespace(true);
      this._output.add_new_line();

      if (this._options.newline_between_rules && !this._output.just_added_blankline()) {
        if (this._input.peek() !== '}') {
          this._output.add_new_line(true);
        }
      }
      if (this._input.peek() === ')') {
        this._output.trim(true);
        if (this._options.brace_style === "expand") {
          this._output.add_new_line(true);
        }
      }
    } else if (this._ch === ":") {

      for (var i = 0; i < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; i++) {
        if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[i])) {
          insideNonSemiColonValues = true;
          break;
        }
      }

      if ((insideRule || enteringConditionalGroup) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !insideAtExtend && parenLevel === 0) {
        // 'property: value' delimiter
        // which could be in a conditional group query
        this.print_string(':');
        if (!insidePropertyValue) {
          insidePropertyValue = true;
          this._output.space_before_token = true;
          this.eatWhitespace(true);
          this.indent();
        }
      } else {
        // sass/less parent reference don't use a space
        // sass nested pseudo-class don't use a space

        // preserve space before pseudoclasses/pseudoelements, as it means "in any child"
        if (this._input.lookBack(" ")) {
          this._output.space_before_token = true;
        }
        if (this._input.peek() === ":") {
          // pseudo-element
          this._ch = this._input.next();
          this.print_string("::");
        } else {
          // pseudo-class
          this.print_string(':');
        }
      }
    } else if (this._ch === '"' || this._ch === '\'') {
      var preserveQuoteSpace = previous_ch === '"' || previous_ch === '\'';
      this.preserveSingleSpace(preserveQuoteSpace || isAfterSpace);
      this.print_string(this._ch + this.eatString(this._ch));
      this.eatWhitespace(true);
    } else if (this._ch === ';') {
      insideNonSemiColonValues = false;
      if (parenLevel === 0) {
        if (insidePropertyValue) {
          this.outdent();
          insidePropertyValue = false;
        }
        insideAtExtend = false;
        insideAtImport = false;
        this.print_string(this._ch);
        this.eatWhitespace(true);

        // This maintains single line comments on the same
        // line. Block comments are also affected, but
        // a new line is always output before one inside
        // that section
        if (this._input.peek() !== '/') {
          this._output.add_new_line();
        }
      } else {
        this.print_string(this._ch);
        this.eatWhitespace(true);
        this._output.space_before_token = true;
      }
    } else if (this._ch === '(') { // may be a url
      if (this._input.lookBack("url")) {
        this.print_string(this._ch);
        this.eatWhitespace();
        parenLevel++;
        this.indent();
        this._ch = this._input.next();
        if (this._ch === ')' || this._ch === '"' || this._ch === '\'') {
          this._input.back();
        } else if (this._ch) {
          this.print_string(this._ch + this.eatString(')'));
          if (parenLevel) {
            parenLevel--;
            this.outdent();
          }
        }
      } else {
        var space_needed = false;
        if (this._input.lookBack("with")) {
          // look back is not an accurate solution, we need tokens to confirm without whitespaces
          space_needed = true;
        }
        this.preserveSingleSpace(isAfterSpace || space_needed);
        this.print_string(this._ch);

        // handle scss/sass map
        if (insidePropertyValue && previous_ch === "$" && this._options.selector_separator_newline) {
          this._output.add_new_line();
          insideScssMap = true;
        } else {
          this.eatWhitespace();
          parenLevel++;
          this.indent();
        }
      }
    } else if (this._ch === ')') {
      if (parenLevel) {
        parenLevel--;
        this.outdent();
      }
      if (insideScssMap && this._input.peek() === ";" && this._options.selector_separator_newline) {
        insideScssMap = false;
        this.outdent();
        this._output.add_new_line();
      }
      this.print_string(this._ch);
    } else if (this._ch === ',') {
      this.print_string(this._ch);
      this.eatWhitespace(true);
      if (this._options.selector_separator_newline && (!insidePropertyValue || insideScssMap) && parenLevel === 0 && !insideAtImport && !insideAtExtend) {
        this._output.add_new_line();
      } else {
        this._output.space_before_token = true;
      }
    } else if ((this._ch === '>' || this._ch === '+' || this._ch === '~') && !insidePropertyValue && parenLevel === 0) {
      //handle combinator spacing
      if (this._options.space_around_combinator) {
        this._output.space_before_token = true;
        this.print_string(this._ch);
        this._output.space_before_token = true;
      } else {
        this.print_string(this._ch);
        this.eatWhitespace();
        // squash extra whitespace
        if (this._ch && whitespaceChar.test(this._ch)) {
          this._ch = '';
        }
      }
    } else if (this._ch === ']') {
      this.print_string(this._ch);
    } else if (this._ch === '[') {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch);
    } else if (this._ch === '=') { // no whitespace before or after
      this.eatWhitespace();
      this.print_string('=');
      if (whitespaceChar.test(this._ch)) {
        this._ch = '';
      }
    } else if (this._ch === '!' && !this._input.lookBack("\\")) { // !important
      this._output.space_before_token = true;
      this.print_string(this._ch);
    } else {
      var preserveAfterSpace = previous_ch === '"' || previous_ch === '\'';
      this.preserveSingleSpace(preserveAfterSpace || isAfterSpace);
      this.print_string(this._ch);

      if (!this._output.just_added_newline() && this._input.peek() === '\n' && insideNonSemiColonValues) {
        this._output.add_new_line();
      }
    }
  }

  var sweetCode = this._output.get_code(eol);

  return sweetCode;
};

module.exports.Beautifier = Beautifier;


/***/ }),
/* 17 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_49314__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var BaseOptions = (__nested_webpack_require_49314__(6).Options);

function Options(options) {
  BaseOptions.call(this, options, 'css');

  this.selector_separator_newline = this._get_boolean('selector_separator_newline', true);
  this.newline_between_rules = this._get_boolean('newline_between_rules', true);
  var space_around_selector_separator = this._get_boolean('space_around_selector_separator');
  this.space_around_combinator = this._get_boolean('space_around_combinator') || space_around_selector_separator;

  var brace_style_split = this._get_selection_list('brace_style', ['collapse', 'expand', 'end-expand', 'none', 'preserve-inline']);
  this.brace_style = 'collapse';
  for (var bs = 0; bs < brace_style_split.length; bs++) {
    if (brace_style_split[bs] !== 'expand') {
      // default to collapse, as only collapse|expand is implemented for now
      this.brace_style = 'collapse';
    } else {
      this.brace_style = brace_style_split[bs];
    }
  }
}
Options.prototype = new BaseOptions();



module.exports.Options = Options;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_51794__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_51794__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nested_webpack_require_51794__(15);
/******/ 	legacy_beautify_css = __webpack_exports__;
/******/ 	
/******/ })()
;
var css_beautify = legacy_beautify_css;
/* Footer */
if (true) {
    // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return {
            css_beautify: css_beautify
        };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

}());


/***/ }),

/***/ "./node_modules/js-beautify/js/lib/beautify-html.js":
/*!**********************************************************!*\
  !*** ./node_modules/js-beautify/js/lib/beautify-html.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* AUTO-GENERATED. DO NOT MODIFY. */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


 Style HTML
---------------

  Written by Nochum Sossonko, (nsossonko@hotmail.com)

  Based on code initially developed by: Einar Lielmanis, <einar@beautifier.io>
    https://beautifier.io/

  Usage:
    style_html(html_source);

    style_html(html_source, options);

  The options are:
    indent_inner_html (default false)  — indent <head> and <body> sections,
    indent_size (default 4)          — indentation size,
    indent_char (default space)      — character to indent with,
    wrap_line_length (default 250)            -  maximum amount of characters per line (0 = disable)
    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none"
            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
    inline (defaults to inline tags) - list of tags to be considered inline tags
    unformatted (defaults to inline tags) - list of tags, that shouldn't be reformatted
    content_unformatted (defaults to ["pre", "textarea"] tags) - list of tags, whose content shouldn't be reformatted
    indent_scripts (default normal)  - "keep"|"separate"|"normal"
    preserve_newlines (default true) - whether existing line breaks before elements should be preserved
                                        Only works before elements, not inside tags or for text.
    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk
    indent_handlebars (default false) - format and indent {{#foo}} and {{/foo}}
    end_with_newline (false)          - end with a newline
    extra_liners (default [head,body,/html]) -List of tags that should have an extra newline before them.

    e.g.

    style_html(html_source, {
      'indent_inner_html': false,
      'indent_size': 2,
      'indent_char': ' ',
      'wrap_line_length': 78,
      'brace_style': 'expand',
      'preserve_newlines': true,
      'max_preserve_newlines': 5,
      'indent_handlebars': false,
      'extra_liners': ['/html']
    });
*/

(function() {

/* GENERATED_BUILD_OUTPUT */
var legacy_beautify_html;
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module) {

/*jshint node:true */
/*
  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function OutputLine(parent) {
  this.__parent = parent;
  this.__character_count = 0;
  // use indent_count as a marker for this.__lines that have preserved indentation
  this.__indent_count = -1;
  this.__alignment_count = 0;
  this.__wrap_point_index = 0;
  this.__wrap_point_character_count = 0;
  this.__wrap_point_indent_count = -1;
  this.__wrap_point_alignment_count = 0;

  this.__items = [];
}

OutputLine.prototype.clone_empty = function() {
  var line = new OutputLine(this.__parent);
  line.set_indent(this.__indent_count, this.__alignment_count);
  return line;
};

OutputLine.prototype.item = function(index) {
  if (index < 0) {
    return this.__items[this.__items.length + index];
  } else {
    return this.__items[index];
  }
};

OutputLine.prototype.has_match = function(pattern) {
  for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
    if (this.__items[lastCheckedOutput].match(pattern)) {
      return true;
    }
  }
  return false;
};

OutputLine.prototype.set_indent = function(indent, alignment) {
  if (this.is_empty()) {
    this.__indent_count = indent || 0;
    this.__alignment_count = alignment || 0;
    this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
  }
};

OutputLine.prototype._set_wrap_point = function() {
  if (this.__parent.wrap_line_length) {
    this.__wrap_point_index = this.__items.length;
    this.__wrap_point_character_count = this.__character_count;
    this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
    this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
  }
};

OutputLine.prototype._should_wrap = function() {
  return this.__wrap_point_index &&
    this.__character_count > this.__parent.wrap_line_length &&
    this.__wrap_point_character_count > this.__parent.next_line.__character_count;
};

OutputLine.prototype._allow_wrap = function() {
  if (this._should_wrap()) {
    this.__parent.add_new_line();
    var next = this.__parent.current_line;
    next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
    next.__items = this.__items.slice(this.__wrap_point_index);
    this.__items = this.__items.slice(0, this.__wrap_point_index);

    next.__character_count += this.__character_count - this.__wrap_point_character_count;
    this.__character_count = this.__wrap_point_character_count;

    if (next.__items[0] === " ") {
      next.__items.splice(0, 1);
      next.__character_count -= 1;
    }
    return true;
  }
  return false;
};

OutputLine.prototype.is_empty = function() {
  return this.__items.length === 0;
};

OutputLine.prototype.last = function() {
  if (!this.is_empty()) {
    return this.__items[this.__items.length - 1];
  } else {
    return null;
  }
};

OutputLine.prototype.push = function(item) {
  this.__items.push(item);
  var last_newline_index = item.lastIndexOf('\n');
  if (last_newline_index !== -1) {
    this.__character_count = item.length - last_newline_index;
  } else {
    this.__character_count += item.length;
  }
};

OutputLine.prototype.pop = function() {
  var item = null;
  if (!this.is_empty()) {
    item = this.__items.pop();
    this.__character_count -= item.length;
  }
  return item;
};


OutputLine.prototype._remove_indent = function() {
  if (this.__indent_count > 0) {
    this.__indent_count -= 1;
    this.__character_count -= this.__parent.indent_size;
  }
};

OutputLine.prototype._remove_wrap_indent = function() {
  if (this.__wrap_point_indent_count > 0) {
    this.__wrap_point_indent_count -= 1;
  }
};
OutputLine.prototype.trim = function() {
  while (this.last() === ' ') {
    this.__items.pop();
    this.__character_count -= 1;
  }
};

OutputLine.prototype.toString = function() {
  var result = '';
  if (this.is_empty()) {
    if (this.__parent.indent_empty_lines) {
      result = this.__parent.get_indent_string(this.__indent_count);
    }
  } else {
    result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
    result += this.__items.join('');
  }
  return result;
};

function IndentStringCache(options, baseIndentString) {
  this.__cache = [''];
  this.__indent_size = options.indent_size;
  this.__indent_string = options.indent_char;
  if (!options.indent_with_tabs) {
    this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
  }

  // Set to null to continue support for auto detection of base indent
  baseIndentString = baseIndentString || '';
  if (options.indent_level > 0) {
    baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
  }

  this.__base_string = baseIndentString;
  this.__base_string_length = baseIndentString.length;
}

IndentStringCache.prototype.get_indent_size = function(indent, column) {
  var result = this.__base_string_length;
  column = column || 0;
  if (indent < 0) {
    result = 0;
  }
  result += indent * this.__indent_size;
  result += column;
  return result;
};

IndentStringCache.prototype.get_indent_string = function(indent_level, column) {
  var result = this.__base_string;
  column = column || 0;
  if (indent_level < 0) {
    indent_level = 0;
    result = '';
  }
  column += indent_level * this.__indent_size;
  this.__ensure_cache(column);
  result += this.__cache[column];
  return result;
};

IndentStringCache.prototype.__ensure_cache = function(column) {
  while (column >= this.__cache.length) {
    this.__add_column();
  }
};

IndentStringCache.prototype.__add_column = function() {
  var column = this.__cache.length;
  var indent = 0;
  var result = '';
  if (this.__indent_size && column >= this.__indent_size) {
    indent = Math.floor(column / this.__indent_size);
    column -= indent * this.__indent_size;
    result = new Array(indent + 1).join(this.__indent_string);
  }
  if (column) {
    result += new Array(column + 1).join(' ');
  }

  this.__cache.push(result);
};

function Output(options, baseIndentString) {
  this.__indent_cache = new IndentStringCache(options, baseIndentString);
  this.raw = false;
  this._end_with_newline = options.end_with_newline;
  this.indent_size = options.indent_size;
  this.wrap_line_length = options.wrap_line_length;
  this.indent_empty_lines = options.indent_empty_lines;
  this.__lines = [];
  this.previous_line = null;
  this.current_line = null;
  this.next_line = new OutputLine(this);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
  // initialize
  this.__add_outputline();
}

Output.prototype.__add_outputline = function() {
  this.previous_line = this.current_line;
  this.current_line = this.next_line.clone_empty();
  this.__lines.push(this.current_line);
};

Output.prototype.get_line_number = function() {
  return this.__lines.length;
};

Output.prototype.get_indent_string = function(indent, column) {
  return this.__indent_cache.get_indent_string(indent, column);
};

Output.prototype.get_indent_size = function(indent, column) {
  return this.__indent_cache.get_indent_size(indent, column);
};

Output.prototype.is_empty = function() {
  return !this.previous_line && this.current_line.is_empty();
};

Output.prototype.add_new_line = function(force_newline) {
  // never newline at the start of file
  // otherwise, newline only if we didn't just add one or we're forced
  if (this.is_empty() ||
    (!force_newline && this.just_added_newline())) {
    return false;
  }

  // if raw output is enabled, don't print additional newlines,
  // but still return True as though you had
  if (!this.raw) {
    this.__add_outputline();
  }
  return true;
};

Output.prototype.get_code = function(eol) {
  this.trim(true);

  // handle some edge cases where the last tokens
  // has text that ends with newline(s)
  var last_item = this.current_line.pop();
  if (last_item) {
    if (last_item[last_item.length - 1] === '\n') {
      last_item = last_item.replace(/\n+$/g, '');
    }
    this.current_line.push(last_item);
  }

  if (this._end_with_newline) {
    this.__add_outputline();
  }

  var sweet_code = this.__lines.join('\n');

  if (eol !== '\n') {
    sweet_code = sweet_code.replace(/[\n]/g, eol);
  }
  return sweet_code;
};

Output.prototype.set_wrap_point = function() {
  this.current_line._set_wrap_point();
};

Output.prototype.set_indent = function(indent, alignment) {
  indent = indent || 0;
  alignment = alignment || 0;

  // Next line stores alignment values
  this.next_line.set_indent(indent, alignment);

  // Never indent your first output indent at the start of the file
  if (this.__lines.length > 1) {
    this.current_line.set_indent(indent, alignment);
    return true;
  }

  this.current_line.set_indent();
  return false;
};

Output.prototype.add_raw_token = function(token) {
  for (var x = 0; x < token.newlines; x++) {
    this.__add_outputline();
  }
  this.current_line.set_indent(-1);
  this.current_line.push(token.whitespace_before);
  this.current_line.push(token.text);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
};

Output.prototype.add_token = function(printable_token) {
  this.__add_space_before_token();
  this.current_line.push(printable_token);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = this.current_line._allow_wrap();
};

Output.prototype.__add_space_before_token = function() {
  if (this.space_before_token && !this.just_added_newline()) {
    if (!this.non_breaking_space) {
      this.set_wrap_point();
    }
    this.current_line.push(' ');
  }
};

Output.prototype.remove_indent = function(index) {
  var output_length = this.__lines.length;
  while (index < output_length) {
    this.__lines[index]._remove_indent();
    index++;
  }
  this.current_line._remove_wrap_indent();
};

Output.prototype.trim = function(eat_newlines) {
  eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

  this.current_line.trim();

  while (eat_newlines && this.__lines.length > 1 &&
    this.current_line.is_empty()) {
    this.__lines.pop();
    this.current_line = this.__lines[this.__lines.length - 1];
    this.current_line.trim();
  }

  this.previous_line = this.__lines.length > 1 ?
    this.__lines[this.__lines.length - 2] : null;
};

Output.prototype.just_added_newline = function() {
  return this.current_line.is_empty();
};

Output.prototype.just_added_blankline = function() {
  return this.is_empty() ||
    (this.current_line.is_empty() && this.previous_line.is_empty());
};

Output.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
  var index = this.__lines.length - 2;
  while (index >= 0) {
    var potentialEmptyLine = this.__lines[index];
    if (potentialEmptyLine.is_empty()) {
      break;
    } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 &&
      potentialEmptyLine.item(-1) !== ends_with) {
      this.__lines.splice(index + 1, 0, new OutputLine(this));
      this.previous_line = this.__lines[this.__lines.length - 2];
      break;
    }
    index--;
  }
};

module.exports.Output = Output;


/***/ }),
/* 3 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Token(type, text, newlines, whitespace_before) {
  this.type = type;
  this.text = text;

  // comments_before are
  // comments that have a new line before them
  // and may or may not have a newline after
  // this is a set of comments before
  this.comments_before = null; /* inline comment*/


  // this.comments_after =  new TokenStream(); // no new line before and newline after
  this.newlines = newlines || 0;
  this.whitespace_before = whitespace_before || '';
  this.parent = null;
  this.next = null;
  this.previous = null;
  this.opened = null;
  this.closed = null;
  this.directives = null;
}


module.exports.Token = Token;


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Options(options, merge_child_field) {
  this.raw_options = _mergeOpts(options, merge_child_field);

  // Support passing the source text back with no change
  this.disabled = this._get_boolean('disabled');

  this.eol = this._get_characters('eol', 'auto');
  this.end_with_newline = this._get_boolean('end_with_newline');
  this.indent_size = this._get_number('indent_size', 4);
  this.indent_char = this._get_characters('indent_char', ' ');
  this.indent_level = this._get_number('indent_level');

  this.preserve_newlines = this._get_boolean('preserve_newlines', true);
  this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786);
  if (!this.preserve_newlines) {
    this.max_preserve_newlines = 0;
  }

  this.indent_with_tabs = this._get_boolean('indent_with_tabs', this.indent_char === '\t');
  if (this.indent_with_tabs) {
    this.indent_char = '\t';

    // indent_size behavior changed after 1.8.6
    // It used to be that indent_size would be
    // set to 1 for indent_with_tabs. That is no longer needed and
    // actually doesn't make sense - why not use spaces? Further,
    // that might produce unexpected behavior - tabs being used
    // for single-column alignment. So, when indent_with_tabs is true
    // and indent_size is 1, reset indent_size to 4.
    if (this.indent_size === 1) {
      this.indent_size = 4;
    }
  }

  // Backwards compat with 1.3.x
  this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'));

  this.indent_empty_lines = this._get_boolean('indent_empty_lines');

  // valid templating languages ['django', 'erb', 'handlebars', 'php', 'smarty']
  // For now, 'auto' = all off for javascript, all on for html (and inline javascript).
  // other values ignored
  this.templating = this._get_selection_list('templating', ['auto', 'none', 'django', 'erb', 'handlebars', 'php', 'smarty'], ['auto']);
}

Options.prototype._get_array = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || [];
  if (typeof option_value === 'object') {
    if (option_value !== null && typeof option_value.concat === 'function') {
      result = option_value.concat();
    }
  } else if (typeof option_value === 'string') {
    result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
  }
  return result;
};

Options.prototype._get_boolean = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = option_value === undefined ? !!default_value : !!option_value;
  return result;
};

Options.prototype._get_characters = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || '';
  if (typeof option_value === 'string') {
    result = option_value.replace(/\\r/, '\r').replace(/\\n/, '\n').replace(/\\t/, '\t');
  }
  return result;
};

Options.prototype._get_number = function(name, default_value) {
  var option_value = this.raw_options[name];
  default_value = parseInt(default_value, 10);
  if (isNaN(default_value)) {
    default_value = 0;
  }
  var result = parseInt(option_value, 10);
  if (isNaN(result)) {
    result = default_value;
  }
  return result;
};

Options.prototype._get_selection = function(name, selection_list, default_value) {
  var result = this._get_selection_list(name, selection_list, default_value);
  if (result.length !== 1) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result[0];
};


Options.prototype._get_selection_list = function(name, selection_list, default_value) {
  if (!selection_list || selection_list.length === 0) {
    throw new Error("Selection list cannot be empty.");
  }

  default_value = default_value || [selection_list[0]];
  if (!this._is_valid_selection(default_value, selection_list)) {
    throw new Error("Invalid Default Value!");
  }

  var result = this._get_array(name, default_value);
  if (!this._is_valid_selection(result, selection_list)) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can contain only the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result;
};

Options.prototype._is_valid_selection = function(result, selection_list) {
  return result.length && selection_list.length &&
    !result.some(function(item) { return selection_list.indexOf(item) === -1; });
};


// merges child options up with the parent options object
// Example: obj = {a: 1, b: {a: 2}}
//          mergeOpts(obj, 'b')
//
//          Returns: {a: 2}
function _mergeOpts(allOptions, childFieldName) {
  var finalOpts = {};
  allOptions = _normalizeOpts(allOptions);
  var name;

  for (name in allOptions) {
    if (name !== childFieldName) {
      finalOpts[name] = allOptions[name];
    }
  }

  //merge in the per type settings for the childFieldName
  if (childFieldName && allOptions[childFieldName]) {
    for (name in allOptions[childFieldName]) {
      finalOpts[name] = allOptions[childFieldName][name];
    }
  }
  return finalOpts;
}

function _normalizeOpts(options) {
  var convertedOpts = {};
  var key;

  for (key in options) {
    var newKey = key.replace(/-/g, "_");
    convertedOpts[newKey] = options[key];
  }
  return convertedOpts;
}

module.exports.Options = Options;
module.exports.normalizeOpts = _normalizeOpts;
module.exports.mergeOpts = _mergeOpts;


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var regexp_has_sticky = RegExp.prototype.hasOwnProperty('sticky');

function InputScanner(input_string) {
  this.__input = input_string || '';
  this.__input_length = this.__input.length;
  this.__position = 0;
}

InputScanner.prototype.restart = function() {
  this.__position = 0;
};

InputScanner.prototype.back = function() {
  if (this.__position > 0) {
    this.__position -= 1;
  }
};

InputScanner.prototype.hasNext = function() {
  return this.__position < this.__input_length;
};

InputScanner.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__input.charAt(this.__position);
    this.__position += 1;
  }
  return val;
};

InputScanner.prototype.peek = function(index) {
  var val = null;
  index = index || 0;
  index += this.__position;
  if (index >= 0 && index < this.__input_length) {
    val = this.__input.charAt(index);
  }
  return val;
};

// This is a JavaScript only helper function (not in python)
// Javascript doesn't have a match method
// and not all implementation support "sticky" flag.
// If they do not support sticky then both this.match() and this.test() method
// must get the match and check the index of the match.
// If sticky is supported and set, this method will use it.
// Otherwise it will check that global is set, and fall back to the slower method.
InputScanner.prototype.__match = function(pattern, index) {
  pattern.lastIndex = index;
  var pattern_match = pattern.exec(this.__input);

  if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
    if (pattern_match.index !== index) {
      pattern_match = null;
    }
  }

  return pattern_match;
};

InputScanner.prototype.test = function(pattern, index) {
  index = index || 0;
  index += this.__position;

  if (index >= 0 && index < this.__input_length) {
    return !!this.__match(pattern, index);
  } else {
    return false;
  }
};

InputScanner.prototype.testChar = function(pattern, index) {
  // test one character regex match
  var val = this.peek(index);
  pattern.lastIndex = 0;
  return val !== null && pattern.test(val);
};

InputScanner.prototype.match = function(pattern) {
  var pattern_match = this.__match(pattern, this.__position);
  if (pattern_match) {
    this.__position += pattern_match[0].length;
  } else {
    pattern_match = null;
  }
  return pattern_match;
};

InputScanner.prototype.read = function(starting_pattern, until_pattern, until_after) {
  var val = '';
  var match;
  if (starting_pattern) {
    match = this.match(starting_pattern);
    if (match) {
      val += match[0];
    }
  }
  if (until_pattern && (match || !starting_pattern)) {
    val += this.readUntil(until_pattern, until_after);
  }
  return val;
};

InputScanner.prototype.readUntil = function(pattern, until_after) {
  var val = '';
  var match_index = this.__position;
  pattern.lastIndex = this.__position;
  var pattern_match = pattern.exec(this.__input);
  if (pattern_match) {
    match_index = pattern_match.index;
    if (until_after) {
      match_index += pattern_match[0].length;
    }
  } else {
    match_index = this.__input_length;
  }

  val = this.__input.substring(this.__position, match_index);
  this.__position = match_index;
  return val;
};

InputScanner.prototype.readUntilAfter = function(pattern) {
  return this.readUntil(pattern, true);
};

InputScanner.prototype.get_regexp = function(pattern, match_from) {
  var result = null;
  var flags = 'g';
  if (match_from && regexp_has_sticky) {
    flags = 'y';
  }
  // strings are converted to regexp
  if (typeof pattern === "string" && pattern !== '') {
    // result = new RegExp(pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), flags);
    result = new RegExp(pattern, flags);
  } else if (pattern) {
    result = new RegExp(pattern.source, flags);
  }
  return result;
};

InputScanner.prototype.get_literal_regexp = function(literal_string) {
  return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
};

/* css beautifier legacy helpers */
InputScanner.prototype.peekUntilAfter = function(pattern) {
  var start = this.__position;
  var val = this.readUntilAfter(pattern);
  this.__position = start;
  return val;
};

InputScanner.prototype.lookBack = function(testVal) {
  var start = this.__position - 1;
  return start >= testVal.length && this.__input.substring(start - testVal.length, start)
    .toLowerCase() === testVal;
};

module.exports.InputScanner = InputScanner;


/***/ }),
/* 9 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_30287__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var InputScanner = (__nested_webpack_require_30287__(8).InputScanner);
var Token = (__nested_webpack_require_30287__(3).Token);
var TokenStream = (__nested_webpack_require_30287__(10).TokenStream);
var WhitespacePattern = (__nested_webpack_require_30287__(11).WhitespacePattern);

var TOKEN = {
  START: 'TK_START',
  RAW: 'TK_RAW',
  EOF: 'TK_EOF'
};

var Tokenizer = function(input_string, options) {
  this._input = new InputScanner(input_string);
  this._options = options || {};
  this.__tokens = null;

  this._patterns = {};
  this._patterns.whitespace = new WhitespacePattern(this._input);
};

Tokenizer.prototype.tokenize = function() {
  this._input.restart();
  this.__tokens = new TokenStream();

  this._reset();

  var current;
  var previous = new Token(TOKEN.START, '');
  var open_token = null;
  var open_stack = [];
  var comments = new TokenStream();

  while (previous.type !== TOKEN.EOF) {
    current = this._get_next_token(previous, open_token);
    while (this._is_comment(current)) {
      comments.add(current);
      current = this._get_next_token(previous, open_token);
    }

    if (!comments.isEmpty()) {
      current.comments_before = comments;
      comments = new TokenStream();
    }

    current.parent = open_token;

    if (this._is_opening(current)) {
      open_stack.push(open_token);
      open_token = current;
    } else if (open_token && this._is_closing(current, open_token)) {
      current.opened = open_token;
      open_token.closed = current;
      open_token = open_stack.pop();
      current.parent = open_token;
    }

    current.previous = previous;
    previous.next = current;

    this.__tokens.add(current);
    previous = current;
  }

  return this.__tokens;
};


Tokenizer.prototype._is_first_token = function() {
  return this.__tokens.isEmpty();
};

Tokenizer.prototype._reset = function() {};

Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
  this._readWhitespace();
  var resulting_string = this._input.read(/.+/g);
  if (resulting_string) {
    return this._create_token(TOKEN.RAW, resulting_string);
  } else {
    return this._create_token(TOKEN.EOF, '');
  }
};

Tokenizer.prototype._is_comment = function(current_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._is_opening = function(current_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._is_closing = function(current_token, open_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._create_token = function(type, text) {
  var token = new Token(type, text,
    this._patterns.whitespace.newline_count,
    this._patterns.whitespace.whitespace_before_token);
  return token;
};

Tokenizer.prototype._readWhitespace = function() {
  return this._patterns.whitespace.read();
};



module.exports.Tokenizer = Tokenizer;
module.exports.TOKEN = TOKEN;


/***/ }),
/* 10 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function TokenStream(parent_token) {
  // private
  this.__tokens = [];
  this.__tokens_length = this.__tokens.length;
  this.__position = 0;
  this.__parent_token = parent_token;
}

TokenStream.prototype.restart = function() {
  this.__position = 0;
};

TokenStream.prototype.isEmpty = function() {
  return this.__tokens_length === 0;
};

TokenStream.prototype.hasNext = function() {
  return this.__position < this.__tokens_length;
};

TokenStream.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__tokens[this.__position];
    this.__position += 1;
  }
  return val;
};

TokenStream.prototype.peek = function(index) {
  var val = null;
  index = index || 0;
  index += this.__position;
  if (index >= 0 && index < this.__tokens_length) {
    val = this.__tokens[index];
  }
  return val;
};

TokenStream.prototype.add = function(token) {
  if (this.__parent_token) {
    token.parent = this.__parent_token;
  }
  this.__tokens.push(token);
  this.__tokens_length += 1;
};

module.exports.TokenStream = TokenStream;


/***/ }),
/* 11 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_36707__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Pattern = (__nested_webpack_require_36707__(12).Pattern);

function WhitespacePattern(input_scanner, parent) {
  Pattern.call(this, input_scanner, parent);
  if (parent) {
    this._line_regexp = this._input.get_regexp(parent._line_regexp);
  } else {
    this.__set_whitespace_patterns('', '');
  }

  this.newline_count = 0;
  this.whitespace_before_token = '';
}
WhitespacePattern.prototype = new Pattern();

WhitespacePattern.prototype.__set_whitespace_patterns = function(whitespace_chars, newline_chars) {
  whitespace_chars += '\\t ';
  newline_chars += '\\n\\r';

  this._match_pattern = this._input.get_regexp(
    '[' + whitespace_chars + newline_chars + ']+', true);
  this._newline_regexp = this._input.get_regexp(
    '\\r\\n|[' + newline_chars + ']');
};

WhitespacePattern.prototype.read = function() {
  this.newline_count = 0;
  this.whitespace_before_token = '';

  var resulting_string = this._input.read(this._match_pattern);
  if (resulting_string === ' ') {
    this.whitespace_before_token = ' ';
  } else if (resulting_string) {
    var matches = this.__split(this._newline_regexp, resulting_string);
    this.newline_count = matches.length - 1;
    this.whitespace_before_token = matches[this.newline_count];
  }

  return resulting_string;
};

WhitespacePattern.prototype.matching = function(whitespace_chars, newline_chars) {
  var result = this._create();
  result.__set_whitespace_patterns(whitespace_chars, newline_chars);
  result._update();
  return result;
};

WhitespacePattern.prototype._create = function() {
  return new WhitespacePattern(this._input, this);
};

WhitespacePattern.prototype.__split = function(regexp, input_string) {
  regexp.lastIndex = 0;
  var start_index = 0;
  var result = [];
  var next_match = regexp.exec(input_string);
  while (next_match) {
    result.push(input_string.substring(start_index, next_match.index));
    start_index = next_match.index + next_match[0].length;
    next_match = regexp.exec(input_string);
  }

  if (start_index < input_string.length) {
    result.push(input_string.substring(start_index, input_string.length));
  } else {
    result.push('');
  }

  return result;
};



module.exports.WhitespacePattern = WhitespacePattern;


/***/ }),
/* 12 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Pattern(input_scanner, parent) {
  this._input = input_scanner;
  this._starting_pattern = null;
  this._match_pattern = null;
  this._until_pattern = null;
  this._until_after = false;

  if (parent) {
    this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
    this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
    this._until_pattern = this._input.get_regexp(parent._until_pattern);
    this._until_after = parent._until_after;
  }
}

Pattern.prototype.read = function() {
  var result = this._input.read(this._starting_pattern);
  if (!this._starting_pattern || result) {
    result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
  }
  return result;
};

Pattern.prototype.read_match = function() {
  return this._input.match(this._match_pattern);
};

Pattern.prototype.until_after = function(pattern) {
  var result = this._create();
  result._until_after = true;
  result._until_pattern = this._input.get_regexp(pattern);
  result._update();
  return result;
};

Pattern.prototype.until = function(pattern) {
  var result = this._create();
  result._until_after = false;
  result._until_pattern = this._input.get_regexp(pattern);
  result._update();
  return result;
};

Pattern.prototype.starting_with = function(pattern) {
  var result = this._create();
  result._starting_pattern = this._input.get_regexp(pattern, true);
  result._update();
  return result;
};

Pattern.prototype.matching = function(pattern) {
  var result = this._create();
  result._match_pattern = this._input.get_regexp(pattern, true);
  result._update();
  return result;
};

Pattern.prototype._create = function() {
  return new Pattern(this._input, this);
};

Pattern.prototype._update = function() {};

module.exports.Pattern = Pattern;


/***/ }),
/* 13 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Directives(start_block_pattern, end_block_pattern) {
  start_block_pattern = typeof start_block_pattern === 'string' ? start_block_pattern : start_block_pattern.source;
  end_block_pattern = typeof end_block_pattern === 'string' ? end_block_pattern : end_block_pattern.source;
  this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, 'g');
  this.__directive_pattern = / (\w+)[:](\w+)/g;

  this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, 'g');
}

Directives.prototype.get_directives = function(text) {
  if (!text.match(this.__directives_block_pattern)) {
    return null;
  }

  var directives = {};
  this.__directive_pattern.lastIndex = 0;
  var directive_match = this.__directive_pattern.exec(text);

  while (directive_match) {
    directives[directive_match[1]] = directive_match[2];
    directive_match = this.__directive_pattern.exec(text);
  }

  return directives;
};

Directives.prototype.readIgnored = function(input) {
  return input.readUntilAfter(this.__directives_end_ignore_pattern);
};


module.exports.Directives = Directives;


/***/ }),
/* 14 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_45694__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Pattern = (__nested_webpack_require_45694__(12).Pattern);


var template_names = {
  django: false,
  erb: false,
  handlebars: false,
  php: false,
  smarty: false
};

// This lets templates appear anywhere we would do a readUntil
// The cost is higher but it is pay to play.
function TemplatablePattern(input_scanner, parent) {
  Pattern.call(this, input_scanner, parent);
  this.__template_pattern = null;
  this._disabled = Object.assign({}, template_names);
  this._excluded = Object.assign({}, template_names);

  if (parent) {
    this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
    this._excluded = Object.assign(this._excluded, parent._excluded);
    this._disabled = Object.assign(this._disabled, parent._disabled);
  }
  var pattern = new Pattern(input_scanner);
  this.__patterns = {
    handlebars_comment: pattern.starting_with(/{{!--/).until_after(/--}}/),
    handlebars_unescaped: pattern.starting_with(/{{{/).until_after(/}}}/),
    handlebars: pattern.starting_with(/{{/).until_after(/}}/),
    php: pattern.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
    erb: pattern.starting_with(/<%[^%]/).until_after(/[^%]%>/),
    // django coflicts with handlebars a bit.
    django: pattern.starting_with(/{%/).until_after(/%}/),
    django_value: pattern.starting_with(/{{/).until_after(/}}/),
    django_comment: pattern.starting_with(/{#/).until_after(/#}/),
    smarty: pattern.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
    smarty_comment: pattern.starting_with(/{\*/).until_after(/\*}/),
    smarty_literal: pattern.starting_with(/{literal}/).until_after(/{\/literal}/)
  };
}
TemplatablePattern.prototype = new Pattern();

TemplatablePattern.prototype._create = function() {
  return new TemplatablePattern(this._input, this);
};

TemplatablePattern.prototype._update = function() {
  this.__set_templated_pattern();
};

TemplatablePattern.prototype.disable = function(language) {
  var result = this._create();
  result._disabled[language] = true;
  result._update();
  return result;
};

TemplatablePattern.prototype.read_options = function(options) {
  var result = this._create();
  for (var language in template_names) {
    result._disabled[language] = options.templating.indexOf(language) === -1;
  }
  result._update();
  return result;
};

TemplatablePattern.prototype.exclude = function(language) {
  var result = this._create();
  result._excluded[language] = true;
  result._update();
  return result;
};

TemplatablePattern.prototype.read = function() {
  var result = '';
  if (this._match_pattern) {
    result = this._input.read(this._starting_pattern);
  } else {
    result = this._input.read(this._starting_pattern, this.__template_pattern);
  }
  var next = this._read_template();
  while (next) {
    if (this._match_pattern) {
      next += this._input.read(this._match_pattern);
    } else {
      next += this._input.readUntil(this.__template_pattern);
    }
    result += next;
    next = this._read_template();
  }

  if (this._until_after) {
    result += this._input.readUntilAfter(this._until_pattern);
  }
  return result;
};

TemplatablePattern.prototype.__set_templated_pattern = function() {
  var items = [];

  if (!this._disabled.php) {
    items.push(this.__patterns.php._starting_pattern.source);
  }
  if (!this._disabled.handlebars) {
    items.push(this.__patterns.handlebars._starting_pattern.source);
  }
  if (!this._disabled.erb) {
    items.push(this.__patterns.erb._starting_pattern.source);
  }
  if (!this._disabled.django) {
    items.push(this.__patterns.django._starting_pattern.source);
    // The starting pattern for django is more complex because it has different
    // patterns for value, comment, and other sections
    items.push(this.__patterns.django_value._starting_pattern.source);
    items.push(this.__patterns.django_comment._starting_pattern.source);
  }
  if (!this._disabled.smarty) {
    items.push(this.__patterns.smarty._starting_pattern.source);
  }

  if (this._until_pattern) {
    items.push(this._until_pattern.source);
  }
  this.__template_pattern = this._input.get_regexp('(?:' + items.join('|') + ')');
};

TemplatablePattern.prototype._read_template = function() {
  var resulting_string = '';
  var c = this._input.peek();
  if (c === '<') {
    var peek1 = this._input.peek(1);
    //if we're in a comment, do something special
    // We treat all comments as literals, even more than preformatted tags
    // we just look for the appropriate close tag
    if (!this._disabled.php && !this._excluded.php && peek1 === '?') {
      resulting_string = resulting_string ||
        this.__patterns.php.read();
    }
    if (!this._disabled.erb && !this._excluded.erb && peek1 === '%') {
      resulting_string = resulting_string ||
        this.__patterns.erb.read();
    }
  } else if (c === '{') {
    if (!this._disabled.handlebars && !this._excluded.handlebars) {
      resulting_string = resulting_string ||
        this.__patterns.handlebars_comment.read();
      resulting_string = resulting_string ||
        this.__patterns.handlebars_unescaped.read();
      resulting_string = resulting_string ||
        this.__patterns.handlebars.read();
    }
    if (!this._disabled.django) {
      // django coflicts with handlebars a bit.
      if (!this._excluded.django && !this._excluded.handlebars) {
        resulting_string = resulting_string ||
          this.__patterns.django_value.read();
      }
      if (!this._excluded.django) {
        resulting_string = resulting_string ||
          this.__patterns.django_comment.read();
        resulting_string = resulting_string ||
          this.__patterns.django.read();
      }
    }
    if (!this._disabled.smarty) {
      // smarty cannot be enabled with django or handlebars enabled
      if (this._disabled.django && this._disabled.handlebars) {
        resulting_string = resulting_string ||
          this.__patterns.smarty_comment.read();
        resulting_string = resulting_string ||
          this.__patterns.smarty_literal.read();
        resulting_string = resulting_string ||
          this.__patterns.smarty.read();
      }
    }
  }
  return resulting_string;
};


module.exports.TemplatablePattern = TemplatablePattern;


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_53240__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Beautifier = (__nested_webpack_require_53240__(19).Beautifier),
  Options = (__nested_webpack_require_53240__(20).Options);

function style_html(html_source, options, js_beautify, css_beautify) {
  var beautifier = new Beautifier(html_source, options, js_beautify, css_beautify);
  return beautifier.beautify();
}

module.exports = style_html;
module.exports.defaultOptions = function() {
  return new Options();
};


/***/ }),
/* 19 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_54918__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Options = (__nested_webpack_require_54918__(20).Options);
var Output = (__nested_webpack_require_54918__(2).Output);
var Tokenizer = (__nested_webpack_require_54918__(21).Tokenizer);
var TOKEN = (__nested_webpack_require_54918__(21).TOKEN);

var lineBreak = /\r\n|[\r\n]/;
var allLineBreaks = /\r\n|[\r\n]/g;

var Printer = function(options, base_indent_string) { //handles input/output and some other printing functions

  this.indent_level = 0;
  this.alignment_size = 0;
  this.max_preserve_newlines = options.max_preserve_newlines;
  this.preserve_newlines = options.preserve_newlines;

  this._output = new Output(options, base_indent_string);

};

Printer.prototype.current_line_has_match = function(pattern) {
  return this._output.current_line.has_match(pattern);
};

Printer.prototype.set_space_before_token = function(value, non_breaking) {
  this._output.space_before_token = value;
  this._output.non_breaking_space = non_breaking;
};

Printer.prototype.set_wrap_point = function() {
  this._output.set_indent(this.indent_level, this.alignment_size);
  this._output.set_wrap_point();
};


Printer.prototype.add_raw_token = function(token) {
  this._output.add_raw_token(token);
};

Printer.prototype.print_preserved_newlines = function(raw_token) {
  var newlines = 0;
  if (raw_token.type !== TOKEN.TEXT && raw_token.previous.type !== TOKEN.TEXT) {
    newlines = raw_token.newlines ? 1 : 0;
  }

  if (this.preserve_newlines) {
    newlines = raw_token.newlines < this.max_preserve_newlines + 1 ? raw_token.newlines : this.max_preserve_newlines + 1;
  }
  for (var n = 0; n < newlines; n++) {
    this.print_newline(n > 0);
  }

  return newlines !== 0;
};

Printer.prototype.traverse_whitespace = function(raw_token) {
  if (raw_token.whitespace_before || raw_token.newlines) {
    if (!this.print_preserved_newlines(raw_token)) {
      this._output.space_before_token = true;
    }
    return true;
  }
  return false;
};

Printer.prototype.previous_token_wrapped = function() {
  return this._output.previous_token_wrapped;
};

Printer.prototype.print_newline = function(force) {
  this._output.add_new_line(force);
};

Printer.prototype.print_token = function(token) {
  if (token.text) {
    this._output.set_indent(this.indent_level, this.alignment_size);
    this._output.add_token(token.text);
  }
};

Printer.prototype.indent = function() {
  this.indent_level++;
};

Printer.prototype.get_full_indent = function(level) {
  level = this.indent_level + (level || 0);
  if (level < 1) {
    return '';
  }

  return this._output.get_indent_string(level);
};

var get_type_attribute = function(start_token) {
  var result = null;
  var raw_token = start_token.next;

  // Search attributes for a type attribute
  while (raw_token.type !== TOKEN.EOF && start_token.closed !== raw_token) {
    if (raw_token.type === TOKEN.ATTRIBUTE && raw_token.text === 'type') {
      if (raw_token.next && raw_token.next.type === TOKEN.EQUALS &&
        raw_token.next.next && raw_token.next.next.type === TOKEN.VALUE) {
        result = raw_token.next.next.text;
      }
      break;
    }
    raw_token = raw_token.next;
  }

  return result;
};

var get_custom_beautifier_name = function(tag_check, raw_token) {
  var typeAttribute = null;
  var result = null;

  if (!raw_token.closed) {
    return null;
  }

  if (tag_check === 'script') {
    typeAttribute = 'text/javascript';
  } else if (tag_check === 'style') {
    typeAttribute = 'text/css';
  }

  typeAttribute = get_type_attribute(raw_token) || typeAttribute;

  // For script and style tags that have a type attribute, only enable custom beautifiers for matching values
  // For those without a type attribute use default;
  if (typeAttribute.search('text/css') > -1) {
    result = 'css';
  } else if (typeAttribute.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1) {
    result = 'javascript';
  } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(html)/) > -1) {
    result = 'html';
  } else if (typeAttribute.search(/test\/null/) > -1) {
    // Test only mime-type for testing the beautifier when null is passed as beautifing function
    result = 'null';
  }

  return result;
};

function in_array(what, arr) {
  return arr.indexOf(what) !== -1;
}

function TagFrame(parent, parser_token, indent_level) {
  this.parent = parent || null;
  this.tag = parser_token ? parser_token.tag_name : '';
  this.indent_level = indent_level || 0;
  this.parser_token = parser_token || null;
}

function TagStack(printer) {
  this._printer = printer;
  this._current_frame = null;
}

TagStack.prototype.get_parser_token = function() {
  return this._current_frame ? this._current_frame.parser_token : null;
};

TagStack.prototype.record_tag = function(parser_token) { //function to record a tag and its parent in this.tags Object
  var new_frame = new TagFrame(this._current_frame, parser_token, this._printer.indent_level);
  this._current_frame = new_frame;
};

TagStack.prototype._try_pop_frame = function(frame) { //function to retrieve the opening tag to the corresponding closer
  var parser_token = null;

  if (frame) {
    parser_token = frame.parser_token;
    this._printer.indent_level = frame.indent_level;
    this._current_frame = frame.parent;
  }

  return parser_token;
};

TagStack.prototype._get_frame = function(tag_list, stop_list) { //function to retrieve the opening tag to the corresponding closer
  var frame = this._current_frame;

  while (frame) { //till we reach '' (the initial value);
    if (tag_list.indexOf(frame.tag) !== -1) { //if this is it use it
      break;
    } else if (stop_list && stop_list.indexOf(frame.tag) !== -1) {
      frame = null;
      break;
    }
    frame = frame.parent;
  }

  return frame;
};

TagStack.prototype.try_pop = function(tag, stop_list) { //function to retrieve the opening tag to the corresponding closer
  var frame = this._get_frame([tag], stop_list);
  return this._try_pop_frame(frame);
};

TagStack.prototype.indent_to_tag = function(tag_list) {
  var frame = this._get_frame(tag_list);
  if (frame) {
    this._printer.indent_level = frame.indent_level;
  }
};

function Beautifier(source_text, options, js_beautify, css_beautify) {
  //Wrapper function to invoke all the necessary constructors and deal with the output.
  this._source_text = source_text || '';
  options = options || {};
  this._js_beautify = js_beautify;
  this._css_beautify = css_beautify;
  this._tag_stack = null;

  // Allow the setting of language/file-type specific options
  // with inheritance of overall settings
  var optionHtml = new Options(options, 'html');

  this._options = optionHtml;

  this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 'force'.length) === 'force';
  this._is_wrap_attributes_force_expand_multiline = (this._options.wrap_attributes === 'force-expand-multiline');
  this._is_wrap_attributes_force_aligned = (this._options.wrap_attributes === 'force-aligned');
  this._is_wrap_attributes_aligned_multiple = (this._options.wrap_attributes === 'aligned-multiple');
  this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 'preserve'.length) === 'preserve';
  this._is_wrap_attributes_preserve_aligned = (this._options.wrap_attributes === 'preserve-aligned');
}

Beautifier.prototype.beautify = function() {

  // if disabled, return the input unchanged.
  if (this._options.disabled) {
    return this._source_text;
  }

  var source_text = this._source_text;
  var eol = this._options.eol;
  if (this._options.eol === 'auto') {
    eol = '\n';
    if (source_text && lineBreak.test(source_text)) {
      eol = source_text.match(lineBreak)[0];
    }
  }

  // HACK: newline parsing inconsistent. This brute force normalizes the input.
  source_text = source_text.replace(allLineBreaks, '\n');

  var baseIndentString = source_text.match(/^[\t ]*/)[0];

  var last_token = {
    text: '',
    type: ''
  };

  var last_tag_token = new TagOpenParserToken();

  var printer = new Printer(this._options, baseIndentString);
  var tokens = new Tokenizer(source_text, this._options).tokenize();

  this._tag_stack = new TagStack(printer);

  var parser_token = null;
  var raw_token = tokens.next();
  while (raw_token.type !== TOKEN.EOF) {

    if (raw_token.type === TOKEN.TAG_OPEN || raw_token.type === TOKEN.COMMENT) {
      parser_token = this._handle_tag_open(printer, raw_token, last_tag_token, last_token);
      last_tag_token = parser_token;
    } else if ((raw_token.type === TOKEN.ATTRIBUTE || raw_token.type === TOKEN.EQUALS || raw_token.type === TOKEN.VALUE) ||
      (raw_token.type === TOKEN.TEXT && !last_tag_token.tag_complete)) {
      parser_token = this._handle_inside_tag(printer, raw_token, last_tag_token, tokens);
    } else if (raw_token.type === TOKEN.TAG_CLOSE) {
      parser_token = this._handle_tag_close(printer, raw_token, last_tag_token);
    } else if (raw_token.type === TOKEN.TEXT) {
      parser_token = this._handle_text(printer, raw_token, last_tag_token);
    } else {
      // This should never happen, but if it does. Print the raw token
      printer.add_raw_token(raw_token);
    }

    last_token = parser_token;

    raw_token = tokens.next();
  }
  var sweet_code = printer._output.get_code(eol);

  return sweet_code;
};

Beautifier.prototype._handle_tag_close = function(printer, raw_token, last_tag_token) {
  var parser_token = {
    text: raw_token.text,
    type: raw_token.type
  };
  printer.alignment_size = 0;
  last_tag_token.tag_complete = true;

  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
  if (last_tag_token.is_unformatted) {
    printer.add_raw_token(raw_token);
  } else {
    if (last_tag_token.tag_start_char === '<') {
      printer.set_space_before_token(raw_token.text[0] === '/', true); // space before />, no space before >
      if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.has_wrapped_attrs) {
        printer.print_newline(false);
      }
    }
    printer.print_token(raw_token);

  }

  if (last_tag_token.indent_content &&
    !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
    printer.indent();

    // only indent once per opened tag
    last_tag_token.indent_content = false;
  }

  if (!last_tag_token.is_inline_element &&
    !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
    printer.set_wrap_point();
  }

  return parser_token;
};

Beautifier.prototype._handle_inside_tag = function(printer, raw_token, last_tag_token, tokens) {
  var wrapped = last_tag_token.has_wrapped_attrs;
  var parser_token = {
    text: raw_token.text,
    type: raw_token.type
  };

  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
  if (last_tag_token.is_unformatted) {
    printer.add_raw_token(raw_token);
  } else if (last_tag_token.tag_start_char === '{' && raw_token.type === TOKEN.TEXT) {
    // For the insides of handlebars allow newlines or a single space between open and contents
    if (printer.print_preserved_newlines(raw_token)) {
      raw_token.newlines = 0;
      printer.add_raw_token(raw_token);
    } else {
      printer.print_token(raw_token);
    }
  } else {
    if (raw_token.type === TOKEN.ATTRIBUTE) {
      printer.set_space_before_token(true);
      last_tag_token.attr_count += 1;
    } else if (raw_token.type === TOKEN.EQUALS) { //no space before =
      printer.set_space_before_token(false);
    } else if (raw_token.type === TOKEN.VALUE && raw_token.previous.type === TOKEN.EQUALS) { //no space before value
      printer.set_space_before_token(false);
    }

    if (raw_token.type === TOKEN.ATTRIBUTE && last_tag_token.tag_start_char === '<') {
      if (this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) {
        printer.traverse_whitespace(raw_token);
        wrapped = wrapped || raw_token.newlines !== 0;
      }


      if (this._is_wrap_attributes_force) {
        var force_attr_wrap = last_tag_token.attr_count > 1;
        if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.attr_count === 1) {
          var is_only_attribute = true;
          var peek_index = 0;
          var peek_token;
          do {
            peek_token = tokens.peek(peek_index);
            if (peek_token.type === TOKEN.ATTRIBUTE) {
              is_only_attribute = false;
              break;
            }
            peek_index += 1;
          } while (peek_index < 4 && peek_token.type !== TOKEN.EOF && peek_token.type !== TOKEN.TAG_CLOSE);

          force_attr_wrap = !is_only_attribute;
        }

        if (force_attr_wrap) {
          printer.print_newline(false);
          wrapped = true;
        }
      }
    }
    printer.print_token(raw_token);
    wrapped = wrapped || printer.previous_token_wrapped();
    last_tag_token.has_wrapped_attrs = wrapped;
  }
  return parser_token;
};

Beautifier.prototype._handle_text = function(printer, raw_token, last_tag_token) {
  var parser_token = {
    text: raw_token.text,
    type: 'TK_CONTENT'
  };
  if (last_tag_token.custom_beautifier_name) { //check if we need to format javascript
    this._print_custom_beatifier_text(printer, raw_token, last_tag_token);
  } else if (last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) {
    printer.add_raw_token(raw_token);
  } else {
    printer.traverse_whitespace(raw_token);
    printer.print_token(raw_token);
  }
  return parser_token;
};

Beautifier.prototype._print_custom_beatifier_text = function(printer, raw_token, last_tag_token) {
  var local = this;
  if (raw_token.text !== '') {

    var text = raw_token.text,
      _beautifier,
      script_indent_level = 1,
      pre = '',
      post = '';
    if (last_tag_token.custom_beautifier_name === 'javascript' && typeof this._js_beautify === 'function') {
      _beautifier = this._js_beautify;
    } else if (last_tag_token.custom_beautifier_name === 'css' && typeof this._css_beautify === 'function') {
      _beautifier = this._css_beautify;
    } else if (last_tag_token.custom_beautifier_name === 'html') {
      _beautifier = function(html_source, options) {
        var beautifier = new Beautifier(html_source, options, local._js_beautify, local._css_beautify);
        return beautifier.beautify();
      };
    }

    if (this._options.indent_scripts === "keep") {
      script_indent_level = 0;
    } else if (this._options.indent_scripts === "separate") {
      script_indent_level = -printer.indent_level;
    }

    var indentation = printer.get_full_indent(script_indent_level);

    // if there is at least one empty line at the end of this text, strip it
    // we'll be adding one back after the text but before the containing tag.
    text = text.replace(/\n[ \t]*$/, '');

    // Handle the case where content is wrapped in a comment or cdata.
    if (last_tag_token.custom_beautifier_name !== 'html' &&
      text[0] === '<' && text.match(/^(<!--|<!\[CDATA\[)/)) {
      var matched = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(text);

      // if we start to wrap but don't finish, print raw
      if (!matched) {
        printer.add_raw_token(raw_token);
        return;
      }

      pre = indentation + matched[1] + '\n';
      text = matched[4];
      if (matched[5]) {
        post = indentation + matched[5];
      }

      // if there is at least one empty line at the end of this text, strip it
      // we'll be adding one back after the text but before the containing tag.
      text = text.replace(/\n[ \t]*$/, '');

      if (matched[2] || matched[3].indexOf('\n') !== -1) {
        // if the first line of the non-comment text has spaces
        // use that as the basis for indenting in null case.
        matched = matched[3].match(/[ \t]+$/);
        if (matched) {
          raw_token.whitespace_before = matched[0];
        }
      }
    }

    if (text) {
      if (_beautifier) {

        // call the Beautifier if avaliable
        var Child_options = function() {
          this.eol = '\n';
        };
        Child_options.prototype = this._options.raw_options;
        var child_options = new Child_options();
        text = _beautifier(indentation + text, child_options);
      } else {
        // simply indent the string otherwise
        var white = raw_token.whitespace_before;
        if (white) {
          text = text.replace(new RegExp('\n(' + white + ')?', 'g'), '\n');
        }

        text = indentation + text.replace(/\n/g, '\n' + indentation);
      }
    }

    if (pre) {
      if (!text) {
        text = pre + post;
      } else {
        text = pre + text + '\n' + post;
      }
    }

    printer.print_newline(false);
    if (text) {
      raw_token.text = text;
      raw_token.whitespace_before = '';
      raw_token.newlines = 0;
      printer.add_raw_token(raw_token);
      printer.print_newline(true);
    }
  }
};

Beautifier.prototype._handle_tag_open = function(printer, raw_token, last_tag_token, last_token) {
  var parser_token = this._get_tag_open_token(raw_token);

  if ((last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) &&
    !last_tag_token.is_empty_element &&
    raw_token.type === TOKEN.TAG_OPEN && raw_token.text.indexOf('</') === 0) {
    // End element tags for unformatted or content_unformatted elements
    // are printed raw to keep any newlines inside them exactly the same.
    printer.add_raw_token(raw_token);
    parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
  } else {
    printer.traverse_whitespace(raw_token);
    this._set_tag_position(printer, raw_token, parser_token, last_tag_token, last_token);
    if (!parser_token.is_inline_element) {
      printer.set_wrap_point();
    }
    printer.print_token(raw_token);
  }

  //indent attributes an auto, forced, aligned or forced-align line-wrap
  if (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) {
    parser_token.alignment_size = raw_token.text.length + 1;
  }

  if (!parser_token.tag_complete && !parser_token.is_unformatted) {
    printer.alignment_size = parser_token.alignment_size;
  }

  return parser_token;
};

var TagOpenParserToken = function(parent, raw_token) {
  this.parent = parent || null;
  this.text = '';
  this.type = 'TK_TAG_OPEN';
  this.tag_name = '';
  this.is_inline_element = false;
  this.is_unformatted = false;
  this.is_content_unformatted = false;
  this.is_empty_element = false;
  this.is_start_tag = false;
  this.is_end_tag = false;
  this.indent_content = false;
  this.multiline_content = false;
  this.custom_beautifier_name = null;
  this.start_tag_token = null;
  this.attr_count = 0;
  this.has_wrapped_attrs = false;
  this.alignment_size = 0;
  this.tag_complete = false;
  this.tag_start_char = '';
  this.tag_check = '';

  if (!raw_token) {
    this.tag_complete = true;
  } else {
    var tag_check_match;

    this.tag_start_char = raw_token.text[0];
    this.text = raw_token.text;

    if (this.tag_start_char === '<') {
      tag_check_match = raw_token.text.match(/^<([^\s>]*)/);
      this.tag_check = tag_check_match ? tag_check_match[1] : '';
    } else {
      tag_check_match = raw_token.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/);
      this.tag_check = tag_check_match ? tag_check_match[1] : '';

      // handle "{{#> myPartial}}" or "{{~#> myPartial}}"
      if ((raw_token.text.startsWith('{{#>') || raw_token.text.startsWith('{{~#>')) && this.tag_check[0] === '>') {
        if (this.tag_check === '>' && raw_token.next !== null) {
          this.tag_check = raw_token.next.text.split(' ')[0];
        } else {
          this.tag_check = raw_token.text.split('>')[1];
        }
      }
    }

    this.tag_check = this.tag_check.toLowerCase();

    if (raw_token.type === TOKEN.COMMENT) {
      this.tag_complete = true;
    }

    this.is_start_tag = this.tag_check.charAt(0) !== '/';
    this.tag_name = !this.is_start_tag ? this.tag_check.substr(1) : this.tag_check;
    this.is_end_tag = !this.is_start_tag ||
      (raw_token.closed && raw_token.closed.text === '/>');

    // if whitespace handler ~ included (i.e. {{~#if true}}), handlebars tags start at pos 3 not pos 2
    var handlebar_starts = 2;
    if (this.tag_start_char === '{' && this.text.length >= 3) {
      if (this.text.charAt(2) === '~') {
        handlebar_starts = 3;
      }
    }

    // handlebars tags that don't start with # or ^ are single_tags, and so also start and end.
    this.is_end_tag = this.is_end_tag ||
      (this.tag_start_char === '{' && (this.text.length < 3 || (/[^#\^]/.test(this.text.charAt(handlebar_starts)))));
  }
};

Beautifier.prototype._get_tag_open_token = function(raw_token) { //function to get a full tag and parse its type
  var parser_token = new TagOpenParserToken(this._tag_stack.get_parser_token(), raw_token);

  parser_token.alignment_size = this._options.wrap_attributes_indent_size;

  parser_token.is_end_tag = parser_token.is_end_tag ||
    in_array(parser_token.tag_check, this._options.void_elements);

  parser_token.is_empty_element = parser_token.tag_complete ||
    (parser_token.is_start_tag && parser_token.is_end_tag);

  parser_token.is_unformatted = !parser_token.tag_complete && in_array(parser_token.tag_check, this._options.unformatted);
  parser_token.is_content_unformatted = !parser_token.is_empty_element && in_array(parser_token.tag_check, this._options.content_unformatted);
  parser_token.is_inline_element = in_array(parser_token.tag_name, this._options.inline) || parser_token.tag_name.includes("-") || parser_token.tag_start_char === '{';

  return parser_token;
};

Beautifier.prototype._set_tag_position = function(printer, raw_token, parser_token, last_tag_token, last_token) {

  if (!parser_token.is_empty_element) {
    if (parser_token.is_end_tag) { //this tag is a double tag so check for tag-ending
      parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name); //remove it and all ancestors
    } else { // it's a start-tag
      // check if this tag is starting an element that has optional end element
      // and do an ending needed
      if (this._do_optional_end_element(parser_token)) {
        if (!parser_token.is_inline_element) {
          printer.print_newline(false);
        }
      }

      this._tag_stack.record_tag(parser_token); //push it on the tag stack

      if ((parser_token.tag_name === 'script' || parser_token.tag_name === 'style') &&
        !(parser_token.is_unformatted || parser_token.is_content_unformatted)) {
        parser_token.custom_beautifier_name = get_custom_beautifier_name(parser_token.tag_check, raw_token);
      }
    }
  }

  if (in_array(parser_token.tag_check, this._options.extra_liners)) { //check if this double needs an extra line
    printer.print_newline(false);
    if (!printer._output.just_added_blankline()) {
      printer.print_newline(true);
    }
  }

  if (parser_token.is_empty_element) { //if this tag name is a single tag type (either in the list or has a closing /)

    // if you hit an else case, reset the indent level if you are inside an:
    // 'if', 'unless', or 'each' block.
    if (parser_token.tag_start_char === '{' && parser_token.tag_check === 'else') {
      this._tag_stack.indent_to_tag(['if', 'unless', 'each']);
      parser_token.indent_content = true;
      // Don't add a newline if opening {{#if}} tag is on the current line
      var foundIfOnCurrentLine = printer.current_line_has_match(/{{#if/);
      if (!foundIfOnCurrentLine) {
        printer.print_newline(false);
      }
    }

    // Don't add a newline before elements that should remain where they are.
    if (parser_token.tag_name === '!--' && last_token.type === TOKEN.TAG_CLOSE &&
      last_tag_token.is_end_tag && parser_token.text.indexOf('\n') === -1) {
      //Do nothing. Leave comments on same line.
    } else {
      if (!(parser_token.is_inline_element || parser_token.is_unformatted)) {
        printer.print_newline(false);
      }
      this._calcluate_parent_multiline(printer, parser_token);
    }
  } else if (parser_token.is_end_tag) { //this tag is a double tag so check for tag-ending
    var do_end_expand = false;

    // deciding whether a block is multiline should not be this hard
    do_end_expand = parser_token.start_tag_token && parser_token.start_tag_token.multiline_content;
    do_end_expand = do_end_expand || (!parser_token.is_inline_element &&
      !(last_tag_token.is_inline_element || last_tag_token.is_unformatted) &&
      !(last_token.type === TOKEN.TAG_CLOSE && parser_token.start_tag_token === last_tag_token) &&
      last_token.type !== 'TK_CONTENT'
    );

    if (parser_token.is_content_unformatted || parser_token.is_unformatted) {
      do_end_expand = false;
    }

    if (do_end_expand) {
      printer.print_newline(false);
    }
  } else { // it's a start-tag
    parser_token.indent_content = !parser_token.custom_beautifier_name;

    if (parser_token.tag_start_char === '<') {
      if (parser_token.tag_name === 'html') {
        parser_token.indent_content = this._options.indent_inner_html;
      } else if (parser_token.tag_name === 'head') {
        parser_token.indent_content = this._options.indent_head_inner_html;
      } else if (parser_token.tag_name === 'body') {
        parser_token.indent_content = this._options.indent_body_inner_html;
      }
    }

    if (!(parser_token.is_inline_element || parser_token.is_unformatted) &&
      (last_token.type !== 'TK_CONTENT' || parser_token.is_content_unformatted)) {
      printer.print_newline(false);
    }

    this._calcluate_parent_multiline(printer, parser_token);
  }
};

Beautifier.prototype._calcluate_parent_multiline = function(printer, parser_token) {
  if (parser_token.parent && printer._output.just_added_newline() &&
    !((parser_token.is_inline_element || parser_token.is_unformatted) && parser_token.parent.is_inline_element)) {
    parser_token.parent.multiline_content = true;
  }
};

//To be used for <p> tag special case:
var p_closers = ['address', 'article', 'aside', 'blockquote', 'details', 'div', 'dl', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hr', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul'];
var p_parent_excludes = ['a', 'audio', 'del', 'ins', 'map', 'noscript', 'video'];

Beautifier.prototype._do_optional_end_element = function(parser_token) {
  var result = null;
  // NOTE: cases of "if there is no more content in the parent element"
  // are handled automatically by the beautifier.
  // It assumes parent or ancestor close tag closes all children.
  // https://www.w3.org/TR/html5/syntax.html#optional-tags
  if (parser_token.is_empty_element || !parser_token.is_start_tag || !parser_token.parent) {
    return;

  }

  if (parser_token.tag_name === 'body') {
    // A head element’s end tag may be omitted if the head element is not immediately followed by a space character or a comment.
    result = result || this._tag_stack.try_pop('head');

    //} else if (parser_token.tag_name === 'body') {
    // DONE: A body element’s end tag may be omitted if the body element is not immediately followed by a comment.

  } else if (parser_token.tag_name === 'li') {
    // An li element’s end tag may be omitted if the li element is immediately followed by another li element or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('li', ['ol', 'ul']);

  } else if (parser_token.tag_name === 'dd' || parser_token.tag_name === 'dt') {
    // A dd element’s end tag may be omitted if the dd element is immediately followed by another dd element or a dt element, or if there is no more content in the parent element.
    // A dt element’s end tag may be omitted if the dt element is immediately followed by another dt element or a dd element.
    result = result || this._tag_stack.try_pop('dt', ['dl']);
    result = result || this._tag_stack.try_pop('dd', ['dl']);


  } else if (parser_token.parent.tag_name === 'p' && p_closers.indexOf(parser_token.tag_name) !== -1) {
    // IMPORTANT: this else-if works because p_closers has no overlap with any other element we look for in this method
    // check for the parent element is an HTML element that is not an <a>, <audio>, <del>, <ins>, <map>, <noscript>, or <video> element,  or an autonomous custom element.
    // To do this right, this needs to be coded as an inclusion of the inverse of the exclusion above.
    // But to start with (if we ignore "autonomous custom elements") the exclusion would be fine.
    var p_parent = parser_token.parent.parent;
    if (!p_parent || p_parent_excludes.indexOf(p_parent.tag_name) === -1) {
      result = result || this._tag_stack.try_pop('p');
    }
  } else if (parser_token.tag_name === 'rp' || parser_token.tag_name === 'rt') {
    // An rt element’s end tag may be omitted if the rt element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
    // An rp element’s end tag may be omitted if the rp element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('rt', ['ruby', 'rtc']);
    result = result || this._tag_stack.try_pop('rp', ['ruby', 'rtc']);

  } else if (parser_token.tag_name === 'optgroup') {
    // An optgroup element’s end tag may be omitted if the optgroup element is immediately followed by another optgroup element, or if there is no more content in the parent element.
    // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('optgroup', ['select']);
    //result = result || this._tag_stack.try_pop('option', ['select']);

  } else if (parser_token.tag_name === 'option') {
    // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('option', ['select', 'datalist', 'optgroup']);

  } else if (parser_token.tag_name === 'colgroup') {
    // DONE: A colgroup element’s end tag may be omitted if the colgroup element is not immediately followed by a space character or a comment.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    result = result || this._tag_stack.try_pop('caption', ['table']);

  } else if (parser_token.tag_name === 'thead') {
    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    result = result || this._tag_stack.try_pop('caption', ['table']);
    result = result || this._tag_stack.try_pop('colgroup', ['table']);

    //} else if (parser_token.tag_name === 'caption') {
    // DONE: A caption element’s end tag may be omitted if the caption element is not immediately followed by a space character or a comment.

  } else if (parser_token.tag_name === 'tbody' || parser_token.tag_name === 'tfoot') {
    // A thead element’s end tag may be omitted if the thead element is immediately followed by a tbody or tfoot element.
    // A tbody element’s end tag may be omitted if the tbody element is immediately followed by a tbody or tfoot element, or if there is no more content in the parent element.
    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    result = result || this._tag_stack.try_pop('caption', ['table']);
    result = result || this._tag_stack.try_pop('colgroup', ['table']);
    result = result || this._tag_stack.try_pop('thead', ['table']);
    result = result || this._tag_stack.try_pop('tbody', ['table']);

    //} else if (parser_token.tag_name === 'tfoot') {
    // DONE: A tfoot element’s end tag may be omitted if there is no more content in the parent element.

  } else if (parser_token.tag_name === 'tr') {
    // A tr element’s end tag may be omitted if the tr element is immediately followed by another tr element, or if there is no more content in the parent element.
    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    result = result || this._tag_stack.try_pop('caption', ['table']);
    result = result || this._tag_stack.try_pop('colgroup', ['table']);
    result = result || this._tag_stack.try_pop('tr', ['table', 'thead', 'tbody', 'tfoot']);

  } else if (parser_token.tag_name === 'th' || parser_token.tag_name === 'td') {
    // A td element’s end tag may be omitted if the td element is immediately followed by a td or th element, or if there is no more content in the parent element.
    // A th element’s end tag may be omitted if the th element is immediately followed by a td or th element, or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('td', ['table', 'thead', 'tbody', 'tfoot', 'tr']);
    result = result || this._tag_stack.try_pop('th', ['table', 'thead', 'tbody', 'tfoot', 'tr']);
  }

  // Start element omission not handled currently
  // A head element’s start tag may be omitted if the element is empty, or if the first thing inside the head element is an element.
  // A tbody element’s start tag may be omitted if the first thing inside the tbody element is a tr element, and if the element is not immediately preceded by a tbody, thead, or tfoot element whose end tag has been omitted. (It can’t be omitted if the element is empty.)
  // A colgroup element’s start tag may be omitted if the first thing inside the colgroup element is a col element, and if the element is not immediately preceded by another colgroup element whose end tag has been omitted. (It can’t be omitted if the element is empty.)

  // Fix up the parent of the parser token
  parser_token.parent = this._tag_stack.get_parser_token();

  return result;
};

module.exports.Beautifier = Beautifier;


/***/ }),
/* 20 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_90821__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var BaseOptions = (__nested_webpack_require_90821__(6).Options);

function Options(options) {
  BaseOptions.call(this, options, 'html');
  if (this.templating.length === 1 && this.templating[0] === 'auto') {
    this.templating = ['django', 'erb', 'handlebars', 'php'];
  }

  this.indent_inner_html = this._get_boolean('indent_inner_html');
  this.indent_body_inner_html = this._get_boolean('indent_body_inner_html', true);
  this.indent_head_inner_html = this._get_boolean('indent_head_inner_html', true);

  this.indent_handlebars = this._get_boolean('indent_handlebars', true);
  this.wrap_attributes = this._get_selection('wrap_attributes',
    ['auto', 'force', 'force-aligned', 'force-expand-multiline', 'aligned-multiple', 'preserve', 'preserve-aligned']);
  this.wrap_attributes_indent_size = this._get_number('wrap_attributes_indent_size', this.indent_size);
  this.extra_liners = this._get_array('extra_liners', ['head', 'body', '/html']);

  // Block vs inline elements
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
  // https://www.w3.org/TR/html5/dom.html#phrasing-content
  this.inline = this._get_array('inline', [
    'a', 'abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas', 'cite',
    'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img',
    'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript',
    'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', /* 'script', */ 'select', 'small',
    'span', 'strong', 'sub', 'sup', 'svg', 'template', 'textarea', 'time', 'u', 'var',
    'video', 'wbr', 'text',
    // obsolete inline tags
    'acronym', 'big', 'strike', 'tt'
  ]);
  this.void_elements = this._get_array('void_elements', [
    // HTLM void elements - aka self-closing tags - aka singletons
    // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen',
    'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr',
    // NOTE: Optional tags are too complex for a simple list
    // they are hard coded in _do_optional_end_element

    // Doctype and xml elements
    '!doctype', '?xml',

    // obsolete tags
    // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
    // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
    'basefont', 'isindex'
  ]);
  this.unformatted = this._get_array('unformatted', []);
  this.content_unformatted = this._get_array('content_unformatted', [
    'pre', 'textarea'
  ]);
  this.unformatted_content_delimiter = this._get_characters('unformatted_content_delimiter');
  this.indent_scripts = this._get_selection('indent_scripts', ['normal', 'keep', 'separate']);

}
Options.prototype = new BaseOptions();



module.exports.Options = Options;


/***/ }),
/* 21 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_95020__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var BaseTokenizer = (__nested_webpack_require_95020__(9).Tokenizer);
var BASETOKEN = (__nested_webpack_require_95020__(9).TOKEN);
var Directives = (__nested_webpack_require_95020__(13).Directives);
var TemplatablePattern = (__nested_webpack_require_95020__(14).TemplatablePattern);
var Pattern = (__nested_webpack_require_95020__(12).Pattern);

var TOKEN = {
  TAG_OPEN: 'TK_TAG_OPEN',
  TAG_CLOSE: 'TK_TAG_CLOSE',
  ATTRIBUTE: 'TK_ATTRIBUTE',
  EQUALS: 'TK_EQUALS',
  VALUE: 'TK_VALUE',
  COMMENT: 'TK_COMMENT',
  TEXT: 'TK_TEXT',
  UNKNOWN: 'TK_UNKNOWN',
  START: BASETOKEN.START,
  RAW: BASETOKEN.RAW,
  EOF: BASETOKEN.EOF
};

var directives_core = new Directives(/<\!--/, /-->/);

var Tokenizer = function(input_string, options) {
  BaseTokenizer.call(this, input_string, options);
  this._current_tag_name = '';

  // Words end at whitespace or when a tag starts
  // if we are indenting handlebars, they are considered tags
  var templatable_reader = new TemplatablePattern(this._input).read_options(this._options);
  var pattern_reader = new Pattern(this._input);

  this.__patterns = {
    word: templatable_reader.until(/[\n\r\t <]/),
    single_quote: templatable_reader.until_after(/'/),
    double_quote: templatable_reader.until_after(/"/),
    attribute: templatable_reader.until(/[\n\r\t =>]|\/>/),
    element_name: templatable_reader.until(/[\n\r\t >\/]/),

    handlebars_comment: pattern_reader.starting_with(/{{!--/).until_after(/--}}/),
    handlebars: pattern_reader.starting_with(/{{/).until_after(/}}/),
    handlebars_open: pattern_reader.until(/[\n\r\t }]/),
    handlebars_raw_close: pattern_reader.until(/}}/),
    comment: pattern_reader.starting_with(/<!--/).until_after(/-->/),
    cdata: pattern_reader.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
    // https://en.wikipedia.org/wiki/Conditional_comment
    conditional_comment: pattern_reader.starting_with(/<!\[/).until_after(/]>/),
    processing: pattern_reader.starting_with(/<\?/).until_after(/\?>/)
  };

  if (this._options.indent_handlebars) {
    this.__patterns.word = this.__patterns.word.exclude('handlebars');
  }

  this._unformatted_content_delimiter = null;

  if (this._options.unformatted_content_delimiter) {
    var literal_regexp = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
    this.__patterns.unformatted_content_delimiter =
      pattern_reader.matching(literal_regexp)
      .until_after(literal_regexp);
  }
};
Tokenizer.prototype = new BaseTokenizer();

Tokenizer.prototype._is_comment = function(current_token) { // jshint unused:false
  return false; //current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.UNKNOWN;
};

Tokenizer.prototype._is_opening = function(current_token) {
  return current_token.type === TOKEN.TAG_OPEN;
};

Tokenizer.prototype._is_closing = function(current_token, open_token) {
  return current_token.type === TOKEN.TAG_CLOSE &&
    (open_token && (
      ((current_token.text === '>' || current_token.text === '/>') && open_token.text[0] === '<') ||
      (current_token.text === '}}' && open_token.text[0] === '{' && open_token.text[1] === '{')));
};

Tokenizer.prototype._reset = function() {
  this._current_tag_name = '';
};

Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
  var token = null;
  this._readWhitespace();
  var c = this._input.peek();

  if (c === null) {
    return this._create_token(TOKEN.EOF, '');
  }

  token = token || this._read_open_handlebars(c, open_token);
  token = token || this._read_attribute(c, previous_token, open_token);
  token = token || this._read_close(c, open_token);
  token = token || this._read_raw_content(c, previous_token, open_token);
  token = token || this._read_content_word(c);
  token = token || this._read_comment_or_cdata(c);
  token = token || this._read_processing(c);
  token = token || this._read_open(c, open_token);
  token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());

  return token;
};

Tokenizer.prototype._read_comment_or_cdata = function(c) { // jshint unused:false
  var token = null;
  var resulting_string = null;
  var directives = null;

  if (c === '<') {
    var peek1 = this._input.peek(1);
    // We treat all comments as literals, even more than preformatted tags
    // we only look for the appropriate closing marker
    if (peek1 === '!') {
      resulting_string = this.__patterns.comment.read();

      // only process directive on html comments
      if (resulting_string) {
        directives = directives_core.get_directives(resulting_string);
        if (directives && directives.ignore === 'start') {
          resulting_string += directives_core.readIgnored(this._input);
        }
      } else {
        resulting_string = this.__patterns.cdata.read();
      }
    }

    if (resulting_string) {
      token = this._create_token(TOKEN.COMMENT, resulting_string);
      token.directives = directives;
    }
  }

  return token;
};

Tokenizer.prototype._read_processing = function(c) { // jshint unused:false
  var token = null;
  var resulting_string = null;
  var directives = null;

  if (c === '<') {
    var peek1 = this._input.peek(1);
    if (peek1 === '!' || peek1 === '?') {
      resulting_string = this.__patterns.conditional_comment.read();
      resulting_string = resulting_string || this.__patterns.processing.read();
    }

    if (resulting_string) {
      token = this._create_token(TOKEN.COMMENT, resulting_string);
      token.directives = directives;
    }
  }

  return token;
};

Tokenizer.prototype._read_open = function(c, open_token) {
  var resulting_string = null;
  var token = null;
  if (!open_token) {
    if (c === '<') {

      resulting_string = this._input.next();
      if (this._input.peek() === '/') {
        resulting_string += this._input.next();
      }
      resulting_string += this.__patterns.element_name.read();
      token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
    }
  }
  return token;
};

Tokenizer.prototype._read_open_handlebars = function(c, open_token) {
  var resulting_string = null;
  var token = null;
  if (!open_token) {
    if (this._options.indent_handlebars && c === '{' && this._input.peek(1) === '{') {
      if (this._input.peek(2) === '!') {
        resulting_string = this.__patterns.handlebars_comment.read();
        resulting_string = resulting_string || this.__patterns.handlebars.read();
        token = this._create_token(TOKEN.COMMENT, resulting_string);
      } else {
        resulting_string = this.__patterns.handlebars_open.read();
        token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
      }
    }
  }
  return token;
};


Tokenizer.prototype._read_close = function(c, open_token) {
  var resulting_string = null;
  var token = null;
  if (open_token) {
    if (open_token.text[0] === '<' && (c === '>' || (c === '/' && this._input.peek(1) === '>'))) {
      resulting_string = this._input.next();
      if (c === '/') { //  for close tag "/>"
        resulting_string += this._input.next();
      }
      token = this._create_token(TOKEN.TAG_CLOSE, resulting_string);
    } else if (open_token.text[0] === '{' && c === '}' && this._input.peek(1) === '}') {
      this._input.next();
      this._input.next();
      token = this._create_token(TOKEN.TAG_CLOSE, '}}');
    }
  }

  return token;
};

Tokenizer.prototype._read_attribute = function(c, previous_token, open_token) {
  var token = null;
  var resulting_string = '';
  if (open_token && open_token.text[0] === '<') {

    if (c === '=') {
      token = this._create_token(TOKEN.EQUALS, this._input.next());
    } else if (c === '"' || c === "'") {
      var content = this._input.next();
      if (c === '"') {
        content += this.__patterns.double_quote.read();
      } else {
        content += this.__patterns.single_quote.read();
      }
      token = this._create_token(TOKEN.VALUE, content);
    } else {
      resulting_string = this.__patterns.attribute.read();

      if (resulting_string) {
        if (previous_token.type === TOKEN.EQUALS) {
          token = this._create_token(TOKEN.VALUE, resulting_string);
        } else {
          token = this._create_token(TOKEN.ATTRIBUTE, resulting_string);
        }
      }
    }
  }
  return token;
};

Tokenizer.prototype._is_content_unformatted = function(tag_name) {
  // void_elements have no content and so cannot have unformatted content
  // script and style tags should always be read as unformatted content
  // finally content_unformatted and unformatted element contents are unformatted
  return this._options.void_elements.indexOf(tag_name) === -1 &&
    (this._options.content_unformatted.indexOf(tag_name) !== -1 ||
      this._options.unformatted.indexOf(tag_name) !== -1);
};


Tokenizer.prototype._read_raw_content = function(c, previous_token, open_token) { // jshint unused:false
  var resulting_string = '';
  if (open_token && open_token.text[0] === '{') {
    resulting_string = this.__patterns.handlebars_raw_close.read();
  } else if (previous_token.type === TOKEN.TAG_CLOSE &&
    previous_token.opened.text[0] === '<' && previous_token.text[0] !== '/') {
    // ^^ empty tag has no content 
    var tag_name = previous_token.opened.text.substr(1).toLowerCase();
    if (tag_name === 'script' || tag_name === 'style') {
      // Script and style tags are allowed to have comments wrapping their content
      // or just have regular content.
      var token = this._read_comment_or_cdata(c);
      if (token) {
        token.type = TOKEN.TEXT;
        return token;
      }
      resulting_string = this._input.readUntil(new RegExp('</' + tag_name + '[\\n\\r\\t ]*?>', 'ig'));
    } else if (this._is_content_unformatted(tag_name)) {

      resulting_string = this._input.readUntil(new RegExp('</' + tag_name + '[\\n\\r\\t ]*?>', 'ig'));
    }
  }

  if (resulting_string) {
    return this._create_token(TOKEN.TEXT, resulting_string);
  }

  return null;
};

Tokenizer.prototype._read_content_word = function(c) {
  var resulting_string = '';
  if (this._options.unformatted_content_delimiter) {
    if (c === this._options.unformatted_content_delimiter[0]) {
      resulting_string = this.__patterns.unformatted_content_delimiter.read();
    }
  }

  if (!resulting_string) {
    resulting_string = this.__patterns.word.read();
  }
  if (resulting_string) {
    return this._create_token(TOKEN.TEXT, resulting_string);
  }
};

module.exports.Tokenizer = Tokenizer;
module.exports.TOKEN = TOKEN;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_106914__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_106914__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nested_webpack_require_106914__(18);
/******/ 	legacy_beautify_html = __webpack_exports__;
/******/ 	
/******/ })()
;
var style_html = legacy_beautify_html;
/* Footer */
if (true) {
    // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, __webpack_require__(/*! ./beautify */ "./node_modules/js-beautify/js/lib/beautify.js"), __webpack_require__(/*! ./beautify-css */ "./node_modules/js-beautify/js/lib/beautify-css.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(requireamd) {
        var js_beautify = __webpack_require__(/*! ./beautify */ "./node_modules/js-beautify/js/lib/beautify.js");
        var css_beautify = __webpack_require__(/*! ./beautify-css */ "./node_modules/js-beautify/js/lib/beautify-css.js");

        return {
            html_beautify: function(html_source, options) {
                return style_html(html_source, options, js_beautify.js_beautify, css_beautify.css_beautify);
            }
        };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else { var css_beautify, js_beautify; }

}());


/***/ }),

/***/ "./node_modules/js-beautify/js/lib/beautify.js":
/*!*****************************************************!*\
  !*** ./node_modules/js-beautify/js/lib/beautify.js ***!
  \*****************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* AUTO-GENERATED. DO NOT MODIFY. */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

 JS Beautifier
---------------


  Written by Einar Lielmanis, <einar@beautifier.io>
      https://beautifier.io/

  Originally converted to javascript by Vital, <vital76@gmail.com>
  "End braces on own line" added by Chris J. Shull, <chrisjshull@gmail.com>
  Parsing improvements for brace-less statements by Liam Newman <bitwiseman@beautifier.io>


  Usage:
    js_beautify(js_source_text);
    js_beautify(js_source_text, options);

  The options are:
    indent_size (default 4)          - indentation size,
    indent_char (default space)      - character to indent with,
    preserve_newlines (default true) - whether existing line breaks should be preserved,
    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk,

    jslint_happy (default false) - if true, then jslint-stricter mode is enforced.

            jslint_happy        !jslint_happy
            ---------------------------------
            function ()         function()

            switch () {         switch() {
            case 1:               case 1:
              break;                break;
            }                   }

    space_after_anon_function (default false) - should the space before an anonymous function's parens be added, "function()" vs "function ()",
          NOTE: This option is overriden by jslint_happy (i.e. if jslint_happy is true, space_after_anon_function is true by design)

    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none" | any of the former + ",preserve-inline"
            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
            preserve-inline will try to preserve inline blocks of curly braces

    space_before_conditional (default true) - should the space before conditional statement be added, "if(true)" vs "if (true)",

    unescape_strings (default false) - should printable characters in strings encoded in \xNN notation be unescaped, "example" vs "\x65\x78\x61\x6d\x70\x6c\x65"

    wrap_line_length (default unlimited) - lines should wrap at next opportunity after this number of characters.
          NOTE: This is not a hard limit. Lines will continue until a point where a newline would
                be preserved if it were present.

    end_with_newline (default false)  - end output with a newline


    e.g

    js_beautify(js_source_text, {
      'indent_size': 1,
      'indent_char': '\t'
    });

*/

(function() {

/* GENERATED_BUILD_OUTPUT */
var legacy_beautify_js;
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_3999__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Beautifier = (__nested_webpack_require_3999__(1).Beautifier),
  Options = (__nested_webpack_require_3999__(5).Options);

function js_beautify(js_source_text, options) {
  var beautifier = new Beautifier(js_source_text, options);
  return beautifier.beautify();
}

module.exports = js_beautify;
module.exports.defaultOptions = function() {
  return new Options();
};


/***/ }),
/* 1 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_5628__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Output = (__nested_webpack_require_5628__(2).Output);
var Token = (__nested_webpack_require_5628__(3).Token);
var acorn = __nested_webpack_require_5628__(4);
var Options = (__nested_webpack_require_5628__(5).Options);
var Tokenizer = (__nested_webpack_require_5628__(7).Tokenizer);
var line_starters = (__nested_webpack_require_5628__(7).line_starters);
var positionable_operators = (__nested_webpack_require_5628__(7).positionable_operators);
var TOKEN = (__nested_webpack_require_5628__(7).TOKEN);


function in_array(what, arr) {
  return arr.indexOf(what) !== -1;
}

function ltrim(s) {
  return s.replace(/^\s+/g, '');
}

function generateMapFromStrings(list) {
  var result = {};
  for (var x = 0; x < list.length; x++) {
    // make the mapped names underscored instead of dash
    result[list[x].replace(/-/g, '_')] = list[x];
  }
  return result;
}

function reserved_word(token, word) {
  return token && token.type === TOKEN.RESERVED && token.text === word;
}

function reserved_array(token, words) {
  return token && token.type === TOKEN.RESERVED && in_array(token.text, words);
}
// Unsure of what they mean, but they work. Worth cleaning up in future.
var special_words = ['case', 'return', 'do', 'if', 'throw', 'else', 'await', 'break', 'continue', 'async'];

var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];

// Generate map from array
var OPERATOR_POSITION = generateMapFromStrings(validPositionValues);

var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];

var MODE = {
  BlockStatement: 'BlockStatement', // 'BLOCK'
  Statement: 'Statement', // 'STATEMENT'
  ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
  ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
  ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
  Conditional: 'Conditional', //'(COND-EXPRESSION)',
  Expression: 'Expression' //'(EXPRESSION)'
};

function remove_redundant_indentation(output, frame) {
  // This implementation is effective but has some issues:
  //     - can cause line wrap to happen too soon due to indent removal
  //           after wrap points are calculated
  // These issues are minor compared to ugly indentation.

  if (frame.multiline_frame ||
    frame.mode === MODE.ForInitializer ||
    frame.mode === MODE.Conditional) {
    return;
  }

  // remove one indent from each line inside this section
  output.remove_indent(frame.start_line_index);
}

// we could use just string.split, but
// IE doesn't like returning empty strings
function split_linebreaks(s) {
  //return s.split(/\x0d\x0a|\x0a/);

  s = s.replace(acorn.allLineBreaks, '\n');
  var out = [],
    idx = s.indexOf("\n");
  while (idx !== -1) {
    out.push(s.substring(0, idx));
    s = s.substring(idx + 1);
    idx = s.indexOf("\n");
  }
  if (s.length) {
    out.push(s);
  }
  return out;
}

function is_array(mode) {
  return mode === MODE.ArrayLiteral;
}

function is_expression(mode) {
  return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
}

function all_lines_start_with(lines, c) {
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (line.charAt(0) !== c) {
      return false;
    }
  }
  return true;
}

function each_line_matches_indent(lines, indent) {
  var i = 0,
    len = lines.length,
    line;
  for (; i < len; i++) {
    line = lines[i];
    // allow empty lines to pass through
    if (line && line.indexOf(indent) !== 0) {
      return false;
    }
  }
  return true;
}


function Beautifier(source_text, options) {
  options = options || {};
  this._source_text = source_text || '';

  this._output = null;
  this._tokens = null;
  this._last_last_text = null;
  this._flags = null;
  this._previous_flags = null;

  this._flag_store = null;
  this._options = new Options(options);
}

Beautifier.prototype.create_flags = function(flags_base, mode) {
  var next_indent_level = 0;
  if (flags_base) {
    next_indent_level = flags_base.indentation_level;
    if (!this._output.just_added_newline() &&
      flags_base.line_indent_level > next_indent_level) {
      next_indent_level = flags_base.line_indent_level;
    }
  }

  var next_flags = {
    mode: mode,
    parent: flags_base,
    last_token: flags_base ? flags_base.last_token : new Token(TOKEN.START_BLOCK, ''), // last token text
    last_word: flags_base ? flags_base.last_word : '', // last TOKEN.WORD passed
    declaration_statement: false,
    declaration_assignment: false,
    multiline_frame: false,
    inline_frame: false,
    if_block: false,
    else_block: false,
    class_start_block: false, // class A { INSIDE HERE } or class B extends C { INSIDE HERE }
    do_block: false,
    do_while: false,
    import_block: false,
    in_case_statement: false, // switch(..){ INSIDE HERE }
    in_case: false, // we're on the exact line with "case 0:"
    case_body: false, // the indented case-action block
    case_block: false, // the indented case-action block is wrapped with {}
    indentation_level: next_indent_level,
    alignment: 0,
    line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
    start_line_index: this._output.get_line_number(),
    ternary_depth: 0
  };
  return next_flags;
};

Beautifier.prototype._reset = function(source_text) {
  var baseIndentString = source_text.match(/^[\t ]*/)[0];

  this._last_last_text = ''; // pre-last token text
  this._output = new Output(this._options, baseIndentString);

  // If testing the ignore directive, start with output disable set to true
  this._output.raw = this._options.test_output_raw;


  // Stack of parsing/formatting states, including MODE.
  // We tokenize, parse, and output in an almost purely a forward-only stream of token input
  // and formatted output.  This makes the beautifier less accurate than full parsers
  // but also far more tolerant of syntax errors.
  //
  // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
  // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
  // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
  // most full parsers would die, but the beautifier gracefully falls back to
  // MODE.BlockStatement and continues on.
  this._flag_store = [];
  this.set_mode(MODE.BlockStatement);
  var tokenizer = new Tokenizer(source_text, this._options);
  this._tokens = tokenizer.tokenize();
  return source_text;
};

Beautifier.prototype.beautify = function() {
  // if disabled, return the input unchanged.
  if (this._options.disabled) {
    return this._source_text;
  }

  var sweet_code;
  var source_text = this._reset(this._source_text);

  var eol = this._options.eol;
  if (this._options.eol === 'auto') {
    eol = '\n';
    if (source_text && acorn.lineBreak.test(source_text || '')) {
      eol = source_text.match(acorn.lineBreak)[0];
    }
  }

  var current_token = this._tokens.next();
  while (current_token) {
    this.handle_token(current_token);

    this._last_last_text = this._flags.last_token.text;
    this._flags.last_token = current_token;

    current_token = this._tokens.next();
  }

  sweet_code = this._output.get_code(eol);

  return sweet_code;
};

Beautifier.prototype.handle_token = function(current_token, preserve_statement_flags) {
  if (current_token.type === TOKEN.START_EXPR) {
    this.handle_start_expr(current_token);
  } else if (current_token.type === TOKEN.END_EXPR) {
    this.handle_end_expr(current_token);
  } else if (current_token.type === TOKEN.START_BLOCK) {
    this.handle_start_block(current_token);
  } else if (current_token.type === TOKEN.END_BLOCK) {
    this.handle_end_block(current_token);
  } else if (current_token.type === TOKEN.WORD) {
    this.handle_word(current_token);
  } else if (current_token.type === TOKEN.RESERVED) {
    this.handle_word(current_token);
  } else if (current_token.type === TOKEN.SEMICOLON) {
    this.handle_semicolon(current_token);
  } else if (current_token.type === TOKEN.STRING) {
    this.handle_string(current_token);
  } else if (current_token.type === TOKEN.EQUALS) {
    this.handle_equals(current_token);
  } else if (current_token.type === TOKEN.OPERATOR) {
    this.handle_operator(current_token);
  } else if (current_token.type === TOKEN.COMMA) {
    this.handle_comma(current_token);
  } else if (current_token.type === TOKEN.BLOCK_COMMENT) {
    this.handle_block_comment(current_token, preserve_statement_flags);
  } else if (current_token.type === TOKEN.COMMENT) {
    this.handle_comment(current_token, preserve_statement_flags);
  } else if (current_token.type === TOKEN.DOT) {
    this.handle_dot(current_token);
  } else if (current_token.type === TOKEN.EOF) {
    this.handle_eof(current_token);
  } else if (current_token.type === TOKEN.UNKNOWN) {
    this.handle_unknown(current_token, preserve_statement_flags);
  } else {
    this.handle_unknown(current_token, preserve_statement_flags);
  }
};

Beautifier.prototype.handle_whitespace_and_comments = function(current_token, preserve_statement_flags) {
  var newlines = current_token.newlines;
  var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);

  if (current_token.comments_before) {
    var comment_token = current_token.comments_before.next();
    while (comment_token) {
      // The cleanest handling of inline comments is to treat them as though they aren't there.
      // Just continue formatting and the behavior should be logical.
      // Also ignore unknown tokens.  Again, this should result in better behavior.
      this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
      this.handle_token(comment_token, preserve_statement_flags);
      comment_token = current_token.comments_before.next();
    }
  }

  if (keep_whitespace) {
    for (var i = 0; i < newlines; i += 1) {
      this.print_newline(i > 0, preserve_statement_flags);
    }
  } else {
    if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
      newlines = this._options.max_preserve_newlines;
    }

    if (this._options.preserve_newlines) {
      if (newlines > 1) {
        this.print_newline(false, preserve_statement_flags);
        for (var j = 1; j < newlines; j += 1) {
          this.print_newline(true, preserve_statement_flags);
        }
      }
    }
  }

};

var newline_restricted_tokens = ['async', 'break', 'continue', 'return', 'throw', 'yield'];

Beautifier.prototype.allow_wrap_or_preserved_newline = function(current_token, force_linewrap) {
  force_linewrap = (force_linewrap === undefined) ? false : force_linewrap;

  // Never wrap the first token on a line
  if (this._output.just_added_newline()) {
    return;
  }

  var shouldPreserveOrForce = (this._options.preserve_newlines && current_token.newlines) || force_linewrap;
  var operatorLogicApplies = in_array(this._flags.last_token.text, positionable_operators) ||
    in_array(current_token.text, positionable_operators);

  if (operatorLogicApplies) {
    var shouldPrintOperatorNewline = (
        in_array(this._flags.last_token.text, positionable_operators) &&
        in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)
      ) ||
      in_array(current_token.text, positionable_operators);
    shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
  }

  if (shouldPreserveOrForce) {
    this.print_newline(false, true);
  } else if (this._options.wrap_line_length) {
    if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
      // These tokens should never have a newline inserted
      // between them and the following expression.
      return;
    }
    this._output.set_wrap_point();
  }
};

Beautifier.prototype.print_newline = function(force_newline, preserve_statement_flags) {
  if (!preserve_statement_flags) {
    if (this._flags.last_token.text !== ';' && this._flags.last_token.text !== ',' && this._flags.last_token.text !== '=' && (this._flags.last_token.type !== TOKEN.OPERATOR || this._flags.last_token.text === '--' || this._flags.last_token.text === '++')) {
      var next_token = this._tokens.peek();
      while (this._flags.mode === MODE.Statement &&
        !(this._flags.if_block && reserved_word(next_token, 'else')) &&
        !this._flags.do_block) {
        this.restore_mode();
      }
    }
  }

  if (this._output.add_new_line(force_newline)) {
    this._flags.multiline_frame = true;
  }
};

Beautifier.prototype.print_token_line_indentation = function(current_token) {
  if (this._output.just_added_newline()) {
    if (this._options.keep_array_indentation &&
      current_token.newlines &&
      (current_token.text === '[' || is_array(this._flags.mode))) {
      this._output.current_line.set_indent(-1);
      this._output.current_line.push(current_token.whitespace_before);
      this._output.space_before_token = false;
    } else if (this._output.set_indent(this._flags.indentation_level, this._flags.alignment)) {
      this._flags.line_indent_level = this._flags.indentation_level;
    }
  }
};

Beautifier.prototype.print_token = function(current_token) {
  if (this._output.raw) {
    this._output.add_raw_token(current_token);
    return;
  }

  if (this._options.comma_first && current_token.previous && current_token.previous.type === TOKEN.COMMA &&
    this._output.just_added_newline()) {
    if (this._output.previous_line.last() === ',') {
      var popped = this._output.previous_line.pop();
      // if the comma was already at the start of the line,
      // pull back onto that line and reprint the indentation
      if (this._output.previous_line.is_empty()) {
        this._output.previous_line.push(popped);
        this._output.trim(true);
        this._output.current_line.pop();
        this._output.trim();
      }

      // add the comma in front of the next token
      this.print_token_line_indentation(current_token);
      this._output.add_token(',');
      this._output.space_before_token = true;
    }
  }

  this.print_token_line_indentation(current_token);
  this._output.non_breaking_space = true;
  this._output.add_token(current_token.text);
  if (this._output.previous_token_wrapped) {
    this._flags.multiline_frame = true;
  }
};

Beautifier.prototype.indent = function() {
  this._flags.indentation_level += 1;
  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
};

Beautifier.prototype.deindent = function() {
  if (this._flags.indentation_level > 0 &&
    ((!this._flags.parent) || this._flags.indentation_level > this._flags.parent.indentation_level)) {
    this._flags.indentation_level -= 1;
    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }
};

Beautifier.prototype.set_mode = function(mode) {
  if (this._flags) {
    this._flag_store.push(this._flags);
    this._previous_flags = this._flags;
  } else {
    this._previous_flags = this.create_flags(null, mode);
  }

  this._flags = this.create_flags(this._previous_flags, mode);
  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
};


Beautifier.prototype.restore_mode = function() {
  if (this._flag_store.length > 0) {
    this._previous_flags = this._flags;
    this._flags = this._flag_store.pop();
    if (this._previous_flags.mode === MODE.Statement) {
      remove_redundant_indentation(this._output, this._previous_flags);
    }
    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }
};

Beautifier.prototype.start_of_object_property = function() {
  return this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement && (
    (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0) || (reserved_array(this._flags.last_token, ['get', 'set'])));
};

Beautifier.prototype.start_of_statement = function(current_token) {
  var start = false;
  start = start || reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN.WORD;
  start = start || reserved_word(this._flags.last_token, 'do');
  start = start || (!(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement)) && reserved_array(this._flags.last_token, newline_restricted_tokens) && !current_token.newlines;
  start = start || reserved_word(this._flags.last_token, 'else') &&
    !(reserved_word(current_token, 'if') && !current_token.comments_before);
  start = start || (this._flags.last_token.type === TOKEN.END_EXPR && (this._previous_flags.mode === MODE.ForInitializer || this._previous_flags.mode === MODE.Conditional));
  start = start || (this._flags.last_token.type === TOKEN.WORD && this._flags.mode === MODE.BlockStatement &&
    !this._flags.in_case &&
    !(current_token.text === '--' || current_token.text === '++') &&
    this._last_last_text !== 'function' &&
    current_token.type !== TOKEN.WORD && current_token.type !== TOKEN.RESERVED);
  start = start || (this._flags.mode === MODE.ObjectLiteral && (
    (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0) || reserved_array(this._flags.last_token, ['get', 'set'])));

  if (start) {
    this.set_mode(MODE.Statement);
    this.indent();

    this.handle_whitespace_and_comments(current_token, true);

    // Issue #276:
    // If starting a new statement with [if, for, while, do], push to a new line.
    // if (a) if (b) if(c) d(); else e(); else f();
    if (!this.start_of_object_property()) {
      this.allow_wrap_or_preserved_newline(current_token,
        reserved_array(current_token, ['do', 'for', 'if', 'while']));
    }
    return true;
  }
  return false;
};

Beautifier.prototype.handle_start_expr = function(current_token) {
  // The conditional starts the statement if appropriate.
  if (!this.start_of_statement(current_token)) {
    this.handle_whitespace_and_comments(current_token);
  }

  var next_mode = MODE.Expression;
  if (current_token.text === '[') {

    if (this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === ')') {
      // this is array index specifier, break immediately
      // a[x], fn()[x]
      if (reserved_array(this._flags.last_token, line_starters)) {
        this._output.space_before_token = true;
      }
      this.print_token(current_token);
      this.set_mode(next_mode);
      this.indent();
      if (this._options.space_in_paren) {
        this._output.space_before_token = true;
      }
      return;
    }

    next_mode = MODE.ArrayLiteral;
    if (is_array(this._flags.mode)) {
      if (this._flags.last_token.text === '[' ||
        (this._flags.last_token.text === ',' && (this._last_last_text === ']' || this._last_last_text === '}'))) {
        // ], [ goes to new line
        // }, [ goes to new line
        if (!this._options.keep_array_indentation) {
          this.print_newline();
        }
      }
    }

    if (!in_array(this._flags.last_token.type, [TOKEN.START_EXPR, TOKEN.END_EXPR, TOKEN.WORD, TOKEN.OPERATOR, TOKEN.DOT])) {
      this._output.space_before_token = true;
    }
  } else {
    if (this._flags.last_token.type === TOKEN.RESERVED) {
      if (this._flags.last_token.text === 'for') {
        this._output.space_before_token = this._options.space_before_conditional;
        next_mode = MODE.ForInitializer;
      } else if (in_array(this._flags.last_token.text, ['if', 'while', 'switch'])) {
        this._output.space_before_token = this._options.space_before_conditional;
        next_mode = MODE.Conditional;
      } else if (in_array(this._flags.last_word, ['await', 'async'])) {
        // Should be a space between await and an IIFE, or async and an arrow function
        this._output.space_before_token = true;
      } else if (this._flags.last_token.text === 'import' && current_token.whitespace_before === '') {
        this._output.space_before_token = false;
      } else if (in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === 'catch') {
        this._output.space_before_token = true;
      }
    } else if (this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
      // Support of this kind of newline preservation.
      // a = (b &&
      //     (c || d));
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    } else if (this._flags.last_token.type === TOKEN.WORD) {
      this._output.space_before_token = false;

      // function name() vs function name ()
      // function* name() vs function* name ()
      // async name() vs async name ()
      // In ES6, you can also define the method properties of an object
      // var obj = {a: function() {}}
      // It can be abbreviated
      // var obj = {a() {}}
      // var obj = { a() {}} vs var obj = { a () {}}
      // var obj = { * a() {}} vs var obj = { * a () {}}
      var peek_back_two = this._tokens.peek(-3);
      if (this._options.space_after_named_function && peek_back_two) {
        // peek starts at next character so -1 is current token
        var peek_back_three = this._tokens.peek(-4);
        if (reserved_array(peek_back_two, ['async', 'function']) ||
          (peek_back_two.text === '*' && reserved_array(peek_back_three, ['async', 'function']))) {
          this._output.space_before_token = true;
        } else if (this._flags.mode === MODE.ObjectLiteral) {
          if ((peek_back_two.text === '{' || peek_back_two.text === ',') ||
            (peek_back_two.text === '*' && (peek_back_three.text === '{' || peek_back_three.text === ','))) {
            this._output.space_before_token = true;
          }
        } else if (this._flags.parent && this._flags.parent.class_start_block) {
          this._output.space_before_token = true;
        }
      }
    } else {
      // Support preserving wrapped arrow function expressions
      // a.b('c',
      //     () => d.e
      // )
      this.allow_wrap_or_preserved_newline(current_token);
    }

    // function() vs function ()
    // yield*() vs yield* ()
    // function*() vs function* ()
    if ((this._flags.last_token.type === TOKEN.RESERVED && (this._flags.last_word === 'function' || this._flags.last_word === 'typeof')) ||
      (this._flags.last_token.text === '*' &&
        (in_array(this._last_last_text, ['function', 'yield']) ||
          (this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ['{', ',']))))) {
      this._output.space_before_token = this._options.space_after_anon_function;
    }
  }

  if (this._flags.last_token.text === ';' || this._flags.last_token.type === TOKEN.START_BLOCK) {
    this.print_newline();
  } else if (this._flags.last_token.type === TOKEN.END_EXPR || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.END_BLOCK || this._flags.last_token.text === '.' || this._flags.last_token.type === TOKEN.COMMA) {
    // do nothing on (( and )( and ][ and ]( and .(
    // TODO: Consider whether forcing this is required.  Review failing tests when removed.
    this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
  }

  this.print_token(current_token);
  this.set_mode(next_mode);
  if (this._options.space_in_paren) {
    this._output.space_before_token = true;
  }

  // In all cases, if we newline while inside an expression it should be indented.
  this.indent();
};

Beautifier.prototype.handle_end_expr = function(current_token) {
  // statements inside expressions are not valid syntax, but...
  // statements must all be closed when their container closes
  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }

  this.handle_whitespace_and_comments(current_token);

  if (this._flags.multiline_frame) {
    this.allow_wrap_or_preserved_newline(current_token,
      current_token.text === ']' && is_array(this._flags.mode) && !this._options.keep_array_indentation);
  }

  if (this._options.space_in_paren) {
    if (this._flags.last_token.type === TOKEN.START_EXPR && !this._options.space_in_empty_paren) {
      // () [] no inner space in empty parens like these, ever, ref #320
      this._output.trim();
      this._output.space_before_token = false;
    } else {
      this._output.space_before_token = true;
    }
  }
  this.deindent();
  this.print_token(current_token);
  this.restore_mode();

  remove_redundant_indentation(this._output, this._previous_flags);

  // do {} while () // no statement required after
  if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
    this._previous_flags.mode = MODE.Expression;
    this._flags.do_block = false;
    this._flags.do_while = false;

  }
};

Beautifier.prototype.handle_start_block = function(current_token) {
  this.handle_whitespace_and_comments(current_token);

  // Check if this is should be treated as a ObjectLiteral
  var next_token = this._tokens.peek();
  var second_token = this._tokens.peek(1);
  if (this._flags.last_word === 'switch' && this._flags.last_token.type === TOKEN.END_EXPR) {
    this.set_mode(MODE.BlockStatement);
    this._flags.in_case_statement = true;
  } else if (this._flags.case_body) {
    this.set_mode(MODE.BlockStatement);
  } else if (second_token && (
      (in_array(second_token.text, [':', ',']) && in_array(next_token.type, [TOKEN.STRING, TOKEN.WORD, TOKEN.RESERVED])) ||
      (in_array(next_token.text, ['get', 'set', '...']) && in_array(second_token.type, [TOKEN.WORD, TOKEN.RESERVED]))
    )) {
    // We don't support TypeScript,but we didn't break it for a very long time.
    // We'll try to keep not breaking it.
    if (in_array(this._last_last_text, ['class', 'interface']) && !in_array(second_token.text, [':', ','])) {
      this.set_mode(MODE.BlockStatement);
    } else {
      this.set_mode(MODE.ObjectLiteral);
    }
  } else if (this._flags.last_token.type === TOKEN.OPERATOR && this._flags.last_token.text === '=>') {
    // arrow function: (param1, paramN) => { statements }
    this.set_mode(MODE.BlockStatement);
  } else if (in_array(this._flags.last_token.type, [TOKEN.EQUALS, TOKEN.START_EXPR, TOKEN.COMMA, TOKEN.OPERATOR]) ||
    reserved_array(this._flags.last_token, ['return', 'throw', 'import', 'default'])
  ) {
    // Detecting shorthand function syntax is difficult by scanning forward,
    //     so check the surrounding context.
    // If the block is being returned, imported, export default, passed as arg,
    //     assigned with = or assigned in a nested object, treat as an ObjectLiteral.
    this.set_mode(MODE.ObjectLiteral);
  } else {
    this.set_mode(MODE.BlockStatement);
  }

  if (this._flags.last_token) {
    if (reserved_array(this._flags.last_token.previous, ['class', 'extends'])) {
      this._flags.class_start_block = true;
    }
  }

  var empty_braces = !next_token.comments_before && next_token.text === '}';
  var empty_anonymous_function = empty_braces && this._flags.last_word === 'function' &&
    this._flags.last_token.type === TOKEN.END_EXPR;

  if (this._options.brace_preserve_inline) // check for inline, set inline_frame if so
  {
    // search forward for a newline wanted inside this block
    var index = 0;
    var check_token = null;
    this._flags.inline_frame = true;
    do {
      index += 1;
      check_token = this._tokens.peek(index - 1);
      if (check_token.newlines) {
        this._flags.inline_frame = false;
        break;
      }
    } while (check_token.type !== TOKEN.EOF &&
      !(check_token.type === TOKEN.END_BLOCK && check_token.opened === current_token));
  }

  if ((this._options.brace_style === "expand" ||
      (this._options.brace_style === "none" && current_token.newlines)) &&
    !this._flags.inline_frame) {
    if (this._flags.last_token.type !== TOKEN.OPERATOR &&
      (empty_anonymous_function ||
        this._flags.last_token.type === TOKEN.EQUALS ||
        (reserved_array(this._flags.last_token, special_words) && this._flags.last_token.text !== 'else'))) {
      this._output.space_before_token = true;
    } else {
      this.print_newline(false, true);
    }
  } else { // collapse || inline_frame
    if (is_array(this._previous_flags.mode) && (this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.COMMA)) {
      if (this._flags.last_token.type === TOKEN.COMMA || this._options.space_in_paren) {
        this._output.space_before_token = true;
      }

      if (this._flags.last_token.type === TOKEN.COMMA || (this._flags.last_token.type === TOKEN.START_EXPR && this._flags.inline_frame)) {
        this.allow_wrap_or_preserved_newline(current_token);
        this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame;
        this._flags.multiline_frame = false;
      }
    }
    if (this._flags.last_token.type !== TOKEN.OPERATOR && this._flags.last_token.type !== TOKEN.START_EXPR) {
      if (this._flags.last_token.type === TOKEN.START_BLOCK && !this._flags.inline_frame) {
        this.print_newline();
      } else {
        this._output.space_before_token = true;
      }
    }
  }
  this.print_token(current_token);
  this.indent();

  // Except for specific cases, open braces are followed by a new line.
  if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
    this.print_newline();
  }
};

Beautifier.prototype.handle_end_block = function(current_token) {
  // statements must all be closed when their container closes
  this.handle_whitespace_and_comments(current_token);

  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }

  var empty_braces = this._flags.last_token.type === TOKEN.START_BLOCK;

  if (this._flags.inline_frame && !empty_braces) { // try inline_frame (only set if this._options.braces-preserve-inline) first
    this._output.space_before_token = true;
  } else if (this._options.brace_style === "expand") {
    if (!empty_braces) {
      this.print_newline();
    }
  } else {
    // skip {}
    if (!empty_braces) {
      if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
        // we REALLY need a newline here, but newliner would skip that
        this._options.keep_array_indentation = false;
        this.print_newline();
        this._options.keep_array_indentation = true;

      } else {
        this.print_newline();
      }
    }
  }
  this.restore_mode();
  this.print_token(current_token);
};

Beautifier.prototype.handle_word = function(current_token) {
  if (current_token.type === TOKEN.RESERVED) {
    if (in_array(current_token.text, ['set', 'get']) && this._flags.mode !== MODE.ObjectLiteral) {
      current_token.type = TOKEN.WORD;
    } else if (current_token.text === 'import' && in_array(this._tokens.peek().text, ['(', '.'])) {
      current_token.type = TOKEN.WORD;
    } else if (in_array(current_token.text, ['as', 'from']) && !this._flags.import_block) {
      current_token.type = TOKEN.WORD;
    } else if (this._flags.mode === MODE.ObjectLiteral) {
      var next_token = this._tokens.peek();
      if (next_token.text === ':') {
        current_token.type = TOKEN.WORD;
      }
    }
  }

  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    if (reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN.WORD) {
      this._flags.declaration_statement = true;
    }
  } else if (current_token.newlines && !is_expression(this._flags.mode) &&
    (this._flags.last_token.type !== TOKEN.OPERATOR || (this._flags.last_token.text === '--' || this._flags.last_token.text === '++')) &&
    this._flags.last_token.type !== TOKEN.EQUALS &&
    (this._options.preserve_newlines || !reserved_array(this._flags.last_token, ['var', 'let', 'const', 'set', 'get']))) {
    this.handle_whitespace_and_comments(current_token);
    this.print_newline();
  } else {
    this.handle_whitespace_and_comments(current_token);
  }

  if (this._flags.do_block && !this._flags.do_while) {
    if (reserved_word(current_token, 'while')) {
      // do {} ## while ()
      this._output.space_before_token = true;
      this.print_token(current_token);
      this._output.space_before_token = true;
      this._flags.do_while = true;
      return;
    } else {
      // do {} should always have while as the next word.
      // if we don't see the expected while, recover
      this.print_newline();
      this._flags.do_block = false;
    }
  }

  // if may be followed by else, or not
  // Bare/inline ifs are tricky
  // Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();
  if (this._flags.if_block) {
    if (!this._flags.else_block && reserved_word(current_token, 'else')) {
      this._flags.else_block = true;
    } else {
      while (this._flags.mode === MODE.Statement) {
        this.restore_mode();
      }
      this._flags.if_block = false;
      this._flags.else_block = false;
    }
  }

  if (this._flags.in_case_statement && reserved_array(current_token, ['case', 'default'])) {
    this.print_newline();
    if (!this._flags.case_block && (this._flags.case_body || this._options.jslint_happy)) {
      // switch cases following one another
      this.deindent();
    }
    this._flags.case_body = false;

    this.print_token(current_token);
    this._flags.in_case = true;
    return;
  }

  if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
    if (!this.start_of_object_property()) {
      this.allow_wrap_or_preserved_newline(current_token);
    }
  }

  if (reserved_word(current_token, 'function')) {
    if (in_array(this._flags.last_token.text, ['}', ';']) ||
      (this._output.just_added_newline() && !(in_array(this._flags.last_token.text, ['(', '[', '{', ':', '=', ',']) || this._flags.last_token.type === TOKEN.OPERATOR))) {
      // make sure there is a nice clean space of at least one blank line
      // before a new function definition
      if (!this._output.just_added_blankline() && !current_token.comments_before) {
        this.print_newline();
        this.print_newline(true);
      }
    }
    if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD) {
      if (reserved_array(this._flags.last_token, ['get', 'set', 'new', 'export']) ||
        reserved_array(this._flags.last_token, newline_restricted_tokens)) {
        this._output.space_before_token = true;
      } else if (reserved_word(this._flags.last_token, 'default') && this._last_last_text === 'export') {
        this._output.space_before_token = true;
      } else if (this._flags.last_token.text === 'declare') {
        // accomodates Typescript declare function formatting
        this._output.space_before_token = true;
      } else {
        this.print_newline();
      }
    } else if (this._flags.last_token.type === TOKEN.OPERATOR || this._flags.last_token.text === '=') {
      // foo = function
      this._output.space_before_token = true;
    } else if (!this._flags.multiline_frame && (is_expression(this._flags.mode) || is_array(this._flags.mode))) {
      // (function
    } else {
      this.print_newline();
    }

    this.print_token(current_token);
    this._flags.last_word = current_token.text;
    return;
  }

  var prefix = 'NONE';

  if (this._flags.last_token.type === TOKEN.END_BLOCK) {

    if (this._previous_flags.inline_frame) {
      prefix = 'SPACE';
    } else if (!reserved_array(current_token, ['else', 'catch', 'finally', 'from'])) {
      prefix = 'NEWLINE';
    } else {
      if (this._options.brace_style === "expand" ||
        this._options.brace_style === "end-expand" ||
        (this._options.brace_style === "none" && current_token.newlines)) {
        prefix = 'NEWLINE';
      } else {
        prefix = 'SPACE';
        this._output.space_before_token = true;
      }
    }
  } else if (this._flags.last_token.type === TOKEN.SEMICOLON && this._flags.mode === MODE.BlockStatement) {
    // TODO: Should this be for STATEMENT as well?
    prefix = 'NEWLINE';
  } else if (this._flags.last_token.type === TOKEN.SEMICOLON && is_expression(this._flags.mode)) {
    prefix = 'SPACE';
  } else if (this._flags.last_token.type === TOKEN.STRING) {
    prefix = 'NEWLINE';
  } else if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD ||
    (this._flags.last_token.text === '*' &&
      (in_array(this._last_last_text, ['function', 'yield']) ||
        (this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ['{', ',']))))) {
    prefix = 'SPACE';
  } else if (this._flags.last_token.type === TOKEN.START_BLOCK) {
    if (this._flags.inline_frame) {
      prefix = 'SPACE';
    } else {
      prefix = 'NEWLINE';
    }
  } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
    this._output.space_before_token = true;
    prefix = 'NEWLINE';
  }

  if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ')') {
    if (this._flags.inline_frame || this._flags.last_token.text === 'else' || this._flags.last_token.text === 'export') {
      prefix = 'SPACE';
    } else {
      prefix = 'NEWLINE';
    }

  }

  if (reserved_array(current_token, ['else', 'catch', 'finally'])) {
    if ((!(this._flags.last_token.type === TOKEN.END_BLOCK && this._previous_flags.mode === MODE.BlockStatement) ||
        this._options.brace_style === "expand" ||
        this._options.brace_style === "end-expand" ||
        (this._options.brace_style === "none" && current_token.newlines)) &&
      !this._flags.inline_frame) {
      this.print_newline();
    } else {
      this._output.trim(true);
      var line = this._output.current_line;
      // If we trimmed and there's something other than a close block before us
      // put a newline back in.  Handles '} // comment' scenario.
      if (line.last() !== '}') {
        this.print_newline();
      }
      this._output.space_before_token = true;
    }
  } else if (prefix === 'NEWLINE') {
    if (reserved_array(this._flags.last_token, special_words)) {
      // no newline between 'return nnn'
      this._output.space_before_token = true;
    } else if (this._flags.last_token.text === 'declare' && reserved_array(current_token, ['var', 'let', 'const'])) {
      // accomodates Typescript declare formatting
      this._output.space_before_token = true;
    } else if (this._flags.last_token.type !== TOKEN.END_EXPR) {
      if ((this._flags.last_token.type !== TOKEN.START_EXPR || !reserved_array(current_token, ['var', 'let', 'const'])) && this._flags.last_token.text !== ':') {
        // no need to force newline on 'var': for (var x = 0...)
        if (reserved_word(current_token, 'if') && reserved_word(current_token.previous, 'else')) {
          // no newline for } else if {
          this._output.space_before_token = true;
        } else {
          this.print_newline();
        }
      }
    } else if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ')') {
      this.print_newline();
    }
  } else if (this._flags.multiline_frame && is_array(this._flags.mode) && this._flags.last_token.text === ',' && this._last_last_text === '}') {
    this.print_newline(); // }, in lists get a newline treatment
  } else if (prefix === 'SPACE') {
    this._output.space_before_token = true;
  }
  if (current_token.previous && (current_token.previous.type === TOKEN.WORD || current_token.previous.type === TOKEN.RESERVED)) {
    this._output.space_before_token = true;
  }
  this.print_token(current_token);
  this._flags.last_word = current_token.text;

  if (current_token.type === TOKEN.RESERVED) {
    if (current_token.text === 'do') {
      this._flags.do_block = true;
    } else if (current_token.text === 'if') {
      this._flags.if_block = true;
    } else if (current_token.text === 'import') {
      this._flags.import_block = true;
    } else if (this._flags.import_block && reserved_word(current_token, 'from')) {
      this._flags.import_block = false;
    }
  }
};

Beautifier.prototype.handle_semicolon = function(current_token) {
  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    // Semicolon can be the start (and end) of a statement
    this._output.space_before_token = false;
  } else {
    this.handle_whitespace_and_comments(current_token);
  }

  var next_token = this._tokens.peek();
  while (this._flags.mode === MODE.Statement &&
    !(this._flags.if_block && reserved_word(next_token, 'else')) &&
    !this._flags.do_block) {
    this.restore_mode();
  }

  // hacky but effective for the moment
  if (this._flags.import_block) {
    this._flags.import_block = false;
  }
  this.print_token(current_token);
};

Beautifier.prototype.handle_string = function(current_token) {
  if (current_token.text.startsWith("`") && current_token.newlines === 0 && current_token.whitespace_before === '' && (current_token.previous.text === ')' || this._flags.last_token.type === TOKEN.WORD)) {
    //Conditional for detectign backtick strings
  } else if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    // One difference - strings want at least a space before
    this._output.space_before_token = true;
  } else {
    this.handle_whitespace_and_comments(current_token);
    if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.inline_frame) {
      this._output.space_before_token = true;
    } else if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    } else if ((current_token.text.startsWith("`") && this._flags.last_token.type === TOKEN.END_EXPR && (current_token.previous.text === ']' || current_token.previous.text === ')') && current_token.newlines === 0)) {
      this._output.space_before_token = true;
    } else {
      this.print_newline();
    }
  }
  this.print_token(current_token);
};

Beautifier.prototype.handle_equals = function(current_token) {
  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
  } else {
    this.handle_whitespace_and_comments(current_token);
  }

  if (this._flags.declaration_statement) {
    // just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
    this._flags.declaration_assignment = true;
  }
  this._output.space_before_token = true;
  this.print_token(current_token);
  this._output.space_before_token = true;
};

Beautifier.prototype.handle_comma = function(current_token) {
  this.handle_whitespace_and_comments(current_token, true);

  this.print_token(current_token);
  this._output.space_before_token = true;
  if (this._flags.declaration_statement) {
    if (is_expression(this._flags.parent.mode)) {
      // do not break on comma, for(var a = 1, b = 2)
      this._flags.declaration_assignment = false;
    }

    if (this._flags.declaration_assignment) {
      this._flags.declaration_assignment = false;
      this.print_newline(false, true);
    } else if (this._options.comma_first) {
      // for comma-first, we want to allow a newline before the comma
      // to turn into a newline after the comma, which we will fixup later
      this.allow_wrap_or_preserved_newline(current_token);
    }
  } else if (this._flags.mode === MODE.ObjectLiteral ||
    (this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral)) {
    if (this._flags.mode === MODE.Statement) {
      this.restore_mode();
    }

    if (!this._flags.inline_frame) {
      this.print_newline();
    }
  } else if (this._options.comma_first) {
    // EXPR or DO_BLOCK
    // for comma-first, we want to allow a newline before the comma
    // to turn into a newline after the comma, which we will fixup later
    this.allow_wrap_or_preserved_newline(current_token);
  }
};

Beautifier.prototype.handle_operator = function(current_token) {
  var isGeneratorAsterisk = current_token.text === '*' &&
    (reserved_array(this._flags.last_token, ['function', 'yield']) ||
      (in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.COMMA, TOKEN.END_BLOCK, TOKEN.SEMICOLON]))
    );
  var isUnary = in_array(current_token.text, ['-', '+']) && (
    in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.START_EXPR, TOKEN.EQUALS, TOKEN.OPERATOR]) ||
    in_array(this._flags.last_token.text, line_starters) ||
    this._flags.last_token.text === ','
  );

  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
  } else {
    var preserve_statement_flags = !isGeneratorAsterisk;
    this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
  }

  // hack for actionscript's import .*;
  if (current_token.text === '*' && this._flags.last_token.type === TOKEN.DOT) {
    this.print_token(current_token);
    return;
  }

  if (current_token.text === '::') {
    // no spaces around exotic namespacing syntax operator
    this.print_token(current_token);
    return;
  }

  // Allow line wrapping between operators when operator_position is
  //   set to before or preserve
  if (this._flags.last_token.type === TOKEN.OPERATOR && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
    this.allow_wrap_or_preserved_newline(current_token);
  }

  if (current_token.text === ':' && this._flags.in_case) {
    this.print_token(current_token);

    this._flags.in_case = false;
    this._flags.case_body = true;
    if (this._tokens.peek().type !== TOKEN.START_BLOCK) {
      this.indent();
      this.print_newline();
      this._flags.case_block = false;
    } else {
      this._flags.case_block = true;
      this._output.space_before_token = true;
    }
    return;
  }

  var space_before = true;
  var space_after = true;
  var in_ternary = false;
  if (current_token.text === ':') {
    if (this._flags.ternary_depth === 0) {
      // Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
      space_before = false;
    } else {
      this._flags.ternary_depth -= 1;
      in_ternary = true;
    }
  } else if (current_token.text === '?') {
    this._flags.ternary_depth += 1;
  }

  // let's handle the operator_position option prior to any conflicting logic
  if (!isUnary && !isGeneratorAsterisk && this._options.preserve_newlines && in_array(current_token.text, positionable_operators)) {
    var isColon = current_token.text === ':';
    var isTernaryColon = (isColon && in_ternary);
    var isOtherColon = (isColon && !in_ternary);

    switch (this._options.operator_position) {
      case OPERATOR_POSITION.before_newline:
        // if the current token is : and it's not a ternary statement then we set space_before to false
        this._output.space_before_token = !isOtherColon;

        this.print_token(current_token);

        if (!isColon || isTernaryColon) {
          this.allow_wrap_or_preserved_newline(current_token);
        }

        this._output.space_before_token = true;
        return;

      case OPERATOR_POSITION.after_newline:
        // if the current token is anything but colon, or (via deduction) it's a colon and in a ternary statement,
        //   then print a newline.

        this._output.space_before_token = true;

        if (!isColon || isTernaryColon) {
          if (this._tokens.peek().newlines) {
            this.print_newline(false, true);
          } else {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        } else {
          this._output.space_before_token = false;
        }

        this.print_token(current_token);

        this._output.space_before_token = true;
        return;

      case OPERATOR_POSITION.preserve_newline:
        if (!isOtherColon) {
          this.allow_wrap_or_preserved_newline(current_token);
        }

        // if we just added a newline, or the current token is : and it's not a ternary statement,
        //   then we set space_before to false
        space_before = !(this._output.just_added_newline() || isOtherColon);

        this._output.space_before_token = space_before;
        this.print_token(current_token);
        this._output.space_before_token = true;
        return;
    }
  }

  if (isGeneratorAsterisk) {
    this.allow_wrap_or_preserved_newline(current_token);
    space_before = false;
    var next_token = this._tokens.peek();
    space_after = next_token && in_array(next_token.type, [TOKEN.WORD, TOKEN.RESERVED]);
  } else if (current_token.text === '...') {
    this.allow_wrap_or_preserved_newline(current_token);
    space_before = this._flags.last_token.type === TOKEN.START_BLOCK;
    space_after = false;
  } else if (in_array(current_token.text, ['--', '++', '!', '~']) || isUnary) {
    // unary operators (and binary +/- pretending to be unary) special cases
    if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR) {
      this.allow_wrap_or_preserved_newline(current_token);
    }

    space_before = false;
    space_after = false;

    // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
    // if there is a newline between -- or ++ and anything else we should preserve it.
    if (current_token.newlines && (current_token.text === '--' || current_token.text === '++' || current_token.text === '~')) {
      var new_line_needed = reserved_array(this._flags.last_token, special_words) && current_token.newlines;
      if (new_line_needed && (this._previous_flags.if_block || this._previous_flags.else_block)) {
        this.restore_mode();
      }
      this.print_newline(new_line_needed, true);
    }

    if (this._flags.last_token.text === ';' && is_expression(this._flags.mode)) {
      // for (;; ++i)
      //        ^^^
      space_before = true;
    }

    if (this._flags.last_token.type === TOKEN.RESERVED) {
      space_before = true;
    } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
      space_before = !(this._flags.last_token.text === ']' && (current_token.text === '--' || current_token.text === '++'));
    } else if (this._flags.last_token.type === TOKEN.OPERATOR) {
      // a++ + ++b;
      // a - -b
      space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(this._flags.last_token.text, ['--', '-', '++', '+']);
      // + and - are not unary when preceeded by -- or ++ operator
      // a-- + b
      // a * +b
      // a - -b
      if (in_array(current_token.text, ['+', '-']) && in_array(this._flags.last_token.text, ['--', '++'])) {
        space_after = true;
      }
    }


    if (((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame) || this._flags.mode === MODE.Statement) &&
      (this._flags.last_token.text === '{' || this._flags.last_token.text === ';')) {
      // { foo; --i }
      // foo(); --bar;
      this.print_newline();
    }
  }

  this._output.space_before_token = this._output.space_before_token || space_before;
  this.print_token(current_token);
  this._output.space_before_token = space_after;
};

Beautifier.prototype.handle_block_comment = function(current_token, preserve_statement_flags) {
  if (this._output.raw) {
    this._output.add_raw_token(current_token);
    if (current_token.directives && current_token.directives.preserve === 'end') {
      // If we're testing the raw output behavior, do not allow a directive to turn it off.
      this._output.raw = this._options.test_output_raw;
    }
    return;
  }

  if (current_token.directives) {
    this.print_newline(false, preserve_statement_flags);
    this.print_token(current_token);
    if (current_token.directives.preserve === 'start') {
      this._output.raw = true;
    }
    this.print_newline(false, true);
    return;
  }

  // inline block
  if (!acorn.newline.test(current_token.text) && !current_token.newlines) {
    this._output.space_before_token = true;
    this.print_token(current_token);
    this._output.space_before_token = true;
    return;
  } else {
    this.print_block_commment(current_token, preserve_statement_flags);
  }
};

Beautifier.prototype.print_block_commment = function(current_token, preserve_statement_flags) {
  var lines = split_linebreaks(current_token.text);
  var j; // iterator for this case
  var javadoc = false;
  var starless = false;
  var lastIndent = current_token.whitespace_before;
  var lastIndentLength = lastIndent.length;

  // block comment starts with a new line
  this.print_newline(false, preserve_statement_flags);

  // first line always indented
  this.print_token_line_indentation(current_token);
  this._output.add_token(lines[0]);
  this.print_newline(false, preserve_statement_flags);


  if (lines.length > 1) {
    lines = lines.slice(1);
    javadoc = all_lines_start_with(lines, '*');
    starless = each_line_matches_indent(lines, lastIndent);

    if (javadoc) {
      this._flags.alignment = 1;
    }

    for (j = 0; j < lines.length; j++) {
      if (javadoc) {
        // javadoc: reformat and re-indent
        this.print_token_line_indentation(current_token);
        this._output.add_token(ltrim(lines[j]));
      } else if (starless && lines[j]) {
        // starless: re-indent non-empty content, avoiding trim
        this.print_token_line_indentation(current_token);
        this._output.add_token(lines[j].substring(lastIndentLength));
      } else {
        // normal comments output raw
        this._output.current_line.set_indent(-1);
        this._output.add_token(lines[j]);
      }

      // for comments on their own line or  more than one line, make sure there's a new line after
      this.print_newline(false, preserve_statement_flags);
    }

    this._flags.alignment = 0;
  }
};


Beautifier.prototype.handle_comment = function(current_token, preserve_statement_flags) {
  if (current_token.newlines) {
    this.print_newline(false, preserve_statement_flags);
  } else {
    this._output.trim(true);
  }

  this._output.space_before_token = true;
  this.print_token(current_token);
  this.print_newline(false, preserve_statement_flags);
};

Beautifier.prototype.handle_dot = function(current_token) {
  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
  } else {
    this.handle_whitespace_and_comments(current_token, true);
  }

  if (this._flags.last_token.text.match('^[0-9]+$')) {
    this._output.space_before_token = true;
  }

  if (reserved_array(this._flags.last_token, special_words)) {
    this._output.space_before_token = false;
  } else {
    // allow preserved newlines before dots in general
    // force newlines on dots after close paren when break_chained - for bar().baz()
    this.allow_wrap_or_preserved_newline(current_token,
      this._flags.last_token.text === ')' && this._options.break_chained_methods);
  }

  // Only unindent chained method dot if this dot starts a new line.
  // Otherwise the automatic extra indentation removal will handle the over indent
  if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
    this.deindent();
  }

  this.print_token(current_token);
};

Beautifier.prototype.handle_unknown = function(current_token, preserve_statement_flags) {
  this.print_token(current_token);

  if (current_token.text[current_token.text.length - 1] === '\n') {
    this.print_newline(false, preserve_statement_flags);
  }
};

Beautifier.prototype.handle_eof = function(current_token) {
  // Unwind any open statements
  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }
  this.handle_whitespace_and_comments(current_token);
};

module.exports.Beautifier = Beautifier;


/***/ }),
/* 2 */
/***/ (function(module) {

/*jshint node:true */
/*
  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function OutputLine(parent) {
  this.__parent = parent;
  this.__character_count = 0;
  // use indent_count as a marker for this.__lines that have preserved indentation
  this.__indent_count = -1;
  this.__alignment_count = 0;
  this.__wrap_point_index = 0;
  this.__wrap_point_character_count = 0;
  this.__wrap_point_indent_count = -1;
  this.__wrap_point_alignment_count = 0;

  this.__items = [];
}

OutputLine.prototype.clone_empty = function() {
  var line = new OutputLine(this.__parent);
  line.set_indent(this.__indent_count, this.__alignment_count);
  return line;
};

OutputLine.prototype.item = function(index) {
  if (index < 0) {
    return this.__items[this.__items.length + index];
  } else {
    return this.__items[index];
  }
};

OutputLine.prototype.has_match = function(pattern) {
  for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
    if (this.__items[lastCheckedOutput].match(pattern)) {
      return true;
    }
  }
  return false;
};

OutputLine.prototype.set_indent = function(indent, alignment) {
  if (this.is_empty()) {
    this.__indent_count = indent || 0;
    this.__alignment_count = alignment || 0;
    this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
  }
};

OutputLine.prototype._set_wrap_point = function() {
  if (this.__parent.wrap_line_length) {
    this.__wrap_point_index = this.__items.length;
    this.__wrap_point_character_count = this.__character_count;
    this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
    this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
  }
};

OutputLine.prototype._should_wrap = function() {
  return this.__wrap_point_index &&
    this.__character_count > this.__parent.wrap_line_length &&
    this.__wrap_point_character_count > this.__parent.next_line.__character_count;
};

OutputLine.prototype._allow_wrap = function() {
  if (this._should_wrap()) {
    this.__parent.add_new_line();
    var next = this.__parent.current_line;
    next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
    next.__items = this.__items.slice(this.__wrap_point_index);
    this.__items = this.__items.slice(0, this.__wrap_point_index);

    next.__character_count += this.__character_count - this.__wrap_point_character_count;
    this.__character_count = this.__wrap_point_character_count;

    if (next.__items[0] === " ") {
      next.__items.splice(0, 1);
      next.__character_count -= 1;
    }
    return true;
  }
  return false;
};

OutputLine.prototype.is_empty = function() {
  return this.__items.length === 0;
};

OutputLine.prototype.last = function() {
  if (!this.is_empty()) {
    return this.__items[this.__items.length - 1];
  } else {
    return null;
  }
};

OutputLine.prototype.push = function(item) {
  this.__items.push(item);
  var last_newline_index = item.lastIndexOf('\n');
  if (last_newline_index !== -1) {
    this.__character_count = item.length - last_newline_index;
  } else {
    this.__character_count += item.length;
  }
};

OutputLine.prototype.pop = function() {
  var item = null;
  if (!this.is_empty()) {
    item = this.__items.pop();
    this.__character_count -= item.length;
  }
  return item;
};


OutputLine.prototype._remove_indent = function() {
  if (this.__indent_count > 0) {
    this.__indent_count -= 1;
    this.__character_count -= this.__parent.indent_size;
  }
};

OutputLine.prototype._remove_wrap_indent = function() {
  if (this.__wrap_point_indent_count > 0) {
    this.__wrap_point_indent_count -= 1;
  }
};
OutputLine.prototype.trim = function() {
  while (this.last() === ' ') {
    this.__items.pop();
    this.__character_count -= 1;
  }
};

OutputLine.prototype.toString = function() {
  var result = '';
  if (this.is_empty()) {
    if (this.__parent.indent_empty_lines) {
      result = this.__parent.get_indent_string(this.__indent_count);
    }
  } else {
    result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
    result += this.__items.join('');
  }
  return result;
};

function IndentStringCache(options, baseIndentString) {
  this.__cache = [''];
  this.__indent_size = options.indent_size;
  this.__indent_string = options.indent_char;
  if (!options.indent_with_tabs) {
    this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
  }

  // Set to null to continue support for auto detection of base indent
  baseIndentString = baseIndentString || '';
  if (options.indent_level > 0) {
    baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
  }

  this.__base_string = baseIndentString;
  this.__base_string_length = baseIndentString.length;
}

IndentStringCache.prototype.get_indent_size = function(indent, column) {
  var result = this.__base_string_length;
  column = column || 0;
  if (indent < 0) {
    result = 0;
  }
  result += indent * this.__indent_size;
  result += column;
  return result;
};

IndentStringCache.prototype.get_indent_string = function(indent_level, column) {
  var result = this.__base_string;
  column = column || 0;
  if (indent_level < 0) {
    indent_level = 0;
    result = '';
  }
  column += indent_level * this.__indent_size;
  this.__ensure_cache(column);
  result += this.__cache[column];
  return result;
};

IndentStringCache.prototype.__ensure_cache = function(column) {
  while (column >= this.__cache.length) {
    this.__add_column();
  }
};

IndentStringCache.prototype.__add_column = function() {
  var column = this.__cache.length;
  var indent = 0;
  var result = '';
  if (this.__indent_size && column >= this.__indent_size) {
    indent = Math.floor(column / this.__indent_size);
    column -= indent * this.__indent_size;
    result = new Array(indent + 1).join(this.__indent_string);
  }
  if (column) {
    result += new Array(column + 1).join(' ');
  }

  this.__cache.push(result);
};

function Output(options, baseIndentString) {
  this.__indent_cache = new IndentStringCache(options, baseIndentString);
  this.raw = false;
  this._end_with_newline = options.end_with_newline;
  this.indent_size = options.indent_size;
  this.wrap_line_length = options.wrap_line_length;
  this.indent_empty_lines = options.indent_empty_lines;
  this.__lines = [];
  this.previous_line = null;
  this.current_line = null;
  this.next_line = new OutputLine(this);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
  // initialize
  this.__add_outputline();
}

Output.prototype.__add_outputline = function() {
  this.previous_line = this.current_line;
  this.current_line = this.next_line.clone_empty();
  this.__lines.push(this.current_line);
};

Output.prototype.get_line_number = function() {
  return this.__lines.length;
};

Output.prototype.get_indent_string = function(indent, column) {
  return this.__indent_cache.get_indent_string(indent, column);
};

Output.prototype.get_indent_size = function(indent, column) {
  return this.__indent_cache.get_indent_size(indent, column);
};

Output.prototype.is_empty = function() {
  return !this.previous_line && this.current_line.is_empty();
};

Output.prototype.add_new_line = function(force_newline) {
  // never newline at the start of file
  // otherwise, newline only if we didn't just add one or we're forced
  if (this.is_empty() ||
    (!force_newline && this.just_added_newline())) {
    return false;
  }

  // if raw output is enabled, don't print additional newlines,
  // but still return True as though you had
  if (!this.raw) {
    this.__add_outputline();
  }
  return true;
};

Output.prototype.get_code = function(eol) {
  this.trim(true);

  // handle some edge cases where the last tokens
  // has text that ends with newline(s)
  var last_item = this.current_line.pop();
  if (last_item) {
    if (last_item[last_item.length - 1] === '\n') {
      last_item = last_item.replace(/\n+$/g, '');
    }
    this.current_line.push(last_item);
  }

  if (this._end_with_newline) {
    this.__add_outputline();
  }

  var sweet_code = this.__lines.join('\n');

  if (eol !== '\n') {
    sweet_code = sweet_code.replace(/[\n]/g, eol);
  }
  return sweet_code;
};

Output.prototype.set_wrap_point = function() {
  this.current_line._set_wrap_point();
};

Output.prototype.set_indent = function(indent, alignment) {
  indent = indent || 0;
  alignment = alignment || 0;

  // Next line stores alignment values
  this.next_line.set_indent(indent, alignment);

  // Never indent your first output indent at the start of the file
  if (this.__lines.length > 1) {
    this.current_line.set_indent(indent, alignment);
    return true;
  }

  this.current_line.set_indent();
  return false;
};

Output.prototype.add_raw_token = function(token) {
  for (var x = 0; x < token.newlines; x++) {
    this.__add_outputline();
  }
  this.current_line.set_indent(-1);
  this.current_line.push(token.whitespace_before);
  this.current_line.push(token.text);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
};

Output.prototype.add_token = function(printable_token) {
  this.__add_space_before_token();
  this.current_line.push(printable_token);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = this.current_line._allow_wrap();
};

Output.prototype.__add_space_before_token = function() {
  if (this.space_before_token && !this.just_added_newline()) {
    if (!this.non_breaking_space) {
      this.set_wrap_point();
    }
    this.current_line.push(' ');
  }
};

Output.prototype.remove_indent = function(index) {
  var output_length = this.__lines.length;
  while (index < output_length) {
    this.__lines[index]._remove_indent();
    index++;
  }
  this.current_line._remove_wrap_indent();
};

Output.prototype.trim = function(eat_newlines) {
  eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

  this.current_line.trim();

  while (eat_newlines && this.__lines.length > 1 &&
    this.current_line.is_empty()) {
    this.__lines.pop();
    this.current_line = this.__lines[this.__lines.length - 1];
    this.current_line.trim();
  }

  this.previous_line = this.__lines.length > 1 ?
    this.__lines[this.__lines.length - 2] : null;
};

Output.prototype.just_added_newline = function() {
  return this.current_line.is_empty();
};

Output.prototype.just_added_blankline = function() {
  return this.is_empty() ||
    (this.current_line.is_empty() && this.previous_line.is_empty());
};

Output.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
  var index = this.__lines.length - 2;
  while (index >= 0) {
    var potentialEmptyLine = this.__lines[index];
    if (potentialEmptyLine.is_empty()) {
      break;
    } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 &&
      potentialEmptyLine.item(-1) !== ends_with) {
      this.__lines.splice(index + 1, 0, new OutputLine(this));
      this.previous_line = this.__lines[this.__lines.length - 2];
      break;
    }
    index--;
  }
};

module.exports.Output = Output;


/***/ }),
/* 3 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Token(type, text, newlines, whitespace_before) {
  this.type = type;
  this.text = text;

  // comments_before are
  // comments that have a new line before them
  // and may or may not have a newline after
  // this is a set of comments before
  this.comments_before = null; /* inline comment*/


  // this.comments_after =  new TokenStream(); // no new line before and newline after
  this.newlines = newlines || 0;
  this.whitespace_before = whitespace_before || '';
  this.parent = null;
  this.next = null;
  this.previous = null;
  this.opened = null;
  this.closed = null;
  this.directives = null;
}


module.exports.Token = Token;


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports) {

/* jshint node: true, curly: false */
// Parts of this section of code is taken from acorn.
//
// Acorn was written by Marijn Haverbeke and released under an MIT
// license. The Unicode regexps (for identifiers and whitespace) were
// taken from [Esprima](http://esprima.org) by Ariya Hidayat.
//
// Git repositories for Acorn are available at
//
//     http://marijnhaverbeke.nl/git/acorn
//     https://github.com/marijnh/acorn.git

// ## Character categories




// acorn used char codes to squeeze the last bit of performance out
// Beautifier is okay without that, so we're using regex
// permit # (23), $ (36), and @ (64). @ is used in ES7 decorators.
// 65 through 91 are uppercase letters.
// permit _ (95).
// 97 through 123 are lowercase letters.
var baseASCIIidentifierStartChars = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a";

// inside an identifier @ is not allowed but 0-9 are.
var baseASCIIidentifierChars = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a";

// Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.
var nonASCIIidentifierStartChars = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc";
var nonASCIIidentifierChars = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f";
//var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
//var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

var identifierStart = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + "])";
var identifierChars = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])*";

exports.identifier = new RegExp(identifierStart + identifierChars, 'g');
exports.identifierStart = new RegExp(identifierStart);
exports.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])+");

var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/; // jshint ignore:line

// Whether a single character denotes a newline.

exports.newline = /[\n\r\u2028\u2029]/;

// Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.

// in javascript, these two differ
// in python they are the same, different methods are called on them
exports.lineBreak = new RegExp('\r\n|' + exports.newline.source);
exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g');


/***/ }),
/* 5 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_87234__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var BaseOptions = (__nested_webpack_require_87234__(6).Options);

var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];

function Options(options) {
  BaseOptions.call(this, options, 'js');

  // compatibility, re
  var raw_brace_style = this.raw_options.brace_style || null;
  if (raw_brace_style === "expand-strict") { //graceful handling of deprecated option
    this.raw_options.brace_style = "expand";
  } else if (raw_brace_style === "collapse-preserve-inline") { //graceful handling of deprecated option
    this.raw_options.brace_style = "collapse,preserve-inline";
  } else if (this.raw_options.braces_on_own_line !== undefined) { //graceful handling of deprecated option
    this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse";
    // } else if (!raw_brace_style) { //Nothing exists to set it
    //   raw_brace_style = "collapse";
  }

  //preserve-inline in delimited string will trigger brace_preserve_inline, everything
  //else is considered a brace_style and the last one only will have an effect

  var brace_style_split = this._get_selection_list('brace_style', ['collapse', 'expand', 'end-expand', 'none', 'preserve-inline']);

  this.brace_preserve_inline = false; //Defaults in case one or other was not specified in meta-option
  this.brace_style = "collapse";

  for (var bs = 0; bs < brace_style_split.length; bs++) {
    if (brace_style_split[bs] === "preserve-inline") {
      this.brace_preserve_inline = true;
    } else {
      this.brace_style = brace_style_split[bs];
    }
  }

  this.unindent_chained_methods = this._get_boolean('unindent_chained_methods');
  this.break_chained_methods = this._get_boolean('break_chained_methods');
  this.space_in_paren = this._get_boolean('space_in_paren');
  this.space_in_empty_paren = this._get_boolean('space_in_empty_paren');
  this.jslint_happy = this._get_boolean('jslint_happy');
  this.space_after_anon_function = this._get_boolean('space_after_anon_function');
  this.space_after_named_function = this._get_boolean('space_after_named_function');
  this.keep_array_indentation = this._get_boolean('keep_array_indentation');
  this.space_before_conditional = this._get_boolean('space_before_conditional', true);
  this.unescape_strings = this._get_boolean('unescape_strings');
  this.e4x = this._get_boolean('e4x');
  this.comma_first = this._get_boolean('comma_first');
  this.operator_position = this._get_selection('operator_position', validPositionValues);

  // For testing of beautify preserve:start directive
  this.test_output_raw = this._get_boolean('test_output_raw');

  // force this._options.space_after_anon_function to true if this._options.jslint_happy
  if (this.jslint_happy) {
    this.space_after_anon_function = true;
  }

}
Options.prototype = new BaseOptions();



module.exports.Options = Options;


/***/ }),
/* 6 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Options(options, merge_child_field) {
  this.raw_options = _mergeOpts(options, merge_child_field);

  // Support passing the source text back with no change
  this.disabled = this._get_boolean('disabled');

  this.eol = this._get_characters('eol', 'auto');
  this.end_with_newline = this._get_boolean('end_with_newline');
  this.indent_size = this._get_number('indent_size', 4);
  this.indent_char = this._get_characters('indent_char', ' ');
  this.indent_level = this._get_number('indent_level');

  this.preserve_newlines = this._get_boolean('preserve_newlines', true);
  this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786);
  if (!this.preserve_newlines) {
    this.max_preserve_newlines = 0;
  }

  this.indent_with_tabs = this._get_boolean('indent_with_tabs', this.indent_char === '\t');
  if (this.indent_with_tabs) {
    this.indent_char = '\t';

    // indent_size behavior changed after 1.8.6
    // It used to be that indent_size would be
    // set to 1 for indent_with_tabs. That is no longer needed and
    // actually doesn't make sense - why not use spaces? Further,
    // that might produce unexpected behavior - tabs being used
    // for single-column alignment. So, when indent_with_tabs is true
    // and indent_size is 1, reset indent_size to 4.
    if (this.indent_size === 1) {
      this.indent_size = 4;
    }
  }

  // Backwards compat with 1.3.x
  this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'));

  this.indent_empty_lines = this._get_boolean('indent_empty_lines');

  // valid templating languages ['django', 'erb', 'handlebars', 'php', 'smarty']
  // For now, 'auto' = all off for javascript, all on for html (and inline javascript).
  // other values ignored
  this.templating = this._get_selection_list('templating', ['auto', 'none', 'django', 'erb', 'handlebars', 'php', 'smarty'], ['auto']);
}

Options.prototype._get_array = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || [];
  if (typeof option_value === 'object') {
    if (option_value !== null && typeof option_value.concat === 'function') {
      result = option_value.concat();
    }
  } else if (typeof option_value === 'string') {
    result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
  }
  return result;
};

Options.prototype._get_boolean = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = option_value === undefined ? !!default_value : !!option_value;
  return result;
};

Options.prototype._get_characters = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || '';
  if (typeof option_value === 'string') {
    result = option_value.replace(/\\r/, '\r').replace(/\\n/, '\n').replace(/\\t/, '\t');
  }
  return result;
};

Options.prototype._get_number = function(name, default_value) {
  var option_value = this.raw_options[name];
  default_value = parseInt(default_value, 10);
  if (isNaN(default_value)) {
    default_value = 0;
  }
  var result = parseInt(option_value, 10);
  if (isNaN(result)) {
    result = default_value;
  }
  return result;
};

Options.prototype._get_selection = function(name, selection_list, default_value) {
  var result = this._get_selection_list(name, selection_list, default_value);
  if (result.length !== 1) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result[0];
};


Options.prototype._get_selection_list = function(name, selection_list, default_value) {
  if (!selection_list || selection_list.length === 0) {
    throw new Error("Selection list cannot be empty.");
  }

  default_value = default_value || [selection_list[0]];
  if (!this._is_valid_selection(default_value, selection_list)) {
    throw new Error("Invalid Default Value!");
  }

  var result = this._get_array(name, default_value);
  if (!this._is_valid_selection(result, selection_list)) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can contain only the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result;
};

Options.prototype._is_valid_selection = function(result, selection_list) {
  return result.length && selection_list.length &&
    !result.some(function(item) { return selection_list.indexOf(item) === -1; });
};


// merges child options up with the parent options object
// Example: obj = {a: 1, b: {a: 2}}
//          mergeOpts(obj, 'b')
//
//          Returns: {a: 2}
function _mergeOpts(allOptions, childFieldName) {
  var finalOpts = {};
  allOptions = _normalizeOpts(allOptions);
  var name;

  for (name in allOptions) {
    if (name !== childFieldName) {
      finalOpts[name] = allOptions[name];
    }
  }

  //merge in the per type settings for the childFieldName
  if (childFieldName && allOptions[childFieldName]) {
    for (name in allOptions[childFieldName]) {
      finalOpts[name] = allOptions[childFieldName][name];
    }
  }
  return finalOpts;
}

function _normalizeOpts(options) {
  var convertedOpts = {};
  var key;

  for (key in options) {
    var newKey = key.replace(/-/g, "_");
    convertedOpts[newKey] = options[key];
  }
  return convertedOpts;
}

module.exports.Options = Options;
module.exports.normalizeOpts = _normalizeOpts;
module.exports.mergeOpts = _mergeOpts;


/***/ }),
/* 7 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_98130__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var InputScanner = (__nested_webpack_require_98130__(8).InputScanner);
var BaseTokenizer = (__nested_webpack_require_98130__(9).Tokenizer);
var BASETOKEN = (__nested_webpack_require_98130__(9).TOKEN);
var Directives = (__nested_webpack_require_98130__(13).Directives);
var acorn = __nested_webpack_require_98130__(4);
var Pattern = (__nested_webpack_require_98130__(12).Pattern);
var TemplatablePattern = (__nested_webpack_require_98130__(14).TemplatablePattern);


function in_array(what, arr) {
  return arr.indexOf(what) !== -1;
}


var TOKEN = {
  START_EXPR: 'TK_START_EXPR',
  END_EXPR: 'TK_END_EXPR',
  START_BLOCK: 'TK_START_BLOCK',
  END_BLOCK: 'TK_END_BLOCK',
  WORD: 'TK_WORD',
  RESERVED: 'TK_RESERVED',
  SEMICOLON: 'TK_SEMICOLON',
  STRING: 'TK_STRING',
  EQUALS: 'TK_EQUALS',
  OPERATOR: 'TK_OPERATOR',
  COMMA: 'TK_COMMA',
  BLOCK_COMMENT: 'TK_BLOCK_COMMENT',
  COMMENT: 'TK_COMMENT',
  DOT: 'TK_DOT',
  UNKNOWN: 'TK_UNKNOWN',
  START: BASETOKEN.START,
  RAW: BASETOKEN.RAW,
  EOF: BASETOKEN.EOF
};


var directives_core = new Directives(/\/\*/, /\*\//);

var number_pattern = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/;

var digit = /[0-9]/;

// Dot "." must be distinguished from "..." and decimal
var dot_pattern = /[^\d\.]/;

var positionable_operators = (
  ">>> === !== &&= ??= ||= " +
  "<< && >= ** != == <= >> || ?? |> " +
  "< / - + > : & % ? ^ | *").split(' ');

// IMPORTANT: this must be sorted longest to shortest or tokenizing many not work.
// Also, you must update possitionable operators separately from punct
var punct =
  ">>>= " +
  "... >>= <<= === >>> !== **= &&= ??= ||= " +
  "=> ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> " +
  "= ! ? > < : / ^ - + * & % ~ |";

punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
// ?. but not if followed by a number 
punct = '\\?\\.(?!\\d) ' + punct;
punct = punct.replace(/ /g, '|');

var punct_pattern = new RegExp(punct);

// words which should always start on new line.
var line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
var reserved_words = line_starters.concat(['do', 'in', 'of', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await', 'from', 'as', 'class', 'extends']);
var reserved_word_pattern = new RegExp('^(?:' + reserved_words.join('|') + ')$');

// var template_pattern = /(?:(?:<\?php|<\?=)[\s\S]*?\?>)|(?:<%[\s\S]*?%>)/g;

var in_html_comment;

var Tokenizer = function(input_string, options) {
  BaseTokenizer.call(this, input_string, options);

  this._patterns.whitespace = this._patterns.whitespace.matching(
    /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
    /\u2028\u2029/.source);

  var pattern_reader = new Pattern(this._input);
  var templatable = new TemplatablePattern(this._input)
    .read_options(this._options);

  this.__patterns = {
    template: templatable,
    identifier: templatable.starting_with(acorn.identifier).matching(acorn.identifierMatch),
    number: pattern_reader.matching(number_pattern),
    punct: pattern_reader.matching(punct_pattern),
    // comment ends just before nearest linefeed or end of file
    comment: pattern_reader.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
    //  /* ... */ comment ends with nearest */ or end of file
    block_comment: pattern_reader.starting_with(/\/\*/).until_after(/\*\//),
    html_comment_start: pattern_reader.matching(/<!--/),
    html_comment_end: pattern_reader.matching(/-->/),
    include: pattern_reader.starting_with(/#include/).until_after(acorn.lineBreak),
    shebang: pattern_reader.starting_with(/#!/).until_after(acorn.lineBreak),
    xml: pattern_reader.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
    single_quote: templatable.until(/['\\\n\r\u2028\u2029]/),
    double_quote: templatable.until(/["\\\n\r\u2028\u2029]/),
    template_text: templatable.until(/[`\\$]/),
    template_expression: templatable.until(/[`}\\]/)
  };

};
Tokenizer.prototype = new BaseTokenizer();

Tokenizer.prototype._is_comment = function(current_token) {
  return current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.BLOCK_COMMENT || current_token.type === TOKEN.UNKNOWN;
};

Tokenizer.prototype._is_opening = function(current_token) {
  return current_token.type === TOKEN.START_BLOCK || current_token.type === TOKEN.START_EXPR;
};

Tokenizer.prototype._is_closing = function(current_token, open_token) {
  return (current_token.type === TOKEN.END_BLOCK || current_token.type === TOKEN.END_EXPR) &&
    (open_token && (
      (current_token.text === ']' && open_token.text === '[') ||
      (current_token.text === ')' && open_token.text === '(') ||
      (current_token.text === '}' && open_token.text === '{')));
};

Tokenizer.prototype._reset = function() {
  in_html_comment = false;
};

Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
  var token = null;
  this._readWhitespace();
  var c = this._input.peek();

  if (c === null) {
    return this._create_token(TOKEN.EOF, '');
  }

  token = token || this._read_non_javascript(c);
  token = token || this._read_string(c);
  token = token || this._read_word(previous_token);
  token = token || this._read_singles(c);
  token = token || this._read_comment(c);
  token = token || this._read_regexp(c, previous_token);
  token = token || this._read_xml(c, previous_token);
  token = token || this._read_punctuation();
  token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());

  return token;
};

Tokenizer.prototype._read_word = function(previous_token) {
  var resulting_string;
  resulting_string = this.__patterns.identifier.read();
  if (resulting_string !== '') {
    resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');
    if (!(previous_token.type === TOKEN.DOT ||
        (previous_token.type === TOKEN.RESERVED && (previous_token.text === 'set' || previous_token.text === 'get'))) &&
      reserved_word_pattern.test(resulting_string)) {
      if ((resulting_string === 'in' || resulting_string === 'of') &&
        (previous_token.type === TOKEN.WORD || previous_token.type === TOKEN.STRING)) { // hack for 'in' and 'of' operators
        return this._create_token(TOKEN.OPERATOR, resulting_string);
      }
      return this._create_token(TOKEN.RESERVED, resulting_string);
    }
    return this._create_token(TOKEN.WORD, resulting_string);
  }

  resulting_string = this.__patterns.number.read();
  if (resulting_string !== '') {
    return this._create_token(TOKEN.WORD, resulting_string);
  }
};

Tokenizer.prototype._read_singles = function(c) {
  var token = null;
  if (c === '(' || c === '[') {
    token = this._create_token(TOKEN.START_EXPR, c);
  } else if (c === ')' || c === ']') {
    token = this._create_token(TOKEN.END_EXPR, c);
  } else if (c === '{') {
    token = this._create_token(TOKEN.START_BLOCK, c);
  } else if (c === '}') {
    token = this._create_token(TOKEN.END_BLOCK, c);
  } else if (c === ';') {
    token = this._create_token(TOKEN.SEMICOLON, c);
  } else if (c === '.' && dot_pattern.test(this._input.peek(1))) {
    token = this._create_token(TOKEN.DOT, c);
  } else if (c === ',') {
    token = this._create_token(TOKEN.COMMA, c);
  }

  if (token) {
    this._input.next();
  }
  return token;
};

Tokenizer.prototype._read_punctuation = function() {
  var resulting_string = this.__patterns.punct.read();

  if (resulting_string !== '') {
    if (resulting_string === '=') {
      return this._create_token(TOKEN.EQUALS, resulting_string);
    } else if (resulting_string === '?.') {
      return this._create_token(TOKEN.DOT, resulting_string);
    } else {
      return this._create_token(TOKEN.OPERATOR, resulting_string);
    }
  }
};

Tokenizer.prototype._read_non_javascript = function(c) {
  var resulting_string = '';

  if (c === '#') {
    if (this._is_first_token()) {
      resulting_string = this.__patterns.shebang.read();

      if (resulting_string) {
        return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + '\n');
      }
    }

    // handles extendscript #includes
    resulting_string = this.__patterns.include.read();

    if (resulting_string) {
      return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + '\n');
    }

    c = this._input.next();

    // Spidermonkey-specific sharp variables for circular references. Considered obsolete.
    var sharp = '#';
    if (this._input.hasNext() && this._input.testChar(digit)) {
      do {
        c = this._input.next();
        sharp += c;
      } while (this._input.hasNext() && c !== '#' && c !== '=');
      if (c === '#') {
        //
      } else if (this._input.peek() === '[' && this._input.peek(1) === ']') {
        sharp += '[]';
        this._input.next();
        this._input.next();
      } else if (this._input.peek() === '{' && this._input.peek(1) === '}') {
        sharp += '{}';
        this._input.next();
        this._input.next();
      }
      return this._create_token(TOKEN.WORD, sharp);
    }

    this._input.back();

  } else if (c === '<' && this._is_first_token()) {
    resulting_string = this.__patterns.html_comment_start.read();
    if (resulting_string) {
      while (this._input.hasNext() && !this._input.testChar(acorn.newline)) {
        resulting_string += this._input.next();
      }
      in_html_comment = true;
      return this._create_token(TOKEN.COMMENT, resulting_string);
    }
  } else if (in_html_comment && c === '-') {
    resulting_string = this.__patterns.html_comment_end.read();
    if (resulting_string) {
      in_html_comment = false;
      return this._create_token(TOKEN.COMMENT, resulting_string);
    }
  }

  return null;
};

Tokenizer.prototype._read_comment = function(c) {
  var token = null;
  if (c === '/') {
    var comment = '';
    if (this._input.peek(1) === '*') {
      // peek for comment /* ... */
      comment = this.__patterns.block_comment.read();
      var directives = directives_core.get_directives(comment);
      if (directives && directives.ignore === 'start') {
        comment += directives_core.readIgnored(this._input);
      }
      comment = comment.replace(acorn.allLineBreaks, '\n');
      token = this._create_token(TOKEN.BLOCK_COMMENT, comment);
      token.directives = directives;
    } else if (this._input.peek(1) === '/') {
      // peek for comment // ...
      comment = this.__patterns.comment.read();
      token = this._create_token(TOKEN.COMMENT, comment);
    }
  }
  return token;
};

Tokenizer.prototype._read_string = function(c) {
  if (c === '`' || c === "'" || c === '"') {
    var resulting_string = this._input.next();
    this.has_char_escapes = false;

    if (c === '`') {
      resulting_string += this._read_string_recursive('`', true, '${');
    } else {
      resulting_string += this._read_string_recursive(c);
    }

    if (this.has_char_escapes && this._options.unescape_strings) {
      resulting_string = unescape_string(resulting_string);
    }

    if (this._input.peek() === c) {
      resulting_string += this._input.next();
    }

    resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');

    return this._create_token(TOKEN.STRING, resulting_string);
  }

  return null;
};

Tokenizer.prototype._allow_regexp_or_xml = function(previous_token) {
  // regex and xml can only appear in specific locations during parsing
  return (previous_token.type === TOKEN.RESERVED && in_array(previous_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield'])) ||
    (previous_token.type === TOKEN.END_EXPR && previous_token.text === ')' &&
      previous_token.opened.previous.type === TOKEN.RESERVED && in_array(previous_token.opened.previous.text, ['if', 'while', 'for'])) ||
    (in_array(previous_token.type, [TOKEN.COMMENT, TOKEN.START_EXPR, TOKEN.START_BLOCK, TOKEN.START,
      TOKEN.END_BLOCK, TOKEN.OPERATOR, TOKEN.EQUALS, TOKEN.EOF, TOKEN.SEMICOLON, TOKEN.COMMA
    ]));
};

Tokenizer.prototype._read_regexp = function(c, previous_token) {

  if (c === '/' && this._allow_regexp_or_xml(previous_token)) {
    // handle regexp
    //
    var resulting_string = this._input.next();
    var esc = false;

    var in_char_class = false;
    while (this._input.hasNext() &&
      ((esc || in_char_class || this._input.peek() !== c) &&
        !this._input.testChar(acorn.newline))) {
      resulting_string += this._input.peek();
      if (!esc) {
        esc = this._input.peek() === '\\';
        if (this._input.peek() === '[') {
          in_char_class = true;
        } else if (this._input.peek() === ']') {
          in_char_class = false;
        }
      } else {
        esc = false;
      }
      this._input.next();
    }

    if (this._input.peek() === c) {
      resulting_string += this._input.next();

      // regexps may have modifiers /regexp/MOD , so fetch those, too
      // Only [gim] are valid, but if the user puts in garbage, do what we can to take it.
      resulting_string += this._input.read(acorn.identifier);
    }
    return this._create_token(TOKEN.STRING, resulting_string);
  }
  return null;
};

Tokenizer.prototype._read_xml = function(c, previous_token) {

  if (this._options.e4x && c === "<" && this._allow_regexp_or_xml(previous_token)) {
    var xmlStr = '';
    var match = this.__patterns.xml.read_match();
    // handle e4x xml literals
    //
    if (match) {
      // Trim root tag to attempt to
      var rootTag = match[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}');
      var isCurlyRoot = rootTag.indexOf('{') === 0;
      var depth = 0;
      while (match) {
        var isEndTag = !!match[1];
        var tagName = match[2];
        var isSingletonTag = (!!match[match.length - 1]) || (tagName.slice(0, 8) === "![CDATA[");
        if (!isSingletonTag &&
          (tagName === rootTag || (isCurlyRoot && tagName.replace(/^{\s+/, '{').replace(/\s+}$/, '}')))) {
          if (isEndTag) {
            --depth;
          } else {
            ++depth;
          }
        }
        xmlStr += match[0];
        if (depth <= 0) {
          break;
        }
        match = this.__patterns.xml.read_match();
      }
      // if we didn't close correctly, keep unformatted.
      if (!match) {
        xmlStr += this._input.match(/[\s\S]*/g)[0];
      }
      xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
      return this._create_token(TOKEN.STRING, xmlStr);
    }
  }

  return null;
};

function unescape_string(s) {
  // You think that a regex would work for this
  // return s.replace(/\\x([0-9a-f]{2})/gi, function(match, val) {
  //         return String.fromCharCode(parseInt(val, 16));
  //     })
  // However, dealing with '\xff', '\\xff', '\\\xff' makes this more fun.
  var out = '',
    escaped = 0;

  var input_scan = new InputScanner(s);
  var matched = null;

  while (input_scan.hasNext()) {
    // Keep any whitespace, non-slash characters
    // also keep slash pairs.
    matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);

    if (matched) {
      out += matched[0];
    }

    if (input_scan.peek() === '\\') {
      input_scan.next();
      if (input_scan.peek() === 'x') {
        matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
      } else if (input_scan.peek() === 'u') {
        matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
      } else {
        out += '\\';
        if (input_scan.hasNext()) {
          out += input_scan.next();
        }
        continue;
      }

      // If there's some error decoding, return the original string
      if (!matched) {
        return s;
      }

      escaped = parseInt(matched[1], 16);

      if (escaped > 0x7e && escaped <= 0xff && matched[0].indexOf('x') === 0) {
        // we bail out on \x7f..\xff,
        // leaving whole string escaped,
        // as it's probably completely binary
        return s;
      } else if (escaped >= 0x00 && escaped < 0x20) {
        // leave 0x00...0x1f escaped
        out += '\\' + matched[0];
        continue;
      } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
        // single-quote, apostrophe, backslash - escape these
        out += '\\' + String.fromCharCode(escaped);
      } else {
        out += String.fromCharCode(escaped);
      }
    }
  }

  return out;
}

// handle string
//
Tokenizer.prototype._read_string_recursive = function(delimiter, allow_unescaped_newlines, start_sub) {
  var current_char;
  var pattern;
  if (delimiter === '\'') {
    pattern = this.__patterns.single_quote;
  } else if (delimiter === '"') {
    pattern = this.__patterns.double_quote;
  } else if (delimiter === '`') {
    pattern = this.__patterns.template_text;
  } else if (delimiter === '}') {
    pattern = this.__patterns.template_expression;
  }

  var resulting_string = pattern.read();
  var next = '';
  while (this._input.hasNext()) {
    next = this._input.next();
    if (next === delimiter ||
      (!allow_unescaped_newlines && acorn.newline.test(next))) {
      this._input.back();
      break;
    } else if (next === '\\' && this._input.hasNext()) {
      current_char = this._input.peek();

      if (current_char === 'x' || current_char === 'u') {
        this.has_char_escapes = true;
      } else if (current_char === '\r' && this._input.peek(1) === '\n') {
        this._input.next();
      }
      next += this._input.next();
    } else if (start_sub) {
      if (start_sub === '${' && next === '$' && this._input.peek() === '{') {
        next += this._input.next();
      }

      if (start_sub === next) {
        if (delimiter === '`') {
          next += this._read_string_recursive('}', allow_unescaped_newlines, '`');
        } else {
          next += this._read_string_recursive('`', allow_unescaped_newlines, '${');
        }
        if (this._input.hasNext()) {
          next += this._input.next();
        }
      }
    }
    next += pattern.read();
    resulting_string += next;
  }

  return resulting_string;
};

module.exports.Tokenizer = Tokenizer;
module.exports.TOKEN = TOKEN;
module.exports.positionable_operators = positionable_operators.slice();
module.exports.line_starters = line_starters.slice();


/***/ }),
/* 8 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var regexp_has_sticky = RegExp.prototype.hasOwnProperty('sticky');

function InputScanner(input_string) {
  this.__input = input_string || '';
  this.__input_length = this.__input.length;
  this.__position = 0;
}

InputScanner.prototype.restart = function() {
  this.__position = 0;
};

InputScanner.prototype.back = function() {
  if (this.__position > 0) {
    this.__position -= 1;
  }
};

InputScanner.prototype.hasNext = function() {
  return this.__position < this.__input_length;
};

InputScanner.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__input.charAt(this.__position);
    this.__position += 1;
  }
  return val;
};

InputScanner.prototype.peek = function(index) {
  var val = null;
  index = index || 0;
  index += this.__position;
  if (index >= 0 && index < this.__input_length) {
    val = this.__input.charAt(index);
  }
  return val;
};

// This is a JavaScript only helper function (not in python)
// Javascript doesn't have a match method
// and not all implementation support "sticky" flag.
// If they do not support sticky then both this.match() and this.test() method
// must get the match and check the index of the match.
// If sticky is supported and set, this method will use it.
// Otherwise it will check that global is set, and fall back to the slower method.
InputScanner.prototype.__match = function(pattern, index) {
  pattern.lastIndex = index;
  var pattern_match = pattern.exec(this.__input);

  if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
    if (pattern_match.index !== index) {
      pattern_match = null;
    }
  }

  return pattern_match;
};

InputScanner.prototype.test = function(pattern, index) {
  index = index || 0;
  index += this.__position;

  if (index >= 0 && index < this.__input_length) {
    return !!this.__match(pattern, index);
  } else {
    return false;
  }
};

InputScanner.prototype.testChar = function(pattern, index) {
  // test one character regex match
  var val = this.peek(index);
  pattern.lastIndex = 0;
  return val !== null && pattern.test(val);
};

InputScanner.prototype.match = function(pattern) {
  var pattern_match = this.__match(pattern, this.__position);
  if (pattern_match) {
    this.__position += pattern_match[0].length;
  } else {
    pattern_match = null;
  }
  return pattern_match;
};

InputScanner.prototype.read = function(starting_pattern, until_pattern, until_after) {
  var val = '';
  var match;
  if (starting_pattern) {
    match = this.match(starting_pattern);
    if (match) {
      val += match[0];
    }
  }
  if (until_pattern && (match || !starting_pattern)) {
    val += this.readUntil(until_pattern, until_after);
  }
  return val;
};

InputScanner.prototype.readUntil = function(pattern, until_after) {
  var val = '';
  var match_index = this.__position;
  pattern.lastIndex = this.__position;
  var pattern_match = pattern.exec(this.__input);
  if (pattern_match) {
    match_index = pattern_match.index;
    if (until_after) {
      match_index += pattern_match[0].length;
    }
  } else {
    match_index = this.__input_length;
  }

  val = this.__input.substring(this.__position, match_index);
  this.__position = match_index;
  return val;
};

InputScanner.prototype.readUntilAfter = function(pattern) {
  return this.readUntil(pattern, true);
};

InputScanner.prototype.get_regexp = function(pattern, match_from) {
  var result = null;
  var flags = 'g';
  if (match_from && regexp_has_sticky) {
    flags = 'y';
  }
  // strings are converted to regexp
  if (typeof pattern === "string" && pattern !== '') {
    // result = new RegExp(pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), flags);
    result = new RegExp(pattern, flags);
  } else if (pattern) {
    result = new RegExp(pattern.source, flags);
  }
  return result;
};

InputScanner.prototype.get_literal_regexp = function(literal_string) {
  return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
};

/* css beautifier legacy helpers */
InputScanner.prototype.peekUntilAfter = function(pattern) {
  var start = this.__position;
  var val = this.readUntilAfter(pattern);
  this.__position = start;
  return val;
};

InputScanner.prototype.lookBack = function(testVal) {
  var start = this.__position - 1;
  return start >= testVal.length && this.__input.substring(start - testVal.length, start)
    .toLowerCase() === testVal;
};

module.exports.InputScanner = InputScanner;


/***/ }),
/* 9 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_123385__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var InputScanner = (__nested_webpack_require_123385__(8).InputScanner);
var Token = (__nested_webpack_require_123385__(3).Token);
var TokenStream = (__nested_webpack_require_123385__(10).TokenStream);
var WhitespacePattern = (__nested_webpack_require_123385__(11).WhitespacePattern);

var TOKEN = {
  START: 'TK_START',
  RAW: 'TK_RAW',
  EOF: 'TK_EOF'
};

var Tokenizer = function(input_string, options) {
  this._input = new InputScanner(input_string);
  this._options = options || {};
  this.__tokens = null;

  this._patterns = {};
  this._patterns.whitespace = new WhitespacePattern(this._input);
};

Tokenizer.prototype.tokenize = function() {
  this._input.restart();
  this.__tokens = new TokenStream();

  this._reset();

  var current;
  var previous = new Token(TOKEN.START, '');
  var open_token = null;
  var open_stack = [];
  var comments = new TokenStream();

  while (previous.type !== TOKEN.EOF) {
    current = this._get_next_token(previous, open_token);
    while (this._is_comment(current)) {
      comments.add(current);
      current = this._get_next_token(previous, open_token);
    }

    if (!comments.isEmpty()) {
      current.comments_before = comments;
      comments = new TokenStream();
    }

    current.parent = open_token;

    if (this._is_opening(current)) {
      open_stack.push(open_token);
      open_token = current;
    } else if (open_token && this._is_closing(current, open_token)) {
      current.opened = open_token;
      open_token.closed = current;
      open_token = open_stack.pop();
      current.parent = open_token;
    }

    current.previous = previous;
    previous.next = current;

    this.__tokens.add(current);
    previous = current;
  }

  return this.__tokens;
};


Tokenizer.prototype._is_first_token = function() {
  return this.__tokens.isEmpty();
};

Tokenizer.prototype._reset = function() {};

Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
  this._readWhitespace();
  var resulting_string = this._input.read(/.+/g);
  if (resulting_string) {
    return this._create_token(TOKEN.RAW, resulting_string);
  } else {
    return this._create_token(TOKEN.EOF, '');
  }
};

Tokenizer.prototype._is_comment = function(current_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._is_opening = function(current_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._is_closing = function(current_token, open_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._create_token = function(type, text) {
  var token = new Token(type, text,
    this._patterns.whitespace.newline_count,
    this._patterns.whitespace.whitespace_before_token);
  return token;
};

Tokenizer.prototype._readWhitespace = function() {
  return this._patterns.whitespace.read();
};



module.exports.Tokenizer = Tokenizer;
module.exports.TOKEN = TOKEN;


/***/ }),
/* 10 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function TokenStream(parent_token) {
  // private
  this.__tokens = [];
  this.__tokens_length = this.__tokens.length;
  this.__position = 0;
  this.__parent_token = parent_token;
}

TokenStream.prototype.restart = function() {
  this.__position = 0;
};

TokenStream.prototype.isEmpty = function() {
  return this.__tokens_length === 0;
};

TokenStream.prototype.hasNext = function() {
  return this.__position < this.__tokens_length;
};

TokenStream.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__tokens[this.__position];
    this.__position += 1;
  }
  return val;
};

TokenStream.prototype.peek = function(index) {
  var val = null;
  index = index || 0;
  index += this.__position;
  if (index >= 0 && index < this.__tokens_length) {
    val = this.__tokens[index];
  }
  return val;
};

TokenStream.prototype.add = function(token) {
  if (this.__parent_token) {
    token.parent = this.__parent_token;
  }
  this.__tokens.push(token);
  this.__tokens_length += 1;
};

module.exports.TokenStream = TokenStream;


/***/ }),
/* 11 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_129805__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Pattern = (__nested_webpack_require_129805__(12).Pattern);

function WhitespacePattern(input_scanner, parent) {
  Pattern.call(this, input_scanner, parent);
  if (parent) {
    this._line_regexp = this._input.get_regexp(parent._line_regexp);
  } else {
    this.__set_whitespace_patterns('', '');
  }

  this.newline_count = 0;
  this.whitespace_before_token = '';
}
WhitespacePattern.prototype = new Pattern();

WhitespacePattern.prototype.__set_whitespace_patterns = function(whitespace_chars, newline_chars) {
  whitespace_chars += '\\t ';
  newline_chars += '\\n\\r';

  this._match_pattern = this._input.get_regexp(
    '[' + whitespace_chars + newline_chars + ']+', true);
  this._newline_regexp = this._input.get_regexp(
    '\\r\\n|[' + newline_chars + ']');
};

WhitespacePattern.prototype.read = function() {
  this.newline_count = 0;
  this.whitespace_before_token = '';

  var resulting_string = this._input.read(this._match_pattern);
  if (resulting_string === ' ') {
    this.whitespace_before_token = ' ';
  } else if (resulting_string) {
    var matches = this.__split(this._newline_regexp, resulting_string);
    this.newline_count = matches.length - 1;
    this.whitespace_before_token = matches[this.newline_count];
  }

  return resulting_string;
};

WhitespacePattern.prototype.matching = function(whitespace_chars, newline_chars) {
  var result = this._create();
  result.__set_whitespace_patterns(whitespace_chars, newline_chars);
  result._update();
  return result;
};

WhitespacePattern.prototype._create = function() {
  return new WhitespacePattern(this._input, this);
};

WhitespacePattern.prototype.__split = function(regexp, input_string) {
  regexp.lastIndex = 0;
  var start_index = 0;
  var result = [];
  var next_match = regexp.exec(input_string);
  while (next_match) {
    result.push(input_string.substring(start_index, next_match.index));
    start_index = next_match.index + next_match[0].length;
    next_match = regexp.exec(input_string);
  }

  if (start_index < input_string.length) {
    result.push(input_string.substring(start_index, input_string.length));
  } else {
    result.push('');
  }

  return result;
};



module.exports.WhitespacePattern = WhitespacePattern;


/***/ }),
/* 12 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Pattern(input_scanner, parent) {
  this._input = input_scanner;
  this._starting_pattern = null;
  this._match_pattern = null;
  this._until_pattern = null;
  this._until_after = false;

  if (parent) {
    this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
    this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
    this._until_pattern = this._input.get_regexp(parent._until_pattern);
    this._until_after = parent._until_after;
  }
}

Pattern.prototype.read = function() {
  var result = this._input.read(this._starting_pattern);
  if (!this._starting_pattern || result) {
    result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
  }
  return result;
};

Pattern.prototype.read_match = function() {
  return this._input.match(this._match_pattern);
};

Pattern.prototype.until_after = function(pattern) {
  var result = this._create();
  result._until_after = true;
  result._until_pattern = this._input.get_regexp(pattern);
  result._update();
  return result;
};

Pattern.prototype.until = function(pattern) {
  var result = this._create();
  result._until_after = false;
  result._until_pattern = this._input.get_regexp(pattern);
  result._update();
  return result;
};

Pattern.prototype.starting_with = function(pattern) {
  var result = this._create();
  result._starting_pattern = this._input.get_regexp(pattern, true);
  result._update();
  return result;
};

Pattern.prototype.matching = function(pattern) {
  var result = this._create();
  result._match_pattern = this._input.get_regexp(pattern, true);
  result._update();
  return result;
};

Pattern.prototype._create = function() {
  return new Pattern(this._input, this);
};

Pattern.prototype._update = function() {};

module.exports.Pattern = Pattern;


/***/ }),
/* 13 */
/***/ (function(module) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



function Directives(start_block_pattern, end_block_pattern) {
  start_block_pattern = typeof start_block_pattern === 'string' ? start_block_pattern : start_block_pattern.source;
  end_block_pattern = typeof end_block_pattern === 'string' ? end_block_pattern : end_block_pattern.source;
  this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, 'g');
  this.__directive_pattern = / (\w+)[:](\w+)/g;

  this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, 'g');
}

Directives.prototype.get_directives = function(text) {
  if (!text.match(this.__directives_block_pattern)) {
    return null;
  }

  var directives = {};
  this.__directive_pattern.lastIndex = 0;
  var directive_match = this.__directive_pattern.exec(text);

  while (directive_match) {
    directives[directive_match[1]] = directive_match[2];
    directive_match = this.__directive_pattern.exec(text);
  }

  return directives;
};

Directives.prototype.readIgnored = function(input) {
  return input.readUntilAfter(this.__directives_end_ignore_pattern);
};


module.exports.Directives = Directives;


/***/ }),
/* 14 */
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_138792__) {

/*jshint node:true */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/



var Pattern = (__nested_webpack_require_138792__(12).Pattern);


var template_names = {
  django: false,
  erb: false,
  handlebars: false,
  php: false,
  smarty: false
};

// This lets templates appear anywhere we would do a readUntil
// The cost is higher but it is pay to play.
function TemplatablePattern(input_scanner, parent) {
  Pattern.call(this, input_scanner, parent);
  this.__template_pattern = null;
  this._disabled = Object.assign({}, template_names);
  this._excluded = Object.assign({}, template_names);

  if (parent) {
    this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
    this._excluded = Object.assign(this._excluded, parent._excluded);
    this._disabled = Object.assign(this._disabled, parent._disabled);
  }
  var pattern = new Pattern(input_scanner);
  this.__patterns = {
    handlebars_comment: pattern.starting_with(/{{!--/).until_after(/--}}/),
    handlebars_unescaped: pattern.starting_with(/{{{/).until_after(/}}}/),
    handlebars: pattern.starting_with(/{{/).until_after(/}}/),
    php: pattern.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
    erb: pattern.starting_with(/<%[^%]/).until_after(/[^%]%>/),
    // django coflicts with handlebars a bit.
    django: pattern.starting_with(/{%/).until_after(/%}/),
    django_value: pattern.starting_with(/{{/).until_after(/}}/),
    django_comment: pattern.starting_with(/{#/).until_after(/#}/),
    smarty: pattern.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
    smarty_comment: pattern.starting_with(/{\*/).until_after(/\*}/),
    smarty_literal: pattern.starting_with(/{literal}/).until_after(/{\/literal}/)
  };
}
TemplatablePattern.prototype = new Pattern();

TemplatablePattern.prototype._create = function() {
  return new TemplatablePattern(this._input, this);
};

TemplatablePattern.prototype._update = function() {
  this.__set_templated_pattern();
};

TemplatablePattern.prototype.disable = function(language) {
  var result = this._create();
  result._disabled[language] = true;
  result._update();
  return result;
};

TemplatablePattern.prototype.read_options = function(options) {
  var result = this._create();
  for (var language in template_names) {
    result._disabled[language] = options.templating.indexOf(language) === -1;
  }
  result._update();
  return result;
};

TemplatablePattern.prototype.exclude = function(language) {
  var result = this._create();
  result._excluded[language] = true;
  result._update();
  return result;
};

TemplatablePattern.prototype.read = function() {
  var result = '';
  if (this._match_pattern) {
    result = this._input.read(this._starting_pattern);
  } else {
    result = this._input.read(this._starting_pattern, this.__template_pattern);
  }
  var next = this._read_template();
  while (next) {
    if (this._match_pattern) {
      next += this._input.read(this._match_pattern);
    } else {
      next += this._input.readUntil(this.__template_pattern);
    }
    result += next;
    next = this._read_template();
  }

  if (this._until_after) {
    result += this._input.readUntilAfter(this._until_pattern);
  }
  return result;
};

TemplatablePattern.prototype.__set_templated_pattern = function() {
  var items = [];

  if (!this._disabled.php) {
    items.push(this.__patterns.php._starting_pattern.source);
  }
  if (!this._disabled.handlebars) {
    items.push(this.__patterns.handlebars._starting_pattern.source);
  }
  if (!this._disabled.erb) {
    items.push(this.__patterns.erb._starting_pattern.source);
  }
  if (!this._disabled.django) {
    items.push(this.__patterns.django._starting_pattern.source);
    // The starting pattern for django is more complex because it has different
    // patterns for value, comment, and other sections
    items.push(this.__patterns.django_value._starting_pattern.source);
    items.push(this.__patterns.django_comment._starting_pattern.source);
  }
  if (!this._disabled.smarty) {
    items.push(this.__patterns.smarty._starting_pattern.source);
  }

  if (this._until_pattern) {
    items.push(this._until_pattern.source);
  }
  this.__template_pattern = this._input.get_regexp('(?:' + items.join('|') + ')');
};

TemplatablePattern.prototype._read_template = function() {
  var resulting_string = '';
  var c = this._input.peek();
  if (c === '<') {
    var peek1 = this._input.peek(1);
    //if we're in a comment, do something special
    // We treat all comments as literals, even more than preformatted tags
    // we just look for the appropriate close tag
    if (!this._disabled.php && !this._excluded.php && peek1 === '?') {
      resulting_string = resulting_string ||
        this.__patterns.php.read();
    }
    if (!this._disabled.erb && !this._excluded.erb && peek1 === '%') {
      resulting_string = resulting_string ||
        this.__patterns.erb.read();
    }
  } else if (c === '{') {
    if (!this._disabled.handlebars && !this._excluded.handlebars) {
      resulting_string = resulting_string ||
        this.__patterns.handlebars_comment.read();
      resulting_string = resulting_string ||
        this.__patterns.handlebars_unescaped.read();
      resulting_string = resulting_string ||
        this.__patterns.handlebars.read();
    }
    if (!this._disabled.django) {
      // django coflicts with handlebars a bit.
      if (!this._excluded.django && !this._excluded.handlebars) {
        resulting_string = resulting_string ||
          this.__patterns.django_value.read();
      }
      if (!this._excluded.django) {
        resulting_string = resulting_string ||
          this.__patterns.django_comment.read();
        resulting_string = resulting_string ||
          this.__patterns.django.read();
      }
    }
    if (!this._disabled.smarty) {
      // smarty cannot be enabled with django or handlebars enabled
      if (this._disabled.django && this._disabled.handlebars) {
        resulting_string = resulting_string ||
          this.__patterns.smarty_comment.read();
        resulting_string = resulting_string ||
          this.__patterns.smarty_literal.read();
        resulting_string = resulting_string ||
          this.__patterns.smarty.read();
      }
    }
  }
  return resulting_string;
};


module.exports.TemplatablePattern = TemplatablePattern;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_146467__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_146467__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nested_webpack_require_146467__(0);
/******/ 	legacy_beautify_js = __webpack_exports__;
/******/ 	
/******/ })()
;
var js_beautify = legacy_beautify_js;
/* Footer */
if (true) {
    // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return { js_beautify: js_beautify };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************************!*\
  !*** ./src/dashboard/widgets/ace-editor.ts ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ initAceEditor)
/* harmony export */ });
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-beautify */ "./node_modules/js-beautify/js/index.js");
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_beautify__WEBPACK_IMPORTED_MODULE_0__);
// TODO: find proper types for ace
// eslint-disable-line @typescript-eslint/no-explicit-any

// import 'ace/webpack-resolver';


var initAceEditor = function initAceEditor(widgetID) {
  if (widgetID) {
    var editorNode = document.getElementById("".concat(widgetID, "-ace-editor"));
    var inputNode = document.getElementById(widgetID);
    var getBeautifiedValue = function getBeautifiedValue(mode) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      if (mode === 'html') {
        return (0,js_beautify__WEBPACK_IMPORTED_MODULE_0__.html_beautify)(value);
      }
      if (mode === 'javascript') {
        return (0,js_beautify__WEBPACK_IMPORTED_MODULE_0__.js_beautify)(value);
      }
      if (mode === 'css') {
        return (0,js_beautify__WEBPACK_IMPORTED_MODULE_0__.css_beautify)(value);
      }
      return value;
    };
    if (editorNode && inputNode) {
      try {
        var mode = editorNode.dataset.mode;
        ace.config.set('basePath', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.11.2/');
        // ace.config.setModuleUrl('ace/mode/html', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.11.2/mode-html.js');

        var editor = ace.edit(editorNode);
        editor.setTheme('ace/theme/monokai'); //TODO: set theme dynamically
        editor.session.setMode("ace/mode/".concat(mode));
        editor.session.setValue(getBeautifiedValue(mode, editor.session.getValue()));
        editor.getSession().on('change', function () {
          inputNode.value = getBeautifiedValue(mode, editor.getSession().getValue());
        });
      } catch (error) {
        editorNode.innerHTML = "Rendering Error: ".concat(error.message);
      }
    }
  }
};

})();

WagtailAceEditor = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNlLWVkaXRvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxJQUEwQztBQUM5QztBQUNBLEVBQUUsaUNBQU87QUFDVCxJQUFJLDBGQUFnQjtBQUNwQixJQUFJLGtHQUFvQjtBQUN4QixJQUFJLG9HQUFxQjtBQUN6QixHQUFHLG1DQUFFO0FBQ0w7QUFDQSxHQUFHO0FBQUEsa0dBQUM7QUFDSixFQUFFLEtBQUs7Ozs7Ozs7Ozs7QUMzRVA7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RCx3QkFBd0I7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyw2Q0FBNkM7QUFDL0U7OztBQUdBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDREQUE0RDtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQW1COztBQUVyRTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsa0JBQWtCLGdDQUFtQjtBQUNyQyxhQUFhLGdDQUFtQjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBLGtEQUFrRCxnQ0FBbUI7O0FBRXJFO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxlQUFlLGdDQUFtQjtBQUNsQyxjQUFjLGdDQUFtQjtBQUNqQyxvQkFBb0IsZ0NBQW1CO0FBQ3ZDLGtCQUFrQixnQ0FBbUI7O0FBRXJDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrQkFBa0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBLHlDQUF5QztBQUN6QyxtQ0FBbUM7QUFDbkMsc0RBQXNEO0FBQ3RELFFBQVE7QUFDUjs7QUFFQTtBQUNBLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQXNEO0FBQzVEO0FBQ0Esb0RBQW9EO0FBQ3BELE1BQU0sd0JBQXdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GO0FBQ3BGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzRkFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sd0JBQXdCO0FBQzlCO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLHNCQUFzQixnREFBZ0Q7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdCQUF3QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkJBQTZCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU0sNkJBQTZCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDREQUE0RDtBQUNsRTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87QUFDUDtBQUNBLGtEQUFrRCxnQ0FBbUI7O0FBRXJFO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxtQkFBbUIsZ0NBQW1COztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsK0JBQStCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGdDQUFtQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQ0FBbUI7QUFDdkQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQTBDO0FBQzlDO0FBQ0EsSUFBSSxpQ0FBTyxFQUFFLG1DQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBLGtHQUFDO0FBQ04sRUFBRSxLQUFLLEVBVU47O0FBRUQsQ0FBQzs7Ozs7Ozs7Ozs7QUMxb0REO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELE9BQU8sTUFBTTtBQUN6RTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdELHdCQUF3QjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCOzs7QUFHL0IsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLDZDQUE2QztBQUMvRTs7O0FBR0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNERBQTREO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87QUFDUDtBQUNBLGtEQUFrRCxnQ0FBbUI7O0FBRXJFO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxvQkFBb0IsZ0NBQW1CO0FBQ3ZDLGFBQWEsZ0NBQW1CO0FBQ2hDLG1CQUFtQixnQ0FBbUI7QUFDdEMseUJBQXlCLGdDQUFtQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBLHdFQUF3RTtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87QUFDUDtBQUNBLGtEQUFrRCxnQ0FBbUI7O0FBRXJFO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxlQUFlLGdDQUFtQjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxrREFBa0QsZ0NBQW1COztBQUVyRTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsZUFBZSxnQ0FBbUI7OztBQUdsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsdUJBQXVCO0FBQ3hFLG9EQUFvRCxtQkFBbUI7QUFDdkUseUNBQXlDLGtCQUFrQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CO0FBQ3ZELDJDQUEyQyxrQkFBa0I7QUFDN0QsNENBQTRDLG1CQUFtQjtBQUMvRCxvQ0FBb0MsT0FBTyw4QkFBOEI7QUFDekUsNENBQTRDLHFCQUFxQjtBQUNqRSw0Q0FBNEMsUUFBUSxpQkFBaUIsVUFBVTtBQUMvRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlCQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFtQjs7QUFFckU7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGtCQUFrQixnQ0FBbUI7QUFDckMsYUFBYSxnQ0FBbUI7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxrREFBa0QsZ0NBQW1COztBQUVyRTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsZUFBZSxnQ0FBbUI7QUFDbEMsY0FBYyxnQ0FBbUI7QUFDakMsaUJBQWlCLGdDQUFtQjtBQUNwQyxhQUFhLGdDQUFtQjs7QUFFaEM7QUFDQTs7QUFFQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Q7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdFQUFnRTtBQUNoRTs7QUFFQSxrQkFBa0I7QUFDbEIsOENBQThDO0FBQzlDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQTZDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0Q0FBNEM7QUFDbEQ7QUFDQSxNQUFNLHVGQUF1RjtBQUM3RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixpREFBaUQsc0JBQXNCO0FBQ3ZFOztBQUVBLG1CQUFtQixjQUFjLFFBQVEsZUFBZTtBQUN4RCx3Q0FBd0MscUNBQXFDO0FBQzdFO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxXQUFXO0FBQzNEO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQSxpRUFBaUU7QUFDakU7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxS0FBcUs7O0FBRXJLO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkMscUZBQXFGO0FBQ3JGLE1BQU0sT0FBTztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9DQUFvQztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRO0FBQ1I7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUTtBQUNSOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVE7QUFDUjs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0Esa0RBQWtELGdDQUFtQjs7QUFFckU7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLG1CQUFtQixnQ0FBbUI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBLE9BQU87QUFDUDtBQUNBLGtEQUFrRCxnQ0FBbUI7O0FBRXJFO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxxQkFBcUIsZ0NBQW1CO0FBQ3hDLGlCQUFpQixnQ0FBbUI7QUFDcEMsa0JBQWtCLGdDQUFtQjtBQUNyQywwQkFBMEIsZ0NBQW1CO0FBQzdDLGVBQWUsZ0NBQW1COztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdEQUF3RCx1QkFBdUI7QUFDL0UsZ0RBQWdELGtCQUFrQjtBQUNsRSxvREFBb0Q7QUFDcEQsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw4QkFBOEIsOEJBQThCO0FBQzdGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwrQkFBK0I7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtDQUFrQyxhQUFhLCtCQUErQjtBQUNwRjtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGtGQUFrRjtBQUNsRjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlDQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxpQ0FBbUI7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUNBQW1CO0FBQ3ZEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUEwQztBQUM5QztBQUNBLElBQUksaUNBQU8sQ0FBQyxtQkFBUyxFQUFFLHNGQUFZLEVBQUUsOEZBQWdCLENBQUMsbUNBQUU7QUFDeEQsMEJBQTBCLG1CQUFVLENBQUMsaUVBQVk7QUFDakQsMkJBQTJCLG1CQUFVLENBQUMseUVBQWdCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBLGtHQUFDO0FBQ04sRUFBRSxLQUFLLGtDQW1CTjs7QUFFRCxDQUFDOzs7Ozs7Ozs7OztBQy9qR0Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELCtCQUFtQjs7QUFFckU7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGtCQUFrQiwrQkFBbUI7QUFDckMsYUFBYSwrQkFBbUI7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxrREFBa0QsK0JBQW1COztBQUVyRTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsY0FBYywrQkFBbUI7QUFDakMsYUFBYSwrQkFBbUI7QUFDaEMsWUFBWSwrQkFBbUI7QUFDL0IsZUFBZSwrQkFBbUI7QUFDbEMsaUJBQWlCLCtCQUFtQjtBQUNwQyxxQkFBcUIsK0JBQW1CO0FBQ3hDLDhCQUE4QiwrQkFBbUI7QUFDakQsYUFBYSwrQkFBbUI7OztBQUdoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsY0FBYyx1QkFBdUI7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTtBQUN6RTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRHQUE0RztBQUM1RztBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxvQkFBb0I7QUFDcEIscUJBQXFCLFFBQVEsZUFBZTtBQUM1QyxxQkFBcUIsVUFBVSxlQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHdDQUF3QztBQUN4Qyx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKLDZDQUE2QztBQUM3QztBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEVBQTBFO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJLE9BQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtREFBbUQ7QUFDbkQ7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQsVUFBVTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3RELGlHQUFpRztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxzRkFBc0Y7QUFDdEY7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUksd0lBQXdJO0FBQzVJLDBCQUEwQixJQUFJO0FBQzlCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHlDQUF5Qyx1Q0FBdUM7QUFDaEYsV0FBVyxLQUFLO0FBQ2hCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdELHdCQUF3QjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCOzs7QUFHL0IsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxFQUFFO0FBQzdDLDJDQUEyQyxFQUFFOztBQUU3QztBQUNBO0FBQ0EsMERBQTBELEVBQUU7O0FBRTVELGdGQUFnRjs7QUFFaEY7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0Esa0RBQWtELGdDQUFtQjs7QUFFckU7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLG1CQUFtQixnQ0FBbUI7O0FBRXRDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLElBQUksMkRBQTJEO0FBQy9EO0FBQ0EsSUFBSSw4REFBOEQ7QUFDbEU7QUFDQSxTQUFTLDZCQUE2QjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsc0NBQXNDO0FBQ3RDOztBQUVBLG1CQUFtQiwrQkFBK0I7QUFDbEQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsNkNBQTZDO0FBQy9FOzs7QUFHQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxrREFBa0QsZ0NBQW1COztBQUVyRTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsb0JBQW9CLGdDQUFtQjtBQUN2QyxxQkFBcUIsZ0NBQW1CO0FBQ3hDLGlCQUFpQixnQ0FBbUI7QUFDcEMsa0JBQWtCLGdDQUFtQjtBQUNyQyxZQUFZLGdDQUFtQjtBQUMvQixlQUFlLGdDQUFtQjtBQUNsQywwQkFBMEIsZ0NBQW1COzs7QUFHN0M7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLEdBQUcsSUFBSSw2QkFBNkIsR0FBRyxJQUFJLGlFQUFpRSxLQUFLLEdBQUcsR0FBRyxJQUFJLElBQUk7QUFDbE07QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJCQUEyQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSSxpQkFBaUI7QUFDckI7QUFDQSxJQUFJLGlCQUFpQjtBQUNyQjtBQUNBLElBQUksaUJBQWlCO0FBQ3JCO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtDQUFrQywrQkFBK0I7QUFDekUsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRTtBQUNwRSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUSxnQkFBZ0IsTUFBTTtBQUN0RSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLFFBQVEsZ0JBQWdCLE1BQU07QUFDbkc7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxFQUFFO0FBQ3RDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsRUFBRTtBQUNwRCxRQUFRO0FBQ1Isa0RBQWtELEVBQUU7QUFDcEQsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJLHlCQUF5QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sMkJBQTJCLDhDQUE4QztBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsVUFBVTtBQUNWLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDREQUE0RDtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxrREFBa0QsaUNBQW1COztBQUVyRTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsb0JBQW9CLGlDQUFtQjtBQUN2QyxhQUFhLGlDQUFtQjtBQUNoQyxtQkFBbUIsaUNBQW1CO0FBQ3RDLHlCQUF5QixpQ0FBbUI7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQTs7QUFFQSx3RUFBd0U7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxrREFBa0QsaUNBQW1COztBQUVyRTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsZUFBZSxpQ0FBbUI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0Esa0RBQWtELGlDQUFtQjs7QUFFckU7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGVBQWUsaUNBQW1COzs7QUFHbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHVCQUF1QjtBQUN4RSxvREFBb0QsbUJBQW1CO0FBQ3ZFLHlDQUF5QyxrQkFBa0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQjtBQUN2RCwyQ0FBMkMsa0JBQWtCO0FBQzdELDRDQUE0QyxtQkFBbUI7QUFDL0Qsb0NBQW9DLE9BQU8sOEJBQThCO0FBQ3pFLDRDQUE0QyxxQkFBcUI7QUFDakUsNENBQTRDLFFBQVEsaUJBQWlCLFVBQVU7QUFDL0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpQkFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUNBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGlDQUFtQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpQ0FBbUI7QUFDdkQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQTBDO0FBQzlDO0FBQ0EsSUFBSSxpQ0FBTyxFQUFFLG1DQUFFO0FBQ2YsaUJBQWlCO0FBQ2pCLEtBQUs7QUFBQSxrR0FBQztBQUNOLEVBQUUsS0FBSyxFQVVOOztBQUVELENBQUM7Ozs7Ozs7O1VDbDdIRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUN3Qjs7QUFFeEI7O0FBRXVFO0FBRXZFLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUMsUUFBZ0IsRUFBVztFQUNoRCxJQUFJQSxRQUFRLEVBQUU7SUFDWixJQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxJQUFBQyxNQUFBLENBQUlKLFFBQVEsaUJBQWM7SUFDcEUsSUFBTUssU0FBUyxHQUFHSCxRQUFRLENBQUNDLGNBQWMsQ0FBQ0gsUUFBUSxDQUFxQjtJQUV2RSxJQUFNTSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJQyxJQUFhLEVBQWlCO01BQUEsSUFBZkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxFQUFFO01BQ25ELElBQUlGLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDbkIsT0FBT1YsMERBQWEsQ0FBQ1csS0FBSyxDQUFDO01BQzdCO01BRUEsSUFBSUQsSUFBSSxLQUFLLFlBQVksRUFBRTtRQUN6QixPQUFPVCx3REFBVyxDQUFDVSxLQUFLLENBQUM7TUFDM0I7TUFFQSxJQUFJRCxJQUFJLEtBQUssS0FBSyxFQUFFO1FBQ2xCLE9BQU9YLHlEQUFZLENBQUNZLEtBQUssQ0FBQztNQUM1QjtNQUVBLE9BQU9BLEtBQUs7SUFDZCxDQUFDO0lBRUQsSUFBSVAsVUFBVSxJQUFJSSxTQUFTLEVBQUU7TUFDM0IsSUFBSTtRQUNGLElBQU1FLElBQUksR0FBR04sVUFBVSxDQUFDVyxPQUFPLENBQUNMLElBQUk7UUFDcENNLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFLG9EQUFvRCxDQUFDO1FBQ2hGOztRQUVBLElBQU1DLE1BQU0sR0FBR0gsR0FBRyxDQUFDSSxJQUFJLENBQUNoQixVQUFVLENBQUM7UUFDbkNlLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUN0Q0YsTUFBTSxDQUFDRyxPQUFPLENBQUNDLE9BQU8sYUFBQWhCLE1BQUEsQ0FBYUcsSUFBSSxFQUFHO1FBQzFDUyxNQUFNLENBQUNHLE9BQU8sQ0FBQ0UsUUFBUSxDQUFDZixrQkFBa0IsQ0FBQ0MsSUFBSSxFQUFFUyxNQUFNLENBQUNHLE9BQU8sQ0FBQ0csUUFBUSxFQUFFLENBQUMsQ0FBQztRQUU1RU4sTUFBTSxDQUFDTyxVQUFVLEVBQUUsQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFNO1VBQ3JDbkIsU0FBUyxDQUFDRyxLQUFLLEdBQUdGLGtCQUFrQixDQUFDQyxJQUFJLEVBQUVTLE1BQU0sQ0FBQ08sVUFBVSxFQUFFLENBQUNELFFBQVEsRUFBRSxDQUFDO1FBQzVFLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQyxPQUFPRyxLQUFLLEVBQUU7UUFDZHhCLFVBQVUsQ0FBQ3lCLFNBQVMsdUJBQUF0QixNQUFBLENBQXdCcUIsS0FBSyxDQUFTRSxPQUFPLENBQUU7TUFDckU7SUFDRjtFQUNGO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1dhZ3RhaWxBY2VFZGl0b3IvLi9ub2RlX21vZHVsZXMvanMtYmVhdXRpZnkvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vV2FndGFpbEFjZUVkaXRvci8uL25vZGVfbW9kdWxlcy9qcy1iZWF1dGlmeS9qcy9saWIvYmVhdXRpZnktY3NzLmpzIiwid2VicGFjazovL1dhZ3RhaWxBY2VFZGl0b3IvLi9ub2RlX21vZHVsZXMvanMtYmVhdXRpZnkvanMvbGliL2JlYXV0aWZ5LWh0bWwuanMiLCJ3ZWJwYWNrOi8vV2FndGFpbEFjZUVkaXRvci8uL25vZGVfbW9kdWxlcy9qcy1iZWF1dGlmeS9qcy9saWIvYmVhdXRpZnkuanMiLCJ3ZWJwYWNrOi8vV2FndGFpbEFjZUVkaXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XYWd0YWlsQWNlRWRpdG9yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1dhZ3RhaWxBY2VFZGl0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dhZ3RhaWxBY2VFZGl0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XYWd0YWlsQWNlRWRpdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2FndGFpbEFjZUVkaXRvci8uL3NyYy9kYXNoYm9hcmQvd2lkZ2V0cy9hY2UtZWRpdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLyogZ2xvYmFscyBkZWZpbmUgKi9cbi8qXG4gIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gIENvcHlyaWdodCAoYykgMjAwNy0yMDE4IEVpbmFyIExpZWxtYW5pcywgTGlhbSBOZXdtYW4sIGFuZCBjb250cmlidXRvcnMuXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICBTT0ZUV0FSRS5cblxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcblRoZSBmb2xsb3dpbmcgYmF0Y2hlcyBhcmUgZXF1aXZhbGVudDpcblxudmFyIGJlYXV0aWZ5X2pzID0gcmVxdWlyZSgnanMtYmVhdXRpZnknKTtcbnZhciBiZWF1dGlmeV9qcyA9IHJlcXVpcmUoJ2pzLWJlYXV0aWZ5JykuanM7XG52YXIgYmVhdXRpZnlfanMgPSByZXF1aXJlKCdqcy1iZWF1dGlmeScpLmpzX2JlYXV0aWZ5O1xuXG52YXIgYmVhdXRpZnlfY3NzID0gcmVxdWlyZSgnanMtYmVhdXRpZnknKS5jc3M7XG52YXIgYmVhdXRpZnlfY3NzID0gcmVxdWlyZSgnanMtYmVhdXRpZnknKS5jc3NfYmVhdXRpZnk7XG5cbnZhciBiZWF1dGlmeV9odG1sID0gcmVxdWlyZSgnanMtYmVhdXRpZnknKS5odG1sO1xudmFyIGJlYXV0aWZ5X2h0bWwgPSByZXF1aXJlKCdqcy1iZWF1dGlmeScpLmh0bWxfYmVhdXRpZnk7XG5cbkFsbCBtZXRob2RzIHJldHVybmVkIGFjY2VwdCB0d28gYXJndW1lbnRzLCB0aGUgc291cmNlIHN0cmluZyBhbmQgYW4gb3B0aW9ucyBvYmplY3QuXG4qKi9cblxuZnVuY3Rpb24gZ2V0X2JlYXV0aWZ5KGpzX2JlYXV0aWZ5LCBjc3NfYmVhdXRpZnksIGh0bWxfYmVhdXRpZnkpIHtcbiAgLy8gdGhlIGRlZmF1bHQgaXMganNcbiAgdmFyIGJlYXV0aWZ5ID0gZnVuY3Rpb24oc3JjLCBjb25maWcpIHtcbiAgICByZXR1cm4ganNfYmVhdXRpZnkuanNfYmVhdXRpZnkoc3JjLCBjb25maWcpO1xuICB9O1xuXG4gIC8vIHNob3J0IGFsaWFzZXNcbiAgYmVhdXRpZnkuanMgPSBqc19iZWF1dGlmeS5qc19iZWF1dGlmeTtcbiAgYmVhdXRpZnkuY3NzID0gY3NzX2JlYXV0aWZ5LmNzc19iZWF1dGlmeTtcbiAgYmVhdXRpZnkuaHRtbCA9IGh0bWxfYmVhdXRpZnkuaHRtbF9iZWF1dGlmeTtcblxuICAvLyBsZWdhY3kgYWxpYXNlc1xuICBiZWF1dGlmeS5qc19iZWF1dGlmeSA9IGpzX2JlYXV0aWZ5LmpzX2JlYXV0aWZ5O1xuICBiZWF1dGlmeS5jc3NfYmVhdXRpZnkgPSBjc3NfYmVhdXRpZnkuY3NzX2JlYXV0aWZ5O1xuICBiZWF1dGlmeS5odG1sX2JlYXV0aWZ5ID0gaHRtbF9iZWF1dGlmeS5odG1sX2JlYXV0aWZ5O1xuXG4gIHJldHVybiBiZWF1dGlmeTtcbn1cblxuaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gIC8vIEFkZCBzdXBwb3J0IGZvciBBTUQgKCBodHRwczovL2dpdGh1Yi5jb20vYW1kanMvYW1kanMtYXBpL3dpa2kvQU1EI2RlZmluZWFtZC1wcm9wZXJ0eS0gKVxuICBkZWZpbmUoW1xuICAgIFwiLi9saWIvYmVhdXRpZnlcIixcbiAgICBcIi4vbGliL2JlYXV0aWZ5LWNzc1wiLFxuICAgIFwiLi9saWIvYmVhdXRpZnktaHRtbFwiXG4gIF0sIGZ1bmN0aW9uKGpzX2JlYXV0aWZ5LCBjc3NfYmVhdXRpZnksIGh0bWxfYmVhdXRpZnkpIHtcbiAgICByZXR1cm4gZ2V0X2JlYXV0aWZ5KGpzX2JlYXV0aWZ5LCBjc3NfYmVhdXRpZnksIGh0bWxfYmVhdXRpZnkpO1xuICB9KTtcbn0gZWxzZSB7XG4gIChmdW5jdGlvbihtb2QpIHtcbiAgICB2YXIgYmVhdXRpZmllciA9IHJlcXVpcmUoJy4vc3JjL2luZGV4Jyk7XG4gICAgYmVhdXRpZmllci5qc19iZWF1dGlmeSA9IGJlYXV0aWZpZXIuanM7XG4gICAgYmVhdXRpZmllci5jc3NfYmVhdXRpZnkgPSBiZWF1dGlmaWVyLmNzcztcbiAgICBiZWF1dGlmaWVyLmh0bWxfYmVhdXRpZnkgPSBiZWF1dGlmaWVyLmh0bWw7XG5cbiAgICBtb2QuZXhwb3J0cyA9IGdldF9iZWF1dGlmeShiZWF1dGlmaWVyLCBiZWF1dGlmaWVyLCBiZWF1dGlmaWVyKTtcblxuICB9KShtb2R1bGUpO1xufSIsIi8qIEFVVE8tR0VORVJBVEVELiBETyBOT1QgTU9ESUZZLiAqL1xuLypcblxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG5cblxuIENTUyBCZWF1dGlmaWVyXG4tLS0tLS0tLS0tLS0tLS1cblxuICAgIFdyaXR0ZW4gYnkgSGFydXR5dW4gQW1pcmphbnlhbiwgKGFtaXJqYW55YW5AZ21haWwuY29tKVxuXG4gICAgQmFzZWQgb24gY29kZSBpbml0aWFsbHkgZGV2ZWxvcGVkIGJ5OiBFaW5hciBMaWVsbWFuaXMsIDxlaW5hckBiZWF1dGlmaWVyLmlvPlxuICAgICAgICBodHRwczovL2JlYXV0aWZpZXIuaW8vXG5cbiAgICBVc2FnZTpcbiAgICAgICAgY3NzX2JlYXV0aWZ5KHNvdXJjZV90ZXh0KTtcbiAgICAgICAgY3NzX2JlYXV0aWZ5KHNvdXJjZV90ZXh0LCBvcHRpb25zKTtcblxuICAgIFRoZSBvcHRpb25zIGFyZSAoZGVmYXVsdCBpbiBicmFja2V0cyk6XG4gICAgICAgIGluZGVudF9zaXplICg0KSAgICAgICAgICAgICAgICAgICAgICAgICDigJQgaW5kZW50YXRpb24gc2l6ZSxcbiAgICAgICAgaW5kZW50X2NoYXIgKHNwYWNlKSAgICAgICAgICAgICAgICAgICAgIOKAlCBjaGFyYWN0ZXIgdG8gaW5kZW50IHdpdGgsXG4gICAgICAgIHNlbGVjdG9yX3NlcGFyYXRvcl9uZXdsaW5lICh0cnVlKSAgICAgICAtIHNlcGFyYXRlIHNlbGVjdG9ycyB3aXRoIG5ld2xpbmUgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90IChlLmcuIFwiYSxcXG5iclwiIG9yIFwiYSwgYnJcIilcbiAgICAgICAgZW5kX3dpdGhfbmV3bGluZSAoZmFsc2UpICAgICAgICAgICAgICAgIC0gZW5kIHdpdGggYSBuZXdsaW5lXG4gICAgICAgIG5ld2xpbmVfYmV0d2Vlbl9ydWxlcyAodHJ1ZSkgICAgICAgICAgICAtIGFkZCBhIG5ldyBsaW5lIGFmdGVyIGV2ZXJ5IGNzcyBydWxlXG4gICAgICAgIHNwYWNlX2Fyb3VuZF9zZWxlY3Rvcl9zZXBhcmF0b3IgKGZhbHNlKSAtIGVuc3VyZSBzcGFjZSBhcm91bmQgc2VsZWN0b3Igc2VwYXJhdG9yczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJz4nLCAnKycsICd+JyAoZS5nLiBcImE+YlwiIC0+IFwiYSA+IGJcIilcbiAgICBlLmdcblxuICAgIGNzc19iZWF1dGlmeShjc3Nfc291cmNlX3RleHQsIHtcbiAgICAgICdpbmRlbnRfc2l6ZSc6IDEsXG4gICAgICAnaW5kZW50X2NoYXInOiAnXFx0JyxcbiAgICAgICdzZWxlY3Rvcl9zZXBhcmF0b3InOiAnICcsXG4gICAgICAnZW5kX3dpdGhfbmV3bGluZSc6IGZhbHNlLFxuICAgICAgJ25ld2xpbmVfYmV0d2Vlbl9ydWxlcyc6IHRydWUsXG4gICAgICAnc3BhY2VfYXJvdW5kX3NlbGVjdG9yX3NlcGFyYXRvcic6IHRydWVcbiAgICB9KTtcbiovXG5cbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIxL3N5bmRhdGEuaHRtbCN0b2tlbml6YXRpb25cbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtc3ludGF4L1xuXG4oZnVuY3Rpb24oKSB7XG5cbi8qIEdFTkVSQVRFRF9CVUlMRF9PVVRQVVQgKi9cbnZhciBsZWdhY3lfYmVhdXRpZnlfY3NzO1xuLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdFwidXNlIHN0cmljdFwiO1xuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9IChbXG4vKiAwICovLFxuLyogMSAqLyxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxuLypqc2hpbnQgbm9kZTp0cnVlICovXG4vKlxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG4qL1xuXG5cblxuZnVuY3Rpb24gT3V0cHV0TGluZShwYXJlbnQpIHtcbiAgdGhpcy5fX3BhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5fX2NoYXJhY3Rlcl9jb3VudCA9IDA7XG4gIC8vIHVzZSBpbmRlbnRfY291bnQgYXMgYSBtYXJrZXIgZm9yIHRoaXMuX19saW5lcyB0aGF0IGhhdmUgcHJlc2VydmVkIGluZGVudGF0aW9uXG4gIHRoaXMuX19pbmRlbnRfY291bnQgPSAtMTtcbiAgdGhpcy5fX2FsaWdubWVudF9jb3VudCA9IDA7XG4gIHRoaXMuX193cmFwX3BvaW50X2luZGV4ID0gMDtcbiAgdGhpcy5fX3dyYXBfcG9pbnRfY2hhcmFjdGVyX2NvdW50ID0gMDtcbiAgdGhpcy5fX3dyYXBfcG9pbnRfaW5kZW50X2NvdW50ID0gLTE7XG4gIHRoaXMuX193cmFwX3BvaW50X2FsaWdubWVudF9jb3VudCA9IDA7XG5cbiAgdGhpcy5fX2l0ZW1zID0gW107XG59XG5cbk91dHB1dExpbmUucHJvdG90eXBlLmNsb25lX2VtcHR5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBsaW5lID0gbmV3IE91dHB1dExpbmUodGhpcy5fX3BhcmVudCk7XG4gIGxpbmUuc2V0X2luZGVudCh0aGlzLl9faW5kZW50X2NvdW50LCB0aGlzLl9fYWxpZ25tZW50X2NvdW50KTtcbiAgcmV0dXJuIGxpbmU7XG59O1xuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS5pdGVtID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiB0aGlzLl9faXRlbXNbdGhpcy5fX2l0ZW1zLmxlbmd0aCArIGluZGV4XTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5fX2l0ZW1zW2luZGV4XTtcbiAgfVxufTtcblxuT3V0cHV0TGluZS5wcm90b3R5cGUuaGFzX21hdGNoID0gZnVuY3Rpb24ocGF0dGVybikge1xuICBmb3IgKHZhciBsYXN0Q2hlY2tlZE91dHB1dCA9IHRoaXMuX19pdGVtcy5sZW5ndGggLSAxOyBsYXN0Q2hlY2tlZE91dHB1dCA+PSAwOyBsYXN0Q2hlY2tlZE91dHB1dC0tKSB7XG4gICAgaWYgKHRoaXMuX19pdGVtc1tsYXN0Q2hlY2tlZE91dHB1dF0ubWF0Y2gocGF0dGVybikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS5zZXRfaW5kZW50ID0gZnVuY3Rpb24oaW5kZW50LCBhbGlnbm1lbnQpIHtcbiAgaWYgKHRoaXMuaXNfZW1wdHkoKSkge1xuICAgIHRoaXMuX19pbmRlbnRfY291bnQgPSBpbmRlbnQgfHwgMDtcbiAgICB0aGlzLl9fYWxpZ25tZW50X2NvdW50ID0gYWxpZ25tZW50IHx8IDA7XG4gICAgdGhpcy5fX2NoYXJhY3Rlcl9jb3VudCA9IHRoaXMuX19wYXJlbnQuZ2V0X2luZGVudF9zaXplKHRoaXMuX19pbmRlbnRfY291bnQsIHRoaXMuX19hbGlnbm1lbnRfY291bnQpO1xuICB9XG59O1xuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS5fc2V0X3dyYXBfcG9pbnQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX19wYXJlbnQud3JhcF9saW5lX2xlbmd0aCkge1xuICAgIHRoaXMuX193cmFwX3BvaW50X2luZGV4ID0gdGhpcy5fX2l0ZW1zLmxlbmd0aDtcbiAgICB0aGlzLl9fd3JhcF9wb2ludF9jaGFyYWN0ZXJfY291bnQgPSB0aGlzLl9fY2hhcmFjdGVyX2NvdW50O1xuICAgIHRoaXMuX193cmFwX3BvaW50X2luZGVudF9jb3VudCA9IHRoaXMuX19wYXJlbnQubmV4dF9saW5lLl9faW5kZW50X2NvdW50O1xuICAgIHRoaXMuX193cmFwX3BvaW50X2FsaWdubWVudF9jb3VudCA9IHRoaXMuX19wYXJlbnQubmV4dF9saW5lLl9fYWxpZ25tZW50X2NvdW50O1xuICB9XG59O1xuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS5fc2hvdWxkX3dyYXAgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX193cmFwX3BvaW50X2luZGV4ICYmXG4gICAgdGhpcy5fX2NoYXJhY3Rlcl9jb3VudCA+IHRoaXMuX19wYXJlbnQud3JhcF9saW5lX2xlbmd0aCAmJlxuICAgIHRoaXMuX193cmFwX3BvaW50X2NoYXJhY3Rlcl9jb3VudCA+IHRoaXMuX19wYXJlbnQubmV4dF9saW5lLl9fY2hhcmFjdGVyX2NvdW50O1xufTtcblxuT3V0cHV0TGluZS5wcm90b3R5cGUuX2FsbG93X3dyYXAgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX3Nob3VsZF93cmFwKCkpIHtcbiAgICB0aGlzLl9fcGFyZW50LmFkZF9uZXdfbGluZSgpO1xuICAgIHZhciBuZXh0ID0gdGhpcy5fX3BhcmVudC5jdXJyZW50X2xpbmU7XG4gICAgbmV4dC5zZXRfaW5kZW50KHRoaXMuX193cmFwX3BvaW50X2luZGVudF9jb3VudCwgdGhpcy5fX3dyYXBfcG9pbnRfYWxpZ25tZW50X2NvdW50KTtcbiAgICBuZXh0Ll9faXRlbXMgPSB0aGlzLl9faXRlbXMuc2xpY2UodGhpcy5fX3dyYXBfcG9pbnRfaW5kZXgpO1xuICAgIHRoaXMuX19pdGVtcyA9IHRoaXMuX19pdGVtcy5zbGljZSgwLCB0aGlzLl9fd3JhcF9wb2ludF9pbmRleCk7XG5cbiAgICBuZXh0Ll9fY2hhcmFjdGVyX2NvdW50ICs9IHRoaXMuX19jaGFyYWN0ZXJfY291bnQgLSB0aGlzLl9fd3JhcF9wb2ludF9jaGFyYWN0ZXJfY291bnQ7XG4gICAgdGhpcy5fX2NoYXJhY3Rlcl9jb3VudCA9IHRoaXMuX193cmFwX3BvaW50X2NoYXJhY3Rlcl9jb3VudDtcblxuICAgIGlmIChuZXh0Ll9faXRlbXNbMF0gPT09IFwiIFwiKSB7XG4gICAgICBuZXh0Ll9faXRlbXMuc3BsaWNlKDAsIDEpO1xuICAgICAgbmV4dC5fX2NoYXJhY3Rlcl9jb3VudCAtPSAxO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS5pc19lbXB0eSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fX2l0ZW1zLmxlbmd0aCA9PT0gMDtcbn07XG5cbk91dHB1dExpbmUucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLmlzX2VtcHR5KCkpIHtcbiAgICByZXR1cm4gdGhpcy5fX2l0ZW1zW3RoaXMuX19pdGVtcy5sZW5ndGggLSAxXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuT3V0cHV0TGluZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgdGhpcy5fX2l0ZW1zLnB1c2goaXRlbSk7XG4gIHZhciBsYXN0X25ld2xpbmVfaW5kZXggPSBpdGVtLmxhc3RJbmRleE9mKCdcXG4nKTtcbiAgaWYgKGxhc3RfbmV3bGluZV9pbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLl9fY2hhcmFjdGVyX2NvdW50ID0gaXRlbS5sZW5ndGggLSBsYXN0X25ld2xpbmVfaW5kZXg7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fX2NoYXJhY3Rlcl9jb3VudCArPSBpdGVtLmxlbmd0aDtcbiAgfVxufTtcblxuT3V0cHV0TGluZS5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtID0gbnVsbDtcbiAgaWYgKCF0aGlzLmlzX2VtcHR5KCkpIHtcbiAgICBpdGVtID0gdGhpcy5fX2l0ZW1zLnBvcCgpO1xuICAgIHRoaXMuX19jaGFyYWN0ZXJfY291bnQgLT0gaXRlbS5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIGl0ZW07XG59O1xuXG5cbk91dHB1dExpbmUucHJvdG90eXBlLl9yZW1vdmVfaW5kZW50ID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9faW5kZW50X2NvdW50ID4gMCkge1xuICAgIHRoaXMuX19pbmRlbnRfY291bnQgLT0gMTtcbiAgICB0aGlzLl9fY2hhcmFjdGVyX2NvdW50IC09IHRoaXMuX19wYXJlbnQuaW5kZW50X3NpemU7XG4gIH1cbn07XG5cbk91dHB1dExpbmUucHJvdG90eXBlLl9yZW1vdmVfd3JhcF9pbmRlbnQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX193cmFwX3BvaW50X2luZGVudF9jb3VudCA+IDApIHtcbiAgICB0aGlzLl9fd3JhcF9wb2ludF9pbmRlbnRfY291bnQgLT0gMTtcbiAgfVxufTtcbk91dHB1dExpbmUucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbigpIHtcbiAgd2hpbGUgKHRoaXMubGFzdCgpID09PSAnICcpIHtcbiAgICB0aGlzLl9faXRlbXMucG9wKCk7XG4gICAgdGhpcy5fX2NoYXJhY3Rlcl9jb3VudCAtPSAxO1xuICB9XG59O1xuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGlzLmlzX2VtcHR5KCkpIHtcbiAgICBpZiAodGhpcy5fX3BhcmVudC5pbmRlbnRfZW1wdHlfbGluZXMpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuX19wYXJlbnQuZ2V0X2luZGVudF9zdHJpbmcodGhpcy5fX2luZGVudF9jb3VudCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRoaXMuX19wYXJlbnQuZ2V0X2luZGVudF9zdHJpbmcodGhpcy5fX2luZGVudF9jb3VudCwgdGhpcy5fX2FsaWdubWVudF9jb3VudCk7XG4gICAgcmVzdWx0ICs9IHRoaXMuX19pdGVtcy5qb2luKCcnKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnVuY3Rpb24gSW5kZW50U3RyaW5nQ2FjaGUob3B0aW9ucywgYmFzZUluZGVudFN0cmluZykge1xuICB0aGlzLl9fY2FjaGUgPSBbJyddO1xuICB0aGlzLl9faW5kZW50X3NpemUgPSBvcHRpb25zLmluZGVudF9zaXplO1xuICB0aGlzLl9faW5kZW50X3N0cmluZyA9IG9wdGlvbnMuaW5kZW50X2NoYXI7XG4gIGlmICghb3B0aW9ucy5pbmRlbnRfd2l0aF90YWJzKSB7XG4gICAgdGhpcy5fX2luZGVudF9zdHJpbmcgPSBuZXcgQXJyYXkob3B0aW9ucy5pbmRlbnRfc2l6ZSArIDEpLmpvaW4ob3B0aW9ucy5pbmRlbnRfY2hhcik7XG4gIH1cblxuICAvLyBTZXQgdG8gbnVsbCB0byBjb250aW51ZSBzdXBwb3J0IGZvciBhdXRvIGRldGVjdGlvbiBvZiBiYXNlIGluZGVudFxuICBiYXNlSW5kZW50U3RyaW5nID0gYmFzZUluZGVudFN0cmluZyB8fCAnJztcbiAgaWYgKG9wdGlvbnMuaW5kZW50X2xldmVsID4gMCkge1xuICAgIGJhc2VJbmRlbnRTdHJpbmcgPSBuZXcgQXJyYXkob3B0aW9ucy5pbmRlbnRfbGV2ZWwgKyAxKS5qb2luKHRoaXMuX19pbmRlbnRfc3RyaW5nKTtcbiAgfVxuXG4gIHRoaXMuX19iYXNlX3N0cmluZyA9IGJhc2VJbmRlbnRTdHJpbmc7XG4gIHRoaXMuX19iYXNlX3N0cmluZ19sZW5ndGggPSBiYXNlSW5kZW50U3RyaW5nLmxlbmd0aDtcbn1cblxuSW5kZW50U3RyaW5nQ2FjaGUucHJvdG90eXBlLmdldF9pbmRlbnRfc2l6ZSA9IGZ1bmN0aW9uKGluZGVudCwgY29sdW1uKSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLl9fYmFzZV9zdHJpbmdfbGVuZ3RoO1xuICBjb2x1bW4gPSBjb2x1bW4gfHwgMDtcbiAgaWYgKGluZGVudCA8IDApIHtcbiAgICByZXN1bHQgPSAwO1xuICB9XG4gIHJlc3VsdCArPSBpbmRlbnQgKiB0aGlzLl9faW5kZW50X3NpemU7XG4gIHJlc3VsdCArPSBjb2x1bW47XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5JbmRlbnRTdHJpbmdDYWNoZS5wcm90b3R5cGUuZ2V0X2luZGVudF9zdHJpbmcgPSBmdW5jdGlvbihpbmRlbnRfbGV2ZWwsIGNvbHVtbikge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5fX2Jhc2Vfc3RyaW5nO1xuICBjb2x1bW4gPSBjb2x1bW4gfHwgMDtcbiAgaWYgKGluZGVudF9sZXZlbCA8IDApIHtcbiAgICBpbmRlbnRfbGV2ZWwgPSAwO1xuICAgIHJlc3VsdCA9ICcnO1xuICB9XG4gIGNvbHVtbiArPSBpbmRlbnRfbGV2ZWwgKiB0aGlzLl9faW5kZW50X3NpemU7XG4gIHRoaXMuX19lbnN1cmVfY2FjaGUoY29sdW1uKTtcbiAgcmVzdWx0ICs9IHRoaXMuX19jYWNoZVtjb2x1bW5dO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuSW5kZW50U3RyaW5nQ2FjaGUucHJvdG90eXBlLl9fZW5zdXJlX2NhY2hlID0gZnVuY3Rpb24oY29sdW1uKSB7XG4gIHdoaWxlIChjb2x1bW4gPj0gdGhpcy5fX2NhY2hlLmxlbmd0aCkge1xuICAgIHRoaXMuX19hZGRfY29sdW1uKCk7XG4gIH1cbn07XG5cbkluZGVudFN0cmluZ0NhY2hlLnByb3RvdHlwZS5fX2FkZF9jb2x1bW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIGNvbHVtbiA9IHRoaXMuX19jYWNoZS5sZW5ndGg7XG4gIHZhciBpbmRlbnQgPSAwO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGlzLl9faW5kZW50X3NpemUgJiYgY29sdW1uID49IHRoaXMuX19pbmRlbnRfc2l6ZSkge1xuICAgIGluZGVudCA9IE1hdGguZmxvb3IoY29sdW1uIC8gdGhpcy5fX2luZGVudF9zaXplKTtcbiAgICBjb2x1bW4gLT0gaW5kZW50ICogdGhpcy5fX2luZGVudF9zaXplO1xuICAgIHJlc3VsdCA9IG5ldyBBcnJheShpbmRlbnQgKyAxKS5qb2luKHRoaXMuX19pbmRlbnRfc3RyaW5nKTtcbiAgfVxuICBpZiAoY29sdW1uKSB7XG4gICAgcmVzdWx0ICs9IG5ldyBBcnJheShjb2x1bW4gKyAxKS5qb2luKCcgJyk7XG4gIH1cblxuICB0aGlzLl9fY2FjaGUucHVzaChyZXN1bHQpO1xufTtcblxuZnVuY3Rpb24gT3V0cHV0KG9wdGlvbnMsIGJhc2VJbmRlbnRTdHJpbmcpIHtcbiAgdGhpcy5fX2luZGVudF9jYWNoZSA9IG5ldyBJbmRlbnRTdHJpbmdDYWNoZShvcHRpb25zLCBiYXNlSW5kZW50U3RyaW5nKTtcbiAgdGhpcy5yYXcgPSBmYWxzZTtcbiAgdGhpcy5fZW5kX3dpdGhfbmV3bGluZSA9IG9wdGlvbnMuZW5kX3dpdGhfbmV3bGluZTtcbiAgdGhpcy5pbmRlbnRfc2l6ZSA9IG9wdGlvbnMuaW5kZW50X3NpemU7XG4gIHRoaXMud3JhcF9saW5lX2xlbmd0aCA9IG9wdGlvbnMud3JhcF9saW5lX2xlbmd0aDtcbiAgdGhpcy5pbmRlbnRfZW1wdHlfbGluZXMgPSBvcHRpb25zLmluZGVudF9lbXB0eV9saW5lcztcbiAgdGhpcy5fX2xpbmVzID0gW107XG4gIHRoaXMucHJldmlvdXNfbGluZSA9IG51bGw7XG4gIHRoaXMuY3VycmVudF9saW5lID0gbnVsbDtcbiAgdGhpcy5uZXh0X2xpbmUgPSBuZXcgT3V0cHV0TGluZSh0aGlzKTtcbiAgdGhpcy5zcGFjZV9iZWZvcmVfdG9rZW4gPSBmYWxzZTtcbiAgdGhpcy5ub25fYnJlYWtpbmdfc3BhY2UgPSBmYWxzZTtcbiAgdGhpcy5wcmV2aW91c190b2tlbl93cmFwcGVkID0gZmFsc2U7XG4gIC8vIGluaXRpYWxpemVcbiAgdGhpcy5fX2FkZF9vdXRwdXRsaW5lKCk7XG59XG5cbk91dHB1dC5wcm90b3R5cGUuX19hZGRfb3V0cHV0bGluZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnByZXZpb3VzX2xpbmUgPSB0aGlzLmN1cnJlbnRfbGluZTtcbiAgdGhpcy5jdXJyZW50X2xpbmUgPSB0aGlzLm5leHRfbGluZS5jbG9uZV9lbXB0eSgpO1xuICB0aGlzLl9fbGluZXMucHVzaCh0aGlzLmN1cnJlbnRfbGluZSk7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLmdldF9saW5lX251bWJlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fX2xpbmVzLmxlbmd0aDtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuZ2V0X2luZGVudF9zdHJpbmcgPSBmdW5jdGlvbihpbmRlbnQsIGNvbHVtbikge1xuICByZXR1cm4gdGhpcy5fX2luZGVudF9jYWNoZS5nZXRfaW5kZW50X3N0cmluZyhpbmRlbnQsIGNvbHVtbik7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLmdldF9pbmRlbnRfc2l6ZSA9IGZ1bmN0aW9uKGluZGVudCwgY29sdW1uKSB7XG4gIHJldHVybiB0aGlzLl9faW5kZW50X2NhY2hlLmdldF9pbmRlbnRfc2l6ZShpbmRlbnQsIGNvbHVtbik7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLmlzX2VtcHR5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhdGhpcy5wcmV2aW91c19saW5lICYmIHRoaXMuY3VycmVudF9saW5lLmlzX2VtcHR5KCk7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLmFkZF9uZXdfbGluZSA9IGZ1bmN0aW9uKGZvcmNlX25ld2xpbmUpIHtcbiAgLy8gbmV2ZXIgbmV3bGluZSBhdCB0aGUgc3RhcnQgb2YgZmlsZVxuICAvLyBvdGhlcndpc2UsIG5ld2xpbmUgb25seSBpZiB3ZSBkaWRuJ3QganVzdCBhZGQgb25lIG9yIHdlJ3JlIGZvcmNlZFxuICBpZiAodGhpcy5pc19lbXB0eSgpIHx8XG4gICAgKCFmb3JjZV9uZXdsaW5lICYmIHRoaXMuanVzdF9hZGRlZF9uZXdsaW5lKCkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gaWYgcmF3IG91dHB1dCBpcyBlbmFibGVkLCBkb24ndCBwcmludCBhZGRpdGlvbmFsIG5ld2xpbmVzLFxuICAvLyBidXQgc3RpbGwgcmV0dXJuIFRydWUgYXMgdGhvdWdoIHlvdSBoYWRcbiAgaWYgKCF0aGlzLnJhdykge1xuICAgIHRoaXMuX19hZGRfb3V0cHV0bGluZSgpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5nZXRfY29kZSA9IGZ1bmN0aW9uKGVvbCkge1xuICB0aGlzLnRyaW0odHJ1ZSk7XG5cbiAgLy8gaGFuZGxlIHNvbWUgZWRnZSBjYXNlcyB3aGVyZSB0aGUgbGFzdCB0b2tlbnNcbiAgLy8gaGFzIHRleHQgdGhhdCBlbmRzIHdpdGggbmV3bGluZShzKVxuICB2YXIgbGFzdF9pdGVtID0gdGhpcy5jdXJyZW50X2xpbmUucG9wKCk7XG4gIGlmIChsYXN0X2l0ZW0pIHtcbiAgICBpZiAobGFzdF9pdGVtW2xhc3RfaXRlbS5sZW5ndGggLSAxXSA9PT0gJ1xcbicpIHtcbiAgICAgIGxhc3RfaXRlbSA9IGxhc3RfaXRlbS5yZXBsYWNlKC9cXG4rJC9nLCAnJyk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudF9saW5lLnB1c2gobGFzdF9pdGVtKTtcbiAgfVxuXG4gIGlmICh0aGlzLl9lbmRfd2l0aF9uZXdsaW5lKSB7XG4gICAgdGhpcy5fX2FkZF9vdXRwdXRsaW5lKCk7XG4gIH1cblxuICB2YXIgc3dlZXRfY29kZSA9IHRoaXMuX19saW5lcy5qb2luKCdcXG4nKTtcblxuICBpZiAoZW9sICE9PSAnXFxuJykge1xuICAgIHN3ZWV0X2NvZGUgPSBzd2VldF9jb2RlLnJlcGxhY2UoL1tcXG5dL2csIGVvbCk7XG4gIH1cbiAgcmV0dXJuIHN3ZWV0X2NvZGU7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLnNldF93cmFwX3BvaW50ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY3VycmVudF9saW5lLl9zZXRfd3JhcF9wb2ludCgpO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5zZXRfaW5kZW50ID0gZnVuY3Rpb24oaW5kZW50LCBhbGlnbm1lbnQpIHtcbiAgaW5kZW50ID0gaW5kZW50IHx8IDA7XG4gIGFsaWdubWVudCA9IGFsaWdubWVudCB8fCAwO1xuXG4gIC8vIE5leHQgbGluZSBzdG9yZXMgYWxpZ25tZW50IHZhbHVlc1xuICB0aGlzLm5leHRfbGluZS5zZXRfaW5kZW50KGluZGVudCwgYWxpZ25tZW50KTtcblxuICAvLyBOZXZlciBpbmRlbnQgeW91ciBmaXJzdCBvdXRwdXQgaW5kZW50IGF0IHRoZSBzdGFydCBvZiB0aGUgZmlsZVxuICBpZiAodGhpcy5fX2xpbmVzLmxlbmd0aCA+IDEpIHtcbiAgICB0aGlzLmN1cnJlbnRfbGluZS5zZXRfaW5kZW50KGluZGVudCwgYWxpZ25tZW50KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHRoaXMuY3VycmVudF9saW5lLnNldF9pbmRlbnQoKTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5hZGRfcmF3X3Rva2VuID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgZm9yICh2YXIgeCA9IDA7IHggPCB0b2tlbi5uZXdsaW5lczsgeCsrKSB7XG4gICAgdGhpcy5fX2FkZF9vdXRwdXRsaW5lKCk7XG4gIH1cbiAgdGhpcy5jdXJyZW50X2xpbmUuc2V0X2luZGVudCgtMSk7XG4gIHRoaXMuY3VycmVudF9saW5lLnB1c2godG9rZW4ud2hpdGVzcGFjZV9iZWZvcmUpO1xuICB0aGlzLmN1cnJlbnRfbGluZS5wdXNoKHRva2VuLnRleHQpO1xuICB0aGlzLnNwYWNlX2JlZm9yZV90b2tlbiA9IGZhbHNlO1xuICB0aGlzLm5vbl9icmVha2luZ19zcGFjZSA9IGZhbHNlO1xuICB0aGlzLnByZXZpb3VzX3Rva2VuX3dyYXBwZWQgPSBmYWxzZTtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuYWRkX3Rva2VuID0gZnVuY3Rpb24ocHJpbnRhYmxlX3Rva2VuKSB7XG4gIHRoaXMuX19hZGRfc3BhY2VfYmVmb3JlX3Rva2VuKCk7XG4gIHRoaXMuY3VycmVudF9saW5lLnB1c2gocHJpbnRhYmxlX3Rva2VuKTtcbiAgdGhpcy5zcGFjZV9iZWZvcmVfdG9rZW4gPSBmYWxzZTtcbiAgdGhpcy5ub25fYnJlYWtpbmdfc3BhY2UgPSBmYWxzZTtcbiAgdGhpcy5wcmV2aW91c190b2tlbl93cmFwcGVkID0gdGhpcy5jdXJyZW50X2xpbmUuX2FsbG93X3dyYXAoKTtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuX19hZGRfc3BhY2VfYmVmb3JlX3Rva2VuID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnNwYWNlX2JlZm9yZV90b2tlbiAmJiAhdGhpcy5qdXN0X2FkZGVkX25ld2xpbmUoKSkge1xuICAgIGlmICghdGhpcy5ub25fYnJlYWtpbmdfc3BhY2UpIHtcbiAgICAgIHRoaXMuc2V0X3dyYXBfcG9pbnQoKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50X2xpbmUucHVzaCgnICcpO1xuICB9XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLnJlbW92ZV9pbmRlbnQgPSBmdW5jdGlvbihpbmRleCkge1xuICB2YXIgb3V0cHV0X2xlbmd0aCA9IHRoaXMuX19saW5lcy5sZW5ndGg7XG4gIHdoaWxlIChpbmRleCA8IG91dHB1dF9sZW5ndGgpIHtcbiAgICB0aGlzLl9fbGluZXNbaW5kZXhdLl9yZW1vdmVfaW5kZW50KCk7XG4gICAgaW5kZXgrKztcbiAgfVxuICB0aGlzLmN1cnJlbnRfbGluZS5fcmVtb3ZlX3dyYXBfaW5kZW50KCk7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbihlYXRfbmV3bGluZXMpIHtcbiAgZWF0X25ld2xpbmVzID0gKGVhdF9uZXdsaW5lcyA9PT0gdW5kZWZpbmVkKSA/IGZhbHNlIDogZWF0X25ld2xpbmVzO1xuXG4gIHRoaXMuY3VycmVudF9saW5lLnRyaW0oKTtcblxuICB3aGlsZSAoZWF0X25ld2xpbmVzICYmIHRoaXMuX19saW5lcy5sZW5ndGggPiAxICYmXG4gICAgdGhpcy5jdXJyZW50X2xpbmUuaXNfZW1wdHkoKSkge1xuICAgIHRoaXMuX19saW5lcy5wb3AoKTtcbiAgICB0aGlzLmN1cnJlbnRfbGluZSA9IHRoaXMuX19saW5lc1t0aGlzLl9fbGluZXMubGVuZ3RoIC0gMV07XG4gICAgdGhpcy5jdXJyZW50X2xpbmUudHJpbSgpO1xuICB9XG5cbiAgdGhpcy5wcmV2aW91c19saW5lID0gdGhpcy5fX2xpbmVzLmxlbmd0aCA+IDEgP1xuICAgIHRoaXMuX19saW5lc1t0aGlzLl9fbGluZXMubGVuZ3RoIC0gMl0gOiBudWxsO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5qdXN0X2FkZGVkX25ld2xpbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY3VycmVudF9saW5lLmlzX2VtcHR5KCk7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLmp1c3RfYWRkZWRfYmxhbmtsaW5lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmlzX2VtcHR5KCkgfHxcbiAgICAodGhpcy5jdXJyZW50X2xpbmUuaXNfZW1wdHkoKSAmJiB0aGlzLnByZXZpb3VzX2xpbmUuaXNfZW1wdHkoKSk7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLmVuc3VyZV9lbXB0eV9saW5lX2Fib3ZlID0gZnVuY3Rpb24oc3RhcnRzX3dpdGgsIGVuZHNfd2l0aCkge1xuICB2YXIgaW5kZXggPSB0aGlzLl9fbGluZXMubGVuZ3RoIC0gMjtcbiAgd2hpbGUgKGluZGV4ID49IDApIHtcbiAgICB2YXIgcG90ZW50aWFsRW1wdHlMaW5lID0gdGhpcy5fX2xpbmVzW2luZGV4XTtcbiAgICBpZiAocG90ZW50aWFsRW1wdHlMaW5lLmlzX2VtcHR5KCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSBpZiAocG90ZW50aWFsRW1wdHlMaW5lLml0ZW0oMCkuaW5kZXhPZihzdGFydHNfd2l0aCkgIT09IDAgJiZcbiAgICAgIHBvdGVudGlhbEVtcHR5TGluZS5pdGVtKC0xKSAhPT0gZW5kc193aXRoKSB7XG4gICAgICB0aGlzLl9fbGluZXMuc3BsaWNlKGluZGV4ICsgMSwgMCwgbmV3IE91dHB1dExpbmUodGhpcykpO1xuICAgICAgdGhpcy5wcmV2aW91c19saW5lID0gdGhpcy5fX2xpbmVzW3RoaXMuX19saW5lcy5sZW5ndGggLSAyXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpbmRleC0tO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5PdXRwdXQgPSBPdXRwdXQ7XG5cblxuLyoqKi8gfSksXG4vKiAzICovLFxuLyogNCAqLyxcbi8qIDUgKi8sXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLypcblxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG4qL1xuXG5cblxuZnVuY3Rpb24gT3B0aW9ucyhvcHRpb25zLCBtZXJnZV9jaGlsZF9maWVsZCkge1xuICB0aGlzLnJhd19vcHRpb25zID0gX21lcmdlT3B0cyhvcHRpb25zLCBtZXJnZV9jaGlsZF9maWVsZCk7XG5cbiAgLy8gU3VwcG9ydCBwYXNzaW5nIHRoZSBzb3VyY2UgdGV4dCBiYWNrIHdpdGggbm8gY2hhbmdlXG4gIHRoaXMuZGlzYWJsZWQgPSB0aGlzLl9nZXRfYm9vbGVhbignZGlzYWJsZWQnKTtcblxuICB0aGlzLmVvbCA9IHRoaXMuX2dldF9jaGFyYWN0ZXJzKCdlb2wnLCAnYXV0bycpO1xuICB0aGlzLmVuZF93aXRoX25ld2xpbmUgPSB0aGlzLl9nZXRfYm9vbGVhbignZW5kX3dpdGhfbmV3bGluZScpO1xuICB0aGlzLmluZGVudF9zaXplID0gdGhpcy5fZ2V0X251bWJlcignaW5kZW50X3NpemUnLCA0KTtcbiAgdGhpcy5pbmRlbnRfY2hhciA9IHRoaXMuX2dldF9jaGFyYWN0ZXJzKCdpbmRlbnRfY2hhcicsICcgJyk7XG4gIHRoaXMuaW5kZW50X2xldmVsID0gdGhpcy5fZ2V0X251bWJlcignaW5kZW50X2xldmVsJyk7XG5cbiAgdGhpcy5wcmVzZXJ2ZV9uZXdsaW5lcyA9IHRoaXMuX2dldF9ib29sZWFuKCdwcmVzZXJ2ZV9uZXdsaW5lcycsIHRydWUpO1xuICB0aGlzLm1heF9wcmVzZXJ2ZV9uZXdsaW5lcyA9IHRoaXMuX2dldF9udW1iZXIoJ21heF9wcmVzZXJ2ZV9uZXdsaW5lcycsIDMyNzg2KTtcbiAgaWYgKCF0aGlzLnByZXNlcnZlX25ld2xpbmVzKSB7XG4gICAgdGhpcy5tYXhfcHJlc2VydmVfbmV3bGluZXMgPSAwO1xuICB9XG5cbiAgdGhpcy5pbmRlbnRfd2l0aF90YWJzID0gdGhpcy5fZ2V0X2Jvb2xlYW4oJ2luZGVudF93aXRoX3RhYnMnLCB0aGlzLmluZGVudF9jaGFyID09PSAnXFx0Jyk7XG4gIGlmICh0aGlzLmluZGVudF93aXRoX3RhYnMpIHtcbiAgICB0aGlzLmluZGVudF9jaGFyID0gJ1xcdCc7XG5cbiAgICAvLyBpbmRlbnRfc2l6ZSBiZWhhdmlvciBjaGFuZ2VkIGFmdGVyIDEuOC42XG4gICAgLy8gSXQgdXNlZCB0byBiZSB0aGF0IGluZGVudF9zaXplIHdvdWxkIGJlXG4gICAgLy8gc2V0IHRvIDEgZm9yIGluZGVudF93aXRoX3RhYnMuIFRoYXQgaXMgbm8gbG9uZ2VyIG5lZWRlZCBhbmRcbiAgICAvLyBhY3R1YWxseSBkb2Vzbid0IG1ha2Ugc2Vuc2UgLSB3aHkgbm90IHVzZSBzcGFjZXM/IEZ1cnRoZXIsXG4gICAgLy8gdGhhdCBtaWdodCBwcm9kdWNlIHVuZXhwZWN0ZWQgYmVoYXZpb3IgLSB0YWJzIGJlaW5nIHVzZWRcbiAgICAvLyBmb3Igc2luZ2xlLWNvbHVtbiBhbGlnbm1lbnQuIFNvLCB3aGVuIGluZGVudF93aXRoX3RhYnMgaXMgdHJ1ZVxuICAgIC8vIGFuZCBpbmRlbnRfc2l6ZSBpcyAxLCByZXNldCBpbmRlbnRfc2l6ZSB0byA0LlxuICAgIGlmICh0aGlzLmluZGVudF9zaXplID09PSAxKSB7XG4gICAgICB0aGlzLmluZGVudF9zaXplID0gNDtcbiAgICB9XG4gIH1cblxuICAvLyBCYWNrd2FyZHMgY29tcGF0IHdpdGggMS4zLnhcbiAgdGhpcy53cmFwX2xpbmVfbGVuZ3RoID0gdGhpcy5fZ2V0X251bWJlcignd3JhcF9saW5lX2xlbmd0aCcsIHRoaXMuX2dldF9udW1iZXIoJ21heF9jaGFyJykpO1xuXG4gIHRoaXMuaW5kZW50X2VtcHR5X2xpbmVzID0gdGhpcy5fZ2V0X2Jvb2xlYW4oJ2luZGVudF9lbXB0eV9saW5lcycpO1xuXG4gIC8vIHZhbGlkIHRlbXBsYXRpbmcgbGFuZ3VhZ2VzIFsnZGphbmdvJywgJ2VyYicsICdoYW5kbGViYXJzJywgJ3BocCcsICdzbWFydHknXVxuICAvLyBGb3Igbm93LCAnYXV0bycgPSBhbGwgb2ZmIGZvciBqYXZhc2NyaXB0LCBhbGwgb24gZm9yIGh0bWwgKGFuZCBpbmxpbmUgamF2YXNjcmlwdCkuXG4gIC8vIG90aGVyIHZhbHVlcyBpZ25vcmVkXG4gIHRoaXMudGVtcGxhdGluZyA9IHRoaXMuX2dldF9zZWxlY3Rpb25fbGlzdCgndGVtcGxhdGluZycsIFsnYXV0bycsICdub25lJywgJ2RqYW5nbycsICdlcmInLCAnaGFuZGxlYmFycycsICdwaHAnLCAnc21hcnR5J10sIFsnYXV0byddKTtcbn1cblxuT3B0aW9ucy5wcm90b3R5cGUuX2dldF9hcnJheSA9IGZ1bmN0aW9uKG5hbWUsIGRlZmF1bHRfdmFsdWUpIHtcbiAgdmFyIG9wdGlvbl92YWx1ZSA9IHRoaXMucmF3X29wdGlvbnNbbmFtZV07XG4gIHZhciByZXN1bHQgPSBkZWZhdWx0X3ZhbHVlIHx8IFtdO1xuICBpZiAodHlwZW9mIG9wdGlvbl92YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAob3B0aW9uX3ZhbHVlICE9PSBudWxsICYmIHR5cGVvZiBvcHRpb25fdmFsdWUuY29uY2F0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXN1bHQgPSBvcHRpb25fdmFsdWUuY29uY2F0KCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25fdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gb3B0aW9uX3ZhbHVlLnNwbGl0KC9bXmEtekEtWjAtOV9cXC9cXC1dKy8pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5PcHRpb25zLnByb3RvdHlwZS5fZ2V0X2Jvb2xlYW4gPSBmdW5jdGlvbihuYW1lLCBkZWZhdWx0X3ZhbHVlKSB7XG4gIHZhciBvcHRpb25fdmFsdWUgPSB0aGlzLnJhd19vcHRpb25zW25hbWVdO1xuICB2YXIgcmVzdWx0ID0gb3B0aW9uX3ZhbHVlID09PSB1bmRlZmluZWQgPyAhIWRlZmF1bHRfdmFsdWUgOiAhIW9wdGlvbl92YWx1ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbk9wdGlvbnMucHJvdG90eXBlLl9nZXRfY2hhcmFjdGVycyA9IGZ1bmN0aW9uKG5hbWUsIGRlZmF1bHRfdmFsdWUpIHtcbiAgdmFyIG9wdGlvbl92YWx1ZSA9IHRoaXMucmF3X29wdGlvbnNbbmFtZV07XG4gIHZhciByZXN1bHQgPSBkZWZhdWx0X3ZhbHVlIHx8ICcnO1xuICBpZiAodHlwZW9mIG9wdGlvbl92YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSBvcHRpb25fdmFsdWUucmVwbGFjZSgvXFxcXHIvLCAnXFxyJykucmVwbGFjZSgvXFxcXG4vLCAnXFxuJykucmVwbGFjZSgvXFxcXHQvLCAnXFx0Jyk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbk9wdGlvbnMucHJvdG90eXBlLl9nZXRfbnVtYmVyID0gZnVuY3Rpb24obmFtZSwgZGVmYXVsdF92YWx1ZSkge1xuICB2YXIgb3B0aW9uX3ZhbHVlID0gdGhpcy5yYXdfb3B0aW9uc1tuYW1lXTtcbiAgZGVmYXVsdF92YWx1ZSA9IHBhcnNlSW50KGRlZmF1bHRfdmFsdWUsIDEwKTtcbiAgaWYgKGlzTmFOKGRlZmF1bHRfdmFsdWUpKSB7XG4gICAgZGVmYXVsdF92YWx1ZSA9IDA7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHBhcnNlSW50KG9wdGlvbl92YWx1ZSwgMTApO1xuICBpZiAoaXNOYU4ocmVzdWx0KSkge1xuICAgIHJlc3VsdCA9IGRlZmF1bHRfdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbk9wdGlvbnMucHJvdG90eXBlLl9nZXRfc2VsZWN0aW9uID0gZnVuY3Rpb24obmFtZSwgc2VsZWN0aW9uX2xpc3QsIGRlZmF1bHRfdmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2dldF9zZWxlY3Rpb25fbGlzdChuYW1lLCBzZWxlY3Rpb25fbGlzdCwgZGVmYXVsdF92YWx1ZSk7XG4gIGlmIChyZXN1bHQubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJJbnZhbGlkIE9wdGlvbiBWYWx1ZTogVGhlIG9wdGlvbiAnXCIgKyBuYW1lICsgXCInIGNhbiBvbmx5IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcXG5cIiArXG4gICAgICBzZWxlY3Rpb25fbGlzdCArIFwiXFxuWW91IHBhc3NlZCBpbjogJ1wiICsgdGhpcy5yYXdfb3B0aW9uc1tuYW1lXSArIFwiJ1wiKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHRbMF07XG59O1xuXG5cbk9wdGlvbnMucHJvdG90eXBlLl9nZXRfc2VsZWN0aW9uX2xpc3QgPSBmdW5jdGlvbihuYW1lLCBzZWxlY3Rpb25fbGlzdCwgZGVmYXVsdF92YWx1ZSkge1xuICBpZiAoIXNlbGVjdGlvbl9saXN0IHx8IHNlbGVjdGlvbl9saXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlNlbGVjdGlvbiBsaXN0IGNhbm5vdCBiZSBlbXB0eS5cIik7XG4gIH1cblxuICBkZWZhdWx0X3ZhbHVlID0gZGVmYXVsdF92YWx1ZSB8fCBbc2VsZWN0aW9uX2xpc3RbMF1dO1xuICBpZiAoIXRoaXMuX2lzX3ZhbGlkX3NlbGVjdGlvbihkZWZhdWx0X3ZhbHVlLCBzZWxlY3Rpb25fbGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIERlZmF1bHQgVmFsdWUhXCIpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2dldF9hcnJheShuYW1lLCBkZWZhdWx0X3ZhbHVlKTtcbiAgaWYgKCF0aGlzLl9pc192YWxpZF9zZWxlY3Rpb24ocmVzdWx0LCBzZWxlY3Rpb25fbGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIkludmFsaWQgT3B0aW9uIFZhbHVlOiBUaGUgb3B0aW9uICdcIiArIG5hbWUgKyBcIicgY2FuIGNvbnRhaW4gb25seSB0aGUgZm9sbG93aW5nIHZhbHVlczpcXG5cIiArXG4gICAgICBzZWxlY3Rpb25fbGlzdCArIFwiXFxuWW91IHBhc3NlZCBpbjogJ1wiICsgdGhpcy5yYXdfb3B0aW9uc1tuYW1lXSArIFwiJ1wiKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5PcHRpb25zLnByb3RvdHlwZS5faXNfdmFsaWRfc2VsZWN0aW9uID0gZnVuY3Rpb24ocmVzdWx0LCBzZWxlY3Rpb25fbGlzdCkge1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCAmJiBzZWxlY3Rpb25fbGlzdC5sZW5ndGggJiZcbiAgICAhcmVzdWx0LnNvbWUoZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gc2VsZWN0aW9uX2xpc3QuaW5kZXhPZihpdGVtKSA9PT0gLTE7IH0pO1xufTtcblxuXG4vLyBtZXJnZXMgY2hpbGQgb3B0aW9ucyB1cCB3aXRoIHRoZSBwYXJlbnQgb3B0aW9ucyBvYmplY3Rcbi8vIEV4YW1wbGU6IG9iaiA9IHthOiAxLCBiOiB7YTogMn19XG4vLyAgICAgICAgICBtZXJnZU9wdHMob2JqLCAnYicpXG4vL1xuLy8gICAgICAgICAgUmV0dXJuczoge2E6IDJ9XG5mdW5jdGlvbiBfbWVyZ2VPcHRzKGFsbE9wdGlvbnMsIGNoaWxkRmllbGROYW1lKSB7XG4gIHZhciBmaW5hbE9wdHMgPSB7fTtcbiAgYWxsT3B0aW9ucyA9IF9ub3JtYWxpemVPcHRzKGFsbE9wdGlvbnMpO1xuICB2YXIgbmFtZTtcblxuICBmb3IgKG5hbWUgaW4gYWxsT3B0aW9ucykge1xuICAgIGlmIChuYW1lICE9PSBjaGlsZEZpZWxkTmFtZSkge1xuICAgICAgZmluYWxPcHRzW25hbWVdID0gYWxsT3B0aW9uc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvL21lcmdlIGluIHRoZSBwZXIgdHlwZSBzZXR0aW5ncyBmb3IgdGhlIGNoaWxkRmllbGROYW1lXG4gIGlmIChjaGlsZEZpZWxkTmFtZSAmJiBhbGxPcHRpb25zW2NoaWxkRmllbGROYW1lXSkge1xuICAgIGZvciAobmFtZSBpbiBhbGxPcHRpb25zW2NoaWxkRmllbGROYW1lXSkge1xuICAgICAgZmluYWxPcHRzW25hbWVdID0gYWxsT3B0aW9uc1tjaGlsZEZpZWxkTmFtZV1bbmFtZV07XG4gICAgfVxuICB9XG4gIHJldHVybiBmaW5hbE9wdHM7XG59XG5cbmZ1bmN0aW9uIF9ub3JtYWxpemVPcHRzKG9wdGlvbnMpIHtcbiAgdmFyIGNvbnZlcnRlZE9wdHMgPSB7fTtcbiAgdmFyIGtleTtcblxuICBmb3IgKGtleSBpbiBvcHRpb25zKSB7XG4gICAgdmFyIG5ld0tleSA9IGtleS5yZXBsYWNlKC8tL2csIFwiX1wiKTtcbiAgICBjb252ZXJ0ZWRPcHRzW25ld0tleV0gPSBvcHRpb25zW2tleV07XG4gIH1cbiAgcmV0dXJuIGNvbnZlcnRlZE9wdHM7XG59XG5cbm1vZHVsZS5leHBvcnRzLk9wdGlvbnMgPSBPcHRpb25zO1xubW9kdWxlLmV4cG9ydHMubm9ybWFsaXplT3B0cyA9IF9ub3JtYWxpemVPcHRzO1xubW9kdWxlLmV4cG9ydHMubWVyZ2VPcHRzID0gX21lcmdlT3B0cztcblxuXG4vKioqLyB9KSxcbi8qIDcgKi8sXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLypcblxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG4qL1xuXG5cblxudmFyIHJlZ2V4cF9oYXNfc3RpY2t5ID0gUmVnRXhwLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3RpY2t5Jyk7XG5cbmZ1bmN0aW9uIElucHV0U2Nhbm5lcihpbnB1dF9zdHJpbmcpIHtcbiAgdGhpcy5fX2lucHV0ID0gaW5wdXRfc3RyaW5nIHx8ICcnO1xuICB0aGlzLl9faW5wdXRfbGVuZ3RoID0gdGhpcy5fX2lucHV0Lmxlbmd0aDtcbiAgdGhpcy5fX3Bvc2l0aW9uID0gMDtcbn1cblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX19wb3NpdGlvbiA9IDA7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLmJhY2sgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX19wb3NpdGlvbiA+IDApIHtcbiAgICB0aGlzLl9fcG9zaXRpb24gLT0gMTtcbiAgfVxufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5oYXNOZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9fcG9zaXRpb24gPCB0aGlzLl9faW5wdXRfbGVuZ3RoO1xufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB2YWwgPSBudWxsO1xuICBpZiAodGhpcy5oYXNOZXh0KCkpIHtcbiAgICB2YWwgPSB0aGlzLl9faW5wdXQuY2hhckF0KHRoaXMuX19wb3NpdGlvbik7XG4gICAgdGhpcy5fX3Bvc2l0aW9uICs9IDE7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn07XG5cbklucHV0U2Nhbm5lci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIHZhciB2YWwgPSBudWxsO1xuICBpbmRleCA9IGluZGV4IHx8IDA7XG4gIGluZGV4ICs9IHRoaXMuX19wb3NpdGlvbjtcbiAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLl9faW5wdXRfbGVuZ3RoKSB7XG4gICAgdmFsID0gdGhpcy5fX2lucHV0LmNoYXJBdChpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn07XG5cbi8vIFRoaXMgaXMgYSBKYXZhU2NyaXB0IG9ubHkgaGVscGVyIGZ1bmN0aW9uIChub3QgaW4gcHl0aG9uKVxuLy8gSmF2YXNjcmlwdCBkb2Vzbid0IGhhdmUgYSBtYXRjaCBtZXRob2Rcbi8vIGFuZCBub3QgYWxsIGltcGxlbWVudGF0aW9uIHN1cHBvcnQgXCJzdGlja3lcIiBmbGFnLlxuLy8gSWYgdGhleSBkbyBub3Qgc3VwcG9ydCBzdGlja3kgdGhlbiBib3RoIHRoaXMubWF0Y2goKSBhbmQgdGhpcy50ZXN0KCkgbWV0aG9kXG4vLyBtdXN0IGdldCB0aGUgbWF0Y2ggYW5kIGNoZWNrIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2guXG4vLyBJZiBzdGlja3kgaXMgc3VwcG9ydGVkIGFuZCBzZXQsIHRoaXMgbWV0aG9kIHdpbGwgdXNlIGl0LlxuLy8gT3RoZXJ3aXNlIGl0IHdpbGwgY2hlY2sgdGhhdCBnbG9iYWwgaXMgc2V0LCBhbmQgZmFsbCBiYWNrIHRvIHRoZSBzbG93ZXIgbWV0aG9kLlxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5fX21hdGNoID0gZnVuY3Rpb24ocGF0dGVybiwgaW5kZXgpIHtcbiAgcGF0dGVybi5sYXN0SW5kZXggPSBpbmRleDtcbiAgdmFyIHBhdHRlcm5fbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy5fX2lucHV0KTtcblxuICBpZiAocGF0dGVybl9tYXRjaCAmJiAhKHJlZ2V4cF9oYXNfc3RpY2t5ICYmIHBhdHRlcm4uc3RpY2t5KSkge1xuICAgIGlmIChwYXR0ZXJuX21hdGNoLmluZGV4ICE9PSBpbmRleCkge1xuICAgICAgcGF0dGVybl9tYXRjaCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdHRlcm5fbWF0Y2g7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbihwYXR0ZXJuLCBpbmRleCkge1xuICBpbmRleCA9IGluZGV4IHx8IDA7XG4gIGluZGV4ICs9IHRoaXMuX19wb3NpdGlvbjtcblxuICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuX19pbnB1dF9sZW5ndGgpIHtcbiAgICByZXR1cm4gISF0aGlzLl9fbWF0Y2gocGF0dGVybiwgaW5kZXgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS50ZXN0Q2hhciA9IGZ1bmN0aW9uKHBhdHRlcm4sIGluZGV4KSB7XG4gIC8vIHRlc3Qgb25lIGNoYXJhY3RlciByZWdleCBtYXRjaFxuICB2YXIgdmFsID0gdGhpcy5wZWVrKGluZGV4KTtcbiAgcGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHBhdHRlcm4udGVzdCh2YWwpO1xufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uKHBhdHRlcm4pIHtcbiAgdmFyIHBhdHRlcm5fbWF0Y2ggPSB0aGlzLl9fbWF0Y2gocGF0dGVybiwgdGhpcy5fX3Bvc2l0aW9uKTtcbiAgaWYgKHBhdHRlcm5fbWF0Y2gpIHtcbiAgICB0aGlzLl9fcG9zaXRpb24gKz0gcGF0dGVybl9tYXRjaFswXS5sZW5ndGg7XG4gIH0gZWxzZSB7XG4gICAgcGF0dGVybl9tYXRjaCA9IG51bGw7XG4gIH1cbiAgcmV0dXJuIHBhdHRlcm5fbWF0Y2g7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbihzdGFydGluZ19wYXR0ZXJuLCB1bnRpbF9wYXR0ZXJuLCB1bnRpbF9hZnRlcikge1xuICB2YXIgdmFsID0gJyc7XG4gIHZhciBtYXRjaDtcbiAgaWYgKHN0YXJ0aW5nX3BhdHRlcm4pIHtcbiAgICBtYXRjaCA9IHRoaXMubWF0Y2goc3RhcnRpbmdfcGF0dGVybik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICB2YWwgKz0gbWF0Y2hbMF07XG4gICAgfVxuICB9XG4gIGlmICh1bnRpbF9wYXR0ZXJuICYmIChtYXRjaCB8fCAhc3RhcnRpbmdfcGF0dGVybikpIHtcbiAgICB2YWwgKz0gdGhpcy5yZWFkVW50aWwodW50aWxfcGF0dGVybiwgdW50aWxfYWZ0ZXIpO1xuICB9XG4gIHJldHVybiB2YWw7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLnJlYWRVbnRpbCA9IGZ1bmN0aW9uKHBhdHRlcm4sIHVudGlsX2FmdGVyKSB7XG4gIHZhciB2YWwgPSAnJztcbiAgdmFyIG1hdGNoX2luZGV4ID0gdGhpcy5fX3Bvc2l0aW9uO1xuICBwYXR0ZXJuLmxhc3RJbmRleCA9IHRoaXMuX19wb3NpdGlvbjtcbiAgdmFyIHBhdHRlcm5fbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy5fX2lucHV0KTtcbiAgaWYgKHBhdHRlcm5fbWF0Y2gpIHtcbiAgICBtYXRjaF9pbmRleCA9IHBhdHRlcm5fbWF0Y2guaW5kZXg7XG4gICAgaWYgKHVudGlsX2FmdGVyKSB7XG4gICAgICBtYXRjaF9pbmRleCArPSBwYXR0ZXJuX21hdGNoWzBdLmxlbmd0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbWF0Y2hfaW5kZXggPSB0aGlzLl9faW5wdXRfbGVuZ3RoO1xuICB9XG5cbiAgdmFsID0gdGhpcy5fX2lucHV0LnN1YnN0cmluZyh0aGlzLl9fcG9zaXRpb24sIG1hdGNoX2luZGV4KTtcbiAgdGhpcy5fX3Bvc2l0aW9uID0gbWF0Y2hfaW5kZXg7XG4gIHJldHVybiB2YWw7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLnJlYWRVbnRpbEFmdGVyID0gZnVuY3Rpb24ocGF0dGVybikge1xuICByZXR1cm4gdGhpcy5yZWFkVW50aWwocGF0dGVybiwgdHJ1ZSk7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLmdldF9yZWdleHAgPSBmdW5jdGlvbihwYXR0ZXJuLCBtYXRjaF9mcm9tKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICB2YXIgZmxhZ3MgPSAnZyc7XG4gIGlmIChtYXRjaF9mcm9tICYmIHJlZ2V4cF9oYXNfc3RpY2t5KSB7XG4gICAgZmxhZ3MgPSAneSc7XG4gIH1cbiAgLy8gc3RyaW5ncyBhcmUgY29udmVydGVkIHRvIHJlZ2V4cFxuICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIgJiYgcGF0dGVybiAhPT0gJycpIHtcbiAgICAvLyByZXN1bHQgPSBuZXcgUmVnRXhwKHBhdHRlcm4ucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyksIGZsYWdzKTtcbiAgICByZXN1bHQgPSBuZXcgUmVnRXhwKHBhdHRlcm4sIGZsYWdzKTtcbiAgfSBlbHNlIGlmIChwYXR0ZXJuKSB7XG4gICAgcmVzdWx0ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLnNvdXJjZSwgZmxhZ3MpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLmdldF9saXRlcmFsX3JlZ2V4cCA9IGZ1bmN0aW9uKGxpdGVyYWxfc3RyaW5nKSB7XG4gIHJldHVybiBSZWdFeHAobGl0ZXJhbF9zdHJpbmcucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJykpO1xufTtcblxuLyogY3NzIGJlYXV0aWZpZXIgbGVnYWN5IGhlbHBlcnMgKi9cbklucHV0U2Nhbm5lci5wcm90b3R5cGUucGVla1VudGlsQWZ0ZXIgPSBmdW5jdGlvbihwYXR0ZXJuKSB7XG4gIHZhciBzdGFydCA9IHRoaXMuX19wb3NpdGlvbjtcbiAgdmFyIHZhbCA9IHRoaXMucmVhZFVudGlsQWZ0ZXIocGF0dGVybik7XG4gIHRoaXMuX19wb3NpdGlvbiA9IHN0YXJ0O1xuICByZXR1cm4gdmFsO1xufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5sb29rQmFjayA9IGZ1bmN0aW9uKHRlc3RWYWwpIHtcbiAgdmFyIHN0YXJ0ID0gdGhpcy5fX3Bvc2l0aW9uIC0gMTtcbiAgcmV0dXJuIHN0YXJ0ID49IHRlc3RWYWwubGVuZ3RoICYmIHRoaXMuX19pbnB1dC5zdWJzdHJpbmcoc3RhcnQgLSB0ZXN0VmFsLmxlbmd0aCwgc3RhcnQpXG4gICAgLnRvTG93ZXJDYXNlKCkgPT09IHRlc3RWYWw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5JbnB1dFNjYW5uZXIgPSBJbnB1dFNjYW5uZXI7XG5cblxuLyoqKi8gfSksXG4vKiA5ICovLFxuLyogMTAgKi8sXG4vKiAxMSAqLyxcbi8qIDEyICovLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxuLypqc2hpbnQgbm9kZTp0cnVlICovXG4vKlxuXG4gIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gIENvcHlyaWdodCAoYykgMjAwNy0yMDE4IEVpbmFyIExpZWxtYW5pcywgTGlhbSBOZXdtYW4sIGFuZCBjb250cmlidXRvcnMuXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICBTT0ZUV0FSRS5cbiovXG5cblxuXG5mdW5jdGlvbiBEaXJlY3RpdmVzKHN0YXJ0X2Jsb2NrX3BhdHRlcm4sIGVuZF9ibG9ja19wYXR0ZXJuKSB7XG4gIHN0YXJ0X2Jsb2NrX3BhdHRlcm4gPSB0eXBlb2Ygc3RhcnRfYmxvY2tfcGF0dGVybiA9PT0gJ3N0cmluZycgPyBzdGFydF9ibG9ja19wYXR0ZXJuIDogc3RhcnRfYmxvY2tfcGF0dGVybi5zb3VyY2U7XG4gIGVuZF9ibG9ja19wYXR0ZXJuID0gdHlwZW9mIGVuZF9ibG9ja19wYXR0ZXJuID09PSAnc3RyaW5nJyA/IGVuZF9ibG9ja19wYXR0ZXJuIDogZW5kX2Jsb2NrX3BhdHRlcm4uc291cmNlO1xuICB0aGlzLl9fZGlyZWN0aXZlc19ibG9ja19wYXR0ZXJuID0gbmV3IFJlZ0V4cChzdGFydF9ibG9ja19wYXR0ZXJuICsgLyBiZWF1dGlmeSggXFx3K1s6XVxcdyspKyAvLnNvdXJjZSArIGVuZF9ibG9ja19wYXR0ZXJuLCAnZycpO1xuICB0aGlzLl9fZGlyZWN0aXZlX3BhdHRlcm4gPSAvIChcXHcrKVs6XShcXHcrKS9nO1xuXG4gIHRoaXMuX19kaXJlY3RpdmVzX2VuZF9pZ25vcmVfcGF0dGVybiA9IG5ldyBSZWdFeHAoc3RhcnRfYmxvY2tfcGF0dGVybiArIC9cXHNiZWF1dGlmeVxcc2lnbm9yZTplbmRcXHMvLnNvdXJjZSArIGVuZF9ibG9ja19wYXR0ZXJuLCAnZycpO1xufVxuXG5EaXJlY3RpdmVzLnByb3RvdHlwZS5nZXRfZGlyZWN0aXZlcyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgaWYgKCF0ZXh0Lm1hdGNoKHRoaXMuX19kaXJlY3RpdmVzX2Jsb2NrX3BhdHRlcm4pKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgZGlyZWN0aXZlcyA9IHt9O1xuICB0aGlzLl9fZGlyZWN0aXZlX3BhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgdmFyIGRpcmVjdGl2ZV9tYXRjaCA9IHRoaXMuX19kaXJlY3RpdmVfcGF0dGVybi5leGVjKHRleHQpO1xuXG4gIHdoaWxlIChkaXJlY3RpdmVfbWF0Y2gpIHtcbiAgICBkaXJlY3RpdmVzW2RpcmVjdGl2ZV9tYXRjaFsxXV0gPSBkaXJlY3RpdmVfbWF0Y2hbMl07XG4gICAgZGlyZWN0aXZlX21hdGNoID0gdGhpcy5fX2RpcmVjdGl2ZV9wYXR0ZXJuLmV4ZWModGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aXZlcztcbn07XG5cbkRpcmVjdGl2ZXMucHJvdG90eXBlLnJlYWRJZ25vcmVkID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0LnJlYWRVbnRpbEFmdGVyKHRoaXMuX19kaXJlY3RpdmVzX2VuZF9pZ25vcmVfcGF0dGVybik7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzLkRpcmVjdGl2ZXMgPSBEaXJlY3RpdmVzO1xuXG5cbi8qKiovIH0pLFxuLyogMTQgKi8sXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLypcblxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG4qL1xuXG5cblxudmFyIEJlYXV0aWZpZXIgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxNikuQmVhdXRpZmllciksXG4gIE9wdGlvbnMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxNykuT3B0aW9ucyk7XG5cbmZ1bmN0aW9uIGNzc19iZWF1dGlmeShzb3VyY2VfdGV4dCwgb3B0aW9ucykge1xuICB2YXIgYmVhdXRpZmllciA9IG5ldyBCZWF1dGlmaWVyKHNvdXJjZV90ZXh0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGJlYXV0aWZpZXIuYmVhdXRpZnkoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjc3NfYmVhdXRpZnk7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IE9wdGlvbnMoKTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAxNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLypcblxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG4qL1xuXG5cblxudmFyIE9wdGlvbnMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxNykuT3B0aW9ucyk7XG52YXIgT3V0cHV0ID0gKF9fd2VicGFja19yZXF1aXJlX18oMikuT3V0cHV0KTtcbnZhciBJbnB1dFNjYW5uZXIgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg4KS5JbnB1dFNjYW5uZXIpO1xudmFyIERpcmVjdGl2ZXMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxMykuRGlyZWN0aXZlcyk7XG5cbnZhciBkaXJlY3RpdmVzX2NvcmUgPSBuZXcgRGlyZWN0aXZlcygvXFwvXFwqLywgL1xcKlxcLy8pO1xuXG52YXIgbGluZUJyZWFrID0gL1xcclxcbnxbXFxyXFxuXS87XG52YXIgYWxsTGluZUJyZWFrcyA9IC9cXHJcXG58W1xcclxcbl0vZztcblxuLy8gdG9rZW5pemVyXG52YXIgd2hpdGVzcGFjZUNoYXIgPSAvXFxzLztcbnZhciB3aGl0ZXNwYWNlUGF0dGVybiA9IC8oPzpcXHN8XFxuKSsvZztcbnZhciBibG9ja19jb21tZW50X3BhdHRlcm4gPSAvXFwvXFwqKD86W1xcc1xcU10qPykoKD86XFwqXFwvKXwkKS9nO1xudmFyIGNvbW1lbnRfcGF0dGVybiA9IC9cXC9cXC8oPzpbXlxcblxcclxcdTIwMjhcXHUyMDI5XSopL2c7XG5cbmZ1bmN0aW9uIEJlYXV0aWZpZXIoc291cmNlX3RleHQsIG9wdGlvbnMpIHtcbiAgdGhpcy5fc291cmNlX3RleHQgPSBzb3VyY2VfdGV4dCB8fCAnJztcbiAgLy8gQWxsb3cgdGhlIHNldHRpbmcgb2YgbGFuZ3VhZ2UvZmlsZS10eXBlIHNwZWNpZmljIG9wdGlvbnNcbiAgLy8gd2l0aCBpbmhlcml0YW5jZSBvZiBvdmVyYWxsIHNldHRpbmdzXG4gIHRoaXMuX29wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcbiAgdGhpcy5fY2ggPSBudWxsO1xuICB0aGlzLl9pbnB1dCA9IG51bGw7XG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0F0LXJ1bGVcbiAgdGhpcy5ORVNURURfQVRfUlVMRSA9IHtcbiAgICBcIkBwYWdlXCI6IHRydWUsXG4gICAgXCJAZm9udC1mYWNlXCI6IHRydWUsXG4gICAgXCJAa2V5ZnJhbWVzXCI6IHRydWUsXG4gICAgLy8gYWxzbyBpbiBDT05ESVRJT05BTF9HUk9VUF9SVUxFIGJlbG93XG4gICAgXCJAbWVkaWFcIjogdHJ1ZSxcbiAgICBcIkBzdXBwb3J0c1wiOiB0cnVlLFxuICAgIFwiQGRvY3VtZW50XCI6IHRydWVcbiAgfTtcbiAgdGhpcy5DT05ESVRJT05BTF9HUk9VUF9SVUxFID0ge1xuICAgIFwiQG1lZGlhXCI6IHRydWUsXG4gICAgXCJAc3VwcG9ydHNcIjogdHJ1ZSxcbiAgICBcIkBkb2N1bWVudFwiOiB0cnVlXG4gIH07XG4gIHRoaXMuTk9OX1NFTUlDT0xPTl9ORVdMSU5FX1BST1BFUlRZID0gW1xuICAgIFwiZ3JpZC10ZW1wbGF0ZS1hcmVhc1wiLFxuICAgIFwiZ3JpZC10ZW1wbGF0ZVwiXG4gIF07XG5cbn1cblxuQmVhdXRpZmllci5wcm90b3R5cGUuZWF0U3RyaW5nID0gZnVuY3Rpb24oZW5kQ2hhcnMpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB0aGlzLl9jaCA9IHRoaXMuX2lucHV0Lm5leHQoKTtcbiAgd2hpbGUgKHRoaXMuX2NoKSB7XG4gICAgcmVzdWx0ICs9IHRoaXMuX2NoO1xuICAgIGlmICh0aGlzLl9jaCA9PT0gXCJcXFxcXCIpIHtcbiAgICAgIHJlc3VsdCArPSB0aGlzLl9pbnB1dC5uZXh0KCk7XG4gICAgfSBlbHNlIGlmIChlbmRDaGFycy5pbmRleE9mKHRoaXMuX2NoKSAhPT0gLTEgfHwgdGhpcy5fY2ggPT09IFwiXFxuXCIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl9jaCA9IHRoaXMuX2lucHV0Lm5leHQoKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gU2tpcHMgYW55IHdoaXRlIHNwYWNlIGluIHRoZSBzb3VyY2UgdGV4dCBmcm9tIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuLy8gV2hlbiBhbGxvd0F0TGVhc3RPbmVOZXdMaW5lIGlzIHRydWUsIHdpbGwgb3V0cHV0IG5ldyBsaW5lcyBmb3IgZWFjaFxuLy8gbmV3bGluZSBjaGFyYWN0ZXIgZm91bmQ7IGlmIHRoZSB1c2VyIGhhcyBwcmVzZXJ2ZV9uZXdsaW5lcyBvZmYsIG9ubHlcbi8vIHRoZSBmaXJzdCBuZXdsaW5lIHdpbGwgYmUgb3V0cHV0XG5CZWF1dGlmaWVyLnByb3RvdHlwZS5lYXRXaGl0ZXNwYWNlID0gZnVuY3Rpb24oYWxsb3dBdExlYXN0T25lTmV3TGluZSkge1xuICB2YXIgcmVzdWx0ID0gd2hpdGVzcGFjZUNoYXIudGVzdCh0aGlzLl9pbnB1dC5wZWVrKCkpO1xuICB2YXIgbmV3bGluZV9jb3VudCA9IDA7XG4gIHdoaWxlICh3aGl0ZXNwYWNlQ2hhci50ZXN0KHRoaXMuX2lucHV0LnBlZWsoKSkpIHtcbiAgICB0aGlzLl9jaCA9IHRoaXMuX2lucHV0Lm5leHQoKTtcbiAgICBpZiAoYWxsb3dBdExlYXN0T25lTmV3TGluZSAmJiB0aGlzLl9jaCA9PT0gJ1xcbicpIHtcbiAgICAgIGlmIChuZXdsaW5lX2NvdW50ID09PSAwIHx8IG5ld2xpbmVfY291bnQgPCB0aGlzLl9vcHRpb25zLm1heF9wcmVzZXJ2ZV9uZXdsaW5lcykge1xuICAgICAgICBuZXdsaW5lX2NvdW50Kys7XG4gICAgICAgIHRoaXMuX291dHB1dC5hZGRfbmV3X2xpbmUodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyBOZXN0ZWQgcHNldWRvLWNsYXNzIGlmIHdlIGFyZSBpbnNpZGVSdWxlXG4vLyBhbmQgdGhlIG5leHQgc3BlY2lhbCBjaGFyYWN0ZXIgZm91bmQgb3BlbnNcbi8vIGEgbmV3IGJsb2NrXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5mb3VuZE5lc3RlZFBzZXVkb0NsYXNzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBvcGVuUGFyZW4gPSAwO1xuICB2YXIgaSA9IDE7XG4gIHZhciBjaCA9IHRoaXMuX2lucHV0LnBlZWsoaSk7XG4gIHdoaWxlIChjaCkge1xuICAgIGlmIChjaCA9PT0gXCJ7XCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY2ggPT09ICcoJykge1xuICAgICAgLy8gcHNldWRvY2xhc3NlcyBjYW4gY29udGFpbiAoKVxuICAgICAgb3BlblBhcmVuICs9IDE7XG4gICAgfSBlbHNlIGlmIChjaCA9PT0gJyknKSB7XG4gICAgICBpZiAob3BlblBhcmVuID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9wZW5QYXJlbiAtPSAxO1xuICAgIH0gZWxzZSBpZiAoY2ggPT09IFwiO1wiIHx8IGNoID09PSBcIn1cIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpKys7XG4gICAgY2ggPSB0aGlzLl9pbnB1dC5wZWVrKGkpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLnByaW50X3N0cmluZyA9IGZ1bmN0aW9uKG91dHB1dF9zdHJpbmcpIHtcbiAgdGhpcy5fb3V0cHV0LnNldF9pbmRlbnQodGhpcy5faW5kZW50TGV2ZWwpO1xuICB0aGlzLl9vdXRwdXQubm9uX2JyZWFraW5nX3NwYWNlID0gdHJ1ZTtcbiAgdGhpcy5fb3V0cHV0LmFkZF90b2tlbihvdXRwdXRfc3RyaW5nKTtcbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLnByZXNlcnZlU2luZ2xlU3BhY2UgPSBmdW5jdGlvbihpc0FmdGVyU3BhY2UpIHtcbiAgaWYgKGlzQWZ0ZXJTcGFjZSkge1xuICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICB9XG59O1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5pbmRlbnQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5faW5kZW50TGV2ZWwrKztcbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLm91dGRlbnQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX2luZGVudExldmVsID4gMCkge1xuICAgIHRoaXMuX2luZGVudExldmVsLS07XG4gIH1cbn07XG5cbi8qX19fX19fX19fX19fX19fX19fX19fLS0tLS0tLS0tLS0tLS0tLS0tLS1fX19fX19fX19fX19fX19fX19fX18qL1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5iZWF1dGlmeSA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fb3B0aW9ucy5kaXNhYmxlZCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VfdGV4dDtcbiAgfVxuXG4gIHZhciBzb3VyY2VfdGV4dCA9IHRoaXMuX3NvdXJjZV90ZXh0O1xuICB2YXIgZW9sID0gdGhpcy5fb3B0aW9ucy5lb2w7XG4gIGlmIChlb2wgPT09ICdhdXRvJykge1xuICAgIGVvbCA9ICdcXG4nO1xuICAgIGlmIChzb3VyY2VfdGV4dCAmJiBsaW5lQnJlYWsudGVzdChzb3VyY2VfdGV4dCB8fCAnJykpIHtcbiAgICAgIGVvbCA9IHNvdXJjZV90ZXh0Lm1hdGNoKGxpbmVCcmVhaylbMF07XG4gICAgfVxuICB9XG5cblxuICAvLyBIQUNLOiBuZXdsaW5lIHBhcnNpbmcgaW5jb25zaXN0ZW50LiBUaGlzIGJydXRlIGZvcmNlIG5vcm1hbGl6ZXMgdGhlIHRoaXMuX2lucHV0LlxuICBzb3VyY2VfdGV4dCA9IHNvdXJjZV90ZXh0LnJlcGxhY2UoYWxsTGluZUJyZWFrcywgJ1xcbicpO1xuXG4gIC8vIHJlc2V0XG4gIHZhciBiYXNlSW5kZW50U3RyaW5nID0gc291cmNlX3RleHQubWF0Y2goL15bXFx0IF0qLylbMF07XG5cbiAgdGhpcy5fb3V0cHV0ID0gbmV3IE91dHB1dCh0aGlzLl9vcHRpb25zLCBiYXNlSW5kZW50U3RyaW5nKTtcbiAgdGhpcy5faW5wdXQgPSBuZXcgSW5wdXRTY2FubmVyKHNvdXJjZV90ZXh0KTtcbiAgdGhpcy5faW5kZW50TGV2ZWwgPSAwO1xuICB0aGlzLl9uZXN0ZWRMZXZlbCA9IDA7XG5cbiAgdGhpcy5fY2ggPSBudWxsO1xuICB2YXIgcGFyZW5MZXZlbCA9IDA7XG5cbiAgdmFyIGluc2lkZVJ1bGUgPSBmYWxzZTtcbiAgLy8gVGhpcyBpcyB0aGUgdmFsdWUgc2lkZSBvZiBhIHByb3BlcnR5IHZhbHVlIHBhaXIgKGJsdWUgaW4gdGhlIGZvbGxvd2luZyBleClcbiAgLy8gbGFiZWwgeyBjb250ZW50OiBibHVlIH1cbiAgdmFyIGluc2lkZVByb3BlcnR5VmFsdWUgPSBmYWxzZTtcbiAgdmFyIGVudGVyaW5nQ29uZGl0aW9uYWxHcm91cCA9IGZhbHNlO1xuICB2YXIgaW5zaWRlQXRFeHRlbmQgPSBmYWxzZTtcbiAgdmFyIGluc2lkZUF0SW1wb3J0ID0gZmFsc2U7XG4gIHZhciBpbnNpZGVTY3NzTWFwID0gZmFsc2U7XG4gIHZhciB0b3BDaGFyYWN0ZXIgPSB0aGlzLl9jaDtcbiAgdmFyIGluc2lkZU5vblNlbWlDb2xvblZhbHVlcyA9IGZhbHNlO1xuICB2YXIgd2hpdGVzcGFjZTtcbiAgdmFyIGlzQWZ0ZXJTcGFjZTtcbiAgdmFyIHByZXZpb3VzX2NoO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgd2hpdGVzcGFjZSA9IHRoaXMuX2lucHV0LnJlYWQod2hpdGVzcGFjZVBhdHRlcm4pO1xuICAgIGlzQWZ0ZXJTcGFjZSA9IHdoaXRlc3BhY2UgIT09ICcnO1xuICAgIHByZXZpb3VzX2NoID0gdG9wQ2hhcmFjdGVyO1xuICAgIHRoaXMuX2NoID0gdGhpcy5faW5wdXQubmV4dCgpO1xuICAgIGlmICh0aGlzLl9jaCA9PT0gJ1xcXFwnICYmIHRoaXMuX2lucHV0Lmhhc05leHQoKSkge1xuICAgICAgdGhpcy5fY2ggKz0gdGhpcy5faW5wdXQubmV4dCgpO1xuICAgIH1cbiAgICB0b3BDaGFyYWN0ZXIgPSB0aGlzLl9jaDtcblxuICAgIGlmICghdGhpcy5fY2gpIHtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY2ggPT09ICcvJyAmJiB0aGlzLl9pbnB1dC5wZWVrKCkgPT09ICcqJykge1xuICAgICAgLy8gLyogY3NzIGNvbW1lbnQgKi9cbiAgICAgIC8vIEFsd2F5cyBzdGFydCBibG9jayBjb21tZW50cyBvbiBhIG5ldyBsaW5lLlxuICAgICAgLy8gVGhpcyBoYW5kbGVzIHNjZW5hcmlvcyB3aGVyZSBhIGJsb2NrIGNvbW1lbnQgaW1tZWRpYXRlbHlcbiAgICAgIC8vIGZvbGxvd3MgYSBwcm9wZXJ0eSBkZWZpbml0aW9uIG9uIHRoZSBzYW1lIGxpbmUgb3Igd2hlcmVcbiAgICAgIC8vIG1pbmlmaWVkIGNvZGUgaXMgYmVpbmcgYmVhdXRpZmllZC5cbiAgICAgIHRoaXMuX291dHB1dC5hZGRfbmV3X2xpbmUoKTtcbiAgICAgIHRoaXMuX2lucHV0LmJhY2soKTtcblxuICAgICAgdmFyIGNvbW1lbnQgPSB0aGlzLl9pbnB1dC5yZWFkKGJsb2NrX2NvbW1lbnRfcGF0dGVybik7XG5cbiAgICAgIC8vIEhhbmRsZSBpZ25vcmUgZGlyZWN0aXZlXG4gICAgICB2YXIgZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXNfY29yZS5nZXRfZGlyZWN0aXZlcyhjb21tZW50KTtcbiAgICAgIGlmIChkaXJlY3RpdmVzICYmIGRpcmVjdGl2ZXMuaWdub3JlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIGNvbW1lbnQgKz0gZGlyZWN0aXZlc19jb3JlLnJlYWRJZ25vcmVkKHRoaXMuX2lucHV0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcmludF9zdHJpbmcoY29tbWVudCk7XG5cbiAgICAgIC8vIEVuc3VyZXMgYW55IG5ldyBsaW5lcyBmb2xsb3dpbmcgdGhlIGNvbW1lbnQgYXJlIHByZXNlcnZlZFxuICAgICAgdGhpcy5lYXRXaGl0ZXNwYWNlKHRydWUpO1xuXG4gICAgICAvLyBCbG9jayBjb21tZW50cyBhcmUgZm9sbG93ZWQgYnkgYSBuZXcgbGluZSBzbyB0aGV5IGRvbid0XG4gICAgICAvLyBzaGFyZSBhIGxpbmUgd2l0aCBvdGhlciBwcm9wZXJ0aWVzXG4gICAgICB0aGlzLl9vdXRwdXQuYWRkX25ld19saW5lKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jaCA9PT0gJy8nICYmIHRoaXMuX2lucHV0LnBlZWsoKSA9PT0gJy8nKSB7XG4gICAgICAvLyAvLyBzaW5nbGUgbGluZSBjb21tZW50XG4gICAgICAvLyBQcmVzZXJ2ZXMgdGhlIHNwYWNlIGJlZm9yZSBhIGNvbW1lbnRcbiAgICAgIC8vIG9uIHRoZSBzYW1lIGxpbmUgYXMgYSBydWxlXG4gICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2lucHV0LmJhY2soKTtcbiAgICAgIHRoaXMucHJpbnRfc3RyaW5nKHRoaXMuX2lucHV0LnJlYWQoY29tbWVudF9wYXR0ZXJuKSk7XG5cbiAgICAgIC8vIEVuc3VyZXMgYW55IG5ldyBsaW5lcyBmb2xsb3dpbmcgdGhlIGNvbW1lbnQgYXJlIHByZXNlcnZlZFxuICAgICAgdGhpcy5lYXRXaGl0ZXNwYWNlKHRydWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY2ggPT09ICdAJyB8fCB0aGlzLl9jaCA9PT0gJyQnKSB7XG4gICAgICB0aGlzLnByZXNlcnZlU2luZ2xlU3BhY2UoaXNBZnRlclNwYWNlKTtcblxuICAgICAgLy8gZGVhbCB3aXRoIGxlc3MgcHJvcGVyeSBtaXhpbnMgQHsuLi59XG4gICAgICBpZiAodGhpcy5faW5wdXQucGVlaygpID09PSAneycpIHtcbiAgICAgICAgdGhpcy5wcmludF9zdHJpbmcodGhpcy5fY2ggKyB0aGlzLmVhdFN0cmluZygnfScpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJpbnRfc3RyaW5nKHRoaXMuX2NoKTtcblxuICAgICAgICAvLyBzdHJpcCB0cmFpbGluZyBzcGFjZSwgaWYgcHJlc2VudCwgZm9yIGhhc2ggcHJvcGVydHkgY2hlY2tzXG4gICAgICAgIHZhciB2YXJpYWJsZU9yUnVsZSA9IHRoaXMuX2lucHV0LnBlZWtVbnRpbEFmdGVyKC9bOiAsO3t9KClbXFxdXFwvPSdcIl0vZyk7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlT3JSdWxlLm1hdGNoKC9bIDpdJC8pKSB7XG4gICAgICAgICAgLy8gd2UgaGF2ZSBhIHZhcmlhYmxlIG9yIHBzZXVkby1jbGFzcywgYWRkIGl0IGFuZCBpbnNlcnQgb25lIHNwYWNlIGJlZm9yZSBjb250aW51aW5nXG4gICAgICAgICAgdmFyaWFibGVPclJ1bGUgPSB0aGlzLmVhdFN0cmluZyhcIjogXCIpLnJlcGxhY2UoL1xccyQvLCAnJyk7XG4gICAgICAgICAgdGhpcy5wcmludF9zdHJpbmcodmFyaWFibGVPclJ1bGUpO1xuICAgICAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyaWFibGVPclJ1bGUgPSB2YXJpYWJsZU9yUnVsZS5yZXBsYWNlKC9cXHMkLywgJycpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZU9yUnVsZSA9PT0gJ2V4dGVuZCcpIHtcbiAgICAgICAgICBpbnNpZGVBdEV4dGVuZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFyaWFibGVPclJ1bGUgPT09ICdpbXBvcnQnKSB7XG4gICAgICAgICAgaW5zaWRlQXRJbXBvcnQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWlnaHQgYmUgYSBuZXN0aW5nIGF0LXJ1bGVcbiAgICAgICAgaWYgKHZhcmlhYmxlT3JSdWxlIGluIHRoaXMuTkVTVEVEX0FUX1JVTEUpIHtcbiAgICAgICAgICB0aGlzLl9uZXN0ZWRMZXZlbCArPSAxO1xuICAgICAgICAgIGlmICh2YXJpYWJsZU9yUnVsZSBpbiB0aGlzLkNPTkRJVElPTkFMX0dST1VQX1JVTEUpIHtcbiAgICAgICAgICAgIGVudGVyaW5nQ29uZGl0aW9uYWxHcm91cCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIG1pZ2h0IGJlIGxlc3MgdmFyaWFibGVcbiAgICAgICAgfSBlbHNlIGlmICghaW5zaWRlUnVsZSAmJiBwYXJlbkxldmVsID09PSAwICYmIHZhcmlhYmxlT3JSdWxlLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICAgICAgICBpbnNpZGVQcm9wZXJ0eVZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmluZGVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jaCA9PT0gJyMnICYmIHRoaXMuX2lucHV0LnBlZWsoKSA9PT0gJ3snKSB7XG4gICAgICB0aGlzLnByZXNlcnZlU2luZ2xlU3BhY2UoaXNBZnRlclNwYWNlKTtcbiAgICAgIHRoaXMucHJpbnRfc3RyaW5nKHRoaXMuX2NoICsgdGhpcy5lYXRTdHJpbmcoJ30nKSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jaCA9PT0gJ3snKSB7XG4gICAgICBpZiAoaW5zaWRlUHJvcGVydHlWYWx1ZSkge1xuICAgICAgICBpbnNpZGVQcm9wZXJ0eVZhbHVlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3V0ZGVudCgpO1xuICAgICAgfVxuXG4gICAgICAvLyB3aGVuIGVudGVyaW5nIGNvbmRpdGlvbmFsIGdyb3Vwcywgb25seSBydWxlc2V0cyBhcmUgYWxsb3dlZFxuICAgICAgaWYgKGVudGVyaW5nQ29uZGl0aW9uYWxHcm91cCkge1xuICAgICAgICBlbnRlcmluZ0NvbmRpdGlvbmFsR3JvdXAgPSBmYWxzZTtcbiAgICAgICAgaW5zaWRlUnVsZSA9ICh0aGlzLl9pbmRlbnRMZXZlbCA+PSB0aGlzLl9uZXN0ZWRMZXZlbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBvdGhlcndpc2UsIGRlY2xhcmF0aW9ucyBhcmUgYWxzbyBhbGxvd2VkXG4gICAgICAgIGluc2lkZVJ1bGUgPSAodGhpcy5faW5kZW50TGV2ZWwgPj0gdGhpcy5fbmVzdGVkTGV2ZWwgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLm5ld2xpbmVfYmV0d2Vlbl9ydWxlcyAmJiBpbnNpZGVSdWxlKSB7XG4gICAgICAgIGlmICh0aGlzLl9vdXRwdXQucHJldmlvdXNfbGluZSAmJiB0aGlzLl9vdXRwdXQucHJldmlvdXNfbGluZS5pdGVtKC0xKSAhPT0gJ3snKSB7XG4gICAgICAgICAgdGhpcy5fb3V0cHV0LmVuc3VyZV9lbXB0eV9saW5lX2Fib3ZlKCcvJywgJywnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcblxuICAgICAgLy8gVGhlIGRpZmZlcmVuY2UgaW4gcHJpbnRfc3RyaW5nIGFuZCBpbmRlbnQgb3JkZXIgaXMgbmVjZXNzYXJ5IHRvIGluZGVudCB0aGUgJ3snIGNvcnJlY3RseVxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYnJhY2Vfc3R5bGUgPT09ICdleHBhbmQnKSB7XG4gICAgICAgIHRoaXMuX291dHB1dC5hZGRfbmV3X2xpbmUoKTtcbiAgICAgICAgdGhpcy5wcmludF9zdHJpbmcodGhpcy5fY2gpO1xuICAgICAgICB0aGlzLmluZGVudCgpO1xuICAgICAgICB0aGlzLl9vdXRwdXQuc2V0X2luZGVudCh0aGlzLl9pbmRlbnRMZXZlbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpbnNpZGUgbWl4aW4gYW5kIGZpcnN0IHBhcmFtIGlzIG9iamVjdFxuICAgICAgICBpZiAocHJldmlvdXNfY2ggPT09ICcoJykge1xuICAgICAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c19jaCAhPT0gJywnKSB7XG4gICAgICAgICAgdGhpcy5pbmRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByaW50X3N0cmluZyh0aGlzLl9jaCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWF0V2hpdGVzcGFjZSh0cnVlKTtcbiAgICAgIHRoaXMuX291dHB1dC5hZGRfbmV3X2xpbmUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NoID09PSAnfScpIHtcbiAgICAgIHRoaXMub3V0ZGVudCgpO1xuICAgICAgdGhpcy5fb3V0cHV0LmFkZF9uZXdfbGluZSgpO1xuICAgICAgaWYgKHByZXZpb3VzX2NoID09PSAneycpIHtcbiAgICAgICAgdGhpcy5fb3V0cHV0LnRyaW0odHJ1ZSk7XG4gICAgICB9XG4gICAgICBpbnNpZGVBdEltcG9ydCA9IGZhbHNlO1xuICAgICAgaW5zaWRlQXRFeHRlbmQgPSBmYWxzZTtcbiAgICAgIGlmIChpbnNpZGVQcm9wZXJ0eVZhbHVlKSB7XG4gICAgICAgIHRoaXMub3V0ZGVudCgpO1xuICAgICAgICBpbnNpZGVQcm9wZXJ0eVZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLnByaW50X3N0cmluZyh0aGlzLl9jaCk7XG4gICAgICBpbnNpZGVSdWxlID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5fbmVzdGVkTGV2ZWwpIHtcbiAgICAgICAgdGhpcy5fbmVzdGVkTGV2ZWwtLTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lYXRXaGl0ZXNwYWNlKHRydWUpO1xuICAgICAgdGhpcy5fb3V0cHV0LmFkZF9uZXdfbGluZSgpO1xuXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5uZXdsaW5lX2JldHdlZW5fcnVsZXMgJiYgIXRoaXMuX291dHB1dC5qdXN0X2FkZGVkX2JsYW5rbGluZSgpKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnB1dC5wZWVrKCkgIT09ICd9Jykge1xuICAgICAgICAgIHRoaXMuX291dHB1dC5hZGRfbmV3X2xpbmUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pbnB1dC5wZWVrKCkgPT09ICcpJykge1xuICAgICAgICB0aGlzLl9vdXRwdXQudHJpbSh0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYnJhY2Vfc3R5bGUgPT09IFwiZXhwYW5kXCIpIHtcbiAgICAgICAgICB0aGlzLl9vdXRwdXQuYWRkX25ld19saW5lKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jaCA9PT0gXCI6XCIpIHtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLk5PTl9TRU1JQ09MT05fTkVXTElORV9QUk9QRVJUWS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5faW5wdXQubG9va0JhY2sodGhpcy5OT05fU0VNSUNPTE9OX05FV0xJTkVfUFJPUEVSVFlbaV0pKSB7XG4gICAgICAgICAgaW5zaWRlTm9uU2VtaUNvbG9uVmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKGluc2lkZVJ1bGUgfHwgZW50ZXJpbmdDb25kaXRpb25hbEdyb3VwKSAmJiAhKHRoaXMuX2lucHV0Lmxvb2tCYWNrKFwiJlwiKSB8fCB0aGlzLmZvdW5kTmVzdGVkUHNldWRvQ2xhc3MoKSkgJiYgIXRoaXMuX2lucHV0Lmxvb2tCYWNrKFwiKFwiKSAmJiAhaW5zaWRlQXRFeHRlbmQgJiYgcGFyZW5MZXZlbCA9PT0gMCkge1xuICAgICAgICAvLyAncHJvcGVydHk6IHZhbHVlJyBkZWxpbWl0ZXJcbiAgICAgICAgLy8gd2hpY2ggY291bGQgYmUgaW4gYSBjb25kaXRpb25hbCBncm91cCBxdWVyeVxuICAgICAgICB0aGlzLnByaW50X3N0cmluZygnOicpO1xuICAgICAgICBpZiAoIWluc2lkZVByb3BlcnR5VmFsdWUpIHtcbiAgICAgICAgICBpbnNpZGVQcm9wZXJ0eVZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmVhdFdoaXRlc3BhY2UodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5pbmRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2Fzcy9sZXNzIHBhcmVudCByZWZlcmVuY2UgZG9uJ3QgdXNlIGEgc3BhY2VcbiAgICAgICAgLy8gc2FzcyBuZXN0ZWQgcHNldWRvLWNsYXNzIGRvbid0IHVzZSBhIHNwYWNlXG5cbiAgICAgICAgLy8gcHJlc2VydmUgc3BhY2UgYmVmb3JlIHBzZXVkb2NsYXNzZXMvcHNldWRvZWxlbWVudHMsIGFzIGl0IG1lYW5zIFwiaW4gYW55IGNoaWxkXCJcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0Lmxvb2tCYWNrKFwiIFwiKSkge1xuICAgICAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pbnB1dC5wZWVrKCkgPT09IFwiOlwiKSB7XG4gICAgICAgICAgLy8gcHNldWRvLWVsZW1lbnRcbiAgICAgICAgICB0aGlzLl9jaCA9IHRoaXMuX2lucHV0Lm5leHQoKTtcbiAgICAgICAgICB0aGlzLnByaW50X3N0cmluZyhcIjo6XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHBzZXVkby1jbGFzc1xuICAgICAgICAgIHRoaXMucHJpbnRfc3RyaW5nKCc6Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NoID09PSAnXCInIHx8IHRoaXMuX2NoID09PSAnXFwnJykge1xuICAgICAgdmFyIHByZXNlcnZlUXVvdGVTcGFjZSA9IHByZXZpb3VzX2NoID09PSAnXCInIHx8IHByZXZpb3VzX2NoID09PSAnXFwnJztcbiAgICAgIHRoaXMucHJlc2VydmVTaW5nbGVTcGFjZShwcmVzZXJ2ZVF1b3RlU3BhY2UgfHwgaXNBZnRlclNwYWNlKTtcbiAgICAgIHRoaXMucHJpbnRfc3RyaW5nKHRoaXMuX2NoICsgdGhpcy5lYXRTdHJpbmcodGhpcy5fY2gpKTtcbiAgICAgIHRoaXMuZWF0V2hpdGVzcGFjZSh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NoID09PSAnOycpIHtcbiAgICAgIGluc2lkZU5vblNlbWlDb2xvblZhbHVlcyA9IGZhbHNlO1xuICAgICAgaWYgKHBhcmVuTGV2ZWwgPT09IDApIHtcbiAgICAgICAgaWYgKGluc2lkZVByb3BlcnR5VmFsdWUpIHtcbiAgICAgICAgICB0aGlzLm91dGRlbnQoKTtcbiAgICAgICAgICBpbnNpZGVQcm9wZXJ0eVZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaW5zaWRlQXRFeHRlbmQgPSBmYWxzZTtcbiAgICAgICAgaW5zaWRlQXRJbXBvcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcmludF9zdHJpbmcodGhpcy5fY2gpO1xuICAgICAgICB0aGlzLmVhdFdoaXRlc3BhY2UodHJ1ZSk7XG5cbiAgICAgICAgLy8gVGhpcyBtYWludGFpbnMgc2luZ2xlIGxpbmUgY29tbWVudHMgb24gdGhlIHNhbWVcbiAgICAgICAgLy8gbGluZS4gQmxvY2sgY29tbWVudHMgYXJlIGFsc28gYWZmZWN0ZWQsIGJ1dFxuICAgICAgICAvLyBhIG5ldyBsaW5lIGlzIGFsd2F5cyBvdXRwdXQgYmVmb3JlIG9uZSBpbnNpZGVcbiAgICAgICAgLy8gdGhhdCBzZWN0aW9uXG4gICAgICAgIGlmICh0aGlzLl9pbnB1dC5wZWVrKCkgIT09ICcvJykge1xuICAgICAgICAgIHRoaXMuX291dHB1dC5hZGRfbmV3X2xpbmUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmludF9zdHJpbmcodGhpcy5fY2gpO1xuICAgICAgICB0aGlzLmVhdFdoaXRlc3BhY2UodHJ1ZSk7XG4gICAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fY2ggPT09ICcoJykgeyAvLyBtYXkgYmUgYSB1cmxcbiAgICAgIGlmICh0aGlzLl9pbnB1dC5sb29rQmFjayhcInVybFwiKSkge1xuICAgICAgICB0aGlzLnByaW50X3N0cmluZyh0aGlzLl9jaCk7XG4gICAgICAgIHRoaXMuZWF0V2hpdGVzcGFjZSgpO1xuICAgICAgICBwYXJlbkxldmVsKys7XG4gICAgICAgIHRoaXMuaW5kZW50KCk7XG4gICAgICAgIHRoaXMuX2NoID0gdGhpcy5faW5wdXQubmV4dCgpO1xuICAgICAgICBpZiAodGhpcy5fY2ggPT09ICcpJyB8fCB0aGlzLl9jaCA9PT0gJ1wiJyB8fCB0aGlzLl9jaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICB0aGlzLl9pbnB1dC5iYWNrKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY2gpIHtcbiAgICAgICAgICB0aGlzLnByaW50X3N0cmluZyh0aGlzLl9jaCArIHRoaXMuZWF0U3RyaW5nKCcpJykpO1xuICAgICAgICAgIGlmIChwYXJlbkxldmVsKSB7XG4gICAgICAgICAgICBwYXJlbkxldmVsLS07XG4gICAgICAgICAgICB0aGlzLm91dGRlbnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzcGFjZV9uZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0Lmxvb2tCYWNrKFwid2l0aFwiKSkge1xuICAgICAgICAgIC8vIGxvb2sgYmFjayBpcyBub3QgYW4gYWNjdXJhdGUgc29sdXRpb24sIHdlIG5lZWQgdG9rZW5zIHRvIGNvbmZpcm0gd2l0aG91dCB3aGl0ZXNwYWNlc1xuICAgICAgICAgIHNwYWNlX25lZWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVzZXJ2ZVNpbmdsZVNwYWNlKGlzQWZ0ZXJTcGFjZSB8fCBzcGFjZV9uZWVkZWQpO1xuICAgICAgICB0aGlzLnByaW50X3N0cmluZyh0aGlzLl9jaCk7XG5cbiAgICAgICAgLy8gaGFuZGxlIHNjc3Mvc2FzcyBtYXBcbiAgICAgICAgaWYgKGluc2lkZVByb3BlcnR5VmFsdWUgJiYgcHJldmlvdXNfY2ggPT09IFwiJFwiICYmIHRoaXMuX29wdGlvbnMuc2VsZWN0b3Jfc2VwYXJhdG9yX25ld2xpbmUpIHtcbiAgICAgICAgICB0aGlzLl9vdXRwdXQuYWRkX25ld19saW5lKCk7XG4gICAgICAgICAgaW5zaWRlU2Nzc01hcCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lYXRXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgcGFyZW5MZXZlbCsrO1xuICAgICAgICAgIHRoaXMuaW5kZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NoID09PSAnKScpIHtcbiAgICAgIGlmIChwYXJlbkxldmVsKSB7XG4gICAgICAgIHBhcmVuTGV2ZWwtLTtcbiAgICAgICAgdGhpcy5vdXRkZW50KCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zaWRlU2Nzc01hcCAmJiB0aGlzLl9pbnB1dC5wZWVrKCkgPT09IFwiO1wiICYmIHRoaXMuX29wdGlvbnMuc2VsZWN0b3Jfc2VwYXJhdG9yX25ld2xpbmUpIHtcbiAgICAgICAgaW5zaWRlU2Nzc01hcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm91dGRlbnQoKTtcbiAgICAgICAgdGhpcy5fb3V0cHV0LmFkZF9uZXdfbGluZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmludF9zdHJpbmcodGhpcy5fY2gpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY2ggPT09ICcsJykge1xuICAgICAgdGhpcy5wcmludF9zdHJpbmcodGhpcy5fY2gpO1xuICAgICAgdGhpcy5lYXRXaGl0ZXNwYWNlKHRydWUpO1xuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc2VsZWN0b3Jfc2VwYXJhdG9yX25ld2xpbmUgJiYgKCFpbnNpZGVQcm9wZXJ0eVZhbHVlIHx8IGluc2lkZVNjc3NNYXApICYmIHBhcmVuTGV2ZWwgPT09IDAgJiYgIWluc2lkZUF0SW1wb3J0ICYmICFpbnNpZGVBdEV4dGVuZCkge1xuICAgICAgICB0aGlzLl9vdXRwdXQuYWRkX25ld19saW5lKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCh0aGlzLl9jaCA9PT0gJz4nIHx8IHRoaXMuX2NoID09PSAnKycgfHwgdGhpcy5fY2ggPT09ICd+JykgJiYgIWluc2lkZVByb3BlcnR5VmFsdWUgJiYgcGFyZW5MZXZlbCA9PT0gMCkge1xuICAgICAgLy9oYW5kbGUgY29tYmluYXRvciBzcGFjaW5nXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5zcGFjZV9hcm91bmRfY29tYmluYXRvcikge1xuICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcmludF9zdHJpbmcodGhpcy5fY2gpO1xuICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJpbnRfc3RyaW5nKHRoaXMuX2NoKTtcbiAgICAgICAgdGhpcy5lYXRXaGl0ZXNwYWNlKCk7XG4gICAgICAgIC8vIHNxdWFzaCBleHRyYSB3aGl0ZXNwYWNlXG4gICAgICAgIGlmICh0aGlzLl9jaCAmJiB3aGl0ZXNwYWNlQ2hhci50ZXN0KHRoaXMuX2NoKSkge1xuICAgICAgICAgIHRoaXMuX2NoID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NoID09PSAnXScpIHtcbiAgICAgIHRoaXMucHJpbnRfc3RyaW5nKHRoaXMuX2NoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NoID09PSAnWycpIHtcbiAgICAgIHRoaXMucHJlc2VydmVTaW5nbGVTcGFjZShpc0FmdGVyU3BhY2UpO1xuICAgICAgdGhpcy5wcmludF9zdHJpbmcodGhpcy5fY2gpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY2ggPT09ICc9JykgeyAvLyBubyB3aGl0ZXNwYWNlIGJlZm9yZSBvciBhZnRlclxuICAgICAgdGhpcy5lYXRXaGl0ZXNwYWNlKCk7XG4gICAgICB0aGlzLnByaW50X3N0cmluZygnPScpO1xuICAgICAgaWYgKHdoaXRlc3BhY2VDaGFyLnRlc3QodGhpcy5fY2gpKSB7XG4gICAgICAgIHRoaXMuX2NoID0gJyc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jaCA9PT0gJyEnICYmICF0aGlzLl9pbnB1dC5sb29rQmFjayhcIlxcXFxcIikpIHsgLy8gIWltcG9ydGFudFxuICAgICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG4gICAgICB0aGlzLnByaW50X3N0cmluZyh0aGlzLl9jaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVzZXJ2ZUFmdGVyU3BhY2UgPSBwcmV2aW91c19jaCA9PT0gJ1wiJyB8fCBwcmV2aW91c19jaCA9PT0gJ1xcJyc7XG4gICAgICB0aGlzLnByZXNlcnZlU2luZ2xlU3BhY2UocHJlc2VydmVBZnRlclNwYWNlIHx8IGlzQWZ0ZXJTcGFjZSk7XG4gICAgICB0aGlzLnByaW50X3N0cmluZyh0aGlzLl9jaCk7XG5cbiAgICAgIGlmICghdGhpcy5fb3V0cHV0Lmp1c3RfYWRkZWRfbmV3bGluZSgpICYmIHRoaXMuX2lucHV0LnBlZWsoKSA9PT0gJ1xcbicgJiYgaW5zaWRlTm9uU2VtaUNvbG9uVmFsdWVzKSB7XG4gICAgICAgIHRoaXMuX291dHB1dC5hZGRfbmV3X2xpbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgc3dlZXRDb2RlID0gdGhpcy5fb3V0cHV0LmdldF9jb2RlKGVvbCk7XG5cbiAgcmV0dXJuIHN3ZWV0Q29kZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLkJlYXV0aWZpZXIgPSBCZWF1dGlmaWVyO1xuXG5cbi8qKiovIH0pLFxuLyogMTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKmpzaGludCBub2RlOnRydWUgKi9cbi8qXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuKi9cblxuXG5cbnZhciBCYXNlT3B0aW9ucyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDYpLk9wdGlvbnMpO1xuXG5mdW5jdGlvbiBPcHRpb25zKG9wdGlvbnMpIHtcbiAgQmFzZU9wdGlvbnMuY2FsbCh0aGlzLCBvcHRpb25zLCAnY3NzJyk7XG5cbiAgdGhpcy5zZWxlY3Rvcl9zZXBhcmF0b3JfbmV3bGluZSA9IHRoaXMuX2dldF9ib29sZWFuKCdzZWxlY3Rvcl9zZXBhcmF0b3JfbmV3bGluZScsIHRydWUpO1xuICB0aGlzLm5ld2xpbmVfYmV0d2Vlbl9ydWxlcyA9IHRoaXMuX2dldF9ib29sZWFuKCduZXdsaW5lX2JldHdlZW5fcnVsZXMnLCB0cnVlKTtcbiAgdmFyIHNwYWNlX2Fyb3VuZF9zZWxlY3Rvcl9zZXBhcmF0b3IgPSB0aGlzLl9nZXRfYm9vbGVhbignc3BhY2VfYXJvdW5kX3NlbGVjdG9yX3NlcGFyYXRvcicpO1xuICB0aGlzLnNwYWNlX2Fyb3VuZF9jb21iaW5hdG9yID0gdGhpcy5fZ2V0X2Jvb2xlYW4oJ3NwYWNlX2Fyb3VuZF9jb21iaW5hdG9yJykgfHwgc3BhY2VfYXJvdW5kX3NlbGVjdG9yX3NlcGFyYXRvcjtcblxuICB2YXIgYnJhY2Vfc3R5bGVfc3BsaXQgPSB0aGlzLl9nZXRfc2VsZWN0aW9uX2xpc3QoJ2JyYWNlX3N0eWxlJywgWydjb2xsYXBzZScsICdleHBhbmQnLCAnZW5kLWV4cGFuZCcsICdub25lJywgJ3ByZXNlcnZlLWlubGluZSddKTtcbiAgdGhpcy5icmFjZV9zdHlsZSA9ICdjb2xsYXBzZSc7XG4gIGZvciAodmFyIGJzID0gMDsgYnMgPCBicmFjZV9zdHlsZV9zcGxpdC5sZW5ndGg7IGJzKyspIHtcbiAgICBpZiAoYnJhY2Vfc3R5bGVfc3BsaXRbYnNdICE9PSAnZXhwYW5kJykge1xuICAgICAgLy8gZGVmYXVsdCB0byBjb2xsYXBzZSwgYXMgb25seSBjb2xsYXBzZXxleHBhbmQgaXMgaW1wbGVtZW50ZWQgZm9yIG5vd1xuICAgICAgdGhpcy5icmFjZV9zdHlsZSA9ICdjb2xsYXBzZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnJhY2Vfc3R5bGUgPSBicmFjZV9zdHlsZV9zcGxpdFtic107XG4gICAgfVxuICB9XG59XG5PcHRpb25zLnByb3RvdHlwZSA9IG5ldyBCYXNlT3B0aW9ucygpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMuT3B0aW9ucyA9IE9wdGlvbnM7XG5cblxuLyoqKi8gfSlcbi8qKioqKiovIFx0XSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHQvLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuLyoqKioqKi8gXHRsZWdhY3lfYmVhdXRpZnlfY3NzID0gX193ZWJwYWNrX2V4cG9ydHNfXztcbi8qKioqKiovIFx0XG4vKioqKioqLyB9KSgpXG47XG52YXIgY3NzX2JlYXV0aWZ5ID0gbGVnYWN5X2JlYXV0aWZ5X2Nzcztcbi8qIEZvb3RlciAqL1xuaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQWRkIHN1cHBvcnQgZm9yIEFNRCAoIGh0dHBzOi8vZ2l0aHViLmNvbS9hbWRqcy9hbWRqcy1hcGkvd2lraS9BTUQjZGVmaW5lYW1kLXByb3BlcnR5LSApXG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNzc19iZWF1dGlmeTogY3NzX2JlYXV0aWZ5XG4gICAgICAgIH07XG4gICAgfSk7XG59IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gQWRkIHN1cHBvcnQgZm9yIENvbW1vbkpTLiBKdXN0IHB1dCB0aGlzIGZpbGUgc29tZXdoZXJlIG9uIHlvdXIgcmVxdWlyZS5wYXRoc1xuICAgIC8vIGFuZCB5b3Ugd2lsbCBiZSBhYmxlIHRvIGB2YXIgaHRtbF9iZWF1dGlmeSA9IHJlcXVpcmUoXCJiZWF1dGlmeVwiKS5odG1sX2JlYXV0aWZ5YC5cbiAgICBleHBvcnRzLmNzc19iZWF1dGlmeSA9IGNzc19iZWF1dGlmeTtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIC8vIElmIHdlJ3JlIHJ1bm5pbmcgYSB3ZWIgcGFnZSBhbmQgZG9uJ3QgaGF2ZSBlaXRoZXIgb2YgdGhlIGFib3ZlLCBhZGQgb3VyIG9uZSBnbG9iYWxcbiAgICB3aW5kb3cuY3NzX2JlYXV0aWZ5ID0gY3NzX2JlYXV0aWZ5O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gSWYgd2UgZG9uJ3QgZXZlbiBoYXZlIHdpbmRvdywgdHJ5IGdsb2JhbC5cbiAgICBnbG9iYWwuY3NzX2JlYXV0aWZ5ID0gY3NzX2JlYXV0aWZ5O1xufVxuXG59KCkpO1xuIiwiLyogQVVUTy1HRU5FUkFURUQuIERPIE5PVCBNT0RJRlkuICovXG4vKlxuXG4gIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gIENvcHlyaWdodCAoYykgMjAwNy0yMDE4IEVpbmFyIExpZWxtYW5pcywgTGlhbSBOZXdtYW4sIGFuZCBjb250cmlidXRvcnMuXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICBTT0ZUV0FSRS5cblxuXG4gU3R5bGUgSFRNTFxuLS0tLS0tLS0tLS0tLS0tXG5cbiAgV3JpdHRlbiBieSBOb2NodW0gU29zc29ua28sIChuc29zc29ua29AaG90bWFpbC5jb20pXG5cbiAgQmFzZWQgb24gY29kZSBpbml0aWFsbHkgZGV2ZWxvcGVkIGJ5OiBFaW5hciBMaWVsbWFuaXMsIDxlaW5hckBiZWF1dGlmaWVyLmlvPlxuICAgIGh0dHBzOi8vYmVhdXRpZmllci5pby9cblxuICBVc2FnZTpcbiAgICBzdHlsZV9odG1sKGh0bWxfc291cmNlKTtcblxuICAgIHN0eWxlX2h0bWwoaHRtbF9zb3VyY2UsIG9wdGlvbnMpO1xuXG4gIFRoZSBvcHRpb25zIGFyZTpcbiAgICBpbmRlbnRfaW5uZXJfaHRtbCAoZGVmYXVsdCBmYWxzZSkgIOKAlCBpbmRlbnQgPGhlYWQ+IGFuZCA8Ym9keT4gc2VjdGlvbnMsXG4gICAgaW5kZW50X3NpemUgKGRlZmF1bHQgNCkgICAgICAgICAg4oCUIGluZGVudGF0aW9uIHNpemUsXG4gICAgaW5kZW50X2NoYXIgKGRlZmF1bHQgc3BhY2UpICAgICAg4oCUIGNoYXJhY3RlciB0byBpbmRlbnQgd2l0aCxcbiAgICB3cmFwX2xpbmVfbGVuZ3RoIChkZWZhdWx0IDI1MCkgICAgICAgICAgICAtICBtYXhpbXVtIGFtb3VudCBvZiBjaGFyYWN0ZXJzIHBlciBsaW5lICgwID0gZGlzYWJsZSlcbiAgICBicmFjZV9zdHlsZSAoZGVmYXVsdCBcImNvbGxhcHNlXCIpIC0gXCJjb2xsYXBzZVwiIHwgXCJleHBhbmRcIiB8IFwiZW5kLWV4cGFuZFwiIHwgXCJub25lXCJcbiAgICAgICAgICAgIHB1dCBicmFjZXMgb24gdGhlIHNhbWUgbGluZSBhcyBjb250cm9sIHN0YXRlbWVudHMgKGRlZmF1bHQpLCBvciBwdXQgYnJhY2VzIG9uIG93biBsaW5lIChBbGxtYW4gLyBBTlNJIHN0eWxlKSwgb3IganVzdCBwdXQgZW5kIGJyYWNlcyBvbiBvd24gbGluZSwgb3IgYXR0ZW1wdCB0byBrZWVwIHRoZW0gd2hlcmUgdGhleSBhcmUuXG4gICAgaW5saW5lIChkZWZhdWx0cyB0byBpbmxpbmUgdGFncykgLSBsaXN0IG9mIHRhZ3MgdG8gYmUgY29uc2lkZXJlZCBpbmxpbmUgdGFnc1xuICAgIHVuZm9ybWF0dGVkIChkZWZhdWx0cyB0byBpbmxpbmUgdGFncykgLSBsaXN0IG9mIHRhZ3MsIHRoYXQgc2hvdWxkbid0IGJlIHJlZm9ybWF0dGVkXG4gICAgY29udGVudF91bmZvcm1hdHRlZCAoZGVmYXVsdHMgdG8gW1wicHJlXCIsIFwidGV4dGFyZWFcIl0gdGFncykgLSBsaXN0IG9mIHRhZ3MsIHdob3NlIGNvbnRlbnQgc2hvdWxkbid0IGJlIHJlZm9ybWF0dGVkXG4gICAgaW5kZW50X3NjcmlwdHMgKGRlZmF1bHQgbm9ybWFsKSAgLSBcImtlZXBcInxcInNlcGFyYXRlXCJ8XCJub3JtYWxcIlxuICAgIHByZXNlcnZlX25ld2xpbmVzIChkZWZhdWx0IHRydWUpIC0gd2hldGhlciBleGlzdGluZyBsaW5lIGJyZWFrcyBiZWZvcmUgZWxlbWVudHMgc2hvdWxkIGJlIHByZXNlcnZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9ubHkgd29ya3MgYmVmb3JlIGVsZW1lbnRzLCBub3QgaW5zaWRlIHRhZ3Mgb3IgZm9yIHRleHQuXG4gICAgbWF4X3ByZXNlcnZlX25ld2xpbmVzIChkZWZhdWx0IHVubGltaXRlZCkgLSBtYXhpbXVtIG51bWJlciBvZiBsaW5lIGJyZWFrcyB0byBiZSBwcmVzZXJ2ZWQgaW4gb25lIGNodW5rXG4gICAgaW5kZW50X2hhbmRsZWJhcnMgKGRlZmF1bHQgZmFsc2UpIC0gZm9ybWF0IGFuZCBpbmRlbnQge3sjZm9vfX0gYW5kIHt7L2Zvb319XG4gICAgZW5kX3dpdGhfbmV3bGluZSAoZmFsc2UpICAgICAgICAgIC0gZW5kIHdpdGggYSBuZXdsaW5lXG4gICAgZXh0cmFfbGluZXJzIChkZWZhdWx0IFtoZWFkLGJvZHksL2h0bWxdKSAtTGlzdCBvZiB0YWdzIHRoYXQgc2hvdWxkIGhhdmUgYW4gZXh0cmEgbmV3bGluZSBiZWZvcmUgdGhlbS5cblxuICAgIGUuZy5cblxuICAgIHN0eWxlX2h0bWwoaHRtbF9zb3VyY2UsIHtcbiAgICAgICdpbmRlbnRfaW5uZXJfaHRtbCc6IGZhbHNlLFxuICAgICAgJ2luZGVudF9zaXplJzogMixcbiAgICAgICdpbmRlbnRfY2hhcic6ICcgJyxcbiAgICAgICd3cmFwX2xpbmVfbGVuZ3RoJzogNzgsXG4gICAgICAnYnJhY2Vfc3R5bGUnOiAnZXhwYW5kJyxcbiAgICAgICdwcmVzZXJ2ZV9uZXdsaW5lcyc6IHRydWUsXG4gICAgICAnbWF4X3ByZXNlcnZlX25ld2xpbmVzJzogNSxcbiAgICAgICdpbmRlbnRfaGFuZGxlYmFycyc6IGZhbHNlLFxuICAgICAgJ2V4dHJhX2xpbmVycyc6IFsnL2h0bWwnXVxuICAgIH0pO1xuKi9cblxuKGZ1bmN0aW9uKCkge1xuXG4vKiBHRU5FUkFURURfQlVJTERfT1VUUFVUICovXG52YXIgbGVnYWN5X2JlYXV0aWZ5X2h0bWw7XG4vKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKFtcbi8qIDAgKi8sXG4vKiAxICovLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG4vKmpzaGludCBub2RlOnRydWUgKi9cbi8qXG4gIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gIENvcHlyaWdodCAoYykgMjAwNy0yMDE4IEVpbmFyIExpZWxtYW5pcywgTGlhbSBOZXdtYW4sIGFuZCBjb250cmlidXRvcnMuXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICBTT0ZUV0FSRS5cbiovXG5cblxuXG5mdW5jdGlvbiBPdXRwdXRMaW5lKHBhcmVudCkge1xuICB0aGlzLl9fcGFyZW50ID0gcGFyZW50O1xuICB0aGlzLl9fY2hhcmFjdGVyX2NvdW50ID0gMDtcbiAgLy8gdXNlIGluZGVudF9jb3VudCBhcyBhIG1hcmtlciBmb3IgdGhpcy5fX2xpbmVzIHRoYXQgaGF2ZSBwcmVzZXJ2ZWQgaW5kZW50YXRpb25cbiAgdGhpcy5fX2luZGVudF9jb3VudCA9IC0xO1xuICB0aGlzLl9fYWxpZ25tZW50X2NvdW50ID0gMDtcbiAgdGhpcy5fX3dyYXBfcG9pbnRfaW5kZXggPSAwO1xuICB0aGlzLl9fd3JhcF9wb2ludF9jaGFyYWN0ZXJfY291bnQgPSAwO1xuICB0aGlzLl9fd3JhcF9wb2ludF9pbmRlbnRfY291bnQgPSAtMTtcbiAgdGhpcy5fX3dyYXBfcG9pbnRfYWxpZ25tZW50X2NvdW50ID0gMDtcblxuICB0aGlzLl9faXRlbXMgPSBbXTtcbn1cblxuT3V0cHV0TGluZS5wcm90b3R5cGUuY2xvbmVfZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGxpbmUgPSBuZXcgT3V0cHV0TGluZSh0aGlzLl9fcGFyZW50KTtcbiAgbGluZS5zZXRfaW5kZW50KHRoaXMuX19pbmRlbnRfY291bnQsIHRoaXMuX19hbGlnbm1lbnRfY291bnQpO1xuICByZXR1cm4gbGluZTtcbn07XG5cbk91dHB1dExpbmUucHJvdG90eXBlLml0ZW0gPSBmdW5jdGlvbihpbmRleCkge1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIHRoaXMuX19pdGVtc1t0aGlzLl9faXRlbXMubGVuZ3RoICsgaW5kZXhdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLl9faXRlbXNbaW5kZXhdO1xuICB9XG59O1xuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS5oYXNfbWF0Y2ggPSBmdW5jdGlvbihwYXR0ZXJuKSB7XG4gIGZvciAodmFyIGxhc3RDaGVja2VkT3V0cHV0ID0gdGhpcy5fX2l0ZW1zLmxlbmd0aCAtIDE7IGxhc3RDaGVja2VkT3V0cHV0ID49IDA7IGxhc3RDaGVja2VkT3V0cHV0LS0pIHtcbiAgICBpZiAodGhpcy5fX2l0ZW1zW2xhc3RDaGVja2VkT3V0cHV0XS5tYXRjaChwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbk91dHB1dExpbmUucHJvdG90eXBlLnNldF9pbmRlbnQgPSBmdW5jdGlvbihpbmRlbnQsIGFsaWdubWVudCkge1xuICBpZiAodGhpcy5pc19lbXB0eSgpKSB7XG4gICAgdGhpcy5fX2luZGVudF9jb3VudCA9IGluZGVudCB8fCAwO1xuICAgIHRoaXMuX19hbGlnbm1lbnRfY291bnQgPSBhbGlnbm1lbnQgfHwgMDtcbiAgICB0aGlzLl9fY2hhcmFjdGVyX2NvdW50ID0gdGhpcy5fX3BhcmVudC5nZXRfaW5kZW50X3NpemUodGhpcy5fX2luZGVudF9jb3VudCwgdGhpcy5fX2FsaWdubWVudF9jb3VudCk7XG4gIH1cbn07XG5cbk91dHB1dExpbmUucHJvdG90eXBlLl9zZXRfd3JhcF9wb2ludCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fX3BhcmVudC53cmFwX2xpbmVfbGVuZ3RoKSB7XG4gICAgdGhpcy5fX3dyYXBfcG9pbnRfaW5kZXggPSB0aGlzLl9faXRlbXMubGVuZ3RoO1xuICAgIHRoaXMuX193cmFwX3BvaW50X2NoYXJhY3Rlcl9jb3VudCA9IHRoaXMuX19jaGFyYWN0ZXJfY291bnQ7XG4gICAgdGhpcy5fX3dyYXBfcG9pbnRfaW5kZW50X2NvdW50ID0gdGhpcy5fX3BhcmVudC5uZXh0X2xpbmUuX19pbmRlbnRfY291bnQ7XG4gICAgdGhpcy5fX3dyYXBfcG9pbnRfYWxpZ25tZW50X2NvdW50ID0gdGhpcy5fX3BhcmVudC5uZXh0X2xpbmUuX19hbGlnbm1lbnRfY291bnQ7XG4gIH1cbn07XG5cbk91dHB1dExpbmUucHJvdG90eXBlLl9zaG91bGRfd3JhcCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fX3dyYXBfcG9pbnRfaW5kZXggJiZcbiAgICB0aGlzLl9fY2hhcmFjdGVyX2NvdW50ID4gdGhpcy5fX3BhcmVudC53cmFwX2xpbmVfbGVuZ3RoICYmXG4gICAgdGhpcy5fX3dyYXBfcG9pbnRfY2hhcmFjdGVyX2NvdW50ID4gdGhpcy5fX3BhcmVudC5uZXh0X2xpbmUuX19jaGFyYWN0ZXJfY291bnQ7XG59O1xuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS5fYWxsb3dfd3JhcCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fc2hvdWxkX3dyYXAoKSkge1xuICAgIHRoaXMuX19wYXJlbnQuYWRkX25ld19saW5lKCk7XG4gICAgdmFyIG5leHQgPSB0aGlzLl9fcGFyZW50LmN1cnJlbnRfbGluZTtcbiAgICBuZXh0LnNldF9pbmRlbnQodGhpcy5fX3dyYXBfcG9pbnRfaW5kZW50X2NvdW50LCB0aGlzLl9fd3JhcF9wb2ludF9hbGlnbm1lbnRfY291bnQpO1xuICAgIG5leHQuX19pdGVtcyA9IHRoaXMuX19pdGVtcy5zbGljZSh0aGlzLl9fd3JhcF9wb2ludF9pbmRleCk7XG4gICAgdGhpcy5fX2l0ZW1zID0gdGhpcy5fX2l0ZW1zLnNsaWNlKDAsIHRoaXMuX193cmFwX3BvaW50X2luZGV4KTtcblxuICAgIG5leHQuX19jaGFyYWN0ZXJfY291bnQgKz0gdGhpcy5fX2NoYXJhY3Rlcl9jb3VudCAtIHRoaXMuX193cmFwX3BvaW50X2NoYXJhY3Rlcl9jb3VudDtcbiAgICB0aGlzLl9fY2hhcmFjdGVyX2NvdW50ID0gdGhpcy5fX3dyYXBfcG9pbnRfY2hhcmFjdGVyX2NvdW50O1xuXG4gICAgaWYgKG5leHQuX19pdGVtc1swXSA9PT0gXCIgXCIpIHtcbiAgICAgIG5leHQuX19pdGVtcy5zcGxpY2UoMCwgMSk7XG4gICAgICBuZXh0Ll9fY2hhcmFjdGVyX2NvdW50IC09IDE7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbk91dHB1dExpbmUucHJvdG90eXBlLmlzX2VtcHR5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9faXRlbXMubGVuZ3RoID09PSAwO1xufTtcblxuT3V0cHV0TGluZS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuaXNfZW1wdHkoKSkge1xuICAgIHJldHVybiB0aGlzLl9faXRlbXNbdGhpcy5fX2l0ZW1zLmxlbmd0aCAtIDFdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24oaXRlbSkge1xuICB0aGlzLl9faXRlbXMucHVzaChpdGVtKTtcbiAgdmFyIGxhc3RfbmV3bGluZV9pbmRleCA9IGl0ZW0ubGFzdEluZGV4T2YoJ1xcbicpO1xuICBpZiAobGFzdF9uZXdsaW5lX2luZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuX19jaGFyYWN0ZXJfY291bnQgPSBpdGVtLmxlbmd0aCAtIGxhc3RfbmV3bGluZV9pbmRleDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9fY2hhcmFjdGVyX2NvdW50ICs9IGl0ZW0ubGVuZ3RoO1xuICB9XG59O1xuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGl0ZW0gPSBudWxsO1xuICBpZiAoIXRoaXMuaXNfZW1wdHkoKSkge1xuICAgIGl0ZW0gPSB0aGlzLl9faXRlbXMucG9wKCk7XG4gICAgdGhpcy5fX2NoYXJhY3Rlcl9jb3VudCAtPSBpdGVtLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gaXRlbTtcbn07XG5cblxuT3V0cHV0TGluZS5wcm90b3R5cGUuX3JlbW92ZV9pbmRlbnQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX19pbmRlbnRfY291bnQgPiAwKSB7XG4gICAgdGhpcy5fX2luZGVudF9jb3VudCAtPSAxO1xuICAgIHRoaXMuX19jaGFyYWN0ZXJfY291bnQgLT0gdGhpcy5fX3BhcmVudC5pbmRlbnRfc2l6ZTtcbiAgfVxufTtcblxuT3V0cHV0TGluZS5wcm90b3R5cGUuX3JlbW92ZV93cmFwX2luZGVudCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fX3dyYXBfcG9pbnRfaW5kZW50X2NvdW50ID4gMCkge1xuICAgIHRoaXMuX193cmFwX3BvaW50X2luZGVudF9jb3VudCAtPSAxO1xuICB9XG59O1xuT3V0cHV0TGluZS5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uKCkge1xuICB3aGlsZSAodGhpcy5sYXN0KCkgPT09ICcgJykge1xuICAgIHRoaXMuX19pdGVtcy5wb3AoKTtcbiAgICB0aGlzLl9fY2hhcmFjdGVyX2NvdW50IC09IDE7XG4gIH1cbn07XG5cbk91dHB1dExpbmUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoaXMuaXNfZW1wdHkoKSkge1xuICAgIGlmICh0aGlzLl9fcGFyZW50LmluZGVudF9lbXB0eV9saW5lcykge1xuICAgICAgcmVzdWx0ID0gdGhpcy5fX3BhcmVudC5nZXRfaW5kZW50X3N0cmluZyh0aGlzLl9faW5kZW50X2NvdW50KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdGhpcy5fX3BhcmVudC5nZXRfaW5kZW50X3N0cmluZyh0aGlzLl9faW5kZW50X2NvdW50LCB0aGlzLl9fYWxpZ25tZW50X2NvdW50KTtcbiAgICByZXN1bHQgKz0gdGhpcy5fX2l0ZW1zLmpvaW4oJycpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBJbmRlbnRTdHJpbmdDYWNoZShvcHRpb25zLCBiYXNlSW5kZW50U3RyaW5nKSB7XG4gIHRoaXMuX19jYWNoZSA9IFsnJ107XG4gIHRoaXMuX19pbmRlbnRfc2l6ZSA9IG9wdGlvbnMuaW5kZW50X3NpemU7XG4gIHRoaXMuX19pbmRlbnRfc3RyaW5nID0gb3B0aW9ucy5pbmRlbnRfY2hhcjtcbiAgaWYgKCFvcHRpb25zLmluZGVudF93aXRoX3RhYnMpIHtcbiAgICB0aGlzLl9faW5kZW50X3N0cmluZyA9IG5ldyBBcnJheShvcHRpb25zLmluZGVudF9zaXplICsgMSkuam9pbihvcHRpb25zLmluZGVudF9jaGFyKTtcbiAgfVxuXG4gIC8vIFNldCB0byBudWxsIHRvIGNvbnRpbnVlIHN1cHBvcnQgZm9yIGF1dG8gZGV0ZWN0aW9uIG9mIGJhc2UgaW5kZW50XG4gIGJhc2VJbmRlbnRTdHJpbmcgPSBiYXNlSW5kZW50U3RyaW5nIHx8ICcnO1xuICBpZiAob3B0aW9ucy5pbmRlbnRfbGV2ZWwgPiAwKSB7XG4gICAgYmFzZUluZGVudFN0cmluZyA9IG5ldyBBcnJheShvcHRpb25zLmluZGVudF9sZXZlbCArIDEpLmpvaW4odGhpcy5fX2luZGVudF9zdHJpbmcpO1xuICB9XG5cbiAgdGhpcy5fX2Jhc2Vfc3RyaW5nID0gYmFzZUluZGVudFN0cmluZztcbiAgdGhpcy5fX2Jhc2Vfc3RyaW5nX2xlbmd0aCA9IGJhc2VJbmRlbnRTdHJpbmcubGVuZ3RoO1xufVxuXG5JbmRlbnRTdHJpbmdDYWNoZS5wcm90b3R5cGUuZ2V0X2luZGVudF9zaXplID0gZnVuY3Rpb24oaW5kZW50LCBjb2x1bW4pIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuX19iYXNlX3N0cmluZ19sZW5ndGg7XG4gIGNvbHVtbiA9IGNvbHVtbiB8fCAwO1xuICBpZiAoaW5kZW50IDwgMCkge1xuICAgIHJlc3VsdCA9IDA7XG4gIH1cbiAgcmVzdWx0ICs9IGluZGVudCAqIHRoaXMuX19pbmRlbnRfc2l6ZTtcbiAgcmVzdWx0ICs9IGNvbHVtbjtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbkluZGVudFN0cmluZ0NhY2hlLnByb3RvdHlwZS5nZXRfaW5kZW50X3N0cmluZyA9IGZ1bmN0aW9uKGluZGVudF9sZXZlbCwgY29sdW1uKSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLl9fYmFzZV9zdHJpbmc7XG4gIGNvbHVtbiA9IGNvbHVtbiB8fCAwO1xuICBpZiAoaW5kZW50X2xldmVsIDwgMCkge1xuICAgIGluZGVudF9sZXZlbCA9IDA7XG4gICAgcmVzdWx0ID0gJyc7XG4gIH1cbiAgY29sdW1uICs9IGluZGVudF9sZXZlbCAqIHRoaXMuX19pbmRlbnRfc2l6ZTtcbiAgdGhpcy5fX2Vuc3VyZV9jYWNoZShjb2x1bW4pO1xuICByZXN1bHQgKz0gdGhpcy5fX2NhY2hlW2NvbHVtbl07XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5JbmRlbnRTdHJpbmdDYWNoZS5wcm90b3R5cGUuX19lbnN1cmVfY2FjaGUgPSBmdW5jdGlvbihjb2x1bW4pIHtcbiAgd2hpbGUgKGNvbHVtbiA+PSB0aGlzLl9fY2FjaGUubGVuZ3RoKSB7XG4gICAgdGhpcy5fX2FkZF9jb2x1bW4oKTtcbiAgfVxufTtcblxuSW5kZW50U3RyaW5nQ2FjaGUucHJvdG90eXBlLl9fYWRkX2NvbHVtbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgY29sdW1uID0gdGhpcy5fX2NhY2hlLmxlbmd0aDtcbiAgdmFyIGluZGVudCA9IDA7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoaXMuX19pbmRlbnRfc2l6ZSAmJiBjb2x1bW4gPj0gdGhpcy5fX2luZGVudF9zaXplKSB7XG4gICAgaW5kZW50ID0gTWF0aC5mbG9vcihjb2x1bW4gLyB0aGlzLl9faW5kZW50X3NpemUpO1xuICAgIGNvbHVtbiAtPSBpbmRlbnQgKiB0aGlzLl9faW5kZW50X3NpemU7XG4gICAgcmVzdWx0ID0gbmV3IEFycmF5KGluZGVudCArIDEpLmpvaW4odGhpcy5fX2luZGVudF9zdHJpbmcpO1xuICB9XG4gIGlmIChjb2x1bW4pIHtcbiAgICByZXN1bHQgKz0gbmV3IEFycmF5KGNvbHVtbiArIDEpLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHRoaXMuX19jYWNoZS5wdXNoKHJlc3VsdCk7XG59O1xuXG5mdW5jdGlvbiBPdXRwdXQob3B0aW9ucywgYmFzZUluZGVudFN0cmluZykge1xuICB0aGlzLl9faW5kZW50X2NhY2hlID0gbmV3IEluZGVudFN0cmluZ0NhY2hlKG9wdGlvbnMsIGJhc2VJbmRlbnRTdHJpbmcpO1xuICB0aGlzLnJhdyA9IGZhbHNlO1xuICB0aGlzLl9lbmRfd2l0aF9uZXdsaW5lID0gb3B0aW9ucy5lbmRfd2l0aF9uZXdsaW5lO1xuICB0aGlzLmluZGVudF9zaXplID0gb3B0aW9ucy5pbmRlbnRfc2l6ZTtcbiAgdGhpcy53cmFwX2xpbmVfbGVuZ3RoID0gb3B0aW9ucy53cmFwX2xpbmVfbGVuZ3RoO1xuICB0aGlzLmluZGVudF9lbXB0eV9saW5lcyA9IG9wdGlvbnMuaW5kZW50X2VtcHR5X2xpbmVzO1xuICB0aGlzLl9fbGluZXMgPSBbXTtcbiAgdGhpcy5wcmV2aW91c19saW5lID0gbnVsbDtcbiAgdGhpcy5jdXJyZW50X2xpbmUgPSBudWxsO1xuICB0aGlzLm5leHRfbGluZSA9IG5ldyBPdXRwdXRMaW5lKHRoaXMpO1xuICB0aGlzLnNwYWNlX2JlZm9yZV90b2tlbiA9IGZhbHNlO1xuICB0aGlzLm5vbl9icmVha2luZ19zcGFjZSA9IGZhbHNlO1xuICB0aGlzLnByZXZpb3VzX3Rva2VuX3dyYXBwZWQgPSBmYWxzZTtcbiAgLy8gaW5pdGlhbGl6ZVxuICB0aGlzLl9fYWRkX291dHB1dGxpbmUoKTtcbn1cblxuT3V0cHV0LnByb3RvdHlwZS5fX2FkZF9vdXRwdXRsaW5lID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucHJldmlvdXNfbGluZSA9IHRoaXMuY3VycmVudF9saW5lO1xuICB0aGlzLmN1cnJlbnRfbGluZSA9IHRoaXMubmV4dF9saW5lLmNsb25lX2VtcHR5KCk7XG4gIHRoaXMuX19saW5lcy5wdXNoKHRoaXMuY3VycmVudF9saW5lKTtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuZ2V0X2xpbmVfbnVtYmVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9fbGluZXMubGVuZ3RoO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5nZXRfaW5kZW50X3N0cmluZyA9IGZ1bmN0aW9uKGluZGVudCwgY29sdW1uKSB7XG4gIHJldHVybiB0aGlzLl9faW5kZW50X2NhY2hlLmdldF9pbmRlbnRfc3RyaW5nKGluZGVudCwgY29sdW1uKTtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuZ2V0X2luZGVudF9zaXplID0gZnVuY3Rpb24oaW5kZW50LCBjb2x1bW4pIHtcbiAgcmV0dXJuIHRoaXMuX19pbmRlbnRfY2FjaGUuZ2V0X2luZGVudF9zaXplKGluZGVudCwgY29sdW1uKTtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuaXNfZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICF0aGlzLnByZXZpb3VzX2xpbmUgJiYgdGhpcy5jdXJyZW50X2xpbmUuaXNfZW1wdHkoKTtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuYWRkX25ld19saW5lID0gZnVuY3Rpb24oZm9yY2VfbmV3bGluZSkge1xuICAvLyBuZXZlciBuZXdsaW5lIGF0IHRoZSBzdGFydCBvZiBmaWxlXG4gIC8vIG90aGVyd2lzZSwgbmV3bGluZSBvbmx5IGlmIHdlIGRpZG4ndCBqdXN0IGFkZCBvbmUgb3Igd2UncmUgZm9yY2VkXG4gIGlmICh0aGlzLmlzX2VtcHR5KCkgfHxcbiAgICAoIWZvcmNlX25ld2xpbmUgJiYgdGhpcy5qdXN0X2FkZGVkX25ld2xpbmUoKSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBpZiByYXcgb3V0cHV0IGlzIGVuYWJsZWQsIGRvbid0IHByaW50IGFkZGl0aW9uYWwgbmV3bGluZXMsXG4gIC8vIGJ1dCBzdGlsbCByZXR1cm4gVHJ1ZSBhcyB0aG91Z2ggeW91IGhhZFxuICBpZiAoIXRoaXMucmF3KSB7XG4gICAgdGhpcy5fX2FkZF9vdXRwdXRsaW5lKCk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLmdldF9jb2RlID0gZnVuY3Rpb24oZW9sKSB7XG4gIHRoaXMudHJpbSh0cnVlKTtcblxuICAvLyBoYW5kbGUgc29tZSBlZGdlIGNhc2VzIHdoZXJlIHRoZSBsYXN0IHRva2Vuc1xuICAvLyBoYXMgdGV4dCB0aGF0IGVuZHMgd2l0aCBuZXdsaW5lKHMpXG4gIHZhciBsYXN0X2l0ZW0gPSB0aGlzLmN1cnJlbnRfbGluZS5wb3AoKTtcbiAgaWYgKGxhc3RfaXRlbSkge1xuICAgIGlmIChsYXN0X2l0ZW1bbGFzdF9pdGVtLmxlbmd0aCAtIDFdID09PSAnXFxuJykge1xuICAgICAgbGFzdF9pdGVtID0gbGFzdF9pdGVtLnJlcGxhY2UoL1xcbiskL2csICcnKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50X2xpbmUucHVzaChsYXN0X2l0ZW0pO1xuICB9XG5cbiAgaWYgKHRoaXMuX2VuZF93aXRoX25ld2xpbmUpIHtcbiAgICB0aGlzLl9fYWRkX291dHB1dGxpbmUoKTtcbiAgfVxuXG4gIHZhciBzd2VldF9jb2RlID0gdGhpcy5fX2xpbmVzLmpvaW4oJ1xcbicpO1xuXG4gIGlmIChlb2wgIT09ICdcXG4nKSB7XG4gICAgc3dlZXRfY29kZSA9IHN3ZWV0X2NvZGUucmVwbGFjZSgvW1xcbl0vZywgZW9sKTtcbiAgfVxuICByZXR1cm4gc3dlZXRfY29kZTtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuc2V0X3dyYXBfcG9pbnQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jdXJyZW50X2xpbmUuX3NldF93cmFwX3BvaW50KCk7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLnNldF9pbmRlbnQgPSBmdW5jdGlvbihpbmRlbnQsIGFsaWdubWVudCkge1xuICBpbmRlbnQgPSBpbmRlbnQgfHwgMDtcbiAgYWxpZ25tZW50ID0gYWxpZ25tZW50IHx8IDA7XG5cbiAgLy8gTmV4dCBsaW5lIHN0b3JlcyBhbGlnbm1lbnQgdmFsdWVzXG4gIHRoaXMubmV4dF9saW5lLnNldF9pbmRlbnQoaW5kZW50LCBhbGlnbm1lbnQpO1xuXG4gIC8vIE5ldmVyIGluZGVudCB5b3VyIGZpcnN0IG91dHB1dCBpbmRlbnQgYXQgdGhlIHN0YXJ0IG9mIHRoZSBmaWxlXG4gIGlmICh0aGlzLl9fbGluZXMubGVuZ3RoID4gMSkge1xuICAgIHRoaXMuY3VycmVudF9saW5lLnNldF9pbmRlbnQoaW5kZW50LCBhbGlnbm1lbnQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdGhpcy5jdXJyZW50X2xpbmUuc2V0X2luZGVudCgpO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLmFkZF9yYXdfdG9rZW4gPSBmdW5jdGlvbih0b2tlbikge1xuICBmb3IgKHZhciB4ID0gMDsgeCA8IHRva2VuLm5ld2xpbmVzOyB4KyspIHtcbiAgICB0aGlzLl9fYWRkX291dHB1dGxpbmUoKTtcbiAgfVxuICB0aGlzLmN1cnJlbnRfbGluZS5zZXRfaW5kZW50KC0xKTtcbiAgdGhpcy5jdXJyZW50X2xpbmUucHVzaCh0b2tlbi53aGl0ZXNwYWNlX2JlZm9yZSk7XG4gIHRoaXMuY3VycmVudF9saW5lLnB1c2godG9rZW4udGV4dCk7XG4gIHRoaXMuc3BhY2VfYmVmb3JlX3Rva2VuID0gZmFsc2U7XG4gIHRoaXMubm9uX2JyZWFraW5nX3NwYWNlID0gZmFsc2U7XG4gIHRoaXMucHJldmlvdXNfdG9rZW5fd3JhcHBlZCA9IGZhbHNlO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5hZGRfdG9rZW4gPSBmdW5jdGlvbihwcmludGFibGVfdG9rZW4pIHtcbiAgdGhpcy5fX2FkZF9zcGFjZV9iZWZvcmVfdG9rZW4oKTtcbiAgdGhpcy5jdXJyZW50X2xpbmUucHVzaChwcmludGFibGVfdG9rZW4pO1xuICB0aGlzLnNwYWNlX2JlZm9yZV90b2tlbiA9IGZhbHNlO1xuICB0aGlzLm5vbl9icmVha2luZ19zcGFjZSA9IGZhbHNlO1xuICB0aGlzLnByZXZpb3VzX3Rva2VuX3dyYXBwZWQgPSB0aGlzLmN1cnJlbnRfbGluZS5fYWxsb3dfd3JhcCgpO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5fX2FkZF9zcGFjZV9iZWZvcmVfdG9rZW4gPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc3BhY2VfYmVmb3JlX3Rva2VuICYmICF0aGlzLmp1c3RfYWRkZWRfbmV3bGluZSgpKSB7XG4gICAgaWYgKCF0aGlzLm5vbl9icmVha2luZ19zcGFjZSkge1xuICAgICAgdGhpcy5zZXRfd3JhcF9wb2ludCgpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRfbGluZS5wdXNoKCcgJyk7XG4gIH1cbn07XG5cbk91dHB1dC5wcm90b3R5cGUucmVtb3ZlX2luZGVudCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIHZhciBvdXRwdXRfbGVuZ3RoID0gdGhpcy5fX2xpbmVzLmxlbmd0aDtcbiAgd2hpbGUgKGluZGV4IDwgb3V0cHV0X2xlbmd0aCkge1xuICAgIHRoaXMuX19saW5lc1tpbmRleF0uX3JlbW92ZV9pbmRlbnQoKTtcbiAgICBpbmRleCsrO1xuICB9XG4gIHRoaXMuY3VycmVudF9saW5lLl9yZW1vdmVfd3JhcF9pbmRlbnQoKTtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uKGVhdF9uZXdsaW5lcykge1xuICBlYXRfbmV3bGluZXMgPSAoZWF0X25ld2xpbmVzID09PSB1bmRlZmluZWQpID8gZmFsc2UgOiBlYXRfbmV3bGluZXM7XG5cbiAgdGhpcy5jdXJyZW50X2xpbmUudHJpbSgpO1xuXG4gIHdoaWxlIChlYXRfbmV3bGluZXMgJiYgdGhpcy5fX2xpbmVzLmxlbmd0aCA+IDEgJiZcbiAgICB0aGlzLmN1cnJlbnRfbGluZS5pc19lbXB0eSgpKSB7XG4gICAgdGhpcy5fX2xpbmVzLnBvcCgpO1xuICAgIHRoaXMuY3VycmVudF9saW5lID0gdGhpcy5fX2xpbmVzW3RoaXMuX19saW5lcy5sZW5ndGggLSAxXTtcbiAgICB0aGlzLmN1cnJlbnRfbGluZS50cmltKCk7XG4gIH1cblxuICB0aGlzLnByZXZpb3VzX2xpbmUgPSB0aGlzLl9fbGluZXMubGVuZ3RoID4gMSA/XG4gICAgdGhpcy5fX2xpbmVzW3RoaXMuX19saW5lcy5sZW5ndGggLSAyXSA6IG51bGw7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLmp1c3RfYWRkZWRfbmV3bGluZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jdXJyZW50X2xpbmUuaXNfZW1wdHkoKTtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuanVzdF9hZGRlZF9ibGFua2xpbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaXNfZW1wdHkoKSB8fFxuICAgICh0aGlzLmN1cnJlbnRfbGluZS5pc19lbXB0eSgpICYmIHRoaXMucHJldmlvdXNfbGluZS5pc19lbXB0eSgpKTtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuZW5zdXJlX2VtcHR5X2xpbmVfYWJvdmUgPSBmdW5jdGlvbihzdGFydHNfd2l0aCwgZW5kc193aXRoKSB7XG4gIHZhciBpbmRleCA9IHRoaXMuX19saW5lcy5sZW5ndGggLSAyO1xuICB3aGlsZSAoaW5kZXggPj0gMCkge1xuICAgIHZhciBwb3RlbnRpYWxFbXB0eUxpbmUgPSB0aGlzLl9fbGluZXNbaW5kZXhdO1xuICAgIGlmIChwb3RlbnRpYWxFbXB0eUxpbmUuaXNfZW1wdHkoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIGlmIChwb3RlbnRpYWxFbXB0eUxpbmUuaXRlbSgwKS5pbmRleE9mKHN0YXJ0c193aXRoKSAhPT0gMCAmJlxuICAgICAgcG90ZW50aWFsRW1wdHlMaW5lLml0ZW0oLTEpICE9PSBlbmRzX3dpdGgpIHtcbiAgICAgIHRoaXMuX19saW5lcy5zcGxpY2UoaW5kZXggKyAxLCAwLCBuZXcgT3V0cHV0TGluZSh0aGlzKSk7XG4gICAgICB0aGlzLnByZXZpb3VzX2xpbmUgPSB0aGlzLl9fbGluZXNbdGhpcy5fX2xpbmVzLmxlbmd0aCAtIDJdO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGluZGV4LS07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLk91dHB1dCA9IE91dHB1dDtcblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxuLypqc2hpbnQgbm9kZTp0cnVlICovXG4vKlxuXG4gIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gIENvcHlyaWdodCAoYykgMjAwNy0yMDE4IEVpbmFyIExpZWxtYW5pcywgTGlhbSBOZXdtYW4sIGFuZCBjb250cmlidXRvcnMuXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICBTT0ZUV0FSRS5cbiovXG5cblxuXG5mdW5jdGlvbiBUb2tlbih0eXBlLCB0ZXh0LCBuZXdsaW5lcywgd2hpdGVzcGFjZV9iZWZvcmUpIHtcbiAgdGhpcy50eXBlID0gdHlwZTtcbiAgdGhpcy50ZXh0ID0gdGV4dDtcblxuICAvLyBjb21tZW50c19iZWZvcmUgYXJlXG4gIC8vIGNvbW1lbnRzIHRoYXQgaGF2ZSBhIG5ldyBsaW5lIGJlZm9yZSB0aGVtXG4gIC8vIGFuZCBtYXkgb3IgbWF5IG5vdCBoYXZlIGEgbmV3bGluZSBhZnRlclxuICAvLyB0aGlzIGlzIGEgc2V0IG9mIGNvbW1lbnRzIGJlZm9yZVxuICB0aGlzLmNvbW1lbnRzX2JlZm9yZSA9IG51bGw7IC8qIGlubGluZSBjb21tZW50Ki9cblxuXG4gIC8vIHRoaXMuY29tbWVudHNfYWZ0ZXIgPSAgbmV3IFRva2VuU3RyZWFtKCk7IC8vIG5vIG5ldyBsaW5lIGJlZm9yZSBhbmQgbmV3bGluZSBhZnRlclxuICB0aGlzLm5ld2xpbmVzID0gbmV3bGluZXMgfHwgMDtcbiAgdGhpcy53aGl0ZXNwYWNlX2JlZm9yZSA9IHdoaXRlc3BhY2VfYmVmb3JlIHx8ICcnO1xuICB0aGlzLnBhcmVudCA9IG51bGw7XG4gIHRoaXMubmV4dCA9IG51bGw7XG4gIHRoaXMucHJldmlvdXMgPSBudWxsO1xuICB0aGlzLm9wZW5lZCA9IG51bGw7XG4gIHRoaXMuY2xvc2VkID0gbnVsbDtcbiAgdGhpcy5kaXJlY3RpdmVzID0gbnVsbDtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cy5Ub2tlbiA9IFRva2VuO1xuXG5cbi8qKiovIH0pLFxuLyogNCAqLyxcbi8qIDUgKi8sXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLypcblxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG4qL1xuXG5cblxuZnVuY3Rpb24gT3B0aW9ucyhvcHRpb25zLCBtZXJnZV9jaGlsZF9maWVsZCkge1xuICB0aGlzLnJhd19vcHRpb25zID0gX21lcmdlT3B0cyhvcHRpb25zLCBtZXJnZV9jaGlsZF9maWVsZCk7XG5cbiAgLy8gU3VwcG9ydCBwYXNzaW5nIHRoZSBzb3VyY2UgdGV4dCBiYWNrIHdpdGggbm8gY2hhbmdlXG4gIHRoaXMuZGlzYWJsZWQgPSB0aGlzLl9nZXRfYm9vbGVhbignZGlzYWJsZWQnKTtcblxuICB0aGlzLmVvbCA9IHRoaXMuX2dldF9jaGFyYWN0ZXJzKCdlb2wnLCAnYXV0bycpO1xuICB0aGlzLmVuZF93aXRoX25ld2xpbmUgPSB0aGlzLl9nZXRfYm9vbGVhbignZW5kX3dpdGhfbmV3bGluZScpO1xuICB0aGlzLmluZGVudF9zaXplID0gdGhpcy5fZ2V0X251bWJlcignaW5kZW50X3NpemUnLCA0KTtcbiAgdGhpcy5pbmRlbnRfY2hhciA9IHRoaXMuX2dldF9jaGFyYWN0ZXJzKCdpbmRlbnRfY2hhcicsICcgJyk7XG4gIHRoaXMuaW5kZW50X2xldmVsID0gdGhpcy5fZ2V0X251bWJlcignaW5kZW50X2xldmVsJyk7XG5cbiAgdGhpcy5wcmVzZXJ2ZV9uZXdsaW5lcyA9IHRoaXMuX2dldF9ib29sZWFuKCdwcmVzZXJ2ZV9uZXdsaW5lcycsIHRydWUpO1xuICB0aGlzLm1heF9wcmVzZXJ2ZV9uZXdsaW5lcyA9IHRoaXMuX2dldF9udW1iZXIoJ21heF9wcmVzZXJ2ZV9uZXdsaW5lcycsIDMyNzg2KTtcbiAgaWYgKCF0aGlzLnByZXNlcnZlX25ld2xpbmVzKSB7XG4gICAgdGhpcy5tYXhfcHJlc2VydmVfbmV3bGluZXMgPSAwO1xuICB9XG5cbiAgdGhpcy5pbmRlbnRfd2l0aF90YWJzID0gdGhpcy5fZ2V0X2Jvb2xlYW4oJ2luZGVudF93aXRoX3RhYnMnLCB0aGlzLmluZGVudF9jaGFyID09PSAnXFx0Jyk7XG4gIGlmICh0aGlzLmluZGVudF93aXRoX3RhYnMpIHtcbiAgICB0aGlzLmluZGVudF9jaGFyID0gJ1xcdCc7XG5cbiAgICAvLyBpbmRlbnRfc2l6ZSBiZWhhdmlvciBjaGFuZ2VkIGFmdGVyIDEuOC42XG4gICAgLy8gSXQgdXNlZCB0byBiZSB0aGF0IGluZGVudF9zaXplIHdvdWxkIGJlXG4gICAgLy8gc2V0IHRvIDEgZm9yIGluZGVudF93aXRoX3RhYnMuIFRoYXQgaXMgbm8gbG9uZ2VyIG5lZWRlZCBhbmRcbiAgICAvLyBhY3R1YWxseSBkb2Vzbid0IG1ha2Ugc2Vuc2UgLSB3aHkgbm90IHVzZSBzcGFjZXM/IEZ1cnRoZXIsXG4gICAgLy8gdGhhdCBtaWdodCBwcm9kdWNlIHVuZXhwZWN0ZWQgYmVoYXZpb3IgLSB0YWJzIGJlaW5nIHVzZWRcbiAgICAvLyBmb3Igc2luZ2xlLWNvbHVtbiBhbGlnbm1lbnQuIFNvLCB3aGVuIGluZGVudF93aXRoX3RhYnMgaXMgdHJ1ZVxuICAgIC8vIGFuZCBpbmRlbnRfc2l6ZSBpcyAxLCByZXNldCBpbmRlbnRfc2l6ZSB0byA0LlxuICAgIGlmICh0aGlzLmluZGVudF9zaXplID09PSAxKSB7XG4gICAgICB0aGlzLmluZGVudF9zaXplID0gNDtcbiAgICB9XG4gIH1cblxuICAvLyBCYWNrd2FyZHMgY29tcGF0IHdpdGggMS4zLnhcbiAgdGhpcy53cmFwX2xpbmVfbGVuZ3RoID0gdGhpcy5fZ2V0X251bWJlcignd3JhcF9saW5lX2xlbmd0aCcsIHRoaXMuX2dldF9udW1iZXIoJ21heF9jaGFyJykpO1xuXG4gIHRoaXMuaW5kZW50X2VtcHR5X2xpbmVzID0gdGhpcy5fZ2V0X2Jvb2xlYW4oJ2luZGVudF9lbXB0eV9saW5lcycpO1xuXG4gIC8vIHZhbGlkIHRlbXBsYXRpbmcgbGFuZ3VhZ2VzIFsnZGphbmdvJywgJ2VyYicsICdoYW5kbGViYXJzJywgJ3BocCcsICdzbWFydHknXVxuICAvLyBGb3Igbm93LCAnYXV0bycgPSBhbGwgb2ZmIGZvciBqYXZhc2NyaXB0LCBhbGwgb24gZm9yIGh0bWwgKGFuZCBpbmxpbmUgamF2YXNjcmlwdCkuXG4gIC8vIG90aGVyIHZhbHVlcyBpZ25vcmVkXG4gIHRoaXMudGVtcGxhdGluZyA9IHRoaXMuX2dldF9zZWxlY3Rpb25fbGlzdCgndGVtcGxhdGluZycsIFsnYXV0bycsICdub25lJywgJ2RqYW5nbycsICdlcmInLCAnaGFuZGxlYmFycycsICdwaHAnLCAnc21hcnR5J10sIFsnYXV0byddKTtcbn1cblxuT3B0aW9ucy5wcm90b3R5cGUuX2dldF9hcnJheSA9IGZ1bmN0aW9uKG5hbWUsIGRlZmF1bHRfdmFsdWUpIHtcbiAgdmFyIG9wdGlvbl92YWx1ZSA9IHRoaXMucmF3X29wdGlvbnNbbmFtZV07XG4gIHZhciByZXN1bHQgPSBkZWZhdWx0X3ZhbHVlIHx8IFtdO1xuICBpZiAodHlwZW9mIG9wdGlvbl92YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAob3B0aW9uX3ZhbHVlICE9PSBudWxsICYmIHR5cGVvZiBvcHRpb25fdmFsdWUuY29uY2F0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXN1bHQgPSBvcHRpb25fdmFsdWUuY29uY2F0KCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25fdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gb3B0aW9uX3ZhbHVlLnNwbGl0KC9bXmEtekEtWjAtOV9cXC9cXC1dKy8pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5PcHRpb25zLnByb3RvdHlwZS5fZ2V0X2Jvb2xlYW4gPSBmdW5jdGlvbihuYW1lLCBkZWZhdWx0X3ZhbHVlKSB7XG4gIHZhciBvcHRpb25fdmFsdWUgPSB0aGlzLnJhd19vcHRpb25zW25hbWVdO1xuICB2YXIgcmVzdWx0ID0gb3B0aW9uX3ZhbHVlID09PSB1bmRlZmluZWQgPyAhIWRlZmF1bHRfdmFsdWUgOiAhIW9wdGlvbl92YWx1ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbk9wdGlvbnMucHJvdG90eXBlLl9nZXRfY2hhcmFjdGVycyA9IGZ1bmN0aW9uKG5hbWUsIGRlZmF1bHRfdmFsdWUpIHtcbiAgdmFyIG9wdGlvbl92YWx1ZSA9IHRoaXMucmF3X29wdGlvbnNbbmFtZV07XG4gIHZhciByZXN1bHQgPSBkZWZhdWx0X3ZhbHVlIHx8ICcnO1xuICBpZiAodHlwZW9mIG9wdGlvbl92YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSBvcHRpb25fdmFsdWUucmVwbGFjZSgvXFxcXHIvLCAnXFxyJykucmVwbGFjZSgvXFxcXG4vLCAnXFxuJykucmVwbGFjZSgvXFxcXHQvLCAnXFx0Jyk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbk9wdGlvbnMucHJvdG90eXBlLl9nZXRfbnVtYmVyID0gZnVuY3Rpb24obmFtZSwgZGVmYXVsdF92YWx1ZSkge1xuICB2YXIgb3B0aW9uX3ZhbHVlID0gdGhpcy5yYXdfb3B0aW9uc1tuYW1lXTtcbiAgZGVmYXVsdF92YWx1ZSA9IHBhcnNlSW50KGRlZmF1bHRfdmFsdWUsIDEwKTtcbiAgaWYgKGlzTmFOKGRlZmF1bHRfdmFsdWUpKSB7XG4gICAgZGVmYXVsdF92YWx1ZSA9IDA7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHBhcnNlSW50KG9wdGlvbl92YWx1ZSwgMTApO1xuICBpZiAoaXNOYU4ocmVzdWx0KSkge1xuICAgIHJlc3VsdCA9IGRlZmF1bHRfdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbk9wdGlvbnMucHJvdG90eXBlLl9nZXRfc2VsZWN0aW9uID0gZnVuY3Rpb24obmFtZSwgc2VsZWN0aW9uX2xpc3QsIGRlZmF1bHRfdmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2dldF9zZWxlY3Rpb25fbGlzdChuYW1lLCBzZWxlY3Rpb25fbGlzdCwgZGVmYXVsdF92YWx1ZSk7XG4gIGlmIChyZXN1bHQubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJJbnZhbGlkIE9wdGlvbiBWYWx1ZTogVGhlIG9wdGlvbiAnXCIgKyBuYW1lICsgXCInIGNhbiBvbmx5IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcXG5cIiArXG4gICAgICBzZWxlY3Rpb25fbGlzdCArIFwiXFxuWW91IHBhc3NlZCBpbjogJ1wiICsgdGhpcy5yYXdfb3B0aW9uc1tuYW1lXSArIFwiJ1wiKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHRbMF07XG59O1xuXG5cbk9wdGlvbnMucHJvdG90eXBlLl9nZXRfc2VsZWN0aW9uX2xpc3QgPSBmdW5jdGlvbihuYW1lLCBzZWxlY3Rpb25fbGlzdCwgZGVmYXVsdF92YWx1ZSkge1xuICBpZiAoIXNlbGVjdGlvbl9saXN0IHx8IHNlbGVjdGlvbl9saXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlNlbGVjdGlvbiBsaXN0IGNhbm5vdCBiZSBlbXB0eS5cIik7XG4gIH1cblxuICBkZWZhdWx0X3ZhbHVlID0gZGVmYXVsdF92YWx1ZSB8fCBbc2VsZWN0aW9uX2xpc3RbMF1dO1xuICBpZiAoIXRoaXMuX2lzX3ZhbGlkX3NlbGVjdGlvbihkZWZhdWx0X3ZhbHVlLCBzZWxlY3Rpb25fbGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIERlZmF1bHQgVmFsdWUhXCIpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2dldF9hcnJheShuYW1lLCBkZWZhdWx0X3ZhbHVlKTtcbiAgaWYgKCF0aGlzLl9pc192YWxpZF9zZWxlY3Rpb24ocmVzdWx0LCBzZWxlY3Rpb25fbGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIkludmFsaWQgT3B0aW9uIFZhbHVlOiBUaGUgb3B0aW9uICdcIiArIG5hbWUgKyBcIicgY2FuIGNvbnRhaW4gb25seSB0aGUgZm9sbG93aW5nIHZhbHVlczpcXG5cIiArXG4gICAgICBzZWxlY3Rpb25fbGlzdCArIFwiXFxuWW91IHBhc3NlZCBpbjogJ1wiICsgdGhpcy5yYXdfb3B0aW9uc1tuYW1lXSArIFwiJ1wiKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5PcHRpb25zLnByb3RvdHlwZS5faXNfdmFsaWRfc2VsZWN0aW9uID0gZnVuY3Rpb24ocmVzdWx0LCBzZWxlY3Rpb25fbGlzdCkge1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCAmJiBzZWxlY3Rpb25fbGlzdC5sZW5ndGggJiZcbiAgICAhcmVzdWx0LnNvbWUoZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gc2VsZWN0aW9uX2xpc3QuaW5kZXhPZihpdGVtKSA9PT0gLTE7IH0pO1xufTtcblxuXG4vLyBtZXJnZXMgY2hpbGQgb3B0aW9ucyB1cCB3aXRoIHRoZSBwYXJlbnQgb3B0aW9ucyBvYmplY3Rcbi8vIEV4YW1wbGU6IG9iaiA9IHthOiAxLCBiOiB7YTogMn19XG4vLyAgICAgICAgICBtZXJnZU9wdHMob2JqLCAnYicpXG4vL1xuLy8gICAgICAgICAgUmV0dXJuczoge2E6IDJ9XG5mdW5jdGlvbiBfbWVyZ2VPcHRzKGFsbE9wdGlvbnMsIGNoaWxkRmllbGROYW1lKSB7XG4gIHZhciBmaW5hbE9wdHMgPSB7fTtcbiAgYWxsT3B0aW9ucyA9IF9ub3JtYWxpemVPcHRzKGFsbE9wdGlvbnMpO1xuICB2YXIgbmFtZTtcblxuICBmb3IgKG5hbWUgaW4gYWxsT3B0aW9ucykge1xuICAgIGlmIChuYW1lICE9PSBjaGlsZEZpZWxkTmFtZSkge1xuICAgICAgZmluYWxPcHRzW25hbWVdID0gYWxsT3B0aW9uc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvL21lcmdlIGluIHRoZSBwZXIgdHlwZSBzZXR0aW5ncyBmb3IgdGhlIGNoaWxkRmllbGROYW1lXG4gIGlmIChjaGlsZEZpZWxkTmFtZSAmJiBhbGxPcHRpb25zW2NoaWxkRmllbGROYW1lXSkge1xuICAgIGZvciAobmFtZSBpbiBhbGxPcHRpb25zW2NoaWxkRmllbGROYW1lXSkge1xuICAgICAgZmluYWxPcHRzW25hbWVdID0gYWxsT3B0aW9uc1tjaGlsZEZpZWxkTmFtZV1bbmFtZV07XG4gICAgfVxuICB9XG4gIHJldHVybiBmaW5hbE9wdHM7XG59XG5cbmZ1bmN0aW9uIF9ub3JtYWxpemVPcHRzKG9wdGlvbnMpIHtcbiAgdmFyIGNvbnZlcnRlZE9wdHMgPSB7fTtcbiAgdmFyIGtleTtcblxuICBmb3IgKGtleSBpbiBvcHRpb25zKSB7XG4gICAgdmFyIG5ld0tleSA9IGtleS5yZXBsYWNlKC8tL2csIFwiX1wiKTtcbiAgICBjb252ZXJ0ZWRPcHRzW25ld0tleV0gPSBvcHRpb25zW2tleV07XG4gIH1cbiAgcmV0dXJuIGNvbnZlcnRlZE9wdHM7XG59XG5cbm1vZHVsZS5leHBvcnRzLk9wdGlvbnMgPSBPcHRpb25zO1xubW9kdWxlLmV4cG9ydHMubm9ybWFsaXplT3B0cyA9IF9ub3JtYWxpemVPcHRzO1xubW9kdWxlLmV4cG9ydHMubWVyZ2VPcHRzID0gX21lcmdlT3B0cztcblxuXG4vKioqLyB9KSxcbi8qIDcgKi8sXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLypcblxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG4qL1xuXG5cblxudmFyIHJlZ2V4cF9oYXNfc3RpY2t5ID0gUmVnRXhwLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3RpY2t5Jyk7XG5cbmZ1bmN0aW9uIElucHV0U2Nhbm5lcihpbnB1dF9zdHJpbmcpIHtcbiAgdGhpcy5fX2lucHV0ID0gaW5wdXRfc3RyaW5nIHx8ICcnO1xuICB0aGlzLl9faW5wdXRfbGVuZ3RoID0gdGhpcy5fX2lucHV0Lmxlbmd0aDtcbiAgdGhpcy5fX3Bvc2l0aW9uID0gMDtcbn1cblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX19wb3NpdGlvbiA9IDA7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLmJhY2sgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX19wb3NpdGlvbiA+IDApIHtcbiAgICB0aGlzLl9fcG9zaXRpb24gLT0gMTtcbiAgfVxufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5oYXNOZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9fcG9zaXRpb24gPCB0aGlzLl9faW5wdXRfbGVuZ3RoO1xufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB2YWwgPSBudWxsO1xuICBpZiAodGhpcy5oYXNOZXh0KCkpIHtcbiAgICB2YWwgPSB0aGlzLl9faW5wdXQuY2hhckF0KHRoaXMuX19wb3NpdGlvbik7XG4gICAgdGhpcy5fX3Bvc2l0aW9uICs9IDE7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn07XG5cbklucHV0U2Nhbm5lci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIHZhciB2YWwgPSBudWxsO1xuICBpbmRleCA9IGluZGV4IHx8IDA7XG4gIGluZGV4ICs9IHRoaXMuX19wb3NpdGlvbjtcbiAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLl9faW5wdXRfbGVuZ3RoKSB7XG4gICAgdmFsID0gdGhpcy5fX2lucHV0LmNoYXJBdChpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn07XG5cbi8vIFRoaXMgaXMgYSBKYXZhU2NyaXB0IG9ubHkgaGVscGVyIGZ1bmN0aW9uIChub3QgaW4gcHl0aG9uKVxuLy8gSmF2YXNjcmlwdCBkb2Vzbid0IGhhdmUgYSBtYXRjaCBtZXRob2Rcbi8vIGFuZCBub3QgYWxsIGltcGxlbWVudGF0aW9uIHN1cHBvcnQgXCJzdGlja3lcIiBmbGFnLlxuLy8gSWYgdGhleSBkbyBub3Qgc3VwcG9ydCBzdGlja3kgdGhlbiBib3RoIHRoaXMubWF0Y2goKSBhbmQgdGhpcy50ZXN0KCkgbWV0aG9kXG4vLyBtdXN0IGdldCB0aGUgbWF0Y2ggYW5kIGNoZWNrIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2guXG4vLyBJZiBzdGlja3kgaXMgc3VwcG9ydGVkIGFuZCBzZXQsIHRoaXMgbWV0aG9kIHdpbGwgdXNlIGl0LlxuLy8gT3RoZXJ3aXNlIGl0IHdpbGwgY2hlY2sgdGhhdCBnbG9iYWwgaXMgc2V0LCBhbmQgZmFsbCBiYWNrIHRvIHRoZSBzbG93ZXIgbWV0aG9kLlxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5fX21hdGNoID0gZnVuY3Rpb24ocGF0dGVybiwgaW5kZXgpIHtcbiAgcGF0dGVybi5sYXN0SW5kZXggPSBpbmRleDtcbiAgdmFyIHBhdHRlcm5fbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy5fX2lucHV0KTtcblxuICBpZiAocGF0dGVybl9tYXRjaCAmJiAhKHJlZ2V4cF9oYXNfc3RpY2t5ICYmIHBhdHRlcm4uc3RpY2t5KSkge1xuICAgIGlmIChwYXR0ZXJuX21hdGNoLmluZGV4ICE9PSBpbmRleCkge1xuICAgICAgcGF0dGVybl9tYXRjaCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdHRlcm5fbWF0Y2g7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbihwYXR0ZXJuLCBpbmRleCkge1xuICBpbmRleCA9IGluZGV4IHx8IDA7XG4gIGluZGV4ICs9IHRoaXMuX19wb3NpdGlvbjtcblxuICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuX19pbnB1dF9sZW5ndGgpIHtcbiAgICByZXR1cm4gISF0aGlzLl9fbWF0Y2gocGF0dGVybiwgaW5kZXgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS50ZXN0Q2hhciA9IGZ1bmN0aW9uKHBhdHRlcm4sIGluZGV4KSB7XG4gIC8vIHRlc3Qgb25lIGNoYXJhY3RlciByZWdleCBtYXRjaFxuICB2YXIgdmFsID0gdGhpcy5wZWVrKGluZGV4KTtcbiAgcGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHBhdHRlcm4udGVzdCh2YWwpO1xufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uKHBhdHRlcm4pIHtcbiAgdmFyIHBhdHRlcm5fbWF0Y2ggPSB0aGlzLl9fbWF0Y2gocGF0dGVybiwgdGhpcy5fX3Bvc2l0aW9uKTtcbiAgaWYgKHBhdHRlcm5fbWF0Y2gpIHtcbiAgICB0aGlzLl9fcG9zaXRpb24gKz0gcGF0dGVybl9tYXRjaFswXS5sZW5ndGg7XG4gIH0gZWxzZSB7XG4gICAgcGF0dGVybl9tYXRjaCA9IG51bGw7XG4gIH1cbiAgcmV0dXJuIHBhdHRlcm5fbWF0Y2g7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbihzdGFydGluZ19wYXR0ZXJuLCB1bnRpbF9wYXR0ZXJuLCB1bnRpbF9hZnRlcikge1xuICB2YXIgdmFsID0gJyc7XG4gIHZhciBtYXRjaDtcbiAgaWYgKHN0YXJ0aW5nX3BhdHRlcm4pIHtcbiAgICBtYXRjaCA9IHRoaXMubWF0Y2goc3RhcnRpbmdfcGF0dGVybik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICB2YWwgKz0gbWF0Y2hbMF07XG4gICAgfVxuICB9XG4gIGlmICh1bnRpbF9wYXR0ZXJuICYmIChtYXRjaCB8fCAhc3RhcnRpbmdfcGF0dGVybikpIHtcbiAgICB2YWwgKz0gdGhpcy5yZWFkVW50aWwodW50aWxfcGF0dGVybiwgdW50aWxfYWZ0ZXIpO1xuICB9XG4gIHJldHVybiB2YWw7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLnJlYWRVbnRpbCA9IGZ1bmN0aW9uKHBhdHRlcm4sIHVudGlsX2FmdGVyKSB7XG4gIHZhciB2YWwgPSAnJztcbiAgdmFyIG1hdGNoX2luZGV4ID0gdGhpcy5fX3Bvc2l0aW9uO1xuICBwYXR0ZXJuLmxhc3RJbmRleCA9IHRoaXMuX19wb3NpdGlvbjtcbiAgdmFyIHBhdHRlcm5fbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy5fX2lucHV0KTtcbiAgaWYgKHBhdHRlcm5fbWF0Y2gpIHtcbiAgICBtYXRjaF9pbmRleCA9IHBhdHRlcm5fbWF0Y2guaW5kZXg7XG4gICAgaWYgKHVudGlsX2FmdGVyKSB7XG4gICAgICBtYXRjaF9pbmRleCArPSBwYXR0ZXJuX21hdGNoWzBdLmxlbmd0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbWF0Y2hfaW5kZXggPSB0aGlzLl9faW5wdXRfbGVuZ3RoO1xuICB9XG5cbiAgdmFsID0gdGhpcy5fX2lucHV0LnN1YnN0cmluZyh0aGlzLl9fcG9zaXRpb24sIG1hdGNoX2luZGV4KTtcbiAgdGhpcy5fX3Bvc2l0aW9uID0gbWF0Y2hfaW5kZXg7XG4gIHJldHVybiB2YWw7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLnJlYWRVbnRpbEFmdGVyID0gZnVuY3Rpb24ocGF0dGVybikge1xuICByZXR1cm4gdGhpcy5yZWFkVW50aWwocGF0dGVybiwgdHJ1ZSk7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLmdldF9yZWdleHAgPSBmdW5jdGlvbihwYXR0ZXJuLCBtYXRjaF9mcm9tKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICB2YXIgZmxhZ3MgPSAnZyc7XG4gIGlmIChtYXRjaF9mcm9tICYmIHJlZ2V4cF9oYXNfc3RpY2t5KSB7XG4gICAgZmxhZ3MgPSAneSc7XG4gIH1cbiAgLy8gc3RyaW5ncyBhcmUgY29udmVydGVkIHRvIHJlZ2V4cFxuICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIgJiYgcGF0dGVybiAhPT0gJycpIHtcbiAgICAvLyByZXN1bHQgPSBuZXcgUmVnRXhwKHBhdHRlcm4ucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyksIGZsYWdzKTtcbiAgICByZXN1bHQgPSBuZXcgUmVnRXhwKHBhdHRlcm4sIGZsYWdzKTtcbiAgfSBlbHNlIGlmIChwYXR0ZXJuKSB7XG4gICAgcmVzdWx0ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLnNvdXJjZSwgZmxhZ3MpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLmdldF9saXRlcmFsX3JlZ2V4cCA9IGZ1bmN0aW9uKGxpdGVyYWxfc3RyaW5nKSB7XG4gIHJldHVybiBSZWdFeHAobGl0ZXJhbF9zdHJpbmcucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJykpO1xufTtcblxuLyogY3NzIGJlYXV0aWZpZXIgbGVnYWN5IGhlbHBlcnMgKi9cbklucHV0U2Nhbm5lci5wcm90b3R5cGUucGVla1VudGlsQWZ0ZXIgPSBmdW5jdGlvbihwYXR0ZXJuKSB7XG4gIHZhciBzdGFydCA9IHRoaXMuX19wb3NpdGlvbjtcbiAgdmFyIHZhbCA9IHRoaXMucmVhZFVudGlsQWZ0ZXIocGF0dGVybik7XG4gIHRoaXMuX19wb3NpdGlvbiA9IHN0YXJ0O1xuICByZXR1cm4gdmFsO1xufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5sb29rQmFjayA9IGZ1bmN0aW9uKHRlc3RWYWwpIHtcbiAgdmFyIHN0YXJ0ID0gdGhpcy5fX3Bvc2l0aW9uIC0gMTtcbiAgcmV0dXJuIHN0YXJ0ID49IHRlc3RWYWwubGVuZ3RoICYmIHRoaXMuX19pbnB1dC5zdWJzdHJpbmcoc3RhcnQgLSB0ZXN0VmFsLmxlbmd0aCwgc3RhcnQpXG4gICAgLnRvTG93ZXJDYXNlKCkgPT09IHRlc3RWYWw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5JbnB1dFNjYW5uZXIgPSBJbnB1dFNjYW5uZXI7XG5cblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLypqc2hpbnQgbm9kZTp0cnVlICovXG4vKlxuXG4gIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gIENvcHlyaWdodCAoYykgMjAwNy0yMDE4IEVpbmFyIExpZWxtYW5pcywgTGlhbSBOZXdtYW4sIGFuZCBjb250cmlidXRvcnMuXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICBTT0ZUV0FSRS5cbiovXG5cblxuXG52YXIgSW5wdXRTY2FubmVyID0gKF9fd2VicGFja19yZXF1aXJlX18oOCkuSW5wdXRTY2FubmVyKTtcbnZhciBUb2tlbiA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpLlRva2VuKTtcbnZhciBUb2tlblN0cmVhbSA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKS5Ub2tlblN0cmVhbSk7XG52YXIgV2hpdGVzcGFjZVBhdHRlcm4gPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxMSkuV2hpdGVzcGFjZVBhdHRlcm4pO1xuXG52YXIgVE9LRU4gPSB7XG4gIFNUQVJUOiAnVEtfU1RBUlQnLFxuICBSQVc6ICdUS19SQVcnLFxuICBFT0Y6ICdUS19FT0YnXG59O1xuXG52YXIgVG9rZW5pemVyID0gZnVuY3Rpb24oaW5wdXRfc3RyaW5nLCBvcHRpb25zKSB7XG4gIHRoaXMuX2lucHV0ID0gbmV3IElucHV0U2Nhbm5lcihpbnB1dF9zdHJpbmcpO1xuICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5fX3Rva2VucyA9IG51bGw7XG5cbiAgdGhpcy5fcGF0dGVybnMgPSB7fTtcbiAgdGhpcy5fcGF0dGVybnMud2hpdGVzcGFjZSA9IG5ldyBXaGl0ZXNwYWNlUGF0dGVybih0aGlzLl9pbnB1dCk7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLnRva2VuaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2lucHV0LnJlc3RhcnQoKTtcbiAgdGhpcy5fX3Rva2VucyA9IG5ldyBUb2tlblN0cmVhbSgpO1xuXG4gIHRoaXMuX3Jlc2V0KCk7XG5cbiAgdmFyIGN1cnJlbnQ7XG4gIHZhciBwcmV2aW91cyA9IG5ldyBUb2tlbihUT0tFTi5TVEFSVCwgJycpO1xuICB2YXIgb3Blbl90b2tlbiA9IG51bGw7XG4gIHZhciBvcGVuX3N0YWNrID0gW107XG4gIHZhciBjb21tZW50cyA9IG5ldyBUb2tlblN0cmVhbSgpO1xuXG4gIHdoaWxlIChwcmV2aW91cy50eXBlICE9PSBUT0tFTi5FT0YpIHtcbiAgICBjdXJyZW50ID0gdGhpcy5fZ2V0X25leHRfdG9rZW4ocHJldmlvdXMsIG9wZW5fdG9rZW4pO1xuICAgIHdoaWxlICh0aGlzLl9pc19jb21tZW50KGN1cnJlbnQpKSB7XG4gICAgICBjb21tZW50cy5hZGQoY3VycmVudCk7XG4gICAgICBjdXJyZW50ID0gdGhpcy5fZ2V0X25leHRfdG9rZW4ocHJldmlvdXMsIG9wZW5fdG9rZW4pO1xuICAgIH1cblxuICAgIGlmICghY29tbWVudHMuaXNFbXB0eSgpKSB7XG4gICAgICBjdXJyZW50LmNvbW1lbnRzX2JlZm9yZSA9IGNvbW1lbnRzO1xuICAgICAgY29tbWVudHMgPSBuZXcgVG9rZW5TdHJlYW0oKTtcbiAgICB9XG5cbiAgICBjdXJyZW50LnBhcmVudCA9IG9wZW5fdG9rZW47XG5cbiAgICBpZiAodGhpcy5faXNfb3BlbmluZyhjdXJyZW50KSkge1xuICAgICAgb3Blbl9zdGFjay5wdXNoKG9wZW5fdG9rZW4pO1xuICAgICAgb3Blbl90b2tlbiA9IGN1cnJlbnQ7XG4gICAgfSBlbHNlIGlmIChvcGVuX3Rva2VuICYmIHRoaXMuX2lzX2Nsb3NpbmcoY3VycmVudCwgb3Blbl90b2tlbikpIHtcbiAgICAgIGN1cnJlbnQub3BlbmVkID0gb3Blbl90b2tlbjtcbiAgICAgIG9wZW5fdG9rZW4uY2xvc2VkID0gY3VycmVudDtcbiAgICAgIG9wZW5fdG9rZW4gPSBvcGVuX3N0YWNrLnBvcCgpO1xuICAgICAgY3VycmVudC5wYXJlbnQgPSBvcGVuX3Rva2VuO1xuICAgIH1cblxuICAgIGN1cnJlbnQucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICBwcmV2aW91cy5uZXh0ID0gY3VycmVudDtcblxuICAgIHRoaXMuX190b2tlbnMuYWRkKGN1cnJlbnQpO1xuICAgIHByZXZpb3VzID0gY3VycmVudDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9fdG9rZW5zO1xufTtcblxuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9pc19maXJzdF90b2tlbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fX3Rva2Vucy5pc0VtcHR5KCk7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKCkge307XG5cblRva2VuaXplci5wcm90b3R5cGUuX2dldF9uZXh0X3Rva2VuID0gZnVuY3Rpb24ocHJldmlvdXNfdG9rZW4sIG9wZW5fdG9rZW4pIHsgLy8ganNoaW50IHVudXNlZDpmYWxzZVxuICB0aGlzLl9yZWFkV2hpdGVzcGFjZSgpO1xuICB2YXIgcmVzdWx0aW5nX3N0cmluZyA9IHRoaXMuX2lucHV0LnJlYWQoLy4rL2cpO1xuICBpZiAocmVzdWx0aW5nX3N0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uUkFXLCByZXN1bHRpbmdfc3RyaW5nKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLkVPRiwgJycpO1xuICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9pc19jb21tZW50ID0gZnVuY3Rpb24oY3VycmVudF90b2tlbikgeyAvLyBqc2hpbnQgdW51c2VkOmZhbHNlXG4gIHJldHVybiBmYWxzZTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX2lzX29wZW5pbmcgPSBmdW5jdGlvbihjdXJyZW50X3Rva2VuKSB7IC8vIGpzaGludCB1bnVzZWQ6ZmFsc2VcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5faXNfY2xvc2luZyA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4sIG9wZW5fdG9rZW4pIHsgLy8ganNoaW50IHVudXNlZDpmYWxzZVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9jcmVhdGVfdG9rZW4gPSBmdW5jdGlvbih0eXBlLCB0ZXh0KSB7XG4gIHZhciB0b2tlbiA9IG5ldyBUb2tlbih0eXBlLCB0ZXh0LFxuICAgIHRoaXMuX3BhdHRlcm5zLndoaXRlc3BhY2UubmV3bGluZV9jb3VudCxcbiAgICB0aGlzLl9wYXR0ZXJucy53aGl0ZXNwYWNlLndoaXRlc3BhY2VfYmVmb3JlX3Rva2VuKTtcbiAgcmV0dXJuIHRva2VuO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fcmVhZFdoaXRlc3BhY2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX3BhdHRlcm5zLndoaXRlc3BhY2UucmVhZCgpO1xufTtcblxuXG5cbm1vZHVsZS5leHBvcnRzLlRva2VuaXplciA9IFRva2VuaXplcjtcbm1vZHVsZS5leHBvcnRzLlRPS0VOID0gVE9LRU47XG5cblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG4vKmpzaGludCBub2RlOnRydWUgKi9cbi8qXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuKi9cblxuXG5cbmZ1bmN0aW9uIFRva2VuU3RyZWFtKHBhcmVudF90b2tlbikge1xuICAvLyBwcml2YXRlXG4gIHRoaXMuX190b2tlbnMgPSBbXTtcbiAgdGhpcy5fX3Rva2Vuc19sZW5ndGggPSB0aGlzLl9fdG9rZW5zLmxlbmd0aDtcbiAgdGhpcy5fX3Bvc2l0aW9uID0gMDtcbiAgdGhpcy5fX3BhcmVudF90b2tlbiA9IHBhcmVudF90b2tlbjtcbn1cblxuVG9rZW5TdHJlYW0ucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3Bvc2l0aW9uID0gMDtcbn07XG5cblRva2VuU3RyZWFtLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9fdG9rZW5zX2xlbmd0aCA9PT0gMDtcbn07XG5cblRva2VuU3RyZWFtLnByb3RvdHlwZS5oYXNOZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9fcG9zaXRpb24gPCB0aGlzLl9fdG9rZW5zX2xlbmd0aDtcbn07XG5cblRva2VuU3RyZWFtLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB2YWwgPSBudWxsO1xuICBpZiAodGhpcy5oYXNOZXh0KCkpIHtcbiAgICB2YWwgPSB0aGlzLl9fdG9rZW5zW3RoaXMuX19wb3NpdGlvbl07XG4gICAgdGhpcy5fX3Bvc2l0aW9uICs9IDE7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn07XG5cblRva2VuU3RyZWFtLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgdmFyIHZhbCA9IG51bGw7XG4gIGluZGV4ID0gaW5kZXggfHwgMDtcbiAgaW5kZXggKz0gdGhpcy5fX3Bvc2l0aW9uO1xuICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuX190b2tlbnNfbGVuZ3RoKSB7XG4gICAgdmFsID0gdGhpcy5fX3Rva2Vuc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn07XG5cblRva2VuU3RyZWFtLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih0b2tlbikge1xuICBpZiAodGhpcy5fX3BhcmVudF90b2tlbikge1xuICAgIHRva2VuLnBhcmVudCA9IHRoaXMuX19wYXJlbnRfdG9rZW47XG4gIH1cbiAgdGhpcy5fX3Rva2Vucy5wdXNoKHRva2VuKTtcbiAgdGhpcy5fX3Rva2Vuc19sZW5ndGggKz0gMTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLlRva2VuU3RyZWFtID0gVG9rZW5TdHJlYW07XG5cblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLypcblxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG4qL1xuXG5cblxudmFyIFBhdHRlcm4gPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxMikuUGF0dGVybik7XG5cbmZ1bmN0aW9uIFdoaXRlc3BhY2VQYXR0ZXJuKGlucHV0X3NjYW5uZXIsIHBhcmVudCkge1xuICBQYXR0ZXJuLmNhbGwodGhpcywgaW5wdXRfc2Nhbm5lciwgcGFyZW50KTtcbiAgaWYgKHBhcmVudCkge1xuICAgIHRoaXMuX2xpbmVfcmVnZXhwID0gdGhpcy5faW5wdXQuZ2V0X3JlZ2V4cChwYXJlbnQuX2xpbmVfcmVnZXhwKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9fc2V0X3doaXRlc3BhY2VfcGF0dGVybnMoJycsICcnKTtcbiAgfVxuXG4gIHRoaXMubmV3bGluZV9jb3VudCA9IDA7XG4gIHRoaXMud2hpdGVzcGFjZV9iZWZvcmVfdG9rZW4gPSAnJztcbn1cbldoaXRlc3BhY2VQYXR0ZXJuLnByb3RvdHlwZSA9IG5ldyBQYXR0ZXJuKCk7XG5cbldoaXRlc3BhY2VQYXR0ZXJuLnByb3RvdHlwZS5fX3NldF93aGl0ZXNwYWNlX3BhdHRlcm5zID0gZnVuY3Rpb24od2hpdGVzcGFjZV9jaGFycywgbmV3bGluZV9jaGFycykge1xuICB3aGl0ZXNwYWNlX2NoYXJzICs9ICdcXFxcdCAnO1xuICBuZXdsaW5lX2NoYXJzICs9ICdcXFxcblxcXFxyJztcblxuICB0aGlzLl9tYXRjaF9wYXR0ZXJuID0gdGhpcy5faW5wdXQuZ2V0X3JlZ2V4cChcbiAgICAnWycgKyB3aGl0ZXNwYWNlX2NoYXJzICsgbmV3bGluZV9jaGFycyArICddKycsIHRydWUpO1xuICB0aGlzLl9uZXdsaW5lX3JlZ2V4cCA9IHRoaXMuX2lucHV0LmdldF9yZWdleHAoXG4gICAgJ1xcXFxyXFxcXG58WycgKyBuZXdsaW5lX2NoYXJzICsgJ10nKTtcbn07XG5cbldoaXRlc3BhY2VQYXR0ZXJuLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMubmV3bGluZV9jb3VudCA9IDA7XG4gIHRoaXMud2hpdGVzcGFjZV9iZWZvcmVfdG9rZW4gPSAnJztcblxuICB2YXIgcmVzdWx0aW5nX3N0cmluZyA9IHRoaXMuX2lucHV0LnJlYWQodGhpcy5fbWF0Y2hfcGF0dGVybik7XG4gIGlmIChyZXN1bHRpbmdfc3RyaW5nID09PSAnICcpIHtcbiAgICB0aGlzLndoaXRlc3BhY2VfYmVmb3JlX3Rva2VuID0gJyAnO1xuICB9IGVsc2UgaWYgKHJlc3VsdGluZ19zdHJpbmcpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IHRoaXMuX19zcGxpdCh0aGlzLl9uZXdsaW5lX3JlZ2V4cCwgcmVzdWx0aW5nX3N0cmluZyk7XG4gICAgdGhpcy5uZXdsaW5lX2NvdW50ID0gbWF0Y2hlcy5sZW5ndGggLSAxO1xuICAgIHRoaXMud2hpdGVzcGFjZV9iZWZvcmVfdG9rZW4gPSBtYXRjaGVzW3RoaXMubmV3bGluZV9jb3VudF07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0aW5nX3N0cmluZztcbn07XG5cbldoaXRlc3BhY2VQYXR0ZXJuLnByb3RvdHlwZS5tYXRjaGluZyA9IGZ1bmN0aW9uKHdoaXRlc3BhY2VfY2hhcnMsIG5ld2xpbmVfY2hhcnMpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2NyZWF0ZSgpO1xuICByZXN1bHQuX19zZXRfd2hpdGVzcGFjZV9wYXR0ZXJucyh3aGl0ZXNwYWNlX2NoYXJzLCBuZXdsaW5lX2NoYXJzKTtcbiAgcmVzdWx0Ll91cGRhdGUoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbldoaXRlc3BhY2VQYXR0ZXJuLnByb3RvdHlwZS5fY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgV2hpdGVzcGFjZVBhdHRlcm4odGhpcy5faW5wdXQsIHRoaXMpO1xufTtcblxuV2hpdGVzcGFjZVBhdHRlcm4ucHJvdG90eXBlLl9fc3BsaXQgPSBmdW5jdGlvbihyZWdleHAsIGlucHV0X3N0cmluZykge1xuICByZWdleHAubGFzdEluZGV4ID0gMDtcbiAgdmFyIHN0YXJ0X2luZGV4ID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgbmV4dF9tYXRjaCA9IHJlZ2V4cC5leGVjKGlucHV0X3N0cmluZyk7XG4gIHdoaWxlIChuZXh0X21hdGNoKSB7XG4gICAgcmVzdWx0LnB1c2goaW5wdXRfc3RyaW5nLnN1YnN0cmluZyhzdGFydF9pbmRleCwgbmV4dF9tYXRjaC5pbmRleCkpO1xuICAgIHN0YXJ0X2luZGV4ID0gbmV4dF9tYXRjaC5pbmRleCArIG5leHRfbWF0Y2hbMF0ubGVuZ3RoO1xuICAgIG5leHRfbWF0Y2ggPSByZWdleHAuZXhlYyhpbnB1dF9zdHJpbmcpO1xuICB9XG5cbiAgaWYgKHN0YXJ0X2luZGV4IDwgaW5wdXRfc3RyaW5nLmxlbmd0aCkge1xuICAgIHJlc3VsdC5wdXNoKGlucHV0X3N0cmluZy5zdWJzdHJpbmcoc3RhcnRfaW5kZXgsIGlucHV0X3N0cmluZy5sZW5ndGgpKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbm1vZHVsZS5leHBvcnRzLldoaXRlc3BhY2VQYXR0ZXJuID0gV2hpdGVzcGFjZVBhdHRlcm47XG5cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG4vKmpzaGludCBub2RlOnRydWUgKi9cbi8qXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuKi9cblxuXG5cbmZ1bmN0aW9uIFBhdHRlcm4oaW5wdXRfc2Nhbm5lciwgcGFyZW50KSB7XG4gIHRoaXMuX2lucHV0ID0gaW5wdXRfc2Nhbm5lcjtcbiAgdGhpcy5fc3RhcnRpbmdfcGF0dGVybiA9IG51bGw7XG4gIHRoaXMuX21hdGNoX3BhdHRlcm4gPSBudWxsO1xuICB0aGlzLl91bnRpbF9wYXR0ZXJuID0gbnVsbDtcbiAgdGhpcy5fdW50aWxfYWZ0ZXIgPSBmYWxzZTtcblxuICBpZiAocGFyZW50KSB7XG4gICAgdGhpcy5fc3RhcnRpbmdfcGF0dGVybiA9IHRoaXMuX2lucHV0LmdldF9yZWdleHAocGFyZW50Ll9zdGFydGluZ19wYXR0ZXJuLCB0cnVlKTtcbiAgICB0aGlzLl9tYXRjaF9wYXR0ZXJuID0gdGhpcy5faW5wdXQuZ2V0X3JlZ2V4cChwYXJlbnQuX21hdGNoX3BhdHRlcm4sIHRydWUpO1xuICAgIHRoaXMuX3VudGlsX3BhdHRlcm4gPSB0aGlzLl9pbnB1dC5nZXRfcmVnZXhwKHBhcmVudC5fdW50aWxfcGF0dGVybik7XG4gICAgdGhpcy5fdW50aWxfYWZ0ZXIgPSBwYXJlbnQuX3VudGlsX2FmdGVyO1xuICB9XG59XG5cblBhdHRlcm4ucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2lucHV0LnJlYWQodGhpcy5fc3RhcnRpbmdfcGF0dGVybik7XG4gIGlmICghdGhpcy5fc3RhcnRpbmdfcGF0dGVybiB8fCByZXN1bHQpIHtcbiAgICByZXN1bHQgKz0gdGhpcy5faW5wdXQucmVhZCh0aGlzLl9tYXRjaF9wYXR0ZXJuLCB0aGlzLl91bnRpbF9wYXR0ZXJuLCB0aGlzLl91bnRpbF9hZnRlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblBhdHRlcm4ucHJvdG90eXBlLnJlYWRfbWF0Y2ggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMuX21hdGNoX3BhdHRlcm4pO1xufTtcblxuUGF0dGVybi5wcm90b3R5cGUudW50aWxfYWZ0ZXIgPSBmdW5jdGlvbihwYXR0ZXJuKSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLl9jcmVhdGUoKTtcbiAgcmVzdWx0Ll91bnRpbF9hZnRlciA9IHRydWU7XG4gIHJlc3VsdC5fdW50aWxfcGF0dGVybiA9IHRoaXMuX2lucHV0LmdldF9yZWdleHAocGF0dGVybik7XG4gIHJlc3VsdC5fdXBkYXRlKCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5QYXR0ZXJuLnByb3RvdHlwZS51bnRpbCA9IGZ1bmN0aW9uKHBhdHRlcm4pIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2NyZWF0ZSgpO1xuICByZXN1bHQuX3VudGlsX2FmdGVyID0gZmFsc2U7XG4gIHJlc3VsdC5fdW50aWxfcGF0dGVybiA9IHRoaXMuX2lucHV0LmdldF9yZWdleHAocGF0dGVybik7XG4gIHJlc3VsdC5fdXBkYXRlKCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5QYXR0ZXJuLnByb3RvdHlwZS5zdGFydGluZ193aXRoID0gZnVuY3Rpb24ocGF0dGVybikge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5fY3JlYXRlKCk7XG4gIHJlc3VsdC5fc3RhcnRpbmdfcGF0dGVybiA9IHRoaXMuX2lucHV0LmdldF9yZWdleHAocGF0dGVybiwgdHJ1ZSk7XG4gIHJlc3VsdC5fdXBkYXRlKCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5QYXR0ZXJuLnByb3RvdHlwZS5tYXRjaGluZyA9IGZ1bmN0aW9uKHBhdHRlcm4pIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2NyZWF0ZSgpO1xuICByZXN1bHQuX21hdGNoX3BhdHRlcm4gPSB0aGlzLl9pbnB1dC5nZXRfcmVnZXhwKHBhdHRlcm4sIHRydWUpO1xuICByZXN1bHQuX3VwZGF0ZSgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuUGF0dGVybi5wcm90b3R5cGUuX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBhdHRlcm4odGhpcy5faW5wdXQsIHRoaXMpO1xufTtcblxuUGF0dGVybi5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uKCkge307XG5cbm1vZHVsZS5leHBvcnRzLlBhdHRlcm4gPSBQYXR0ZXJuO1xuXG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxuLypqc2hpbnQgbm9kZTp0cnVlICovXG4vKlxuXG4gIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gIENvcHlyaWdodCAoYykgMjAwNy0yMDE4IEVpbmFyIExpZWxtYW5pcywgTGlhbSBOZXdtYW4sIGFuZCBjb250cmlidXRvcnMuXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICBTT0ZUV0FSRS5cbiovXG5cblxuXG5mdW5jdGlvbiBEaXJlY3RpdmVzKHN0YXJ0X2Jsb2NrX3BhdHRlcm4sIGVuZF9ibG9ja19wYXR0ZXJuKSB7XG4gIHN0YXJ0X2Jsb2NrX3BhdHRlcm4gPSB0eXBlb2Ygc3RhcnRfYmxvY2tfcGF0dGVybiA9PT0gJ3N0cmluZycgPyBzdGFydF9ibG9ja19wYXR0ZXJuIDogc3RhcnRfYmxvY2tfcGF0dGVybi5zb3VyY2U7XG4gIGVuZF9ibG9ja19wYXR0ZXJuID0gdHlwZW9mIGVuZF9ibG9ja19wYXR0ZXJuID09PSAnc3RyaW5nJyA/IGVuZF9ibG9ja19wYXR0ZXJuIDogZW5kX2Jsb2NrX3BhdHRlcm4uc291cmNlO1xuICB0aGlzLl9fZGlyZWN0aXZlc19ibG9ja19wYXR0ZXJuID0gbmV3IFJlZ0V4cChzdGFydF9ibG9ja19wYXR0ZXJuICsgLyBiZWF1dGlmeSggXFx3K1s6XVxcdyspKyAvLnNvdXJjZSArIGVuZF9ibG9ja19wYXR0ZXJuLCAnZycpO1xuICB0aGlzLl9fZGlyZWN0aXZlX3BhdHRlcm4gPSAvIChcXHcrKVs6XShcXHcrKS9nO1xuXG4gIHRoaXMuX19kaXJlY3RpdmVzX2VuZF9pZ25vcmVfcGF0dGVybiA9IG5ldyBSZWdFeHAoc3RhcnRfYmxvY2tfcGF0dGVybiArIC9cXHNiZWF1dGlmeVxcc2lnbm9yZTplbmRcXHMvLnNvdXJjZSArIGVuZF9ibG9ja19wYXR0ZXJuLCAnZycpO1xufVxuXG5EaXJlY3RpdmVzLnByb3RvdHlwZS5nZXRfZGlyZWN0aXZlcyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgaWYgKCF0ZXh0Lm1hdGNoKHRoaXMuX19kaXJlY3RpdmVzX2Jsb2NrX3BhdHRlcm4pKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgZGlyZWN0aXZlcyA9IHt9O1xuICB0aGlzLl9fZGlyZWN0aXZlX3BhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgdmFyIGRpcmVjdGl2ZV9tYXRjaCA9IHRoaXMuX19kaXJlY3RpdmVfcGF0dGVybi5leGVjKHRleHQpO1xuXG4gIHdoaWxlIChkaXJlY3RpdmVfbWF0Y2gpIHtcbiAgICBkaXJlY3RpdmVzW2RpcmVjdGl2ZV9tYXRjaFsxXV0gPSBkaXJlY3RpdmVfbWF0Y2hbMl07XG4gICAgZGlyZWN0aXZlX21hdGNoID0gdGhpcy5fX2RpcmVjdGl2ZV9wYXR0ZXJuLmV4ZWModGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aXZlcztcbn07XG5cbkRpcmVjdGl2ZXMucHJvdG90eXBlLnJlYWRJZ25vcmVkID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0LnJlYWRVbnRpbEFmdGVyKHRoaXMuX19kaXJlY3RpdmVzX2VuZF9pZ25vcmVfcGF0dGVybik7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzLkRpcmVjdGl2ZXMgPSBEaXJlY3RpdmVzO1xuXG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKmpzaGludCBub2RlOnRydWUgKi9cbi8qXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuKi9cblxuXG5cbnZhciBQYXR0ZXJuID0gKF9fd2VicGFja19yZXF1aXJlX18oMTIpLlBhdHRlcm4pO1xuXG5cbnZhciB0ZW1wbGF0ZV9uYW1lcyA9IHtcbiAgZGphbmdvOiBmYWxzZSxcbiAgZXJiOiBmYWxzZSxcbiAgaGFuZGxlYmFyczogZmFsc2UsXG4gIHBocDogZmFsc2UsXG4gIHNtYXJ0eTogZmFsc2Vcbn07XG5cbi8vIFRoaXMgbGV0cyB0ZW1wbGF0ZXMgYXBwZWFyIGFueXdoZXJlIHdlIHdvdWxkIGRvIGEgcmVhZFVudGlsXG4vLyBUaGUgY29zdCBpcyBoaWdoZXIgYnV0IGl0IGlzIHBheSB0byBwbGF5LlxuZnVuY3Rpb24gVGVtcGxhdGFibGVQYXR0ZXJuKGlucHV0X3NjYW5uZXIsIHBhcmVudCkge1xuICBQYXR0ZXJuLmNhbGwodGhpcywgaW5wdXRfc2Nhbm5lciwgcGFyZW50KTtcbiAgdGhpcy5fX3RlbXBsYXRlX3BhdHRlcm4gPSBudWxsO1xuICB0aGlzLl9kaXNhYmxlZCA9IE9iamVjdC5hc3NpZ24oe30sIHRlbXBsYXRlX25hbWVzKTtcbiAgdGhpcy5fZXhjbHVkZWQgPSBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZV9uYW1lcyk7XG5cbiAgaWYgKHBhcmVudCkge1xuICAgIHRoaXMuX190ZW1wbGF0ZV9wYXR0ZXJuID0gdGhpcy5faW5wdXQuZ2V0X3JlZ2V4cChwYXJlbnQuX190ZW1wbGF0ZV9wYXR0ZXJuKTtcbiAgICB0aGlzLl9leGNsdWRlZCA9IE9iamVjdC5hc3NpZ24odGhpcy5fZXhjbHVkZWQsIHBhcmVudC5fZXhjbHVkZWQpO1xuICAgIHRoaXMuX2Rpc2FibGVkID0gT2JqZWN0LmFzc2lnbih0aGlzLl9kaXNhYmxlZCwgcGFyZW50Ll9kaXNhYmxlZCk7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBuZXcgUGF0dGVybihpbnB1dF9zY2FubmVyKTtcbiAgdGhpcy5fX3BhdHRlcm5zID0ge1xuICAgIGhhbmRsZWJhcnNfY29tbWVudDogcGF0dGVybi5zdGFydGluZ193aXRoKC97eyEtLS8pLnVudGlsX2FmdGVyKC8tLX19LyksXG4gICAgaGFuZGxlYmFyc191bmVzY2FwZWQ6IHBhdHRlcm4uc3RhcnRpbmdfd2l0aCgve3t7LykudW50aWxfYWZ0ZXIoL319fS8pLFxuICAgIGhhbmRsZWJhcnM6IHBhdHRlcm4uc3RhcnRpbmdfd2l0aCgve3svKS51bnRpbF9hZnRlcigvfX0vKSxcbiAgICBwaHA6IHBhdHRlcm4uc3RhcnRpbmdfd2l0aCgvPFxcPyg/Ols9IF18cGhwKS8pLnVudGlsX2FmdGVyKC9cXD8+LyksXG4gICAgZXJiOiBwYXR0ZXJuLnN0YXJ0aW5nX3dpdGgoLzwlW14lXS8pLnVudGlsX2FmdGVyKC9bXiVdJT4vKSxcbiAgICAvLyBkamFuZ28gY29mbGljdHMgd2l0aCBoYW5kbGViYXJzIGEgYml0LlxuICAgIGRqYW5nbzogcGF0dGVybi5zdGFydGluZ193aXRoKC97JS8pLnVudGlsX2FmdGVyKC8lfS8pLFxuICAgIGRqYW5nb192YWx1ZTogcGF0dGVybi5zdGFydGluZ193aXRoKC97ey8pLnVudGlsX2FmdGVyKC99fS8pLFxuICAgIGRqYW5nb19jb21tZW50OiBwYXR0ZXJuLnN0YXJ0aW5nX3dpdGgoL3sjLykudW50aWxfYWZ0ZXIoLyN9LyksXG4gICAgc21hcnR5OiBwYXR0ZXJuLnN0YXJ0aW5nX3dpdGgoL3soPz1bXn17XFxzXFxuXSkvKS51bnRpbF9hZnRlcigvW15cXHNcXG5dfS8pLFxuICAgIHNtYXJ0eV9jb21tZW50OiBwYXR0ZXJuLnN0YXJ0aW5nX3dpdGgoL3tcXCovKS51bnRpbF9hZnRlcigvXFwqfS8pLFxuICAgIHNtYXJ0eV9saXRlcmFsOiBwYXR0ZXJuLnN0YXJ0aW5nX3dpdGgoL3tsaXRlcmFsfS8pLnVudGlsX2FmdGVyKC97XFwvbGl0ZXJhbH0vKVxuICB9O1xufVxuVGVtcGxhdGFibGVQYXR0ZXJuLnByb3RvdHlwZSA9IG5ldyBQYXR0ZXJuKCk7XG5cblRlbXBsYXRhYmxlUGF0dGVybi5wcm90b3R5cGUuX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRlbXBsYXRhYmxlUGF0dGVybih0aGlzLl9pbnB1dCwgdGhpcyk7XG59O1xuXG5UZW1wbGF0YWJsZVBhdHRlcm4ucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3NldF90ZW1wbGF0ZWRfcGF0dGVybigpO1xufTtcblxuVGVtcGxhdGFibGVQYXR0ZXJuLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24obGFuZ3VhZ2UpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2NyZWF0ZSgpO1xuICByZXN1bHQuX2Rpc2FibGVkW2xhbmd1YWdlXSA9IHRydWU7XG4gIHJlc3VsdC5fdXBkYXRlKCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5UZW1wbGF0YWJsZVBhdHRlcm4ucHJvdG90eXBlLnJlYWRfb3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2NyZWF0ZSgpO1xuICBmb3IgKHZhciBsYW5ndWFnZSBpbiB0ZW1wbGF0ZV9uYW1lcykge1xuICAgIHJlc3VsdC5fZGlzYWJsZWRbbGFuZ3VhZ2VdID0gb3B0aW9ucy50ZW1wbGF0aW5nLmluZGV4T2YobGFuZ3VhZ2UpID09PSAtMTtcbiAgfVxuICByZXN1bHQuX3VwZGF0ZSgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuVGVtcGxhdGFibGVQYXR0ZXJuLnByb3RvdHlwZS5leGNsdWRlID0gZnVuY3Rpb24obGFuZ3VhZ2UpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2NyZWF0ZSgpO1xuICByZXN1bHQuX2V4Y2x1ZGVkW2xhbmd1YWdlXSA9IHRydWU7XG4gIHJlc3VsdC5fdXBkYXRlKCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5UZW1wbGF0YWJsZVBhdHRlcm4ucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhpcy5fbWF0Y2hfcGF0dGVybikge1xuICAgIHJlc3VsdCA9IHRoaXMuX2lucHV0LnJlYWQodGhpcy5fc3RhcnRpbmdfcGF0dGVybik7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdGhpcy5faW5wdXQucmVhZCh0aGlzLl9zdGFydGluZ19wYXR0ZXJuLCB0aGlzLl9fdGVtcGxhdGVfcGF0dGVybik7XG4gIH1cbiAgdmFyIG5leHQgPSB0aGlzLl9yZWFkX3RlbXBsYXRlKCk7XG4gIHdoaWxlIChuZXh0KSB7XG4gICAgaWYgKHRoaXMuX21hdGNoX3BhdHRlcm4pIHtcbiAgICAgIG5leHQgKz0gdGhpcy5faW5wdXQucmVhZCh0aGlzLl9tYXRjaF9wYXR0ZXJuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dCArPSB0aGlzLl9pbnB1dC5yZWFkVW50aWwodGhpcy5fX3RlbXBsYXRlX3BhdHRlcm4pO1xuICAgIH1cbiAgICByZXN1bHQgKz0gbmV4dDtcbiAgICBuZXh0ID0gdGhpcy5fcmVhZF90ZW1wbGF0ZSgpO1xuICB9XG5cbiAgaWYgKHRoaXMuX3VudGlsX2FmdGVyKSB7XG4gICAgcmVzdWx0ICs9IHRoaXMuX2lucHV0LnJlYWRVbnRpbEFmdGVyKHRoaXMuX3VudGlsX3BhdHRlcm4pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5UZW1wbGF0YWJsZVBhdHRlcm4ucHJvdG90eXBlLl9fc2V0X3RlbXBsYXRlZF9wYXR0ZXJuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdO1xuXG4gIGlmICghdGhpcy5fZGlzYWJsZWQucGhwKSB7XG4gICAgaXRlbXMucHVzaCh0aGlzLl9fcGF0dGVybnMucGhwLl9zdGFydGluZ19wYXR0ZXJuLnNvdXJjZSk7XG4gIH1cbiAgaWYgKCF0aGlzLl9kaXNhYmxlZC5oYW5kbGViYXJzKSB7XG4gICAgaXRlbXMucHVzaCh0aGlzLl9fcGF0dGVybnMuaGFuZGxlYmFycy5fc3RhcnRpbmdfcGF0dGVybi5zb3VyY2UpO1xuICB9XG4gIGlmICghdGhpcy5fZGlzYWJsZWQuZXJiKSB7XG4gICAgaXRlbXMucHVzaCh0aGlzLl9fcGF0dGVybnMuZXJiLl9zdGFydGluZ19wYXR0ZXJuLnNvdXJjZSk7XG4gIH1cbiAgaWYgKCF0aGlzLl9kaXNhYmxlZC5kamFuZ28pIHtcbiAgICBpdGVtcy5wdXNoKHRoaXMuX19wYXR0ZXJucy5kamFuZ28uX3N0YXJ0aW5nX3BhdHRlcm4uc291cmNlKTtcbiAgICAvLyBUaGUgc3RhcnRpbmcgcGF0dGVybiBmb3IgZGphbmdvIGlzIG1vcmUgY29tcGxleCBiZWNhdXNlIGl0IGhhcyBkaWZmZXJlbnRcbiAgICAvLyBwYXR0ZXJucyBmb3IgdmFsdWUsIGNvbW1lbnQsIGFuZCBvdGhlciBzZWN0aW9uc1xuICAgIGl0ZW1zLnB1c2godGhpcy5fX3BhdHRlcm5zLmRqYW5nb192YWx1ZS5fc3RhcnRpbmdfcGF0dGVybi5zb3VyY2UpO1xuICAgIGl0ZW1zLnB1c2godGhpcy5fX3BhdHRlcm5zLmRqYW5nb19jb21tZW50Ll9zdGFydGluZ19wYXR0ZXJuLnNvdXJjZSk7XG4gIH1cbiAgaWYgKCF0aGlzLl9kaXNhYmxlZC5zbWFydHkpIHtcbiAgICBpdGVtcy5wdXNoKHRoaXMuX19wYXR0ZXJucy5zbWFydHkuX3N0YXJ0aW5nX3BhdHRlcm4uc291cmNlKTtcbiAgfVxuXG4gIGlmICh0aGlzLl91bnRpbF9wYXR0ZXJuKSB7XG4gICAgaXRlbXMucHVzaCh0aGlzLl91bnRpbF9wYXR0ZXJuLnNvdXJjZSk7XG4gIH1cbiAgdGhpcy5fX3RlbXBsYXRlX3BhdHRlcm4gPSB0aGlzLl9pbnB1dC5nZXRfcmVnZXhwKCcoPzonICsgaXRlbXMuam9pbignfCcpICsgJyknKTtcbn07XG5cblRlbXBsYXRhYmxlUGF0dGVybi5wcm90b3R5cGUuX3JlYWRfdGVtcGxhdGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc3VsdGluZ19zdHJpbmcgPSAnJztcbiAgdmFyIGMgPSB0aGlzLl9pbnB1dC5wZWVrKCk7XG4gIGlmIChjID09PSAnPCcpIHtcbiAgICB2YXIgcGVlazEgPSB0aGlzLl9pbnB1dC5wZWVrKDEpO1xuICAgIC8vaWYgd2UncmUgaW4gYSBjb21tZW50LCBkbyBzb21ldGhpbmcgc3BlY2lhbFxuICAgIC8vIFdlIHRyZWF0IGFsbCBjb21tZW50cyBhcyBsaXRlcmFscywgZXZlbiBtb3JlIHRoYW4gcHJlZm9ybWF0dGVkIHRhZ3NcbiAgICAvLyB3ZSBqdXN0IGxvb2sgZm9yIHRoZSBhcHByb3ByaWF0ZSBjbG9zZSB0YWdcbiAgICBpZiAoIXRoaXMuX2Rpc2FibGVkLnBocCAmJiAhdGhpcy5fZXhjbHVkZWQucGhwICYmIHBlZWsxID09PSAnPycpIHtcbiAgICAgIHJlc3VsdGluZ19zdHJpbmcgPSByZXN1bHRpbmdfc3RyaW5nIHx8XG4gICAgICAgIHRoaXMuX19wYXR0ZXJucy5waHAucmVhZCgpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2Rpc2FibGVkLmVyYiAmJiAhdGhpcy5fZXhjbHVkZWQuZXJiICYmIHBlZWsxID09PSAnJScpIHtcbiAgICAgIHJlc3VsdGluZ19zdHJpbmcgPSByZXN1bHRpbmdfc3RyaW5nIHx8XG4gICAgICAgIHRoaXMuX19wYXR0ZXJucy5lcmIucmVhZCgpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjID09PSAneycpIHtcbiAgICBpZiAoIXRoaXMuX2Rpc2FibGVkLmhhbmRsZWJhcnMgJiYgIXRoaXMuX2V4Y2x1ZGVkLmhhbmRsZWJhcnMpIHtcbiAgICAgIHJlc3VsdGluZ19zdHJpbmcgPSByZXN1bHRpbmdfc3RyaW5nIHx8XG4gICAgICAgIHRoaXMuX19wYXR0ZXJucy5oYW5kbGViYXJzX2NvbW1lbnQucmVhZCgpO1xuICAgICAgcmVzdWx0aW5nX3N0cmluZyA9IHJlc3VsdGluZ19zdHJpbmcgfHxcbiAgICAgICAgdGhpcy5fX3BhdHRlcm5zLmhhbmRsZWJhcnNfdW5lc2NhcGVkLnJlYWQoKTtcbiAgICAgIHJlc3VsdGluZ19zdHJpbmcgPSByZXN1bHRpbmdfc3RyaW5nIHx8XG4gICAgICAgIHRoaXMuX19wYXR0ZXJucy5oYW5kbGViYXJzLnJlYWQoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZC5kamFuZ28pIHtcbiAgICAgIC8vIGRqYW5nbyBjb2ZsaWN0cyB3aXRoIGhhbmRsZWJhcnMgYSBiaXQuXG4gICAgICBpZiAoIXRoaXMuX2V4Y2x1ZGVkLmRqYW5nbyAmJiAhdGhpcy5fZXhjbHVkZWQuaGFuZGxlYmFycykge1xuICAgICAgICByZXN1bHRpbmdfc3RyaW5nID0gcmVzdWx0aW5nX3N0cmluZyB8fFxuICAgICAgICAgIHRoaXMuX19wYXR0ZXJucy5kamFuZ29fdmFsdWUucmVhZCgpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9leGNsdWRlZC5kamFuZ28pIHtcbiAgICAgICAgcmVzdWx0aW5nX3N0cmluZyA9IHJlc3VsdGluZ19zdHJpbmcgfHxcbiAgICAgICAgICB0aGlzLl9fcGF0dGVybnMuZGphbmdvX2NvbW1lbnQucmVhZCgpO1xuICAgICAgICByZXN1bHRpbmdfc3RyaW5nID0gcmVzdWx0aW5nX3N0cmluZyB8fFxuICAgICAgICAgIHRoaXMuX19wYXR0ZXJucy5kamFuZ28ucmVhZCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuX2Rpc2FibGVkLnNtYXJ0eSkge1xuICAgICAgLy8gc21hcnR5IGNhbm5vdCBiZSBlbmFibGVkIHdpdGggZGphbmdvIG9yIGhhbmRsZWJhcnMgZW5hYmxlZFxuICAgICAgaWYgKHRoaXMuX2Rpc2FibGVkLmRqYW5nbyAmJiB0aGlzLl9kaXNhYmxlZC5oYW5kbGViYXJzKSB7XG4gICAgICAgIHJlc3VsdGluZ19zdHJpbmcgPSByZXN1bHRpbmdfc3RyaW5nIHx8XG4gICAgICAgICAgdGhpcy5fX3BhdHRlcm5zLnNtYXJ0eV9jb21tZW50LnJlYWQoKTtcbiAgICAgICAgcmVzdWx0aW5nX3N0cmluZyA9IHJlc3VsdGluZ19zdHJpbmcgfHxcbiAgICAgICAgICB0aGlzLl9fcGF0dGVybnMuc21hcnR5X2xpdGVyYWwucmVhZCgpO1xuICAgICAgICByZXN1bHRpbmdfc3RyaW5nID0gcmVzdWx0aW5nX3N0cmluZyB8fFxuICAgICAgICAgIHRoaXMuX19wYXR0ZXJucy5zbWFydHkucmVhZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0aW5nX3N0cmluZztcbn07XG5cblxubW9kdWxlLmV4cG9ydHMuVGVtcGxhdGFibGVQYXR0ZXJuID0gVGVtcGxhdGFibGVQYXR0ZXJuO1xuXG5cbi8qKiovIH0pLFxuLyogMTUgKi8sXG4vKiAxNiAqLyxcbi8qIDE3ICovLFxuLyogMTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKmpzaGludCBub2RlOnRydWUgKi9cbi8qXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuKi9cblxuXG5cbnZhciBCZWF1dGlmaWVyID0gKF9fd2VicGFja19yZXF1aXJlX18oMTkpLkJlYXV0aWZpZXIpLFxuICBPcHRpb25zID0gKF9fd2VicGFja19yZXF1aXJlX18oMjApLk9wdGlvbnMpO1xuXG5mdW5jdGlvbiBzdHlsZV9odG1sKGh0bWxfc291cmNlLCBvcHRpb25zLCBqc19iZWF1dGlmeSwgY3NzX2JlYXV0aWZ5KSB7XG4gIHZhciBiZWF1dGlmaWVyID0gbmV3IEJlYXV0aWZpZXIoaHRtbF9zb3VyY2UsIG9wdGlvbnMsIGpzX2JlYXV0aWZ5LCBjc3NfYmVhdXRpZnkpO1xuICByZXR1cm4gYmVhdXRpZmllci5iZWF1dGlmeSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlX2h0bWw7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IE9wdGlvbnMoKTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAxOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLypcblxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG4qL1xuXG5cblxudmFyIE9wdGlvbnMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyMCkuT3B0aW9ucyk7XG52YXIgT3V0cHV0ID0gKF9fd2VicGFja19yZXF1aXJlX18oMikuT3V0cHV0KTtcbnZhciBUb2tlbml6ZXIgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyMSkuVG9rZW5pemVyKTtcbnZhciBUT0tFTiA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKS5UT0tFTik7XG5cbnZhciBsaW5lQnJlYWsgPSAvXFxyXFxufFtcXHJcXG5dLztcbnZhciBhbGxMaW5lQnJlYWtzID0gL1xcclxcbnxbXFxyXFxuXS9nO1xuXG52YXIgUHJpbnRlciA9IGZ1bmN0aW9uKG9wdGlvbnMsIGJhc2VfaW5kZW50X3N0cmluZykgeyAvL2hhbmRsZXMgaW5wdXQvb3V0cHV0IGFuZCBzb21lIG90aGVyIHByaW50aW5nIGZ1bmN0aW9uc1xuXG4gIHRoaXMuaW5kZW50X2xldmVsID0gMDtcbiAgdGhpcy5hbGlnbm1lbnRfc2l6ZSA9IDA7XG4gIHRoaXMubWF4X3ByZXNlcnZlX25ld2xpbmVzID0gb3B0aW9ucy5tYXhfcHJlc2VydmVfbmV3bGluZXM7XG4gIHRoaXMucHJlc2VydmVfbmV3bGluZXMgPSBvcHRpb25zLnByZXNlcnZlX25ld2xpbmVzO1xuXG4gIHRoaXMuX291dHB1dCA9IG5ldyBPdXRwdXQob3B0aW9ucywgYmFzZV9pbmRlbnRfc3RyaW5nKTtcblxufTtcblxuUHJpbnRlci5wcm90b3R5cGUuY3VycmVudF9saW5lX2hhc19tYXRjaCA9IGZ1bmN0aW9uKHBhdHRlcm4pIHtcbiAgcmV0dXJuIHRoaXMuX291dHB1dC5jdXJyZW50X2xpbmUuaGFzX21hdGNoKHBhdHRlcm4pO1xufTtcblxuUHJpbnRlci5wcm90b3R5cGUuc2V0X3NwYWNlX2JlZm9yZV90b2tlbiA9IGZ1bmN0aW9uKHZhbHVlLCBub25fYnJlYWtpbmcpIHtcbiAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHZhbHVlO1xuICB0aGlzLl9vdXRwdXQubm9uX2JyZWFraW5nX3NwYWNlID0gbm9uX2JyZWFraW5nO1xufTtcblxuUHJpbnRlci5wcm90b3R5cGUuc2V0X3dyYXBfcG9pbnQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fb3V0cHV0LnNldF9pbmRlbnQodGhpcy5pbmRlbnRfbGV2ZWwsIHRoaXMuYWxpZ25tZW50X3NpemUpO1xuICB0aGlzLl9vdXRwdXQuc2V0X3dyYXBfcG9pbnQoKTtcbn07XG5cblxuUHJpbnRlci5wcm90b3R5cGUuYWRkX3Jhd190b2tlbiA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHRoaXMuX291dHB1dC5hZGRfcmF3X3Rva2VuKHRva2VuKTtcbn07XG5cblByaW50ZXIucHJvdG90eXBlLnByaW50X3ByZXNlcnZlZF9uZXdsaW5lcyA9IGZ1bmN0aW9uKHJhd190b2tlbikge1xuICB2YXIgbmV3bGluZXMgPSAwO1xuICBpZiAocmF3X3Rva2VuLnR5cGUgIT09IFRPS0VOLlRFWFQgJiYgcmF3X3Rva2VuLnByZXZpb3VzLnR5cGUgIT09IFRPS0VOLlRFWFQpIHtcbiAgICBuZXdsaW5lcyA9IHJhd190b2tlbi5uZXdsaW5lcyA/IDEgOiAwO1xuICB9XG5cbiAgaWYgKHRoaXMucHJlc2VydmVfbmV3bGluZXMpIHtcbiAgICBuZXdsaW5lcyA9IHJhd190b2tlbi5uZXdsaW5lcyA8IHRoaXMubWF4X3ByZXNlcnZlX25ld2xpbmVzICsgMSA/IHJhd190b2tlbi5uZXdsaW5lcyA6IHRoaXMubWF4X3ByZXNlcnZlX25ld2xpbmVzICsgMTtcbiAgfVxuICBmb3IgKHZhciBuID0gMDsgbiA8IG5ld2xpbmVzOyBuKyspIHtcbiAgICB0aGlzLnByaW50X25ld2xpbmUobiA+IDApO1xuICB9XG5cbiAgcmV0dXJuIG5ld2xpbmVzICE9PSAwO1xufTtcblxuUHJpbnRlci5wcm90b3R5cGUudHJhdmVyc2Vfd2hpdGVzcGFjZSA9IGZ1bmN0aW9uKHJhd190b2tlbikge1xuICBpZiAocmF3X3Rva2VuLndoaXRlc3BhY2VfYmVmb3JlIHx8IHJhd190b2tlbi5uZXdsaW5lcykge1xuICAgIGlmICghdGhpcy5wcmludF9wcmVzZXJ2ZWRfbmV3bGluZXMocmF3X3Rva2VuKSkge1xuICAgICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblByaW50ZXIucHJvdG90eXBlLnByZXZpb3VzX3Rva2VuX3dyYXBwZWQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX291dHB1dC5wcmV2aW91c190b2tlbl93cmFwcGVkO1xufTtcblxuUHJpbnRlci5wcm90b3R5cGUucHJpbnRfbmV3bGluZSA9IGZ1bmN0aW9uKGZvcmNlKSB7XG4gIHRoaXMuX291dHB1dC5hZGRfbmV3X2xpbmUoZm9yY2UpO1xufTtcblxuUHJpbnRlci5wcm90b3R5cGUucHJpbnRfdG9rZW4gPSBmdW5jdGlvbih0b2tlbikge1xuICBpZiAodG9rZW4udGV4dCkge1xuICAgIHRoaXMuX291dHB1dC5zZXRfaW5kZW50KHRoaXMuaW5kZW50X2xldmVsLCB0aGlzLmFsaWdubWVudF9zaXplKTtcbiAgICB0aGlzLl9vdXRwdXQuYWRkX3Rva2VuKHRva2VuLnRleHQpO1xuICB9XG59O1xuXG5QcmludGVyLnByb3RvdHlwZS5pbmRlbnQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbmRlbnRfbGV2ZWwrKztcbn07XG5cblByaW50ZXIucHJvdG90eXBlLmdldF9mdWxsX2luZGVudCA9IGZ1bmN0aW9uKGxldmVsKSB7XG4gIGxldmVsID0gdGhpcy5pbmRlbnRfbGV2ZWwgKyAobGV2ZWwgfHwgMCk7XG4gIGlmIChsZXZlbCA8IDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fb3V0cHV0LmdldF9pbmRlbnRfc3RyaW5nKGxldmVsKTtcbn07XG5cbnZhciBnZXRfdHlwZV9hdHRyaWJ1dGUgPSBmdW5jdGlvbihzdGFydF90b2tlbikge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIHJhd190b2tlbiA9IHN0YXJ0X3Rva2VuLm5leHQ7XG5cbiAgLy8gU2VhcmNoIGF0dHJpYnV0ZXMgZm9yIGEgdHlwZSBhdHRyaWJ1dGVcbiAgd2hpbGUgKHJhd190b2tlbi50eXBlICE9PSBUT0tFTi5FT0YgJiYgc3RhcnRfdG9rZW4uY2xvc2VkICE9PSByYXdfdG9rZW4pIHtcbiAgICBpZiAocmF3X3Rva2VuLnR5cGUgPT09IFRPS0VOLkFUVFJJQlVURSAmJiByYXdfdG9rZW4udGV4dCA9PT0gJ3R5cGUnKSB7XG4gICAgICBpZiAocmF3X3Rva2VuLm5leHQgJiYgcmF3X3Rva2VuLm5leHQudHlwZSA9PT0gVE9LRU4uRVFVQUxTICYmXG4gICAgICAgIHJhd190b2tlbi5uZXh0Lm5leHQgJiYgcmF3X3Rva2VuLm5leHQubmV4dC50eXBlID09PSBUT0tFTi5WQUxVRSkge1xuICAgICAgICByZXN1bHQgPSByYXdfdG9rZW4ubmV4dC5uZXh0LnRleHQ7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmF3X3Rva2VuID0gcmF3X3Rva2VuLm5leHQ7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGdldF9jdXN0b21fYmVhdXRpZmllcl9uYW1lID0gZnVuY3Rpb24odGFnX2NoZWNrLCByYXdfdG9rZW4pIHtcbiAgdmFyIHR5cGVBdHRyaWJ1dGUgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAoIXJhd190b2tlbi5jbG9zZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICh0YWdfY2hlY2sgPT09ICdzY3JpcHQnKSB7XG4gICAgdHlwZUF0dHJpYnV0ZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICB9IGVsc2UgaWYgKHRhZ19jaGVjayA9PT0gJ3N0eWxlJykge1xuICAgIHR5cGVBdHRyaWJ1dGUgPSAndGV4dC9jc3MnO1xuICB9XG5cbiAgdHlwZUF0dHJpYnV0ZSA9IGdldF90eXBlX2F0dHJpYnV0ZShyYXdfdG9rZW4pIHx8IHR5cGVBdHRyaWJ1dGU7XG5cbiAgLy8gRm9yIHNjcmlwdCBhbmQgc3R5bGUgdGFncyB0aGF0IGhhdmUgYSB0eXBlIGF0dHJpYnV0ZSwgb25seSBlbmFibGUgY3VzdG9tIGJlYXV0aWZpZXJzIGZvciBtYXRjaGluZyB2YWx1ZXNcbiAgLy8gRm9yIHRob3NlIHdpdGhvdXQgYSB0eXBlIGF0dHJpYnV0ZSB1c2UgZGVmYXVsdDtcbiAgaWYgKHR5cGVBdHRyaWJ1dGUuc2VhcmNoKCd0ZXh0L2NzcycpID4gLTEpIHtcbiAgICByZXN1bHQgPSAnY3NzJztcbiAgfSBlbHNlIGlmICh0eXBlQXR0cmlidXRlLnNlYXJjaCgvbW9kdWxlfCgodGV4dHxhcHBsaWNhdGlvbnxkb2pvKVxcLyh4LSk/KGphdmFzY3JpcHR8ZWNtYXNjcmlwdHxqc2NyaXB0fGxpdmVzY3JpcHR8KGxkXFwrKT9qc29ufG1ldGhvZHxhc3BlY3QpKS8pID4gLTEpIHtcbiAgICByZXN1bHQgPSAnamF2YXNjcmlwdCc7XG4gIH0gZWxzZSBpZiAodHlwZUF0dHJpYnV0ZS5zZWFyY2goLyh0ZXh0fGFwcGxpY2F0aW9ufGRvam8pXFwvKHgtKT8oaHRtbCkvKSA+IC0xKSB7XG4gICAgcmVzdWx0ID0gJ2h0bWwnO1xuICB9IGVsc2UgaWYgKHR5cGVBdHRyaWJ1dGUuc2VhcmNoKC90ZXN0XFwvbnVsbC8pID4gLTEpIHtcbiAgICAvLyBUZXN0IG9ubHkgbWltZS10eXBlIGZvciB0ZXN0aW5nIHRoZSBiZWF1dGlmaWVyIHdoZW4gbnVsbCBpcyBwYXNzZWQgYXMgYmVhdXRpZmluZyBmdW5jdGlvblxuICAgIHJlc3VsdCA9ICdudWxsJztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBpbl9hcnJheSh3aGF0LCBhcnIpIHtcbiAgcmV0dXJuIGFyci5pbmRleE9mKHdoYXQpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gVGFnRnJhbWUocGFyZW50LCBwYXJzZXJfdG9rZW4sIGluZGVudF9sZXZlbCkge1xuICB0aGlzLnBhcmVudCA9IHBhcmVudCB8fCBudWxsO1xuICB0aGlzLnRhZyA9IHBhcnNlcl90b2tlbiA/IHBhcnNlcl90b2tlbi50YWdfbmFtZSA6ICcnO1xuICB0aGlzLmluZGVudF9sZXZlbCA9IGluZGVudF9sZXZlbCB8fCAwO1xuICB0aGlzLnBhcnNlcl90b2tlbiA9IHBhcnNlcl90b2tlbiB8fCBudWxsO1xufVxuXG5mdW5jdGlvbiBUYWdTdGFjayhwcmludGVyKSB7XG4gIHRoaXMuX3ByaW50ZXIgPSBwcmludGVyO1xuICB0aGlzLl9jdXJyZW50X2ZyYW1lID0gbnVsbDtcbn1cblxuVGFnU3RhY2sucHJvdG90eXBlLmdldF9wYXJzZXJfdG9rZW4gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX2N1cnJlbnRfZnJhbWUgPyB0aGlzLl9jdXJyZW50X2ZyYW1lLnBhcnNlcl90b2tlbiA6IG51bGw7XG59O1xuXG5UYWdTdGFjay5wcm90b3R5cGUucmVjb3JkX3RhZyA9IGZ1bmN0aW9uKHBhcnNlcl90b2tlbikgeyAvL2Z1bmN0aW9uIHRvIHJlY29yZCBhIHRhZyBhbmQgaXRzIHBhcmVudCBpbiB0aGlzLnRhZ3MgT2JqZWN0XG4gIHZhciBuZXdfZnJhbWUgPSBuZXcgVGFnRnJhbWUodGhpcy5fY3VycmVudF9mcmFtZSwgcGFyc2VyX3Rva2VuLCB0aGlzLl9wcmludGVyLmluZGVudF9sZXZlbCk7XG4gIHRoaXMuX2N1cnJlbnRfZnJhbWUgPSBuZXdfZnJhbWU7XG59O1xuXG5UYWdTdGFjay5wcm90b3R5cGUuX3RyeV9wb3BfZnJhbWUgPSBmdW5jdGlvbihmcmFtZSkgeyAvL2Z1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBvcGVuaW5nIHRhZyB0byB0aGUgY29ycmVzcG9uZGluZyBjbG9zZXJcbiAgdmFyIHBhcnNlcl90b2tlbiA9IG51bGw7XG5cbiAgaWYgKGZyYW1lKSB7XG4gICAgcGFyc2VyX3Rva2VuID0gZnJhbWUucGFyc2VyX3Rva2VuO1xuICAgIHRoaXMuX3ByaW50ZXIuaW5kZW50X2xldmVsID0gZnJhbWUuaW5kZW50X2xldmVsO1xuICAgIHRoaXMuX2N1cnJlbnRfZnJhbWUgPSBmcmFtZS5wYXJlbnQ7XG4gIH1cblxuICByZXR1cm4gcGFyc2VyX3Rva2VuO1xufTtcblxuVGFnU3RhY2sucHJvdG90eXBlLl9nZXRfZnJhbWUgPSBmdW5jdGlvbih0YWdfbGlzdCwgc3RvcF9saXN0KSB7IC8vZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIG9wZW5pbmcgdGFnIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNsb3NlclxuICB2YXIgZnJhbWUgPSB0aGlzLl9jdXJyZW50X2ZyYW1lO1xuXG4gIHdoaWxlIChmcmFtZSkgeyAvL3RpbGwgd2UgcmVhY2ggJycgKHRoZSBpbml0aWFsIHZhbHVlKTtcbiAgICBpZiAodGFnX2xpc3QuaW5kZXhPZihmcmFtZS50YWcpICE9PSAtMSkgeyAvL2lmIHRoaXMgaXMgaXQgdXNlIGl0XG4gICAgICBicmVhaztcbiAgICB9IGVsc2UgaWYgKHN0b3BfbGlzdCAmJiBzdG9wX2xpc3QuaW5kZXhPZihmcmFtZS50YWcpICE9PSAtMSkge1xuICAgICAgZnJhbWUgPSBudWxsO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGZyYW1lID0gZnJhbWUucGFyZW50O1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufTtcblxuVGFnU3RhY2sucHJvdG90eXBlLnRyeV9wb3AgPSBmdW5jdGlvbih0YWcsIHN0b3BfbGlzdCkgeyAvL2Z1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBvcGVuaW5nIHRhZyB0byB0aGUgY29ycmVzcG9uZGluZyBjbG9zZXJcbiAgdmFyIGZyYW1lID0gdGhpcy5fZ2V0X2ZyYW1lKFt0YWddLCBzdG9wX2xpc3QpO1xuICByZXR1cm4gdGhpcy5fdHJ5X3BvcF9mcmFtZShmcmFtZSk7XG59O1xuXG5UYWdTdGFjay5wcm90b3R5cGUuaW5kZW50X3RvX3RhZyA9IGZ1bmN0aW9uKHRhZ19saXN0KSB7XG4gIHZhciBmcmFtZSA9IHRoaXMuX2dldF9mcmFtZSh0YWdfbGlzdCk7XG4gIGlmIChmcmFtZSkge1xuICAgIHRoaXMuX3ByaW50ZXIuaW5kZW50X2xldmVsID0gZnJhbWUuaW5kZW50X2xldmVsO1xuICB9XG59O1xuXG5mdW5jdGlvbiBCZWF1dGlmaWVyKHNvdXJjZV90ZXh0LCBvcHRpb25zLCBqc19iZWF1dGlmeSwgY3NzX2JlYXV0aWZ5KSB7XG4gIC8vV3JhcHBlciBmdW5jdGlvbiB0byBpbnZva2UgYWxsIHRoZSBuZWNlc3NhcnkgY29uc3RydWN0b3JzIGFuZCBkZWFsIHdpdGggdGhlIG91dHB1dC5cbiAgdGhpcy5fc291cmNlX3RleHQgPSBzb3VyY2VfdGV4dCB8fCAnJztcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMuX2pzX2JlYXV0aWZ5ID0ganNfYmVhdXRpZnk7XG4gIHRoaXMuX2Nzc19iZWF1dGlmeSA9IGNzc19iZWF1dGlmeTtcbiAgdGhpcy5fdGFnX3N0YWNrID0gbnVsbDtcblxuICAvLyBBbGxvdyB0aGUgc2V0dGluZyBvZiBsYW5ndWFnZS9maWxlLXR5cGUgc3BlY2lmaWMgb3B0aW9uc1xuICAvLyB3aXRoIGluaGVyaXRhbmNlIG9mIG92ZXJhbGwgc2V0dGluZ3NcbiAgdmFyIG9wdGlvbkh0bWwgPSBuZXcgT3B0aW9ucyhvcHRpb25zLCAnaHRtbCcpO1xuXG4gIHRoaXMuX29wdGlvbnMgPSBvcHRpb25IdG1sO1xuXG4gIHRoaXMuX2lzX3dyYXBfYXR0cmlidXRlc19mb3JjZSA9IHRoaXMuX29wdGlvbnMud3JhcF9hdHRyaWJ1dGVzLnN1YnN0cigwLCAnZm9yY2UnLmxlbmd0aCkgPT09ICdmb3JjZSc7XG4gIHRoaXMuX2lzX3dyYXBfYXR0cmlidXRlc19mb3JjZV9leHBhbmRfbXVsdGlsaW5lID0gKHRoaXMuX29wdGlvbnMud3JhcF9hdHRyaWJ1dGVzID09PSAnZm9yY2UtZXhwYW5kLW11bHRpbGluZScpO1xuICB0aGlzLl9pc193cmFwX2F0dHJpYnV0ZXNfZm9yY2VfYWxpZ25lZCA9ICh0aGlzLl9vcHRpb25zLndyYXBfYXR0cmlidXRlcyA9PT0gJ2ZvcmNlLWFsaWduZWQnKTtcbiAgdGhpcy5faXNfd3JhcF9hdHRyaWJ1dGVzX2FsaWduZWRfbXVsdGlwbGUgPSAodGhpcy5fb3B0aW9ucy53cmFwX2F0dHJpYnV0ZXMgPT09ICdhbGlnbmVkLW11bHRpcGxlJyk7XG4gIHRoaXMuX2lzX3dyYXBfYXR0cmlidXRlc19wcmVzZXJ2ZSA9IHRoaXMuX29wdGlvbnMud3JhcF9hdHRyaWJ1dGVzLnN1YnN0cigwLCAncHJlc2VydmUnLmxlbmd0aCkgPT09ICdwcmVzZXJ2ZSc7XG4gIHRoaXMuX2lzX3dyYXBfYXR0cmlidXRlc19wcmVzZXJ2ZV9hbGlnbmVkID0gKHRoaXMuX29wdGlvbnMud3JhcF9hdHRyaWJ1dGVzID09PSAncHJlc2VydmUtYWxpZ25lZCcpO1xufVxuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5iZWF1dGlmeSA9IGZ1bmN0aW9uKCkge1xuXG4gIC8vIGlmIGRpc2FibGVkLCByZXR1cm4gdGhlIGlucHV0IHVuY2hhbmdlZC5cbiAgaWYgKHRoaXMuX29wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlX3RleHQ7XG4gIH1cblxuICB2YXIgc291cmNlX3RleHQgPSB0aGlzLl9zb3VyY2VfdGV4dDtcbiAgdmFyIGVvbCA9IHRoaXMuX29wdGlvbnMuZW9sO1xuICBpZiAodGhpcy5fb3B0aW9ucy5lb2wgPT09ICdhdXRvJykge1xuICAgIGVvbCA9ICdcXG4nO1xuICAgIGlmIChzb3VyY2VfdGV4dCAmJiBsaW5lQnJlYWsudGVzdChzb3VyY2VfdGV4dCkpIHtcbiAgICAgIGVvbCA9IHNvdXJjZV90ZXh0Lm1hdGNoKGxpbmVCcmVhaylbMF07XG4gICAgfVxuICB9XG5cbiAgLy8gSEFDSzogbmV3bGluZSBwYXJzaW5nIGluY29uc2lzdGVudC4gVGhpcyBicnV0ZSBmb3JjZSBub3JtYWxpemVzIHRoZSBpbnB1dC5cbiAgc291cmNlX3RleHQgPSBzb3VyY2VfdGV4dC5yZXBsYWNlKGFsbExpbmVCcmVha3MsICdcXG4nKTtcblxuICB2YXIgYmFzZUluZGVudFN0cmluZyA9IHNvdXJjZV90ZXh0Lm1hdGNoKC9eW1xcdCBdKi8pWzBdO1xuXG4gIHZhciBsYXN0X3Rva2VuID0ge1xuICAgIHRleHQ6ICcnLFxuICAgIHR5cGU6ICcnXG4gIH07XG5cbiAgdmFyIGxhc3RfdGFnX3Rva2VuID0gbmV3IFRhZ09wZW5QYXJzZXJUb2tlbigpO1xuXG4gIHZhciBwcmludGVyID0gbmV3IFByaW50ZXIodGhpcy5fb3B0aW9ucywgYmFzZUluZGVudFN0cmluZyk7XG4gIHZhciB0b2tlbnMgPSBuZXcgVG9rZW5pemVyKHNvdXJjZV90ZXh0LCB0aGlzLl9vcHRpb25zKS50b2tlbml6ZSgpO1xuXG4gIHRoaXMuX3RhZ19zdGFjayA9IG5ldyBUYWdTdGFjayhwcmludGVyKTtcblxuICB2YXIgcGFyc2VyX3Rva2VuID0gbnVsbDtcbiAgdmFyIHJhd190b2tlbiA9IHRva2Vucy5uZXh0KCk7XG4gIHdoaWxlIChyYXdfdG9rZW4udHlwZSAhPT0gVE9LRU4uRU9GKSB7XG5cbiAgICBpZiAocmF3X3Rva2VuLnR5cGUgPT09IFRPS0VOLlRBR19PUEVOIHx8IHJhd190b2tlbi50eXBlID09PSBUT0tFTi5DT01NRU5UKSB7XG4gICAgICBwYXJzZXJfdG9rZW4gPSB0aGlzLl9oYW5kbGVfdGFnX29wZW4ocHJpbnRlciwgcmF3X3Rva2VuLCBsYXN0X3RhZ190b2tlbiwgbGFzdF90b2tlbik7XG4gICAgICBsYXN0X3RhZ190b2tlbiA9IHBhcnNlcl90b2tlbjtcbiAgICB9IGVsc2UgaWYgKChyYXdfdG9rZW4udHlwZSA9PT0gVE9LRU4uQVRUUklCVVRFIHx8IHJhd190b2tlbi50eXBlID09PSBUT0tFTi5FUVVBTFMgfHwgcmF3X3Rva2VuLnR5cGUgPT09IFRPS0VOLlZBTFVFKSB8fFxuICAgICAgKHJhd190b2tlbi50eXBlID09PSBUT0tFTi5URVhUICYmICFsYXN0X3RhZ190b2tlbi50YWdfY29tcGxldGUpKSB7XG4gICAgICBwYXJzZXJfdG9rZW4gPSB0aGlzLl9oYW5kbGVfaW5zaWRlX3RhZyhwcmludGVyLCByYXdfdG9rZW4sIGxhc3RfdGFnX3Rva2VuLCB0b2tlbnMpO1xuICAgIH0gZWxzZSBpZiAocmF3X3Rva2VuLnR5cGUgPT09IFRPS0VOLlRBR19DTE9TRSkge1xuICAgICAgcGFyc2VyX3Rva2VuID0gdGhpcy5faGFuZGxlX3RhZ19jbG9zZShwcmludGVyLCByYXdfdG9rZW4sIGxhc3RfdGFnX3Rva2VuKTtcbiAgICB9IGVsc2UgaWYgKHJhd190b2tlbi50eXBlID09PSBUT0tFTi5URVhUKSB7XG4gICAgICBwYXJzZXJfdG9rZW4gPSB0aGlzLl9oYW5kbGVfdGV4dChwcmludGVyLCByYXdfdG9rZW4sIGxhc3RfdGFnX3Rva2VuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgaWYgaXQgZG9lcy4gUHJpbnQgdGhlIHJhdyB0b2tlblxuICAgICAgcHJpbnRlci5hZGRfcmF3X3Rva2VuKHJhd190b2tlbik7XG4gICAgfVxuXG4gICAgbGFzdF90b2tlbiA9IHBhcnNlcl90b2tlbjtcblxuICAgIHJhd190b2tlbiA9IHRva2Vucy5uZXh0KCk7XG4gIH1cbiAgdmFyIHN3ZWV0X2NvZGUgPSBwcmludGVyLl9vdXRwdXQuZ2V0X2NvZGUoZW9sKTtcblxuICByZXR1cm4gc3dlZXRfY29kZTtcbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLl9oYW5kbGVfdGFnX2Nsb3NlID0gZnVuY3Rpb24ocHJpbnRlciwgcmF3X3Rva2VuLCBsYXN0X3RhZ190b2tlbikge1xuICB2YXIgcGFyc2VyX3Rva2VuID0ge1xuICAgIHRleHQ6IHJhd190b2tlbi50ZXh0LFxuICAgIHR5cGU6IHJhd190b2tlbi50eXBlXG4gIH07XG4gIHByaW50ZXIuYWxpZ25tZW50X3NpemUgPSAwO1xuICBsYXN0X3RhZ190b2tlbi50YWdfY29tcGxldGUgPSB0cnVlO1xuXG4gIHByaW50ZXIuc2V0X3NwYWNlX2JlZm9yZV90b2tlbihyYXdfdG9rZW4ubmV3bGluZXMgfHwgcmF3X3Rva2VuLndoaXRlc3BhY2VfYmVmb3JlICE9PSAnJywgdHJ1ZSk7XG4gIGlmIChsYXN0X3RhZ190b2tlbi5pc191bmZvcm1hdHRlZCkge1xuICAgIHByaW50ZXIuYWRkX3Jhd190b2tlbihyYXdfdG9rZW4pO1xuICB9IGVsc2Uge1xuICAgIGlmIChsYXN0X3RhZ190b2tlbi50YWdfc3RhcnRfY2hhciA9PT0gJzwnKSB7XG4gICAgICBwcmludGVyLnNldF9zcGFjZV9iZWZvcmVfdG9rZW4ocmF3X3Rva2VuLnRleHRbMF0gPT09ICcvJywgdHJ1ZSk7IC8vIHNwYWNlIGJlZm9yZSAvPiwgbm8gc3BhY2UgYmVmb3JlID5cbiAgICAgIGlmICh0aGlzLl9pc193cmFwX2F0dHJpYnV0ZXNfZm9yY2VfZXhwYW5kX211bHRpbGluZSAmJiBsYXN0X3RhZ190b2tlbi5oYXNfd3JhcHBlZF9hdHRycykge1xuICAgICAgICBwcmludGVyLnByaW50X25ld2xpbmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcmludGVyLnByaW50X3Rva2VuKHJhd190b2tlbik7XG5cbiAgfVxuXG4gIGlmIChsYXN0X3RhZ190b2tlbi5pbmRlbnRfY29udGVudCAmJlxuICAgICEobGFzdF90YWdfdG9rZW4uaXNfdW5mb3JtYXR0ZWQgfHwgbGFzdF90YWdfdG9rZW4uaXNfY29udGVudF91bmZvcm1hdHRlZCkpIHtcbiAgICBwcmludGVyLmluZGVudCgpO1xuXG4gICAgLy8gb25seSBpbmRlbnQgb25jZSBwZXIgb3BlbmVkIHRhZ1xuICAgIGxhc3RfdGFnX3Rva2VuLmluZGVudF9jb250ZW50ID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIWxhc3RfdGFnX3Rva2VuLmlzX2lubGluZV9lbGVtZW50ICYmXG4gICAgIShsYXN0X3RhZ190b2tlbi5pc191bmZvcm1hdHRlZCB8fCBsYXN0X3RhZ190b2tlbi5pc19jb250ZW50X3VuZm9ybWF0dGVkKSkge1xuICAgIHByaW50ZXIuc2V0X3dyYXBfcG9pbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZXJfdG9rZW47XG59O1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5faGFuZGxlX2luc2lkZV90YWcgPSBmdW5jdGlvbihwcmludGVyLCByYXdfdG9rZW4sIGxhc3RfdGFnX3Rva2VuLCB0b2tlbnMpIHtcbiAgdmFyIHdyYXBwZWQgPSBsYXN0X3RhZ190b2tlbi5oYXNfd3JhcHBlZF9hdHRycztcbiAgdmFyIHBhcnNlcl90b2tlbiA9IHtcbiAgICB0ZXh0OiByYXdfdG9rZW4udGV4dCxcbiAgICB0eXBlOiByYXdfdG9rZW4udHlwZVxuICB9O1xuXG4gIHByaW50ZXIuc2V0X3NwYWNlX2JlZm9yZV90b2tlbihyYXdfdG9rZW4ubmV3bGluZXMgfHwgcmF3X3Rva2VuLndoaXRlc3BhY2VfYmVmb3JlICE9PSAnJywgdHJ1ZSk7XG4gIGlmIChsYXN0X3RhZ190b2tlbi5pc191bmZvcm1hdHRlZCkge1xuICAgIHByaW50ZXIuYWRkX3Jhd190b2tlbihyYXdfdG9rZW4pO1xuICB9IGVsc2UgaWYgKGxhc3RfdGFnX3Rva2VuLnRhZ19zdGFydF9jaGFyID09PSAneycgJiYgcmF3X3Rva2VuLnR5cGUgPT09IFRPS0VOLlRFWFQpIHtcbiAgICAvLyBGb3IgdGhlIGluc2lkZXMgb2YgaGFuZGxlYmFycyBhbGxvdyBuZXdsaW5lcyBvciBhIHNpbmdsZSBzcGFjZSBiZXR3ZWVuIG9wZW4gYW5kIGNvbnRlbnRzXG4gICAgaWYgKHByaW50ZXIucHJpbnRfcHJlc2VydmVkX25ld2xpbmVzKHJhd190b2tlbikpIHtcbiAgICAgIHJhd190b2tlbi5uZXdsaW5lcyA9IDA7XG4gICAgICBwcmludGVyLmFkZF9yYXdfdG9rZW4ocmF3X3Rva2VuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJpbnRlci5wcmludF90b2tlbihyYXdfdG9rZW4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAocmF3X3Rva2VuLnR5cGUgPT09IFRPS0VOLkFUVFJJQlVURSkge1xuICAgICAgcHJpbnRlci5zZXRfc3BhY2VfYmVmb3JlX3Rva2VuKHRydWUpO1xuICAgICAgbGFzdF90YWdfdG9rZW4uYXR0cl9jb3VudCArPSAxO1xuICAgIH0gZWxzZSBpZiAocmF3X3Rva2VuLnR5cGUgPT09IFRPS0VOLkVRVUFMUykgeyAvL25vIHNwYWNlIGJlZm9yZSA9XG4gICAgICBwcmludGVyLnNldF9zcGFjZV9iZWZvcmVfdG9rZW4oZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAocmF3X3Rva2VuLnR5cGUgPT09IFRPS0VOLlZBTFVFICYmIHJhd190b2tlbi5wcmV2aW91cy50eXBlID09PSBUT0tFTi5FUVVBTFMpIHsgLy9ubyBzcGFjZSBiZWZvcmUgdmFsdWVcbiAgICAgIHByaW50ZXIuc2V0X3NwYWNlX2JlZm9yZV90b2tlbihmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHJhd190b2tlbi50eXBlID09PSBUT0tFTi5BVFRSSUJVVEUgJiYgbGFzdF90YWdfdG9rZW4udGFnX3N0YXJ0X2NoYXIgPT09ICc8Jykge1xuICAgICAgaWYgKHRoaXMuX2lzX3dyYXBfYXR0cmlidXRlc19wcmVzZXJ2ZSB8fCB0aGlzLl9pc193cmFwX2F0dHJpYnV0ZXNfcHJlc2VydmVfYWxpZ25lZCkge1xuICAgICAgICBwcmludGVyLnRyYXZlcnNlX3doaXRlc3BhY2UocmF3X3Rva2VuKTtcbiAgICAgICAgd3JhcHBlZCA9IHdyYXBwZWQgfHwgcmF3X3Rva2VuLm5ld2xpbmVzICE9PSAwO1xuICAgICAgfVxuXG5cbiAgICAgIGlmICh0aGlzLl9pc193cmFwX2F0dHJpYnV0ZXNfZm9yY2UpIHtcbiAgICAgICAgdmFyIGZvcmNlX2F0dHJfd3JhcCA9IGxhc3RfdGFnX3Rva2VuLmF0dHJfY291bnQgPiAxO1xuICAgICAgICBpZiAodGhpcy5faXNfd3JhcF9hdHRyaWJ1dGVzX2ZvcmNlX2V4cGFuZF9tdWx0aWxpbmUgJiYgbGFzdF90YWdfdG9rZW4uYXR0cl9jb3VudCA9PT0gMSkge1xuICAgICAgICAgIHZhciBpc19vbmx5X2F0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgICAgdmFyIHBlZWtfaW5kZXggPSAwO1xuICAgICAgICAgIHZhciBwZWVrX3Rva2VuO1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIHBlZWtfdG9rZW4gPSB0b2tlbnMucGVlayhwZWVrX2luZGV4KTtcbiAgICAgICAgICAgIGlmIChwZWVrX3Rva2VuLnR5cGUgPT09IFRPS0VOLkFUVFJJQlVURSkge1xuICAgICAgICAgICAgICBpc19vbmx5X2F0dHJpYnV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBlZWtfaW5kZXggKz0gMTtcbiAgICAgICAgICB9IHdoaWxlIChwZWVrX2luZGV4IDwgNCAmJiBwZWVrX3Rva2VuLnR5cGUgIT09IFRPS0VOLkVPRiAmJiBwZWVrX3Rva2VuLnR5cGUgIT09IFRPS0VOLlRBR19DTE9TRSk7XG5cbiAgICAgICAgICBmb3JjZV9hdHRyX3dyYXAgPSAhaXNfb25seV9hdHRyaWJ1dGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9yY2VfYXR0cl93cmFwKSB7XG4gICAgICAgICAgcHJpbnRlci5wcmludF9uZXdsaW5lKGZhbHNlKTtcbiAgICAgICAgICB3cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwcmludGVyLnByaW50X3Rva2VuKHJhd190b2tlbik7XG4gICAgd3JhcHBlZCA9IHdyYXBwZWQgfHwgcHJpbnRlci5wcmV2aW91c190b2tlbl93cmFwcGVkKCk7XG4gICAgbGFzdF90YWdfdG9rZW4uaGFzX3dyYXBwZWRfYXR0cnMgPSB3cmFwcGVkO1xuICB9XG4gIHJldHVybiBwYXJzZXJfdG9rZW47XG59O1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5faGFuZGxlX3RleHQgPSBmdW5jdGlvbihwcmludGVyLCByYXdfdG9rZW4sIGxhc3RfdGFnX3Rva2VuKSB7XG4gIHZhciBwYXJzZXJfdG9rZW4gPSB7XG4gICAgdGV4dDogcmF3X3Rva2VuLnRleHQsXG4gICAgdHlwZTogJ1RLX0NPTlRFTlQnXG4gIH07XG4gIGlmIChsYXN0X3RhZ190b2tlbi5jdXN0b21fYmVhdXRpZmllcl9uYW1lKSB7IC8vY2hlY2sgaWYgd2UgbmVlZCB0byBmb3JtYXQgamF2YXNjcmlwdFxuICAgIHRoaXMuX3ByaW50X2N1c3RvbV9iZWF0aWZpZXJfdGV4dChwcmludGVyLCByYXdfdG9rZW4sIGxhc3RfdGFnX3Rva2VuKTtcbiAgfSBlbHNlIGlmIChsYXN0X3RhZ190b2tlbi5pc191bmZvcm1hdHRlZCB8fCBsYXN0X3RhZ190b2tlbi5pc19jb250ZW50X3VuZm9ybWF0dGVkKSB7XG4gICAgcHJpbnRlci5hZGRfcmF3X3Rva2VuKHJhd190b2tlbik7XG4gIH0gZWxzZSB7XG4gICAgcHJpbnRlci50cmF2ZXJzZV93aGl0ZXNwYWNlKHJhd190b2tlbik7XG4gICAgcHJpbnRlci5wcmludF90b2tlbihyYXdfdG9rZW4pO1xuICB9XG4gIHJldHVybiBwYXJzZXJfdG9rZW47XG59O1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5fcHJpbnRfY3VzdG9tX2JlYXRpZmllcl90ZXh0ID0gZnVuY3Rpb24ocHJpbnRlciwgcmF3X3Rva2VuLCBsYXN0X3RhZ190b2tlbikge1xuICB2YXIgbG9jYWwgPSB0aGlzO1xuICBpZiAocmF3X3Rva2VuLnRleHQgIT09ICcnKSB7XG5cbiAgICB2YXIgdGV4dCA9IHJhd190b2tlbi50ZXh0LFxuICAgICAgX2JlYXV0aWZpZXIsXG4gICAgICBzY3JpcHRfaW5kZW50X2xldmVsID0gMSxcbiAgICAgIHByZSA9ICcnLFxuICAgICAgcG9zdCA9ICcnO1xuICAgIGlmIChsYXN0X3RhZ190b2tlbi5jdXN0b21fYmVhdXRpZmllcl9uYW1lID09PSAnamF2YXNjcmlwdCcgJiYgdHlwZW9mIHRoaXMuX2pzX2JlYXV0aWZ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBfYmVhdXRpZmllciA9IHRoaXMuX2pzX2JlYXV0aWZ5O1xuICAgIH0gZWxzZSBpZiAobGFzdF90YWdfdG9rZW4uY3VzdG9tX2JlYXV0aWZpZXJfbmFtZSA9PT0gJ2NzcycgJiYgdHlwZW9mIHRoaXMuX2Nzc19iZWF1dGlmeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgX2JlYXV0aWZpZXIgPSB0aGlzLl9jc3NfYmVhdXRpZnk7XG4gICAgfSBlbHNlIGlmIChsYXN0X3RhZ190b2tlbi5jdXN0b21fYmVhdXRpZmllcl9uYW1lID09PSAnaHRtbCcpIHtcbiAgICAgIF9iZWF1dGlmaWVyID0gZnVuY3Rpb24oaHRtbF9zb3VyY2UsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGJlYXV0aWZpZXIgPSBuZXcgQmVhdXRpZmllcihodG1sX3NvdXJjZSwgb3B0aW9ucywgbG9jYWwuX2pzX2JlYXV0aWZ5LCBsb2NhbC5fY3NzX2JlYXV0aWZ5KTtcbiAgICAgICAgcmV0dXJuIGJlYXV0aWZpZXIuYmVhdXRpZnkoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaW5kZW50X3NjcmlwdHMgPT09IFwia2VlcFwiKSB7XG4gICAgICBzY3JpcHRfaW5kZW50X2xldmVsID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX29wdGlvbnMuaW5kZW50X3NjcmlwdHMgPT09IFwic2VwYXJhdGVcIikge1xuICAgICAgc2NyaXB0X2luZGVudF9sZXZlbCA9IC1wcmludGVyLmluZGVudF9sZXZlbDtcbiAgICB9XG5cbiAgICB2YXIgaW5kZW50YXRpb24gPSBwcmludGVyLmdldF9mdWxsX2luZGVudChzY3JpcHRfaW5kZW50X2xldmVsKTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbXB0eSBsaW5lIGF0IHRoZSBlbmQgb2YgdGhpcyB0ZXh0LCBzdHJpcCBpdFxuICAgIC8vIHdlJ2xsIGJlIGFkZGluZyBvbmUgYmFjayBhZnRlciB0aGUgdGV4dCBidXQgYmVmb3JlIHRoZSBjb250YWluaW5nIHRhZy5cbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXG5bIFxcdF0qJC8sICcnKTtcblxuICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBjb250ZW50IGlzIHdyYXBwZWQgaW4gYSBjb21tZW50IG9yIGNkYXRhLlxuICAgIGlmIChsYXN0X3RhZ190b2tlbi5jdXN0b21fYmVhdXRpZmllcl9uYW1lICE9PSAnaHRtbCcgJiZcbiAgICAgIHRleHRbMF0gPT09ICc8JyAmJiB0ZXh0Lm1hdGNoKC9eKDwhLS18PCFcXFtDREFUQVxcWykvKSkge1xuICAgICAgdmFyIG1hdGNoZWQgPSAvXig8IS0tW15cXG5dKnw8IVxcW0NEQVRBXFxbKShcXG4/KShbIFxcdFxcbl0qKShbXFxzXFxTXSopKC0tPnxdXT4pJC8uZXhlYyh0ZXh0KTtcblxuICAgICAgLy8gaWYgd2Ugc3RhcnQgdG8gd3JhcCBidXQgZG9uJ3QgZmluaXNoLCBwcmludCByYXdcbiAgICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgICBwcmludGVyLmFkZF9yYXdfdG9rZW4ocmF3X3Rva2VuKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcmUgPSBpbmRlbnRhdGlvbiArIG1hdGNoZWRbMV0gKyAnXFxuJztcbiAgICAgIHRleHQgPSBtYXRjaGVkWzRdO1xuICAgICAgaWYgKG1hdGNoZWRbNV0pIHtcbiAgICAgICAgcG9zdCA9IGluZGVudGF0aW9uICsgbWF0Y2hlZFs1XTtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVtcHR5IGxpbmUgYXQgdGhlIGVuZCBvZiB0aGlzIHRleHQsIHN0cmlwIGl0XG4gICAgICAvLyB3ZSdsbCBiZSBhZGRpbmcgb25lIGJhY2sgYWZ0ZXIgdGhlIHRleHQgYnV0IGJlZm9yZSB0aGUgY29udGFpbmluZyB0YWcuXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXG5bIFxcdF0qJC8sICcnKTtcblxuICAgICAgaWYgKG1hdGNoZWRbMl0gfHwgbWF0Y2hlZFszXS5pbmRleE9mKCdcXG4nKSAhPT0gLTEpIHtcbiAgICAgICAgLy8gaWYgdGhlIGZpcnN0IGxpbmUgb2YgdGhlIG5vbi1jb21tZW50IHRleHQgaGFzIHNwYWNlc1xuICAgICAgICAvLyB1c2UgdGhhdCBhcyB0aGUgYmFzaXMgZm9yIGluZGVudGluZyBpbiBudWxsIGNhc2UuXG4gICAgICAgIG1hdGNoZWQgPSBtYXRjaGVkWzNdLm1hdGNoKC9bIFxcdF0rJC8pO1xuICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgIHJhd190b2tlbi53aGl0ZXNwYWNlX2JlZm9yZSA9IG1hdGNoZWRbMF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGV4dCkge1xuICAgICAgaWYgKF9iZWF1dGlmaWVyKSB7XG5cbiAgICAgICAgLy8gY2FsbCB0aGUgQmVhdXRpZmllciBpZiBhdmFsaWFibGVcbiAgICAgICAgdmFyIENoaWxkX29wdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLmVvbCA9ICdcXG4nO1xuICAgICAgICB9O1xuICAgICAgICBDaGlsZF9vcHRpb25zLnByb3RvdHlwZSA9IHRoaXMuX29wdGlvbnMucmF3X29wdGlvbnM7XG4gICAgICAgIHZhciBjaGlsZF9vcHRpb25zID0gbmV3IENoaWxkX29wdGlvbnMoKTtcbiAgICAgICAgdGV4dCA9IF9iZWF1dGlmaWVyKGluZGVudGF0aW9uICsgdGV4dCwgY2hpbGRfb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzaW1wbHkgaW5kZW50IHRoZSBzdHJpbmcgb3RoZXJ3aXNlXG4gICAgICAgIHZhciB3aGl0ZSA9IHJhd190b2tlbi53aGl0ZXNwYWNlX2JlZm9yZTtcbiAgICAgICAgaWYgKHdoaXRlKSB7XG4gICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShuZXcgUmVnRXhwKCdcXG4oJyArIHdoaXRlICsgJyk/JywgJ2cnKSwgJ1xcbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dCA9IGluZGVudGF0aW9uICsgdGV4dC5yZXBsYWNlKC9cXG4vZywgJ1xcbicgKyBpbmRlbnRhdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByZSkge1xuICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHRleHQgPSBwcmUgKyBwb3N0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCA9IHByZSArIHRleHQgKyAnXFxuJyArIHBvc3Q7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpbnRlci5wcmludF9uZXdsaW5lKGZhbHNlKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgcmF3X3Rva2VuLnRleHQgPSB0ZXh0O1xuICAgICAgcmF3X3Rva2VuLndoaXRlc3BhY2VfYmVmb3JlID0gJyc7XG4gICAgICByYXdfdG9rZW4ubmV3bGluZXMgPSAwO1xuICAgICAgcHJpbnRlci5hZGRfcmF3X3Rva2VuKHJhd190b2tlbik7XG4gICAgICBwcmludGVyLnByaW50X25ld2xpbmUodHJ1ZSk7XG4gICAgfVxuICB9XG59O1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5faGFuZGxlX3RhZ19vcGVuID0gZnVuY3Rpb24ocHJpbnRlciwgcmF3X3Rva2VuLCBsYXN0X3RhZ190b2tlbiwgbGFzdF90b2tlbikge1xuICB2YXIgcGFyc2VyX3Rva2VuID0gdGhpcy5fZ2V0X3RhZ19vcGVuX3Rva2VuKHJhd190b2tlbik7XG5cbiAgaWYgKChsYXN0X3RhZ190b2tlbi5pc191bmZvcm1hdHRlZCB8fCBsYXN0X3RhZ190b2tlbi5pc19jb250ZW50X3VuZm9ybWF0dGVkKSAmJlxuICAgICFsYXN0X3RhZ190b2tlbi5pc19lbXB0eV9lbGVtZW50ICYmXG4gICAgcmF3X3Rva2VuLnR5cGUgPT09IFRPS0VOLlRBR19PUEVOICYmIHJhd190b2tlbi50ZXh0LmluZGV4T2YoJzwvJykgPT09IDApIHtcbiAgICAvLyBFbmQgZWxlbWVudCB0YWdzIGZvciB1bmZvcm1hdHRlZCBvciBjb250ZW50X3VuZm9ybWF0dGVkIGVsZW1lbnRzXG4gICAgLy8gYXJlIHByaW50ZWQgcmF3IHRvIGtlZXAgYW55IG5ld2xpbmVzIGluc2lkZSB0aGVtIGV4YWN0bHkgdGhlIHNhbWUuXG4gICAgcHJpbnRlci5hZGRfcmF3X3Rva2VuKHJhd190b2tlbik7XG4gICAgcGFyc2VyX3Rva2VuLnN0YXJ0X3RhZ190b2tlbiA9IHRoaXMuX3RhZ19zdGFjay50cnlfcG9wKHBhcnNlcl90b2tlbi50YWdfbmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcHJpbnRlci50cmF2ZXJzZV93aGl0ZXNwYWNlKHJhd190b2tlbik7XG4gICAgdGhpcy5fc2V0X3RhZ19wb3NpdGlvbihwcmludGVyLCByYXdfdG9rZW4sIHBhcnNlcl90b2tlbiwgbGFzdF90YWdfdG9rZW4sIGxhc3RfdG9rZW4pO1xuICAgIGlmICghcGFyc2VyX3Rva2VuLmlzX2lubGluZV9lbGVtZW50KSB7XG4gICAgICBwcmludGVyLnNldF93cmFwX3BvaW50KCk7XG4gICAgfVxuICAgIHByaW50ZXIucHJpbnRfdG9rZW4ocmF3X3Rva2VuKTtcbiAgfVxuXG4gIC8vaW5kZW50IGF0dHJpYnV0ZXMgYW4gYXV0bywgZm9yY2VkLCBhbGlnbmVkIG9yIGZvcmNlZC1hbGlnbiBsaW5lLXdyYXBcbiAgaWYgKHRoaXMuX2lzX3dyYXBfYXR0cmlidXRlc19mb3JjZV9hbGlnbmVkIHx8IHRoaXMuX2lzX3dyYXBfYXR0cmlidXRlc19hbGlnbmVkX211bHRpcGxlIHx8IHRoaXMuX2lzX3dyYXBfYXR0cmlidXRlc19wcmVzZXJ2ZV9hbGlnbmVkKSB7XG4gICAgcGFyc2VyX3Rva2VuLmFsaWdubWVudF9zaXplID0gcmF3X3Rva2VuLnRleHQubGVuZ3RoICsgMTtcbiAgfVxuXG4gIGlmICghcGFyc2VyX3Rva2VuLnRhZ19jb21wbGV0ZSAmJiAhcGFyc2VyX3Rva2VuLmlzX3VuZm9ybWF0dGVkKSB7XG4gICAgcHJpbnRlci5hbGlnbm1lbnRfc2l6ZSA9IHBhcnNlcl90b2tlbi5hbGlnbm1lbnRfc2l6ZTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZXJfdG9rZW47XG59O1xuXG52YXIgVGFnT3BlblBhcnNlclRva2VuID0gZnVuY3Rpb24ocGFyZW50LCByYXdfdG9rZW4pIHtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQgfHwgbnVsbDtcbiAgdGhpcy50ZXh0ID0gJyc7XG4gIHRoaXMudHlwZSA9ICdUS19UQUdfT1BFTic7XG4gIHRoaXMudGFnX25hbWUgPSAnJztcbiAgdGhpcy5pc19pbmxpbmVfZWxlbWVudCA9IGZhbHNlO1xuICB0aGlzLmlzX3VuZm9ybWF0dGVkID0gZmFsc2U7XG4gIHRoaXMuaXNfY29udGVudF91bmZvcm1hdHRlZCA9IGZhbHNlO1xuICB0aGlzLmlzX2VtcHR5X2VsZW1lbnQgPSBmYWxzZTtcbiAgdGhpcy5pc19zdGFydF90YWcgPSBmYWxzZTtcbiAgdGhpcy5pc19lbmRfdGFnID0gZmFsc2U7XG4gIHRoaXMuaW5kZW50X2NvbnRlbnQgPSBmYWxzZTtcbiAgdGhpcy5tdWx0aWxpbmVfY29udGVudCA9IGZhbHNlO1xuICB0aGlzLmN1c3RvbV9iZWF1dGlmaWVyX25hbWUgPSBudWxsO1xuICB0aGlzLnN0YXJ0X3RhZ190b2tlbiA9IG51bGw7XG4gIHRoaXMuYXR0cl9jb3VudCA9IDA7XG4gIHRoaXMuaGFzX3dyYXBwZWRfYXR0cnMgPSBmYWxzZTtcbiAgdGhpcy5hbGlnbm1lbnRfc2l6ZSA9IDA7XG4gIHRoaXMudGFnX2NvbXBsZXRlID0gZmFsc2U7XG4gIHRoaXMudGFnX3N0YXJ0X2NoYXIgPSAnJztcbiAgdGhpcy50YWdfY2hlY2sgPSAnJztcblxuICBpZiAoIXJhd190b2tlbikge1xuICAgIHRoaXMudGFnX2NvbXBsZXRlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnX2NoZWNrX21hdGNoO1xuXG4gICAgdGhpcy50YWdfc3RhcnRfY2hhciA9IHJhd190b2tlbi50ZXh0WzBdO1xuICAgIHRoaXMudGV4dCA9IHJhd190b2tlbi50ZXh0O1xuXG4gICAgaWYgKHRoaXMudGFnX3N0YXJ0X2NoYXIgPT09ICc8Jykge1xuICAgICAgdGFnX2NoZWNrX21hdGNoID0gcmF3X3Rva2VuLnRleHQubWF0Y2goL148KFteXFxzPl0qKS8pO1xuICAgICAgdGhpcy50YWdfY2hlY2sgPSB0YWdfY2hlY2tfbWF0Y2ggPyB0YWdfY2hlY2tfbWF0Y2hbMV0gOiAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGFnX2NoZWNrX21hdGNoID0gcmF3X3Rva2VuLnRleHQubWF0Y2goL157e34/KD86W1xcXl18I1xcKj8pPyhbXlxcc31dKykvKTtcbiAgICAgIHRoaXMudGFnX2NoZWNrID0gdGFnX2NoZWNrX21hdGNoID8gdGFnX2NoZWNrX21hdGNoWzFdIDogJyc7XG5cbiAgICAgIC8vIGhhbmRsZSBcInt7Iz4gbXlQYXJ0aWFsfX1cIiBvciBcInt7fiM+IG15UGFydGlhbH19XCJcbiAgICAgIGlmICgocmF3X3Rva2VuLnRleHQuc3RhcnRzV2l0aCgne3sjPicpIHx8IHJhd190b2tlbi50ZXh0LnN0YXJ0c1dpdGgoJ3t7fiM+JykpICYmIHRoaXMudGFnX2NoZWNrWzBdID09PSAnPicpIHtcbiAgICAgICAgaWYgKHRoaXMudGFnX2NoZWNrID09PSAnPicgJiYgcmF3X3Rva2VuLm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnRhZ19jaGVjayA9IHJhd190b2tlbi5uZXh0LnRleHQuc3BsaXQoJyAnKVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRhZ19jaGVjayA9IHJhd190b2tlbi50ZXh0LnNwbGl0KCc+JylbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRhZ19jaGVjayA9IHRoaXMudGFnX2NoZWNrLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAocmF3X3Rva2VuLnR5cGUgPT09IFRPS0VOLkNPTU1FTlQpIHtcbiAgICAgIHRoaXMudGFnX2NvbXBsZXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmlzX3N0YXJ0X3RhZyA9IHRoaXMudGFnX2NoZWNrLmNoYXJBdCgwKSAhPT0gJy8nO1xuICAgIHRoaXMudGFnX25hbWUgPSAhdGhpcy5pc19zdGFydF90YWcgPyB0aGlzLnRhZ19jaGVjay5zdWJzdHIoMSkgOiB0aGlzLnRhZ19jaGVjaztcbiAgICB0aGlzLmlzX2VuZF90YWcgPSAhdGhpcy5pc19zdGFydF90YWcgfHxcbiAgICAgIChyYXdfdG9rZW4uY2xvc2VkICYmIHJhd190b2tlbi5jbG9zZWQudGV4dCA9PT0gJy8+Jyk7XG5cbiAgICAvLyBpZiB3aGl0ZXNwYWNlIGhhbmRsZXIgfiBpbmNsdWRlZCAoaS5lLiB7e34jaWYgdHJ1ZX19KSwgaGFuZGxlYmFycyB0YWdzIHN0YXJ0IGF0IHBvcyAzIG5vdCBwb3MgMlxuICAgIHZhciBoYW5kbGViYXJfc3RhcnRzID0gMjtcbiAgICBpZiAodGhpcy50YWdfc3RhcnRfY2hhciA9PT0gJ3snICYmIHRoaXMudGV4dC5sZW5ndGggPj0gMykge1xuICAgICAgaWYgKHRoaXMudGV4dC5jaGFyQXQoMikgPT09ICd+Jykge1xuICAgICAgICBoYW5kbGViYXJfc3RhcnRzID0gMztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBoYW5kbGViYXJzIHRhZ3MgdGhhdCBkb24ndCBzdGFydCB3aXRoICMgb3IgXiBhcmUgc2luZ2xlX3RhZ3MsIGFuZCBzbyBhbHNvIHN0YXJ0IGFuZCBlbmQuXG4gICAgdGhpcy5pc19lbmRfdGFnID0gdGhpcy5pc19lbmRfdGFnIHx8XG4gICAgICAodGhpcy50YWdfc3RhcnRfY2hhciA9PT0gJ3snICYmICh0aGlzLnRleHQubGVuZ3RoIDwgMyB8fCAoL1teI1xcXl0vLnRlc3QodGhpcy50ZXh0LmNoYXJBdChoYW5kbGViYXJfc3RhcnRzKSkpKSk7XG4gIH1cbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLl9nZXRfdGFnX29wZW5fdG9rZW4gPSBmdW5jdGlvbihyYXdfdG9rZW4pIHsgLy9mdW5jdGlvbiB0byBnZXQgYSBmdWxsIHRhZyBhbmQgcGFyc2UgaXRzIHR5cGVcbiAgdmFyIHBhcnNlcl90b2tlbiA9IG5ldyBUYWdPcGVuUGFyc2VyVG9rZW4odGhpcy5fdGFnX3N0YWNrLmdldF9wYXJzZXJfdG9rZW4oKSwgcmF3X3Rva2VuKTtcblxuICBwYXJzZXJfdG9rZW4uYWxpZ25tZW50X3NpemUgPSB0aGlzLl9vcHRpb25zLndyYXBfYXR0cmlidXRlc19pbmRlbnRfc2l6ZTtcblxuICBwYXJzZXJfdG9rZW4uaXNfZW5kX3RhZyA9IHBhcnNlcl90b2tlbi5pc19lbmRfdGFnIHx8XG4gICAgaW5fYXJyYXkocGFyc2VyX3Rva2VuLnRhZ19jaGVjaywgdGhpcy5fb3B0aW9ucy52b2lkX2VsZW1lbnRzKTtcblxuICBwYXJzZXJfdG9rZW4uaXNfZW1wdHlfZWxlbWVudCA9IHBhcnNlcl90b2tlbi50YWdfY29tcGxldGUgfHxcbiAgICAocGFyc2VyX3Rva2VuLmlzX3N0YXJ0X3RhZyAmJiBwYXJzZXJfdG9rZW4uaXNfZW5kX3RhZyk7XG5cbiAgcGFyc2VyX3Rva2VuLmlzX3VuZm9ybWF0dGVkID0gIXBhcnNlcl90b2tlbi50YWdfY29tcGxldGUgJiYgaW5fYXJyYXkocGFyc2VyX3Rva2VuLnRhZ19jaGVjaywgdGhpcy5fb3B0aW9ucy51bmZvcm1hdHRlZCk7XG4gIHBhcnNlcl90b2tlbi5pc19jb250ZW50X3VuZm9ybWF0dGVkID0gIXBhcnNlcl90b2tlbi5pc19lbXB0eV9lbGVtZW50ICYmIGluX2FycmF5KHBhcnNlcl90b2tlbi50YWdfY2hlY2ssIHRoaXMuX29wdGlvbnMuY29udGVudF91bmZvcm1hdHRlZCk7XG4gIHBhcnNlcl90b2tlbi5pc19pbmxpbmVfZWxlbWVudCA9IGluX2FycmF5KHBhcnNlcl90b2tlbi50YWdfbmFtZSwgdGhpcy5fb3B0aW9ucy5pbmxpbmUpIHx8IHBhcnNlcl90b2tlbi50YWdfbmFtZS5pbmNsdWRlcyhcIi1cIikgfHwgcGFyc2VyX3Rva2VuLnRhZ19zdGFydF9jaGFyID09PSAneyc7XG5cbiAgcmV0dXJuIHBhcnNlcl90b2tlbjtcbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLl9zZXRfdGFnX3Bvc2l0aW9uID0gZnVuY3Rpb24ocHJpbnRlciwgcmF3X3Rva2VuLCBwYXJzZXJfdG9rZW4sIGxhc3RfdGFnX3Rva2VuLCBsYXN0X3Rva2VuKSB7XG5cbiAgaWYgKCFwYXJzZXJfdG9rZW4uaXNfZW1wdHlfZWxlbWVudCkge1xuICAgIGlmIChwYXJzZXJfdG9rZW4uaXNfZW5kX3RhZykgeyAvL3RoaXMgdGFnIGlzIGEgZG91YmxlIHRhZyBzbyBjaGVjayBmb3IgdGFnLWVuZGluZ1xuICAgICAgcGFyc2VyX3Rva2VuLnN0YXJ0X3RhZ190b2tlbiA9IHRoaXMuX3RhZ19zdGFjay50cnlfcG9wKHBhcnNlcl90b2tlbi50YWdfbmFtZSk7IC8vcmVtb3ZlIGl0IGFuZCBhbGwgYW5jZXN0b3JzXG4gICAgfSBlbHNlIHsgLy8gaXQncyBhIHN0YXJ0LXRhZ1xuICAgICAgLy8gY2hlY2sgaWYgdGhpcyB0YWcgaXMgc3RhcnRpbmcgYW4gZWxlbWVudCB0aGF0IGhhcyBvcHRpb25hbCBlbmQgZWxlbWVudFxuICAgICAgLy8gYW5kIGRvIGFuIGVuZGluZyBuZWVkZWRcbiAgICAgIGlmICh0aGlzLl9kb19vcHRpb25hbF9lbmRfZWxlbWVudChwYXJzZXJfdG9rZW4pKSB7XG4gICAgICAgIGlmICghcGFyc2VyX3Rva2VuLmlzX2lubGluZV9lbGVtZW50KSB7XG4gICAgICAgICAgcHJpbnRlci5wcmludF9uZXdsaW5lKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl90YWdfc3RhY2sucmVjb3JkX3RhZyhwYXJzZXJfdG9rZW4pOyAvL3B1c2ggaXQgb24gdGhlIHRhZyBzdGFja1xuXG4gICAgICBpZiAoKHBhcnNlcl90b2tlbi50YWdfbmFtZSA9PT0gJ3NjcmlwdCcgfHwgcGFyc2VyX3Rva2VuLnRhZ19uYW1lID09PSAnc3R5bGUnKSAmJlxuICAgICAgICAhKHBhcnNlcl90b2tlbi5pc191bmZvcm1hdHRlZCB8fCBwYXJzZXJfdG9rZW4uaXNfY29udGVudF91bmZvcm1hdHRlZCkpIHtcbiAgICAgICAgcGFyc2VyX3Rva2VuLmN1c3RvbV9iZWF1dGlmaWVyX25hbWUgPSBnZXRfY3VzdG9tX2JlYXV0aWZpZXJfbmFtZShwYXJzZXJfdG9rZW4udGFnX2NoZWNrLCByYXdfdG9rZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbl9hcnJheShwYXJzZXJfdG9rZW4udGFnX2NoZWNrLCB0aGlzLl9vcHRpb25zLmV4dHJhX2xpbmVycykpIHsgLy9jaGVjayBpZiB0aGlzIGRvdWJsZSBuZWVkcyBhbiBleHRyYSBsaW5lXG4gICAgcHJpbnRlci5wcmludF9uZXdsaW5lKGZhbHNlKTtcbiAgICBpZiAoIXByaW50ZXIuX291dHB1dC5qdXN0X2FkZGVkX2JsYW5rbGluZSgpKSB7XG4gICAgICBwcmludGVyLnByaW50X25ld2xpbmUodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnNlcl90b2tlbi5pc19lbXB0eV9lbGVtZW50KSB7IC8vaWYgdGhpcyB0YWcgbmFtZSBpcyBhIHNpbmdsZSB0YWcgdHlwZSAoZWl0aGVyIGluIHRoZSBsaXN0IG9yIGhhcyBhIGNsb3NpbmcgLylcblxuICAgIC8vIGlmIHlvdSBoaXQgYW4gZWxzZSBjYXNlLCByZXNldCB0aGUgaW5kZW50IGxldmVsIGlmIHlvdSBhcmUgaW5zaWRlIGFuOlxuICAgIC8vICdpZicsICd1bmxlc3MnLCBvciAnZWFjaCcgYmxvY2suXG4gICAgaWYgKHBhcnNlcl90b2tlbi50YWdfc3RhcnRfY2hhciA9PT0gJ3snICYmIHBhcnNlcl90b2tlbi50YWdfY2hlY2sgPT09ICdlbHNlJykge1xuICAgICAgdGhpcy5fdGFnX3N0YWNrLmluZGVudF90b190YWcoWydpZicsICd1bmxlc3MnLCAnZWFjaCddKTtcbiAgICAgIHBhcnNlcl90b2tlbi5pbmRlbnRfY29udGVudCA9IHRydWU7XG4gICAgICAvLyBEb24ndCBhZGQgYSBuZXdsaW5lIGlmIG9wZW5pbmcge3sjaWZ9fSB0YWcgaXMgb24gdGhlIGN1cnJlbnQgbGluZVxuICAgICAgdmFyIGZvdW5kSWZPbkN1cnJlbnRMaW5lID0gcHJpbnRlci5jdXJyZW50X2xpbmVfaGFzX21hdGNoKC97eyNpZi8pO1xuICAgICAgaWYgKCFmb3VuZElmT25DdXJyZW50TGluZSkge1xuICAgICAgICBwcmludGVyLnByaW50X25ld2xpbmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERvbid0IGFkZCBhIG5ld2xpbmUgYmVmb3JlIGVsZW1lbnRzIHRoYXQgc2hvdWxkIHJlbWFpbiB3aGVyZSB0aGV5IGFyZS5cbiAgICBpZiAocGFyc2VyX3Rva2VuLnRhZ19uYW1lID09PSAnIS0tJyAmJiBsYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLlRBR19DTE9TRSAmJlxuICAgICAgbGFzdF90YWdfdG9rZW4uaXNfZW5kX3RhZyAmJiBwYXJzZXJfdG9rZW4udGV4dC5pbmRleE9mKCdcXG4nKSA9PT0gLTEpIHtcbiAgICAgIC8vRG8gbm90aGluZy4gTGVhdmUgY29tbWVudHMgb24gc2FtZSBsaW5lLlxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShwYXJzZXJfdG9rZW4uaXNfaW5saW5lX2VsZW1lbnQgfHwgcGFyc2VyX3Rva2VuLmlzX3VuZm9ybWF0dGVkKSkge1xuICAgICAgICBwcmludGVyLnByaW50X25ld2xpbmUoZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2FsY2x1YXRlX3BhcmVudF9tdWx0aWxpbmUocHJpbnRlciwgcGFyc2VyX3Rva2VuKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocGFyc2VyX3Rva2VuLmlzX2VuZF90YWcpIHsgLy90aGlzIHRhZyBpcyBhIGRvdWJsZSB0YWcgc28gY2hlY2sgZm9yIHRhZy1lbmRpbmdcbiAgICB2YXIgZG9fZW5kX2V4cGFuZCA9IGZhbHNlO1xuXG4gICAgLy8gZGVjaWRpbmcgd2hldGhlciBhIGJsb2NrIGlzIG11bHRpbGluZSBzaG91bGQgbm90IGJlIHRoaXMgaGFyZFxuICAgIGRvX2VuZF9leHBhbmQgPSBwYXJzZXJfdG9rZW4uc3RhcnRfdGFnX3Rva2VuICYmIHBhcnNlcl90b2tlbi5zdGFydF90YWdfdG9rZW4ubXVsdGlsaW5lX2NvbnRlbnQ7XG4gICAgZG9fZW5kX2V4cGFuZCA9IGRvX2VuZF9leHBhbmQgfHwgKCFwYXJzZXJfdG9rZW4uaXNfaW5saW5lX2VsZW1lbnQgJiZcbiAgICAgICEobGFzdF90YWdfdG9rZW4uaXNfaW5saW5lX2VsZW1lbnQgfHwgbGFzdF90YWdfdG9rZW4uaXNfdW5mb3JtYXR0ZWQpICYmXG4gICAgICAhKGxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uVEFHX0NMT1NFICYmIHBhcnNlcl90b2tlbi5zdGFydF90YWdfdG9rZW4gPT09IGxhc3RfdGFnX3Rva2VuKSAmJlxuICAgICAgbGFzdF90b2tlbi50eXBlICE9PSAnVEtfQ09OVEVOVCdcbiAgICApO1xuXG4gICAgaWYgKHBhcnNlcl90b2tlbi5pc19jb250ZW50X3VuZm9ybWF0dGVkIHx8IHBhcnNlcl90b2tlbi5pc191bmZvcm1hdHRlZCkge1xuICAgICAgZG9fZW5kX2V4cGFuZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChkb19lbmRfZXhwYW5kKSB7XG4gICAgICBwcmludGVyLnByaW50X25ld2xpbmUoZmFsc2UpO1xuICAgIH1cbiAgfSBlbHNlIHsgLy8gaXQncyBhIHN0YXJ0LXRhZ1xuICAgIHBhcnNlcl90b2tlbi5pbmRlbnRfY29udGVudCA9ICFwYXJzZXJfdG9rZW4uY3VzdG9tX2JlYXV0aWZpZXJfbmFtZTtcblxuICAgIGlmIChwYXJzZXJfdG9rZW4udGFnX3N0YXJ0X2NoYXIgPT09ICc8Jykge1xuICAgICAgaWYgKHBhcnNlcl90b2tlbi50YWdfbmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHBhcnNlcl90b2tlbi5pbmRlbnRfY29udGVudCA9IHRoaXMuX29wdGlvbnMuaW5kZW50X2lubmVyX2h0bWw7XG4gICAgICB9IGVsc2UgaWYgKHBhcnNlcl90b2tlbi50YWdfbmFtZSA9PT0gJ2hlYWQnKSB7XG4gICAgICAgIHBhcnNlcl90b2tlbi5pbmRlbnRfY29udGVudCA9IHRoaXMuX29wdGlvbnMuaW5kZW50X2hlYWRfaW5uZXJfaHRtbDtcbiAgICAgIH0gZWxzZSBpZiAocGFyc2VyX3Rva2VuLnRhZ19uYW1lID09PSAnYm9keScpIHtcbiAgICAgICAgcGFyc2VyX3Rva2VuLmluZGVudF9jb250ZW50ID0gdGhpcy5fb3B0aW9ucy5pbmRlbnRfYm9keV9pbm5lcl9odG1sO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKHBhcnNlcl90b2tlbi5pc19pbmxpbmVfZWxlbWVudCB8fCBwYXJzZXJfdG9rZW4uaXNfdW5mb3JtYXR0ZWQpICYmXG4gICAgICAobGFzdF90b2tlbi50eXBlICE9PSAnVEtfQ09OVEVOVCcgfHwgcGFyc2VyX3Rva2VuLmlzX2NvbnRlbnRfdW5mb3JtYXR0ZWQpKSB7XG4gICAgICBwcmludGVyLnByaW50X25ld2xpbmUoZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuX2NhbGNsdWF0ZV9wYXJlbnRfbXVsdGlsaW5lKHByaW50ZXIsIHBhcnNlcl90b2tlbik7XG4gIH1cbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLl9jYWxjbHVhdGVfcGFyZW50X211bHRpbGluZSA9IGZ1bmN0aW9uKHByaW50ZXIsIHBhcnNlcl90b2tlbikge1xuICBpZiAocGFyc2VyX3Rva2VuLnBhcmVudCAmJiBwcmludGVyLl9vdXRwdXQuanVzdF9hZGRlZF9uZXdsaW5lKCkgJiZcbiAgICAhKChwYXJzZXJfdG9rZW4uaXNfaW5saW5lX2VsZW1lbnQgfHwgcGFyc2VyX3Rva2VuLmlzX3VuZm9ybWF0dGVkKSAmJiBwYXJzZXJfdG9rZW4ucGFyZW50LmlzX2lubGluZV9lbGVtZW50KSkge1xuICAgIHBhcnNlcl90b2tlbi5wYXJlbnQubXVsdGlsaW5lX2NvbnRlbnQgPSB0cnVlO1xuICB9XG59O1xuXG4vL1RvIGJlIHVzZWQgZm9yIDxwPiB0YWcgc3BlY2lhbCBjYXNlOlxudmFyIHBfY2xvc2VycyA9IFsnYWRkcmVzcycsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2Jsb2NrcXVvdGUnLCAnZGV0YWlscycsICdkaXYnLCAnZGwnLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9vdGVyJywgJ2Zvcm0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZGVyJywgJ2hyJywgJ21haW4nLCAnbmF2JywgJ29sJywgJ3AnLCAncHJlJywgJ3NlY3Rpb24nLCAndGFibGUnLCAndWwnXTtcbnZhciBwX3BhcmVudF9leGNsdWRlcyA9IFsnYScsICdhdWRpbycsICdkZWwnLCAnaW5zJywgJ21hcCcsICdub3NjcmlwdCcsICd2aWRlbyddO1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5fZG9fb3B0aW9uYWxfZW5kX2VsZW1lbnQgPSBmdW5jdGlvbihwYXJzZXJfdG9rZW4pIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG4gIC8vIE5PVEU6IGNhc2VzIG9mIFwiaWYgdGhlcmUgaXMgbm8gbW9yZSBjb250ZW50IGluIHRoZSBwYXJlbnQgZWxlbWVudFwiXG4gIC8vIGFyZSBoYW5kbGVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGJlYXV0aWZpZXIuXG4gIC8vIEl0IGFzc3VtZXMgcGFyZW50IG9yIGFuY2VzdG9yIGNsb3NlIHRhZyBjbG9zZXMgYWxsIGNoaWxkcmVuLlxuICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjb3B0aW9uYWwtdGFnc1xuICBpZiAocGFyc2VyX3Rva2VuLmlzX2VtcHR5X2VsZW1lbnQgfHwgIXBhcnNlcl90b2tlbi5pc19zdGFydF90YWcgfHwgIXBhcnNlcl90b2tlbi5wYXJlbnQpIHtcbiAgICByZXR1cm47XG5cbiAgfVxuXG4gIGlmIChwYXJzZXJfdG9rZW4udGFnX25hbWUgPT09ICdib2R5Jykge1xuICAgIC8vIEEgaGVhZCBlbGVtZW504oCZcyBlbmQgdGFnIG1heSBiZSBvbWl0dGVkIGlmIHRoZSBoZWFkIGVsZW1lbnQgaXMgbm90IGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGEgc3BhY2UgY2hhcmFjdGVyIG9yIGEgY29tbWVudC5cbiAgICByZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5fdGFnX3N0YWNrLnRyeV9wb3AoJ2hlYWQnKTtcblxuICAgIC8vfSBlbHNlIGlmIChwYXJzZXJfdG9rZW4udGFnX25hbWUgPT09ICdib2R5Jykge1xuICAgIC8vIERPTkU6IEEgYm9keSBlbGVtZW504oCZcyBlbmQgdGFnIG1heSBiZSBvbWl0dGVkIGlmIHRoZSBib2R5IGVsZW1lbnQgaXMgbm90IGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGEgY29tbWVudC5cblxuICB9IGVsc2UgaWYgKHBhcnNlcl90b2tlbi50YWdfbmFtZSA9PT0gJ2xpJykge1xuICAgIC8vIEFuIGxpIGVsZW1lbnTigJlzIGVuZCB0YWcgbWF5IGJlIG9taXR0ZWQgaWYgdGhlIGxpIGVsZW1lbnQgaXMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgYW5vdGhlciBsaSBlbGVtZW50IG9yIGlmIHRoZXJlIGlzIG5vIG1vcmUgY29udGVudCBpbiB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IHRoaXMuX3RhZ19zdGFjay50cnlfcG9wKCdsaScsIFsnb2wnLCAndWwnXSk7XG5cbiAgfSBlbHNlIGlmIChwYXJzZXJfdG9rZW4udGFnX25hbWUgPT09ICdkZCcgfHwgcGFyc2VyX3Rva2VuLnRhZ19uYW1lID09PSAnZHQnKSB7XG4gICAgLy8gQSBkZCBlbGVtZW504oCZcyBlbmQgdGFnIG1heSBiZSBvbWl0dGVkIGlmIHRoZSBkZCBlbGVtZW50IGlzIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGFub3RoZXIgZGQgZWxlbWVudCBvciBhIGR0IGVsZW1lbnQsIG9yIGlmIHRoZXJlIGlzIG5vIG1vcmUgY29udGVudCBpbiB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAgLy8gQSBkdCBlbGVtZW504oCZcyBlbmQgdGFnIG1heSBiZSBvbWl0dGVkIGlmIHRoZSBkdCBlbGVtZW50IGlzIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGFub3RoZXIgZHQgZWxlbWVudCBvciBhIGRkIGVsZW1lbnQuXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IHRoaXMuX3RhZ19zdGFjay50cnlfcG9wKCdkdCcsIFsnZGwnXSk7XG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IHRoaXMuX3RhZ19zdGFjay50cnlfcG9wKCdkZCcsIFsnZGwnXSk7XG5cblxuICB9IGVsc2UgaWYgKHBhcnNlcl90b2tlbi5wYXJlbnQudGFnX25hbWUgPT09ICdwJyAmJiBwX2Nsb3NlcnMuaW5kZXhPZihwYXJzZXJfdG9rZW4udGFnX25hbWUpICE9PSAtMSkge1xuICAgIC8vIElNUE9SVEFOVDogdGhpcyBlbHNlLWlmIHdvcmtzIGJlY2F1c2UgcF9jbG9zZXJzIGhhcyBubyBvdmVybGFwIHdpdGggYW55IG90aGVyIGVsZW1lbnQgd2UgbG9vayBmb3IgaW4gdGhpcyBtZXRob2RcbiAgICAvLyBjaGVjayBmb3IgdGhlIHBhcmVudCBlbGVtZW50IGlzIGFuIEhUTUwgZWxlbWVudCB0aGF0IGlzIG5vdCBhbiA8YT4sIDxhdWRpbz4sIDxkZWw+LCA8aW5zPiwgPG1hcD4sIDxub3NjcmlwdD4sIG9yIDx2aWRlbz4gZWxlbWVudCwgIG9yIGFuIGF1dG9ub21vdXMgY3VzdG9tIGVsZW1lbnQuXG4gICAgLy8gVG8gZG8gdGhpcyByaWdodCwgdGhpcyBuZWVkcyB0byBiZSBjb2RlZCBhcyBhbiBpbmNsdXNpb24gb2YgdGhlIGludmVyc2Ugb2YgdGhlIGV4Y2x1c2lvbiBhYm92ZS5cbiAgICAvLyBCdXQgdG8gc3RhcnQgd2l0aCAoaWYgd2UgaWdub3JlIFwiYXV0b25vbW91cyBjdXN0b20gZWxlbWVudHNcIikgdGhlIGV4Y2x1c2lvbiB3b3VsZCBiZSBmaW5lLlxuICAgIHZhciBwX3BhcmVudCA9IHBhcnNlcl90b2tlbi5wYXJlbnQucGFyZW50O1xuICAgIGlmICghcF9wYXJlbnQgfHwgcF9wYXJlbnRfZXhjbHVkZXMuaW5kZXhPZihwX3BhcmVudC50YWdfbmFtZSkgPT09IC0xKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5fdGFnX3N0YWNrLnRyeV9wb3AoJ3AnKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocGFyc2VyX3Rva2VuLnRhZ19uYW1lID09PSAncnAnIHx8IHBhcnNlcl90b2tlbi50YWdfbmFtZSA9PT0gJ3J0Jykge1xuICAgIC8vIEFuIHJ0IGVsZW1lbnTigJlzIGVuZCB0YWcgbWF5IGJlIG9taXR0ZWQgaWYgdGhlIHJ0IGVsZW1lbnQgaXMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgYW4gcnQgb3IgcnAgZWxlbWVudCwgb3IgaWYgdGhlcmUgaXMgbm8gbW9yZSBjb250ZW50IGluIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAvLyBBbiBycCBlbGVtZW504oCZcyBlbmQgdGFnIG1heSBiZSBvbWl0dGVkIGlmIHRoZSBycCBlbGVtZW50IGlzIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGFuIHJ0IG9yIHJwIGVsZW1lbnQsIG9yIGlmIHRoZXJlIGlzIG5vIG1vcmUgY29udGVudCBpbiB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IHRoaXMuX3RhZ19zdGFjay50cnlfcG9wKCdydCcsIFsncnVieScsICdydGMnXSk7XG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IHRoaXMuX3RhZ19zdGFjay50cnlfcG9wKCdycCcsIFsncnVieScsICdydGMnXSk7XG5cbiAgfSBlbHNlIGlmIChwYXJzZXJfdG9rZW4udGFnX25hbWUgPT09ICdvcHRncm91cCcpIHtcbiAgICAvLyBBbiBvcHRncm91cCBlbGVtZW504oCZcyBlbmQgdGFnIG1heSBiZSBvbWl0dGVkIGlmIHRoZSBvcHRncm91cCBlbGVtZW50IGlzIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGFub3RoZXIgb3B0Z3JvdXAgZWxlbWVudCwgb3IgaWYgdGhlcmUgaXMgbm8gbW9yZSBjb250ZW50IGluIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAvLyBBbiBvcHRpb24gZWxlbWVudOKAmXMgZW5kIHRhZyBtYXkgYmUgb21pdHRlZCBpZiB0aGUgb3B0aW9uIGVsZW1lbnQgaXMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgYW5vdGhlciBvcHRpb24gZWxlbWVudCwgb3IgaWYgaXQgaXMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgYW4gb3B0Z3JvdXAgZWxlbWVudCwgb3IgaWYgdGhlcmUgaXMgbm8gbW9yZSBjb250ZW50IGluIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICByZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5fdGFnX3N0YWNrLnRyeV9wb3AoJ29wdGdyb3VwJywgWydzZWxlY3QnXSk7XG4gICAgLy9yZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5fdGFnX3N0YWNrLnRyeV9wb3AoJ29wdGlvbicsIFsnc2VsZWN0J10pO1xuXG4gIH0gZWxzZSBpZiAocGFyc2VyX3Rva2VuLnRhZ19uYW1lID09PSAnb3B0aW9uJykge1xuICAgIC8vIEFuIG9wdGlvbiBlbGVtZW504oCZcyBlbmQgdGFnIG1heSBiZSBvbWl0dGVkIGlmIHRoZSBvcHRpb24gZWxlbWVudCBpcyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBhbm90aGVyIG9wdGlvbiBlbGVtZW50LCBvciBpZiBpdCBpcyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBhbiBvcHRncm91cCBlbGVtZW50LCBvciBpZiB0aGVyZSBpcyBubyBtb3JlIGNvbnRlbnQgaW4gdGhlIHBhcmVudCBlbGVtZW50LlxuICAgIHJlc3VsdCA9IHJlc3VsdCB8fCB0aGlzLl90YWdfc3RhY2sudHJ5X3BvcCgnb3B0aW9uJywgWydzZWxlY3QnLCAnZGF0YWxpc3QnLCAnb3B0Z3JvdXAnXSk7XG5cbiAgfSBlbHNlIGlmIChwYXJzZXJfdG9rZW4udGFnX25hbWUgPT09ICdjb2xncm91cCcpIHtcbiAgICAvLyBET05FOiBBIGNvbGdyb3VwIGVsZW1lbnTigJlzIGVuZCB0YWcgbWF5IGJlIG9taXR0ZWQgaWYgdGhlIGNvbGdyb3VwIGVsZW1lbnQgaXMgbm90IGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGEgc3BhY2UgY2hhcmFjdGVyIG9yIGEgY29tbWVudC5cbiAgICAvLyBBIGNhcHRpb24gZWxlbWVudCdzIGVuZCB0YWcgbWF5IGJlIG9tbWl0dGVkIGlmIGEgY29sZ3JvdXAsIHRoZWFkLCB0Zm9vdCwgdGJvZHksIG9yIHRyIGVsZW1lbnQgaXMgc3RhcnRlZC5cbiAgICByZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5fdGFnX3N0YWNrLnRyeV9wb3AoJ2NhcHRpb24nLCBbJ3RhYmxlJ10pO1xuXG4gIH0gZWxzZSBpZiAocGFyc2VyX3Rva2VuLnRhZ19uYW1lID09PSAndGhlYWQnKSB7XG4gICAgLy8gQSBjb2xncm91cCBlbGVtZW50J3MgZW5kIHRhZyBtYXkgYmUgb21taXR0ZWQgaWYgYSB0aGVhZCwgdGZvb3QsIHRib2R5LCBvciB0ciBlbGVtZW50IGlzIHN0YXJ0ZWQuXG4gICAgLy8gQSBjYXB0aW9uIGVsZW1lbnQncyBlbmQgdGFnIG1heSBiZSBvbW1pdHRlZCBpZiBhIGNvbGdyb3VwLCB0aGVhZCwgdGZvb3QsIHRib2R5LCBvciB0ciBlbGVtZW50IGlzIHN0YXJ0ZWQuXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IHRoaXMuX3RhZ19zdGFjay50cnlfcG9wKCdjYXB0aW9uJywgWyd0YWJsZSddKTtcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5fdGFnX3N0YWNrLnRyeV9wb3AoJ2NvbGdyb3VwJywgWyd0YWJsZSddKTtcblxuICAgIC8vfSBlbHNlIGlmIChwYXJzZXJfdG9rZW4udGFnX25hbWUgPT09ICdjYXB0aW9uJykge1xuICAgIC8vIERPTkU6IEEgY2FwdGlvbiBlbGVtZW504oCZcyBlbmQgdGFnIG1heSBiZSBvbWl0dGVkIGlmIHRoZSBjYXB0aW9uIGVsZW1lbnQgaXMgbm90IGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGEgc3BhY2UgY2hhcmFjdGVyIG9yIGEgY29tbWVudC5cblxuICB9IGVsc2UgaWYgKHBhcnNlcl90b2tlbi50YWdfbmFtZSA9PT0gJ3Rib2R5JyB8fCBwYXJzZXJfdG9rZW4udGFnX25hbWUgPT09ICd0Zm9vdCcpIHtcbiAgICAvLyBBIHRoZWFkIGVsZW1lbnTigJlzIGVuZCB0YWcgbWF5IGJlIG9taXR0ZWQgaWYgdGhlIHRoZWFkIGVsZW1lbnQgaXMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgYSB0Ym9keSBvciB0Zm9vdCBlbGVtZW50LlxuICAgIC8vIEEgdGJvZHkgZWxlbWVudOKAmXMgZW5kIHRhZyBtYXkgYmUgb21pdHRlZCBpZiB0aGUgdGJvZHkgZWxlbWVudCBpcyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBhIHRib2R5IG9yIHRmb290IGVsZW1lbnQsIG9yIGlmIHRoZXJlIGlzIG5vIG1vcmUgY29udGVudCBpbiB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAgLy8gQSBjb2xncm91cCBlbGVtZW50J3MgZW5kIHRhZyBtYXkgYmUgb21taXR0ZWQgaWYgYSB0aGVhZCwgdGZvb3QsIHRib2R5LCBvciB0ciBlbGVtZW50IGlzIHN0YXJ0ZWQuXG4gICAgLy8gQSBjYXB0aW9uIGVsZW1lbnQncyBlbmQgdGFnIG1heSBiZSBvbW1pdHRlZCBpZiBhIGNvbGdyb3VwLCB0aGVhZCwgdGZvb3QsIHRib2R5LCBvciB0ciBlbGVtZW50IGlzIHN0YXJ0ZWQuXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IHRoaXMuX3RhZ19zdGFjay50cnlfcG9wKCdjYXB0aW9uJywgWyd0YWJsZSddKTtcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5fdGFnX3N0YWNrLnRyeV9wb3AoJ2NvbGdyb3VwJywgWyd0YWJsZSddKTtcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5fdGFnX3N0YWNrLnRyeV9wb3AoJ3RoZWFkJywgWyd0YWJsZSddKTtcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5fdGFnX3N0YWNrLnRyeV9wb3AoJ3Rib2R5JywgWyd0YWJsZSddKTtcblxuICAgIC8vfSBlbHNlIGlmIChwYXJzZXJfdG9rZW4udGFnX25hbWUgPT09ICd0Zm9vdCcpIHtcbiAgICAvLyBET05FOiBBIHRmb290IGVsZW1lbnTigJlzIGVuZCB0YWcgbWF5IGJlIG9taXR0ZWQgaWYgdGhlcmUgaXMgbm8gbW9yZSBjb250ZW50IGluIHRoZSBwYXJlbnQgZWxlbWVudC5cblxuICB9IGVsc2UgaWYgKHBhcnNlcl90b2tlbi50YWdfbmFtZSA9PT0gJ3RyJykge1xuICAgIC8vIEEgdHIgZWxlbWVudOKAmXMgZW5kIHRhZyBtYXkgYmUgb21pdHRlZCBpZiB0aGUgdHIgZWxlbWVudCBpcyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBhbm90aGVyIHRyIGVsZW1lbnQsIG9yIGlmIHRoZXJlIGlzIG5vIG1vcmUgY29udGVudCBpbiB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAgLy8gQSBjb2xncm91cCBlbGVtZW50J3MgZW5kIHRhZyBtYXkgYmUgb21taXR0ZWQgaWYgYSB0aGVhZCwgdGZvb3QsIHRib2R5LCBvciB0ciBlbGVtZW50IGlzIHN0YXJ0ZWQuXG4gICAgLy8gQSBjYXB0aW9uIGVsZW1lbnQncyBlbmQgdGFnIG1heSBiZSBvbW1pdHRlZCBpZiBhIGNvbGdyb3VwLCB0aGVhZCwgdGZvb3QsIHRib2R5LCBvciB0ciBlbGVtZW50IGlzIHN0YXJ0ZWQuXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IHRoaXMuX3RhZ19zdGFjay50cnlfcG9wKCdjYXB0aW9uJywgWyd0YWJsZSddKTtcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5fdGFnX3N0YWNrLnRyeV9wb3AoJ2NvbGdyb3VwJywgWyd0YWJsZSddKTtcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5fdGFnX3N0YWNrLnRyeV9wb3AoJ3RyJywgWyd0YWJsZScsICd0aGVhZCcsICd0Ym9keScsICd0Zm9vdCddKTtcblxuICB9IGVsc2UgaWYgKHBhcnNlcl90b2tlbi50YWdfbmFtZSA9PT0gJ3RoJyB8fCBwYXJzZXJfdG9rZW4udGFnX25hbWUgPT09ICd0ZCcpIHtcbiAgICAvLyBBIHRkIGVsZW1lbnTigJlzIGVuZCB0YWcgbWF5IGJlIG9taXR0ZWQgaWYgdGhlIHRkIGVsZW1lbnQgaXMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgYSB0ZCBvciB0aCBlbGVtZW50LCBvciBpZiB0aGVyZSBpcyBubyBtb3JlIGNvbnRlbnQgaW4gdGhlIHBhcmVudCBlbGVtZW50LlxuICAgIC8vIEEgdGggZWxlbWVudOKAmXMgZW5kIHRhZyBtYXkgYmUgb21pdHRlZCBpZiB0aGUgdGggZWxlbWVudCBpcyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBhIHRkIG9yIHRoIGVsZW1lbnQsIG9yIGlmIHRoZXJlIGlzIG5vIG1vcmUgY29udGVudCBpbiB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IHRoaXMuX3RhZ19zdGFjay50cnlfcG9wKCd0ZCcsIFsndGFibGUnLCAndGhlYWQnLCAndGJvZHknLCAndGZvb3QnLCAndHInXSk7XG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IHRoaXMuX3RhZ19zdGFjay50cnlfcG9wKCd0aCcsIFsndGFibGUnLCAndGhlYWQnLCAndGJvZHknLCAndGZvb3QnLCAndHInXSk7XG4gIH1cblxuICAvLyBTdGFydCBlbGVtZW50IG9taXNzaW9uIG5vdCBoYW5kbGVkIGN1cnJlbnRseVxuICAvLyBBIGhlYWQgZWxlbWVudOKAmXMgc3RhcnQgdGFnIG1heSBiZSBvbWl0dGVkIGlmIHRoZSBlbGVtZW50IGlzIGVtcHR5LCBvciBpZiB0aGUgZmlyc3QgdGhpbmcgaW5zaWRlIHRoZSBoZWFkIGVsZW1lbnQgaXMgYW4gZWxlbWVudC5cbiAgLy8gQSB0Ym9keSBlbGVtZW504oCZcyBzdGFydCB0YWcgbWF5IGJlIG9taXR0ZWQgaWYgdGhlIGZpcnN0IHRoaW5nIGluc2lkZSB0aGUgdGJvZHkgZWxlbWVudCBpcyBhIHRyIGVsZW1lbnQsIGFuZCBpZiB0aGUgZWxlbWVudCBpcyBub3QgaW1tZWRpYXRlbHkgcHJlY2VkZWQgYnkgYSB0Ym9keSwgdGhlYWQsIG9yIHRmb290IGVsZW1lbnQgd2hvc2UgZW5kIHRhZyBoYXMgYmVlbiBvbWl0dGVkLiAoSXQgY2Fu4oCZdCBiZSBvbWl0dGVkIGlmIHRoZSBlbGVtZW50IGlzIGVtcHR5LilcbiAgLy8gQSBjb2xncm91cCBlbGVtZW504oCZcyBzdGFydCB0YWcgbWF5IGJlIG9taXR0ZWQgaWYgdGhlIGZpcnN0IHRoaW5nIGluc2lkZSB0aGUgY29sZ3JvdXAgZWxlbWVudCBpcyBhIGNvbCBlbGVtZW50LCBhbmQgaWYgdGhlIGVsZW1lbnQgaXMgbm90IGltbWVkaWF0ZWx5IHByZWNlZGVkIGJ5IGFub3RoZXIgY29sZ3JvdXAgZWxlbWVudCB3aG9zZSBlbmQgdGFnIGhhcyBiZWVuIG9taXR0ZWQuIChJdCBjYW7igJl0IGJlIG9taXR0ZWQgaWYgdGhlIGVsZW1lbnQgaXMgZW1wdHkuKVxuXG4gIC8vIEZpeCB1cCB0aGUgcGFyZW50IG9mIHRoZSBwYXJzZXIgdG9rZW5cbiAgcGFyc2VyX3Rva2VuLnBhcmVudCA9IHRoaXMuX3RhZ19zdGFjay5nZXRfcGFyc2VyX3Rva2VuKCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzLkJlYXV0aWZpZXIgPSBCZWF1dGlmaWVyO1xuXG5cbi8qKiovIH0pLFxuLyogMjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKmpzaGludCBub2RlOnRydWUgKi9cbi8qXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuKi9cblxuXG5cbnZhciBCYXNlT3B0aW9ucyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDYpLk9wdGlvbnMpO1xuXG5mdW5jdGlvbiBPcHRpb25zKG9wdGlvbnMpIHtcbiAgQmFzZU9wdGlvbnMuY2FsbCh0aGlzLCBvcHRpb25zLCAnaHRtbCcpO1xuICBpZiAodGhpcy50ZW1wbGF0aW5nLmxlbmd0aCA9PT0gMSAmJiB0aGlzLnRlbXBsYXRpbmdbMF0gPT09ICdhdXRvJykge1xuICAgIHRoaXMudGVtcGxhdGluZyA9IFsnZGphbmdvJywgJ2VyYicsICdoYW5kbGViYXJzJywgJ3BocCddO1xuICB9XG5cbiAgdGhpcy5pbmRlbnRfaW5uZXJfaHRtbCA9IHRoaXMuX2dldF9ib29sZWFuKCdpbmRlbnRfaW5uZXJfaHRtbCcpO1xuICB0aGlzLmluZGVudF9ib2R5X2lubmVyX2h0bWwgPSB0aGlzLl9nZXRfYm9vbGVhbignaW5kZW50X2JvZHlfaW5uZXJfaHRtbCcsIHRydWUpO1xuICB0aGlzLmluZGVudF9oZWFkX2lubmVyX2h0bWwgPSB0aGlzLl9nZXRfYm9vbGVhbignaW5kZW50X2hlYWRfaW5uZXJfaHRtbCcsIHRydWUpO1xuXG4gIHRoaXMuaW5kZW50X2hhbmRsZWJhcnMgPSB0aGlzLl9nZXRfYm9vbGVhbignaW5kZW50X2hhbmRsZWJhcnMnLCB0cnVlKTtcbiAgdGhpcy53cmFwX2F0dHJpYnV0ZXMgPSB0aGlzLl9nZXRfc2VsZWN0aW9uKCd3cmFwX2F0dHJpYnV0ZXMnLFxuICAgIFsnYXV0bycsICdmb3JjZScsICdmb3JjZS1hbGlnbmVkJywgJ2ZvcmNlLWV4cGFuZC1tdWx0aWxpbmUnLCAnYWxpZ25lZC1tdWx0aXBsZScsICdwcmVzZXJ2ZScsICdwcmVzZXJ2ZS1hbGlnbmVkJ10pO1xuICB0aGlzLndyYXBfYXR0cmlidXRlc19pbmRlbnRfc2l6ZSA9IHRoaXMuX2dldF9udW1iZXIoJ3dyYXBfYXR0cmlidXRlc19pbmRlbnRfc2l6ZScsIHRoaXMuaW5kZW50X3NpemUpO1xuICB0aGlzLmV4dHJhX2xpbmVycyA9IHRoaXMuX2dldF9hcnJheSgnZXh0cmFfbGluZXJzJywgWydoZWFkJywgJ2JvZHknLCAnL2h0bWwnXSk7XG5cbiAgLy8gQmxvY2sgdnMgaW5saW5lIGVsZW1lbnRzXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvQmxvY2stbGV2ZWxfZWxlbWVudHNcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9JbmxpbmVfZWxlbWVudHNcbiAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L2RvbS5odG1sI3BocmFzaW5nLWNvbnRlbnRcbiAgdGhpcy5pbmxpbmUgPSB0aGlzLl9nZXRfYXJyYXkoJ2lubGluZScsIFtcbiAgICAnYScsICdhYmJyJywgJ2FyZWEnLCAnYXVkaW8nLCAnYicsICdiZGknLCAnYmRvJywgJ2JyJywgJ2J1dHRvbicsICdjYW52YXMnLCAnY2l0ZScsXG4gICAgJ2NvZGUnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZWwnLCAnZGZuJywgJ2VtJywgJ2VtYmVkJywgJ2knLCAnaWZyYW1lJywgJ2ltZycsXG4gICAgJ2lucHV0JywgJ2lucycsICdrYmQnLCAna2V5Z2VuJywgJ2xhYmVsJywgJ21hcCcsICdtYXJrJywgJ21hdGgnLCAnbWV0ZXInLCAnbm9zY3JpcHQnLFxuICAgICdvYmplY3QnLCAnb3V0cHV0JywgJ3Byb2dyZXNzJywgJ3EnLCAncnVieScsICdzJywgJ3NhbXAnLCAvKiAnc2NyaXB0JywgKi8gJ3NlbGVjdCcsICdzbWFsbCcsXG4gICAgJ3NwYW4nLCAnc3Ryb25nJywgJ3N1YicsICdzdXAnLCAnc3ZnJywgJ3RlbXBsYXRlJywgJ3RleHRhcmVhJywgJ3RpbWUnLCAndScsICd2YXInLFxuICAgICd2aWRlbycsICd3YnInLCAndGV4dCcsXG4gICAgLy8gb2Jzb2xldGUgaW5saW5lIHRhZ3NcbiAgICAnYWNyb255bScsICdiaWcnLCAnc3RyaWtlJywgJ3R0J1xuICBdKTtcbiAgdGhpcy52b2lkX2VsZW1lbnRzID0gdGhpcy5fZ2V0X2FycmF5KCd2b2lkX2VsZW1lbnRzJywgW1xuICAgIC8vIEhUTE0gdm9pZCBlbGVtZW50cyAtIGFrYSBzZWxmLWNsb3NpbmcgdGFncyAtIGFrYSBzaW5nbGV0b25zXG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL2h0bWwvd2cvZHJhZnRzL2h0bWwvbWFzdGVyL3N5bnRheC5odG1sI3ZvaWQtZWxlbWVudHNcbiAgICAnYXJlYScsICdiYXNlJywgJ2JyJywgJ2NvbCcsICdlbWJlZCcsICdocicsICdpbWcnLCAnaW5wdXQnLCAna2V5Z2VuJyxcbiAgICAnbGluaycsICdtZW51aXRlbScsICdtZXRhJywgJ3BhcmFtJywgJ3NvdXJjZScsICd0cmFjaycsICd3YnInLFxuICAgIC8vIE5PVEU6IE9wdGlvbmFsIHRhZ3MgYXJlIHRvbyBjb21wbGV4IGZvciBhIHNpbXBsZSBsaXN0XG4gICAgLy8gdGhleSBhcmUgaGFyZCBjb2RlZCBpbiBfZG9fb3B0aW9uYWxfZW5kX2VsZW1lbnRcblxuICAgIC8vIERvY3R5cGUgYW5kIHhtbCBlbGVtZW50c1xuICAgICchZG9jdHlwZScsICc/eG1sJyxcblxuICAgIC8vIG9ic29sZXRlIHRhZ3NcbiAgICAvLyBiYXNlZm9udDogaHR0cHM6Ly93d3cuY29tcHV0ZXJob3BlLmNvbS9qYXJnb24vaC9odG1sLWJhc2Vmb250LXRhZy5odG1cbiAgICAvLyBpc25kZXg6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pc2luZGV4XG4gICAgJ2Jhc2Vmb250JywgJ2lzaW5kZXgnXG4gIF0pO1xuICB0aGlzLnVuZm9ybWF0dGVkID0gdGhpcy5fZ2V0X2FycmF5KCd1bmZvcm1hdHRlZCcsIFtdKTtcbiAgdGhpcy5jb250ZW50X3VuZm9ybWF0dGVkID0gdGhpcy5fZ2V0X2FycmF5KCdjb250ZW50X3VuZm9ybWF0dGVkJywgW1xuICAgICdwcmUnLCAndGV4dGFyZWEnXG4gIF0pO1xuICB0aGlzLnVuZm9ybWF0dGVkX2NvbnRlbnRfZGVsaW1pdGVyID0gdGhpcy5fZ2V0X2NoYXJhY3RlcnMoJ3VuZm9ybWF0dGVkX2NvbnRlbnRfZGVsaW1pdGVyJyk7XG4gIHRoaXMuaW5kZW50X3NjcmlwdHMgPSB0aGlzLl9nZXRfc2VsZWN0aW9uKCdpbmRlbnRfc2NyaXB0cycsIFsnbm9ybWFsJywgJ2tlZXAnLCAnc2VwYXJhdGUnXSk7XG5cbn1cbk9wdGlvbnMucHJvdG90eXBlID0gbmV3IEJhc2VPcHRpb25zKCk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cy5PcHRpb25zID0gT3B0aW9ucztcblxuXG4vKioqLyB9KSxcbi8qIDIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLypqc2hpbnQgbm9kZTp0cnVlICovXG4vKlxuXG4gIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gIENvcHlyaWdodCAoYykgMjAwNy0yMDE4IEVpbmFyIExpZWxtYW5pcywgTGlhbSBOZXdtYW4sIGFuZCBjb250cmlidXRvcnMuXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICBTT0ZUV0FSRS5cbiovXG5cblxuXG52YXIgQmFzZVRva2VuaXplciA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLlRva2VuaXplcik7XG52YXIgQkFTRVRPS0VOID0gKF9fd2VicGFja19yZXF1aXJlX18oOSkuVE9LRU4pO1xudmFyIERpcmVjdGl2ZXMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxMykuRGlyZWN0aXZlcyk7XG52YXIgVGVtcGxhdGFibGVQYXR0ZXJuID0gKF9fd2VicGFja19yZXF1aXJlX18oMTQpLlRlbXBsYXRhYmxlUGF0dGVybik7XG52YXIgUGF0dGVybiA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKS5QYXR0ZXJuKTtcblxudmFyIFRPS0VOID0ge1xuICBUQUdfT1BFTjogJ1RLX1RBR19PUEVOJyxcbiAgVEFHX0NMT1NFOiAnVEtfVEFHX0NMT1NFJyxcbiAgQVRUUklCVVRFOiAnVEtfQVRUUklCVVRFJyxcbiAgRVFVQUxTOiAnVEtfRVFVQUxTJyxcbiAgVkFMVUU6ICdUS19WQUxVRScsXG4gIENPTU1FTlQ6ICdUS19DT01NRU5UJyxcbiAgVEVYVDogJ1RLX1RFWFQnLFxuICBVTktOT1dOOiAnVEtfVU5LTk9XTicsXG4gIFNUQVJUOiBCQVNFVE9LRU4uU1RBUlQsXG4gIFJBVzogQkFTRVRPS0VOLlJBVyxcbiAgRU9GOiBCQVNFVE9LRU4uRU9GXG59O1xuXG52YXIgZGlyZWN0aXZlc19jb3JlID0gbmV3IERpcmVjdGl2ZXMoLzxcXCEtLS8sIC8tLT4vKTtcblxudmFyIFRva2VuaXplciA9IGZ1bmN0aW9uKGlucHV0X3N0cmluZywgb3B0aW9ucykge1xuICBCYXNlVG9rZW5pemVyLmNhbGwodGhpcywgaW5wdXRfc3RyaW5nLCBvcHRpb25zKTtcbiAgdGhpcy5fY3VycmVudF90YWdfbmFtZSA9ICcnO1xuXG4gIC8vIFdvcmRzIGVuZCBhdCB3aGl0ZXNwYWNlIG9yIHdoZW4gYSB0YWcgc3RhcnRzXG4gIC8vIGlmIHdlIGFyZSBpbmRlbnRpbmcgaGFuZGxlYmFycywgdGhleSBhcmUgY29uc2lkZXJlZCB0YWdzXG4gIHZhciB0ZW1wbGF0YWJsZV9yZWFkZXIgPSBuZXcgVGVtcGxhdGFibGVQYXR0ZXJuKHRoaXMuX2lucHV0KS5yZWFkX29wdGlvbnModGhpcy5fb3B0aW9ucyk7XG4gIHZhciBwYXR0ZXJuX3JlYWRlciA9IG5ldyBQYXR0ZXJuKHRoaXMuX2lucHV0KTtcblxuICB0aGlzLl9fcGF0dGVybnMgPSB7XG4gICAgd29yZDogdGVtcGxhdGFibGVfcmVhZGVyLnVudGlsKC9bXFxuXFxyXFx0IDxdLyksXG4gICAgc2luZ2xlX3F1b3RlOiB0ZW1wbGF0YWJsZV9yZWFkZXIudW50aWxfYWZ0ZXIoLycvKSxcbiAgICBkb3VibGVfcXVvdGU6IHRlbXBsYXRhYmxlX3JlYWRlci51bnRpbF9hZnRlcigvXCIvKSxcbiAgICBhdHRyaWJ1dGU6IHRlbXBsYXRhYmxlX3JlYWRlci51bnRpbCgvW1xcblxcclxcdCA9Pl18XFwvPi8pLFxuICAgIGVsZW1lbnRfbmFtZTogdGVtcGxhdGFibGVfcmVhZGVyLnVudGlsKC9bXFxuXFxyXFx0ID5cXC9dLyksXG5cbiAgICBoYW5kbGViYXJzX2NvbW1lbnQ6IHBhdHRlcm5fcmVhZGVyLnN0YXJ0aW5nX3dpdGgoL3t7IS0tLykudW50aWxfYWZ0ZXIoLy0tfX0vKSxcbiAgICBoYW5kbGViYXJzOiBwYXR0ZXJuX3JlYWRlci5zdGFydGluZ193aXRoKC97ey8pLnVudGlsX2FmdGVyKC99fS8pLFxuICAgIGhhbmRsZWJhcnNfb3BlbjogcGF0dGVybl9yZWFkZXIudW50aWwoL1tcXG5cXHJcXHQgfV0vKSxcbiAgICBoYW5kbGViYXJzX3Jhd19jbG9zZTogcGF0dGVybl9yZWFkZXIudW50aWwoL319LyksXG4gICAgY29tbWVudDogcGF0dGVybl9yZWFkZXIuc3RhcnRpbmdfd2l0aCgvPCEtLS8pLnVudGlsX2FmdGVyKC8tLT4vKSxcbiAgICBjZGF0YTogcGF0dGVybl9yZWFkZXIuc3RhcnRpbmdfd2l0aCgvPCFcXFtDREFUQVxcWy8pLnVudGlsX2FmdGVyKC9dXT4vKSxcbiAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db25kaXRpb25hbF9jb21tZW50XG4gICAgY29uZGl0aW9uYWxfY29tbWVudDogcGF0dGVybl9yZWFkZXIuc3RhcnRpbmdfd2l0aCgvPCFcXFsvKS51bnRpbF9hZnRlcigvXT4vKSxcbiAgICBwcm9jZXNzaW5nOiBwYXR0ZXJuX3JlYWRlci5zdGFydGluZ193aXRoKC88XFw/LykudW50aWxfYWZ0ZXIoL1xcPz4vKVxuICB9O1xuXG4gIGlmICh0aGlzLl9vcHRpb25zLmluZGVudF9oYW5kbGViYXJzKSB7XG4gICAgdGhpcy5fX3BhdHRlcm5zLndvcmQgPSB0aGlzLl9fcGF0dGVybnMud29yZC5leGNsdWRlKCdoYW5kbGViYXJzJyk7XG4gIH1cblxuICB0aGlzLl91bmZvcm1hdHRlZF9jb250ZW50X2RlbGltaXRlciA9IG51bGw7XG5cbiAgaWYgKHRoaXMuX29wdGlvbnMudW5mb3JtYXR0ZWRfY29udGVudF9kZWxpbWl0ZXIpIHtcbiAgICB2YXIgbGl0ZXJhbF9yZWdleHAgPSB0aGlzLl9pbnB1dC5nZXRfbGl0ZXJhbF9yZWdleHAodGhpcy5fb3B0aW9ucy51bmZvcm1hdHRlZF9jb250ZW50X2RlbGltaXRlcik7XG4gICAgdGhpcy5fX3BhdHRlcm5zLnVuZm9ybWF0dGVkX2NvbnRlbnRfZGVsaW1pdGVyID1cbiAgICAgIHBhdHRlcm5fcmVhZGVyLm1hdGNoaW5nKGxpdGVyYWxfcmVnZXhwKVxuICAgICAgLnVudGlsX2FmdGVyKGxpdGVyYWxfcmVnZXhwKTtcbiAgfVxufTtcblRva2VuaXplci5wcm90b3R5cGUgPSBuZXcgQmFzZVRva2VuaXplcigpO1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9pc19jb21tZW50ID0gZnVuY3Rpb24oY3VycmVudF90b2tlbikgeyAvLyBqc2hpbnQgdW51c2VkOmZhbHNlXG4gIHJldHVybiBmYWxzZTsgLy9jdXJyZW50X3Rva2VuLnR5cGUgPT09IFRPS0VOLkNPTU1FTlQgfHwgY3VycmVudF90b2tlbi50eXBlID09PSBUT0tFTi5VTktOT1dOO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5faXNfb3BlbmluZyA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4pIHtcbiAgcmV0dXJuIGN1cnJlbnRfdG9rZW4udHlwZSA9PT0gVE9LRU4uVEFHX09QRU47XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9pc19jbG9zaW5nID0gZnVuY3Rpb24oY3VycmVudF90b2tlbiwgb3Blbl90b2tlbikge1xuICByZXR1cm4gY3VycmVudF90b2tlbi50eXBlID09PSBUT0tFTi5UQUdfQ0xPU0UgJiZcbiAgICAob3Blbl90b2tlbiAmJiAoXG4gICAgICAoKGN1cnJlbnRfdG9rZW4udGV4dCA9PT0gJz4nIHx8IGN1cnJlbnRfdG9rZW4udGV4dCA9PT0gJy8+JykgJiYgb3Blbl90b2tlbi50ZXh0WzBdID09PSAnPCcpIHx8XG4gICAgICAoY3VycmVudF90b2tlbi50ZXh0ID09PSAnfX0nICYmIG9wZW5fdG9rZW4udGV4dFswXSA9PT0gJ3snICYmIG9wZW5fdG9rZW4udGV4dFsxXSA9PT0gJ3snKSkpO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY3VycmVudF90YWdfbmFtZSA9ICcnO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fZ2V0X25leHRfdG9rZW4gPSBmdW5jdGlvbihwcmV2aW91c190b2tlbiwgb3Blbl90b2tlbikgeyAvLyBqc2hpbnQgdW51c2VkOmZhbHNlXG4gIHZhciB0b2tlbiA9IG51bGw7XG4gIHRoaXMuX3JlYWRXaGl0ZXNwYWNlKCk7XG4gIHZhciBjID0gdGhpcy5faW5wdXQucGVlaygpO1xuXG4gIGlmIChjID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5FT0YsICcnKTtcbiAgfVxuXG4gIHRva2VuID0gdG9rZW4gfHwgdGhpcy5fcmVhZF9vcGVuX2hhbmRsZWJhcnMoYywgb3Blbl90b2tlbik7XG4gIHRva2VuID0gdG9rZW4gfHwgdGhpcy5fcmVhZF9hdHRyaWJ1dGUoYywgcHJldmlvdXNfdG9rZW4sIG9wZW5fdG9rZW4pO1xuICB0b2tlbiA9IHRva2VuIHx8IHRoaXMuX3JlYWRfY2xvc2UoYywgb3Blbl90b2tlbik7XG4gIHRva2VuID0gdG9rZW4gfHwgdGhpcy5fcmVhZF9yYXdfY29udGVudChjLCBwcmV2aW91c190b2tlbiwgb3Blbl90b2tlbik7XG4gIHRva2VuID0gdG9rZW4gfHwgdGhpcy5fcmVhZF9jb250ZW50X3dvcmQoYyk7XG4gIHRva2VuID0gdG9rZW4gfHwgdGhpcy5fcmVhZF9jb21tZW50X29yX2NkYXRhKGMpO1xuICB0b2tlbiA9IHRva2VuIHx8IHRoaXMuX3JlYWRfcHJvY2Vzc2luZyhjKTtcbiAgdG9rZW4gPSB0b2tlbiB8fCB0aGlzLl9yZWFkX29wZW4oYywgb3Blbl90b2tlbik7XG4gIHRva2VuID0gdG9rZW4gfHwgdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLlVOS05PV04sIHRoaXMuX2lucHV0Lm5leHQoKSk7XG5cbiAgcmV0dXJuIHRva2VuO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fcmVhZF9jb21tZW50X29yX2NkYXRhID0gZnVuY3Rpb24oYykgeyAvLyBqc2hpbnQgdW51c2VkOmZhbHNlXG4gIHZhciB0b2tlbiA9IG51bGw7XG4gIHZhciByZXN1bHRpbmdfc3RyaW5nID0gbnVsbDtcbiAgdmFyIGRpcmVjdGl2ZXMgPSBudWxsO1xuXG4gIGlmIChjID09PSAnPCcpIHtcbiAgICB2YXIgcGVlazEgPSB0aGlzLl9pbnB1dC5wZWVrKDEpO1xuICAgIC8vIFdlIHRyZWF0IGFsbCBjb21tZW50cyBhcyBsaXRlcmFscywgZXZlbiBtb3JlIHRoYW4gcHJlZm9ybWF0dGVkIHRhZ3NcbiAgICAvLyB3ZSBvbmx5IGxvb2sgZm9yIHRoZSBhcHByb3ByaWF0ZSBjbG9zaW5nIG1hcmtlclxuICAgIGlmIChwZWVrMSA9PT0gJyEnKSB7XG4gICAgICByZXN1bHRpbmdfc3RyaW5nID0gdGhpcy5fX3BhdHRlcm5zLmNvbW1lbnQucmVhZCgpO1xuXG4gICAgICAvLyBvbmx5IHByb2Nlc3MgZGlyZWN0aXZlIG9uIGh0bWwgY29tbWVudHNcbiAgICAgIGlmIChyZXN1bHRpbmdfc3RyaW5nKSB7XG4gICAgICAgIGRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzX2NvcmUuZ2V0X2RpcmVjdGl2ZXMocmVzdWx0aW5nX3N0cmluZyk7XG4gICAgICAgIGlmIChkaXJlY3RpdmVzICYmIGRpcmVjdGl2ZXMuaWdub3JlID09PSAnc3RhcnQnKSB7XG4gICAgICAgICAgcmVzdWx0aW5nX3N0cmluZyArPSBkaXJlY3RpdmVzX2NvcmUucmVhZElnbm9yZWQodGhpcy5faW5wdXQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRpbmdfc3RyaW5nID0gdGhpcy5fX3BhdHRlcm5zLmNkYXRhLnJlYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzdWx0aW5nX3N0cmluZykge1xuICAgICAgdG9rZW4gPSB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uQ09NTUVOVCwgcmVzdWx0aW5nX3N0cmluZyk7XG4gICAgICB0b2tlbi5kaXJlY3RpdmVzID0gZGlyZWN0aXZlcztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9rZW47XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9yZWFkX3Byb2Nlc3NpbmcgPSBmdW5jdGlvbihjKSB7IC8vIGpzaGludCB1bnVzZWQ6ZmFsc2VcbiAgdmFyIHRva2VuID0gbnVsbDtcbiAgdmFyIHJlc3VsdGluZ19zdHJpbmcgPSBudWxsO1xuICB2YXIgZGlyZWN0aXZlcyA9IG51bGw7XG5cbiAgaWYgKGMgPT09ICc8Jykge1xuICAgIHZhciBwZWVrMSA9IHRoaXMuX2lucHV0LnBlZWsoMSk7XG4gICAgaWYgKHBlZWsxID09PSAnIScgfHwgcGVlazEgPT09ICc/Jykge1xuICAgICAgcmVzdWx0aW5nX3N0cmluZyA9IHRoaXMuX19wYXR0ZXJucy5jb25kaXRpb25hbF9jb21tZW50LnJlYWQoKTtcbiAgICAgIHJlc3VsdGluZ19zdHJpbmcgPSByZXN1bHRpbmdfc3RyaW5nIHx8IHRoaXMuX19wYXR0ZXJucy5wcm9jZXNzaW5nLnJlYWQoKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0aW5nX3N0cmluZykge1xuICAgICAgdG9rZW4gPSB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uQ09NTUVOVCwgcmVzdWx0aW5nX3N0cmluZyk7XG4gICAgICB0b2tlbi5kaXJlY3RpdmVzID0gZGlyZWN0aXZlcztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9rZW47XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9yZWFkX29wZW4gPSBmdW5jdGlvbihjLCBvcGVuX3Rva2VuKSB7XG4gIHZhciByZXN1bHRpbmdfc3RyaW5nID0gbnVsbDtcbiAgdmFyIHRva2VuID0gbnVsbDtcbiAgaWYgKCFvcGVuX3Rva2VuKSB7XG4gICAgaWYgKGMgPT09ICc8Jykge1xuXG4gICAgICByZXN1bHRpbmdfc3RyaW5nID0gdGhpcy5faW5wdXQubmV4dCgpO1xuICAgICAgaWYgKHRoaXMuX2lucHV0LnBlZWsoKSA9PT0gJy8nKSB7XG4gICAgICAgIHJlc3VsdGluZ19zdHJpbmcgKz0gdGhpcy5faW5wdXQubmV4dCgpO1xuICAgICAgfVxuICAgICAgcmVzdWx0aW5nX3N0cmluZyArPSB0aGlzLl9fcGF0dGVybnMuZWxlbWVudF9uYW1lLnJlYWQoKTtcbiAgICAgIHRva2VuID0gdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLlRBR19PUEVOLCByZXN1bHRpbmdfc3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRva2VuO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fcmVhZF9vcGVuX2hhbmRsZWJhcnMgPSBmdW5jdGlvbihjLCBvcGVuX3Rva2VuKSB7XG4gIHZhciByZXN1bHRpbmdfc3RyaW5nID0gbnVsbDtcbiAgdmFyIHRva2VuID0gbnVsbDtcbiAgaWYgKCFvcGVuX3Rva2VuKSB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaW5kZW50X2hhbmRsZWJhcnMgJiYgYyA9PT0gJ3snICYmIHRoaXMuX2lucHV0LnBlZWsoMSkgPT09ICd7Jykge1xuICAgICAgaWYgKHRoaXMuX2lucHV0LnBlZWsoMikgPT09ICchJykge1xuICAgICAgICByZXN1bHRpbmdfc3RyaW5nID0gdGhpcy5fX3BhdHRlcm5zLmhhbmRsZWJhcnNfY29tbWVudC5yZWFkKCk7XG4gICAgICAgIHJlc3VsdGluZ19zdHJpbmcgPSByZXN1bHRpbmdfc3RyaW5nIHx8IHRoaXMuX19wYXR0ZXJucy5oYW5kbGViYXJzLnJlYWQoKTtcbiAgICAgICAgdG9rZW4gPSB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uQ09NTUVOVCwgcmVzdWx0aW5nX3N0cmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRpbmdfc3RyaW5nID0gdGhpcy5fX3BhdHRlcm5zLmhhbmRsZWJhcnNfb3Blbi5yZWFkKCk7XG4gICAgICAgIHRva2VuID0gdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLlRBR19PUEVOLCByZXN1bHRpbmdfc3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRva2VuO1xufTtcblxuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9yZWFkX2Nsb3NlID0gZnVuY3Rpb24oYywgb3Blbl90b2tlbikge1xuICB2YXIgcmVzdWx0aW5nX3N0cmluZyA9IG51bGw7XG4gIHZhciB0b2tlbiA9IG51bGw7XG4gIGlmIChvcGVuX3Rva2VuKSB7XG4gICAgaWYgKG9wZW5fdG9rZW4udGV4dFswXSA9PT0gJzwnICYmIChjID09PSAnPicgfHwgKGMgPT09ICcvJyAmJiB0aGlzLl9pbnB1dC5wZWVrKDEpID09PSAnPicpKSkge1xuICAgICAgcmVzdWx0aW5nX3N0cmluZyA9IHRoaXMuX2lucHV0Lm5leHQoKTtcbiAgICAgIGlmIChjID09PSAnLycpIHsgLy8gIGZvciBjbG9zZSB0YWcgXCIvPlwiXG4gICAgICAgIHJlc3VsdGluZ19zdHJpbmcgKz0gdGhpcy5faW5wdXQubmV4dCgpO1xuICAgICAgfVxuICAgICAgdG9rZW4gPSB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uVEFHX0NMT1NFLCByZXN1bHRpbmdfc3RyaW5nKTtcbiAgICB9IGVsc2UgaWYgKG9wZW5fdG9rZW4udGV4dFswXSA9PT0gJ3snICYmIGMgPT09ICd9JyAmJiB0aGlzLl9pbnB1dC5wZWVrKDEpID09PSAnfScpIHtcbiAgICAgIHRoaXMuX2lucHV0Lm5leHQoKTtcbiAgICAgIHRoaXMuX2lucHV0Lm5leHQoKTtcbiAgICAgIHRva2VuID0gdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLlRBR19DTE9TRSwgJ319Jyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRva2VuO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fcmVhZF9hdHRyaWJ1dGUgPSBmdW5jdGlvbihjLCBwcmV2aW91c190b2tlbiwgb3Blbl90b2tlbikge1xuICB2YXIgdG9rZW4gPSBudWxsO1xuICB2YXIgcmVzdWx0aW5nX3N0cmluZyA9ICcnO1xuICBpZiAob3Blbl90b2tlbiAmJiBvcGVuX3Rva2VuLnRleHRbMF0gPT09ICc8Jykge1xuXG4gICAgaWYgKGMgPT09ICc9Jykge1xuICAgICAgdG9rZW4gPSB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uRVFVQUxTLCB0aGlzLl9pbnB1dC5uZXh0KCkpO1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gJ1wiJyB8fCBjID09PSBcIidcIikge1xuICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLl9pbnB1dC5uZXh0KCk7XG4gICAgICBpZiAoYyA9PT0gJ1wiJykge1xuICAgICAgICBjb250ZW50ICs9IHRoaXMuX19wYXR0ZXJucy5kb3VibGVfcXVvdGUucmVhZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudCArPSB0aGlzLl9fcGF0dGVybnMuc2luZ2xlX3F1b3RlLnJlYWQoKTtcbiAgICAgIH1cbiAgICAgIHRva2VuID0gdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLlZBTFVFLCBjb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0aW5nX3N0cmluZyA9IHRoaXMuX19wYXR0ZXJucy5hdHRyaWJ1dGUucmVhZCgpO1xuXG4gICAgICBpZiAocmVzdWx0aW5nX3N0cmluZykge1xuICAgICAgICBpZiAocHJldmlvdXNfdG9rZW4udHlwZSA9PT0gVE9LRU4uRVFVQUxTKSB7XG4gICAgICAgICAgdG9rZW4gPSB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uVkFMVUUsIHJlc3VsdGluZ19zdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRva2VuID0gdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLkFUVFJJQlVURSwgcmVzdWx0aW5nX3N0cmluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRva2VuO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5faXNfY29udGVudF91bmZvcm1hdHRlZCA9IGZ1bmN0aW9uKHRhZ19uYW1lKSB7XG4gIC8vIHZvaWRfZWxlbWVudHMgaGF2ZSBubyBjb250ZW50IGFuZCBzbyBjYW5ub3QgaGF2ZSB1bmZvcm1hdHRlZCBjb250ZW50XG4gIC8vIHNjcmlwdCBhbmQgc3R5bGUgdGFncyBzaG91bGQgYWx3YXlzIGJlIHJlYWQgYXMgdW5mb3JtYXR0ZWQgY29udGVudFxuICAvLyBmaW5hbGx5IGNvbnRlbnRfdW5mb3JtYXR0ZWQgYW5kIHVuZm9ybWF0dGVkIGVsZW1lbnQgY29udGVudHMgYXJlIHVuZm9ybWF0dGVkXG4gIHJldHVybiB0aGlzLl9vcHRpb25zLnZvaWRfZWxlbWVudHMuaW5kZXhPZih0YWdfbmFtZSkgPT09IC0xICYmXG4gICAgKHRoaXMuX29wdGlvbnMuY29udGVudF91bmZvcm1hdHRlZC5pbmRleE9mKHRhZ19uYW1lKSAhPT0gLTEgfHxcbiAgICAgIHRoaXMuX29wdGlvbnMudW5mb3JtYXR0ZWQuaW5kZXhPZih0YWdfbmFtZSkgIT09IC0xKTtcbn07XG5cblxuVG9rZW5pemVyLnByb3RvdHlwZS5fcmVhZF9yYXdfY29udGVudCA9IGZ1bmN0aW9uKGMsIHByZXZpb3VzX3Rva2VuLCBvcGVuX3Rva2VuKSB7IC8vIGpzaGludCB1bnVzZWQ6ZmFsc2VcbiAgdmFyIHJlc3VsdGluZ19zdHJpbmcgPSAnJztcbiAgaWYgKG9wZW5fdG9rZW4gJiYgb3Blbl90b2tlbi50ZXh0WzBdID09PSAneycpIHtcbiAgICByZXN1bHRpbmdfc3RyaW5nID0gdGhpcy5fX3BhdHRlcm5zLmhhbmRsZWJhcnNfcmF3X2Nsb3NlLnJlYWQoKTtcbiAgfSBlbHNlIGlmIChwcmV2aW91c190b2tlbi50eXBlID09PSBUT0tFTi5UQUdfQ0xPU0UgJiZcbiAgICBwcmV2aW91c190b2tlbi5vcGVuZWQudGV4dFswXSA9PT0gJzwnICYmIHByZXZpb3VzX3Rva2VuLnRleHRbMF0gIT09ICcvJykge1xuICAgIC8vIF5eIGVtcHR5IHRhZyBoYXMgbm8gY29udGVudCBcbiAgICB2YXIgdGFnX25hbWUgPSBwcmV2aW91c190b2tlbi5vcGVuZWQudGV4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodGFnX25hbWUgPT09ICdzY3JpcHQnIHx8IHRhZ19uYW1lID09PSAnc3R5bGUnKSB7XG4gICAgICAvLyBTY3JpcHQgYW5kIHN0eWxlIHRhZ3MgYXJlIGFsbG93ZWQgdG8gaGF2ZSBjb21tZW50cyB3cmFwcGluZyB0aGVpciBjb250ZW50XG4gICAgICAvLyBvciBqdXN0IGhhdmUgcmVndWxhciBjb250ZW50LlxuICAgICAgdmFyIHRva2VuID0gdGhpcy5fcmVhZF9jb21tZW50X29yX2NkYXRhKGMpO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBUT0tFTi5URVhUO1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9XG4gICAgICByZXN1bHRpbmdfc3RyaW5nID0gdGhpcy5faW5wdXQucmVhZFVudGlsKG5ldyBSZWdFeHAoJzwvJyArIHRhZ19uYW1lICsgJ1tcXFxcblxcXFxyXFxcXHQgXSo/PicsICdpZycpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzX2NvbnRlbnRfdW5mb3JtYXR0ZWQodGFnX25hbWUpKSB7XG5cbiAgICAgIHJlc3VsdGluZ19zdHJpbmcgPSB0aGlzLl9pbnB1dC5yZWFkVW50aWwobmV3IFJlZ0V4cCgnPC8nICsgdGFnX25hbWUgKyAnW1xcXFxuXFxcXHJcXFxcdCBdKj8+JywgJ2lnJykpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyZXN1bHRpbmdfc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5URVhULCByZXN1bHRpbmdfc3RyaW5nKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fcmVhZF9jb250ZW50X3dvcmQgPSBmdW5jdGlvbihjKSB7XG4gIHZhciByZXN1bHRpbmdfc3RyaW5nID0gJyc7XG4gIGlmICh0aGlzLl9vcHRpb25zLnVuZm9ybWF0dGVkX2NvbnRlbnRfZGVsaW1pdGVyKSB7XG4gICAgaWYgKGMgPT09IHRoaXMuX29wdGlvbnMudW5mb3JtYXR0ZWRfY29udGVudF9kZWxpbWl0ZXJbMF0pIHtcbiAgICAgIHJlc3VsdGluZ19zdHJpbmcgPSB0aGlzLl9fcGF0dGVybnMudW5mb3JtYXR0ZWRfY29udGVudF9kZWxpbWl0ZXIucmVhZCgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghcmVzdWx0aW5nX3N0cmluZykge1xuICAgIHJlc3VsdGluZ19zdHJpbmcgPSB0aGlzLl9fcGF0dGVybnMud29yZC5yZWFkKCk7XG4gIH1cbiAgaWYgKHJlc3VsdGluZ19zdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLlRFWFQsIHJlc3VsdGluZ19zdHJpbmcpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5Ub2tlbml6ZXIgPSBUb2tlbml6ZXI7XG5tb2R1bGUuZXhwb3J0cy5UT0tFTiA9IFRPS0VOO1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBcdF0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0Ly8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcbi8qKioqKiovIFx0bGVnYWN5X2JlYXV0aWZ5X2h0bWwgPSBfX3dlYnBhY2tfZXhwb3J0c19fO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIH0pKClcbjtcbnZhciBzdHlsZV9odG1sID0gbGVnYWN5X2JlYXV0aWZ5X2h0bWw7XG4vKiBGb290ZXIgKi9cbmlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFkZCBzdXBwb3J0IGZvciBBTUQgKCBodHRwczovL2dpdGh1Yi5jb20vYW1kanMvYW1kanMtYXBpL3dpa2kvQU1EI2RlZmluZWFtZC1wcm9wZXJ0eS0gKVxuICAgIGRlZmluZShbXCJyZXF1aXJlXCIsIFwiLi9iZWF1dGlmeVwiLCBcIi4vYmVhdXRpZnktY3NzXCJdLCBmdW5jdGlvbihyZXF1aXJlYW1kKSB7XG4gICAgICAgIHZhciBqc19iZWF1dGlmeSA9IHJlcXVpcmVhbWQoXCIuL2JlYXV0aWZ5XCIpO1xuICAgICAgICB2YXIgY3NzX2JlYXV0aWZ5ID0gcmVxdWlyZWFtZChcIi4vYmVhdXRpZnktY3NzXCIpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBodG1sX2JlYXV0aWZ5OiBmdW5jdGlvbihodG1sX3NvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZV9odG1sKGh0bWxfc291cmNlLCBvcHRpb25zLCBqc19iZWF1dGlmeS5qc19iZWF1dGlmeSwgY3NzX2JlYXV0aWZ5LmNzc19iZWF1dGlmeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gQWRkIHN1cHBvcnQgZm9yIENvbW1vbkpTLiBKdXN0IHB1dCB0aGlzIGZpbGUgc29tZXdoZXJlIG9uIHlvdXIgcmVxdWlyZS5wYXRoc1xuICAgIC8vIGFuZCB5b3Ugd2lsbCBiZSBhYmxlIHRvIGB2YXIgaHRtbF9iZWF1dGlmeSA9IHJlcXVpcmUoXCJiZWF1dGlmeVwiKS5odG1sX2JlYXV0aWZ5YC5cbiAgICB2YXIganNfYmVhdXRpZnkgPSByZXF1aXJlKCcuL2JlYXV0aWZ5LmpzJyk7XG4gICAgdmFyIGNzc19iZWF1dGlmeSA9IHJlcXVpcmUoJy4vYmVhdXRpZnktY3NzLmpzJyk7XG5cbiAgICBleHBvcnRzLmh0bWxfYmVhdXRpZnkgPSBmdW5jdGlvbihodG1sX3NvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gc3R5bGVfaHRtbChodG1sX3NvdXJjZSwgb3B0aW9ucywganNfYmVhdXRpZnkuanNfYmVhdXRpZnksIGNzc19iZWF1dGlmeS5jc3NfYmVhdXRpZnkpO1xuICAgIH07XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAvLyBJZiB3ZSdyZSBydW5uaW5nIGEgd2ViIHBhZ2UgYW5kIGRvbid0IGhhdmUgZWl0aGVyIG9mIHRoZSBhYm92ZSwgYWRkIG91ciBvbmUgZ2xvYmFsXG4gICAgd2luZG93Lmh0bWxfYmVhdXRpZnkgPSBmdW5jdGlvbihodG1sX3NvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gc3R5bGVfaHRtbChodG1sX3NvdXJjZSwgb3B0aW9ucywgd2luZG93LmpzX2JlYXV0aWZ5LCB3aW5kb3cuY3NzX2JlYXV0aWZ5KTtcbiAgICB9O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gSWYgd2UgZG9uJ3QgZXZlbiBoYXZlIHdpbmRvdywgdHJ5IGdsb2JhbC5cbiAgICBnbG9iYWwuaHRtbF9iZWF1dGlmeSA9IGZ1bmN0aW9uKGh0bWxfc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBzdHlsZV9odG1sKGh0bWxfc291cmNlLCBvcHRpb25zLCBnbG9iYWwuanNfYmVhdXRpZnksIGdsb2JhbC5jc3NfYmVhdXRpZnkpO1xuICAgIH07XG59XG5cbn0oKSk7XG4iLCIvKiBBVVRPLUdFTkVSQVRFRC4gRE8gTk9UIE1PRElGWS4gKi9cbi8qXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuXG4gSlMgQmVhdXRpZmllclxuLS0tLS0tLS0tLS0tLS0tXG5cblxuICBXcml0dGVuIGJ5IEVpbmFyIExpZWxtYW5pcywgPGVpbmFyQGJlYXV0aWZpZXIuaW8+XG4gICAgICBodHRwczovL2JlYXV0aWZpZXIuaW8vXG5cbiAgT3JpZ2luYWxseSBjb252ZXJ0ZWQgdG8gamF2YXNjcmlwdCBieSBWaXRhbCwgPHZpdGFsNzZAZ21haWwuY29tPlxuICBcIkVuZCBicmFjZXMgb24gb3duIGxpbmVcIiBhZGRlZCBieSBDaHJpcyBKLiBTaHVsbCwgPGNocmlzanNodWxsQGdtYWlsLmNvbT5cbiAgUGFyc2luZyBpbXByb3ZlbWVudHMgZm9yIGJyYWNlLWxlc3Mgc3RhdGVtZW50cyBieSBMaWFtIE5ld21hbiA8Yml0d2lzZW1hbkBiZWF1dGlmaWVyLmlvPlxuXG5cbiAgVXNhZ2U6XG4gICAganNfYmVhdXRpZnkoanNfc291cmNlX3RleHQpO1xuICAgIGpzX2JlYXV0aWZ5KGpzX3NvdXJjZV90ZXh0LCBvcHRpb25zKTtcblxuICBUaGUgb3B0aW9ucyBhcmU6XG4gICAgaW5kZW50X3NpemUgKGRlZmF1bHQgNCkgICAgICAgICAgLSBpbmRlbnRhdGlvbiBzaXplLFxuICAgIGluZGVudF9jaGFyIChkZWZhdWx0IHNwYWNlKSAgICAgIC0gY2hhcmFjdGVyIHRvIGluZGVudCB3aXRoLFxuICAgIHByZXNlcnZlX25ld2xpbmVzIChkZWZhdWx0IHRydWUpIC0gd2hldGhlciBleGlzdGluZyBsaW5lIGJyZWFrcyBzaG91bGQgYmUgcHJlc2VydmVkLFxuICAgIG1heF9wcmVzZXJ2ZV9uZXdsaW5lcyAoZGVmYXVsdCB1bmxpbWl0ZWQpIC0gbWF4aW11bSBudW1iZXIgb2YgbGluZSBicmVha3MgdG8gYmUgcHJlc2VydmVkIGluIG9uZSBjaHVuayxcblxuICAgIGpzbGludF9oYXBweSAoZGVmYXVsdCBmYWxzZSkgLSBpZiB0cnVlLCB0aGVuIGpzbGludC1zdHJpY3RlciBtb2RlIGlzIGVuZm9yY2VkLlxuXG4gICAgICAgICAgICBqc2xpbnRfaGFwcHkgICAgICAgICFqc2xpbnRfaGFwcHlcbiAgICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgZnVuY3Rpb24gKCkgICAgICAgICBmdW5jdGlvbigpXG5cbiAgICAgICAgICAgIHN3aXRjaCAoKSB7ICAgICAgICAgc3dpdGNoKCkge1xuICAgICAgICAgICAgY2FzZSAxOiAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICB9XG5cbiAgICBzcGFjZV9hZnRlcl9hbm9uX2Z1bmN0aW9uIChkZWZhdWx0IGZhbHNlKSAtIHNob3VsZCB0aGUgc3BhY2UgYmVmb3JlIGFuIGFub255bW91cyBmdW5jdGlvbidzIHBhcmVucyBiZSBhZGRlZCwgXCJmdW5jdGlvbigpXCIgdnMgXCJmdW5jdGlvbiAoKVwiLFxuICAgICAgICAgIE5PVEU6IFRoaXMgb3B0aW9uIGlzIG92ZXJyaWRlbiBieSBqc2xpbnRfaGFwcHkgKGkuZS4gaWYganNsaW50X2hhcHB5IGlzIHRydWUsIHNwYWNlX2FmdGVyX2Fub25fZnVuY3Rpb24gaXMgdHJ1ZSBieSBkZXNpZ24pXG5cbiAgICBicmFjZV9zdHlsZSAoZGVmYXVsdCBcImNvbGxhcHNlXCIpIC0gXCJjb2xsYXBzZVwiIHwgXCJleHBhbmRcIiB8IFwiZW5kLWV4cGFuZFwiIHwgXCJub25lXCIgfCBhbnkgb2YgdGhlIGZvcm1lciArIFwiLHByZXNlcnZlLWlubGluZVwiXG4gICAgICAgICAgICBwdXQgYnJhY2VzIG9uIHRoZSBzYW1lIGxpbmUgYXMgY29udHJvbCBzdGF0ZW1lbnRzIChkZWZhdWx0KSwgb3IgcHV0IGJyYWNlcyBvbiBvd24gbGluZSAoQWxsbWFuIC8gQU5TSSBzdHlsZSksIG9yIGp1c3QgcHV0IGVuZCBicmFjZXMgb24gb3duIGxpbmUsIG9yIGF0dGVtcHQgdG8ga2VlcCB0aGVtIHdoZXJlIHRoZXkgYXJlLlxuICAgICAgICAgICAgcHJlc2VydmUtaW5saW5lIHdpbGwgdHJ5IHRvIHByZXNlcnZlIGlubGluZSBibG9ja3Mgb2YgY3VybHkgYnJhY2VzXG5cbiAgICBzcGFjZV9iZWZvcmVfY29uZGl0aW9uYWwgKGRlZmF1bHQgdHJ1ZSkgLSBzaG91bGQgdGhlIHNwYWNlIGJlZm9yZSBjb25kaXRpb25hbCBzdGF0ZW1lbnQgYmUgYWRkZWQsIFwiaWYodHJ1ZSlcIiB2cyBcImlmICh0cnVlKVwiLFxuXG4gICAgdW5lc2NhcGVfc3RyaW5ncyAoZGVmYXVsdCBmYWxzZSkgLSBzaG91bGQgcHJpbnRhYmxlIGNoYXJhY3RlcnMgaW4gc3RyaW5ncyBlbmNvZGVkIGluIFxceE5OIG5vdGF0aW9uIGJlIHVuZXNjYXBlZCwgXCJleGFtcGxlXCIgdnMgXCJcXHg2NVxceDc4XFx4NjFcXHg2ZFxceDcwXFx4NmNcXHg2NVwiXG5cbiAgICB3cmFwX2xpbmVfbGVuZ3RoIChkZWZhdWx0IHVubGltaXRlZCkgLSBsaW5lcyBzaG91bGQgd3JhcCBhdCBuZXh0IG9wcG9ydHVuaXR5IGFmdGVyIHRoaXMgbnVtYmVyIG9mIGNoYXJhY3RlcnMuXG4gICAgICAgICAgTk9URTogVGhpcyBpcyBub3QgYSBoYXJkIGxpbWl0LiBMaW5lcyB3aWxsIGNvbnRpbnVlIHVudGlsIGEgcG9pbnQgd2hlcmUgYSBuZXdsaW5lIHdvdWxkXG4gICAgICAgICAgICAgICAgYmUgcHJlc2VydmVkIGlmIGl0IHdlcmUgcHJlc2VudC5cblxuICAgIGVuZF93aXRoX25ld2xpbmUgKGRlZmF1bHQgZmFsc2UpICAtIGVuZCBvdXRwdXQgd2l0aCBhIG5ld2xpbmVcblxuXG4gICAgZS5nXG5cbiAgICBqc19iZWF1dGlmeShqc19zb3VyY2VfdGV4dCwge1xuICAgICAgJ2luZGVudF9zaXplJzogMSxcbiAgICAgICdpbmRlbnRfY2hhcic6ICdcXHQnXG4gICAgfSk7XG5cbiovXG5cbihmdW5jdGlvbigpIHtcblxuLyogR0VORVJBVEVEX0JVSUxEX09VVFBVVCAqL1xudmFyIGxlZ2FjeV9iZWF1dGlmeV9qcztcbi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHRcInVzZSBzdHJpY3RcIjtcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLypcblxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG4qL1xuXG5cblxudmFyIEJlYXV0aWZpZXIgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKS5CZWF1dGlmaWVyKSxcbiAgT3B0aW9ucyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDUpLk9wdGlvbnMpO1xuXG5mdW5jdGlvbiBqc19iZWF1dGlmeShqc19zb3VyY2VfdGV4dCwgb3B0aW9ucykge1xuICB2YXIgYmVhdXRpZmllciA9IG5ldyBCZWF1dGlmaWVyKGpzX3NvdXJjZV90ZXh0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGJlYXV0aWZpZXIuYmVhdXRpZnkoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBqc19iZWF1dGlmeTtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgT3B0aW9ucygpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKmpzaGludCBub2RlOnRydWUgKi9cbi8qXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuKi9cblxuXG5cbnZhciBPdXRwdXQgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKS5PdXRwdXQpO1xudmFyIFRva2VuID0gKF9fd2VicGFja19yZXF1aXJlX18oMykuVG9rZW4pO1xudmFyIGFjb3JuID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBPcHRpb25zID0gKF9fd2VicGFja19yZXF1aXJlX18oNSkuT3B0aW9ucyk7XG52YXIgVG9rZW5pemVyID0gKF9fd2VicGFja19yZXF1aXJlX18oNykuVG9rZW5pemVyKTtcbnZhciBsaW5lX3N0YXJ0ZXJzID0gKF9fd2VicGFja19yZXF1aXJlX18oNykubGluZV9zdGFydGVycyk7XG52YXIgcG9zaXRpb25hYmxlX29wZXJhdG9ycyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDcpLnBvc2l0aW9uYWJsZV9vcGVyYXRvcnMpO1xudmFyIFRPS0VOID0gKF9fd2VicGFja19yZXF1aXJlX18oNykuVE9LRU4pO1xuXG5cbmZ1bmN0aW9uIGluX2FycmF5KHdoYXQsIGFycikge1xuICByZXR1cm4gYXJyLmluZGV4T2Yod2hhdCkgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBsdHJpbShzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL15cXHMrL2csICcnKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVNYXBGcm9tU3RyaW5ncyhsaXN0KSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZm9yICh2YXIgeCA9IDA7IHggPCBsaXN0Lmxlbmd0aDsgeCsrKSB7XG4gICAgLy8gbWFrZSB0aGUgbWFwcGVkIG5hbWVzIHVuZGVyc2NvcmVkIGluc3RlYWQgb2YgZGFzaFxuICAgIHJlc3VsdFtsaXN0W3hdLnJlcGxhY2UoLy0vZywgJ18nKV0gPSBsaXN0W3hdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlc2VydmVkX3dvcmQodG9rZW4sIHdvcmQpIHtcbiAgcmV0dXJuIHRva2VuICYmIHRva2VuLnR5cGUgPT09IFRPS0VOLlJFU0VSVkVEICYmIHRva2VuLnRleHQgPT09IHdvcmQ7XG59XG5cbmZ1bmN0aW9uIHJlc2VydmVkX2FycmF5KHRva2VuLCB3b3Jkcykge1xuICByZXR1cm4gdG9rZW4gJiYgdG9rZW4udHlwZSA9PT0gVE9LRU4uUkVTRVJWRUQgJiYgaW5fYXJyYXkodG9rZW4udGV4dCwgd29yZHMpO1xufVxuLy8gVW5zdXJlIG9mIHdoYXQgdGhleSBtZWFuLCBidXQgdGhleSB3b3JrLiBXb3J0aCBjbGVhbmluZyB1cCBpbiBmdXR1cmUuXG52YXIgc3BlY2lhbF93b3JkcyA9IFsnY2FzZScsICdyZXR1cm4nLCAnZG8nLCAnaWYnLCAndGhyb3cnLCAnZWxzZScsICdhd2FpdCcsICdicmVhaycsICdjb250aW51ZScsICdhc3luYyddO1xuXG52YXIgdmFsaWRQb3NpdGlvblZhbHVlcyA9IFsnYmVmb3JlLW5ld2xpbmUnLCAnYWZ0ZXItbmV3bGluZScsICdwcmVzZXJ2ZS1uZXdsaW5lJ107XG5cbi8vIEdlbmVyYXRlIG1hcCBmcm9tIGFycmF5XG52YXIgT1BFUkFUT1JfUE9TSVRJT04gPSBnZW5lcmF0ZU1hcEZyb21TdHJpbmdzKHZhbGlkUG9zaXRpb25WYWx1ZXMpO1xuXG52YXIgT1BFUkFUT1JfUE9TSVRJT05fQkVGT1JFX09SX1BSRVNFUlZFID0gW09QRVJBVE9SX1BPU0lUSU9OLmJlZm9yZV9uZXdsaW5lLCBPUEVSQVRPUl9QT1NJVElPTi5wcmVzZXJ2ZV9uZXdsaW5lXTtcblxudmFyIE1PREUgPSB7XG4gIEJsb2NrU3RhdGVtZW50OiAnQmxvY2tTdGF0ZW1lbnQnLCAvLyAnQkxPQ0snXG4gIFN0YXRlbWVudDogJ1N0YXRlbWVudCcsIC8vICdTVEFURU1FTlQnXG4gIE9iamVjdExpdGVyYWw6ICdPYmplY3RMaXRlcmFsJywgLy8gJ09CSkVDVCcsXG4gIEFycmF5TGl0ZXJhbDogJ0FycmF5TGl0ZXJhbCcsIC8vJ1tFWFBSRVNTSU9OXScsXG4gIEZvckluaXRpYWxpemVyOiAnRm9ySW5pdGlhbGl6ZXInLCAvLycoRk9SLUVYUFJFU1NJT04pJyxcbiAgQ29uZGl0aW9uYWw6ICdDb25kaXRpb25hbCcsIC8vJyhDT05ELUVYUFJFU1NJT04pJyxcbiAgRXhwcmVzc2lvbjogJ0V4cHJlc3Npb24nIC8vJyhFWFBSRVNTSU9OKSdcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZV9yZWR1bmRhbnRfaW5kZW50YXRpb24ob3V0cHV0LCBmcmFtZSkge1xuICAvLyBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGVmZmVjdGl2ZSBidXQgaGFzIHNvbWUgaXNzdWVzOlxuICAvLyAgICAgLSBjYW4gY2F1c2UgbGluZSB3cmFwIHRvIGhhcHBlbiB0b28gc29vbiBkdWUgdG8gaW5kZW50IHJlbW92YWxcbiAgLy8gICAgICAgICAgIGFmdGVyIHdyYXAgcG9pbnRzIGFyZSBjYWxjdWxhdGVkXG4gIC8vIFRoZXNlIGlzc3VlcyBhcmUgbWlub3IgY29tcGFyZWQgdG8gdWdseSBpbmRlbnRhdGlvbi5cblxuICBpZiAoZnJhbWUubXVsdGlsaW5lX2ZyYW1lIHx8XG4gICAgZnJhbWUubW9kZSA9PT0gTU9ERS5Gb3JJbml0aWFsaXplciB8fFxuICAgIGZyYW1lLm1vZGUgPT09IE1PREUuQ29uZGl0aW9uYWwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyByZW1vdmUgb25lIGluZGVudCBmcm9tIGVhY2ggbGluZSBpbnNpZGUgdGhpcyBzZWN0aW9uXG4gIG91dHB1dC5yZW1vdmVfaW5kZW50KGZyYW1lLnN0YXJ0X2xpbmVfaW5kZXgpO1xufVxuXG4vLyB3ZSBjb3VsZCB1c2UganVzdCBzdHJpbmcuc3BsaXQsIGJ1dFxuLy8gSUUgZG9lc24ndCBsaWtlIHJldHVybmluZyBlbXB0eSBzdHJpbmdzXG5mdW5jdGlvbiBzcGxpdF9saW5lYnJlYWtzKHMpIHtcbiAgLy9yZXR1cm4gcy5zcGxpdCgvXFx4MGRcXHgwYXxcXHgwYS8pO1xuXG4gIHMgPSBzLnJlcGxhY2UoYWNvcm4uYWxsTGluZUJyZWFrcywgJ1xcbicpO1xuICB2YXIgb3V0ID0gW10sXG4gICAgaWR4ID0gcy5pbmRleE9mKFwiXFxuXCIpO1xuICB3aGlsZSAoaWR4ICE9PSAtMSkge1xuICAgIG91dC5wdXNoKHMuc3Vic3RyaW5nKDAsIGlkeCkpO1xuICAgIHMgPSBzLnN1YnN0cmluZyhpZHggKyAxKTtcbiAgICBpZHggPSBzLmluZGV4T2YoXCJcXG5cIik7XG4gIH1cbiAgaWYgKHMubGVuZ3RoKSB7XG4gICAgb3V0LnB1c2gocyk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gaXNfYXJyYXkobW9kZSkge1xuICByZXR1cm4gbW9kZSA9PT0gTU9ERS5BcnJheUxpdGVyYWw7XG59XG5cbmZ1bmN0aW9uIGlzX2V4cHJlc3Npb24obW9kZSkge1xuICByZXR1cm4gaW5fYXJyYXkobW9kZSwgW01PREUuRXhwcmVzc2lvbiwgTU9ERS5Gb3JJbml0aWFsaXplciwgTU9ERS5Db25kaXRpb25hbF0pO1xufVxuXG5mdW5jdGlvbiBhbGxfbGluZXNfc3RhcnRfd2l0aChsaW5lcywgYykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgaWYgKGxpbmUuY2hhckF0KDApICE9PSBjKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBlYWNoX2xpbmVfbWF0Y2hlc19pbmRlbnQobGluZXMsIGluZGVudCkge1xuICB2YXIgaSA9IDAsXG4gICAgbGVuID0gbGluZXMubGVuZ3RoLFxuICAgIGxpbmU7XG4gIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBsaW5lID0gbGluZXNbaV07XG4gICAgLy8gYWxsb3cgZW1wdHkgbGluZXMgdG8gcGFzcyB0aHJvdWdoXG4gICAgaWYgKGxpbmUgJiYgbGluZS5pbmRleE9mKGluZGVudCkgIT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuZnVuY3Rpb24gQmVhdXRpZmllcihzb3VyY2VfdGV4dCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5fc291cmNlX3RleHQgPSBzb3VyY2VfdGV4dCB8fCAnJztcblxuICB0aGlzLl9vdXRwdXQgPSBudWxsO1xuICB0aGlzLl90b2tlbnMgPSBudWxsO1xuICB0aGlzLl9sYXN0X2xhc3RfdGV4dCA9IG51bGw7XG4gIHRoaXMuX2ZsYWdzID0gbnVsbDtcbiAgdGhpcy5fcHJldmlvdXNfZmxhZ3MgPSBudWxsO1xuXG4gIHRoaXMuX2ZsYWdfc3RvcmUgPSBudWxsO1xuICB0aGlzLl9vcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XG59XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLmNyZWF0ZV9mbGFncyA9IGZ1bmN0aW9uKGZsYWdzX2Jhc2UsIG1vZGUpIHtcbiAgdmFyIG5leHRfaW5kZW50X2xldmVsID0gMDtcbiAgaWYgKGZsYWdzX2Jhc2UpIHtcbiAgICBuZXh0X2luZGVudF9sZXZlbCA9IGZsYWdzX2Jhc2UuaW5kZW50YXRpb25fbGV2ZWw7XG4gICAgaWYgKCF0aGlzLl9vdXRwdXQuanVzdF9hZGRlZF9uZXdsaW5lKCkgJiZcbiAgICAgIGZsYWdzX2Jhc2UubGluZV9pbmRlbnRfbGV2ZWwgPiBuZXh0X2luZGVudF9sZXZlbCkge1xuICAgICAgbmV4dF9pbmRlbnRfbGV2ZWwgPSBmbGFnc19iYXNlLmxpbmVfaW5kZW50X2xldmVsO1xuICAgIH1cbiAgfVxuXG4gIHZhciBuZXh0X2ZsYWdzID0ge1xuICAgIG1vZGU6IG1vZGUsXG4gICAgcGFyZW50OiBmbGFnc19iYXNlLFxuICAgIGxhc3RfdG9rZW46IGZsYWdzX2Jhc2UgPyBmbGFnc19iYXNlLmxhc3RfdG9rZW4gOiBuZXcgVG9rZW4oVE9LRU4uU1RBUlRfQkxPQ0ssICcnKSwgLy8gbGFzdCB0b2tlbiB0ZXh0XG4gICAgbGFzdF93b3JkOiBmbGFnc19iYXNlID8gZmxhZ3NfYmFzZS5sYXN0X3dvcmQgOiAnJywgLy8gbGFzdCBUT0tFTi5XT1JEIHBhc3NlZFxuICAgIGRlY2xhcmF0aW9uX3N0YXRlbWVudDogZmFsc2UsXG4gICAgZGVjbGFyYXRpb25fYXNzaWdubWVudDogZmFsc2UsXG4gICAgbXVsdGlsaW5lX2ZyYW1lOiBmYWxzZSxcbiAgICBpbmxpbmVfZnJhbWU6IGZhbHNlLFxuICAgIGlmX2Jsb2NrOiBmYWxzZSxcbiAgICBlbHNlX2Jsb2NrOiBmYWxzZSxcbiAgICBjbGFzc19zdGFydF9ibG9jazogZmFsc2UsIC8vIGNsYXNzIEEgeyBJTlNJREUgSEVSRSB9IG9yIGNsYXNzIEIgZXh0ZW5kcyBDIHsgSU5TSURFIEhFUkUgfVxuICAgIGRvX2Jsb2NrOiBmYWxzZSxcbiAgICBkb193aGlsZTogZmFsc2UsXG4gICAgaW1wb3J0X2Jsb2NrOiBmYWxzZSxcbiAgICBpbl9jYXNlX3N0YXRlbWVudDogZmFsc2UsIC8vIHN3aXRjaCguLil7IElOU0lERSBIRVJFIH1cbiAgICBpbl9jYXNlOiBmYWxzZSwgLy8gd2UncmUgb24gdGhlIGV4YWN0IGxpbmUgd2l0aCBcImNhc2UgMDpcIlxuICAgIGNhc2VfYm9keTogZmFsc2UsIC8vIHRoZSBpbmRlbnRlZCBjYXNlLWFjdGlvbiBibG9ja1xuICAgIGNhc2VfYmxvY2s6IGZhbHNlLCAvLyB0aGUgaW5kZW50ZWQgY2FzZS1hY3Rpb24gYmxvY2sgaXMgd3JhcHBlZCB3aXRoIHt9XG4gICAgaW5kZW50YXRpb25fbGV2ZWw6IG5leHRfaW5kZW50X2xldmVsLFxuICAgIGFsaWdubWVudDogMCxcbiAgICBsaW5lX2luZGVudF9sZXZlbDogZmxhZ3NfYmFzZSA/IGZsYWdzX2Jhc2UubGluZV9pbmRlbnRfbGV2ZWwgOiBuZXh0X2luZGVudF9sZXZlbCxcbiAgICBzdGFydF9saW5lX2luZGV4OiB0aGlzLl9vdXRwdXQuZ2V0X2xpbmVfbnVtYmVyKCksXG4gICAgdGVybmFyeV9kZXB0aDogMFxuICB9O1xuICByZXR1cm4gbmV4dF9mbGFncztcbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKHNvdXJjZV90ZXh0KSB7XG4gIHZhciBiYXNlSW5kZW50U3RyaW5nID0gc291cmNlX3RleHQubWF0Y2goL15bXFx0IF0qLylbMF07XG5cbiAgdGhpcy5fbGFzdF9sYXN0X3RleHQgPSAnJzsgLy8gcHJlLWxhc3QgdG9rZW4gdGV4dFxuICB0aGlzLl9vdXRwdXQgPSBuZXcgT3V0cHV0KHRoaXMuX29wdGlvbnMsIGJhc2VJbmRlbnRTdHJpbmcpO1xuXG4gIC8vIElmIHRlc3RpbmcgdGhlIGlnbm9yZSBkaXJlY3RpdmUsIHN0YXJ0IHdpdGggb3V0cHV0IGRpc2FibGUgc2V0IHRvIHRydWVcbiAgdGhpcy5fb3V0cHV0LnJhdyA9IHRoaXMuX29wdGlvbnMudGVzdF9vdXRwdXRfcmF3O1xuXG5cbiAgLy8gU3RhY2sgb2YgcGFyc2luZy9mb3JtYXR0aW5nIHN0YXRlcywgaW5jbHVkaW5nIE1PREUuXG4gIC8vIFdlIHRva2VuaXplLCBwYXJzZSwgYW5kIG91dHB1dCBpbiBhbiBhbG1vc3QgcHVyZWx5IGEgZm9yd2FyZC1vbmx5IHN0cmVhbSBvZiB0b2tlbiBpbnB1dFxuICAvLyBhbmQgZm9ybWF0dGVkIG91dHB1dC4gIFRoaXMgbWFrZXMgdGhlIGJlYXV0aWZpZXIgbGVzcyBhY2N1cmF0ZSB0aGFuIGZ1bGwgcGFyc2Vyc1xuICAvLyBidXQgYWxzbyBmYXIgbW9yZSB0b2xlcmFudCBvZiBzeW50YXggZXJyb3JzLlxuICAvL1xuICAvLyBGb3IgZXhhbXBsZSwgdGhlIGRlZmF1bHQgbW9kZSBpcyBNT0RFLkJsb2NrU3RhdGVtZW50LiBJZiB3ZSBzZWUgYSAneycgd2UgcHVzaCBhIG5ldyBmcmFtZSBvZiB0eXBlXG4gIC8vIE1PREUuQmxvY2tTdGF0ZW1lbnQgb24gdGhlIHRoZSBzdGFjaywgZXZlbiB0aG91Z2ggaXQgY291bGQgYmUgb2JqZWN0IGxpdGVyYWwuICBJZiB3ZSBsYXRlclxuICAvLyBlbmNvdW50ZXIgYSBcIjpcIiwgd2UnbGwgc3dpdGNoIHRvIHRvIE1PREUuT2JqZWN0TGl0ZXJhbC4gIElmIHdlIHRoZW4gc2VlIGEgXCI7XCIsXG4gIC8vIG1vc3QgZnVsbCBwYXJzZXJzIHdvdWxkIGRpZSwgYnV0IHRoZSBiZWF1dGlmaWVyIGdyYWNlZnVsbHkgZmFsbHMgYmFjayB0b1xuICAvLyBNT0RFLkJsb2NrU3RhdGVtZW50IGFuZCBjb250aW51ZXMgb24uXG4gIHRoaXMuX2ZsYWdfc3RvcmUgPSBbXTtcbiAgdGhpcy5zZXRfbW9kZShNT0RFLkJsb2NrU3RhdGVtZW50KTtcbiAgdmFyIHRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIoc291cmNlX3RleHQsIHRoaXMuX29wdGlvbnMpO1xuICB0aGlzLl90b2tlbnMgPSB0b2tlbml6ZXIudG9rZW5pemUoKTtcbiAgcmV0dXJuIHNvdXJjZV90ZXh0O1xufTtcblxuQmVhdXRpZmllci5wcm90b3R5cGUuYmVhdXRpZnkgPSBmdW5jdGlvbigpIHtcbiAgLy8gaWYgZGlzYWJsZWQsIHJldHVybiB0aGUgaW5wdXQgdW5jaGFuZ2VkLlxuICBpZiAodGhpcy5fb3B0aW9ucy5kaXNhYmxlZCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VfdGV4dDtcbiAgfVxuXG4gIHZhciBzd2VldF9jb2RlO1xuICB2YXIgc291cmNlX3RleHQgPSB0aGlzLl9yZXNldCh0aGlzLl9zb3VyY2VfdGV4dCk7XG5cbiAgdmFyIGVvbCA9IHRoaXMuX29wdGlvbnMuZW9sO1xuICBpZiAodGhpcy5fb3B0aW9ucy5lb2wgPT09ICdhdXRvJykge1xuICAgIGVvbCA9ICdcXG4nO1xuICAgIGlmIChzb3VyY2VfdGV4dCAmJiBhY29ybi5saW5lQnJlYWsudGVzdChzb3VyY2VfdGV4dCB8fCAnJykpIHtcbiAgICAgIGVvbCA9IHNvdXJjZV90ZXh0Lm1hdGNoKGFjb3JuLmxpbmVCcmVhaylbMF07XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnRfdG9rZW4gPSB0aGlzLl90b2tlbnMubmV4dCgpO1xuICB3aGlsZSAoY3VycmVudF90b2tlbikge1xuICAgIHRoaXMuaGFuZGxlX3Rva2VuKGN1cnJlbnRfdG9rZW4pO1xuXG4gICAgdGhpcy5fbGFzdF9sYXN0X3RleHQgPSB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQ7XG4gICAgdGhpcy5fZmxhZ3MubGFzdF90b2tlbiA9IGN1cnJlbnRfdG9rZW47XG5cbiAgICBjdXJyZW50X3Rva2VuID0gdGhpcy5fdG9rZW5zLm5leHQoKTtcbiAgfVxuXG4gIHN3ZWV0X2NvZGUgPSB0aGlzLl9vdXRwdXQuZ2V0X2NvZGUoZW9sKTtcblxuICByZXR1cm4gc3dlZXRfY29kZTtcbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLmhhbmRsZV90b2tlbiA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4sIHByZXNlcnZlX3N0YXRlbWVudF9mbGFncykge1xuICBpZiAoY3VycmVudF90b2tlbi50eXBlID09PSBUT0tFTi5TVEFSVF9FWFBSKSB7XG4gICAgdGhpcy5oYW5kbGVfc3RhcnRfZXhwcihjdXJyZW50X3Rva2VuKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50X3Rva2VuLnR5cGUgPT09IFRPS0VOLkVORF9FWFBSKSB7XG4gICAgdGhpcy5oYW5kbGVfZW5kX2V4cHIoY3VycmVudF90b2tlbik7XG4gIH0gZWxzZSBpZiAoY3VycmVudF90b2tlbi50eXBlID09PSBUT0tFTi5TVEFSVF9CTE9DSykge1xuICAgIHRoaXMuaGFuZGxlX3N0YXJ0X2Jsb2NrKGN1cnJlbnRfdG9rZW4pO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRfdG9rZW4udHlwZSA9PT0gVE9LRU4uRU5EX0JMT0NLKSB7XG4gICAgdGhpcy5oYW5kbGVfZW5kX2Jsb2NrKGN1cnJlbnRfdG9rZW4pO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRfdG9rZW4udHlwZSA9PT0gVE9LRU4uV09SRCkge1xuICAgIHRoaXMuaGFuZGxlX3dvcmQoY3VycmVudF90b2tlbik7XG4gIH0gZWxzZSBpZiAoY3VycmVudF90b2tlbi50eXBlID09PSBUT0tFTi5SRVNFUlZFRCkge1xuICAgIHRoaXMuaGFuZGxlX3dvcmQoY3VycmVudF90b2tlbik7XG4gIH0gZWxzZSBpZiAoY3VycmVudF90b2tlbi50eXBlID09PSBUT0tFTi5TRU1JQ09MT04pIHtcbiAgICB0aGlzLmhhbmRsZV9zZW1pY29sb24oY3VycmVudF90b2tlbik7XG4gIH0gZWxzZSBpZiAoY3VycmVudF90b2tlbi50eXBlID09PSBUT0tFTi5TVFJJTkcpIHtcbiAgICB0aGlzLmhhbmRsZV9zdHJpbmcoY3VycmVudF90b2tlbik7XG4gIH0gZWxzZSBpZiAoY3VycmVudF90b2tlbi50eXBlID09PSBUT0tFTi5FUVVBTFMpIHtcbiAgICB0aGlzLmhhbmRsZV9lcXVhbHMoY3VycmVudF90b2tlbik7XG4gIH0gZWxzZSBpZiAoY3VycmVudF90b2tlbi50eXBlID09PSBUT0tFTi5PUEVSQVRPUikge1xuICAgIHRoaXMuaGFuZGxlX29wZXJhdG9yKGN1cnJlbnRfdG9rZW4pO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRfdG9rZW4udHlwZSA9PT0gVE9LRU4uQ09NTUEpIHtcbiAgICB0aGlzLmhhbmRsZV9jb21tYShjdXJyZW50X3Rva2VuKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50X3Rva2VuLnR5cGUgPT09IFRPS0VOLkJMT0NLX0NPTU1FTlQpIHtcbiAgICB0aGlzLmhhbmRsZV9ibG9ja19jb21tZW50KGN1cnJlbnRfdG9rZW4sIHByZXNlcnZlX3N0YXRlbWVudF9mbGFncyk7XG4gIH0gZWxzZSBpZiAoY3VycmVudF90b2tlbi50eXBlID09PSBUT0tFTi5DT01NRU5UKSB7XG4gICAgdGhpcy5oYW5kbGVfY29tbWVudChjdXJyZW50X3Rva2VuLCBwcmVzZXJ2ZV9zdGF0ZW1lbnRfZmxhZ3MpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRfdG9rZW4udHlwZSA9PT0gVE9LRU4uRE9UKSB7XG4gICAgdGhpcy5oYW5kbGVfZG90KGN1cnJlbnRfdG9rZW4pO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRfdG9rZW4udHlwZSA9PT0gVE9LRU4uRU9GKSB7XG4gICAgdGhpcy5oYW5kbGVfZW9mKGN1cnJlbnRfdG9rZW4pO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRfdG9rZW4udHlwZSA9PT0gVE9LRU4uVU5LTk9XTikge1xuICAgIHRoaXMuaGFuZGxlX3Vua25vd24oY3VycmVudF90b2tlbiwgcHJlc2VydmVfc3RhdGVtZW50X2ZsYWdzKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmhhbmRsZV91bmtub3duKGN1cnJlbnRfdG9rZW4sIHByZXNlcnZlX3N0YXRlbWVudF9mbGFncyk7XG4gIH1cbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLmhhbmRsZV93aGl0ZXNwYWNlX2FuZF9jb21tZW50cyA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4sIHByZXNlcnZlX3N0YXRlbWVudF9mbGFncykge1xuICB2YXIgbmV3bGluZXMgPSBjdXJyZW50X3Rva2VuLm5ld2xpbmVzO1xuICB2YXIga2VlcF93aGl0ZXNwYWNlID0gdGhpcy5fb3B0aW9ucy5rZWVwX2FycmF5X2luZGVudGF0aW9uICYmIGlzX2FycmF5KHRoaXMuX2ZsYWdzLm1vZGUpO1xuXG4gIGlmIChjdXJyZW50X3Rva2VuLmNvbW1lbnRzX2JlZm9yZSkge1xuICAgIHZhciBjb21tZW50X3Rva2VuID0gY3VycmVudF90b2tlbi5jb21tZW50c19iZWZvcmUubmV4dCgpO1xuICAgIHdoaWxlIChjb21tZW50X3Rva2VuKSB7XG4gICAgICAvLyBUaGUgY2xlYW5lc3QgaGFuZGxpbmcgb2YgaW5saW5lIGNvbW1lbnRzIGlzIHRvIHRyZWF0IHRoZW0gYXMgdGhvdWdoIHRoZXkgYXJlbid0IHRoZXJlLlxuICAgICAgLy8gSnVzdCBjb250aW51ZSBmb3JtYXR0aW5nIGFuZCB0aGUgYmVoYXZpb3Igc2hvdWxkIGJlIGxvZ2ljYWwuXG4gICAgICAvLyBBbHNvIGlnbm9yZSB1bmtub3duIHRva2Vucy4gIEFnYWluLCB0aGlzIHNob3VsZCByZXN1bHQgaW4gYmV0dGVyIGJlaGF2aW9yLlxuICAgICAgdGhpcy5oYW5kbGVfd2hpdGVzcGFjZV9hbmRfY29tbWVudHMoY29tbWVudF90b2tlbiwgcHJlc2VydmVfc3RhdGVtZW50X2ZsYWdzKTtcbiAgICAgIHRoaXMuaGFuZGxlX3Rva2VuKGNvbW1lbnRfdG9rZW4sIHByZXNlcnZlX3N0YXRlbWVudF9mbGFncyk7XG4gICAgICBjb21tZW50X3Rva2VuID0gY3VycmVudF90b2tlbi5jb21tZW50c19iZWZvcmUubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZWVwX3doaXRlc3BhY2UpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld2xpbmVzOyBpICs9IDEpIHtcbiAgICAgIHRoaXMucHJpbnRfbmV3bGluZShpID4gMCwgcHJlc2VydmVfc3RhdGVtZW50X2ZsYWdzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMubWF4X3ByZXNlcnZlX25ld2xpbmVzICYmIG5ld2xpbmVzID4gdGhpcy5fb3B0aW9ucy5tYXhfcHJlc2VydmVfbmV3bGluZXMpIHtcbiAgICAgIG5ld2xpbmVzID0gdGhpcy5fb3B0aW9ucy5tYXhfcHJlc2VydmVfbmV3bGluZXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMucHJlc2VydmVfbmV3bGluZXMpIHtcbiAgICAgIGlmIChuZXdsaW5lcyA+IDEpIHtcbiAgICAgICAgdGhpcy5wcmludF9uZXdsaW5lKGZhbHNlLCBwcmVzZXJ2ZV9zdGF0ZW1lbnRfZmxhZ3MpO1xuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IG5ld2xpbmVzOyBqICs9IDEpIHtcbiAgICAgICAgICB0aGlzLnByaW50X25ld2xpbmUodHJ1ZSwgcHJlc2VydmVfc3RhdGVtZW50X2ZsYWdzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59O1xuXG52YXIgbmV3bGluZV9yZXN0cmljdGVkX3Rva2VucyA9IFsnYXN5bmMnLCAnYnJlYWsnLCAnY29udGludWUnLCAncmV0dXJuJywgJ3Rocm93JywgJ3lpZWxkJ107XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLmFsbG93X3dyYXBfb3JfcHJlc2VydmVkX25ld2xpbmUgPSBmdW5jdGlvbihjdXJyZW50X3Rva2VuLCBmb3JjZV9saW5ld3JhcCkge1xuICBmb3JjZV9saW5ld3JhcCA9IChmb3JjZV9saW5ld3JhcCA9PT0gdW5kZWZpbmVkKSA/IGZhbHNlIDogZm9yY2VfbGluZXdyYXA7XG5cbiAgLy8gTmV2ZXIgd3JhcCB0aGUgZmlyc3QgdG9rZW4gb24gYSBsaW5lXG4gIGlmICh0aGlzLl9vdXRwdXQuanVzdF9hZGRlZF9uZXdsaW5lKCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc2hvdWxkUHJlc2VydmVPckZvcmNlID0gKHRoaXMuX29wdGlvbnMucHJlc2VydmVfbmV3bGluZXMgJiYgY3VycmVudF90b2tlbi5uZXdsaW5lcykgfHwgZm9yY2VfbGluZXdyYXA7XG4gIHZhciBvcGVyYXRvckxvZ2ljQXBwbGllcyA9IGluX2FycmF5KHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCwgcG9zaXRpb25hYmxlX29wZXJhdG9ycykgfHxcbiAgICBpbl9hcnJheShjdXJyZW50X3Rva2VuLnRleHQsIHBvc2l0aW9uYWJsZV9vcGVyYXRvcnMpO1xuXG4gIGlmIChvcGVyYXRvckxvZ2ljQXBwbGllcykge1xuICAgIHZhciBzaG91bGRQcmludE9wZXJhdG9yTmV3bGluZSA9IChcbiAgICAgICAgaW5fYXJyYXkodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50ZXh0LCBwb3NpdGlvbmFibGVfb3BlcmF0b3JzKSAmJlxuICAgICAgICBpbl9hcnJheSh0aGlzLl9vcHRpb25zLm9wZXJhdG9yX3Bvc2l0aW9uLCBPUEVSQVRPUl9QT1NJVElPTl9CRUZPUkVfT1JfUFJFU0VSVkUpXG4gICAgICApIHx8XG4gICAgICBpbl9hcnJheShjdXJyZW50X3Rva2VuLnRleHQsIHBvc2l0aW9uYWJsZV9vcGVyYXRvcnMpO1xuICAgIHNob3VsZFByZXNlcnZlT3JGb3JjZSA9IHNob3VsZFByZXNlcnZlT3JGb3JjZSAmJiBzaG91bGRQcmludE9wZXJhdG9yTmV3bGluZTtcbiAgfVxuXG4gIGlmIChzaG91bGRQcmVzZXJ2ZU9yRm9yY2UpIHtcbiAgICB0aGlzLnByaW50X25ld2xpbmUoZmFsc2UsIHRydWUpO1xuICB9IGVsc2UgaWYgKHRoaXMuX29wdGlvbnMud3JhcF9saW5lX2xlbmd0aCkge1xuICAgIGlmIChyZXNlcnZlZF9hcnJheSh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLCBuZXdsaW5lX3Jlc3RyaWN0ZWRfdG9rZW5zKSkge1xuICAgICAgLy8gVGhlc2UgdG9rZW5zIHNob3VsZCBuZXZlciBoYXZlIGEgbmV3bGluZSBpbnNlcnRlZFxuICAgICAgLy8gYmV0d2VlbiB0aGVtIGFuZCB0aGUgZm9sbG93aW5nIGV4cHJlc3Npb24uXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX291dHB1dC5zZXRfd3JhcF9wb2ludCgpO1xuICB9XG59O1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5wcmludF9uZXdsaW5lID0gZnVuY3Rpb24oZm9yY2VfbmV3bGluZSwgcHJlc2VydmVfc3RhdGVtZW50X2ZsYWdzKSB7XG4gIGlmICghcHJlc2VydmVfc3RhdGVtZW50X2ZsYWdzKSB7XG4gICAgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCAhPT0gJzsnICYmIHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCAhPT0gJywnICYmIHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCAhPT0gJz0nICYmICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgIT09IFRPS0VOLk9QRVJBVE9SIHx8IHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCA9PT0gJy0tJyB8fCB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQgPT09ICcrKycpKSB7XG4gICAgICB2YXIgbmV4dF90b2tlbiA9IHRoaXMuX3Rva2Vucy5wZWVrKCk7XG4gICAgICB3aGlsZSAodGhpcy5fZmxhZ3MubW9kZSA9PT0gTU9ERS5TdGF0ZW1lbnQgJiZcbiAgICAgICAgISh0aGlzLl9mbGFncy5pZl9ibG9jayAmJiByZXNlcnZlZF93b3JkKG5leHRfdG9rZW4sICdlbHNlJykpICYmXG4gICAgICAgICF0aGlzLl9mbGFncy5kb19ibG9jaykge1xuICAgICAgICB0aGlzLnJlc3RvcmVfbW9kZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLl9vdXRwdXQuYWRkX25ld19saW5lKGZvcmNlX25ld2xpbmUpKSB7XG4gICAgdGhpcy5fZmxhZ3MubXVsdGlsaW5lX2ZyYW1lID0gdHJ1ZTtcbiAgfVxufTtcblxuQmVhdXRpZmllci5wcm90b3R5cGUucHJpbnRfdG9rZW5fbGluZV9pbmRlbnRhdGlvbiA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4pIHtcbiAgaWYgKHRoaXMuX291dHB1dC5qdXN0X2FkZGVkX25ld2xpbmUoKSkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmtlZXBfYXJyYXlfaW5kZW50YXRpb24gJiZcbiAgICAgIGN1cnJlbnRfdG9rZW4ubmV3bGluZXMgJiZcbiAgICAgIChjdXJyZW50X3Rva2VuLnRleHQgPT09ICdbJyB8fCBpc19hcnJheSh0aGlzLl9mbGFncy5tb2RlKSkpIHtcbiAgICAgIHRoaXMuX291dHB1dC5jdXJyZW50X2xpbmUuc2V0X2luZGVudCgtMSk7XG4gICAgICB0aGlzLl9vdXRwdXQuY3VycmVudF9saW5lLnB1c2goY3VycmVudF90b2tlbi53aGl0ZXNwYWNlX2JlZm9yZSk7XG4gICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9vdXRwdXQuc2V0X2luZGVudCh0aGlzLl9mbGFncy5pbmRlbnRhdGlvbl9sZXZlbCwgdGhpcy5fZmxhZ3MuYWxpZ25tZW50KSkge1xuICAgICAgdGhpcy5fZmxhZ3MubGluZV9pbmRlbnRfbGV2ZWwgPSB0aGlzLl9mbGFncy5pbmRlbnRhdGlvbl9sZXZlbDtcbiAgICB9XG4gIH1cbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLnByaW50X3Rva2VuID0gZnVuY3Rpb24oY3VycmVudF90b2tlbikge1xuICBpZiAodGhpcy5fb3V0cHV0LnJhdykge1xuICAgIHRoaXMuX291dHB1dC5hZGRfcmF3X3Rva2VuKGN1cnJlbnRfdG9rZW4pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLl9vcHRpb25zLmNvbW1hX2ZpcnN0ICYmIGN1cnJlbnRfdG9rZW4ucHJldmlvdXMgJiYgY3VycmVudF90b2tlbi5wcmV2aW91cy50eXBlID09PSBUT0tFTi5DT01NQSAmJlxuICAgIHRoaXMuX291dHB1dC5qdXN0X2FkZGVkX25ld2xpbmUoKSkge1xuICAgIGlmICh0aGlzLl9vdXRwdXQucHJldmlvdXNfbGluZS5sYXN0KCkgPT09ICcsJykge1xuICAgICAgdmFyIHBvcHBlZCA9IHRoaXMuX291dHB1dC5wcmV2aW91c19saW5lLnBvcCgpO1xuICAgICAgLy8gaWYgdGhlIGNvbW1hIHdhcyBhbHJlYWR5IGF0IHRoZSBzdGFydCBvZiB0aGUgbGluZSxcbiAgICAgIC8vIHB1bGwgYmFjayBvbnRvIHRoYXQgbGluZSBhbmQgcmVwcmludCB0aGUgaW5kZW50YXRpb25cbiAgICAgIGlmICh0aGlzLl9vdXRwdXQucHJldmlvdXNfbGluZS5pc19lbXB0eSgpKSB7XG4gICAgICAgIHRoaXMuX291dHB1dC5wcmV2aW91c19saW5lLnB1c2gocG9wcGVkKTtcbiAgICAgICAgdGhpcy5fb3V0cHV0LnRyaW0odHJ1ZSk7XG4gICAgICAgIHRoaXMuX291dHB1dC5jdXJyZW50X2xpbmUucG9wKCk7XG4gICAgICAgIHRoaXMuX291dHB1dC50cmltKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCB0aGUgY29tbWEgaW4gZnJvbnQgb2YgdGhlIG5leHQgdG9rZW5cbiAgICAgIHRoaXMucHJpbnRfdG9rZW5fbGluZV9pbmRlbnRhdGlvbihjdXJyZW50X3Rva2VuKTtcbiAgICAgIHRoaXMuX291dHB1dC5hZGRfdG9rZW4oJywnKTtcbiAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMucHJpbnRfdG9rZW5fbGluZV9pbmRlbnRhdGlvbihjdXJyZW50X3Rva2VuKTtcbiAgdGhpcy5fb3V0cHV0Lm5vbl9icmVha2luZ19zcGFjZSA9IHRydWU7XG4gIHRoaXMuX291dHB1dC5hZGRfdG9rZW4oY3VycmVudF90b2tlbi50ZXh0KTtcbiAgaWYgKHRoaXMuX291dHB1dC5wcmV2aW91c190b2tlbl93cmFwcGVkKSB7XG4gICAgdGhpcy5fZmxhZ3MubXVsdGlsaW5lX2ZyYW1lID0gdHJ1ZTtcbiAgfVxufTtcblxuQmVhdXRpZmllci5wcm90b3R5cGUuaW5kZW50ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2ZsYWdzLmluZGVudGF0aW9uX2xldmVsICs9IDE7XG4gIHRoaXMuX291dHB1dC5zZXRfaW5kZW50KHRoaXMuX2ZsYWdzLmluZGVudGF0aW9uX2xldmVsLCB0aGlzLl9mbGFncy5hbGlnbm1lbnQpO1xufTtcblxuQmVhdXRpZmllci5wcm90b3R5cGUuZGVpbmRlbnQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX2ZsYWdzLmluZGVudGF0aW9uX2xldmVsID4gMCAmJlxuICAgICgoIXRoaXMuX2ZsYWdzLnBhcmVudCkgfHwgdGhpcy5fZmxhZ3MuaW5kZW50YXRpb25fbGV2ZWwgPiB0aGlzLl9mbGFncy5wYXJlbnQuaW5kZW50YXRpb25fbGV2ZWwpKSB7XG4gICAgdGhpcy5fZmxhZ3MuaW5kZW50YXRpb25fbGV2ZWwgLT0gMTtcbiAgICB0aGlzLl9vdXRwdXQuc2V0X2luZGVudCh0aGlzLl9mbGFncy5pbmRlbnRhdGlvbl9sZXZlbCwgdGhpcy5fZmxhZ3MuYWxpZ25tZW50KTtcbiAgfVxufTtcblxuQmVhdXRpZmllci5wcm90b3R5cGUuc2V0X21vZGUgPSBmdW5jdGlvbihtb2RlKSB7XG4gIGlmICh0aGlzLl9mbGFncykge1xuICAgIHRoaXMuX2ZsYWdfc3RvcmUucHVzaCh0aGlzLl9mbGFncyk7XG4gICAgdGhpcy5fcHJldmlvdXNfZmxhZ3MgPSB0aGlzLl9mbGFncztcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9wcmV2aW91c19mbGFncyA9IHRoaXMuY3JlYXRlX2ZsYWdzKG51bGwsIG1vZGUpO1xuICB9XG5cbiAgdGhpcy5fZmxhZ3MgPSB0aGlzLmNyZWF0ZV9mbGFncyh0aGlzLl9wcmV2aW91c19mbGFncywgbW9kZSk7XG4gIHRoaXMuX291dHB1dC5zZXRfaW5kZW50KHRoaXMuX2ZsYWdzLmluZGVudGF0aW9uX2xldmVsLCB0aGlzLl9mbGFncy5hbGlnbm1lbnQpO1xufTtcblxuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5yZXN0b3JlX21vZGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX2ZsYWdfc3RvcmUubGVuZ3RoID4gMCkge1xuICAgIHRoaXMuX3ByZXZpb3VzX2ZsYWdzID0gdGhpcy5fZmxhZ3M7XG4gICAgdGhpcy5fZmxhZ3MgPSB0aGlzLl9mbGFnX3N0b3JlLnBvcCgpO1xuICAgIGlmICh0aGlzLl9wcmV2aW91c19mbGFncy5tb2RlID09PSBNT0RFLlN0YXRlbWVudCkge1xuICAgICAgcmVtb3ZlX3JlZHVuZGFudF9pbmRlbnRhdGlvbih0aGlzLl9vdXRwdXQsIHRoaXMuX3ByZXZpb3VzX2ZsYWdzKTtcbiAgICB9XG4gICAgdGhpcy5fb3V0cHV0LnNldF9pbmRlbnQodGhpcy5fZmxhZ3MuaW5kZW50YXRpb25fbGV2ZWwsIHRoaXMuX2ZsYWdzLmFsaWdubWVudCk7XG4gIH1cbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLnN0YXJ0X29mX29iamVjdF9wcm9wZXJ0eSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fZmxhZ3MucGFyZW50Lm1vZGUgPT09IE1PREUuT2JqZWN0TGl0ZXJhbCAmJiB0aGlzLl9mbGFncy5tb2RlID09PSBNT0RFLlN0YXRlbWVudCAmJiAoXG4gICAgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCA9PT0gJzonICYmIHRoaXMuX2ZsYWdzLnRlcm5hcnlfZGVwdGggPT09IDApIHx8IChyZXNlcnZlZF9hcnJheSh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLCBbJ2dldCcsICdzZXQnXSkpKTtcbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLnN0YXJ0X29mX3N0YXRlbWVudCA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4pIHtcbiAgdmFyIHN0YXJ0ID0gZmFsc2U7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgcmVzZXJ2ZWRfYXJyYXkodGhpcy5fZmxhZ3MubGFzdF90b2tlbiwgWyd2YXInLCAnbGV0JywgJ2NvbnN0J10pICYmIGN1cnJlbnRfdG9rZW4udHlwZSA9PT0gVE9LRU4uV09SRDtcbiAgc3RhcnQgPSBzdGFydCB8fCByZXNlcnZlZF93b3JkKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4sICdkbycpO1xuICBzdGFydCA9IHN0YXJ0IHx8ICghKHRoaXMuX2ZsYWdzLnBhcmVudC5tb2RlID09PSBNT0RFLk9iamVjdExpdGVyYWwgJiYgdGhpcy5fZmxhZ3MubW9kZSA9PT0gTU9ERS5TdGF0ZW1lbnQpKSAmJiByZXNlcnZlZF9hcnJheSh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLCBuZXdsaW5lX3Jlc3RyaWN0ZWRfdG9rZW5zKSAmJiAhY3VycmVudF90b2tlbi5uZXdsaW5lcztcbiAgc3RhcnQgPSBzdGFydCB8fCByZXNlcnZlZF93b3JkKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4sICdlbHNlJykgJiZcbiAgICAhKHJlc2VydmVkX3dvcmQoY3VycmVudF90b2tlbiwgJ2lmJykgJiYgIWN1cnJlbnRfdG9rZW4uY29tbWVudHNfYmVmb3JlKTtcbiAgc3RhcnQgPSBzdGFydCB8fCAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5FTkRfRVhQUiAmJiAodGhpcy5fcHJldmlvdXNfZmxhZ3MubW9kZSA9PT0gTU9ERS5Gb3JJbml0aWFsaXplciB8fCB0aGlzLl9wcmV2aW91c19mbGFncy5tb2RlID09PSBNT0RFLkNvbmRpdGlvbmFsKSk7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uV09SRCAmJiB0aGlzLl9mbGFncy5tb2RlID09PSBNT0RFLkJsb2NrU3RhdGVtZW50ICYmXG4gICAgIXRoaXMuX2ZsYWdzLmluX2Nhc2UgJiZcbiAgICAhKGN1cnJlbnRfdG9rZW4udGV4dCA9PT0gJy0tJyB8fCBjdXJyZW50X3Rva2VuLnRleHQgPT09ICcrKycpICYmXG4gICAgdGhpcy5fbGFzdF9sYXN0X3RleHQgIT09ICdmdW5jdGlvbicgJiZcbiAgICBjdXJyZW50X3Rva2VuLnR5cGUgIT09IFRPS0VOLldPUkQgJiYgY3VycmVudF90b2tlbi50eXBlICE9PSBUT0tFTi5SRVNFUlZFRCk7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgKHRoaXMuX2ZsYWdzLm1vZGUgPT09IE1PREUuT2JqZWN0TGl0ZXJhbCAmJiAoXG4gICAgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCA9PT0gJzonICYmIHRoaXMuX2ZsYWdzLnRlcm5hcnlfZGVwdGggPT09IDApIHx8IHJlc2VydmVkX2FycmF5KHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4sIFsnZ2V0JywgJ3NldCddKSkpO1xuXG4gIGlmIChzdGFydCkge1xuICAgIHRoaXMuc2V0X21vZGUoTU9ERS5TdGF0ZW1lbnQpO1xuICAgIHRoaXMuaW5kZW50KCk7XG5cbiAgICB0aGlzLmhhbmRsZV93aGl0ZXNwYWNlX2FuZF9jb21tZW50cyhjdXJyZW50X3Rva2VuLCB0cnVlKTtcblxuICAgIC8vIElzc3VlICMyNzY6XG4gICAgLy8gSWYgc3RhcnRpbmcgYSBuZXcgc3RhdGVtZW50IHdpdGggW2lmLCBmb3IsIHdoaWxlLCBkb10sIHB1c2ggdG8gYSBuZXcgbGluZS5cbiAgICAvLyBpZiAoYSkgaWYgKGIpIGlmKGMpIGQoKTsgZWxzZSBlKCk7IGVsc2UgZigpO1xuICAgIGlmICghdGhpcy5zdGFydF9vZl9vYmplY3RfcHJvcGVydHkoKSkge1xuICAgICAgdGhpcy5hbGxvd193cmFwX29yX3ByZXNlcnZlZF9uZXdsaW5lKGN1cnJlbnRfdG9rZW4sXG4gICAgICAgIHJlc2VydmVkX2FycmF5KGN1cnJlbnRfdG9rZW4sIFsnZG8nLCAnZm9yJywgJ2lmJywgJ3doaWxlJ10pKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuQmVhdXRpZmllci5wcm90b3R5cGUuaGFuZGxlX3N0YXJ0X2V4cHIgPSBmdW5jdGlvbihjdXJyZW50X3Rva2VuKSB7XG4gIC8vIFRoZSBjb25kaXRpb25hbCBzdGFydHMgdGhlIHN0YXRlbWVudCBpZiBhcHByb3ByaWF0ZS5cbiAgaWYgKCF0aGlzLnN0YXJ0X29mX3N0YXRlbWVudChjdXJyZW50X3Rva2VuKSkge1xuICAgIHRoaXMuaGFuZGxlX3doaXRlc3BhY2VfYW5kX2NvbW1lbnRzKGN1cnJlbnRfdG9rZW4pO1xuICB9XG5cbiAgdmFyIG5leHRfbW9kZSA9IE1PREUuRXhwcmVzc2lvbjtcbiAgaWYgKGN1cnJlbnRfdG9rZW4udGV4dCA9PT0gJ1snKSB7XG5cbiAgICBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5XT1JEIHx8IHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCA9PT0gJyknKSB7XG4gICAgICAvLyB0aGlzIGlzIGFycmF5IGluZGV4IHNwZWNpZmllciwgYnJlYWsgaW1tZWRpYXRlbHlcbiAgICAgIC8vIGFbeF0sIGZuKClbeF1cbiAgICAgIGlmIChyZXNlcnZlZF9hcnJheSh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLCBsaW5lX3N0YXJ0ZXJzKSkge1xuICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJpbnRfdG9rZW4oY3VycmVudF90b2tlbik7XG4gICAgICB0aGlzLnNldF9tb2RlKG5leHRfbW9kZSk7XG4gICAgICB0aGlzLmluZGVudCgpO1xuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc3BhY2VfaW5fcGFyZW4pIHtcbiAgICAgICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dF9tb2RlID0gTU9ERS5BcnJheUxpdGVyYWw7XG4gICAgaWYgKGlzX2FycmF5KHRoaXMuX2ZsYWdzLm1vZGUpKSB7XG4gICAgICBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50ZXh0ID09PSAnWycgfHxcbiAgICAgICAgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCA9PT0gJywnICYmICh0aGlzLl9sYXN0X2xhc3RfdGV4dCA9PT0gJ10nIHx8IHRoaXMuX2xhc3RfbGFzdF90ZXh0ID09PSAnfScpKSkge1xuICAgICAgICAvLyBdLCBbIGdvZXMgdG8gbmV3IGxpbmVcbiAgICAgICAgLy8gfSwgWyBnb2VzIHRvIG5ldyBsaW5lXG4gICAgICAgIGlmICghdGhpcy5fb3B0aW9ucy5rZWVwX2FycmF5X2luZGVudGF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5wcmludF9uZXdsaW5lKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWluX2FycmF5KHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSwgW1RPS0VOLlNUQVJUX0VYUFIsIFRPS0VOLkVORF9FWFBSLCBUT0tFTi5XT1JELCBUT0tFTi5PUEVSQVRPUiwgVE9LRU4uRE9UXSkpIHtcbiAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5SRVNFUlZFRCkge1xuICAgICAgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCA9PT0gJ2ZvcicpIHtcbiAgICAgICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRoaXMuX29wdGlvbnMuc3BhY2VfYmVmb3JlX2NvbmRpdGlvbmFsO1xuICAgICAgICBuZXh0X21vZGUgPSBNT0RFLkZvckluaXRpYWxpemVyO1xuICAgICAgfSBlbHNlIGlmIChpbl9hcnJheSh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQsIFsnaWYnLCAnd2hpbGUnLCAnc3dpdGNoJ10pKSB7XG4gICAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0aGlzLl9vcHRpb25zLnNwYWNlX2JlZm9yZV9jb25kaXRpb25hbDtcbiAgICAgICAgbmV4dF9tb2RlID0gTU9ERS5Db25kaXRpb25hbDtcbiAgICAgIH0gZWxzZSBpZiAoaW5fYXJyYXkodGhpcy5fZmxhZ3MubGFzdF93b3JkLCBbJ2F3YWl0JywgJ2FzeW5jJ10pKSB7XG4gICAgICAgIC8vIFNob3VsZCBiZSBhIHNwYWNlIGJldHdlZW4gYXdhaXQgYW5kIGFuIElJRkUsIG9yIGFzeW5jIGFuZCBhbiBhcnJvdyBmdW5jdGlvblxuICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50ZXh0ID09PSAnaW1wb3J0JyAmJiBjdXJyZW50X3Rva2VuLndoaXRlc3BhY2VfYmVmb3JlID09PSAnJykge1xuICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGluX2FycmF5KHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCwgbGluZV9zdGFydGVycykgfHwgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50ZXh0ID09PSAnY2F0Y2gnKSB7XG4gICAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5FUVVBTFMgfHwgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5PUEVSQVRPUikge1xuICAgICAgLy8gU3VwcG9ydCBvZiB0aGlzIGtpbmQgb2YgbmV3bGluZSBwcmVzZXJ2YXRpb24uXG4gICAgICAvLyBhID0gKGIgJiZcbiAgICAgIC8vICAgICAoYyB8fCBkKSk7XG4gICAgICBpZiAoIXRoaXMuc3RhcnRfb2Zfb2JqZWN0X3Byb3BlcnR5KCkpIHtcbiAgICAgICAgdGhpcy5hbGxvd193cmFwX29yX3ByZXNlcnZlZF9uZXdsaW5lKGN1cnJlbnRfdG9rZW4pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5XT1JEKSB7XG4gICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gZmFsc2U7XG5cbiAgICAgIC8vIGZ1bmN0aW9uIG5hbWUoKSB2cyBmdW5jdGlvbiBuYW1lICgpXG4gICAgICAvLyBmdW5jdGlvbiogbmFtZSgpIHZzIGZ1bmN0aW9uKiBuYW1lICgpXG4gICAgICAvLyBhc3luYyBuYW1lKCkgdnMgYXN5bmMgbmFtZSAoKVxuICAgICAgLy8gSW4gRVM2LCB5b3UgY2FuIGFsc28gZGVmaW5lIHRoZSBtZXRob2QgcHJvcGVydGllcyBvZiBhbiBvYmplY3RcbiAgICAgIC8vIHZhciBvYmogPSB7YTogZnVuY3Rpb24oKSB7fX1cbiAgICAgIC8vIEl0IGNhbiBiZSBhYmJyZXZpYXRlZFxuICAgICAgLy8gdmFyIG9iaiA9IHthKCkge319XG4gICAgICAvLyB2YXIgb2JqID0geyBhKCkge319IHZzIHZhciBvYmogPSB7IGEgKCkge319XG4gICAgICAvLyB2YXIgb2JqID0geyAqIGEoKSB7fX0gdnMgdmFyIG9iaiA9IHsgKiBhICgpIHt9fVxuICAgICAgdmFyIHBlZWtfYmFja190d28gPSB0aGlzLl90b2tlbnMucGVlaygtMyk7XG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5zcGFjZV9hZnRlcl9uYW1lZF9mdW5jdGlvbiAmJiBwZWVrX2JhY2tfdHdvKSB7XG4gICAgICAgIC8vIHBlZWsgc3RhcnRzIGF0IG5leHQgY2hhcmFjdGVyIHNvIC0xIGlzIGN1cnJlbnQgdG9rZW5cbiAgICAgICAgdmFyIHBlZWtfYmFja190aHJlZSA9IHRoaXMuX3Rva2Vucy5wZWVrKC00KTtcbiAgICAgICAgaWYgKHJlc2VydmVkX2FycmF5KHBlZWtfYmFja190d28sIFsnYXN5bmMnLCAnZnVuY3Rpb24nXSkgfHxcbiAgICAgICAgICAocGVla19iYWNrX3R3by50ZXh0ID09PSAnKicgJiYgcmVzZXJ2ZWRfYXJyYXkocGVla19iYWNrX3RocmVlLCBbJ2FzeW5jJywgJ2Z1bmN0aW9uJ10pKSkge1xuICAgICAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ZsYWdzLm1vZGUgPT09IE1PREUuT2JqZWN0TGl0ZXJhbCkge1xuICAgICAgICAgIGlmICgocGVla19iYWNrX3R3by50ZXh0ID09PSAneycgfHwgcGVla19iYWNrX3R3by50ZXh0ID09PSAnLCcpIHx8XG4gICAgICAgICAgICAocGVla19iYWNrX3R3by50ZXh0ID09PSAnKicgJiYgKHBlZWtfYmFja190aHJlZS50ZXh0ID09PSAneycgfHwgcGVla19iYWNrX3RocmVlLnRleHQgPT09ICcsJykpKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZmxhZ3MucGFyZW50ICYmIHRoaXMuX2ZsYWdzLnBhcmVudC5jbGFzc19zdGFydF9ibG9jaykge1xuICAgICAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN1cHBvcnQgcHJlc2VydmluZyB3cmFwcGVkIGFycm93IGZ1bmN0aW9uIGV4cHJlc3Npb25zXG4gICAgICAvLyBhLmIoJ2MnLFxuICAgICAgLy8gICAgICgpID0+IGQuZVxuICAgICAgLy8gKVxuICAgICAgdGhpcy5hbGxvd193cmFwX29yX3ByZXNlcnZlZF9uZXdsaW5lKGN1cnJlbnRfdG9rZW4pO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uKCkgdnMgZnVuY3Rpb24gKClcbiAgICAvLyB5aWVsZCooKSB2cyB5aWVsZCogKClcbiAgICAvLyBmdW5jdGlvbiooKSB2cyBmdW5jdGlvbiogKClcbiAgICBpZiAoKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uUkVTRVJWRUQgJiYgKHRoaXMuX2ZsYWdzLmxhc3Rfd29yZCA9PT0gJ2Z1bmN0aW9uJyB8fCB0aGlzLl9mbGFncy5sYXN0X3dvcmQgPT09ICd0eXBlb2YnKSkgfHxcbiAgICAgICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQgPT09ICcqJyAmJlxuICAgICAgICAoaW5fYXJyYXkodGhpcy5fbGFzdF9sYXN0X3RleHQsIFsnZnVuY3Rpb24nLCAneWllbGQnXSkgfHxcbiAgICAgICAgICAodGhpcy5fZmxhZ3MubW9kZSA9PT0gTU9ERS5PYmplY3RMaXRlcmFsICYmIGluX2FycmF5KHRoaXMuX2xhc3RfbGFzdF90ZXh0LCBbJ3snLCAnLCddKSkpKSkge1xuICAgICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRoaXMuX29wdGlvbnMuc3BhY2VfYWZ0ZXJfYW5vbl9mdW5jdGlvbjtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50ZXh0ID09PSAnOycgfHwgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5TVEFSVF9CTE9DSykge1xuICAgIHRoaXMucHJpbnRfbmV3bGluZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uRU5EX0VYUFIgfHwgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5TVEFSVF9FWFBSIHx8IHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uRU5EX0JMT0NLIHx8IHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCA9PT0gJy4nIHx8IHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uQ09NTUEpIHtcbiAgICAvLyBkbyBub3RoaW5nIG9uICgoIGFuZCApKCBhbmQgXVsgYW5kIF0oIGFuZCAuKFxuICAgIC8vIFRPRE86IENvbnNpZGVyIHdoZXRoZXIgZm9yY2luZyB0aGlzIGlzIHJlcXVpcmVkLiAgUmV2aWV3IGZhaWxpbmcgdGVzdHMgd2hlbiByZW1vdmVkLlxuICAgIHRoaXMuYWxsb3dfd3JhcF9vcl9wcmVzZXJ2ZWRfbmV3bGluZShjdXJyZW50X3Rva2VuLCBjdXJyZW50X3Rva2VuLm5ld2xpbmVzKTtcbiAgfVxuXG4gIHRoaXMucHJpbnRfdG9rZW4oY3VycmVudF90b2tlbik7XG4gIHRoaXMuc2V0X21vZGUobmV4dF9tb2RlKTtcbiAgaWYgKHRoaXMuX29wdGlvbnMuc3BhY2VfaW5fcGFyZW4pIHtcbiAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIEluIGFsbCBjYXNlcywgaWYgd2UgbmV3bGluZSB3aGlsZSBpbnNpZGUgYW4gZXhwcmVzc2lvbiBpdCBzaG91bGQgYmUgaW5kZW50ZWQuXG4gIHRoaXMuaW5kZW50KCk7XG59O1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5oYW5kbGVfZW5kX2V4cHIgPSBmdW5jdGlvbihjdXJyZW50X3Rva2VuKSB7XG4gIC8vIHN0YXRlbWVudHMgaW5zaWRlIGV4cHJlc3Npb25zIGFyZSBub3QgdmFsaWQgc3ludGF4LCBidXQuLi5cbiAgLy8gc3RhdGVtZW50cyBtdXN0IGFsbCBiZSBjbG9zZWQgd2hlbiB0aGVpciBjb250YWluZXIgY2xvc2VzXG4gIHdoaWxlICh0aGlzLl9mbGFncy5tb2RlID09PSBNT0RFLlN0YXRlbWVudCkge1xuICAgIHRoaXMucmVzdG9yZV9tb2RlKCk7XG4gIH1cblxuICB0aGlzLmhhbmRsZV93aGl0ZXNwYWNlX2FuZF9jb21tZW50cyhjdXJyZW50X3Rva2VuKTtcblxuICBpZiAodGhpcy5fZmxhZ3MubXVsdGlsaW5lX2ZyYW1lKSB7XG4gICAgdGhpcy5hbGxvd193cmFwX29yX3ByZXNlcnZlZF9uZXdsaW5lKGN1cnJlbnRfdG9rZW4sXG4gICAgICBjdXJyZW50X3Rva2VuLnRleHQgPT09ICddJyAmJiBpc19hcnJheSh0aGlzLl9mbGFncy5tb2RlKSAmJiAhdGhpcy5fb3B0aW9ucy5rZWVwX2FycmF5X2luZGVudGF0aW9uKTtcbiAgfVxuXG4gIGlmICh0aGlzLl9vcHRpb25zLnNwYWNlX2luX3BhcmVuKSB7XG4gICAgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uU1RBUlRfRVhQUiAmJiAhdGhpcy5fb3B0aW9ucy5zcGFjZV9pbl9lbXB0eV9wYXJlbikge1xuICAgICAgLy8gKCkgW10gbm8gaW5uZXIgc3BhY2UgaW4gZW1wdHkgcGFyZW5zIGxpa2UgdGhlc2UsIGV2ZXIsIHJlZiAjMzIwXG4gICAgICB0aGlzLl9vdXRwdXQudHJpbSgpO1xuICAgICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgdGhpcy5kZWluZGVudCgpO1xuICB0aGlzLnByaW50X3Rva2VuKGN1cnJlbnRfdG9rZW4pO1xuICB0aGlzLnJlc3RvcmVfbW9kZSgpO1xuXG4gIHJlbW92ZV9yZWR1bmRhbnRfaW5kZW50YXRpb24odGhpcy5fb3V0cHV0LCB0aGlzLl9wcmV2aW91c19mbGFncyk7XG5cbiAgLy8gZG8ge30gd2hpbGUgKCkgLy8gbm8gc3RhdGVtZW50IHJlcXVpcmVkIGFmdGVyXG4gIGlmICh0aGlzLl9mbGFncy5kb193aGlsZSAmJiB0aGlzLl9wcmV2aW91c19mbGFncy5tb2RlID09PSBNT0RFLkNvbmRpdGlvbmFsKSB7XG4gICAgdGhpcy5fcHJldmlvdXNfZmxhZ3MubW9kZSA9IE1PREUuRXhwcmVzc2lvbjtcbiAgICB0aGlzLl9mbGFncy5kb19ibG9jayA9IGZhbHNlO1xuICAgIHRoaXMuX2ZsYWdzLmRvX3doaWxlID0gZmFsc2U7XG5cbiAgfVxufTtcblxuQmVhdXRpZmllci5wcm90b3R5cGUuaGFuZGxlX3N0YXJ0X2Jsb2NrID0gZnVuY3Rpb24oY3VycmVudF90b2tlbikge1xuICB0aGlzLmhhbmRsZV93aGl0ZXNwYWNlX2FuZF9jb21tZW50cyhjdXJyZW50X3Rva2VuKTtcblxuICAvLyBDaGVjayBpZiB0aGlzIGlzIHNob3VsZCBiZSB0cmVhdGVkIGFzIGEgT2JqZWN0TGl0ZXJhbFxuICB2YXIgbmV4dF90b2tlbiA9IHRoaXMuX3Rva2Vucy5wZWVrKCk7XG4gIHZhciBzZWNvbmRfdG9rZW4gPSB0aGlzLl90b2tlbnMucGVlaygxKTtcbiAgaWYgKHRoaXMuX2ZsYWdzLmxhc3Rfd29yZCA9PT0gJ3N3aXRjaCcgJiYgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5FTkRfRVhQUikge1xuICAgIHRoaXMuc2V0X21vZGUoTU9ERS5CbG9ja1N0YXRlbWVudCk7XG4gICAgdGhpcy5fZmxhZ3MuaW5fY2FzZV9zdGF0ZW1lbnQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHRoaXMuX2ZsYWdzLmNhc2VfYm9keSkge1xuICAgIHRoaXMuc2V0X21vZGUoTU9ERS5CbG9ja1N0YXRlbWVudCk7XG4gIH0gZWxzZSBpZiAoc2Vjb25kX3Rva2VuICYmIChcbiAgICAgIChpbl9hcnJheShzZWNvbmRfdG9rZW4udGV4dCwgWyc6JywgJywnXSkgJiYgaW5fYXJyYXkobmV4dF90b2tlbi50eXBlLCBbVE9LRU4uU1RSSU5HLCBUT0tFTi5XT1JELCBUT0tFTi5SRVNFUlZFRF0pKSB8fFxuICAgICAgKGluX2FycmF5KG5leHRfdG9rZW4udGV4dCwgWydnZXQnLCAnc2V0JywgJy4uLiddKSAmJiBpbl9hcnJheShzZWNvbmRfdG9rZW4udHlwZSwgW1RPS0VOLldPUkQsIFRPS0VOLlJFU0VSVkVEXSkpXG4gICAgKSkge1xuICAgIC8vIFdlIGRvbid0IHN1cHBvcnQgVHlwZVNjcmlwdCxidXQgd2UgZGlkbid0IGJyZWFrIGl0IGZvciBhIHZlcnkgbG9uZyB0aW1lLlxuICAgIC8vIFdlJ2xsIHRyeSB0byBrZWVwIG5vdCBicmVha2luZyBpdC5cbiAgICBpZiAoaW5fYXJyYXkodGhpcy5fbGFzdF9sYXN0X3RleHQsIFsnY2xhc3MnLCAnaW50ZXJmYWNlJ10pICYmICFpbl9hcnJheShzZWNvbmRfdG9rZW4udGV4dCwgWyc6JywgJywnXSkpIHtcbiAgICAgIHRoaXMuc2V0X21vZGUoTU9ERS5CbG9ja1N0YXRlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0X21vZGUoTU9ERS5PYmplY3RMaXRlcmFsKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5PUEVSQVRPUiAmJiB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQgPT09ICc9PicpIHtcbiAgICAvLyBhcnJvdyBmdW5jdGlvbjogKHBhcmFtMSwgcGFyYW1OKSA9PiB7IHN0YXRlbWVudHMgfVxuICAgIHRoaXMuc2V0X21vZGUoTU9ERS5CbG9ja1N0YXRlbWVudCk7XG4gIH0gZWxzZSBpZiAoaW5fYXJyYXkodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlLCBbVE9LRU4uRVFVQUxTLCBUT0tFTi5TVEFSVF9FWFBSLCBUT0tFTi5DT01NQSwgVE9LRU4uT1BFUkFUT1JdKSB8fFxuICAgIHJlc2VydmVkX2FycmF5KHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4sIFsncmV0dXJuJywgJ3Rocm93JywgJ2ltcG9ydCcsICdkZWZhdWx0J10pXG4gICkge1xuICAgIC8vIERldGVjdGluZyBzaG9ydGhhbmQgZnVuY3Rpb24gc3ludGF4IGlzIGRpZmZpY3VsdCBieSBzY2FubmluZyBmb3J3YXJkLFxuICAgIC8vICAgICBzbyBjaGVjayB0aGUgc3Vycm91bmRpbmcgY29udGV4dC5cbiAgICAvLyBJZiB0aGUgYmxvY2sgaXMgYmVpbmcgcmV0dXJuZWQsIGltcG9ydGVkLCBleHBvcnQgZGVmYXVsdCwgcGFzc2VkIGFzIGFyZyxcbiAgICAvLyAgICAgYXNzaWduZWQgd2l0aCA9IG9yIGFzc2lnbmVkIGluIGEgbmVzdGVkIG9iamVjdCwgdHJlYXQgYXMgYW4gT2JqZWN0TGl0ZXJhbC5cbiAgICB0aGlzLnNldF9tb2RlKE1PREUuT2JqZWN0TGl0ZXJhbCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZXRfbW9kZShNT0RFLkJsb2NrU3RhdGVtZW50KTtcbiAgfVxuXG4gIGlmICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuKSB7XG4gICAgaWYgKHJlc2VydmVkX2FycmF5KHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4ucHJldmlvdXMsIFsnY2xhc3MnLCAnZXh0ZW5kcyddKSkge1xuICAgICAgdGhpcy5fZmxhZ3MuY2xhc3Nfc3RhcnRfYmxvY2sgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbXB0eV9icmFjZXMgPSAhbmV4dF90b2tlbi5jb21tZW50c19iZWZvcmUgJiYgbmV4dF90b2tlbi50ZXh0ID09PSAnfSc7XG4gIHZhciBlbXB0eV9hbm9ueW1vdXNfZnVuY3Rpb24gPSBlbXB0eV9icmFjZXMgJiYgdGhpcy5fZmxhZ3MubGFzdF93b3JkID09PSAnZnVuY3Rpb24nICYmXG4gICAgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5FTkRfRVhQUjtcblxuICBpZiAodGhpcy5fb3B0aW9ucy5icmFjZV9wcmVzZXJ2ZV9pbmxpbmUpIC8vIGNoZWNrIGZvciBpbmxpbmUsIHNldCBpbmxpbmVfZnJhbWUgaWYgc29cbiAge1xuICAgIC8vIHNlYXJjaCBmb3J3YXJkIGZvciBhIG5ld2xpbmUgd2FudGVkIGluc2lkZSB0aGlzIGJsb2NrXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgY2hlY2tfdG9rZW4gPSBudWxsO1xuICAgIHRoaXMuX2ZsYWdzLmlubGluZV9mcmFtZSA9IHRydWU7XG4gICAgZG8ge1xuICAgICAgaW5kZXggKz0gMTtcbiAgICAgIGNoZWNrX3Rva2VuID0gdGhpcy5fdG9rZW5zLnBlZWsoaW5kZXggLSAxKTtcbiAgICAgIGlmIChjaGVja190b2tlbi5uZXdsaW5lcykge1xuICAgICAgICB0aGlzLl9mbGFncy5pbmxpbmVfZnJhbWUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoY2hlY2tfdG9rZW4udHlwZSAhPT0gVE9LRU4uRU9GICYmXG4gICAgICAhKGNoZWNrX3Rva2VuLnR5cGUgPT09IFRPS0VOLkVORF9CTE9DSyAmJiBjaGVja190b2tlbi5vcGVuZWQgPT09IGN1cnJlbnRfdG9rZW4pKTtcbiAgfVxuXG4gIGlmICgodGhpcy5fb3B0aW9ucy5icmFjZV9zdHlsZSA9PT0gXCJleHBhbmRcIiB8fFxuICAgICAgKHRoaXMuX29wdGlvbnMuYnJhY2Vfc3R5bGUgPT09IFwibm9uZVwiICYmIGN1cnJlbnRfdG9rZW4ubmV3bGluZXMpKSAmJlxuICAgICF0aGlzLl9mbGFncy5pbmxpbmVfZnJhbWUpIHtcbiAgICBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlICE9PSBUT0tFTi5PUEVSQVRPUiAmJlxuICAgICAgKGVtcHR5X2Fub255bW91c19mdW5jdGlvbiB8fFxuICAgICAgICB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLkVRVUFMUyB8fFxuICAgICAgICAocmVzZXJ2ZWRfYXJyYXkodGhpcy5fZmxhZ3MubGFzdF90b2tlbiwgc3BlY2lhbF93b3JkcykgJiYgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50ZXh0ICE9PSAnZWxzZScpKSkge1xuICAgICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJpbnRfbmV3bGluZShmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuICB9IGVsc2UgeyAvLyBjb2xsYXBzZSB8fCBpbmxpbmVfZnJhbWVcbiAgICBpZiAoaXNfYXJyYXkodGhpcy5fcHJldmlvdXNfZmxhZ3MubW9kZSkgJiYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uU1RBUlRfRVhQUiB8fCB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLkNPTU1BKSkge1xuICAgICAgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uQ09NTUEgfHwgdGhpcy5fb3B0aW9ucy5zcGFjZV9pbl9wYXJlbikge1xuICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uQ09NTUEgfHwgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uU1RBUlRfRVhQUiAmJiB0aGlzLl9mbGFncy5pbmxpbmVfZnJhbWUpKSB7XG4gICAgICAgIHRoaXMuYWxsb3dfd3JhcF9vcl9wcmVzZXJ2ZWRfbmV3bGluZShjdXJyZW50X3Rva2VuKTtcbiAgICAgICAgdGhpcy5fcHJldmlvdXNfZmxhZ3MubXVsdGlsaW5lX2ZyYW1lID0gdGhpcy5fcHJldmlvdXNfZmxhZ3MubXVsdGlsaW5lX2ZyYW1lIHx8IHRoaXMuX2ZsYWdzLm11bHRpbGluZV9mcmFtZTtcbiAgICAgICAgdGhpcy5fZmxhZ3MubXVsdGlsaW5lX2ZyYW1lID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgIT09IFRPS0VOLk9QRVJBVE9SICYmIHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSAhPT0gVE9LRU4uU1RBUlRfRVhQUikge1xuICAgICAgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uU1RBUlRfQkxPQ0sgJiYgIXRoaXMuX2ZsYWdzLmlubGluZV9mcmFtZSkge1xuICAgICAgICB0aGlzLnByaW50X25ld2xpbmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB0aGlzLnByaW50X3Rva2VuKGN1cnJlbnRfdG9rZW4pO1xuICB0aGlzLmluZGVudCgpO1xuXG4gIC8vIEV4Y2VwdCBmb3Igc3BlY2lmaWMgY2FzZXMsIG9wZW4gYnJhY2VzIGFyZSBmb2xsb3dlZCBieSBhIG5ldyBsaW5lLlxuICBpZiAoIWVtcHR5X2JyYWNlcyAmJiAhKHRoaXMuX29wdGlvbnMuYnJhY2VfcHJlc2VydmVfaW5saW5lICYmIHRoaXMuX2ZsYWdzLmlubGluZV9mcmFtZSkpIHtcbiAgICB0aGlzLnByaW50X25ld2xpbmUoKTtcbiAgfVxufTtcblxuQmVhdXRpZmllci5wcm90b3R5cGUuaGFuZGxlX2VuZF9ibG9jayA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4pIHtcbiAgLy8gc3RhdGVtZW50cyBtdXN0IGFsbCBiZSBjbG9zZWQgd2hlbiB0aGVpciBjb250YWluZXIgY2xvc2VzXG4gIHRoaXMuaGFuZGxlX3doaXRlc3BhY2VfYW5kX2NvbW1lbnRzKGN1cnJlbnRfdG9rZW4pO1xuXG4gIHdoaWxlICh0aGlzLl9mbGFncy5tb2RlID09PSBNT0RFLlN0YXRlbWVudCkge1xuICAgIHRoaXMucmVzdG9yZV9tb2RlKCk7XG4gIH1cblxuICB2YXIgZW1wdHlfYnJhY2VzID0gdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5TVEFSVF9CTE9DSztcblxuICBpZiAodGhpcy5fZmxhZ3MuaW5saW5lX2ZyYW1lICYmICFlbXB0eV9icmFjZXMpIHsgLy8gdHJ5IGlubGluZV9mcmFtZSAob25seSBzZXQgaWYgdGhpcy5fb3B0aW9ucy5icmFjZXMtcHJlc2VydmUtaW5saW5lKSBmaXJzdFxuICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICB9IGVsc2UgaWYgKHRoaXMuX29wdGlvbnMuYnJhY2Vfc3R5bGUgPT09IFwiZXhwYW5kXCIpIHtcbiAgICBpZiAoIWVtcHR5X2JyYWNlcykge1xuICAgICAgdGhpcy5wcmludF9uZXdsaW5lKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIHNraXAge31cbiAgICBpZiAoIWVtcHR5X2JyYWNlcykge1xuICAgICAgaWYgKGlzX2FycmF5KHRoaXMuX2ZsYWdzLm1vZGUpICYmIHRoaXMuX29wdGlvbnMua2VlcF9hcnJheV9pbmRlbnRhdGlvbikge1xuICAgICAgICAvLyB3ZSBSRUFMTFkgbmVlZCBhIG5ld2xpbmUgaGVyZSwgYnV0IG5ld2xpbmVyIHdvdWxkIHNraXAgdGhhdFxuICAgICAgICB0aGlzLl9vcHRpb25zLmtlZXBfYXJyYXlfaW5kZW50YXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcmludF9uZXdsaW5lKCk7XG4gICAgICAgIHRoaXMuX29wdGlvbnMua2VlcF9hcnJheV9pbmRlbnRhdGlvbiA9IHRydWU7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJpbnRfbmV3bGluZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB0aGlzLnJlc3RvcmVfbW9kZSgpO1xuICB0aGlzLnByaW50X3Rva2VuKGN1cnJlbnRfdG9rZW4pO1xufTtcblxuQmVhdXRpZmllci5wcm90b3R5cGUuaGFuZGxlX3dvcmQgPSBmdW5jdGlvbihjdXJyZW50X3Rva2VuKSB7XG4gIGlmIChjdXJyZW50X3Rva2VuLnR5cGUgPT09IFRPS0VOLlJFU0VSVkVEKSB7XG4gICAgaWYgKGluX2FycmF5KGN1cnJlbnRfdG9rZW4udGV4dCwgWydzZXQnLCAnZ2V0J10pICYmIHRoaXMuX2ZsYWdzLm1vZGUgIT09IE1PREUuT2JqZWN0TGl0ZXJhbCkge1xuICAgICAgY3VycmVudF90b2tlbi50eXBlID0gVE9LRU4uV09SRDtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRfdG9rZW4udGV4dCA9PT0gJ2ltcG9ydCcgJiYgaW5fYXJyYXkodGhpcy5fdG9rZW5zLnBlZWsoKS50ZXh0LCBbJygnLCAnLiddKSkge1xuICAgICAgY3VycmVudF90b2tlbi50eXBlID0gVE9LRU4uV09SRDtcbiAgICB9IGVsc2UgaWYgKGluX2FycmF5KGN1cnJlbnRfdG9rZW4udGV4dCwgWydhcycsICdmcm9tJ10pICYmICF0aGlzLl9mbGFncy5pbXBvcnRfYmxvY2spIHtcbiAgICAgIGN1cnJlbnRfdG9rZW4udHlwZSA9IFRPS0VOLldPUkQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9mbGFncy5tb2RlID09PSBNT0RFLk9iamVjdExpdGVyYWwpIHtcbiAgICAgIHZhciBuZXh0X3Rva2VuID0gdGhpcy5fdG9rZW5zLnBlZWsoKTtcbiAgICAgIGlmIChuZXh0X3Rva2VuLnRleHQgPT09ICc6Jykge1xuICAgICAgICBjdXJyZW50X3Rva2VuLnR5cGUgPSBUT0tFTi5XT1JEO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLnN0YXJ0X29mX3N0YXRlbWVudChjdXJyZW50X3Rva2VuKSkge1xuICAgIC8vIFRoZSBjb25kaXRpb25hbCBzdGFydHMgdGhlIHN0YXRlbWVudCBpZiBhcHByb3ByaWF0ZS5cbiAgICBpZiAocmVzZXJ2ZWRfYXJyYXkodGhpcy5fZmxhZ3MubGFzdF90b2tlbiwgWyd2YXInLCAnbGV0JywgJ2NvbnN0J10pICYmIGN1cnJlbnRfdG9rZW4udHlwZSA9PT0gVE9LRU4uV09SRCkge1xuICAgICAgdGhpcy5fZmxhZ3MuZGVjbGFyYXRpb25fc3RhdGVtZW50ID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoY3VycmVudF90b2tlbi5uZXdsaW5lcyAmJiAhaXNfZXhwcmVzc2lvbih0aGlzLl9mbGFncy5tb2RlKSAmJlxuICAgICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgIT09IFRPS0VOLk9QRVJBVE9SIHx8ICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQgPT09ICctLScgfHwgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50ZXh0ID09PSAnKysnKSkgJiZcbiAgICB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgIT09IFRPS0VOLkVRVUFMUyAmJlxuICAgICh0aGlzLl9vcHRpb25zLnByZXNlcnZlX25ld2xpbmVzIHx8ICFyZXNlcnZlZF9hcnJheSh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLCBbJ3ZhcicsICdsZXQnLCAnY29uc3QnLCAnc2V0JywgJ2dldCddKSkpIHtcbiAgICB0aGlzLmhhbmRsZV93aGl0ZXNwYWNlX2FuZF9jb21tZW50cyhjdXJyZW50X3Rva2VuKTtcbiAgICB0aGlzLnByaW50X25ld2xpbmUoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmhhbmRsZV93aGl0ZXNwYWNlX2FuZF9jb21tZW50cyhjdXJyZW50X3Rva2VuKTtcbiAgfVxuXG4gIGlmICh0aGlzLl9mbGFncy5kb19ibG9jayAmJiAhdGhpcy5fZmxhZ3MuZG9fd2hpbGUpIHtcbiAgICBpZiAocmVzZXJ2ZWRfd29yZChjdXJyZW50X3Rva2VuLCAnd2hpbGUnKSkge1xuICAgICAgLy8gZG8ge30gIyMgd2hpbGUgKClcbiAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgICAgdGhpcy5wcmludF90b2tlbihjdXJyZW50X3Rva2VuKTtcbiAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgICAgdGhpcy5fZmxhZ3MuZG9fd2hpbGUgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkbyB7fSBzaG91bGQgYWx3YXlzIGhhdmUgd2hpbGUgYXMgdGhlIG5leHQgd29yZC5cbiAgICAgIC8vIGlmIHdlIGRvbid0IHNlZSB0aGUgZXhwZWN0ZWQgd2hpbGUsIHJlY292ZXJcbiAgICAgIHRoaXMucHJpbnRfbmV3bGluZSgpO1xuICAgICAgdGhpcy5fZmxhZ3MuZG9fYmxvY2sgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiBtYXkgYmUgZm9sbG93ZWQgYnkgZWxzZSwgb3Igbm90XG4gIC8vIEJhcmUvaW5saW5lIGlmcyBhcmUgdHJpY2t5XG4gIC8vIE5lZWQgdG8gdW53aW5kIHRoZSBtb2RlcyBjb3JyZWN0bHk6IGlmIChhKSBpZiAoYikgYygpOyBlbHNlIGQoKTsgZWxzZSBlKCk7XG4gIGlmICh0aGlzLl9mbGFncy5pZl9ibG9jaykge1xuICAgIGlmICghdGhpcy5fZmxhZ3MuZWxzZV9ibG9jayAmJiByZXNlcnZlZF93b3JkKGN1cnJlbnRfdG9rZW4sICdlbHNlJykpIHtcbiAgICAgIHRoaXMuX2ZsYWdzLmVsc2VfYmxvY2sgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAodGhpcy5fZmxhZ3MubW9kZSA9PT0gTU9ERS5TdGF0ZW1lbnQpIHtcbiAgICAgICAgdGhpcy5yZXN0b3JlX21vZGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ZsYWdzLmlmX2Jsb2NrID0gZmFsc2U7XG4gICAgICB0aGlzLl9mbGFncy5lbHNlX2Jsb2NrID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMuX2ZsYWdzLmluX2Nhc2Vfc3RhdGVtZW50ICYmIHJlc2VydmVkX2FycmF5KGN1cnJlbnRfdG9rZW4sIFsnY2FzZScsICdkZWZhdWx0J10pKSB7XG4gICAgdGhpcy5wcmludF9uZXdsaW5lKCk7XG4gICAgaWYgKCF0aGlzLl9mbGFncy5jYXNlX2Jsb2NrICYmICh0aGlzLl9mbGFncy5jYXNlX2JvZHkgfHwgdGhpcy5fb3B0aW9ucy5qc2xpbnRfaGFwcHkpKSB7XG4gICAgICAvLyBzd2l0Y2ggY2FzZXMgZm9sbG93aW5nIG9uZSBhbm90aGVyXG4gICAgICB0aGlzLmRlaW5kZW50KCk7XG4gICAgfVxuICAgIHRoaXMuX2ZsYWdzLmNhc2VfYm9keSA9IGZhbHNlO1xuXG4gICAgdGhpcy5wcmludF90b2tlbihjdXJyZW50X3Rva2VuKTtcbiAgICB0aGlzLl9mbGFncy5pbl9jYXNlID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5DT01NQSB8fCB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLlNUQVJUX0VYUFIgfHwgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5FUVVBTFMgfHwgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5PUEVSQVRPUikge1xuICAgIGlmICghdGhpcy5zdGFydF9vZl9vYmplY3RfcHJvcGVydHkoKSkge1xuICAgICAgdGhpcy5hbGxvd193cmFwX29yX3ByZXNlcnZlZF9uZXdsaW5lKGN1cnJlbnRfdG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyZXNlcnZlZF93b3JkKGN1cnJlbnRfdG9rZW4sICdmdW5jdGlvbicpKSB7XG4gICAgaWYgKGluX2FycmF5KHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCwgWyd9JywgJzsnXSkgfHxcbiAgICAgICh0aGlzLl9vdXRwdXQuanVzdF9hZGRlZF9uZXdsaW5lKCkgJiYgIShpbl9hcnJheSh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQsIFsnKCcsICdbJywgJ3snLCAnOicsICc9JywgJywnXSkgfHwgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5PUEVSQVRPUikpKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgdGhlcmUgaXMgYSBuaWNlIGNsZWFuIHNwYWNlIG9mIGF0IGxlYXN0IG9uZSBibGFuayBsaW5lXG4gICAgICAvLyBiZWZvcmUgYSBuZXcgZnVuY3Rpb24gZGVmaW5pdGlvblxuICAgICAgaWYgKCF0aGlzLl9vdXRwdXQuanVzdF9hZGRlZF9ibGFua2xpbmUoKSAmJiAhY3VycmVudF90b2tlbi5jb21tZW50c19iZWZvcmUpIHtcbiAgICAgICAgdGhpcy5wcmludF9uZXdsaW5lKCk7XG4gICAgICAgIHRoaXMucHJpbnRfbmV3bGluZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uUkVTRVJWRUQgfHwgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5XT1JEKSB7XG4gICAgICBpZiAocmVzZXJ2ZWRfYXJyYXkodGhpcy5fZmxhZ3MubGFzdF90b2tlbiwgWydnZXQnLCAnc2V0JywgJ25ldycsICdleHBvcnQnXSkgfHxcbiAgICAgICAgcmVzZXJ2ZWRfYXJyYXkodGhpcy5fZmxhZ3MubGFzdF90b2tlbiwgbmV3bGluZV9yZXN0cmljdGVkX3Rva2VucykpIHtcbiAgICAgICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHJlc2VydmVkX3dvcmQodGhpcy5fZmxhZ3MubGFzdF90b2tlbiwgJ2RlZmF1bHQnKSAmJiB0aGlzLl9sYXN0X2xhc3RfdGV4dCA9PT0gJ2V4cG9ydCcpIHtcbiAgICAgICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCA9PT0gJ2RlY2xhcmUnKSB7XG4gICAgICAgIC8vIGFjY29tb2RhdGVzIFR5cGVzY3JpcHQgZGVjbGFyZSBmdW5jdGlvbiBmb3JtYXR0aW5nXG4gICAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmludF9uZXdsaW5lKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLk9QRVJBVE9SIHx8IHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCA9PT0gJz0nKSB7XG4gICAgICAvLyBmb28gPSBmdW5jdGlvblxuICAgICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghdGhpcy5fZmxhZ3MubXVsdGlsaW5lX2ZyYW1lICYmIChpc19leHByZXNzaW9uKHRoaXMuX2ZsYWdzLm1vZGUpIHx8IGlzX2FycmF5KHRoaXMuX2ZsYWdzLm1vZGUpKSkge1xuICAgICAgLy8gKGZ1bmN0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJpbnRfbmV3bGluZSgpO1xuICAgIH1cblxuICAgIHRoaXMucHJpbnRfdG9rZW4oY3VycmVudF90b2tlbik7XG4gICAgdGhpcy5fZmxhZ3MubGFzdF93b3JkID0gY3VycmVudF90b2tlbi50ZXh0O1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwcmVmaXggPSAnTk9ORSc7XG5cbiAgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uRU5EX0JMT0NLKSB7XG5cbiAgICBpZiAodGhpcy5fcHJldmlvdXNfZmxhZ3MuaW5saW5lX2ZyYW1lKSB7XG4gICAgICBwcmVmaXggPSAnU1BBQ0UnO1xuICAgIH0gZWxzZSBpZiAoIXJlc2VydmVkX2FycmF5KGN1cnJlbnRfdG9rZW4sIFsnZWxzZScsICdjYXRjaCcsICdmaW5hbGx5JywgJ2Zyb20nXSkpIHtcbiAgICAgIHByZWZpeCA9ICdORVdMSU5FJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYnJhY2Vfc3R5bGUgPT09IFwiZXhwYW5kXCIgfHxcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5icmFjZV9zdHlsZSA9PT0gXCJlbmQtZXhwYW5kXCIgfHxcbiAgICAgICAgKHRoaXMuX29wdGlvbnMuYnJhY2Vfc3R5bGUgPT09IFwibm9uZVwiICYmIGN1cnJlbnRfdG9rZW4ubmV3bGluZXMpKSB7XG4gICAgICAgIHByZWZpeCA9ICdORVdMSU5FJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZWZpeCA9ICdTUEFDRSc7XG4gICAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLlNFTUlDT0xPTiAmJiB0aGlzLl9mbGFncy5tb2RlID09PSBNT0RFLkJsb2NrU3RhdGVtZW50KSB7XG4gICAgLy8gVE9ETzogU2hvdWxkIHRoaXMgYmUgZm9yIFNUQVRFTUVOVCBhcyB3ZWxsP1xuICAgIHByZWZpeCA9ICdORVdMSU5FJztcbiAgfSBlbHNlIGlmICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLlNFTUlDT0xPTiAmJiBpc19leHByZXNzaW9uKHRoaXMuX2ZsYWdzLm1vZGUpKSB7XG4gICAgcHJlZml4ID0gJ1NQQUNFJztcbiAgfSBlbHNlIGlmICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLlNUUklORykge1xuICAgIHByZWZpeCA9ICdORVdMSU5FJztcbiAgfSBlbHNlIGlmICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLlJFU0VSVkVEIHx8IHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uV09SRCB8fFxuICAgICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQgPT09ICcqJyAmJlxuICAgICAgKGluX2FycmF5KHRoaXMuX2xhc3RfbGFzdF90ZXh0LCBbJ2Z1bmN0aW9uJywgJ3lpZWxkJ10pIHx8XG4gICAgICAgICh0aGlzLl9mbGFncy5tb2RlID09PSBNT0RFLk9iamVjdExpdGVyYWwgJiYgaW5fYXJyYXkodGhpcy5fbGFzdF9sYXN0X3RleHQsIFsneycsICcsJ10pKSkpKSB7XG4gICAgcHJlZml4ID0gJ1NQQUNFJztcbiAgfSBlbHNlIGlmICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLlNUQVJUX0JMT0NLKSB7XG4gICAgaWYgKHRoaXMuX2ZsYWdzLmlubGluZV9mcmFtZSkge1xuICAgICAgcHJlZml4ID0gJ1NQQUNFJztcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlZml4ID0gJ05FV0xJTkUnO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLkVORF9FWFBSKSB7XG4gICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG4gICAgcHJlZml4ID0gJ05FV0xJTkUnO1xuICB9XG5cbiAgaWYgKHJlc2VydmVkX2FycmF5KGN1cnJlbnRfdG9rZW4sIGxpbmVfc3RhcnRlcnMpICYmIHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCAhPT0gJyknKSB7XG4gICAgaWYgKHRoaXMuX2ZsYWdzLmlubGluZV9mcmFtZSB8fCB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQgPT09ICdlbHNlJyB8fCB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQgPT09ICdleHBvcnQnKSB7XG4gICAgICBwcmVmaXggPSAnU1BBQ0UnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmVmaXggPSAnTkVXTElORSc7XG4gICAgfVxuXG4gIH1cblxuICBpZiAocmVzZXJ2ZWRfYXJyYXkoY3VycmVudF90b2tlbiwgWydlbHNlJywgJ2NhdGNoJywgJ2ZpbmFsbHknXSkpIHtcbiAgICBpZiAoKCEodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5FTkRfQkxPQ0sgJiYgdGhpcy5fcHJldmlvdXNfZmxhZ3MubW9kZSA9PT0gTU9ERS5CbG9ja1N0YXRlbWVudCkgfHxcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5icmFjZV9zdHlsZSA9PT0gXCJleHBhbmRcIiB8fFxuICAgICAgICB0aGlzLl9vcHRpb25zLmJyYWNlX3N0eWxlID09PSBcImVuZC1leHBhbmRcIiB8fFxuICAgICAgICAodGhpcy5fb3B0aW9ucy5icmFjZV9zdHlsZSA9PT0gXCJub25lXCIgJiYgY3VycmVudF90b2tlbi5uZXdsaW5lcykpICYmXG4gICAgICAhdGhpcy5fZmxhZ3MuaW5saW5lX2ZyYW1lKSB7XG4gICAgICB0aGlzLnByaW50X25ld2xpbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3V0cHV0LnRyaW0odHJ1ZSk7XG4gICAgICB2YXIgbGluZSA9IHRoaXMuX291dHB1dC5jdXJyZW50X2xpbmU7XG4gICAgICAvLyBJZiB3ZSB0cmltbWVkIGFuZCB0aGVyZSdzIHNvbWV0aGluZyBvdGhlciB0aGFuIGEgY2xvc2UgYmxvY2sgYmVmb3JlIHVzXG4gICAgICAvLyBwdXQgYSBuZXdsaW5lIGJhY2sgaW4uICBIYW5kbGVzICd9IC8vIGNvbW1lbnQnIHNjZW5hcmlvLlxuICAgICAgaWYgKGxpbmUubGFzdCgpICE9PSAnfScpIHtcbiAgICAgICAgdGhpcy5wcmludF9uZXdsaW5lKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJlZml4ID09PSAnTkVXTElORScpIHtcbiAgICBpZiAocmVzZXJ2ZWRfYXJyYXkodGhpcy5fZmxhZ3MubGFzdF90b2tlbiwgc3BlY2lhbF93b3JkcykpIHtcbiAgICAgIC8vIG5vIG5ld2xpbmUgYmV0d2VlbiAncmV0dXJuIG5ubidcbiAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50ZXh0ID09PSAnZGVjbGFyZScgJiYgcmVzZXJ2ZWRfYXJyYXkoY3VycmVudF90b2tlbiwgWyd2YXInLCAnbGV0JywgJ2NvbnN0J10pKSB7XG4gICAgICAvLyBhY2NvbW9kYXRlcyBUeXBlc2NyaXB0IGRlY2xhcmUgZm9ybWF0dGluZ1xuICAgICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgIT09IFRPS0VOLkVORF9FWFBSKSB7XG4gICAgICBpZiAoKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSAhPT0gVE9LRU4uU1RBUlRfRVhQUiB8fCAhcmVzZXJ2ZWRfYXJyYXkoY3VycmVudF90b2tlbiwgWyd2YXInLCAnbGV0JywgJ2NvbnN0J10pKSAmJiB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQgIT09ICc6Jykge1xuICAgICAgICAvLyBubyBuZWVkIHRvIGZvcmNlIG5ld2xpbmUgb24gJ3Zhcic6IGZvciAodmFyIHggPSAwLi4uKVxuICAgICAgICBpZiAocmVzZXJ2ZWRfd29yZChjdXJyZW50X3Rva2VuLCAnaWYnKSAmJiByZXNlcnZlZF93b3JkKGN1cnJlbnRfdG9rZW4ucHJldmlvdXMsICdlbHNlJykpIHtcbiAgICAgICAgICAvLyBubyBuZXdsaW5lIGZvciB9IGVsc2UgaWYge1xuICAgICAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucHJpbnRfbmV3bGluZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXNlcnZlZF9hcnJheShjdXJyZW50X3Rva2VuLCBsaW5lX3N0YXJ0ZXJzKSAmJiB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQgIT09ICcpJykge1xuICAgICAgdGhpcy5wcmludF9uZXdsaW5lKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHRoaXMuX2ZsYWdzLm11bHRpbGluZV9mcmFtZSAmJiBpc19hcnJheSh0aGlzLl9mbGFncy5tb2RlKSAmJiB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQgPT09ICcsJyAmJiB0aGlzLl9sYXN0X2xhc3RfdGV4dCA9PT0gJ30nKSB7XG4gICAgdGhpcy5wcmludF9uZXdsaW5lKCk7IC8vIH0sIGluIGxpc3RzIGdldCBhIG5ld2xpbmUgdHJlYXRtZW50XG4gIH0gZWxzZSBpZiAocHJlZml4ID09PSAnU1BBQ0UnKSB7XG4gICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG4gIH1cbiAgaWYgKGN1cnJlbnRfdG9rZW4ucHJldmlvdXMgJiYgKGN1cnJlbnRfdG9rZW4ucHJldmlvdXMudHlwZSA9PT0gVE9LRU4uV09SRCB8fCBjdXJyZW50X3Rva2VuLnByZXZpb3VzLnR5cGUgPT09IFRPS0VOLlJFU0VSVkVEKSkge1xuICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICB9XG4gIHRoaXMucHJpbnRfdG9rZW4oY3VycmVudF90b2tlbik7XG4gIHRoaXMuX2ZsYWdzLmxhc3Rfd29yZCA9IGN1cnJlbnRfdG9rZW4udGV4dDtcblxuICBpZiAoY3VycmVudF90b2tlbi50eXBlID09PSBUT0tFTi5SRVNFUlZFRCkge1xuICAgIGlmIChjdXJyZW50X3Rva2VuLnRleHQgPT09ICdkbycpIHtcbiAgICAgIHRoaXMuX2ZsYWdzLmRvX2Jsb2NrID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRfdG9rZW4udGV4dCA9PT0gJ2lmJykge1xuICAgICAgdGhpcy5fZmxhZ3MuaWZfYmxvY2sgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudF90b2tlbi50ZXh0ID09PSAnaW1wb3J0Jykge1xuICAgICAgdGhpcy5fZmxhZ3MuaW1wb3J0X2Jsb2NrID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2ZsYWdzLmltcG9ydF9ibG9jayAmJiByZXNlcnZlZF93b3JkKGN1cnJlbnRfdG9rZW4sICdmcm9tJykpIHtcbiAgICAgIHRoaXMuX2ZsYWdzLmltcG9ydF9ibG9jayA9IGZhbHNlO1xuICAgIH1cbiAgfVxufTtcblxuQmVhdXRpZmllci5wcm90b3R5cGUuaGFuZGxlX3NlbWljb2xvbiA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4pIHtcbiAgaWYgKHRoaXMuc3RhcnRfb2Zfc3RhdGVtZW50KGN1cnJlbnRfdG9rZW4pKSB7XG4gICAgLy8gVGhlIGNvbmRpdGlvbmFsIHN0YXJ0cyB0aGUgc3RhdGVtZW50IGlmIGFwcHJvcHJpYXRlLlxuICAgIC8vIFNlbWljb2xvbiBjYW4gYmUgdGhlIHN0YXJ0IChhbmQgZW5kKSBvZiBhIHN0YXRlbWVudFxuICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmhhbmRsZV93aGl0ZXNwYWNlX2FuZF9jb21tZW50cyhjdXJyZW50X3Rva2VuKTtcbiAgfVxuXG4gIHZhciBuZXh0X3Rva2VuID0gdGhpcy5fdG9rZW5zLnBlZWsoKTtcbiAgd2hpbGUgKHRoaXMuX2ZsYWdzLm1vZGUgPT09IE1PREUuU3RhdGVtZW50ICYmXG4gICAgISh0aGlzLl9mbGFncy5pZl9ibG9jayAmJiByZXNlcnZlZF93b3JkKG5leHRfdG9rZW4sICdlbHNlJykpICYmXG4gICAgIXRoaXMuX2ZsYWdzLmRvX2Jsb2NrKSB7XG4gICAgdGhpcy5yZXN0b3JlX21vZGUoKTtcbiAgfVxuXG4gIC8vIGhhY2t5IGJ1dCBlZmZlY3RpdmUgZm9yIHRoZSBtb21lbnRcbiAgaWYgKHRoaXMuX2ZsYWdzLmltcG9ydF9ibG9jaykge1xuICAgIHRoaXMuX2ZsYWdzLmltcG9ydF9ibG9jayA9IGZhbHNlO1xuICB9XG4gIHRoaXMucHJpbnRfdG9rZW4oY3VycmVudF90b2tlbik7XG59O1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5oYW5kbGVfc3RyaW5nID0gZnVuY3Rpb24oY3VycmVudF90b2tlbikge1xuICBpZiAoY3VycmVudF90b2tlbi50ZXh0LnN0YXJ0c1dpdGgoXCJgXCIpICYmIGN1cnJlbnRfdG9rZW4ubmV3bGluZXMgPT09IDAgJiYgY3VycmVudF90b2tlbi53aGl0ZXNwYWNlX2JlZm9yZSA9PT0gJycgJiYgKGN1cnJlbnRfdG9rZW4ucHJldmlvdXMudGV4dCA9PT0gJyknIHx8IHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uV09SRCkpIHtcbiAgICAvL0NvbmRpdGlvbmFsIGZvciBkZXRlY3RpZ24gYmFja3RpY2sgc3RyaW5nc1xuICB9IGVsc2UgaWYgKHRoaXMuc3RhcnRfb2Zfc3RhdGVtZW50KGN1cnJlbnRfdG9rZW4pKSB7XG4gICAgLy8gVGhlIGNvbmRpdGlvbmFsIHN0YXJ0cyB0aGUgc3RhdGVtZW50IGlmIGFwcHJvcHJpYXRlLlxuICAgIC8vIE9uZSBkaWZmZXJlbmNlIC0gc3RyaW5ncyB3YW50IGF0IGxlYXN0IGEgc3BhY2UgYmVmb3JlXG4gICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5oYW5kbGVfd2hpdGVzcGFjZV9hbmRfY29tbWVudHMoY3VycmVudF90b2tlbik7XG4gICAgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uUkVTRVJWRUQgfHwgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5XT1JEIHx8IHRoaXMuX2ZsYWdzLmlubGluZV9mcmFtZSkge1xuICAgICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLkNPTU1BIHx8IHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uU1RBUlRfRVhQUiB8fCB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLkVRVUFMUyB8fCB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLk9QRVJBVE9SKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhcnRfb2Zfb2JqZWN0X3Byb3BlcnR5KCkpIHtcbiAgICAgICAgdGhpcy5hbGxvd193cmFwX29yX3ByZXNlcnZlZF9uZXdsaW5lKGN1cnJlbnRfdG9rZW4pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKGN1cnJlbnRfdG9rZW4udGV4dC5zdGFydHNXaXRoKFwiYFwiKSAmJiB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLkVORF9FWFBSICYmIChjdXJyZW50X3Rva2VuLnByZXZpb3VzLnRleHQgPT09ICddJyB8fCBjdXJyZW50X3Rva2VuLnByZXZpb3VzLnRleHQgPT09ICcpJykgJiYgY3VycmVudF90b2tlbi5uZXdsaW5lcyA9PT0gMCkpIHtcbiAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByaW50X25ld2xpbmUoKTtcbiAgICB9XG4gIH1cbiAgdGhpcy5wcmludF90b2tlbihjdXJyZW50X3Rva2VuKTtcbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLmhhbmRsZV9lcXVhbHMgPSBmdW5jdGlvbihjdXJyZW50X3Rva2VuKSB7XG4gIGlmICh0aGlzLnN0YXJ0X29mX3N0YXRlbWVudChjdXJyZW50X3Rva2VuKSkge1xuICAgIC8vIFRoZSBjb25kaXRpb25hbCBzdGFydHMgdGhlIHN0YXRlbWVudCBpZiBhcHByb3ByaWF0ZS5cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmhhbmRsZV93aGl0ZXNwYWNlX2FuZF9jb21tZW50cyhjdXJyZW50X3Rva2VuKTtcbiAgfVxuXG4gIGlmICh0aGlzLl9mbGFncy5kZWNsYXJhdGlvbl9zdGF0ZW1lbnQpIHtcbiAgICAvLyBqdXN0IGdvdCBhbiAnPScgaW4gYSB2YXItbGluZSwgZGlmZmVyZW50IGZvcm1hdHRpbmcvbGluZS1icmVha2luZywgZXRjIHdpbGwgbm93IGJlIGRvbmVcbiAgICB0aGlzLl9mbGFncy5kZWNsYXJhdGlvbl9hc3NpZ25tZW50ID0gdHJ1ZTtcbiAgfVxuICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgdGhpcy5wcmludF90b2tlbihjdXJyZW50X3Rva2VuKTtcbiAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG59O1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5oYW5kbGVfY29tbWEgPSBmdW5jdGlvbihjdXJyZW50X3Rva2VuKSB7XG4gIHRoaXMuaGFuZGxlX3doaXRlc3BhY2VfYW5kX2NvbW1lbnRzKGN1cnJlbnRfdG9rZW4sIHRydWUpO1xuXG4gIHRoaXMucHJpbnRfdG9rZW4oY3VycmVudF90b2tlbik7XG4gIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICBpZiAodGhpcy5fZmxhZ3MuZGVjbGFyYXRpb25fc3RhdGVtZW50KSB7XG4gICAgaWYgKGlzX2V4cHJlc3Npb24odGhpcy5fZmxhZ3MucGFyZW50Lm1vZGUpKSB7XG4gICAgICAvLyBkbyBub3QgYnJlYWsgb24gY29tbWEsIGZvcih2YXIgYSA9IDEsIGIgPSAyKVxuICAgICAgdGhpcy5fZmxhZ3MuZGVjbGFyYXRpb25fYXNzaWdubWVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9mbGFncy5kZWNsYXJhdGlvbl9hc3NpZ25tZW50KSB7XG4gICAgICB0aGlzLl9mbGFncy5kZWNsYXJhdGlvbl9hc3NpZ25tZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLnByaW50X25ld2xpbmUoZmFsc2UsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5jb21tYV9maXJzdCkge1xuICAgICAgLy8gZm9yIGNvbW1hLWZpcnN0LCB3ZSB3YW50IHRvIGFsbG93IGEgbmV3bGluZSBiZWZvcmUgdGhlIGNvbW1hXG4gICAgICAvLyB0byB0dXJuIGludG8gYSBuZXdsaW5lIGFmdGVyIHRoZSBjb21tYSwgd2hpY2ggd2Ugd2lsbCBmaXh1cCBsYXRlclxuICAgICAgdGhpcy5hbGxvd193cmFwX29yX3ByZXNlcnZlZF9uZXdsaW5lKGN1cnJlbnRfdG9rZW4pO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0aGlzLl9mbGFncy5tb2RlID09PSBNT0RFLk9iamVjdExpdGVyYWwgfHxcbiAgICAodGhpcy5fZmxhZ3MubW9kZSA9PT0gTU9ERS5TdGF0ZW1lbnQgJiYgdGhpcy5fZmxhZ3MucGFyZW50Lm1vZGUgPT09IE1PREUuT2JqZWN0TGl0ZXJhbCkpIHtcbiAgICBpZiAodGhpcy5fZmxhZ3MubW9kZSA9PT0gTU9ERS5TdGF0ZW1lbnQpIHtcbiAgICAgIHRoaXMucmVzdG9yZV9tb2RlKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9mbGFncy5pbmxpbmVfZnJhbWUpIHtcbiAgICAgIHRoaXMucHJpbnRfbmV3bGluZSgpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0aGlzLl9vcHRpb25zLmNvbW1hX2ZpcnN0KSB7XG4gICAgLy8gRVhQUiBvciBET19CTE9DS1xuICAgIC8vIGZvciBjb21tYS1maXJzdCwgd2Ugd2FudCB0byBhbGxvdyBhIG5ld2xpbmUgYmVmb3JlIHRoZSBjb21tYVxuICAgIC8vIHRvIHR1cm4gaW50byBhIG5ld2xpbmUgYWZ0ZXIgdGhlIGNvbW1hLCB3aGljaCB3ZSB3aWxsIGZpeHVwIGxhdGVyXG4gICAgdGhpcy5hbGxvd193cmFwX29yX3ByZXNlcnZlZF9uZXdsaW5lKGN1cnJlbnRfdG9rZW4pO1xuICB9XG59O1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5oYW5kbGVfb3BlcmF0b3IgPSBmdW5jdGlvbihjdXJyZW50X3Rva2VuKSB7XG4gIHZhciBpc0dlbmVyYXRvckFzdGVyaXNrID0gY3VycmVudF90b2tlbi50ZXh0ID09PSAnKicgJiZcbiAgICAocmVzZXJ2ZWRfYXJyYXkodGhpcy5fZmxhZ3MubGFzdF90b2tlbiwgWydmdW5jdGlvbicsICd5aWVsZCddKSB8fFxuICAgICAgKGluX2FycmF5KHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSwgW1RPS0VOLlNUQVJUX0JMT0NLLCBUT0tFTi5DT01NQSwgVE9LRU4uRU5EX0JMT0NLLCBUT0tFTi5TRU1JQ09MT05dKSlcbiAgICApO1xuICB2YXIgaXNVbmFyeSA9IGluX2FycmF5KGN1cnJlbnRfdG9rZW4udGV4dCwgWyctJywgJysnXSkgJiYgKFxuICAgIGluX2FycmF5KHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSwgW1RPS0VOLlNUQVJUX0JMT0NLLCBUT0tFTi5TVEFSVF9FWFBSLCBUT0tFTi5FUVVBTFMsIFRPS0VOLk9QRVJBVE9SXSkgfHxcbiAgICBpbl9hcnJheSh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQsIGxpbmVfc3RhcnRlcnMpIHx8XG4gICAgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50ZXh0ID09PSAnLCdcbiAgKTtcblxuICBpZiAodGhpcy5zdGFydF9vZl9zdGF0ZW1lbnQoY3VycmVudF90b2tlbikpIHtcbiAgICAvLyBUaGUgY29uZGl0aW9uYWwgc3RhcnRzIHRoZSBzdGF0ZW1lbnQgaWYgYXBwcm9wcmlhdGUuXG4gIH0gZWxzZSB7XG4gICAgdmFyIHByZXNlcnZlX3N0YXRlbWVudF9mbGFncyA9ICFpc0dlbmVyYXRvckFzdGVyaXNrO1xuICAgIHRoaXMuaGFuZGxlX3doaXRlc3BhY2VfYW5kX2NvbW1lbnRzKGN1cnJlbnRfdG9rZW4sIHByZXNlcnZlX3N0YXRlbWVudF9mbGFncyk7XG4gIH1cblxuICAvLyBoYWNrIGZvciBhY3Rpb25zY3JpcHQncyBpbXBvcnQgLio7XG4gIGlmIChjdXJyZW50X3Rva2VuLnRleHQgPT09ICcqJyAmJiB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLkRPVCkge1xuICAgIHRoaXMucHJpbnRfdG9rZW4oY3VycmVudF90b2tlbik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRfdG9rZW4udGV4dCA9PT0gJzo6Jykge1xuICAgIC8vIG5vIHNwYWNlcyBhcm91bmQgZXhvdGljIG5hbWVzcGFjaW5nIHN5bnRheCBvcGVyYXRvclxuICAgIHRoaXMucHJpbnRfdG9rZW4oY3VycmVudF90b2tlbik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gQWxsb3cgbGluZSB3cmFwcGluZyBiZXR3ZWVuIG9wZXJhdG9ycyB3aGVuIG9wZXJhdG9yX3Bvc2l0aW9uIGlzXG4gIC8vICAgc2V0IHRvIGJlZm9yZSBvciBwcmVzZXJ2ZVxuICBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5PUEVSQVRPUiAmJiBpbl9hcnJheSh0aGlzLl9vcHRpb25zLm9wZXJhdG9yX3Bvc2l0aW9uLCBPUEVSQVRPUl9QT1NJVElPTl9CRUZPUkVfT1JfUFJFU0VSVkUpKSB7XG4gICAgdGhpcy5hbGxvd193cmFwX29yX3ByZXNlcnZlZF9uZXdsaW5lKGN1cnJlbnRfdG9rZW4pO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRfdG9rZW4udGV4dCA9PT0gJzonICYmIHRoaXMuX2ZsYWdzLmluX2Nhc2UpIHtcbiAgICB0aGlzLnByaW50X3Rva2VuKGN1cnJlbnRfdG9rZW4pO1xuXG4gICAgdGhpcy5fZmxhZ3MuaW5fY2FzZSA9IGZhbHNlO1xuICAgIHRoaXMuX2ZsYWdzLmNhc2VfYm9keSA9IHRydWU7XG4gICAgaWYgKHRoaXMuX3Rva2Vucy5wZWVrKCkudHlwZSAhPT0gVE9LRU4uU1RBUlRfQkxPQ0spIHtcbiAgICAgIHRoaXMuaW5kZW50KCk7XG4gICAgICB0aGlzLnByaW50X25ld2xpbmUoKTtcbiAgICAgIHRoaXMuX2ZsYWdzLmNhc2VfYmxvY2sgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZmxhZ3MuY2FzZV9ibG9jayA9IHRydWU7XG4gICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNwYWNlX2JlZm9yZSA9IHRydWU7XG4gIHZhciBzcGFjZV9hZnRlciA9IHRydWU7XG4gIHZhciBpbl90ZXJuYXJ5ID0gZmFsc2U7XG4gIGlmIChjdXJyZW50X3Rva2VuLnRleHQgPT09ICc6Jykge1xuICAgIGlmICh0aGlzLl9mbGFncy50ZXJuYXJ5X2RlcHRoID09PSAwKSB7XG4gICAgICAvLyBDb2xvbiBpcyBpbnZhbGlkIGphdmFzY3JpcHQgb3V0c2lkZSBvZiB0ZXJuYXJ5IGFuZCBvYmplY3QsIGJ1dCBkbyBvdXIgYmVzdCB0byBndWVzcyB3aGF0IHdhcyBtZWFudC5cbiAgICAgIHNwYWNlX2JlZm9yZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mbGFncy50ZXJuYXJ5X2RlcHRoIC09IDE7XG4gICAgICBpbl90ZXJuYXJ5ID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoY3VycmVudF90b2tlbi50ZXh0ID09PSAnPycpIHtcbiAgICB0aGlzLl9mbGFncy50ZXJuYXJ5X2RlcHRoICs9IDE7XG4gIH1cblxuICAvLyBsZXQncyBoYW5kbGUgdGhlIG9wZXJhdG9yX3Bvc2l0aW9uIG9wdGlvbiBwcmlvciB0byBhbnkgY29uZmxpY3RpbmcgbG9naWNcbiAgaWYgKCFpc1VuYXJ5ICYmICFpc0dlbmVyYXRvckFzdGVyaXNrICYmIHRoaXMuX29wdGlvbnMucHJlc2VydmVfbmV3bGluZXMgJiYgaW5fYXJyYXkoY3VycmVudF90b2tlbi50ZXh0LCBwb3NpdGlvbmFibGVfb3BlcmF0b3JzKSkge1xuICAgIHZhciBpc0NvbG9uID0gY3VycmVudF90b2tlbi50ZXh0ID09PSAnOic7XG4gICAgdmFyIGlzVGVybmFyeUNvbG9uID0gKGlzQ29sb24gJiYgaW5fdGVybmFyeSk7XG4gICAgdmFyIGlzT3RoZXJDb2xvbiA9IChpc0NvbG9uICYmICFpbl90ZXJuYXJ5KTtcblxuICAgIHN3aXRjaCAodGhpcy5fb3B0aW9ucy5vcGVyYXRvcl9wb3NpdGlvbikge1xuICAgICAgY2FzZSBPUEVSQVRPUl9QT1NJVElPTi5iZWZvcmVfbmV3bGluZTpcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgdG9rZW4gaXMgOiBhbmQgaXQncyBub3QgYSB0ZXJuYXJ5IHN0YXRlbWVudCB0aGVuIHdlIHNldCBzcGFjZV9iZWZvcmUgdG8gZmFsc2VcbiAgICAgICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9ICFpc090aGVyQ29sb247XG5cbiAgICAgICAgdGhpcy5wcmludF90b2tlbihjdXJyZW50X3Rva2VuKTtcblxuICAgICAgICBpZiAoIWlzQ29sb24gfHwgaXNUZXJuYXJ5Q29sb24pIHtcbiAgICAgICAgICB0aGlzLmFsbG93X3dyYXBfb3JfcHJlc2VydmVkX25ld2xpbmUoY3VycmVudF90b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlIE9QRVJBVE9SX1BPU0lUSU9OLmFmdGVyX25ld2xpbmU6XG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHRva2VuIGlzIGFueXRoaW5nIGJ1dCBjb2xvbiwgb3IgKHZpYSBkZWR1Y3Rpb24pIGl0J3MgYSBjb2xvbiBhbmQgaW4gYSB0ZXJuYXJ5IHN0YXRlbWVudCxcbiAgICAgICAgLy8gICB0aGVuIHByaW50IGEgbmV3bGluZS5cblxuICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIWlzQ29sb24gfHwgaXNUZXJuYXJ5Q29sb24pIHtcbiAgICAgICAgICBpZiAodGhpcy5fdG9rZW5zLnBlZWsoKS5uZXdsaW5lcykge1xuICAgICAgICAgICAgdGhpcy5wcmludF9uZXdsaW5lKGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbGxvd193cmFwX29yX3ByZXNlcnZlZF9uZXdsaW5lKGN1cnJlbnRfdG9rZW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByaW50X3Rva2VuKGN1cnJlbnRfdG9rZW4pO1xuXG4gICAgICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNhc2UgT1BFUkFUT1JfUE9TSVRJT04ucHJlc2VydmVfbmV3bGluZTpcbiAgICAgICAgaWYgKCFpc090aGVyQ29sb24pIHtcbiAgICAgICAgICB0aGlzLmFsbG93X3dyYXBfb3JfcHJlc2VydmVkX25ld2xpbmUoY3VycmVudF90b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB3ZSBqdXN0IGFkZGVkIGEgbmV3bGluZSwgb3IgdGhlIGN1cnJlbnQgdG9rZW4gaXMgOiBhbmQgaXQncyBub3QgYSB0ZXJuYXJ5IHN0YXRlbWVudCxcbiAgICAgICAgLy8gICB0aGVuIHdlIHNldCBzcGFjZV9iZWZvcmUgdG8gZmFsc2VcbiAgICAgICAgc3BhY2VfYmVmb3JlID0gISh0aGlzLl9vdXRwdXQuanVzdF9hZGRlZF9uZXdsaW5lKCkgfHwgaXNPdGhlckNvbG9uKTtcblxuICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gc3BhY2VfYmVmb3JlO1xuICAgICAgICB0aGlzLnByaW50X3Rva2VuKGN1cnJlbnRfdG9rZW4pO1xuICAgICAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpc0dlbmVyYXRvckFzdGVyaXNrKSB7XG4gICAgdGhpcy5hbGxvd193cmFwX29yX3ByZXNlcnZlZF9uZXdsaW5lKGN1cnJlbnRfdG9rZW4pO1xuICAgIHNwYWNlX2JlZm9yZSA9IGZhbHNlO1xuICAgIHZhciBuZXh0X3Rva2VuID0gdGhpcy5fdG9rZW5zLnBlZWsoKTtcbiAgICBzcGFjZV9hZnRlciA9IG5leHRfdG9rZW4gJiYgaW5fYXJyYXkobmV4dF90b2tlbi50eXBlLCBbVE9LRU4uV09SRCwgVE9LRU4uUkVTRVJWRURdKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50X3Rva2VuLnRleHQgPT09ICcuLi4nKSB7XG4gICAgdGhpcy5hbGxvd193cmFwX29yX3ByZXNlcnZlZF9uZXdsaW5lKGN1cnJlbnRfdG9rZW4pO1xuICAgIHNwYWNlX2JlZm9yZSA9IHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uU1RBUlRfQkxPQ0s7XG4gICAgc3BhY2VfYWZ0ZXIgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChpbl9hcnJheShjdXJyZW50X3Rva2VuLnRleHQsIFsnLS0nLCAnKysnLCAnIScsICd+J10pIHx8IGlzVW5hcnkpIHtcbiAgICAvLyB1bmFyeSBvcGVyYXRvcnMgKGFuZCBiaW5hcnkgKy8tIHByZXRlbmRpbmcgdG8gYmUgdW5hcnkpIHNwZWNpYWwgY2FzZXNcbiAgICBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5DT01NQSB8fCB0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnR5cGUgPT09IFRPS0VOLlNUQVJUX0VYUFIpIHtcbiAgICAgIHRoaXMuYWxsb3dfd3JhcF9vcl9wcmVzZXJ2ZWRfbmV3bGluZShjdXJyZW50X3Rva2VuKTtcbiAgICB9XG5cbiAgICBzcGFjZV9iZWZvcmUgPSBmYWxzZTtcbiAgICBzcGFjZV9hZnRlciA9IGZhbHNlO1xuXG4gICAgLy8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTcuOS4xXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBuZXdsaW5lIGJldHdlZW4gLS0gb3IgKysgYW5kIGFueXRoaW5nIGVsc2Ugd2Ugc2hvdWxkIHByZXNlcnZlIGl0LlxuICAgIGlmIChjdXJyZW50X3Rva2VuLm5ld2xpbmVzICYmIChjdXJyZW50X3Rva2VuLnRleHQgPT09ICctLScgfHwgY3VycmVudF90b2tlbi50ZXh0ID09PSAnKysnIHx8IGN1cnJlbnRfdG9rZW4udGV4dCA9PT0gJ34nKSkge1xuICAgICAgdmFyIG5ld19saW5lX25lZWRlZCA9IHJlc2VydmVkX2FycmF5KHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4sIHNwZWNpYWxfd29yZHMpICYmIGN1cnJlbnRfdG9rZW4ubmV3bGluZXM7XG4gICAgICBpZiAobmV3X2xpbmVfbmVlZGVkICYmICh0aGlzLl9wcmV2aW91c19mbGFncy5pZl9ibG9jayB8fCB0aGlzLl9wcmV2aW91c19mbGFncy5lbHNlX2Jsb2NrKSkge1xuICAgICAgICB0aGlzLnJlc3RvcmVfbW9kZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmludF9uZXdsaW5lKG5ld19saW5lX25lZWRlZCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCA9PT0gJzsnICYmIGlzX2V4cHJlc3Npb24odGhpcy5fZmxhZ3MubW9kZSkpIHtcbiAgICAgIC8vIGZvciAoOzsgKytpKVxuICAgICAgLy8gICAgICAgIF5eXlxuICAgICAgc3BhY2VfYmVmb3JlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50eXBlID09PSBUT0tFTi5SRVNFUlZFRCkge1xuICAgICAgc3BhY2VfYmVmb3JlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uRU5EX0VYUFIpIHtcbiAgICAgIHNwYWNlX2JlZm9yZSA9ICEodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50ZXh0ID09PSAnXScgJiYgKGN1cnJlbnRfdG9rZW4udGV4dCA9PT0gJy0tJyB8fCBjdXJyZW50X3Rva2VuLnRleHQgPT09ICcrKycpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udHlwZSA9PT0gVE9LRU4uT1BFUkFUT1IpIHtcbiAgICAgIC8vIGErKyArICsrYjtcbiAgICAgIC8vIGEgLSAtYlxuICAgICAgc3BhY2VfYmVmb3JlID0gaW5fYXJyYXkoY3VycmVudF90b2tlbi50ZXh0LCBbJy0tJywgJy0nLCAnKysnLCAnKyddKSAmJiBpbl9hcnJheSh0aGlzLl9mbGFncy5sYXN0X3Rva2VuLnRleHQsIFsnLS0nLCAnLScsICcrKycsICcrJ10pO1xuICAgICAgLy8gKyBhbmQgLSBhcmUgbm90IHVuYXJ5IHdoZW4gcHJlY2VlZGVkIGJ5IC0tIG9yICsrIG9wZXJhdG9yXG4gICAgICAvLyBhLS0gKyBiXG4gICAgICAvLyBhICogK2JcbiAgICAgIC8vIGEgLSAtYlxuICAgICAgaWYgKGluX2FycmF5KGN1cnJlbnRfdG9rZW4udGV4dCwgWycrJywgJy0nXSkgJiYgaW5fYXJyYXkodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50ZXh0LCBbJy0tJywgJysrJ10pKSB7XG4gICAgICAgIHNwYWNlX2FmdGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmICgoKHRoaXMuX2ZsYWdzLm1vZGUgPT09IE1PREUuQmxvY2tTdGF0ZW1lbnQgJiYgIXRoaXMuX2ZsYWdzLmlubGluZV9mcmFtZSkgfHwgdGhpcy5fZmxhZ3MubW9kZSA9PT0gTU9ERS5TdGF0ZW1lbnQpICYmXG4gICAgICAodGhpcy5fZmxhZ3MubGFzdF90b2tlbi50ZXh0ID09PSAneycgfHwgdGhpcy5fZmxhZ3MubGFzdF90b2tlbi50ZXh0ID09PSAnOycpKSB7XG4gICAgICAvLyB7IGZvbzsgLS1pIH1cbiAgICAgIC8vIGZvbygpOyAtLWJhcjtcbiAgICAgIHRoaXMucHJpbnRfbmV3bGluZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuIHx8IHNwYWNlX2JlZm9yZTtcbiAgdGhpcy5wcmludF90b2tlbihjdXJyZW50X3Rva2VuKTtcbiAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHNwYWNlX2FmdGVyO1xufTtcblxuQmVhdXRpZmllci5wcm90b3R5cGUuaGFuZGxlX2Jsb2NrX2NvbW1lbnQgPSBmdW5jdGlvbihjdXJyZW50X3Rva2VuLCBwcmVzZXJ2ZV9zdGF0ZW1lbnRfZmxhZ3MpIHtcbiAgaWYgKHRoaXMuX291dHB1dC5yYXcpIHtcbiAgICB0aGlzLl9vdXRwdXQuYWRkX3Jhd190b2tlbihjdXJyZW50X3Rva2VuKTtcbiAgICBpZiAoY3VycmVudF90b2tlbi5kaXJlY3RpdmVzICYmIGN1cnJlbnRfdG9rZW4uZGlyZWN0aXZlcy5wcmVzZXJ2ZSA9PT0gJ2VuZCcpIHtcbiAgICAgIC8vIElmIHdlJ3JlIHRlc3RpbmcgdGhlIHJhdyBvdXRwdXQgYmVoYXZpb3IsIGRvIG5vdCBhbGxvdyBhIGRpcmVjdGl2ZSB0byB0dXJuIGl0IG9mZi5cbiAgICAgIHRoaXMuX291dHB1dC5yYXcgPSB0aGlzLl9vcHRpb25zLnRlc3Rfb3V0cHV0X3JhdztcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRfdG9rZW4uZGlyZWN0aXZlcykge1xuICAgIHRoaXMucHJpbnRfbmV3bGluZShmYWxzZSwgcHJlc2VydmVfc3RhdGVtZW50X2ZsYWdzKTtcbiAgICB0aGlzLnByaW50X3Rva2VuKGN1cnJlbnRfdG9rZW4pO1xuICAgIGlmIChjdXJyZW50X3Rva2VuLmRpcmVjdGl2ZXMucHJlc2VydmUgPT09ICdzdGFydCcpIHtcbiAgICAgIHRoaXMuX291dHB1dC5yYXcgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnByaW50X25ld2xpbmUoZmFsc2UsIHRydWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGlubGluZSBibG9ja1xuICBpZiAoIWFjb3JuLm5ld2xpbmUudGVzdChjdXJyZW50X3Rva2VuLnRleHQpICYmICFjdXJyZW50X3Rva2VuLm5ld2xpbmVzKSB7XG4gICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IHRydWU7XG4gICAgdGhpcy5wcmludF90b2tlbihjdXJyZW50X3Rva2VuKTtcbiAgICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5wcmludF9ibG9ja19jb21tbWVudChjdXJyZW50X3Rva2VuLCBwcmVzZXJ2ZV9zdGF0ZW1lbnRfZmxhZ3MpO1xuICB9XG59O1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5wcmludF9ibG9ja19jb21tbWVudCA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4sIHByZXNlcnZlX3N0YXRlbWVudF9mbGFncykge1xuICB2YXIgbGluZXMgPSBzcGxpdF9saW5lYnJlYWtzKGN1cnJlbnRfdG9rZW4udGV4dCk7XG4gIHZhciBqOyAvLyBpdGVyYXRvciBmb3IgdGhpcyBjYXNlXG4gIHZhciBqYXZhZG9jID0gZmFsc2U7XG4gIHZhciBzdGFybGVzcyA9IGZhbHNlO1xuICB2YXIgbGFzdEluZGVudCA9IGN1cnJlbnRfdG9rZW4ud2hpdGVzcGFjZV9iZWZvcmU7XG4gIHZhciBsYXN0SW5kZW50TGVuZ3RoID0gbGFzdEluZGVudC5sZW5ndGg7XG5cbiAgLy8gYmxvY2sgY29tbWVudCBzdGFydHMgd2l0aCBhIG5ldyBsaW5lXG4gIHRoaXMucHJpbnRfbmV3bGluZShmYWxzZSwgcHJlc2VydmVfc3RhdGVtZW50X2ZsYWdzKTtcblxuICAvLyBmaXJzdCBsaW5lIGFsd2F5cyBpbmRlbnRlZFxuICB0aGlzLnByaW50X3Rva2VuX2xpbmVfaW5kZW50YXRpb24oY3VycmVudF90b2tlbik7XG4gIHRoaXMuX291dHB1dC5hZGRfdG9rZW4obGluZXNbMF0pO1xuICB0aGlzLnByaW50X25ld2xpbmUoZmFsc2UsIHByZXNlcnZlX3N0YXRlbWVudF9mbGFncyk7XG5cblxuICBpZiAobGluZXMubGVuZ3RoID4gMSkge1xuICAgIGxpbmVzID0gbGluZXMuc2xpY2UoMSk7XG4gICAgamF2YWRvYyA9IGFsbF9saW5lc19zdGFydF93aXRoKGxpbmVzLCAnKicpO1xuICAgIHN0YXJsZXNzID0gZWFjaF9saW5lX21hdGNoZXNfaW5kZW50KGxpbmVzLCBsYXN0SW5kZW50KTtcblxuICAgIGlmIChqYXZhZG9jKSB7XG4gICAgICB0aGlzLl9mbGFncy5hbGlnbm1lbnQgPSAxO1xuICAgIH1cblxuICAgIGZvciAoaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGphdmFkb2MpIHtcbiAgICAgICAgLy8gamF2YWRvYzogcmVmb3JtYXQgYW5kIHJlLWluZGVudFxuICAgICAgICB0aGlzLnByaW50X3Rva2VuX2xpbmVfaW5kZW50YXRpb24oY3VycmVudF90b2tlbik7XG4gICAgICAgIHRoaXMuX291dHB1dC5hZGRfdG9rZW4obHRyaW0obGluZXNbal0pKTtcbiAgICAgIH0gZWxzZSBpZiAoc3Rhcmxlc3MgJiYgbGluZXNbal0pIHtcbiAgICAgICAgLy8gc3Rhcmxlc3M6IHJlLWluZGVudCBub24tZW1wdHkgY29udGVudCwgYXZvaWRpbmcgdHJpbVxuICAgICAgICB0aGlzLnByaW50X3Rva2VuX2xpbmVfaW5kZW50YXRpb24oY3VycmVudF90b2tlbik7XG4gICAgICAgIHRoaXMuX291dHB1dC5hZGRfdG9rZW4obGluZXNbal0uc3Vic3RyaW5nKGxhc3RJbmRlbnRMZW5ndGgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vcm1hbCBjb21tZW50cyBvdXRwdXQgcmF3XG4gICAgICAgIHRoaXMuX291dHB1dC5jdXJyZW50X2xpbmUuc2V0X2luZGVudCgtMSk7XG4gICAgICAgIHRoaXMuX291dHB1dC5hZGRfdG9rZW4obGluZXNbal0pO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3IgY29tbWVudHMgb24gdGhlaXIgb3duIGxpbmUgb3IgIG1vcmUgdGhhbiBvbmUgbGluZSwgbWFrZSBzdXJlIHRoZXJlJ3MgYSBuZXcgbGluZSBhZnRlclxuICAgICAgdGhpcy5wcmludF9uZXdsaW5lKGZhbHNlLCBwcmVzZXJ2ZV9zdGF0ZW1lbnRfZmxhZ3MpO1xuICAgIH1cblxuICAgIHRoaXMuX2ZsYWdzLmFsaWdubWVudCA9IDA7XG4gIH1cbn07XG5cblxuQmVhdXRpZmllci5wcm90b3R5cGUuaGFuZGxlX2NvbW1lbnQgPSBmdW5jdGlvbihjdXJyZW50X3Rva2VuLCBwcmVzZXJ2ZV9zdGF0ZW1lbnRfZmxhZ3MpIHtcbiAgaWYgKGN1cnJlbnRfdG9rZW4ubmV3bGluZXMpIHtcbiAgICB0aGlzLnByaW50X25ld2xpbmUoZmFsc2UsIHByZXNlcnZlX3N0YXRlbWVudF9mbGFncyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fb3V0cHV0LnRyaW0odHJ1ZSk7XG4gIH1cblxuICB0aGlzLl9vdXRwdXQuc3BhY2VfYmVmb3JlX3Rva2VuID0gdHJ1ZTtcbiAgdGhpcy5wcmludF90b2tlbihjdXJyZW50X3Rva2VuKTtcbiAgdGhpcy5wcmludF9uZXdsaW5lKGZhbHNlLCBwcmVzZXJ2ZV9zdGF0ZW1lbnRfZmxhZ3MpO1xufTtcblxuQmVhdXRpZmllci5wcm90b3R5cGUuaGFuZGxlX2RvdCA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4pIHtcbiAgaWYgKHRoaXMuc3RhcnRfb2Zfc3RhdGVtZW50KGN1cnJlbnRfdG9rZW4pKSB7XG4gICAgLy8gVGhlIGNvbmRpdGlvbmFsIHN0YXJ0cyB0aGUgc3RhdGVtZW50IGlmIGFwcHJvcHJpYXRlLlxuICB9IGVsc2Uge1xuICAgIHRoaXMuaGFuZGxlX3doaXRlc3BhY2VfYW5kX2NvbW1lbnRzKGN1cnJlbnRfdG9rZW4sIHRydWUpO1xuICB9XG5cbiAgaWYgKHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dC5tYXRjaCgnXlswLTldKyQnKSkge1xuICAgIHRoaXMuX291dHB1dC5zcGFjZV9iZWZvcmVfdG9rZW4gPSB0cnVlO1xuICB9XG5cbiAgaWYgKHJlc2VydmVkX2FycmF5KHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4sIHNwZWNpYWxfd29yZHMpKSB7XG4gICAgdGhpcy5fb3V0cHV0LnNwYWNlX2JlZm9yZV90b2tlbiA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIC8vIGFsbG93IHByZXNlcnZlZCBuZXdsaW5lcyBiZWZvcmUgZG90cyBpbiBnZW5lcmFsXG4gICAgLy8gZm9yY2UgbmV3bGluZXMgb24gZG90cyBhZnRlciBjbG9zZSBwYXJlbiB3aGVuIGJyZWFrX2NoYWluZWQgLSBmb3IgYmFyKCkuYmF6KClcbiAgICB0aGlzLmFsbG93X3dyYXBfb3JfcHJlc2VydmVkX25ld2xpbmUoY3VycmVudF90b2tlbixcbiAgICAgIHRoaXMuX2ZsYWdzLmxhc3RfdG9rZW4udGV4dCA9PT0gJyknICYmIHRoaXMuX29wdGlvbnMuYnJlYWtfY2hhaW5lZF9tZXRob2RzKTtcbiAgfVxuXG4gIC8vIE9ubHkgdW5pbmRlbnQgY2hhaW5lZCBtZXRob2QgZG90IGlmIHRoaXMgZG90IHN0YXJ0cyBhIG5ldyBsaW5lLlxuICAvLyBPdGhlcndpc2UgdGhlIGF1dG9tYXRpYyBleHRyYSBpbmRlbnRhdGlvbiByZW1vdmFsIHdpbGwgaGFuZGxlIHRoZSBvdmVyIGluZGVudFxuICBpZiAodGhpcy5fb3B0aW9ucy51bmluZGVudF9jaGFpbmVkX21ldGhvZHMgJiYgdGhpcy5fb3V0cHV0Lmp1c3RfYWRkZWRfbmV3bGluZSgpKSB7XG4gICAgdGhpcy5kZWluZGVudCgpO1xuICB9XG5cbiAgdGhpcy5wcmludF90b2tlbihjdXJyZW50X3Rva2VuKTtcbn07XG5cbkJlYXV0aWZpZXIucHJvdG90eXBlLmhhbmRsZV91bmtub3duID0gZnVuY3Rpb24oY3VycmVudF90b2tlbiwgcHJlc2VydmVfc3RhdGVtZW50X2ZsYWdzKSB7XG4gIHRoaXMucHJpbnRfdG9rZW4oY3VycmVudF90b2tlbik7XG5cbiAgaWYgKGN1cnJlbnRfdG9rZW4udGV4dFtjdXJyZW50X3Rva2VuLnRleHQubGVuZ3RoIC0gMV0gPT09ICdcXG4nKSB7XG4gICAgdGhpcy5wcmludF9uZXdsaW5lKGZhbHNlLCBwcmVzZXJ2ZV9zdGF0ZW1lbnRfZmxhZ3MpO1xuICB9XG59O1xuXG5CZWF1dGlmaWVyLnByb3RvdHlwZS5oYW5kbGVfZW9mID0gZnVuY3Rpb24oY3VycmVudF90b2tlbikge1xuICAvLyBVbndpbmQgYW55IG9wZW4gc3RhdGVtZW50c1xuICB3aGlsZSAodGhpcy5fZmxhZ3MubW9kZSA9PT0gTU9ERS5TdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnJlc3RvcmVfbW9kZSgpO1xuICB9XG4gIHRoaXMuaGFuZGxlX3doaXRlc3BhY2VfYW5kX2NvbW1lbnRzKGN1cnJlbnRfdG9rZW4pO1xufTtcblxubW9kdWxlLmV4cG9ydHMuQmVhdXRpZmllciA9IEJlYXV0aWZpZXI7XG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLypcbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuKi9cblxuXG5cbmZ1bmN0aW9uIE91dHB1dExpbmUocGFyZW50KSB7XG4gIHRoaXMuX19wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuX19jaGFyYWN0ZXJfY291bnQgPSAwO1xuICAvLyB1c2UgaW5kZW50X2NvdW50IGFzIGEgbWFya2VyIGZvciB0aGlzLl9fbGluZXMgdGhhdCBoYXZlIHByZXNlcnZlZCBpbmRlbnRhdGlvblxuICB0aGlzLl9faW5kZW50X2NvdW50ID0gLTE7XG4gIHRoaXMuX19hbGlnbm1lbnRfY291bnQgPSAwO1xuICB0aGlzLl9fd3JhcF9wb2ludF9pbmRleCA9IDA7XG4gIHRoaXMuX193cmFwX3BvaW50X2NoYXJhY3Rlcl9jb3VudCA9IDA7XG4gIHRoaXMuX193cmFwX3BvaW50X2luZGVudF9jb3VudCA9IC0xO1xuICB0aGlzLl9fd3JhcF9wb2ludF9hbGlnbm1lbnRfY291bnQgPSAwO1xuXG4gIHRoaXMuX19pdGVtcyA9IFtdO1xufVxuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS5jbG9uZV9lbXB0eSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGluZSA9IG5ldyBPdXRwdXRMaW5lKHRoaXMuX19wYXJlbnQpO1xuICBsaW5lLnNldF9pbmRlbnQodGhpcy5fX2luZGVudF9jb3VudCwgdGhpcy5fX2FsaWdubWVudF9jb3VudCk7XG4gIHJldHVybiBsaW5lO1xufTtcblxuT3V0cHV0TGluZS5wcm90b3R5cGUuaXRlbSA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gdGhpcy5fX2l0ZW1zW3RoaXMuX19pdGVtcy5sZW5ndGggKyBpbmRleF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMuX19pdGVtc1tpbmRleF07XG4gIH1cbn07XG5cbk91dHB1dExpbmUucHJvdG90eXBlLmhhc19tYXRjaCA9IGZ1bmN0aW9uKHBhdHRlcm4pIHtcbiAgZm9yICh2YXIgbGFzdENoZWNrZWRPdXRwdXQgPSB0aGlzLl9faXRlbXMubGVuZ3RoIC0gMTsgbGFzdENoZWNrZWRPdXRwdXQgPj0gMDsgbGFzdENoZWNrZWRPdXRwdXQtLSkge1xuICAgIGlmICh0aGlzLl9faXRlbXNbbGFzdENoZWNrZWRPdXRwdXRdLm1hdGNoKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuT3V0cHV0TGluZS5wcm90b3R5cGUuc2V0X2luZGVudCA9IGZ1bmN0aW9uKGluZGVudCwgYWxpZ25tZW50KSB7XG4gIGlmICh0aGlzLmlzX2VtcHR5KCkpIHtcbiAgICB0aGlzLl9faW5kZW50X2NvdW50ID0gaW5kZW50IHx8IDA7XG4gICAgdGhpcy5fX2FsaWdubWVudF9jb3VudCA9IGFsaWdubWVudCB8fCAwO1xuICAgIHRoaXMuX19jaGFyYWN0ZXJfY291bnQgPSB0aGlzLl9fcGFyZW50LmdldF9pbmRlbnRfc2l6ZSh0aGlzLl9faW5kZW50X2NvdW50LCB0aGlzLl9fYWxpZ25tZW50X2NvdW50KTtcbiAgfVxufTtcblxuT3V0cHV0TGluZS5wcm90b3R5cGUuX3NldF93cmFwX3BvaW50ID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9fcGFyZW50LndyYXBfbGluZV9sZW5ndGgpIHtcbiAgICB0aGlzLl9fd3JhcF9wb2ludF9pbmRleCA9IHRoaXMuX19pdGVtcy5sZW5ndGg7XG4gICAgdGhpcy5fX3dyYXBfcG9pbnRfY2hhcmFjdGVyX2NvdW50ID0gdGhpcy5fX2NoYXJhY3Rlcl9jb3VudDtcbiAgICB0aGlzLl9fd3JhcF9wb2ludF9pbmRlbnRfY291bnQgPSB0aGlzLl9fcGFyZW50Lm5leHRfbGluZS5fX2luZGVudF9jb3VudDtcbiAgICB0aGlzLl9fd3JhcF9wb2ludF9hbGlnbm1lbnRfY291bnQgPSB0aGlzLl9fcGFyZW50Lm5leHRfbGluZS5fX2FsaWdubWVudF9jb3VudDtcbiAgfVxufTtcblxuT3V0cHV0TGluZS5wcm90b3R5cGUuX3Nob3VsZF93cmFwID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9fd3JhcF9wb2ludF9pbmRleCAmJlxuICAgIHRoaXMuX19jaGFyYWN0ZXJfY291bnQgPiB0aGlzLl9fcGFyZW50LndyYXBfbGluZV9sZW5ndGggJiZcbiAgICB0aGlzLl9fd3JhcF9wb2ludF9jaGFyYWN0ZXJfY291bnQgPiB0aGlzLl9fcGFyZW50Lm5leHRfbGluZS5fX2NoYXJhY3Rlcl9jb3VudDtcbn07XG5cbk91dHB1dExpbmUucHJvdG90eXBlLl9hbGxvd193cmFwID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9zaG91bGRfd3JhcCgpKSB7XG4gICAgdGhpcy5fX3BhcmVudC5hZGRfbmV3X2xpbmUoKTtcbiAgICB2YXIgbmV4dCA9IHRoaXMuX19wYXJlbnQuY3VycmVudF9saW5lO1xuICAgIG5leHQuc2V0X2luZGVudCh0aGlzLl9fd3JhcF9wb2ludF9pbmRlbnRfY291bnQsIHRoaXMuX193cmFwX3BvaW50X2FsaWdubWVudF9jb3VudCk7XG4gICAgbmV4dC5fX2l0ZW1zID0gdGhpcy5fX2l0ZW1zLnNsaWNlKHRoaXMuX193cmFwX3BvaW50X2luZGV4KTtcbiAgICB0aGlzLl9faXRlbXMgPSB0aGlzLl9faXRlbXMuc2xpY2UoMCwgdGhpcy5fX3dyYXBfcG9pbnRfaW5kZXgpO1xuXG4gICAgbmV4dC5fX2NoYXJhY3Rlcl9jb3VudCArPSB0aGlzLl9fY2hhcmFjdGVyX2NvdW50IC0gdGhpcy5fX3dyYXBfcG9pbnRfY2hhcmFjdGVyX2NvdW50O1xuICAgIHRoaXMuX19jaGFyYWN0ZXJfY291bnQgPSB0aGlzLl9fd3JhcF9wb2ludF9jaGFyYWN0ZXJfY291bnQ7XG5cbiAgICBpZiAobmV4dC5fX2l0ZW1zWzBdID09PSBcIiBcIikge1xuICAgICAgbmV4dC5fX2l0ZW1zLnNwbGljZSgwLCAxKTtcbiAgICAgIG5leHQuX19jaGFyYWN0ZXJfY291bnQgLT0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuT3V0cHV0TGluZS5wcm90b3R5cGUuaXNfZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX19pdGVtcy5sZW5ndGggPT09IDA7XG59O1xuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5pc19lbXB0eSgpKSB7XG4gICAgcmV0dXJuIHRoaXMuX19pdGVtc1t0aGlzLl9faXRlbXMubGVuZ3RoIC0gMV07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbk91dHB1dExpbmUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbihpdGVtKSB7XG4gIHRoaXMuX19pdGVtcy5wdXNoKGl0ZW0pO1xuICB2YXIgbGFzdF9uZXdsaW5lX2luZGV4ID0gaXRlbS5sYXN0SW5kZXhPZignXFxuJyk7XG4gIGlmIChsYXN0X25ld2xpbmVfaW5kZXggIT09IC0xKSB7XG4gICAgdGhpcy5fX2NoYXJhY3Rlcl9jb3VudCA9IGl0ZW0ubGVuZ3RoIC0gbGFzdF9uZXdsaW5lX2luZGV4O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX19jaGFyYWN0ZXJfY291bnQgKz0gaXRlbS5sZW5ndGg7XG4gIH1cbn07XG5cbk91dHB1dExpbmUucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbSA9IG51bGw7XG4gIGlmICghdGhpcy5pc19lbXB0eSgpKSB7XG4gICAgaXRlbSA9IHRoaXMuX19pdGVtcy5wb3AoKTtcbiAgICB0aGlzLl9fY2hhcmFjdGVyX2NvdW50IC09IGl0ZW0ubGVuZ3RoO1xuICB9XG4gIHJldHVybiBpdGVtO1xufTtcblxuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS5fcmVtb3ZlX2luZGVudCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fX2luZGVudF9jb3VudCA+IDApIHtcbiAgICB0aGlzLl9faW5kZW50X2NvdW50IC09IDE7XG4gICAgdGhpcy5fX2NoYXJhY3Rlcl9jb3VudCAtPSB0aGlzLl9fcGFyZW50LmluZGVudF9zaXplO1xuICB9XG59O1xuXG5PdXRwdXRMaW5lLnByb3RvdHlwZS5fcmVtb3ZlX3dyYXBfaW5kZW50ID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9fd3JhcF9wb2ludF9pbmRlbnRfY291bnQgPiAwKSB7XG4gICAgdGhpcy5fX3dyYXBfcG9pbnRfaW5kZW50X2NvdW50IC09IDE7XG4gIH1cbn07XG5PdXRwdXRMaW5lLnByb3RvdHlwZS50cmltID0gZnVuY3Rpb24oKSB7XG4gIHdoaWxlICh0aGlzLmxhc3QoKSA9PT0gJyAnKSB7XG4gICAgdGhpcy5fX2l0ZW1zLnBvcCgpO1xuICAgIHRoaXMuX19jaGFyYWN0ZXJfY291bnQgLT0gMTtcbiAgfVxufTtcblxuT3V0cHV0TGluZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhpcy5pc19lbXB0eSgpKSB7XG4gICAgaWYgKHRoaXMuX19wYXJlbnQuaW5kZW50X2VtcHR5X2xpbmVzKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLl9fcGFyZW50LmdldF9pbmRlbnRfc3RyaW5nKHRoaXMuX19pbmRlbnRfY291bnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0aGlzLl9fcGFyZW50LmdldF9pbmRlbnRfc3RyaW5nKHRoaXMuX19pbmRlbnRfY291bnQsIHRoaXMuX19hbGlnbm1lbnRfY291bnQpO1xuICAgIHJlc3VsdCArPSB0aGlzLl9faXRlbXMuam9pbignJyk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIEluZGVudFN0cmluZ0NhY2hlKG9wdGlvbnMsIGJhc2VJbmRlbnRTdHJpbmcpIHtcbiAgdGhpcy5fX2NhY2hlID0gWycnXTtcbiAgdGhpcy5fX2luZGVudF9zaXplID0gb3B0aW9ucy5pbmRlbnRfc2l6ZTtcbiAgdGhpcy5fX2luZGVudF9zdHJpbmcgPSBvcHRpb25zLmluZGVudF9jaGFyO1xuICBpZiAoIW9wdGlvbnMuaW5kZW50X3dpdGhfdGFicykge1xuICAgIHRoaXMuX19pbmRlbnRfc3RyaW5nID0gbmV3IEFycmF5KG9wdGlvbnMuaW5kZW50X3NpemUgKyAxKS5qb2luKG9wdGlvbnMuaW5kZW50X2NoYXIpO1xuICB9XG5cbiAgLy8gU2V0IHRvIG51bGwgdG8gY29udGludWUgc3VwcG9ydCBmb3IgYXV0byBkZXRlY3Rpb24gb2YgYmFzZSBpbmRlbnRcbiAgYmFzZUluZGVudFN0cmluZyA9IGJhc2VJbmRlbnRTdHJpbmcgfHwgJyc7XG4gIGlmIChvcHRpb25zLmluZGVudF9sZXZlbCA+IDApIHtcbiAgICBiYXNlSW5kZW50U3RyaW5nID0gbmV3IEFycmF5KG9wdGlvbnMuaW5kZW50X2xldmVsICsgMSkuam9pbih0aGlzLl9faW5kZW50X3N0cmluZyk7XG4gIH1cblxuICB0aGlzLl9fYmFzZV9zdHJpbmcgPSBiYXNlSW5kZW50U3RyaW5nO1xuICB0aGlzLl9fYmFzZV9zdHJpbmdfbGVuZ3RoID0gYmFzZUluZGVudFN0cmluZy5sZW5ndGg7XG59XG5cbkluZGVudFN0cmluZ0NhY2hlLnByb3RvdHlwZS5nZXRfaW5kZW50X3NpemUgPSBmdW5jdGlvbihpbmRlbnQsIGNvbHVtbikge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5fX2Jhc2Vfc3RyaW5nX2xlbmd0aDtcbiAgY29sdW1uID0gY29sdW1uIHx8IDA7XG4gIGlmIChpbmRlbnQgPCAwKSB7XG4gICAgcmVzdWx0ID0gMDtcbiAgfVxuICByZXN1bHQgKz0gaW5kZW50ICogdGhpcy5fX2luZGVudF9zaXplO1xuICByZXN1bHQgKz0gY29sdW1uO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuSW5kZW50U3RyaW5nQ2FjaGUucHJvdG90eXBlLmdldF9pbmRlbnRfc3RyaW5nID0gZnVuY3Rpb24oaW5kZW50X2xldmVsLCBjb2x1bW4pIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuX19iYXNlX3N0cmluZztcbiAgY29sdW1uID0gY29sdW1uIHx8IDA7XG4gIGlmIChpbmRlbnRfbGV2ZWwgPCAwKSB7XG4gICAgaW5kZW50X2xldmVsID0gMDtcbiAgICByZXN1bHQgPSAnJztcbiAgfVxuICBjb2x1bW4gKz0gaW5kZW50X2xldmVsICogdGhpcy5fX2luZGVudF9zaXplO1xuICB0aGlzLl9fZW5zdXJlX2NhY2hlKGNvbHVtbik7XG4gIHJlc3VsdCArPSB0aGlzLl9fY2FjaGVbY29sdW1uXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbkluZGVudFN0cmluZ0NhY2hlLnByb3RvdHlwZS5fX2Vuc3VyZV9jYWNoZSA9IGZ1bmN0aW9uKGNvbHVtbikge1xuICB3aGlsZSAoY29sdW1uID49IHRoaXMuX19jYWNoZS5sZW5ndGgpIHtcbiAgICB0aGlzLl9fYWRkX2NvbHVtbigpO1xuICB9XG59O1xuXG5JbmRlbnRTdHJpbmdDYWNoZS5wcm90b3R5cGUuX19hZGRfY29sdW1uID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjb2x1bW4gPSB0aGlzLl9fY2FjaGUubGVuZ3RoO1xuICB2YXIgaW5kZW50ID0gMDtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhpcy5fX2luZGVudF9zaXplICYmIGNvbHVtbiA+PSB0aGlzLl9faW5kZW50X3NpemUpIHtcbiAgICBpbmRlbnQgPSBNYXRoLmZsb29yKGNvbHVtbiAvIHRoaXMuX19pbmRlbnRfc2l6ZSk7XG4gICAgY29sdW1uIC09IGluZGVudCAqIHRoaXMuX19pbmRlbnRfc2l6ZTtcbiAgICByZXN1bHQgPSBuZXcgQXJyYXkoaW5kZW50ICsgMSkuam9pbih0aGlzLl9faW5kZW50X3N0cmluZyk7XG4gIH1cbiAgaWYgKGNvbHVtbikge1xuICAgIHJlc3VsdCArPSBuZXcgQXJyYXkoY29sdW1uICsgMSkuam9pbignICcpO1xuICB9XG5cbiAgdGhpcy5fX2NhY2hlLnB1c2gocmVzdWx0KTtcbn07XG5cbmZ1bmN0aW9uIE91dHB1dChvcHRpb25zLCBiYXNlSW5kZW50U3RyaW5nKSB7XG4gIHRoaXMuX19pbmRlbnRfY2FjaGUgPSBuZXcgSW5kZW50U3RyaW5nQ2FjaGUob3B0aW9ucywgYmFzZUluZGVudFN0cmluZyk7XG4gIHRoaXMucmF3ID0gZmFsc2U7XG4gIHRoaXMuX2VuZF93aXRoX25ld2xpbmUgPSBvcHRpb25zLmVuZF93aXRoX25ld2xpbmU7XG4gIHRoaXMuaW5kZW50X3NpemUgPSBvcHRpb25zLmluZGVudF9zaXplO1xuICB0aGlzLndyYXBfbGluZV9sZW5ndGggPSBvcHRpb25zLndyYXBfbGluZV9sZW5ndGg7XG4gIHRoaXMuaW5kZW50X2VtcHR5X2xpbmVzID0gb3B0aW9ucy5pbmRlbnRfZW1wdHlfbGluZXM7XG4gIHRoaXMuX19saW5lcyA9IFtdO1xuICB0aGlzLnByZXZpb3VzX2xpbmUgPSBudWxsO1xuICB0aGlzLmN1cnJlbnRfbGluZSA9IG51bGw7XG4gIHRoaXMubmV4dF9saW5lID0gbmV3IE91dHB1dExpbmUodGhpcyk7XG4gIHRoaXMuc3BhY2VfYmVmb3JlX3Rva2VuID0gZmFsc2U7XG4gIHRoaXMubm9uX2JyZWFraW5nX3NwYWNlID0gZmFsc2U7XG4gIHRoaXMucHJldmlvdXNfdG9rZW5fd3JhcHBlZCA9IGZhbHNlO1xuICAvLyBpbml0aWFsaXplXG4gIHRoaXMuX19hZGRfb3V0cHV0bGluZSgpO1xufVxuXG5PdXRwdXQucHJvdG90eXBlLl9fYWRkX291dHB1dGxpbmUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wcmV2aW91c19saW5lID0gdGhpcy5jdXJyZW50X2xpbmU7XG4gIHRoaXMuY3VycmVudF9saW5lID0gdGhpcy5uZXh0X2xpbmUuY2xvbmVfZW1wdHkoKTtcbiAgdGhpcy5fX2xpbmVzLnB1c2godGhpcy5jdXJyZW50X2xpbmUpO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5nZXRfbGluZV9udW1iZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX19saW5lcy5sZW5ndGg7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLmdldF9pbmRlbnRfc3RyaW5nID0gZnVuY3Rpb24oaW5kZW50LCBjb2x1bW4pIHtcbiAgcmV0dXJuIHRoaXMuX19pbmRlbnRfY2FjaGUuZ2V0X2luZGVudF9zdHJpbmcoaW5kZW50LCBjb2x1bW4pO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5nZXRfaW5kZW50X3NpemUgPSBmdW5jdGlvbihpbmRlbnQsIGNvbHVtbikge1xuICByZXR1cm4gdGhpcy5fX2luZGVudF9jYWNoZS5nZXRfaW5kZW50X3NpemUoaW5kZW50LCBjb2x1bW4pO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5pc19lbXB0eSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIXRoaXMucHJldmlvdXNfbGluZSAmJiB0aGlzLmN1cnJlbnRfbGluZS5pc19lbXB0eSgpO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5hZGRfbmV3X2xpbmUgPSBmdW5jdGlvbihmb3JjZV9uZXdsaW5lKSB7XG4gIC8vIG5ldmVyIG5ld2xpbmUgYXQgdGhlIHN0YXJ0IG9mIGZpbGVcbiAgLy8gb3RoZXJ3aXNlLCBuZXdsaW5lIG9ubHkgaWYgd2UgZGlkbid0IGp1c3QgYWRkIG9uZSBvciB3ZSdyZSBmb3JjZWRcbiAgaWYgKHRoaXMuaXNfZW1wdHkoKSB8fFxuICAgICghZm9yY2VfbmV3bGluZSAmJiB0aGlzLmp1c3RfYWRkZWRfbmV3bGluZSgpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGlmIHJhdyBvdXRwdXQgaXMgZW5hYmxlZCwgZG9uJ3QgcHJpbnQgYWRkaXRpb25hbCBuZXdsaW5lcyxcbiAgLy8gYnV0IHN0aWxsIHJldHVybiBUcnVlIGFzIHRob3VnaCB5b3UgaGFkXG4gIGlmICghdGhpcy5yYXcpIHtcbiAgICB0aGlzLl9fYWRkX291dHB1dGxpbmUoKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuZ2V0X2NvZGUgPSBmdW5jdGlvbihlb2wpIHtcbiAgdGhpcy50cmltKHRydWUpO1xuXG4gIC8vIGhhbmRsZSBzb21lIGVkZ2UgY2FzZXMgd2hlcmUgdGhlIGxhc3QgdG9rZW5zXG4gIC8vIGhhcyB0ZXh0IHRoYXQgZW5kcyB3aXRoIG5ld2xpbmUocylcbiAgdmFyIGxhc3RfaXRlbSA9IHRoaXMuY3VycmVudF9saW5lLnBvcCgpO1xuICBpZiAobGFzdF9pdGVtKSB7XG4gICAgaWYgKGxhc3RfaXRlbVtsYXN0X2l0ZW0ubGVuZ3RoIC0gMV0gPT09ICdcXG4nKSB7XG4gICAgICBsYXN0X2l0ZW0gPSBsYXN0X2l0ZW0ucmVwbGFjZSgvXFxuKyQvZywgJycpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRfbGluZS5wdXNoKGxhc3RfaXRlbSk7XG4gIH1cblxuICBpZiAodGhpcy5fZW5kX3dpdGhfbmV3bGluZSkge1xuICAgIHRoaXMuX19hZGRfb3V0cHV0bGluZSgpO1xuICB9XG5cbiAgdmFyIHN3ZWV0X2NvZGUgPSB0aGlzLl9fbGluZXMuam9pbignXFxuJyk7XG5cbiAgaWYgKGVvbCAhPT0gJ1xcbicpIHtcbiAgICBzd2VldF9jb2RlID0gc3dlZXRfY29kZS5yZXBsYWNlKC9bXFxuXS9nLCBlb2wpO1xuICB9XG4gIHJldHVybiBzd2VldF9jb2RlO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5zZXRfd3JhcF9wb2ludCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmN1cnJlbnRfbGluZS5fc2V0X3dyYXBfcG9pbnQoKTtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuc2V0X2luZGVudCA9IGZ1bmN0aW9uKGluZGVudCwgYWxpZ25tZW50KSB7XG4gIGluZGVudCA9IGluZGVudCB8fCAwO1xuICBhbGlnbm1lbnQgPSBhbGlnbm1lbnQgfHwgMDtcblxuICAvLyBOZXh0IGxpbmUgc3RvcmVzIGFsaWdubWVudCB2YWx1ZXNcbiAgdGhpcy5uZXh0X2xpbmUuc2V0X2luZGVudChpbmRlbnQsIGFsaWdubWVudCk7XG5cbiAgLy8gTmV2ZXIgaW5kZW50IHlvdXIgZmlyc3Qgb3V0cHV0IGluZGVudCBhdCB0aGUgc3RhcnQgb2YgdGhlIGZpbGVcbiAgaWYgKHRoaXMuX19saW5lcy5sZW5ndGggPiAxKSB7XG4gICAgdGhpcy5jdXJyZW50X2xpbmUuc2V0X2luZGVudChpbmRlbnQsIGFsaWdubWVudCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB0aGlzLmN1cnJlbnRfbGluZS5zZXRfaW5kZW50KCk7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuYWRkX3Jhd190b2tlbiA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIGZvciAodmFyIHggPSAwOyB4IDwgdG9rZW4ubmV3bGluZXM7IHgrKykge1xuICAgIHRoaXMuX19hZGRfb3V0cHV0bGluZSgpO1xuICB9XG4gIHRoaXMuY3VycmVudF9saW5lLnNldF9pbmRlbnQoLTEpO1xuICB0aGlzLmN1cnJlbnRfbGluZS5wdXNoKHRva2VuLndoaXRlc3BhY2VfYmVmb3JlKTtcbiAgdGhpcy5jdXJyZW50X2xpbmUucHVzaCh0b2tlbi50ZXh0KTtcbiAgdGhpcy5zcGFjZV9iZWZvcmVfdG9rZW4gPSBmYWxzZTtcbiAgdGhpcy5ub25fYnJlYWtpbmdfc3BhY2UgPSBmYWxzZTtcbiAgdGhpcy5wcmV2aW91c190b2tlbl93cmFwcGVkID0gZmFsc2U7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLmFkZF90b2tlbiA9IGZ1bmN0aW9uKHByaW50YWJsZV90b2tlbikge1xuICB0aGlzLl9fYWRkX3NwYWNlX2JlZm9yZV90b2tlbigpO1xuICB0aGlzLmN1cnJlbnRfbGluZS5wdXNoKHByaW50YWJsZV90b2tlbik7XG4gIHRoaXMuc3BhY2VfYmVmb3JlX3Rva2VuID0gZmFsc2U7XG4gIHRoaXMubm9uX2JyZWFraW5nX3NwYWNlID0gZmFsc2U7XG4gIHRoaXMucHJldmlvdXNfdG9rZW5fd3JhcHBlZCA9IHRoaXMuY3VycmVudF9saW5lLl9hbGxvd193cmFwKCk7XG59O1xuXG5PdXRwdXQucHJvdG90eXBlLl9fYWRkX3NwYWNlX2JlZm9yZV90b2tlbiA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zcGFjZV9iZWZvcmVfdG9rZW4gJiYgIXRoaXMuanVzdF9hZGRlZF9uZXdsaW5lKCkpIHtcbiAgICBpZiAoIXRoaXMubm9uX2JyZWFraW5nX3NwYWNlKSB7XG4gICAgICB0aGlzLnNldF93cmFwX3BvaW50KCk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudF9saW5lLnB1c2goJyAnKTtcbiAgfVxufTtcblxuT3V0cHV0LnByb3RvdHlwZS5yZW1vdmVfaW5kZW50ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgdmFyIG91dHB1dF9sZW5ndGggPSB0aGlzLl9fbGluZXMubGVuZ3RoO1xuICB3aGlsZSAoaW5kZXggPCBvdXRwdXRfbGVuZ3RoKSB7XG4gICAgdGhpcy5fX2xpbmVzW2luZGV4XS5fcmVtb3ZlX2luZGVudCgpO1xuICAgIGluZGV4Kys7XG4gIH1cbiAgdGhpcy5jdXJyZW50X2xpbmUuX3JlbW92ZV93cmFwX2luZGVudCgpO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS50cmltID0gZnVuY3Rpb24oZWF0X25ld2xpbmVzKSB7XG4gIGVhdF9uZXdsaW5lcyA9IChlYXRfbmV3bGluZXMgPT09IHVuZGVmaW5lZCkgPyBmYWxzZSA6IGVhdF9uZXdsaW5lcztcblxuICB0aGlzLmN1cnJlbnRfbGluZS50cmltKCk7XG5cbiAgd2hpbGUgKGVhdF9uZXdsaW5lcyAmJiB0aGlzLl9fbGluZXMubGVuZ3RoID4gMSAmJlxuICAgIHRoaXMuY3VycmVudF9saW5lLmlzX2VtcHR5KCkpIHtcbiAgICB0aGlzLl9fbGluZXMucG9wKCk7XG4gICAgdGhpcy5jdXJyZW50X2xpbmUgPSB0aGlzLl9fbGluZXNbdGhpcy5fX2xpbmVzLmxlbmd0aCAtIDFdO1xuICAgIHRoaXMuY3VycmVudF9saW5lLnRyaW0oKTtcbiAgfVxuXG4gIHRoaXMucHJldmlvdXNfbGluZSA9IHRoaXMuX19saW5lcy5sZW5ndGggPiAxID9cbiAgICB0aGlzLl9fbGluZXNbdGhpcy5fX2xpbmVzLmxlbmd0aCAtIDJdIDogbnVsbDtcbn07XG5cbk91dHB1dC5wcm90b3R5cGUuanVzdF9hZGRlZF9uZXdsaW5lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmN1cnJlbnRfbGluZS5pc19lbXB0eSgpO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5qdXN0X2FkZGVkX2JsYW5rbGluZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pc19lbXB0eSgpIHx8XG4gICAgKHRoaXMuY3VycmVudF9saW5lLmlzX2VtcHR5KCkgJiYgdGhpcy5wcmV2aW91c19saW5lLmlzX2VtcHR5KCkpO1xufTtcblxuT3V0cHV0LnByb3RvdHlwZS5lbnN1cmVfZW1wdHlfbGluZV9hYm92ZSA9IGZ1bmN0aW9uKHN0YXJ0c193aXRoLCBlbmRzX3dpdGgpIHtcbiAgdmFyIGluZGV4ID0gdGhpcy5fX2xpbmVzLmxlbmd0aCAtIDI7XG4gIHdoaWxlIChpbmRleCA+PSAwKSB7XG4gICAgdmFyIHBvdGVudGlhbEVtcHR5TGluZSA9IHRoaXMuX19saW5lc1tpbmRleF07XG4gICAgaWYgKHBvdGVudGlhbEVtcHR5TGluZS5pc19lbXB0eSgpKSB7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2UgaWYgKHBvdGVudGlhbEVtcHR5TGluZS5pdGVtKDApLmluZGV4T2Yoc3RhcnRzX3dpdGgpICE9PSAwICYmXG4gICAgICBwb3RlbnRpYWxFbXB0eUxpbmUuaXRlbSgtMSkgIT09IGVuZHNfd2l0aCkge1xuICAgICAgdGhpcy5fX2xpbmVzLnNwbGljZShpbmRleCArIDEsIDAsIG5ldyBPdXRwdXRMaW5lKHRoaXMpKTtcbiAgICAgIHRoaXMucHJldmlvdXNfbGluZSA9IHRoaXMuX19saW5lc1t0aGlzLl9fbGluZXMubGVuZ3RoIC0gMl07XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaW5kZXgtLTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuT3V0cHV0ID0gT3V0cHV0O1xuXG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG4vKmpzaGludCBub2RlOnRydWUgKi9cbi8qXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuKi9cblxuXG5cbmZ1bmN0aW9uIFRva2VuKHR5cGUsIHRleHQsIG5ld2xpbmVzLCB3aGl0ZXNwYWNlX2JlZm9yZSkge1xuICB0aGlzLnR5cGUgPSB0eXBlO1xuICB0aGlzLnRleHQgPSB0ZXh0O1xuXG4gIC8vIGNvbW1lbnRzX2JlZm9yZSBhcmVcbiAgLy8gY29tbWVudHMgdGhhdCBoYXZlIGEgbmV3IGxpbmUgYmVmb3JlIHRoZW1cbiAgLy8gYW5kIG1heSBvciBtYXkgbm90IGhhdmUgYSBuZXdsaW5lIGFmdGVyXG4gIC8vIHRoaXMgaXMgYSBzZXQgb2YgY29tbWVudHMgYmVmb3JlXG4gIHRoaXMuY29tbWVudHNfYmVmb3JlID0gbnVsbDsgLyogaW5saW5lIGNvbW1lbnQqL1xuXG5cbiAgLy8gdGhpcy5jb21tZW50c19hZnRlciA9ICBuZXcgVG9rZW5TdHJlYW0oKTsgLy8gbm8gbmV3IGxpbmUgYmVmb3JlIGFuZCBuZXdsaW5lIGFmdGVyXG4gIHRoaXMubmV3bGluZXMgPSBuZXdsaW5lcyB8fCAwO1xuICB0aGlzLndoaXRlc3BhY2VfYmVmb3JlID0gd2hpdGVzcGFjZV9iZWZvcmUgfHwgJyc7XG4gIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgdGhpcy5wcmV2aW91cyA9IG51bGw7XG4gIHRoaXMub3BlbmVkID0gbnVsbDtcbiAgdGhpcy5jbG9zZWQgPSBudWxsO1xuICB0aGlzLmRpcmVjdGl2ZXMgPSBudWxsO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzLlRva2VuID0gVG9rZW47XG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoganNoaW50IG5vZGU6IHRydWUsIGN1cmx5OiBmYWxzZSAqL1xuLy8gUGFydHMgb2YgdGhpcyBzZWN0aW9uIG9mIGNvZGUgaXMgdGFrZW4gZnJvbSBhY29ybi5cbi8vXG4vLyBBY29ybiB3YXMgd3JpdHRlbiBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCByZWxlYXNlZCB1bmRlciBhbiBNSVRcbi8vIGxpY2Vuc2UuIFRoZSBVbmljb2RlIHJlZ2V4cHMgKGZvciBpZGVudGlmaWVycyBhbmQgd2hpdGVzcGFjZSkgd2VyZVxuLy8gdGFrZW4gZnJvbSBbRXNwcmltYV0oaHR0cDovL2VzcHJpbWEub3JnKSBieSBBcml5YSBIaWRheWF0LlxuLy9cbi8vIEdpdCByZXBvc2l0b3JpZXMgZm9yIEFjb3JuIGFyZSBhdmFpbGFibGUgYXRcbi8vXG4vLyAgICAgaHR0cDovL21hcmlqbmhhdmVyYmVrZS5ubC9naXQvYWNvcm5cbi8vICAgICBodHRwczovL2dpdGh1Yi5jb20vbWFyaWpuaC9hY29ybi5naXRcblxuLy8gIyMgQ2hhcmFjdGVyIGNhdGVnb3JpZXNcblxuXG5cblxuLy8gYWNvcm4gdXNlZCBjaGFyIGNvZGVzIHRvIHNxdWVlemUgdGhlIGxhc3QgYml0IG9mIHBlcmZvcm1hbmNlIG91dFxuLy8gQmVhdXRpZmllciBpcyBva2F5IHdpdGhvdXQgdGhhdCwgc28gd2UncmUgdXNpbmcgcmVnZXhcbi8vIHBlcm1pdCAjICgyMyksICQgKDM2KSwgYW5kIEAgKDY0KS4gQCBpcyB1c2VkIGluIEVTNyBkZWNvcmF0b3JzLlxuLy8gNjUgdGhyb3VnaCA5MSBhcmUgdXBwZXJjYXNlIGxldHRlcnMuXG4vLyBwZXJtaXQgXyAoOTUpLlxuLy8gOTcgdGhyb3VnaCAxMjMgYXJlIGxvd2VyY2FzZSBsZXR0ZXJzLlxudmFyIGJhc2VBU0NJSWlkZW50aWZpZXJTdGFydENoYXJzID0gXCJcXFxceDIzXFxcXHgyNFxcXFx4NDBcXFxceDQxLVxcXFx4NWFcXFxceDVmXFxcXHg2MS1cXFxceDdhXCI7XG5cbi8vIGluc2lkZSBhbiBpZGVudGlmaWVyIEAgaXMgbm90IGFsbG93ZWQgYnV0IDAtOSBhcmUuXG52YXIgYmFzZUFTQ0lJaWRlbnRpZmllckNoYXJzID0gXCJcXFxceDI0XFxcXHgzMC1cXFxceDM5XFxcXHg0MS1cXFxceDVhXFxcXHg1ZlxcXFx4NjEtXFxcXHg3YVwiO1xuXG4vLyBCaWcgdWdseSByZWd1bGFyIGV4cHJlc3Npb25zIHRoYXQgbWF0Y2ggY2hhcmFjdGVycyBpbiB0aGVcbi8vIHdoaXRlc3BhY2UsIGlkZW50aWZpZXIsIGFuZCBpZGVudGlmaWVyLXN0YXJ0IGNhdGVnb3JpZXMuIFRoZXNlXG4vLyBhcmUgb25seSBhcHBsaWVkIHdoZW4gYSBjaGFyYWN0ZXIgaXMgZm91bmQgdG8gYWN0dWFsbHkgaGF2ZSBhXG4vLyBjb2RlIHBvaW50IGFib3ZlIDEyOC5cbnZhciBub25BU0NJSWlkZW50aWZpZXJTdGFydENoYXJzID0gXCJcXFxceGFhXFxcXHhiNVxcXFx4YmFcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZjZcXFxceGY4LVxcXFx1MDJjMVxcXFx1MDJjNi1cXFxcdTAyZDFcXFxcdTAyZTAtXFxcXHUwMmU0XFxcXHUwMmVjXFxcXHUwMmVlXFxcXHUwMzcwLVxcXFx1MDM3NFxcXFx1MDM3NlxcXFx1MDM3N1xcXFx1MDM3YS1cXFxcdTAzN2RcXFxcdTAzODZcXFxcdTAzODgtXFxcXHUwMzhhXFxcXHUwMzhjXFxcXHUwMzhlLVxcXFx1MDNhMVxcXFx1MDNhMy1cXFxcdTAzZjVcXFxcdTAzZjctXFxcXHUwNDgxXFxcXHUwNDhhLVxcXFx1MDUyN1xcXFx1MDUzMS1cXFxcdTA1NTZcXFxcdTA1NTlcXFxcdTA1NjEtXFxcXHUwNTg3XFxcXHUwNWQwLVxcXFx1MDVlYVxcXFx1MDVmMC1cXFxcdTA1ZjJcXFxcdTA2MjAtXFxcXHUwNjRhXFxcXHUwNjZlXFxcXHUwNjZmXFxcXHUwNjcxLVxcXFx1MDZkM1xcXFx1MDZkNVxcXFx1MDZlNVxcXFx1MDZlNlxcXFx1MDZlZVxcXFx1MDZlZlxcXFx1MDZmYS1cXFxcdTA2ZmNcXFxcdTA2ZmZcXFxcdTA3MTBcXFxcdTA3MTItXFxcXHUwNzJmXFxcXHUwNzRkLVxcXFx1MDdhNVxcXFx1MDdiMVxcXFx1MDdjYS1cXFxcdTA3ZWFcXFxcdTA3ZjRcXFxcdTA3ZjVcXFxcdTA3ZmFcXFxcdTA4MDAtXFxcXHUwODE1XFxcXHUwODFhXFxcXHUwODI0XFxcXHUwODI4XFxcXHUwODQwLVxcXFx1MDg1OFxcXFx1MDhhMFxcXFx1MDhhMi1cXFxcdTA4YWNcXFxcdTA5MDQtXFxcXHUwOTM5XFxcXHUwOTNkXFxcXHUwOTUwXFxcXHUwOTU4LVxcXFx1MDk2MVxcXFx1MDk3MS1cXFxcdTA5NzdcXFxcdTA5NzktXFxcXHUwOTdmXFxcXHUwOTg1LVxcXFx1MDk4Y1xcXFx1MDk4ZlxcXFx1MDk5MFxcXFx1MDk5My1cXFxcdTA5YThcXFxcdTA5YWEtXFxcXHUwOWIwXFxcXHUwOWIyXFxcXHUwOWI2LVxcXFx1MDliOVxcXFx1MDliZFxcXFx1MDljZVxcXFx1MDlkY1xcXFx1MDlkZFxcXFx1MDlkZi1cXFxcdTA5ZTFcXFxcdTA5ZjBcXFxcdTA5ZjFcXFxcdTBhMDUtXFxcXHUwYTBhXFxcXHUwYTBmXFxcXHUwYTEwXFxcXHUwYTEzLVxcXFx1MGEyOFxcXFx1MGEyYS1cXFxcdTBhMzBcXFxcdTBhMzJcXFxcdTBhMzNcXFxcdTBhMzVcXFxcdTBhMzZcXFxcdTBhMzhcXFxcdTBhMzlcXFxcdTBhNTktXFxcXHUwYTVjXFxcXHUwYTVlXFxcXHUwYTcyLVxcXFx1MGE3NFxcXFx1MGE4NS1cXFxcdTBhOGRcXFxcdTBhOGYtXFxcXHUwYTkxXFxcXHUwYTkzLVxcXFx1MGFhOFxcXFx1MGFhYS1cXFxcdTBhYjBcXFxcdTBhYjJcXFxcdTBhYjNcXFxcdTBhYjUtXFxcXHUwYWI5XFxcXHUwYWJkXFxcXHUwYWQwXFxcXHUwYWUwXFxcXHUwYWUxXFxcXHUwYjA1LVxcXFx1MGIwY1xcXFx1MGIwZlxcXFx1MGIxMFxcXFx1MGIxMy1cXFxcdTBiMjhcXFxcdTBiMmEtXFxcXHUwYjMwXFxcXHUwYjMyXFxcXHUwYjMzXFxcXHUwYjM1LVxcXFx1MGIzOVxcXFx1MGIzZFxcXFx1MGI1Y1xcXFx1MGI1ZFxcXFx1MGI1Zi1cXFxcdTBiNjFcXFxcdTBiNzFcXFxcdTBiODNcXFxcdTBiODUtXFxcXHUwYjhhXFxcXHUwYjhlLVxcXFx1MGI5MFxcXFx1MGI5Mi1cXFxcdTBiOTVcXFxcdTBiOTlcXFxcdTBiOWFcXFxcdTBiOWNcXFxcdTBiOWVcXFxcdTBiOWZcXFxcdTBiYTNcXFxcdTBiYTRcXFxcdTBiYTgtXFxcXHUwYmFhXFxcXHUwYmFlLVxcXFx1MGJiOVxcXFx1MGJkMFxcXFx1MGMwNS1cXFxcdTBjMGNcXFxcdTBjMGUtXFxcXHUwYzEwXFxcXHUwYzEyLVxcXFx1MGMyOFxcXFx1MGMyYS1cXFxcdTBjMzNcXFxcdTBjMzUtXFxcXHUwYzM5XFxcXHUwYzNkXFxcXHUwYzU4XFxcXHUwYzU5XFxcXHUwYzYwXFxcXHUwYzYxXFxcXHUwYzg1LVxcXFx1MGM4Y1xcXFx1MGM4ZS1cXFxcdTBjOTBcXFxcdTBjOTItXFxcXHUwY2E4XFxcXHUwY2FhLVxcXFx1MGNiM1xcXFx1MGNiNS1cXFxcdTBjYjlcXFxcdTBjYmRcXFxcdTBjZGVcXFxcdTBjZTBcXFxcdTBjZTFcXFxcdTBjZjFcXFxcdTBjZjJcXFxcdTBkMDUtXFxcXHUwZDBjXFxcXHUwZDBlLVxcXFx1MGQxMFxcXFx1MGQxMi1cXFxcdTBkM2FcXFxcdTBkM2RcXFxcdTBkNGVcXFxcdTBkNjBcXFxcdTBkNjFcXFxcdTBkN2EtXFxcXHUwZDdmXFxcXHUwZDg1LVxcXFx1MGQ5NlxcXFx1MGQ5YS1cXFxcdTBkYjFcXFxcdTBkYjMtXFxcXHUwZGJiXFxcXHUwZGJkXFxcXHUwZGMwLVxcXFx1MGRjNlxcXFx1MGUwMS1cXFxcdTBlMzBcXFxcdTBlMzJcXFxcdTBlMzNcXFxcdTBlNDAtXFxcXHUwZTQ2XFxcXHUwZTgxXFxcXHUwZTgyXFxcXHUwZTg0XFxcXHUwZTg3XFxcXHUwZTg4XFxcXHUwZThhXFxcXHUwZThkXFxcXHUwZTk0LVxcXFx1MGU5N1xcXFx1MGU5OS1cXFxcdTBlOWZcXFxcdTBlYTEtXFxcXHUwZWEzXFxcXHUwZWE1XFxcXHUwZWE3XFxcXHUwZWFhXFxcXHUwZWFiXFxcXHUwZWFkLVxcXFx1MGViMFxcXFx1MGViMlxcXFx1MGViM1xcXFx1MGViZFxcXFx1MGVjMC1cXFxcdTBlYzRcXFxcdTBlYzZcXFxcdTBlZGMtXFxcXHUwZWRmXFxcXHUwZjAwXFxcXHUwZjQwLVxcXFx1MGY0N1xcXFx1MGY0OS1cXFxcdTBmNmNcXFxcdTBmODgtXFxcXHUwZjhjXFxcXHUxMDAwLVxcXFx1MTAyYVxcXFx1MTAzZlxcXFx1MTA1MC1cXFxcdTEwNTVcXFxcdTEwNWEtXFxcXHUxMDVkXFxcXHUxMDYxXFxcXHUxMDY1XFxcXHUxMDY2XFxcXHUxMDZlLVxcXFx1MTA3MFxcXFx1MTA3NS1cXFxcdTEwODFcXFxcdTEwOGVcXFxcdTEwYTAtXFxcXHUxMGM1XFxcXHUxMGM3XFxcXHUxMGNkXFxcXHUxMGQwLVxcXFx1MTBmYVxcXFx1MTBmYy1cXFxcdTEyNDhcXFxcdTEyNGEtXFxcXHUxMjRkXFxcXHUxMjUwLVxcXFx1MTI1NlxcXFx1MTI1OFxcXFx1MTI1YS1cXFxcdTEyNWRcXFxcdTEyNjAtXFxcXHUxMjg4XFxcXHUxMjhhLVxcXFx1MTI4ZFxcXFx1MTI5MC1cXFxcdTEyYjBcXFxcdTEyYjItXFxcXHUxMmI1XFxcXHUxMmI4LVxcXFx1MTJiZVxcXFx1MTJjMFxcXFx1MTJjMi1cXFxcdTEyYzVcXFxcdTEyYzgtXFxcXHUxMmQ2XFxcXHUxMmQ4LVxcXFx1MTMxMFxcXFx1MTMxMi1cXFxcdTEzMTVcXFxcdTEzMTgtXFxcXHUxMzVhXFxcXHUxMzgwLVxcXFx1MTM4ZlxcXFx1MTNhMC1cXFxcdTEzZjRcXFxcdTE0MDEtXFxcXHUxNjZjXFxcXHUxNjZmLVxcXFx1MTY3ZlxcXFx1MTY4MS1cXFxcdTE2OWFcXFxcdTE2YTAtXFxcXHUxNmVhXFxcXHUxNmVlLVxcXFx1MTZmMFxcXFx1MTcwMC1cXFxcdTE3MGNcXFxcdTE3MGUtXFxcXHUxNzExXFxcXHUxNzIwLVxcXFx1MTczMVxcXFx1MTc0MC1cXFxcdTE3NTFcXFxcdTE3NjAtXFxcXHUxNzZjXFxcXHUxNzZlLVxcXFx1MTc3MFxcXFx1MTc4MC1cXFxcdTE3YjNcXFxcdTE3ZDdcXFxcdTE3ZGNcXFxcdTE4MjAtXFxcXHUxODc3XFxcXHUxODgwLVxcXFx1MThhOFxcXFx1MThhYVxcXFx1MThiMC1cXFxcdTE4ZjVcXFxcdTE5MDAtXFxcXHUxOTFjXFxcXHUxOTUwLVxcXFx1MTk2ZFxcXFx1MTk3MC1cXFxcdTE5NzRcXFxcdTE5ODAtXFxcXHUxOWFiXFxcXHUxOWMxLVxcXFx1MTljN1xcXFx1MWEwMC1cXFxcdTFhMTZcXFxcdTFhMjAtXFxcXHUxYTU0XFxcXHUxYWE3XFxcXHUxYjA1LVxcXFx1MWIzM1xcXFx1MWI0NS1cXFxcdTFiNGJcXFxcdTFiODMtXFxcXHUxYmEwXFxcXHUxYmFlXFxcXHUxYmFmXFxcXHUxYmJhLVxcXFx1MWJlNVxcXFx1MWMwMC1cXFxcdTFjMjNcXFxcdTFjNGQtXFxcXHUxYzRmXFxcXHUxYzVhLVxcXFx1MWM3ZFxcXFx1MWNlOS1cXFxcdTFjZWNcXFxcdTFjZWUtXFxcXHUxY2YxXFxcXHUxY2Y1XFxcXHUxY2Y2XFxcXHUxZDAwLVxcXFx1MWRiZlxcXFx1MWUwMC1cXFxcdTFmMTVcXFxcdTFmMTgtXFxcXHUxZjFkXFxcXHUxZjIwLVxcXFx1MWY0NVxcXFx1MWY0OC1cXFxcdTFmNGRcXFxcdTFmNTAtXFxcXHUxZjU3XFxcXHUxZjU5XFxcXHUxZjViXFxcXHUxZjVkXFxcXHUxZjVmLVxcXFx1MWY3ZFxcXFx1MWY4MC1cXFxcdTFmYjRcXFxcdTFmYjYtXFxcXHUxZmJjXFxcXHUxZmJlXFxcXHUxZmMyLVxcXFx1MWZjNFxcXFx1MWZjNi1cXFxcdTFmY2NcXFxcdTFmZDAtXFxcXHUxZmQzXFxcXHUxZmQ2LVxcXFx1MWZkYlxcXFx1MWZlMC1cXFxcdTFmZWNcXFxcdTFmZjItXFxcXHUxZmY0XFxcXHUxZmY2LVxcXFx1MWZmY1xcXFx1MjA3MVxcXFx1MjA3ZlxcXFx1MjA5MC1cXFxcdTIwOWNcXFxcdTIxMDJcXFxcdTIxMDdcXFxcdTIxMGEtXFxcXHUyMTEzXFxcXHUyMTE1XFxcXHUyMTE5LVxcXFx1MjExZFxcXFx1MjEyNFxcXFx1MjEyNlxcXFx1MjEyOFxcXFx1MjEyYS1cXFxcdTIxMmRcXFxcdTIxMmYtXFxcXHUyMTM5XFxcXHUyMTNjLVxcXFx1MjEzZlxcXFx1MjE0NS1cXFxcdTIxNDlcXFxcdTIxNGVcXFxcdTIxNjAtXFxcXHUyMTg4XFxcXHUyYzAwLVxcXFx1MmMyZVxcXFx1MmMzMC1cXFxcdTJjNWVcXFxcdTJjNjAtXFxcXHUyY2U0XFxcXHUyY2ViLVxcXFx1MmNlZVxcXFx1MmNmMlxcXFx1MmNmM1xcXFx1MmQwMC1cXFxcdTJkMjVcXFxcdTJkMjdcXFxcdTJkMmRcXFxcdTJkMzAtXFxcXHUyZDY3XFxcXHUyZDZmXFxcXHUyZDgwLVxcXFx1MmQ5NlxcXFx1MmRhMC1cXFxcdTJkYTZcXFxcdTJkYTgtXFxcXHUyZGFlXFxcXHUyZGIwLVxcXFx1MmRiNlxcXFx1MmRiOC1cXFxcdTJkYmVcXFxcdTJkYzAtXFxcXHUyZGM2XFxcXHUyZGM4LVxcXFx1MmRjZVxcXFx1MmRkMC1cXFxcdTJkZDZcXFxcdTJkZDgtXFxcXHUyZGRlXFxcXHUyZTJmXFxcXHUzMDA1LVxcXFx1MzAwN1xcXFx1MzAyMS1cXFxcdTMwMjlcXFxcdTMwMzEtXFxcXHUzMDM1XFxcXHUzMDM4LVxcXFx1MzAzY1xcXFx1MzA0MS1cXFxcdTMwOTZcXFxcdTMwOWQtXFxcXHUzMDlmXFxcXHUzMGExLVxcXFx1MzBmYVxcXFx1MzBmYy1cXFxcdTMwZmZcXFxcdTMxMDUtXFxcXHUzMTJkXFxcXHUzMTMxLVxcXFx1MzE4ZVxcXFx1MzFhMC1cXFxcdTMxYmFcXFxcdTMxZjAtXFxcXHUzMWZmXFxcXHUzNDAwLVxcXFx1NGRiNVxcXFx1NGUwMC1cXFxcdTlmY2NcXFxcdWEwMDAtXFxcXHVhNDhjXFxcXHVhNGQwLVxcXFx1YTRmZFxcXFx1YTUwMC1cXFxcdWE2MGNcXFxcdWE2MTAtXFxcXHVhNjFmXFxcXHVhNjJhXFxcXHVhNjJiXFxcXHVhNjQwLVxcXFx1YTY2ZVxcXFx1YTY3Zi1cXFxcdWE2OTdcXFxcdWE2YTAtXFxcXHVhNmVmXFxcXHVhNzE3LVxcXFx1YTcxZlxcXFx1YTcyMi1cXFxcdWE3ODhcXFxcdWE3OGItXFxcXHVhNzhlXFxcXHVhNzkwLVxcXFx1YTc5M1xcXFx1YTdhMC1cXFxcdWE3YWFcXFxcdWE3ZjgtXFxcXHVhODAxXFxcXHVhODAzLVxcXFx1YTgwNVxcXFx1YTgwNy1cXFxcdWE4MGFcXFxcdWE4MGMtXFxcXHVhODIyXFxcXHVhODQwLVxcXFx1YTg3M1xcXFx1YTg4Mi1cXFxcdWE4YjNcXFxcdWE4ZjItXFxcXHVhOGY3XFxcXHVhOGZiXFxcXHVhOTBhLVxcXFx1YTkyNVxcXFx1YTkzMC1cXFxcdWE5NDZcXFxcdWE5NjAtXFxcXHVhOTdjXFxcXHVhOTg0LVxcXFx1YTliMlxcXFx1YTljZlxcXFx1YWEwMC1cXFxcdWFhMjhcXFxcdWFhNDAtXFxcXHVhYTQyXFxcXHVhYTQ0LVxcXFx1YWE0YlxcXFx1YWE2MC1cXFxcdWFhNzZcXFxcdWFhN2FcXFxcdWFhODAtXFxcXHVhYWFmXFxcXHVhYWIxXFxcXHVhYWI1XFxcXHVhYWI2XFxcXHVhYWI5LVxcXFx1YWFiZFxcXFx1YWFjMFxcXFx1YWFjMlxcXFx1YWFkYi1cXFxcdWFhZGRcXFxcdWFhZTAtXFxcXHVhYWVhXFxcXHVhYWYyLVxcXFx1YWFmNFxcXFx1YWIwMS1cXFxcdWFiMDZcXFxcdWFiMDktXFxcXHVhYjBlXFxcXHVhYjExLVxcXFx1YWIxNlxcXFx1YWIyMC1cXFxcdWFiMjZcXFxcdWFiMjgtXFxcXHVhYjJlXFxcXHVhYmMwLVxcXFx1YWJlMlxcXFx1YWMwMC1cXFxcdWQ3YTNcXFxcdWQ3YjAtXFxcXHVkN2M2XFxcXHVkN2NiLVxcXFx1ZDdmYlxcXFx1ZjkwMC1cXFxcdWZhNmRcXFxcdWZhNzAtXFxcXHVmYWQ5XFxcXHVmYjAwLVxcXFx1ZmIwNlxcXFx1ZmIxMy1cXFxcdWZiMTdcXFxcdWZiMWRcXFxcdWZiMWYtXFxcXHVmYjI4XFxcXHVmYjJhLVxcXFx1ZmIzNlxcXFx1ZmIzOC1cXFxcdWZiM2NcXFxcdWZiM2VcXFxcdWZiNDBcXFxcdWZiNDFcXFxcdWZiNDNcXFxcdWZiNDRcXFxcdWZiNDYtXFxcXHVmYmIxXFxcXHVmYmQzLVxcXFx1ZmQzZFxcXFx1ZmQ1MC1cXFxcdWZkOGZcXFxcdWZkOTItXFxcXHVmZGM3XFxcXHVmZGYwLVxcXFx1ZmRmYlxcXFx1ZmU3MC1cXFxcdWZlNzRcXFxcdWZlNzYtXFxcXHVmZWZjXFxcXHVmZjIxLVxcXFx1ZmYzYVxcXFx1ZmY0MS1cXFxcdWZmNWFcXFxcdWZmNjYtXFxcXHVmZmJlXFxcXHVmZmMyLVxcXFx1ZmZjN1xcXFx1ZmZjYS1cXFxcdWZmY2ZcXFxcdWZmZDItXFxcXHVmZmQ3XFxcXHVmZmRhLVxcXFx1ZmZkY1wiO1xudmFyIG5vbkFTQ0lJaWRlbnRpZmllckNoYXJzID0gXCJcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHUwNDgzLVxcXFx1MDQ4N1xcXFx1MDU5MS1cXFxcdTA1YmRcXFxcdTA1YmZcXFxcdTA1YzFcXFxcdTA1YzJcXFxcdTA1YzRcXFxcdTA1YzVcXFxcdTA1YzdcXFxcdTA2MTAtXFxcXHUwNjFhXFxcXHUwNjIwLVxcXFx1MDY0OVxcXFx1MDY3Mi1cXFxcdTA2ZDNcXFxcdTA2ZTctXFxcXHUwNmU4XFxcXHUwNmZiLVxcXFx1MDZmY1xcXFx1MDczMC1cXFxcdTA3NGFcXFxcdTA4MDAtXFxcXHUwODE0XFxcXHUwODFiLVxcXFx1MDgyM1xcXFx1MDgyNS1cXFxcdTA4MjdcXFxcdTA4MjktXFxcXHUwODJkXFxcXHUwODQwLVxcXFx1MDg1N1xcXFx1MDhlNC1cXFxcdTA4ZmVcXFxcdTA5MDAtXFxcXHUwOTAzXFxcXHUwOTNhLVxcXFx1MDkzY1xcXFx1MDkzZS1cXFxcdTA5NGZcXFxcdTA5NTEtXFxcXHUwOTU3XFxcXHUwOTYyLVxcXFx1MDk2M1xcXFx1MDk2Ni1cXFxcdTA5NmZcXFxcdTA5ODEtXFxcXHUwOTgzXFxcXHUwOWJjXFxcXHUwOWJlLVxcXFx1MDljNFxcXFx1MDljN1xcXFx1MDljOFxcXFx1MDlkN1xcXFx1MDlkZi1cXFxcdTA5ZTBcXFxcdTBhMDEtXFxcXHUwYTAzXFxcXHUwYTNjXFxcXHUwYTNlLVxcXFx1MGE0MlxcXFx1MGE0N1xcXFx1MGE0OFxcXFx1MGE0Yi1cXFxcdTBhNGRcXFxcdTBhNTFcXFxcdTBhNjYtXFxcXHUwYTcxXFxcXHUwYTc1XFxcXHUwYTgxLVxcXFx1MGE4M1xcXFx1MGFiY1xcXFx1MGFiZS1cXFxcdTBhYzVcXFxcdTBhYzctXFxcXHUwYWM5XFxcXHUwYWNiLVxcXFx1MGFjZFxcXFx1MGFlMi1cXFxcdTBhZTNcXFxcdTBhZTYtXFxcXHUwYWVmXFxcXHUwYjAxLVxcXFx1MGIwM1xcXFx1MGIzY1xcXFx1MGIzZS1cXFxcdTBiNDRcXFxcdTBiNDdcXFxcdTBiNDhcXFxcdTBiNGItXFxcXHUwYjRkXFxcXHUwYjU2XFxcXHUwYjU3XFxcXHUwYjVmLVxcXFx1MGI2MFxcXFx1MGI2Ni1cXFxcdTBiNmZcXFxcdTBiODJcXFxcdTBiYmUtXFxcXHUwYmMyXFxcXHUwYmM2LVxcXFx1MGJjOFxcXFx1MGJjYS1cXFxcdTBiY2RcXFxcdTBiZDdcXFxcdTBiZTYtXFxcXHUwYmVmXFxcXHUwYzAxLVxcXFx1MGMwM1xcXFx1MGM0Ni1cXFxcdTBjNDhcXFxcdTBjNGEtXFxcXHUwYzRkXFxcXHUwYzU1XFxcXHUwYzU2XFxcXHUwYzYyLVxcXFx1MGM2M1xcXFx1MGM2Ni1cXFxcdTBjNmZcXFxcdTBjODJcXFxcdTBjODNcXFxcdTBjYmNcXFxcdTBjYmUtXFxcXHUwY2M0XFxcXHUwY2M2LVxcXFx1MGNjOFxcXFx1MGNjYS1cXFxcdTBjY2RcXFxcdTBjZDVcXFxcdTBjZDZcXFxcdTBjZTItXFxcXHUwY2UzXFxcXHUwY2U2LVxcXFx1MGNlZlxcXFx1MGQwMlxcXFx1MGQwM1xcXFx1MGQ0Ni1cXFxcdTBkNDhcXFxcdTBkNTdcXFxcdTBkNjItXFxcXHUwZDYzXFxcXHUwZDY2LVxcXFx1MGQ2ZlxcXFx1MGQ4MlxcXFx1MGQ4M1xcXFx1MGRjYVxcXFx1MGRjZi1cXFxcdTBkZDRcXFxcdTBkZDZcXFxcdTBkZDgtXFxcXHUwZGRmXFxcXHUwZGYyXFxcXHUwZGYzXFxcXHUwZTM0LVxcXFx1MGUzYVxcXFx1MGU0MC1cXFxcdTBlNDVcXFxcdTBlNTAtXFxcXHUwZTU5XFxcXHUwZWI0LVxcXFx1MGViOVxcXFx1MGVjOC1cXFxcdTBlY2RcXFxcdTBlZDAtXFxcXHUwZWQ5XFxcXHUwZjE4XFxcXHUwZjE5XFxcXHUwZjIwLVxcXFx1MGYyOVxcXFx1MGYzNVxcXFx1MGYzN1xcXFx1MGYzOVxcXFx1MGY0MS1cXFxcdTBmNDdcXFxcdTBmNzEtXFxcXHUwZjg0XFxcXHUwZjg2LVxcXFx1MGY4N1xcXFx1MGY4ZC1cXFxcdTBmOTdcXFxcdTBmOTktXFxcXHUwZmJjXFxcXHUwZmM2XFxcXHUxMDAwLVxcXFx1MTAyOVxcXFx1MTA0MC1cXFxcdTEwNDlcXFxcdTEwNjctXFxcXHUxMDZkXFxcXHUxMDcxLVxcXFx1MTA3NFxcXFx1MTA4Mi1cXFxcdTEwOGRcXFxcdTEwOGYtXFxcXHUxMDlkXFxcXHUxMzVkLVxcXFx1MTM1ZlxcXFx1MTcwZS1cXFxcdTE3MTBcXFxcdTE3MjAtXFxcXHUxNzMwXFxcXHUxNzQwLVxcXFx1MTc1MFxcXFx1MTc3MlxcXFx1MTc3M1xcXFx1MTc4MC1cXFxcdTE3YjJcXFxcdTE3ZGRcXFxcdTE3ZTAtXFxcXHUxN2U5XFxcXHUxODBiLVxcXFx1MTgwZFxcXFx1MTgxMC1cXFxcdTE4MTlcXFxcdTE5MjAtXFxcXHUxOTJiXFxcXHUxOTMwLVxcXFx1MTkzYlxcXFx1MTk1MS1cXFxcdTE5NmRcXFxcdTE5YjAtXFxcXHUxOWMwXFxcXHUxOWM4LVxcXFx1MTljOVxcXFx1MTlkMC1cXFxcdTE5ZDlcXFxcdTFhMDAtXFxcXHUxYTE1XFxcXHUxYTIwLVxcXFx1MWE1M1xcXFx1MWE2MC1cXFxcdTFhN2NcXFxcdTFhN2YtXFxcXHUxYTg5XFxcXHUxYTkwLVxcXFx1MWE5OVxcXFx1MWI0Ni1cXFxcdTFiNGJcXFxcdTFiNTAtXFxcXHUxYjU5XFxcXHUxYjZiLVxcXFx1MWI3M1xcXFx1MWJiMC1cXFxcdTFiYjlcXFxcdTFiZTYtXFxcXHUxYmYzXFxcXHUxYzAwLVxcXFx1MWMyMlxcXFx1MWM0MC1cXFxcdTFjNDlcXFxcdTFjNWItXFxcXHUxYzdkXFxcXHUxY2QwLVxcXFx1MWNkMlxcXFx1MWQwMC1cXFxcdTFkYmVcXFxcdTFlMDEtXFxcXHUxZjE1XFxcXHUyMDBjXFxcXHUyMDBkXFxcXHUyMDNmXFxcXHUyMDQwXFxcXHUyMDU0XFxcXHUyMGQwLVxcXFx1MjBkY1xcXFx1MjBlMVxcXFx1MjBlNS1cXFxcdTIwZjBcXFxcdTJkODEtXFxcXHUyZDk2XFxcXHUyZGUwLVxcXFx1MmRmZlxcXFx1MzAyMS1cXFxcdTMwMjhcXFxcdTMwOTlcXFxcdTMwOWFcXFxcdWE2NDAtXFxcXHVhNjZkXFxcXHVhNjc0LVxcXFx1YTY3ZFxcXFx1YTY5ZlxcXFx1YTZmMC1cXFxcdWE2ZjFcXFxcdWE3ZjgtXFxcXHVhODAwXFxcXHVhODA2XFxcXHVhODBiXFxcXHVhODIzLVxcXFx1YTgyN1xcXFx1YTg4MC1cXFxcdWE4ODFcXFxcdWE4YjQtXFxcXHVhOGM0XFxcXHVhOGQwLVxcXFx1YThkOVxcXFx1YThmMy1cXFxcdWE4ZjdcXFxcdWE5MDAtXFxcXHVhOTA5XFxcXHVhOTI2LVxcXFx1YTkyZFxcXFx1YTkzMC1cXFxcdWE5NDVcXFxcdWE5ODAtXFxcXHVhOTgzXFxcXHVhOWIzLVxcXFx1YTljMFxcXFx1YWEwMC1cXFxcdWFhMjdcXFxcdWFhNDAtXFxcXHVhYTQxXFxcXHVhYTRjLVxcXFx1YWE0ZFxcXFx1YWE1MC1cXFxcdWFhNTlcXFxcdWFhN2JcXFxcdWFhZTAtXFxcXHVhYWU5XFxcXHVhYWYyLVxcXFx1YWFmM1xcXFx1YWJjMC1cXFxcdWFiZTFcXFxcdWFiZWNcXFxcdWFiZWRcXFxcdWFiZjAtXFxcXHVhYmY5XFxcXHVmYjIwLVxcXFx1ZmIyOFxcXFx1ZmUwMC1cXFxcdWZlMGZcXFxcdWZlMjAtXFxcXHVmZTI2XFxcXHVmZTMzXFxcXHVmZTM0XFxcXHVmZTRkLVxcXFx1ZmU0ZlxcXFx1ZmYxMC1cXFxcdWZmMTlcXFxcdWZmM2ZcIjtcbi8vdmFyIG5vbkFTQ0lJaWRlbnRpZmllclN0YXJ0ID0gbmV3IFJlZ0V4cChcIltcIiArIG5vbkFTQ0lJaWRlbnRpZmllclN0YXJ0Q2hhcnMgKyBcIl1cIik7XG4vL3ZhciBub25BU0NJSWlkZW50aWZpZXIgPSBuZXcgUmVnRXhwKFwiW1wiICsgbm9uQVNDSUlpZGVudGlmaWVyU3RhcnRDaGFycyArIG5vbkFTQ0lJaWRlbnRpZmllckNoYXJzICsgXCJdXCIpO1xuXG52YXIgaWRlbnRpZmllclN0YXJ0ID0gXCIoPzpcXFxcXFxcXHVbMC05YS1mQS1GXXs0fXxbXCIgKyBiYXNlQVNDSUlpZGVudGlmaWVyU3RhcnRDaGFycyArIG5vbkFTQ0lJaWRlbnRpZmllclN0YXJ0Q2hhcnMgKyBcIl0pXCI7XG52YXIgaWRlbnRpZmllckNoYXJzID0gXCIoPzpcXFxcXFxcXHVbMC05YS1mQS1GXXs0fXxbXCIgKyBiYXNlQVNDSUlpZGVudGlmaWVyQ2hhcnMgKyBub25BU0NJSWlkZW50aWZpZXJTdGFydENoYXJzICsgbm9uQVNDSUlpZGVudGlmaWVyQ2hhcnMgKyBcIl0pKlwiO1xuXG5leHBvcnRzLmlkZW50aWZpZXIgPSBuZXcgUmVnRXhwKGlkZW50aWZpZXJTdGFydCArIGlkZW50aWZpZXJDaGFycywgJ2cnKTtcbmV4cG9ydHMuaWRlbnRpZmllclN0YXJ0ID0gbmV3IFJlZ0V4cChpZGVudGlmaWVyU3RhcnQpO1xuZXhwb3J0cy5pZGVudGlmaWVyTWF0Y2ggPSBuZXcgUmVnRXhwKFwiKD86XFxcXFxcXFx1WzAtOWEtZkEtRl17NH18W1wiICsgYmFzZUFTQ0lJaWRlbnRpZmllckNoYXJzICsgbm9uQVNDSUlpZGVudGlmaWVyU3RhcnRDaGFycyArIG5vbkFTQ0lJaWRlbnRpZmllckNoYXJzICsgXCJdKStcIik7XG5cbnZhciBub25BU0NJSXdoaXRlc3BhY2UgPSAvW1xcdTE2ODBcXHUxODBlXFx1MjAwMC1cXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFx1ZmVmZl0vOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuLy8gV2hldGhlciBhIHNpbmdsZSBjaGFyYWN0ZXIgZGVub3RlcyBhIG5ld2xpbmUuXG5cbmV4cG9ydHMubmV3bGluZSA9IC9bXFxuXFxyXFx1MjAyOFxcdTIwMjldLztcblxuLy8gTWF0Y2hlcyBhIHdob2xlIGxpbmUgYnJlYWsgKHdoZXJlIENSTEYgaXMgY29uc2lkZXJlZCBhIHNpbmdsZVxuLy8gbGluZSBicmVhaykuIFVzZWQgdG8gY291bnQgbGluZXMuXG5cbi8vIGluIGphdmFzY3JpcHQsIHRoZXNlIHR3byBkaWZmZXJcbi8vIGluIHB5dGhvbiB0aGV5IGFyZSB0aGUgc2FtZSwgZGlmZmVyZW50IG1ldGhvZHMgYXJlIGNhbGxlZCBvbiB0aGVtXG5leHBvcnRzLmxpbmVCcmVhayA9IG5ldyBSZWdFeHAoJ1xcclxcbnwnICsgZXhwb3J0cy5uZXdsaW5lLnNvdXJjZSk7XG5leHBvcnRzLmFsbExpbmVCcmVha3MgPSBuZXcgUmVnRXhwKGV4cG9ydHMubGluZUJyZWFrLnNvdXJjZSwgJ2cnKTtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKmpzaGludCBub2RlOnRydWUgKi9cbi8qXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuKi9cblxuXG5cbnZhciBCYXNlT3B0aW9ucyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDYpLk9wdGlvbnMpO1xuXG52YXIgdmFsaWRQb3NpdGlvblZhbHVlcyA9IFsnYmVmb3JlLW5ld2xpbmUnLCAnYWZ0ZXItbmV3bGluZScsICdwcmVzZXJ2ZS1uZXdsaW5lJ107XG5cbmZ1bmN0aW9uIE9wdGlvbnMob3B0aW9ucykge1xuICBCYXNlT3B0aW9ucy5jYWxsKHRoaXMsIG9wdGlvbnMsICdqcycpO1xuXG4gIC8vIGNvbXBhdGliaWxpdHksIHJlXG4gIHZhciByYXdfYnJhY2Vfc3R5bGUgPSB0aGlzLnJhd19vcHRpb25zLmJyYWNlX3N0eWxlIHx8IG51bGw7XG4gIGlmIChyYXdfYnJhY2Vfc3R5bGUgPT09IFwiZXhwYW5kLXN0cmljdFwiKSB7IC8vZ3JhY2VmdWwgaGFuZGxpbmcgb2YgZGVwcmVjYXRlZCBvcHRpb25cbiAgICB0aGlzLnJhd19vcHRpb25zLmJyYWNlX3N0eWxlID0gXCJleHBhbmRcIjtcbiAgfSBlbHNlIGlmIChyYXdfYnJhY2Vfc3R5bGUgPT09IFwiY29sbGFwc2UtcHJlc2VydmUtaW5saW5lXCIpIHsgLy9ncmFjZWZ1bCBoYW5kbGluZyBvZiBkZXByZWNhdGVkIG9wdGlvblxuICAgIHRoaXMucmF3X29wdGlvbnMuYnJhY2Vfc3R5bGUgPSBcImNvbGxhcHNlLHByZXNlcnZlLWlubGluZVwiO1xuICB9IGVsc2UgaWYgKHRoaXMucmF3X29wdGlvbnMuYnJhY2VzX29uX293bl9saW5lICE9PSB1bmRlZmluZWQpIHsgLy9ncmFjZWZ1bCBoYW5kbGluZyBvZiBkZXByZWNhdGVkIG9wdGlvblxuICAgIHRoaXMucmF3X29wdGlvbnMuYnJhY2Vfc3R5bGUgPSB0aGlzLnJhd19vcHRpb25zLmJyYWNlc19vbl9vd25fbGluZSA/IFwiZXhwYW5kXCIgOiBcImNvbGxhcHNlXCI7XG4gICAgLy8gfSBlbHNlIGlmICghcmF3X2JyYWNlX3N0eWxlKSB7IC8vTm90aGluZyBleGlzdHMgdG8gc2V0IGl0XG4gICAgLy8gICByYXdfYnJhY2Vfc3R5bGUgPSBcImNvbGxhcHNlXCI7XG4gIH1cblxuICAvL3ByZXNlcnZlLWlubGluZSBpbiBkZWxpbWl0ZWQgc3RyaW5nIHdpbGwgdHJpZ2dlciBicmFjZV9wcmVzZXJ2ZV9pbmxpbmUsIGV2ZXJ5dGhpbmdcbiAgLy9lbHNlIGlzIGNvbnNpZGVyZWQgYSBicmFjZV9zdHlsZSBhbmQgdGhlIGxhc3Qgb25lIG9ubHkgd2lsbCBoYXZlIGFuIGVmZmVjdFxuXG4gIHZhciBicmFjZV9zdHlsZV9zcGxpdCA9IHRoaXMuX2dldF9zZWxlY3Rpb25fbGlzdCgnYnJhY2Vfc3R5bGUnLCBbJ2NvbGxhcHNlJywgJ2V4cGFuZCcsICdlbmQtZXhwYW5kJywgJ25vbmUnLCAncHJlc2VydmUtaW5saW5lJ10pO1xuXG4gIHRoaXMuYnJhY2VfcHJlc2VydmVfaW5saW5lID0gZmFsc2U7IC8vRGVmYXVsdHMgaW4gY2FzZSBvbmUgb3Igb3RoZXIgd2FzIG5vdCBzcGVjaWZpZWQgaW4gbWV0YS1vcHRpb25cbiAgdGhpcy5icmFjZV9zdHlsZSA9IFwiY29sbGFwc2VcIjtcblxuICBmb3IgKHZhciBicyA9IDA7IGJzIDwgYnJhY2Vfc3R5bGVfc3BsaXQubGVuZ3RoOyBicysrKSB7XG4gICAgaWYgKGJyYWNlX3N0eWxlX3NwbGl0W2JzXSA9PT0gXCJwcmVzZXJ2ZS1pbmxpbmVcIikge1xuICAgICAgdGhpcy5icmFjZV9wcmVzZXJ2ZV9pbmxpbmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJyYWNlX3N0eWxlID0gYnJhY2Vfc3R5bGVfc3BsaXRbYnNdO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudW5pbmRlbnRfY2hhaW5lZF9tZXRob2RzID0gdGhpcy5fZ2V0X2Jvb2xlYW4oJ3VuaW5kZW50X2NoYWluZWRfbWV0aG9kcycpO1xuICB0aGlzLmJyZWFrX2NoYWluZWRfbWV0aG9kcyA9IHRoaXMuX2dldF9ib29sZWFuKCdicmVha19jaGFpbmVkX21ldGhvZHMnKTtcbiAgdGhpcy5zcGFjZV9pbl9wYXJlbiA9IHRoaXMuX2dldF9ib29sZWFuKCdzcGFjZV9pbl9wYXJlbicpO1xuICB0aGlzLnNwYWNlX2luX2VtcHR5X3BhcmVuID0gdGhpcy5fZ2V0X2Jvb2xlYW4oJ3NwYWNlX2luX2VtcHR5X3BhcmVuJyk7XG4gIHRoaXMuanNsaW50X2hhcHB5ID0gdGhpcy5fZ2V0X2Jvb2xlYW4oJ2pzbGludF9oYXBweScpO1xuICB0aGlzLnNwYWNlX2FmdGVyX2Fub25fZnVuY3Rpb24gPSB0aGlzLl9nZXRfYm9vbGVhbignc3BhY2VfYWZ0ZXJfYW5vbl9mdW5jdGlvbicpO1xuICB0aGlzLnNwYWNlX2FmdGVyX25hbWVkX2Z1bmN0aW9uID0gdGhpcy5fZ2V0X2Jvb2xlYW4oJ3NwYWNlX2FmdGVyX25hbWVkX2Z1bmN0aW9uJyk7XG4gIHRoaXMua2VlcF9hcnJheV9pbmRlbnRhdGlvbiA9IHRoaXMuX2dldF9ib29sZWFuKCdrZWVwX2FycmF5X2luZGVudGF0aW9uJyk7XG4gIHRoaXMuc3BhY2VfYmVmb3JlX2NvbmRpdGlvbmFsID0gdGhpcy5fZ2V0X2Jvb2xlYW4oJ3NwYWNlX2JlZm9yZV9jb25kaXRpb25hbCcsIHRydWUpO1xuICB0aGlzLnVuZXNjYXBlX3N0cmluZ3MgPSB0aGlzLl9nZXRfYm9vbGVhbigndW5lc2NhcGVfc3RyaW5ncycpO1xuICB0aGlzLmU0eCA9IHRoaXMuX2dldF9ib29sZWFuKCdlNHgnKTtcbiAgdGhpcy5jb21tYV9maXJzdCA9IHRoaXMuX2dldF9ib29sZWFuKCdjb21tYV9maXJzdCcpO1xuICB0aGlzLm9wZXJhdG9yX3Bvc2l0aW9uID0gdGhpcy5fZ2V0X3NlbGVjdGlvbignb3BlcmF0b3JfcG9zaXRpb24nLCB2YWxpZFBvc2l0aW9uVmFsdWVzKTtcblxuICAvLyBGb3IgdGVzdGluZyBvZiBiZWF1dGlmeSBwcmVzZXJ2ZTpzdGFydCBkaXJlY3RpdmVcbiAgdGhpcy50ZXN0X291dHB1dF9yYXcgPSB0aGlzLl9nZXRfYm9vbGVhbigndGVzdF9vdXRwdXRfcmF3Jyk7XG5cbiAgLy8gZm9yY2UgdGhpcy5fb3B0aW9ucy5zcGFjZV9hZnRlcl9hbm9uX2Z1bmN0aW9uIHRvIHRydWUgaWYgdGhpcy5fb3B0aW9ucy5qc2xpbnRfaGFwcHlcbiAgaWYgKHRoaXMuanNsaW50X2hhcHB5KSB7XG4gICAgdGhpcy5zcGFjZV9hZnRlcl9hbm9uX2Z1bmN0aW9uID0gdHJ1ZTtcbiAgfVxuXG59XG5PcHRpb25zLnByb3RvdHlwZSA9IG5ldyBCYXNlT3B0aW9ucygpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMuT3B0aW9ucyA9IE9wdGlvbnM7XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLypcblxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG4qL1xuXG5cblxuZnVuY3Rpb24gT3B0aW9ucyhvcHRpb25zLCBtZXJnZV9jaGlsZF9maWVsZCkge1xuICB0aGlzLnJhd19vcHRpb25zID0gX21lcmdlT3B0cyhvcHRpb25zLCBtZXJnZV9jaGlsZF9maWVsZCk7XG5cbiAgLy8gU3VwcG9ydCBwYXNzaW5nIHRoZSBzb3VyY2UgdGV4dCBiYWNrIHdpdGggbm8gY2hhbmdlXG4gIHRoaXMuZGlzYWJsZWQgPSB0aGlzLl9nZXRfYm9vbGVhbignZGlzYWJsZWQnKTtcblxuICB0aGlzLmVvbCA9IHRoaXMuX2dldF9jaGFyYWN0ZXJzKCdlb2wnLCAnYXV0bycpO1xuICB0aGlzLmVuZF93aXRoX25ld2xpbmUgPSB0aGlzLl9nZXRfYm9vbGVhbignZW5kX3dpdGhfbmV3bGluZScpO1xuICB0aGlzLmluZGVudF9zaXplID0gdGhpcy5fZ2V0X251bWJlcignaW5kZW50X3NpemUnLCA0KTtcbiAgdGhpcy5pbmRlbnRfY2hhciA9IHRoaXMuX2dldF9jaGFyYWN0ZXJzKCdpbmRlbnRfY2hhcicsICcgJyk7XG4gIHRoaXMuaW5kZW50X2xldmVsID0gdGhpcy5fZ2V0X251bWJlcignaW5kZW50X2xldmVsJyk7XG5cbiAgdGhpcy5wcmVzZXJ2ZV9uZXdsaW5lcyA9IHRoaXMuX2dldF9ib29sZWFuKCdwcmVzZXJ2ZV9uZXdsaW5lcycsIHRydWUpO1xuICB0aGlzLm1heF9wcmVzZXJ2ZV9uZXdsaW5lcyA9IHRoaXMuX2dldF9udW1iZXIoJ21heF9wcmVzZXJ2ZV9uZXdsaW5lcycsIDMyNzg2KTtcbiAgaWYgKCF0aGlzLnByZXNlcnZlX25ld2xpbmVzKSB7XG4gICAgdGhpcy5tYXhfcHJlc2VydmVfbmV3bGluZXMgPSAwO1xuICB9XG5cbiAgdGhpcy5pbmRlbnRfd2l0aF90YWJzID0gdGhpcy5fZ2V0X2Jvb2xlYW4oJ2luZGVudF93aXRoX3RhYnMnLCB0aGlzLmluZGVudF9jaGFyID09PSAnXFx0Jyk7XG4gIGlmICh0aGlzLmluZGVudF93aXRoX3RhYnMpIHtcbiAgICB0aGlzLmluZGVudF9jaGFyID0gJ1xcdCc7XG5cbiAgICAvLyBpbmRlbnRfc2l6ZSBiZWhhdmlvciBjaGFuZ2VkIGFmdGVyIDEuOC42XG4gICAgLy8gSXQgdXNlZCB0byBiZSB0aGF0IGluZGVudF9zaXplIHdvdWxkIGJlXG4gICAgLy8gc2V0IHRvIDEgZm9yIGluZGVudF93aXRoX3RhYnMuIFRoYXQgaXMgbm8gbG9uZ2VyIG5lZWRlZCBhbmRcbiAgICAvLyBhY3R1YWxseSBkb2Vzbid0IG1ha2Ugc2Vuc2UgLSB3aHkgbm90IHVzZSBzcGFjZXM/IEZ1cnRoZXIsXG4gICAgLy8gdGhhdCBtaWdodCBwcm9kdWNlIHVuZXhwZWN0ZWQgYmVoYXZpb3IgLSB0YWJzIGJlaW5nIHVzZWRcbiAgICAvLyBmb3Igc2luZ2xlLWNvbHVtbiBhbGlnbm1lbnQuIFNvLCB3aGVuIGluZGVudF93aXRoX3RhYnMgaXMgdHJ1ZVxuICAgIC8vIGFuZCBpbmRlbnRfc2l6ZSBpcyAxLCByZXNldCBpbmRlbnRfc2l6ZSB0byA0LlxuICAgIGlmICh0aGlzLmluZGVudF9zaXplID09PSAxKSB7XG4gICAgICB0aGlzLmluZGVudF9zaXplID0gNDtcbiAgICB9XG4gIH1cblxuICAvLyBCYWNrd2FyZHMgY29tcGF0IHdpdGggMS4zLnhcbiAgdGhpcy53cmFwX2xpbmVfbGVuZ3RoID0gdGhpcy5fZ2V0X251bWJlcignd3JhcF9saW5lX2xlbmd0aCcsIHRoaXMuX2dldF9udW1iZXIoJ21heF9jaGFyJykpO1xuXG4gIHRoaXMuaW5kZW50X2VtcHR5X2xpbmVzID0gdGhpcy5fZ2V0X2Jvb2xlYW4oJ2luZGVudF9lbXB0eV9saW5lcycpO1xuXG4gIC8vIHZhbGlkIHRlbXBsYXRpbmcgbGFuZ3VhZ2VzIFsnZGphbmdvJywgJ2VyYicsICdoYW5kbGViYXJzJywgJ3BocCcsICdzbWFydHknXVxuICAvLyBGb3Igbm93LCAnYXV0bycgPSBhbGwgb2ZmIGZvciBqYXZhc2NyaXB0LCBhbGwgb24gZm9yIGh0bWwgKGFuZCBpbmxpbmUgamF2YXNjcmlwdCkuXG4gIC8vIG90aGVyIHZhbHVlcyBpZ25vcmVkXG4gIHRoaXMudGVtcGxhdGluZyA9IHRoaXMuX2dldF9zZWxlY3Rpb25fbGlzdCgndGVtcGxhdGluZycsIFsnYXV0bycsICdub25lJywgJ2RqYW5nbycsICdlcmInLCAnaGFuZGxlYmFycycsICdwaHAnLCAnc21hcnR5J10sIFsnYXV0byddKTtcbn1cblxuT3B0aW9ucy5wcm90b3R5cGUuX2dldF9hcnJheSA9IGZ1bmN0aW9uKG5hbWUsIGRlZmF1bHRfdmFsdWUpIHtcbiAgdmFyIG9wdGlvbl92YWx1ZSA9IHRoaXMucmF3X29wdGlvbnNbbmFtZV07XG4gIHZhciByZXN1bHQgPSBkZWZhdWx0X3ZhbHVlIHx8IFtdO1xuICBpZiAodHlwZW9mIG9wdGlvbl92YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAob3B0aW9uX3ZhbHVlICE9PSBudWxsICYmIHR5cGVvZiBvcHRpb25fdmFsdWUuY29uY2F0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXN1bHQgPSBvcHRpb25fdmFsdWUuY29uY2F0KCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25fdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gb3B0aW9uX3ZhbHVlLnNwbGl0KC9bXmEtekEtWjAtOV9cXC9cXC1dKy8pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5PcHRpb25zLnByb3RvdHlwZS5fZ2V0X2Jvb2xlYW4gPSBmdW5jdGlvbihuYW1lLCBkZWZhdWx0X3ZhbHVlKSB7XG4gIHZhciBvcHRpb25fdmFsdWUgPSB0aGlzLnJhd19vcHRpb25zW25hbWVdO1xuICB2YXIgcmVzdWx0ID0gb3B0aW9uX3ZhbHVlID09PSB1bmRlZmluZWQgPyAhIWRlZmF1bHRfdmFsdWUgOiAhIW9wdGlvbl92YWx1ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbk9wdGlvbnMucHJvdG90eXBlLl9nZXRfY2hhcmFjdGVycyA9IGZ1bmN0aW9uKG5hbWUsIGRlZmF1bHRfdmFsdWUpIHtcbiAgdmFyIG9wdGlvbl92YWx1ZSA9IHRoaXMucmF3X29wdGlvbnNbbmFtZV07XG4gIHZhciByZXN1bHQgPSBkZWZhdWx0X3ZhbHVlIHx8ICcnO1xuICBpZiAodHlwZW9mIG9wdGlvbl92YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSBvcHRpb25fdmFsdWUucmVwbGFjZSgvXFxcXHIvLCAnXFxyJykucmVwbGFjZSgvXFxcXG4vLCAnXFxuJykucmVwbGFjZSgvXFxcXHQvLCAnXFx0Jyk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbk9wdGlvbnMucHJvdG90eXBlLl9nZXRfbnVtYmVyID0gZnVuY3Rpb24obmFtZSwgZGVmYXVsdF92YWx1ZSkge1xuICB2YXIgb3B0aW9uX3ZhbHVlID0gdGhpcy5yYXdfb3B0aW9uc1tuYW1lXTtcbiAgZGVmYXVsdF92YWx1ZSA9IHBhcnNlSW50KGRlZmF1bHRfdmFsdWUsIDEwKTtcbiAgaWYgKGlzTmFOKGRlZmF1bHRfdmFsdWUpKSB7XG4gICAgZGVmYXVsdF92YWx1ZSA9IDA7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHBhcnNlSW50KG9wdGlvbl92YWx1ZSwgMTApO1xuICBpZiAoaXNOYU4ocmVzdWx0KSkge1xuICAgIHJlc3VsdCA9IGRlZmF1bHRfdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbk9wdGlvbnMucHJvdG90eXBlLl9nZXRfc2VsZWN0aW9uID0gZnVuY3Rpb24obmFtZSwgc2VsZWN0aW9uX2xpc3QsIGRlZmF1bHRfdmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2dldF9zZWxlY3Rpb25fbGlzdChuYW1lLCBzZWxlY3Rpb25fbGlzdCwgZGVmYXVsdF92YWx1ZSk7XG4gIGlmIChyZXN1bHQubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJJbnZhbGlkIE9wdGlvbiBWYWx1ZTogVGhlIG9wdGlvbiAnXCIgKyBuYW1lICsgXCInIGNhbiBvbmx5IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcXG5cIiArXG4gICAgICBzZWxlY3Rpb25fbGlzdCArIFwiXFxuWW91IHBhc3NlZCBpbjogJ1wiICsgdGhpcy5yYXdfb3B0aW9uc1tuYW1lXSArIFwiJ1wiKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHRbMF07XG59O1xuXG5cbk9wdGlvbnMucHJvdG90eXBlLl9nZXRfc2VsZWN0aW9uX2xpc3QgPSBmdW5jdGlvbihuYW1lLCBzZWxlY3Rpb25fbGlzdCwgZGVmYXVsdF92YWx1ZSkge1xuICBpZiAoIXNlbGVjdGlvbl9saXN0IHx8IHNlbGVjdGlvbl9saXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlNlbGVjdGlvbiBsaXN0IGNhbm5vdCBiZSBlbXB0eS5cIik7XG4gIH1cblxuICBkZWZhdWx0X3ZhbHVlID0gZGVmYXVsdF92YWx1ZSB8fCBbc2VsZWN0aW9uX2xpc3RbMF1dO1xuICBpZiAoIXRoaXMuX2lzX3ZhbGlkX3NlbGVjdGlvbihkZWZhdWx0X3ZhbHVlLCBzZWxlY3Rpb25fbGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIERlZmF1bHQgVmFsdWUhXCIpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2dldF9hcnJheShuYW1lLCBkZWZhdWx0X3ZhbHVlKTtcbiAgaWYgKCF0aGlzLl9pc192YWxpZF9zZWxlY3Rpb24ocmVzdWx0LCBzZWxlY3Rpb25fbGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIkludmFsaWQgT3B0aW9uIFZhbHVlOiBUaGUgb3B0aW9uICdcIiArIG5hbWUgKyBcIicgY2FuIGNvbnRhaW4gb25seSB0aGUgZm9sbG93aW5nIHZhbHVlczpcXG5cIiArXG4gICAgICBzZWxlY3Rpb25fbGlzdCArIFwiXFxuWW91IHBhc3NlZCBpbjogJ1wiICsgdGhpcy5yYXdfb3B0aW9uc1tuYW1lXSArIFwiJ1wiKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5PcHRpb25zLnByb3RvdHlwZS5faXNfdmFsaWRfc2VsZWN0aW9uID0gZnVuY3Rpb24ocmVzdWx0LCBzZWxlY3Rpb25fbGlzdCkge1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCAmJiBzZWxlY3Rpb25fbGlzdC5sZW5ndGggJiZcbiAgICAhcmVzdWx0LnNvbWUoZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gc2VsZWN0aW9uX2xpc3QuaW5kZXhPZihpdGVtKSA9PT0gLTE7IH0pO1xufTtcblxuXG4vLyBtZXJnZXMgY2hpbGQgb3B0aW9ucyB1cCB3aXRoIHRoZSBwYXJlbnQgb3B0aW9ucyBvYmplY3Rcbi8vIEV4YW1wbGU6IG9iaiA9IHthOiAxLCBiOiB7YTogMn19XG4vLyAgICAgICAgICBtZXJnZU9wdHMob2JqLCAnYicpXG4vL1xuLy8gICAgICAgICAgUmV0dXJuczoge2E6IDJ9XG5mdW5jdGlvbiBfbWVyZ2VPcHRzKGFsbE9wdGlvbnMsIGNoaWxkRmllbGROYW1lKSB7XG4gIHZhciBmaW5hbE9wdHMgPSB7fTtcbiAgYWxsT3B0aW9ucyA9IF9ub3JtYWxpemVPcHRzKGFsbE9wdGlvbnMpO1xuICB2YXIgbmFtZTtcblxuICBmb3IgKG5hbWUgaW4gYWxsT3B0aW9ucykge1xuICAgIGlmIChuYW1lICE9PSBjaGlsZEZpZWxkTmFtZSkge1xuICAgICAgZmluYWxPcHRzW25hbWVdID0gYWxsT3B0aW9uc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvL21lcmdlIGluIHRoZSBwZXIgdHlwZSBzZXR0aW5ncyBmb3IgdGhlIGNoaWxkRmllbGROYW1lXG4gIGlmIChjaGlsZEZpZWxkTmFtZSAmJiBhbGxPcHRpb25zW2NoaWxkRmllbGROYW1lXSkge1xuICAgIGZvciAobmFtZSBpbiBhbGxPcHRpb25zW2NoaWxkRmllbGROYW1lXSkge1xuICAgICAgZmluYWxPcHRzW25hbWVdID0gYWxsT3B0aW9uc1tjaGlsZEZpZWxkTmFtZV1bbmFtZV07XG4gICAgfVxuICB9XG4gIHJldHVybiBmaW5hbE9wdHM7XG59XG5cbmZ1bmN0aW9uIF9ub3JtYWxpemVPcHRzKG9wdGlvbnMpIHtcbiAgdmFyIGNvbnZlcnRlZE9wdHMgPSB7fTtcbiAgdmFyIGtleTtcblxuICBmb3IgKGtleSBpbiBvcHRpb25zKSB7XG4gICAgdmFyIG5ld0tleSA9IGtleS5yZXBsYWNlKC8tL2csIFwiX1wiKTtcbiAgICBjb252ZXJ0ZWRPcHRzW25ld0tleV0gPSBvcHRpb25zW2tleV07XG4gIH1cbiAgcmV0dXJuIGNvbnZlcnRlZE9wdHM7XG59XG5cbm1vZHVsZS5leHBvcnRzLk9wdGlvbnMgPSBPcHRpb25zO1xubW9kdWxlLmV4cG9ydHMubm9ybWFsaXplT3B0cyA9IF9ub3JtYWxpemVPcHRzO1xubW9kdWxlLmV4cG9ydHMubWVyZ2VPcHRzID0gX21lcmdlT3B0cztcblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKmpzaGludCBub2RlOnRydWUgKi9cbi8qXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuKi9cblxuXG5cbnZhciBJbnB1dFNjYW5uZXIgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg4KS5JbnB1dFNjYW5uZXIpO1xudmFyIEJhc2VUb2tlbml6ZXIgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5Ub2tlbml6ZXIpO1xudmFyIEJBU0VUT0tFTiA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLlRPS0VOKTtcbnZhciBEaXJlY3RpdmVzID0gKF9fd2VicGFja19yZXF1aXJlX18oMTMpLkRpcmVjdGl2ZXMpO1xudmFyIGFjb3JuID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBQYXR0ZXJuID0gKF9fd2VicGFja19yZXF1aXJlX18oMTIpLlBhdHRlcm4pO1xudmFyIFRlbXBsYXRhYmxlUGF0dGVybiA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KS5UZW1wbGF0YWJsZVBhdHRlcm4pO1xuXG5cbmZ1bmN0aW9uIGluX2FycmF5KHdoYXQsIGFycikge1xuICByZXR1cm4gYXJyLmluZGV4T2Yod2hhdCkgIT09IC0xO1xufVxuXG5cbnZhciBUT0tFTiA9IHtcbiAgU1RBUlRfRVhQUjogJ1RLX1NUQVJUX0VYUFInLFxuICBFTkRfRVhQUjogJ1RLX0VORF9FWFBSJyxcbiAgU1RBUlRfQkxPQ0s6ICdUS19TVEFSVF9CTE9DSycsXG4gIEVORF9CTE9DSzogJ1RLX0VORF9CTE9DSycsXG4gIFdPUkQ6ICdUS19XT1JEJyxcbiAgUkVTRVJWRUQ6ICdUS19SRVNFUlZFRCcsXG4gIFNFTUlDT0xPTjogJ1RLX1NFTUlDT0xPTicsXG4gIFNUUklORzogJ1RLX1NUUklORycsXG4gIEVRVUFMUzogJ1RLX0VRVUFMUycsXG4gIE9QRVJBVE9SOiAnVEtfT1BFUkFUT1InLFxuICBDT01NQTogJ1RLX0NPTU1BJyxcbiAgQkxPQ0tfQ09NTUVOVDogJ1RLX0JMT0NLX0NPTU1FTlQnLFxuICBDT01NRU5UOiAnVEtfQ09NTUVOVCcsXG4gIERPVDogJ1RLX0RPVCcsXG4gIFVOS05PV046ICdUS19VTktOT1dOJyxcbiAgU1RBUlQ6IEJBU0VUT0tFTi5TVEFSVCxcbiAgUkFXOiBCQVNFVE9LRU4uUkFXLFxuICBFT0Y6IEJBU0VUT0tFTi5FT0Zcbn07XG5cblxudmFyIGRpcmVjdGl2ZXNfY29yZSA9IG5ldyBEaXJlY3RpdmVzKC9cXC9cXCovLCAvXFwqXFwvLyk7XG5cbnZhciBudW1iZXJfcGF0dGVybiA9IC8wW3hYXVswMTIzNDU2Nzg5YWJjZGVmQUJDREVGX10qbj98MFtvT11bMDEyMzQ1NjdfXSpuP3wwW2JCXVswMV9dKm4/fFxcZFtcXGRfXSpufCg/OlxcLlxcZFtcXGRfXSp8XFxkW1xcZF9dKlxcLj9bXFxkX10qKSg/OltlRV1bKy1dP1tcXGRfXSspPy87XG5cbnZhciBkaWdpdCA9IC9bMC05XS87XG5cbi8vIERvdCBcIi5cIiBtdXN0IGJlIGRpc3Rpbmd1aXNoZWQgZnJvbSBcIi4uLlwiIGFuZCBkZWNpbWFsXG52YXIgZG90X3BhdHRlcm4gPSAvW15cXGRcXC5dLztcblxudmFyIHBvc2l0aW9uYWJsZV9vcGVyYXRvcnMgPSAoXG4gIFwiPj4+ID09PSAhPT0gJiY9ID8/PSB8fD0gXCIgK1xuICBcIjw8ICYmID49ICoqICE9ID09IDw9ID4+IHx8ID8/IHw+IFwiICtcbiAgXCI8IC8gLSArID4gOiAmICUgPyBeIHwgKlwiKS5zcGxpdCgnICcpO1xuXG4vLyBJTVBPUlRBTlQ6IHRoaXMgbXVzdCBiZSBzb3J0ZWQgbG9uZ2VzdCB0byBzaG9ydGVzdCBvciB0b2tlbml6aW5nIG1hbnkgbm90IHdvcmsuXG4vLyBBbHNvLCB5b3UgbXVzdCB1cGRhdGUgcG9zc2l0aW9uYWJsZSBvcGVyYXRvcnMgc2VwYXJhdGVseSBmcm9tIHB1bmN0XG52YXIgcHVuY3QgPVxuICBcIj4+Pj0gXCIgK1xuICBcIi4uLiA+Pj0gPDw9ID09PSA+Pj4gIT09ICoqPSAmJj0gPz89IHx8PSBcIiArXG4gIFwiPT4gXj0gOjogLz0gPDwgPD0gPT0gJiYgLT0gPj0gPj4gIT0gLS0gKz0gKiogfHwgPz8gKysgJT0gJj0gKj0gfD0gfD4gXCIgK1xuICBcIj0gISA/ID4gPCA6IC8gXiAtICsgKiAmICUgfiB8XCI7XG5cbnB1bmN0ID0gcHVuY3QucmVwbGFjZSgvWy1bXFxde30oKSorPy4sXFxcXF4kfCNdL2csIFwiXFxcXCQmXCIpO1xuLy8gPy4gYnV0IG5vdCBpZiBmb2xsb3dlZCBieSBhIG51bWJlciBcbnB1bmN0ID0gJ1xcXFw/XFxcXC4oPyFcXFxcZCkgJyArIHB1bmN0O1xucHVuY3QgPSBwdW5jdC5yZXBsYWNlKC8gL2csICd8Jyk7XG5cbnZhciBwdW5jdF9wYXR0ZXJuID0gbmV3IFJlZ0V4cChwdW5jdCk7XG5cbi8vIHdvcmRzIHdoaWNoIHNob3VsZCBhbHdheXMgc3RhcnQgb24gbmV3IGxpbmUuXG52YXIgbGluZV9zdGFydGVycyA9ICdjb250aW51ZSx0cnksdGhyb3cscmV0dXJuLHZhcixsZXQsY29uc3QsaWYsc3dpdGNoLGNhc2UsZGVmYXVsdCxmb3Isd2hpbGUsYnJlYWssZnVuY3Rpb24saW1wb3J0LGV4cG9ydCcuc3BsaXQoJywnKTtcbnZhciByZXNlcnZlZF93b3JkcyA9IGxpbmVfc3RhcnRlcnMuY29uY2F0KFsnZG8nLCAnaW4nLCAnb2YnLCAnZWxzZScsICdnZXQnLCAnc2V0JywgJ25ldycsICdjYXRjaCcsICdmaW5hbGx5JywgJ3R5cGVvZicsICd5aWVsZCcsICdhc3luYycsICdhd2FpdCcsICdmcm9tJywgJ2FzJywgJ2NsYXNzJywgJ2V4dGVuZHMnXSk7XG52YXIgcmVzZXJ2ZWRfd29yZF9wYXR0ZXJuID0gbmV3IFJlZ0V4cCgnXig/OicgKyByZXNlcnZlZF93b3Jkcy5qb2luKCd8JykgKyAnKSQnKTtcblxuLy8gdmFyIHRlbXBsYXRlX3BhdHRlcm4gPSAvKD86KD86PFxcP3BocHw8XFw/PSlbXFxzXFxTXSo/XFw/Pil8KD86PCVbXFxzXFxTXSo/JT4pL2c7XG5cbnZhciBpbl9odG1sX2NvbW1lbnQ7XG5cbnZhciBUb2tlbml6ZXIgPSBmdW5jdGlvbihpbnB1dF9zdHJpbmcsIG9wdGlvbnMpIHtcbiAgQmFzZVRva2VuaXplci5jYWxsKHRoaXMsIGlucHV0X3N0cmluZywgb3B0aW9ucyk7XG5cbiAgdGhpcy5fcGF0dGVybnMud2hpdGVzcGFjZSA9IHRoaXMuX3BhdHRlcm5zLndoaXRlc3BhY2UubWF0Y2hpbmcoXG4gICAgL1xcdTAwQTBcXHUxNjgwXFx1MTgwZVxcdTIwMDAtXFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcdWZlZmYvLnNvdXJjZSxcbiAgICAvXFx1MjAyOFxcdTIwMjkvLnNvdXJjZSk7XG5cbiAgdmFyIHBhdHRlcm5fcmVhZGVyID0gbmV3IFBhdHRlcm4odGhpcy5faW5wdXQpO1xuICB2YXIgdGVtcGxhdGFibGUgPSBuZXcgVGVtcGxhdGFibGVQYXR0ZXJuKHRoaXMuX2lucHV0KVxuICAgIC5yZWFkX29wdGlvbnModGhpcy5fb3B0aW9ucyk7XG5cbiAgdGhpcy5fX3BhdHRlcm5zID0ge1xuICAgIHRlbXBsYXRlOiB0ZW1wbGF0YWJsZSxcbiAgICBpZGVudGlmaWVyOiB0ZW1wbGF0YWJsZS5zdGFydGluZ193aXRoKGFjb3JuLmlkZW50aWZpZXIpLm1hdGNoaW5nKGFjb3JuLmlkZW50aWZpZXJNYXRjaCksXG4gICAgbnVtYmVyOiBwYXR0ZXJuX3JlYWRlci5tYXRjaGluZyhudW1iZXJfcGF0dGVybiksXG4gICAgcHVuY3Q6IHBhdHRlcm5fcmVhZGVyLm1hdGNoaW5nKHB1bmN0X3BhdHRlcm4pLFxuICAgIC8vIGNvbW1lbnQgZW5kcyBqdXN0IGJlZm9yZSBuZWFyZXN0IGxpbmVmZWVkIG9yIGVuZCBvZiBmaWxlXG4gICAgY29tbWVudDogcGF0dGVybl9yZWFkZXIuc3RhcnRpbmdfd2l0aCgvXFwvXFwvLykudW50aWwoL1tcXG5cXHJcXHUyMDI4XFx1MjAyOV0vKSxcbiAgICAvLyAgLyogLi4uICovIGNvbW1lbnQgZW5kcyB3aXRoIG5lYXJlc3QgKi8gb3IgZW5kIG9mIGZpbGVcbiAgICBibG9ja19jb21tZW50OiBwYXR0ZXJuX3JlYWRlci5zdGFydGluZ193aXRoKC9cXC9cXCovKS51bnRpbF9hZnRlcigvXFwqXFwvLyksXG4gICAgaHRtbF9jb21tZW50X3N0YXJ0OiBwYXR0ZXJuX3JlYWRlci5tYXRjaGluZygvPCEtLS8pLFxuICAgIGh0bWxfY29tbWVudF9lbmQ6IHBhdHRlcm5fcmVhZGVyLm1hdGNoaW5nKC8tLT4vKSxcbiAgICBpbmNsdWRlOiBwYXR0ZXJuX3JlYWRlci5zdGFydGluZ193aXRoKC8jaW5jbHVkZS8pLnVudGlsX2FmdGVyKGFjb3JuLmxpbmVCcmVhayksXG4gICAgc2hlYmFuZzogcGF0dGVybl9yZWFkZXIuc3RhcnRpbmdfd2l0aCgvIyEvKS51bnRpbF9hZnRlcihhY29ybi5saW5lQnJlYWspLFxuICAgIHhtbDogcGF0dGVybl9yZWFkZXIubWF0Y2hpbmcoL1tcXHNcXFNdKj88KFxcLz8pKFstYS16QS1aOjAtOV8uXSt8e1tefV0rP318IVxcW0NEQVRBXFxbW15cXF1dKj9cXF1cXF18KShcXHMqe1tefV0rP318XFxzK1stYS16QS1aOjAtOV8uXSt8XFxzK1stYS16QS1aOjAtOV8uXStcXHMqPVxccyooJ1teJ10qJ3xcIlteXCJdKlwifHsoW157fV18e1tefV0rP30pKz99KSkqXFxzKihcXC8/KVxccyo+LyksXG4gICAgc2luZ2xlX3F1b3RlOiB0ZW1wbGF0YWJsZS51bnRpbCgvWydcXFxcXFxuXFxyXFx1MjAyOFxcdTIwMjldLyksXG4gICAgZG91YmxlX3F1b3RlOiB0ZW1wbGF0YWJsZS51bnRpbCgvW1wiXFxcXFxcblxcclxcdTIwMjhcXHUyMDI5XS8pLFxuICAgIHRlbXBsYXRlX3RleHQ6IHRlbXBsYXRhYmxlLnVudGlsKC9bYFxcXFwkXS8pLFxuICAgIHRlbXBsYXRlX2V4cHJlc3Npb246IHRlbXBsYXRhYmxlLnVudGlsKC9bYH1cXFxcXS8pXG4gIH07XG5cbn07XG5Ub2tlbml6ZXIucHJvdG90eXBlID0gbmV3IEJhc2VUb2tlbml6ZXIoKTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5faXNfY29tbWVudCA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4pIHtcbiAgcmV0dXJuIGN1cnJlbnRfdG9rZW4udHlwZSA9PT0gVE9LRU4uQ09NTUVOVCB8fCBjdXJyZW50X3Rva2VuLnR5cGUgPT09IFRPS0VOLkJMT0NLX0NPTU1FTlQgfHwgY3VycmVudF90b2tlbi50eXBlID09PSBUT0tFTi5VTktOT1dOO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5faXNfb3BlbmluZyA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4pIHtcbiAgcmV0dXJuIGN1cnJlbnRfdG9rZW4udHlwZSA9PT0gVE9LRU4uU1RBUlRfQkxPQ0sgfHwgY3VycmVudF90b2tlbi50eXBlID09PSBUT0tFTi5TVEFSVF9FWFBSO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5faXNfY2xvc2luZyA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4sIG9wZW5fdG9rZW4pIHtcbiAgcmV0dXJuIChjdXJyZW50X3Rva2VuLnR5cGUgPT09IFRPS0VOLkVORF9CTE9DSyB8fCBjdXJyZW50X3Rva2VuLnR5cGUgPT09IFRPS0VOLkVORF9FWFBSKSAmJlxuICAgIChvcGVuX3Rva2VuICYmIChcbiAgICAgIChjdXJyZW50X3Rva2VuLnRleHQgPT09ICddJyAmJiBvcGVuX3Rva2VuLnRleHQgPT09ICdbJykgfHxcbiAgICAgIChjdXJyZW50X3Rva2VuLnRleHQgPT09ICcpJyAmJiBvcGVuX3Rva2VuLnRleHQgPT09ICcoJykgfHxcbiAgICAgIChjdXJyZW50X3Rva2VuLnRleHQgPT09ICd9JyAmJiBvcGVuX3Rva2VuLnRleHQgPT09ICd7JykpKTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3Jlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIGluX2h0bWxfY29tbWVudCA9IGZhbHNlO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fZ2V0X25leHRfdG9rZW4gPSBmdW5jdGlvbihwcmV2aW91c190b2tlbiwgb3Blbl90b2tlbikgeyAvLyBqc2hpbnQgdW51c2VkOmZhbHNlXG4gIHZhciB0b2tlbiA9IG51bGw7XG4gIHRoaXMuX3JlYWRXaGl0ZXNwYWNlKCk7XG4gIHZhciBjID0gdGhpcy5faW5wdXQucGVlaygpO1xuXG4gIGlmIChjID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5FT0YsICcnKTtcbiAgfVxuXG4gIHRva2VuID0gdG9rZW4gfHwgdGhpcy5fcmVhZF9ub25famF2YXNjcmlwdChjKTtcbiAgdG9rZW4gPSB0b2tlbiB8fCB0aGlzLl9yZWFkX3N0cmluZyhjKTtcbiAgdG9rZW4gPSB0b2tlbiB8fCB0aGlzLl9yZWFkX3dvcmQocHJldmlvdXNfdG9rZW4pO1xuICB0b2tlbiA9IHRva2VuIHx8IHRoaXMuX3JlYWRfc2luZ2xlcyhjKTtcbiAgdG9rZW4gPSB0b2tlbiB8fCB0aGlzLl9yZWFkX2NvbW1lbnQoYyk7XG4gIHRva2VuID0gdG9rZW4gfHwgdGhpcy5fcmVhZF9yZWdleHAoYywgcHJldmlvdXNfdG9rZW4pO1xuICB0b2tlbiA9IHRva2VuIHx8IHRoaXMuX3JlYWRfeG1sKGMsIHByZXZpb3VzX3Rva2VuKTtcbiAgdG9rZW4gPSB0b2tlbiB8fCB0aGlzLl9yZWFkX3B1bmN0dWF0aW9uKCk7XG4gIHRva2VuID0gdG9rZW4gfHwgdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLlVOS05PV04sIHRoaXMuX2lucHV0Lm5leHQoKSk7XG5cbiAgcmV0dXJuIHRva2VuO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fcmVhZF93b3JkID0gZnVuY3Rpb24ocHJldmlvdXNfdG9rZW4pIHtcbiAgdmFyIHJlc3VsdGluZ19zdHJpbmc7XG4gIHJlc3VsdGluZ19zdHJpbmcgPSB0aGlzLl9fcGF0dGVybnMuaWRlbnRpZmllci5yZWFkKCk7XG4gIGlmIChyZXN1bHRpbmdfc3RyaW5nICE9PSAnJykge1xuICAgIHJlc3VsdGluZ19zdHJpbmcgPSByZXN1bHRpbmdfc3RyaW5nLnJlcGxhY2UoYWNvcm4uYWxsTGluZUJyZWFrcywgJ1xcbicpO1xuICAgIGlmICghKHByZXZpb3VzX3Rva2VuLnR5cGUgPT09IFRPS0VOLkRPVCB8fFxuICAgICAgICAocHJldmlvdXNfdG9rZW4udHlwZSA9PT0gVE9LRU4uUkVTRVJWRUQgJiYgKHByZXZpb3VzX3Rva2VuLnRleHQgPT09ICdzZXQnIHx8IHByZXZpb3VzX3Rva2VuLnRleHQgPT09ICdnZXQnKSkpICYmXG4gICAgICByZXNlcnZlZF93b3JkX3BhdHRlcm4udGVzdChyZXN1bHRpbmdfc3RyaW5nKSkge1xuICAgICAgaWYgKChyZXN1bHRpbmdfc3RyaW5nID09PSAnaW4nIHx8IHJlc3VsdGluZ19zdHJpbmcgPT09ICdvZicpICYmXG4gICAgICAgIChwcmV2aW91c190b2tlbi50eXBlID09PSBUT0tFTi5XT1JEIHx8IHByZXZpb3VzX3Rva2VuLnR5cGUgPT09IFRPS0VOLlNUUklORykpIHsgLy8gaGFjayBmb3IgJ2luJyBhbmQgJ29mJyBvcGVyYXRvcnNcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5PUEVSQVRPUiwgcmVzdWx0aW5nX3N0cmluZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLlJFU0VSVkVELCByZXN1bHRpbmdfc3RyaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5XT1JELCByZXN1bHRpbmdfc3RyaW5nKTtcbiAgfVxuXG4gIHJlc3VsdGluZ19zdHJpbmcgPSB0aGlzLl9fcGF0dGVybnMubnVtYmVyLnJlYWQoKTtcbiAgaWYgKHJlc3VsdGluZ19zdHJpbmcgIT09ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5XT1JELCByZXN1bHRpbmdfc3RyaW5nKTtcbiAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fcmVhZF9zaW5nbGVzID0gZnVuY3Rpb24oYykge1xuICB2YXIgdG9rZW4gPSBudWxsO1xuICBpZiAoYyA9PT0gJygnIHx8IGMgPT09ICdbJykge1xuICAgIHRva2VuID0gdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLlNUQVJUX0VYUFIsIGMpO1xuICB9IGVsc2UgaWYgKGMgPT09ICcpJyB8fCBjID09PSAnXScpIHtcbiAgICB0b2tlbiA9IHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5FTkRfRVhQUiwgYyk7XG4gIH0gZWxzZSBpZiAoYyA9PT0gJ3snKSB7XG4gICAgdG9rZW4gPSB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uU1RBUlRfQkxPQ0ssIGMpO1xuICB9IGVsc2UgaWYgKGMgPT09ICd9Jykge1xuICAgIHRva2VuID0gdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLkVORF9CTE9DSywgYyk7XG4gIH0gZWxzZSBpZiAoYyA9PT0gJzsnKSB7XG4gICAgdG9rZW4gPSB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uU0VNSUNPTE9OLCBjKTtcbiAgfSBlbHNlIGlmIChjID09PSAnLicgJiYgZG90X3BhdHRlcm4udGVzdCh0aGlzLl9pbnB1dC5wZWVrKDEpKSkge1xuICAgIHRva2VuID0gdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLkRPVCwgYyk7XG4gIH0gZWxzZSBpZiAoYyA9PT0gJywnKSB7XG4gICAgdG9rZW4gPSB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uQ09NTUEsIGMpO1xuICB9XG5cbiAgaWYgKHRva2VuKSB7XG4gICAgdGhpcy5faW5wdXQubmV4dCgpO1xuICB9XG4gIHJldHVybiB0b2tlbjtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3JlYWRfcHVuY3R1YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc3VsdGluZ19zdHJpbmcgPSB0aGlzLl9fcGF0dGVybnMucHVuY3QucmVhZCgpO1xuXG4gIGlmIChyZXN1bHRpbmdfc3RyaW5nICE9PSAnJykge1xuICAgIGlmIChyZXN1bHRpbmdfc3RyaW5nID09PSAnPScpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uRVFVQUxTLCByZXN1bHRpbmdfc3RyaW5nKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdGluZ19zdHJpbmcgPT09ICc/LicpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uRE9ULCByZXN1bHRpbmdfc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5PUEVSQVRPUiwgcmVzdWx0aW5nX3N0cmluZyk7XG4gICAgfVxuICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9yZWFkX25vbl9qYXZhc2NyaXB0ID0gZnVuY3Rpb24oYykge1xuICB2YXIgcmVzdWx0aW5nX3N0cmluZyA9ICcnO1xuXG4gIGlmIChjID09PSAnIycpIHtcbiAgICBpZiAodGhpcy5faXNfZmlyc3RfdG9rZW4oKSkge1xuICAgICAgcmVzdWx0aW5nX3N0cmluZyA9IHRoaXMuX19wYXR0ZXJucy5zaGViYW5nLnJlYWQoKTtcblxuICAgICAgaWYgKHJlc3VsdGluZ19zdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5VTktOT1dOLCByZXN1bHRpbmdfc3RyaW5nLnRyaW0oKSArICdcXG4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBoYW5kbGVzIGV4dGVuZHNjcmlwdCAjaW5jbHVkZXNcbiAgICByZXN1bHRpbmdfc3RyaW5nID0gdGhpcy5fX3BhdHRlcm5zLmluY2x1ZGUucmVhZCgpO1xuXG4gICAgaWYgKHJlc3VsdGluZ19zdHJpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uVU5LTk9XTiwgcmVzdWx0aW5nX3N0cmluZy50cmltKCkgKyAnXFxuJyk7XG4gICAgfVxuXG4gICAgYyA9IHRoaXMuX2lucHV0Lm5leHQoKTtcblxuICAgIC8vIFNwaWRlcm1vbmtleS1zcGVjaWZpYyBzaGFycCB2YXJpYWJsZXMgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMuIENvbnNpZGVyZWQgb2Jzb2xldGUuXG4gICAgdmFyIHNoYXJwID0gJyMnO1xuICAgIGlmICh0aGlzLl9pbnB1dC5oYXNOZXh0KCkgJiYgdGhpcy5faW5wdXQudGVzdENoYXIoZGlnaXQpKSB7XG4gICAgICBkbyB7XG4gICAgICAgIGMgPSB0aGlzLl9pbnB1dC5uZXh0KCk7XG4gICAgICAgIHNoYXJwICs9IGM7XG4gICAgICB9IHdoaWxlICh0aGlzLl9pbnB1dC5oYXNOZXh0KCkgJiYgYyAhPT0gJyMnICYmIGMgIT09ICc9Jyk7XG4gICAgICBpZiAoYyA9PT0gJyMnKSB7XG4gICAgICAgIC8vXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2lucHV0LnBlZWsoKSA9PT0gJ1snICYmIHRoaXMuX2lucHV0LnBlZWsoMSkgPT09ICddJykge1xuICAgICAgICBzaGFycCArPSAnW10nO1xuICAgICAgICB0aGlzLl9pbnB1dC5uZXh0KCk7XG4gICAgICAgIHRoaXMuX2lucHV0Lm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5faW5wdXQucGVlaygpID09PSAneycgJiYgdGhpcy5faW5wdXQucGVlaygxKSA9PT0gJ30nKSB7XG4gICAgICAgIHNoYXJwICs9ICd7fSc7XG4gICAgICAgIHRoaXMuX2lucHV0Lm5leHQoKTtcbiAgICAgICAgdGhpcy5faW5wdXQubmV4dCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5XT1JELCBzaGFycCk7XG4gICAgfVxuXG4gICAgdGhpcy5faW5wdXQuYmFjaygpO1xuXG4gIH0gZWxzZSBpZiAoYyA9PT0gJzwnICYmIHRoaXMuX2lzX2ZpcnN0X3Rva2VuKCkpIHtcbiAgICByZXN1bHRpbmdfc3RyaW5nID0gdGhpcy5fX3BhdHRlcm5zLmh0bWxfY29tbWVudF9zdGFydC5yZWFkKCk7XG4gICAgaWYgKHJlc3VsdGluZ19zdHJpbmcpIHtcbiAgICAgIHdoaWxlICh0aGlzLl9pbnB1dC5oYXNOZXh0KCkgJiYgIXRoaXMuX2lucHV0LnRlc3RDaGFyKGFjb3JuLm5ld2xpbmUpKSB7XG4gICAgICAgIHJlc3VsdGluZ19zdHJpbmcgKz0gdGhpcy5faW5wdXQubmV4dCgpO1xuICAgICAgfVxuICAgICAgaW5faHRtbF9jb21tZW50ID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uQ09NTUVOVCwgcmVzdWx0aW5nX3N0cmluZyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGluX2h0bWxfY29tbWVudCAmJiBjID09PSAnLScpIHtcbiAgICByZXN1bHRpbmdfc3RyaW5nID0gdGhpcy5fX3BhdHRlcm5zLmh0bWxfY29tbWVudF9lbmQucmVhZCgpO1xuICAgIGlmIChyZXN1bHRpbmdfc3RyaW5nKSB7XG4gICAgICBpbl9odG1sX2NvbW1lbnQgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uQ09NTUVOVCwgcmVzdWx0aW5nX3N0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9yZWFkX2NvbW1lbnQgPSBmdW5jdGlvbihjKSB7XG4gIHZhciB0b2tlbiA9IG51bGw7XG4gIGlmIChjID09PSAnLycpIHtcbiAgICB2YXIgY29tbWVudCA9ICcnO1xuICAgIGlmICh0aGlzLl9pbnB1dC5wZWVrKDEpID09PSAnKicpIHtcbiAgICAgIC8vIHBlZWsgZm9yIGNvbW1lbnQgLyogLi4uICovXG4gICAgICBjb21tZW50ID0gdGhpcy5fX3BhdHRlcm5zLmJsb2NrX2NvbW1lbnQucmVhZCgpO1xuICAgICAgdmFyIGRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzX2NvcmUuZ2V0X2RpcmVjdGl2ZXMoY29tbWVudCk7XG4gICAgICBpZiAoZGlyZWN0aXZlcyAmJiBkaXJlY3RpdmVzLmlnbm9yZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICBjb21tZW50ICs9IGRpcmVjdGl2ZXNfY29yZS5yZWFkSWdub3JlZCh0aGlzLl9pbnB1dCk7XG4gICAgICB9XG4gICAgICBjb21tZW50ID0gY29tbWVudC5yZXBsYWNlKGFjb3JuLmFsbExpbmVCcmVha3MsICdcXG4nKTtcbiAgICAgIHRva2VuID0gdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLkJMT0NLX0NPTU1FTlQsIGNvbW1lbnQpO1xuICAgICAgdG9rZW4uZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXM7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pbnB1dC5wZWVrKDEpID09PSAnLycpIHtcbiAgICAgIC8vIHBlZWsgZm9yIGNvbW1lbnQgLy8gLi4uXG4gICAgICBjb21tZW50ID0gdGhpcy5fX3BhdHRlcm5zLmNvbW1lbnQucmVhZCgpO1xuICAgICAgdG9rZW4gPSB0aGlzLl9jcmVhdGVfdG9rZW4oVE9LRU4uQ09NTUVOVCwgY29tbWVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0b2tlbjtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3JlYWRfc3RyaW5nID0gZnVuY3Rpb24oYykge1xuICBpZiAoYyA9PT0gJ2AnIHx8IGMgPT09IFwiJ1wiIHx8IGMgPT09ICdcIicpIHtcbiAgICB2YXIgcmVzdWx0aW5nX3N0cmluZyA9IHRoaXMuX2lucHV0Lm5leHQoKTtcbiAgICB0aGlzLmhhc19jaGFyX2VzY2FwZXMgPSBmYWxzZTtcblxuICAgIGlmIChjID09PSAnYCcpIHtcbiAgICAgIHJlc3VsdGluZ19zdHJpbmcgKz0gdGhpcy5fcmVhZF9zdHJpbmdfcmVjdXJzaXZlKCdgJywgdHJ1ZSwgJyR7Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdGluZ19zdHJpbmcgKz0gdGhpcy5fcmVhZF9zdHJpbmdfcmVjdXJzaXZlKGMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc19jaGFyX2VzY2FwZXMgJiYgdGhpcy5fb3B0aW9ucy51bmVzY2FwZV9zdHJpbmdzKSB7XG4gICAgICByZXN1bHRpbmdfc3RyaW5nID0gdW5lc2NhcGVfc3RyaW5nKHJlc3VsdGluZ19zdHJpbmcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbnB1dC5wZWVrKCkgPT09IGMpIHtcbiAgICAgIHJlc3VsdGluZ19zdHJpbmcgKz0gdGhpcy5faW5wdXQubmV4dCgpO1xuICAgIH1cblxuICAgIHJlc3VsdGluZ19zdHJpbmcgPSByZXN1bHRpbmdfc3RyaW5nLnJlcGxhY2UoYWNvcm4uYWxsTGluZUJyZWFrcywgJ1xcbicpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5TVFJJTkcsIHJlc3VsdGluZ19zdHJpbmcpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9hbGxvd19yZWdleHBfb3JfeG1sID0gZnVuY3Rpb24ocHJldmlvdXNfdG9rZW4pIHtcbiAgLy8gcmVnZXggYW5kIHhtbCBjYW4gb25seSBhcHBlYXIgaW4gc3BlY2lmaWMgbG9jYXRpb25zIGR1cmluZyBwYXJzaW5nXG4gIHJldHVybiAocHJldmlvdXNfdG9rZW4udHlwZSA9PT0gVE9LRU4uUkVTRVJWRUQgJiYgaW5fYXJyYXkocHJldmlvdXNfdG9rZW4udGV4dCwgWydyZXR1cm4nLCAnY2FzZScsICd0aHJvdycsICdlbHNlJywgJ2RvJywgJ3R5cGVvZicsICd5aWVsZCddKSkgfHxcbiAgICAocHJldmlvdXNfdG9rZW4udHlwZSA9PT0gVE9LRU4uRU5EX0VYUFIgJiYgcHJldmlvdXNfdG9rZW4udGV4dCA9PT0gJyknICYmXG4gICAgICBwcmV2aW91c190b2tlbi5vcGVuZWQucHJldmlvdXMudHlwZSA9PT0gVE9LRU4uUkVTRVJWRUQgJiYgaW5fYXJyYXkocHJldmlvdXNfdG9rZW4ub3BlbmVkLnByZXZpb3VzLnRleHQsIFsnaWYnLCAnd2hpbGUnLCAnZm9yJ10pKSB8fFxuICAgIChpbl9hcnJheShwcmV2aW91c190b2tlbi50eXBlLCBbVE9LRU4uQ09NTUVOVCwgVE9LRU4uU1RBUlRfRVhQUiwgVE9LRU4uU1RBUlRfQkxPQ0ssIFRPS0VOLlNUQVJULFxuICAgICAgVE9LRU4uRU5EX0JMT0NLLCBUT0tFTi5PUEVSQVRPUiwgVE9LRU4uRVFVQUxTLCBUT0tFTi5FT0YsIFRPS0VOLlNFTUlDT0xPTiwgVE9LRU4uQ09NTUFcbiAgICBdKSk7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9yZWFkX3JlZ2V4cCA9IGZ1bmN0aW9uKGMsIHByZXZpb3VzX3Rva2VuKSB7XG5cbiAgaWYgKGMgPT09ICcvJyAmJiB0aGlzLl9hbGxvd19yZWdleHBfb3JfeG1sKHByZXZpb3VzX3Rva2VuKSkge1xuICAgIC8vIGhhbmRsZSByZWdleHBcbiAgICAvL1xuICAgIHZhciByZXN1bHRpbmdfc3RyaW5nID0gdGhpcy5faW5wdXQubmV4dCgpO1xuICAgIHZhciBlc2MgPSBmYWxzZTtcblxuICAgIHZhciBpbl9jaGFyX2NsYXNzID0gZmFsc2U7XG4gICAgd2hpbGUgKHRoaXMuX2lucHV0Lmhhc05leHQoKSAmJlxuICAgICAgKChlc2MgfHwgaW5fY2hhcl9jbGFzcyB8fCB0aGlzLl9pbnB1dC5wZWVrKCkgIT09IGMpICYmXG4gICAgICAgICF0aGlzLl9pbnB1dC50ZXN0Q2hhcihhY29ybi5uZXdsaW5lKSkpIHtcbiAgICAgIHJlc3VsdGluZ19zdHJpbmcgKz0gdGhpcy5faW5wdXQucGVlaygpO1xuICAgICAgaWYgKCFlc2MpIHtcbiAgICAgICAgZXNjID0gdGhpcy5faW5wdXQucGVlaygpID09PSAnXFxcXCc7XG4gICAgICAgIGlmICh0aGlzLl9pbnB1dC5wZWVrKCkgPT09ICdbJykge1xuICAgICAgICAgIGluX2NoYXJfY2xhc3MgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2lucHV0LnBlZWsoKSA9PT0gJ10nKSB7XG4gICAgICAgICAgaW5fY2hhcl9jbGFzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlc2MgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lucHV0Lm5leHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5wdXQucGVlaygpID09PSBjKSB7XG4gICAgICByZXN1bHRpbmdfc3RyaW5nICs9IHRoaXMuX2lucHV0Lm5leHQoKTtcblxuICAgICAgLy8gcmVnZXhwcyBtYXkgaGF2ZSBtb2RpZmllcnMgL3JlZ2V4cC9NT0QgLCBzbyBmZXRjaCB0aG9zZSwgdG9vXG4gICAgICAvLyBPbmx5IFtnaW1dIGFyZSB2YWxpZCwgYnV0IGlmIHRoZSB1c2VyIHB1dHMgaW4gZ2FyYmFnZSwgZG8gd2hhdCB3ZSBjYW4gdG8gdGFrZSBpdC5cbiAgICAgIHJlc3VsdGluZ19zdHJpbmcgKz0gdGhpcy5faW5wdXQucmVhZChhY29ybi5pZGVudGlmaWVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5TVFJJTkcsIHJlc3VsdGluZ19zdHJpbmcpO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fcmVhZF94bWwgPSBmdW5jdGlvbihjLCBwcmV2aW91c190b2tlbikge1xuXG4gIGlmICh0aGlzLl9vcHRpb25zLmU0eCAmJiBjID09PSBcIjxcIiAmJiB0aGlzLl9hbGxvd19yZWdleHBfb3JfeG1sKHByZXZpb3VzX3Rva2VuKSkge1xuICAgIHZhciB4bWxTdHIgPSAnJztcbiAgICB2YXIgbWF0Y2ggPSB0aGlzLl9fcGF0dGVybnMueG1sLnJlYWRfbWF0Y2goKTtcbiAgICAvLyBoYW5kbGUgZTR4IHhtbCBsaXRlcmFsc1xuICAgIC8vXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAvLyBUcmltIHJvb3QgdGFnIHRvIGF0dGVtcHQgdG9cbiAgICAgIHZhciByb290VGFnID0gbWF0Y2hbMl0ucmVwbGFjZSgvXntcXHMrLywgJ3snKS5yZXBsYWNlKC9cXHMrfSQvLCAnfScpO1xuICAgICAgdmFyIGlzQ3VybHlSb290ID0gcm9vdFRhZy5pbmRleE9mKCd7JykgPT09IDA7XG4gICAgICB2YXIgZGVwdGggPSAwO1xuICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgIHZhciBpc0VuZFRhZyA9ICEhbWF0Y2hbMV07XG4gICAgICAgIHZhciB0YWdOYW1lID0gbWF0Y2hbMl07XG4gICAgICAgIHZhciBpc1NpbmdsZXRvblRhZyA9ICghIW1hdGNoW21hdGNoLmxlbmd0aCAtIDFdKSB8fCAodGFnTmFtZS5zbGljZSgwLCA4KSA9PT0gXCIhW0NEQVRBW1wiKTtcbiAgICAgICAgaWYgKCFpc1NpbmdsZXRvblRhZyAmJlxuICAgICAgICAgICh0YWdOYW1lID09PSByb290VGFnIHx8IChpc0N1cmx5Um9vdCAmJiB0YWdOYW1lLnJlcGxhY2UoL157XFxzKy8sICd7JykucmVwbGFjZSgvXFxzK30kLywgJ30nKSkpKSB7XG4gICAgICAgICAgaWYgKGlzRW5kVGFnKSB7XG4gICAgICAgICAgICAtLWRlcHRoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICArK2RlcHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4bWxTdHIgKz0gbWF0Y2hbMF07XG4gICAgICAgIGlmIChkZXB0aCA8PSAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2ggPSB0aGlzLl9fcGF0dGVybnMueG1sLnJlYWRfbWF0Y2goKTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBjbG9zZSBjb3JyZWN0bHksIGtlZXAgdW5mb3JtYXR0ZWQuXG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIHhtbFN0ciArPSB0aGlzLl9pbnB1dC5tYXRjaCgvW1xcc1xcU10qL2cpWzBdO1xuICAgICAgfVxuICAgICAgeG1sU3RyID0geG1sU3RyLnJlcGxhY2UoYWNvcm4uYWxsTGluZUJyZWFrcywgJ1xcbicpO1xuICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5TVFJJTkcsIHhtbFN0cik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiB1bmVzY2FwZV9zdHJpbmcocykge1xuICAvLyBZb3UgdGhpbmsgdGhhdCBhIHJlZ2V4IHdvdWxkIHdvcmsgZm9yIHRoaXNcbiAgLy8gcmV0dXJuIHMucmVwbGFjZSgvXFxcXHgoWzAtOWEtZl17Mn0pL2dpLCBmdW5jdGlvbihtYXRjaCwgdmFsKSB7XG4gIC8vICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQodmFsLCAxNikpO1xuICAvLyAgICAgfSlcbiAgLy8gSG93ZXZlciwgZGVhbGluZyB3aXRoICdcXHhmZicsICdcXFxceGZmJywgJ1xcXFxcXHhmZicgbWFrZXMgdGhpcyBtb3JlIGZ1bi5cbiAgdmFyIG91dCA9ICcnLFxuICAgIGVzY2FwZWQgPSAwO1xuXG4gIHZhciBpbnB1dF9zY2FuID0gbmV3IElucHV0U2Nhbm5lcihzKTtcbiAgdmFyIG1hdGNoZWQgPSBudWxsO1xuXG4gIHdoaWxlIChpbnB1dF9zY2FuLmhhc05leHQoKSkge1xuICAgIC8vIEtlZXAgYW55IHdoaXRlc3BhY2UsIG5vbi1zbGFzaCBjaGFyYWN0ZXJzXG4gICAgLy8gYWxzbyBrZWVwIHNsYXNoIHBhaXJzLlxuICAgIG1hdGNoZWQgPSBpbnB1dF9zY2FuLm1hdGNoKC8oW1xcc118W15cXFxcXXxcXFxcXFxcXCkrL2cpO1xuXG4gICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgIG91dCArPSBtYXRjaGVkWzBdO1xuICAgIH1cblxuICAgIGlmIChpbnB1dF9zY2FuLnBlZWsoKSA9PT0gJ1xcXFwnKSB7XG4gICAgICBpbnB1dF9zY2FuLm5leHQoKTtcbiAgICAgIGlmIChpbnB1dF9zY2FuLnBlZWsoKSA9PT0gJ3gnKSB7XG4gICAgICAgIG1hdGNoZWQgPSBpbnB1dF9zY2FuLm1hdGNoKC94KFswLTlBLUZhLWZdezJ9KS9nKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXRfc2Nhbi5wZWVrKCkgPT09ICd1Jykge1xuICAgICAgICBtYXRjaGVkID0gaW5wdXRfc2Nhbi5tYXRjaCgvdShbMC05QS1GYS1mXXs0fSkvZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXQgKz0gJ1xcXFwnO1xuICAgICAgICBpZiAoaW5wdXRfc2Nhbi5oYXNOZXh0KCkpIHtcbiAgICAgICAgICBvdXQgKz0gaW5wdXRfc2Nhbi5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZXJlJ3Mgc29tZSBlcnJvciBkZWNvZGluZywgcmV0dXJuIHRoZSBvcmlnaW5hbCBzdHJpbmdcbiAgICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgICByZXR1cm4gcztcbiAgICAgIH1cblxuICAgICAgZXNjYXBlZCA9IHBhcnNlSW50KG1hdGNoZWRbMV0sIDE2KTtcblxuICAgICAgaWYgKGVzY2FwZWQgPiAweDdlICYmIGVzY2FwZWQgPD0gMHhmZiAmJiBtYXRjaGVkWzBdLmluZGV4T2YoJ3gnKSA9PT0gMCkge1xuICAgICAgICAvLyB3ZSBiYWlsIG91dCBvbiBcXHg3Zi4uXFx4ZmYsXG4gICAgICAgIC8vIGxlYXZpbmcgd2hvbGUgc3RyaW5nIGVzY2FwZWQsXG4gICAgICAgIC8vIGFzIGl0J3MgcHJvYmFibHkgY29tcGxldGVseSBiaW5hcnlcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9IGVsc2UgaWYgKGVzY2FwZWQgPj0gMHgwMCAmJiBlc2NhcGVkIDwgMHgyMCkge1xuICAgICAgICAvLyBsZWF2ZSAweDAwLi4uMHgxZiBlc2NhcGVkXG4gICAgICAgIG91dCArPSAnXFxcXCcgKyBtYXRjaGVkWzBdO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoZXNjYXBlZCA9PT0gMHgyMiB8fCBlc2NhcGVkID09PSAweDI3IHx8IGVzY2FwZWQgPT09IDB4NWMpIHtcbiAgICAgICAgLy8gc2luZ2xlLXF1b3RlLCBhcG9zdHJvcGhlLCBiYWNrc2xhc2ggLSBlc2NhcGUgdGhlc2VcbiAgICAgICAgb3V0ICs9ICdcXFxcJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoZXNjYXBlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShlc2NhcGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG4vLyBoYW5kbGUgc3RyaW5nXG4vL1xuVG9rZW5pemVyLnByb3RvdHlwZS5fcmVhZF9zdHJpbmdfcmVjdXJzaXZlID0gZnVuY3Rpb24oZGVsaW1pdGVyLCBhbGxvd191bmVzY2FwZWRfbmV3bGluZXMsIHN0YXJ0X3N1Yikge1xuICB2YXIgY3VycmVudF9jaGFyO1xuICB2YXIgcGF0dGVybjtcbiAgaWYgKGRlbGltaXRlciA9PT0gJ1xcJycpIHtcbiAgICBwYXR0ZXJuID0gdGhpcy5fX3BhdHRlcm5zLnNpbmdsZV9xdW90ZTtcbiAgfSBlbHNlIGlmIChkZWxpbWl0ZXIgPT09ICdcIicpIHtcbiAgICBwYXR0ZXJuID0gdGhpcy5fX3BhdHRlcm5zLmRvdWJsZV9xdW90ZTtcbiAgfSBlbHNlIGlmIChkZWxpbWl0ZXIgPT09ICdgJykge1xuICAgIHBhdHRlcm4gPSB0aGlzLl9fcGF0dGVybnMudGVtcGxhdGVfdGV4dDtcbiAgfSBlbHNlIGlmIChkZWxpbWl0ZXIgPT09ICd9Jykge1xuICAgIHBhdHRlcm4gPSB0aGlzLl9fcGF0dGVybnMudGVtcGxhdGVfZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHZhciByZXN1bHRpbmdfc3RyaW5nID0gcGF0dGVybi5yZWFkKCk7XG4gIHZhciBuZXh0ID0gJyc7XG4gIHdoaWxlICh0aGlzLl9pbnB1dC5oYXNOZXh0KCkpIHtcbiAgICBuZXh0ID0gdGhpcy5faW5wdXQubmV4dCgpO1xuICAgIGlmIChuZXh0ID09PSBkZWxpbWl0ZXIgfHxcbiAgICAgICghYWxsb3dfdW5lc2NhcGVkX25ld2xpbmVzICYmIGFjb3JuLm5ld2xpbmUudGVzdChuZXh0KSkpIHtcbiAgICAgIHRoaXMuX2lucHV0LmJhY2soKTtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSBpZiAobmV4dCA9PT0gJ1xcXFwnICYmIHRoaXMuX2lucHV0Lmhhc05leHQoKSkge1xuICAgICAgY3VycmVudF9jaGFyID0gdGhpcy5faW5wdXQucGVlaygpO1xuXG4gICAgICBpZiAoY3VycmVudF9jaGFyID09PSAneCcgfHwgY3VycmVudF9jaGFyID09PSAndScpIHtcbiAgICAgICAgdGhpcy5oYXNfY2hhcl9lc2NhcGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudF9jaGFyID09PSAnXFxyJyAmJiB0aGlzLl9pbnB1dC5wZWVrKDEpID09PSAnXFxuJykge1xuICAgICAgICB0aGlzLl9pbnB1dC5uZXh0KCk7XG4gICAgICB9XG4gICAgICBuZXh0ICs9IHRoaXMuX2lucHV0Lm5leHQoKTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0X3N1Yikge1xuICAgICAgaWYgKHN0YXJ0X3N1YiA9PT0gJyR7JyAmJiBuZXh0ID09PSAnJCcgJiYgdGhpcy5faW5wdXQucGVlaygpID09PSAneycpIHtcbiAgICAgICAgbmV4dCArPSB0aGlzLl9pbnB1dC5uZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydF9zdWIgPT09IG5leHQpIHtcbiAgICAgICAgaWYgKGRlbGltaXRlciA9PT0gJ2AnKSB7XG4gICAgICAgICAgbmV4dCArPSB0aGlzLl9yZWFkX3N0cmluZ19yZWN1cnNpdmUoJ30nLCBhbGxvd191bmVzY2FwZWRfbmV3bGluZXMsICdgJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCArPSB0aGlzLl9yZWFkX3N0cmluZ19yZWN1cnNpdmUoJ2AnLCBhbGxvd191bmVzY2FwZWRfbmV3bGluZXMsICckeycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pbnB1dC5oYXNOZXh0KCkpIHtcbiAgICAgICAgICBuZXh0ICs9IHRoaXMuX2lucHV0Lm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBuZXh0ICs9IHBhdHRlcm4ucmVhZCgpO1xuICAgIHJlc3VsdGluZ19zdHJpbmcgKz0gbmV4dDtcbiAgfVxuXG4gIHJldHVybiByZXN1bHRpbmdfc3RyaW5nO1xufTtcblxubW9kdWxlLmV4cG9ydHMuVG9rZW5pemVyID0gVG9rZW5pemVyO1xubW9kdWxlLmV4cG9ydHMuVE9LRU4gPSBUT0tFTjtcbm1vZHVsZS5leHBvcnRzLnBvc2l0aW9uYWJsZV9vcGVyYXRvcnMgPSBwb3NpdGlvbmFibGVfb3BlcmF0b3JzLnNsaWNlKCk7XG5tb2R1bGUuZXhwb3J0cy5saW5lX3N0YXJ0ZXJzID0gbGluZV9zdGFydGVycy5zbGljZSgpO1xuXG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG4vKmpzaGludCBub2RlOnRydWUgKi9cbi8qXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuKi9cblxuXG5cbnZhciByZWdleHBfaGFzX3N0aWNreSA9IFJlZ0V4cC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ3N0aWNreScpO1xuXG5mdW5jdGlvbiBJbnB1dFNjYW5uZXIoaW5wdXRfc3RyaW5nKSB7XG4gIHRoaXMuX19pbnB1dCA9IGlucHV0X3N0cmluZyB8fCAnJztcbiAgdGhpcy5fX2lucHV0X2xlbmd0aCA9IHRoaXMuX19pbnB1dC5sZW5ndGg7XG4gIHRoaXMuX19wb3NpdGlvbiA9IDA7XG59XG5cbklucHV0U2Nhbm5lci5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fcG9zaXRpb24gPSAwO1xufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9fcG9zaXRpb24gPiAwKSB7XG4gICAgdGhpcy5fX3Bvc2l0aW9uIC09IDE7XG4gIH1cbn07XG5cbklucHV0U2Nhbm5lci5wcm90b3R5cGUuaGFzTmV4dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fX3Bvc2l0aW9uIDwgdGhpcy5fX2lucHV0X2xlbmd0aDtcbn07XG5cbklucHV0U2Nhbm5lci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdmFsID0gbnVsbDtcbiAgaWYgKHRoaXMuaGFzTmV4dCgpKSB7XG4gICAgdmFsID0gdGhpcy5fX2lucHV0LmNoYXJBdCh0aGlzLl9fcG9zaXRpb24pO1xuICAgIHRoaXMuX19wb3NpdGlvbiArPSAxO1xuICB9XG4gIHJldHVybiB2YWw7XG59O1xuXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbihpbmRleCkge1xuICB2YXIgdmFsID0gbnVsbDtcbiAgaW5kZXggPSBpbmRleCB8fCAwO1xuICBpbmRleCArPSB0aGlzLl9fcG9zaXRpb247XG4gIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5fX2lucHV0X2xlbmd0aCkge1xuICAgIHZhbCA9IHRoaXMuX19pbnB1dC5jaGFyQXQoaW5kZXgpO1xuICB9XG4gIHJldHVybiB2YWw7XG59O1xuXG4vLyBUaGlzIGlzIGEgSmF2YVNjcmlwdCBvbmx5IGhlbHBlciBmdW5jdGlvbiAobm90IGluIHB5dGhvbilcbi8vIEphdmFzY3JpcHQgZG9lc24ndCBoYXZlIGEgbWF0Y2ggbWV0aG9kXG4vLyBhbmQgbm90IGFsbCBpbXBsZW1lbnRhdGlvbiBzdXBwb3J0IFwic3RpY2t5XCIgZmxhZy5cbi8vIElmIHRoZXkgZG8gbm90IHN1cHBvcnQgc3RpY2t5IHRoZW4gYm90aCB0aGlzLm1hdGNoKCkgYW5kIHRoaXMudGVzdCgpIG1ldGhvZFxuLy8gbXVzdCBnZXQgdGhlIG1hdGNoIGFuZCBjaGVjayB0aGUgaW5kZXggb2YgdGhlIG1hdGNoLlxuLy8gSWYgc3RpY2t5IGlzIHN1cHBvcnRlZCBhbmQgc2V0LCB0aGlzIG1ldGhvZCB3aWxsIHVzZSBpdC5cbi8vIE90aGVyd2lzZSBpdCB3aWxsIGNoZWNrIHRoYXQgZ2xvYmFsIGlzIHNldCwgYW5kIGZhbGwgYmFjayB0byB0aGUgc2xvd2VyIG1ldGhvZC5cbklucHV0U2Nhbm5lci5wcm90b3R5cGUuX19tYXRjaCA9IGZ1bmN0aW9uKHBhdHRlcm4sIGluZGV4KSB7XG4gIHBhdHRlcm4ubGFzdEluZGV4ID0gaW5kZXg7XG4gIHZhciBwYXR0ZXJuX21hdGNoID0gcGF0dGVybi5leGVjKHRoaXMuX19pbnB1dCk7XG5cbiAgaWYgKHBhdHRlcm5fbWF0Y2ggJiYgIShyZWdleHBfaGFzX3N0aWNreSAmJiBwYXR0ZXJuLnN0aWNreSkpIHtcbiAgICBpZiAocGF0dGVybl9tYXRjaC5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIHBhdHRlcm5fbWF0Y2ggPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXR0ZXJuX21hdGNoO1xufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24ocGF0dGVybiwgaW5kZXgpIHtcbiAgaW5kZXggPSBpbmRleCB8fCAwO1xuICBpbmRleCArPSB0aGlzLl9fcG9zaXRpb247XG5cbiAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLl9faW5wdXRfbGVuZ3RoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fX21hdGNoKHBhdHRlcm4sIGluZGV4KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbklucHV0U2Nhbm5lci5wcm90b3R5cGUudGVzdENoYXIgPSBmdW5jdGlvbihwYXR0ZXJuLCBpbmRleCkge1xuICAvLyB0ZXN0IG9uZSBjaGFyYWN0ZXIgcmVnZXggbWF0Y2hcbiAgdmFyIHZhbCA9IHRoaXMucGVlayhpbmRleCk7XG4gIHBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiBwYXR0ZXJuLnRlc3QodmFsKTtcbn07XG5cbklucHV0U2Nhbm5lci5wcm90b3R5cGUubWF0Y2ggPSBmdW5jdGlvbihwYXR0ZXJuKSB7XG4gIHZhciBwYXR0ZXJuX21hdGNoID0gdGhpcy5fX21hdGNoKHBhdHRlcm4sIHRoaXMuX19wb3NpdGlvbik7XG4gIGlmIChwYXR0ZXJuX21hdGNoKSB7XG4gICAgdGhpcy5fX3Bvc2l0aW9uICs9IHBhdHRlcm5fbWF0Y2hbMF0ubGVuZ3RoO1xuICB9IGVsc2Uge1xuICAgIHBhdHRlcm5fbWF0Y2ggPSBudWxsO1xuICB9XG4gIHJldHVybiBwYXR0ZXJuX21hdGNoO1xufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24oc3RhcnRpbmdfcGF0dGVybiwgdW50aWxfcGF0dGVybiwgdW50aWxfYWZ0ZXIpIHtcbiAgdmFyIHZhbCA9ICcnO1xuICB2YXIgbWF0Y2g7XG4gIGlmIChzdGFydGluZ19wYXR0ZXJuKSB7XG4gICAgbWF0Y2ggPSB0aGlzLm1hdGNoKHN0YXJ0aW5nX3BhdHRlcm4pO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgdmFsICs9IG1hdGNoWzBdO1xuICAgIH1cbiAgfVxuICBpZiAodW50aWxfcGF0dGVybiAmJiAobWF0Y2ggfHwgIXN0YXJ0aW5nX3BhdHRlcm4pKSB7XG4gICAgdmFsICs9IHRoaXMucmVhZFVudGlsKHVudGlsX3BhdHRlcm4sIHVudGlsX2FmdGVyKTtcbiAgfVxuICByZXR1cm4gdmFsO1xufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5yZWFkVW50aWwgPSBmdW5jdGlvbihwYXR0ZXJuLCB1bnRpbF9hZnRlcikge1xuICB2YXIgdmFsID0gJyc7XG4gIHZhciBtYXRjaF9pbmRleCA9IHRoaXMuX19wb3NpdGlvbjtcbiAgcGF0dGVybi5sYXN0SW5kZXggPSB0aGlzLl9fcG9zaXRpb247XG4gIHZhciBwYXR0ZXJuX21hdGNoID0gcGF0dGVybi5leGVjKHRoaXMuX19pbnB1dCk7XG4gIGlmIChwYXR0ZXJuX21hdGNoKSB7XG4gICAgbWF0Y2hfaW5kZXggPSBwYXR0ZXJuX21hdGNoLmluZGV4O1xuICAgIGlmICh1bnRpbF9hZnRlcikge1xuICAgICAgbWF0Y2hfaW5kZXggKz0gcGF0dGVybl9tYXRjaFswXS5sZW5ndGg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1hdGNoX2luZGV4ID0gdGhpcy5fX2lucHV0X2xlbmd0aDtcbiAgfVxuXG4gIHZhbCA9IHRoaXMuX19pbnB1dC5zdWJzdHJpbmcodGhpcy5fX3Bvc2l0aW9uLCBtYXRjaF9pbmRleCk7XG4gIHRoaXMuX19wb3NpdGlvbiA9IG1hdGNoX2luZGV4O1xuICByZXR1cm4gdmFsO1xufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5yZWFkVW50aWxBZnRlciA9IGZ1bmN0aW9uKHBhdHRlcm4pIHtcbiAgcmV0dXJuIHRoaXMucmVhZFVudGlsKHBhdHRlcm4sIHRydWUpO1xufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5nZXRfcmVnZXhwID0gZnVuY3Rpb24ocGF0dGVybiwgbWF0Y2hfZnJvbSkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIGZsYWdzID0gJ2cnO1xuICBpZiAobWF0Y2hfZnJvbSAmJiByZWdleHBfaGFzX3N0aWNreSkge1xuICAgIGZsYWdzID0gJ3knO1xuICB9XG4gIC8vIHN0cmluZ3MgYXJlIGNvbnZlcnRlZCB0byByZWdleHBcbiAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcInN0cmluZ1wiICYmIHBhdHRlcm4gIT09ICcnKSB7XG4gICAgLy8gcmVzdWx0ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpLCBmbGFncyk7XG4gICAgcmVzdWx0ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCBmbGFncyk7XG4gIH0gZWxzZSBpZiAocGF0dGVybikge1xuICAgIHJlc3VsdCA9IG5ldyBSZWdFeHAocGF0dGVybi5zb3VyY2UsIGZsYWdzKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuSW5wdXRTY2FubmVyLnByb3RvdHlwZS5nZXRfbGl0ZXJhbF9yZWdleHAgPSBmdW5jdGlvbihsaXRlcmFsX3N0cmluZykge1xuICByZXR1cm4gUmVnRXhwKGxpdGVyYWxfc3RyaW5nLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpKTtcbn07XG5cbi8qIGNzcyBiZWF1dGlmaWVyIGxlZ2FjeSBoZWxwZXJzICovXG5JbnB1dFNjYW5uZXIucHJvdG90eXBlLnBlZWtVbnRpbEFmdGVyID0gZnVuY3Rpb24ocGF0dGVybikge1xuICB2YXIgc3RhcnQgPSB0aGlzLl9fcG9zaXRpb247XG4gIHZhciB2YWwgPSB0aGlzLnJlYWRVbnRpbEFmdGVyKHBhdHRlcm4pO1xuICB0aGlzLl9fcG9zaXRpb24gPSBzdGFydDtcbiAgcmV0dXJuIHZhbDtcbn07XG5cbklucHV0U2Nhbm5lci5wcm90b3R5cGUubG9va0JhY2sgPSBmdW5jdGlvbih0ZXN0VmFsKSB7XG4gIHZhciBzdGFydCA9IHRoaXMuX19wb3NpdGlvbiAtIDE7XG4gIHJldHVybiBzdGFydCA+PSB0ZXN0VmFsLmxlbmd0aCAmJiB0aGlzLl9faW5wdXQuc3Vic3RyaW5nKHN0YXJ0IC0gdGVzdFZhbC5sZW5ndGgsIHN0YXJ0KVxuICAgIC50b0xvd2VyQ2FzZSgpID09PSB0ZXN0VmFsO1xufTtcblxubW9kdWxlLmV4cG9ydHMuSW5wdXRTY2FubmVyID0gSW5wdXRTY2FubmVyO1xuXG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLypcblxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG4qL1xuXG5cblxudmFyIElucHV0U2Nhbm5lciA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDgpLklucHV0U2Nhbm5lcik7XG52YXIgVG9rZW4gPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKS5Ub2tlbik7XG52YXIgVG9rZW5TdHJlYW0gPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxMCkuVG9rZW5TdHJlYW0pO1xudmFyIFdoaXRlc3BhY2VQYXR0ZXJuID0gKF9fd2VicGFja19yZXF1aXJlX18oMTEpLldoaXRlc3BhY2VQYXR0ZXJuKTtcblxudmFyIFRPS0VOID0ge1xuICBTVEFSVDogJ1RLX1NUQVJUJyxcbiAgUkFXOiAnVEtfUkFXJyxcbiAgRU9GOiAnVEtfRU9GJ1xufTtcblxudmFyIFRva2VuaXplciA9IGZ1bmN0aW9uKGlucHV0X3N0cmluZywgb3B0aW9ucykge1xuICB0aGlzLl9pbnB1dCA9IG5ldyBJbnB1dFNjYW5uZXIoaW5wdXRfc3RyaW5nKTtcbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMuX190b2tlbnMgPSBudWxsO1xuXG4gIHRoaXMuX3BhdHRlcm5zID0ge307XG4gIHRoaXMuX3BhdHRlcm5zLndoaXRlc3BhY2UgPSBuZXcgV2hpdGVzcGFjZVBhdHRlcm4odGhpcy5faW5wdXQpO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS50b2tlbml6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9pbnB1dC5yZXN0YXJ0KCk7XG4gIHRoaXMuX190b2tlbnMgPSBuZXcgVG9rZW5TdHJlYW0oKTtcblxuICB0aGlzLl9yZXNldCgpO1xuXG4gIHZhciBjdXJyZW50O1xuICB2YXIgcHJldmlvdXMgPSBuZXcgVG9rZW4oVE9LRU4uU1RBUlQsICcnKTtcbiAgdmFyIG9wZW5fdG9rZW4gPSBudWxsO1xuICB2YXIgb3Blbl9zdGFjayA9IFtdO1xuICB2YXIgY29tbWVudHMgPSBuZXcgVG9rZW5TdHJlYW0oKTtcblxuICB3aGlsZSAocHJldmlvdXMudHlwZSAhPT0gVE9LRU4uRU9GKSB7XG4gICAgY3VycmVudCA9IHRoaXMuX2dldF9uZXh0X3Rva2VuKHByZXZpb3VzLCBvcGVuX3Rva2VuKTtcbiAgICB3aGlsZSAodGhpcy5faXNfY29tbWVudChjdXJyZW50KSkge1xuICAgICAgY29tbWVudHMuYWRkKGN1cnJlbnQpO1xuICAgICAgY3VycmVudCA9IHRoaXMuX2dldF9uZXh0X3Rva2VuKHByZXZpb3VzLCBvcGVuX3Rva2VuKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbW1lbnRzLmlzRW1wdHkoKSkge1xuICAgICAgY3VycmVudC5jb21tZW50c19iZWZvcmUgPSBjb21tZW50cztcbiAgICAgIGNvbW1lbnRzID0gbmV3IFRva2VuU3RyZWFtKCk7XG4gICAgfVxuXG4gICAgY3VycmVudC5wYXJlbnQgPSBvcGVuX3Rva2VuO1xuXG4gICAgaWYgKHRoaXMuX2lzX29wZW5pbmcoY3VycmVudCkpIHtcbiAgICAgIG9wZW5fc3RhY2sucHVzaChvcGVuX3Rva2VuKTtcbiAgICAgIG9wZW5fdG9rZW4gPSBjdXJyZW50O1xuICAgIH0gZWxzZSBpZiAob3Blbl90b2tlbiAmJiB0aGlzLl9pc19jbG9zaW5nKGN1cnJlbnQsIG9wZW5fdG9rZW4pKSB7XG4gICAgICBjdXJyZW50Lm9wZW5lZCA9IG9wZW5fdG9rZW47XG4gICAgICBvcGVuX3Rva2VuLmNsb3NlZCA9IGN1cnJlbnQ7XG4gICAgICBvcGVuX3Rva2VuID0gb3Blbl9zdGFjay5wb3AoKTtcbiAgICAgIGN1cnJlbnQucGFyZW50ID0gb3Blbl90b2tlbjtcbiAgICB9XG5cbiAgICBjdXJyZW50LnByZXZpb3VzID0gcHJldmlvdXM7XG4gICAgcHJldmlvdXMubmV4dCA9IGN1cnJlbnQ7XG5cbiAgICB0aGlzLl9fdG9rZW5zLmFkZChjdXJyZW50KTtcbiAgICBwcmV2aW91cyA9IGN1cnJlbnQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fX3Rva2Vucztcbn07XG5cblxuVG9rZW5pemVyLnByb3RvdHlwZS5faXNfZmlyc3RfdG9rZW4gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX190b2tlbnMuaXNFbXB0eSgpO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbigpIHt9O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9nZXRfbmV4dF90b2tlbiA9IGZ1bmN0aW9uKHByZXZpb3VzX3Rva2VuLCBvcGVuX3Rva2VuKSB7IC8vIGpzaGludCB1bnVzZWQ6ZmFsc2VcbiAgdGhpcy5fcmVhZFdoaXRlc3BhY2UoKTtcbiAgdmFyIHJlc3VsdGluZ19zdHJpbmcgPSB0aGlzLl9pbnB1dC5yZWFkKC8uKy9nKTtcbiAgaWYgKHJlc3VsdGluZ19zdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlX3Rva2VuKFRPS0VOLlJBVywgcmVzdWx0aW5nX3N0cmluZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZV90b2tlbihUT0tFTi5FT0YsICcnKTtcbiAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5faXNfY29tbWVudCA9IGZ1bmN0aW9uKGN1cnJlbnRfdG9rZW4pIHsgLy8ganNoaW50IHVudXNlZDpmYWxzZVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9pc19vcGVuaW5nID0gZnVuY3Rpb24oY3VycmVudF90b2tlbikgeyAvLyBqc2hpbnQgdW51c2VkOmZhbHNlXG4gIHJldHVybiBmYWxzZTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX2lzX2Nsb3NpbmcgPSBmdW5jdGlvbihjdXJyZW50X3Rva2VuLCBvcGVuX3Rva2VuKSB7IC8vIGpzaGludCB1bnVzZWQ6ZmFsc2VcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fY3JlYXRlX3Rva2VuID0gZnVuY3Rpb24odHlwZSwgdGV4dCkge1xuICB2YXIgdG9rZW4gPSBuZXcgVG9rZW4odHlwZSwgdGV4dCxcbiAgICB0aGlzLl9wYXR0ZXJucy53aGl0ZXNwYWNlLm5ld2xpbmVfY291bnQsXG4gICAgdGhpcy5fcGF0dGVybnMud2hpdGVzcGFjZS53aGl0ZXNwYWNlX2JlZm9yZV90b2tlbik7XG4gIHJldHVybiB0b2tlbjtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3JlYWRXaGl0ZXNwYWNlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9wYXR0ZXJucy53aGl0ZXNwYWNlLnJlYWQoKTtcbn07XG5cblxuXG5tb2R1bGUuZXhwb3J0cy5Ub2tlbml6ZXIgPSBUb2tlbml6ZXI7XG5tb2R1bGUuZXhwb3J0cy5UT0tFTiA9IFRPS0VOO1xuXG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxuLypqc2hpbnQgbm9kZTp0cnVlICovXG4vKlxuXG4gIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gIENvcHlyaWdodCAoYykgMjAwNy0yMDE4IEVpbmFyIExpZWxtYW5pcywgTGlhbSBOZXdtYW4sIGFuZCBjb250cmlidXRvcnMuXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICBTT0ZUV0FSRS5cbiovXG5cblxuXG5mdW5jdGlvbiBUb2tlblN0cmVhbShwYXJlbnRfdG9rZW4pIHtcbiAgLy8gcHJpdmF0ZVxuICB0aGlzLl9fdG9rZW5zID0gW107XG4gIHRoaXMuX190b2tlbnNfbGVuZ3RoID0gdGhpcy5fX3Rva2Vucy5sZW5ndGg7XG4gIHRoaXMuX19wb3NpdGlvbiA9IDA7XG4gIHRoaXMuX19wYXJlbnRfdG9rZW4gPSBwYXJlbnRfdG9rZW47XG59XG5cblRva2VuU3RyZWFtLnByb3RvdHlwZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX19wb3NpdGlvbiA9IDA7XG59O1xuXG5Ub2tlblN0cmVhbS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fX3Rva2Vuc19sZW5ndGggPT09IDA7XG59O1xuXG5Ub2tlblN0cmVhbS5wcm90b3R5cGUuaGFzTmV4dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fX3Bvc2l0aW9uIDwgdGhpcy5fX3Rva2Vuc19sZW5ndGg7XG59O1xuXG5Ub2tlblN0cmVhbS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdmFsID0gbnVsbDtcbiAgaWYgKHRoaXMuaGFzTmV4dCgpKSB7XG4gICAgdmFsID0gdGhpcy5fX3Rva2Vuc1t0aGlzLl9fcG9zaXRpb25dO1xuICAgIHRoaXMuX19wb3NpdGlvbiArPSAxO1xuICB9XG4gIHJldHVybiB2YWw7XG59O1xuXG5Ub2tlblN0cmVhbS5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIHZhciB2YWwgPSBudWxsO1xuICBpbmRleCA9IGluZGV4IHx8IDA7XG4gIGluZGV4ICs9IHRoaXMuX19wb3NpdGlvbjtcbiAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLl9fdG9rZW5zX2xlbmd0aCkge1xuICAgIHZhbCA9IHRoaXMuX190b2tlbnNbaW5kZXhdO1xuICB9XG4gIHJldHVybiB2YWw7XG59O1xuXG5Ub2tlblN0cmVhbS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgaWYgKHRoaXMuX19wYXJlbnRfdG9rZW4pIHtcbiAgICB0b2tlbi5wYXJlbnQgPSB0aGlzLl9fcGFyZW50X3Rva2VuO1xuICB9XG4gIHRoaXMuX190b2tlbnMucHVzaCh0b2tlbik7XG4gIHRoaXMuX190b2tlbnNfbGVuZ3RoICs9IDE7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5Ub2tlblN0cmVhbSA9IFRva2VuU3RyZWFtO1xuXG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKmpzaGludCBub2RlOnRydWUgKi9cbi8qXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDA3LTIwMTggRWluYXIgTGllbG1hbmlzLCBMaWFtIE5ld21hbiwgYW5kIGNvbnRyaWJ1dG9ycy5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIFNPRlRXQVJFLlxuKi9cblxuXG5cbnZhciBQYXR0ZXJuID0gKF9fd2VicGFja19yZXF1aXJlX18oMTIpLlBhdHRlcm4pO1xuXG5mdW5jdGlvbiBXaGl0ZXNwYWNlUGF0dGVybihpbnB1dF9zY2FubmVyLCBwYXJlbnQpIHtcbiAgUGF0dGVybi5jYWxsKHRoaXMsIGlucHV0X3NjYW5uZXIsIHBhcmVudCk7XG4gIGlmIChwYXJlbnQpIHtcbiAgICB0aGlzLl9saW5lX3JlZ2V4cCA9IHRoaXMuX2lucHV0LmdldF9yZWdleHAocGFyZW50Ll9saW5lX3JlZ2V4cCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fX3NldF93aGl0ZXNwYWNlX3BhdHRlcm5zKCcnLCAnJyk7XG4gIH1cblxuICB0aGlzLm5ld2xpbmVfY291bnQgPSAwO1xuICB0aGlzLndoaXRlc3BhY2VfYmVmb3JlX3Rva2VuID0gJyc7XG59XG5XaGl0ZXNwYWNlUGF0dGVybi5wcm90b3R5cGUgPSBuZXcgUGF0dGVybigpO1xuXG5XaGl0ZXNwYWNlUGF0dGVybi5wcm90b3R5cGUuX19zZXRfd2hpdGVzcGFjZV9wYXR0ZXJucyA9IGZ1bmN0aW9uKHdoaXRlc3BhY2VfY2hhcnMsIG5ld2xpbmVfY2hhcnMpIHtcbiAgd2hpdGVzcGFjZV9jaGFycyArPSAnXFxcXHQgJztcbiAgbmV3bGluZV9jaGFycyArPSAnXFxcXG5cXFxccic7XG5cbiAgdGhpcy5fbWF0Y2hfcGF0dGVybiA9IHRoaXMuX2lucHV0LmdldF9yZWdleHAoXG4gICAgJ1snICsgd2hpdGVzcGFjZV9jaGFycyArIG5ld2xpbmVfY2hhcnMgKyAnXSsnLCB0cnVlKTtcbiAgdGhpcy5fbmV3bGluZV9yZWdleHAgPSB0aGlzLl9pbnB1dC5nZXRfcmVnZXhwKFxuICAgICdcXFxcclxcXFxufFsnICsgbmV3bGluZV9jaGFycyArICddJyk7XG59O1xuXG5XaGl0ZXNwYWNlUGF0dGVybi5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm5ld2xpbmVfY291bnQgPSAwO1xuICB0aGlzLndoaXRlc3BhY2VfYmVmb3JlX3Rva2VuID0gJyc7XG5cbiAgdmFyIHJlc3VsdGluZ19zdHJpbmcgPSB0aGlzLl9pbnB1dC5yZWFkKHRoaXMuX21hdGNoX3BhdHRlcm4pO1xuICBpZiAocmVzdWx0aW5nX3N0cmluZyA9PT0gJyAnKSB7XG4gICAgdGhpcy53aGl0ZXNwYWNlX2JlZm9yZV90b2tlbiA9ICcgJztcbiAgfSBlbHNlIGlmIChyZXN1bHRpbmdfc3RyaW5nKSB7XG4gICAgdmFyIG1hdGNoZXMgPSB0aGlzLl9fc3BsaXQodGhpcy5fbmV3bGluZV9yZWdleHAsIHJlc3VsdGluZ19zdHJpbmcpO1xuICAgIHRoaXMubmV3bGluZV9jb3VudCA9IG1hdGNoZXMubGVuZ3RoIC0gMTtcbiAgICB0aGlzLndoaXRlc3BhY2VfYmVmb3JlX3Rva2VuID0gbWF0Y2hlc1t0aGlzLm5ld2xpbmVfY291bnRdO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdGluZ19zdHJpbmc7XG59O1xuXG5XaGl0ZXNwYWNlUGF0dGVybi5wcm90b3R5cGUubWF0Y2hpbmcgPSBmdW5jdGlvbih3aGl0ZXNwYWNlX2NoYXJzLCBuZXdsaW5lX2NoYXJzKSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLl9jcmVhdGUoKTtcbiAgcmVzdWx0Ll9fc2V0X3doaXRlc3BhY2VfcGF0dGVybnMod2hpdGVzcGFjZV9jaGFycywgbmV3bGluZV9jaGFycyk7XG4gIHJlc3VsdC5fdXBkYXRlKCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5XaGl0ZXNwYWNlUGF0dGVybi5wcm90b3R5cGUuX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFdoaXRlc3BhY2VQYXR0ZXJuKHRoaXMuX2lucHV0LCB0aGlzKTtcbn07XG5cbldoaXRlc3BhY2VQYXR0ZXJuLnByb3RvdHlwZS5fX3NwbGl0ID0gZnVuY3Rpb24ocmVnZXhwLCBpbnB1dF9zdHJpbmcpIHtcbiAgcmVnZXhwLmxhc3RJbmRleCA9IDA7XG4gIHZhciBzdGFydF9pbmRleCA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIG5leHRfbWF0Y2ggPSByZWdleHAuZXhlYyhpbnB1dF9zdHJpbmcpO1xuICB3aGlsZSAobmV4dF9tYXRjaCkge1xuICAgIHJlc3VsdC5wdXNoKGlucHV0X3N0cmluZy5zdWJzdHJpbmcoc3RhcnRfaW5kZXgsIG5leHRfbWF0Y2guaW5kZXgpKTtcbiAgICBzdGFydF9pbmRleCA9IG5leHRfbWF0Y2guaW5kZXggKyBuZXh0X21hdGNoWzBdLmxlbmd0aDtcbiAgICBuZXh0X21hdGNoID0gcmVnZXhwLmV4ZWMoaW5wdXRfc3RyaW5nKTtcbiAgfVxuXG4gIGlmIChzdGFydF9pbmRleCA8IGlucHV0X3N0cmluZy5sZW5ndGgpIHtcbiAgICByZXN1bHQucHVzaChpbnB1dF9zdHJpbmcuc3Vic3RyaW5nKHN0YXJ0X2luZGV4LCBpbnB1dF9zdHJpbmcubGVuZ3RoKSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG5tb2R1bGUuZXhwb3J0cy5XaGl0ZXNwYWNlUGF0dGVybiA9IFdoaXRlc3BhY2VQYXR0ZXJuO1xuXG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxuLypqc2hpbnQgbm9kZTp0cnVlICovXG4vKlxuXG4gIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gIENvcHlyaWdodCAoYykgMjAwNy0yMDE4IEVpbmFyIExpZWxtYW5pcywgTGlhbSBOZXdtYW4sIGFuZCBjb250cmlidXRvcnMuXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICBTT0ZUV0FSRS5cbiovXG5cblxuXG5mdW5jdGlvbiBQYXR0ZXJuKGlucHV0X3NjYW5uZXIsIHBhcmVudCkge1xuICB0aGlzLl9pbnB1dCA9IGlucHV0X3NjYW5uZXI7XG4gIHRoaXMuX3N0YXJ0aW5nX3BhdHRlcm4gPSBudWxsO1xuICB0aGlzLl9tYXRjaF9wYXR0ZXJuID0gbnVsbDtcbiAgdGhpcy5fdW50aWxfcGF0dGVybiA9IG51bGw7XG4gIHRoaXMuX3VudGlsX2FmdGVyID0gZmFsc2U7XG5cbiAgaWYgKHBhcmVudCkge1xuICAgIHRoaXMuX3N0YXJ0aW5nX3BhdHRlcm4gPSB0aGlzLl9pbnB1dC5nZXRfcmVnZXhwKHBhcmVudC5fc3RhcnRpbmdfcGF0dGVybiwgdHJ1ZSk7XG4gICAgdGhpcy5fbWF0Y2hfcGF0dGVybiA9IHRoaXMuX2lucHV0LmdldF9yZWdleHAocGFyZW50Ll9tYXRjaF9wYXR0ZXJuLCB0cnVlKTtcbiAgICB0aGlzLl91bnRpbF9wYXR0ZXJuID0gdGhpcy5faW5wdXQuZ2V0X3JlZ2V4cChwYXJlbnQuX3VudGlsX3BhdHRlcm4pO1xuICAgIHRoaXMuX3VudGlsX2FmdGVyID0gcGFyZW50Ll91bnRpbF9hZnRlcjtcbiAgfVxufVxuXG5QYXR0ZXJuLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLl9pbnB1dC5yZWFkKHRoaXMuX3N0YXJ0aW5nX3BhdHRlcm4pO1xuICBpZiAoIXRoaXMuX3N0YXJ0aW5nX3BhdHRlcm4gfHwgcmVzdWx0KSB7XG4gICAgcmVzdWx0ICs9IHRoaXMuX2lucHV0LnJlYWQodGhpcy5fbWF0Y2hfcGF0dGVybiwgdGhpcy5fdW50aWxfcGF0dGVybiwgdGhpcy5fdW50aWxfYWZ0ZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5QYXR0ZXJuLnByb3RvdHlwZS5yZWFkX21hdGNoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLl9tYXRjaF9wYXR0ZXJuKTtcbn07XG5cblBhdHRlcm4ucHJvdG90eXBlLnVudGlsX2FmdGVyID0gZnVuY3Rpb24ocGF0dGVybikge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5fY3JlYXRlKCk7XG4gIHJlc3VsdC5fdW50aWxfYWZ0ZXIgPSB0cnVlO1xuICByZXN1bHQuX3VudGlsX3BhdHRlcm4gPSB0aGlzLl9pbnB1dC5nZXRfcmVnZXhwKHBhdHRlcm4pO1xuICByZXN1bHQuX3VwZGF0ZSgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuUGF0dGVybi5wcm90b3R5cGUudW50aWwgPSBmdW5jdGlvbihwYXR0ZXJuKSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLl9jcmVhdGUoKTtcbiAgcmVzdWx0Ll91bnRpbF9hZnRlciA9IGZhbHNlO1xuICByZXN1bHQuX3VudGlsX3BhdHRlcm4gPSB0aGlzLl9pbnB1dC5nZXRfcmVnZXhwKHBhdHRlcm4pO1xuICByZXN1bHQuX3VwZGF0ZSgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuUGF0dGVybi5wcm90b3R5cGUuc3RhcnRpbmdfd2l0aCA9IGZ1bmN0aW9uKHBhdHRlcm4pIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuX2NyZWF0ZSgpO1xuICByZXN1bHQuX3N0YXJ0aW5nX3BhdHRlcm4gPSB0aGlzLl9pbnB1dC5nZXRfcmVnZXhwKHBhdHRlcm4sIHRydWUpO1xuICByZXN1bHQuX3VwZGF0ZSgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuUGF0dGVybi5wcm90b3R5cGUubWF0Y2hpbmcgPSBmdW5jdGlvbihwYXR0ZXJuKSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLl9jcmVhdGUoKTtcbiAgcmVzdWx0Ll9tYXRjaF9wYXR0ZXJuID0gdGhpcy5faW5wdXQuZ2V0X3JlZ2V4cChwYXR0ZXJuLCB0cnVlKTtcbiAgcmVzdWx0Ll91cGRhdGUoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblBhdHRlcm4ucHJvdG90eXBlLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQYXR0ZXJuKHRoaXMuX2lucHV0LCB0aGlzKTtcbn07XG5cblBhdHRlcm4ucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbigpIHt9O1xuXG5tb2R1bGUuZXhwb3J0cy5QYXR0ZXJuID0gUGF0dGVybjtcblxuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuLypcblxuICBUaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuICBDb3B5cmlnaHQgKGMpIDIwMDctMjAxOCBFaW5hciBMaWVsbWFuaXMsIExpYW0gTmV3bWFuLCBhbmQgY29udHJpYnV0b3JzLlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgU09GVFdBUkUuXG4qL1xuXG5cblxuZnVuY3Rpb24gRGlyZWN0aXZlcyhzdGFydF9ibG9ja19wYXR0ZXJuLCBlbmRfYmxvY2tfcGF0dGVybikge1xuICBzdGFydF9ibG9ja19wYXR0ZXJuID0gdHlwZW9mIHN0YXJ0X2Jsb2NrX3BhdHRlcm4gPT09ICdzdHJpbmcnID8gc3RhcnRfYmxvY2tfcGF0dGVybiA6IHN0YXJ0X2Jsb2NrX3BhdHRlcm4uc291cmNlO1xuICBlbmRfYmxvY2tfcGF0dGVybiA9IHR5cGVvZiBlbmRfYmxvY2tfcGF0dGVybiA9PT0gJ3N0cmluZycgPyBlbmRfYmxvY2tfcGF0dGVybiA6IGVuZF9ibG9ja19wYXR0ZXJuLnNvdXJjZTtcbiAgdGhpcy5fX2RpcmVjdGl2ZXNfYmxvY2tfcGF0dGVybiA9IG5ldyBSZWdFeHAoc3RhcnRfYmxvY2tfcGF0dGVybiArIC8gYmVhdXRpZnkoIFxcdytbOl1cXHcrKSsgLy5zb3VyY2UgKyBlbmRfYmxvY2tfcGF0dGVybiwgJ2cnKTtcbiAgdGhpcy5fX2RpcmVjdGl2ZV9wYXR0ZXJuID0gLyAoXFx3KylbOl0oXFx3KykvZztcblxuICB0aGlzLl9fZGlyZWN0aXZlc19lbmRfaWdub3JlX3BhdHRlcm4gPSBuZXcgUmVnRXhwKHN0YXJ0X2Jsb2NrX3BhdHRlcm4gKyAvXFxzYmVhdXRpZnlcXHNpZ25vcmU6ZW5kXFxzLy5zb3VyY2UgKyBlbmRfYmxvY2tfcGF0dGVybiwgJ2cnKTtcbn1cblxuRGlyZWN0aXZlcy5wcm90b3R5cGUuZ2V0X2RpcmVjdGl2ZXMgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIGlmICghdGV4dC5tYXRjaCh0aGlzLl9fZGlyZWN0aXZlc19ibG9ja19wYXR0ZXJuKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGRpcmVjdGl2ZXMgPSB7fTtcbiAgdGhpcy5fX2RpcmVjdGl2ZV9wYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG4gIHZhciBkaXJlY3RpdmVfbWF0Y2ggPSB0aGlzLl9fZGlyZWN0aXZlX3BhdHRlcm4uZXhlYyh0ZXh0KTtcblxuICB3aGlsZSAoZGlyZWN0aXZlX21hdGNoKSB7XG4gICAgZGlyZWN0aXZlc1tkaXJlY3RpdmVfbWF0Y2hbMV1dID0gZGlyZWN0aXZlX21hdGNoWzJdO1xuICAgIGRpcmVjdGl2ZV9tYXRjaCA9IHRoaXMuX19kaXJlY3RpdmVfcGF0dGVybi5leGVjKHRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59O1xuXG5EaXJlY3RpdmVzLnByb3RvdHlwZS5yZWFkSWdub3JlZCA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5yZWFkVW50aWxBZnRlcih0aGlzLl9fZGlyZWN0aXZlc19lbmRfaWdub3JlX3BhdHRlcm4pO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cy5EaXJlY3RpdmVzID0gRGlyZWN0aXZlcztcblxuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLypqc2hpbnQgbm9kZTp0cnVlICovXG4vKlxuXG4gIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gIENvcHlyaWdodCAoYykgMjAwNy0yMDE4IEVpbmFyIExpZWxtYW5pcywgTGlhbSBOZXdtYW4sIGFuZCBjb250cmlidXRvcnMuXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICBTT0ZUV0FSRS5cbiovXG5cblxuXG52YXIgUGF0dGVybiA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKS5QYXR0ZXJuKTtcblxuXG52YXIgdGVtcGxhdGVfbmFtZXMgPSB7XG4gIGRqYW5nbzogZmFsc2UsXG4gIGVyYjogZmFsc2UsXG4gIGhhbmRsZWJhcnM6IGZhbHNlLFxuICBwaHA6IGZhbHNlLFxuICBzbWFydHk6IGZhbHNlXG59O1xuXG4vLyBUaGlzIGxldHMgdGVtcGxhdGVzIGFwcGVhciBhbnl3aGVyZSB3ZSB3b3VsZCBkbyBhIHJlYWRVbnRpbFxuLy8gVGhlIGNvc3QgaXMgaGlnaGVyIGJ1dCBpdCBpcyBwYXkgdG8gcGxheS5cbmZ1bmN0aW9uIFRlbXBsYXRhYmxlUGF0dGVybihpbnB1dF9zY2FubmVyLCBwYXJlbnQpIHtcbiAgUGF0dGVybi5jYWxsKHRoaXMsIGlucHV0X3NjYW5uZXIsIHBhcmVudCk7XG4gIHRoaXMuX190ZW1wbGF0ZV9wYXR0ZXJuID0gbnVsbDtcbiAgdGhpcy5fZGlzYWJsZWQgPSBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZV9uYW1lcyk7XG4gIHRoaXMuX2V4Y2x1ZGVkID0gT2JqZWN0LmFzc2lnbih7fSwgdGVtcGxhdGVfbmFtZXMpO1xuXG4gIGlmIChwYXJlbnQpIHtcbiAgICB0aGlzLl9fdGVtcGxhdGVfcGF0dGVybiA9IHRoaXMuX2lucHV0LmdldF9yZWdleHAocGFyZW50Ll9fdGVtcGxhdGVfcGF0dGVybik7XG4gICAgdGhpcy5fZXhjbHVkZWQgPSBPYmplY3QuYXNzaWduKHRoaXMuX2V4Y2x1ZGVkLCBwYXJlbnQuX2V4Y2x1ZGVkKTtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IE9iamVjdC5hc3NpZ24odGhpcy5fZGlzYWJsZWQsIHBhcmVudC5fZGlzYWJsZWQpO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gbmV3IFBhdHRlcm4oaW5wdXRfc2Nhbm5lcik7XG4gIHRoaXMuX19wYXR0ZXJucyA9IHtcbiAgICBoYW5kbGViYXJzX2NvbW1lbnQ6IHBhdHRlcm4uc3RhcnRpbmdfd2l0aCgve3shLS0vKS51bnRpbF9hZnRlcigvLS19fS8pLFxuICAgIGhhbmRsZWJhcnNfdW5lc2NhcGVkOiBwYXR0ZXJuLnN0YXJ0aW5nX3dpdGgoL3t7ey8pLnVudGlsX2FmdGVyKC99fX0vKSxcbiAgICBoYW5kbGViYXJzOiBwYXR0ZXJuLnN0YXJ0aW5nX3dpdGgoL3t7LykudW50aWxfYWZ0ZXIoL319LyksXG4gICAgcGhwOiBwYXR0ZXJuLnN0YXJ0aW5nX3dpdGgoLzxcXD8oPzpbPSBdfHBocCkvKS51bnRpbF9hZnRlcigvXFw/Pi8pLFxuICAgIGVyYjogcGF0dGVybi5zdGFydGluZ193aXRoKC88JVteJV0vKS51bnRpbF9hZnRlcigvW14lXSU+LyksXG4gICAgLy8gZGphbmdvIGNvZmxpY3RzIHdpdGggaGFuZGxlYmFycyBhIGJpdC5cbiAgICBkamFuZ286IHBhdHRlcm4uc3RhcnRpbmdfd2l0aCgveyUvKS51bnRpbF9hZnRlcigvJX0vKSxcbiAgICBkamFuZ29fdmFsdWU6IHBhdHRlcm4uc3RhcnRpbmdfd2l0aCgve3svKS51bnRpbF9hZnRlcigvfX0vKSxcbiAgICBkamFuZ29fY29tbWVudDogcGF0dGVybi5zdGFydGluZ193aXRoKC97Iy8pLnVudGlsX2FmdGVyKC8jfS8pLFxuICAgIHNtYXJ0eTogcGF0dGVybi5zdGFydGluZ193aXRoKC97KD89W159e1xcc1xcbl0pLykudW50aWxfYWZ0ZXIoL1teXFxzXFxuXX0vKSxcbiAgICBzbWFydHlfY29tbWVudDogcGF0dGVybi5zdGFydGluZ193aXRoKC97XFwqLykudW50aWxfYWZ0ZXIoL1xcKn0vKSxcbiAgICBzbWFydHlfbGl0ZXJhbDogcGF0dGVybi5zdGFydGluZ193aXRoKC97bGl0ZXJhbH0vKS51bnRpbF9hZnRlcigve1xcL2xpdGVyYWx9LylcbiAgfTtcbn1cblRlbXBsYXRhYmxlUGF0dGVybi5wcm90b3R5cGUgPSBuZXcgUGF0dGVybigpO1xuXG5UZW1wbGF0YWJsZVBhdHRlcm4ucHJvdG90eXBlLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUZW1wbGF0YWJsZVBhdHRlcm4odGhpcy5faW5wdXQsIHRoaXMpO1xufTtcblxuVGVtcGxhdGFibGVQYXR0ZXJuLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX19zZXRfdGVtcGxhdGVkX3BhdHRlcm4oKTtcbn07XG5cblRlbXBsYXRhYmxlUGF0dGVybi5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKGxhbmd1YWdlKSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLl9jcmVhdGUoKTtcbiAgcmVzdWx0Ll9kaXNhYmxlZFtsYW5ndWFnZV0gPSB0cnVlO1xuICByZXN1bHQuX3VwZGF0ZSgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuVGVtcGxhdGFibGVQYXR0ZXJuLnByb3RvdHlwZS5yZWFkX29wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLl9jcmVhdGUoKTtcbiAgZm9yICh2YXIgbGFuZ3VhZ2UgaW4gdGVtcGxhdGVfbmFtZXMpIHtcbiAgICByZXN1bHQuX2Rpc2FibGVkW2xhbmd1YWdlXSA9IG9wdGlvbnMudGVtcGxhdGluZy5pbmRleE9mKGxhbmd1YWdlKSA9PT0gLTE7XG4gIH1cbiAgcmVzdWx0Ll91cGRhdGUoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblRlbXBsYXRhYmxlUGF0dGVybi5wcm90b3R5cGUuZXhjbHVkZSA9IGZ1bmN0aW9uKGxhbmd1YWdlKSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLl9jcmVhdGUoKTtcbiAgcmVzdWx0Ll9leGNsdWRlZFtsYW5ndWFnZV0gPSB0cnVlO1xuICByZXN1bHQuX3VwZGF0ZSgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuVGVtcGxhdGFibGVQYXR0ZXJuLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoaXMuX21hdGNoX3BhdHRlcm4pIHtcbiAgICByZXN1bHQgPSB0aGlzLl9pbnB1dC5yZWFkKHRoaXMuX3N0YXJ0aW5nX3BhdHRlcm4pO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRoaXMuX2lucHV0LnJlYWQodGhpcy5fc3RhcnRpbmdfcGF0dGVybiwgdGhpcy5fX3RlbXBsYXRlX3BhdHRlcm4pO1xuICB9XG4gIHZhciBuZXh0ID0gdGhpcy5fcmVhZF90ZW1wbGF0ZSgpO1xuICB3aGlsZSAobmV4dCkge1xuICAgIGlmICh0aGlzLl9tYXRjaF9wYXR0ZXJuKSB7XG4gICAgICBuZXh0ICs9IHRoaXMuX2lucHV0LnJlYWQodGhpcy5fbWF0Y2hfcGF0dGVybik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHQgKz0gdGhpcy5faW5wdXQucmVhZFVudGlsKHRoaXMuX190ZW1wbGF0ZV9wYXR0ZXJuKTtcbiAgICB9XG4gICAgcmVzdWx0ICs9IG5leHQ7XG4gICAgbmV4dCA9IHRoaXMuX3JlYWRfdGVtcGxhdGUoKTtcbiAgfVxuXG4gIGlmICh0aGlzLl91bnRpbF9hZnRlcikge1xuICAgIHJlc3VsdCArPSB0aGlzLl9pbnB1dC5yZWFkVW50aWxBZnRlcih0aGlzLl91bnRpbF9wYXR0ZXJuKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuVGVtcGxhdGFibGVQYXR0ZXJuLnByb3RvdHlwZS5fX3NldF90ZW1wbGF0ZWRfcGF0dGVybiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXTtcblxuICBpZiAoIXRoaXMuX2Rpc2FibGVkLnBocCkge1xuICAgIGl0ZW1zLnB1c2godGhpcy5fX3BhdHRlcm5zLnBocC5fc3RhcnRpbmdfcGF0dGVybi5zb3VyY2UpO1xuICB9XG4gIGlmICghdGhpcy5fZGlzYWJsZWQuaGFuZGxlYmFycykge1xuICAgIGl0ZW1zLnB1c2godGhpcy5fX3BhdHRlcm5zLmhhbmRsZWJhcnMuX3N0YXJ0aW5nX3BhdHRlcm4uc291cmNlKTtcbiAgfVxuICBpZiAoIXRoaXMuX2Rpc2FibGVkLmVyYikge1xuICAgIGl0ZW1zLnB1c2godGhpcy5fX3BhdHRlcm5zLmVyYi5fc3RhcnRpbmdfcGF0dGVybi5zb3VyY2UpO1xuICB9XG4gIGlmICghdGhpcy5fZGlzYWJsZWQuZGphbmdvKSB7XG4gICAgaXRlbXMucHVzaCh0aGlzLl9fcGF0dGVybnMuZGphbmdvLl9zdGFydGluZ19wYXR0ZXJuLnNvdXJjZSk7XG4gICAgLy8gVGhlIHN0YXJ0aW5nIHBhdHRlcm4gZm9yIGRqYW5nbyBpcyBtb3JlIGNvbXBsZXggYmVjYXVzZSBpdCBoYXMgZGlmZmVyZW50XG4gICAgLy8gcGF0dGVybnMgZm9yIHZhbHVlLCBjb21tZW50LCBhbmQgb3RoZXIgc2VjdGlvbnNcbiAgICBpdGVtcy5wdXNoKHRoaXMuX19wYXR0ZXJucy5kamFuZ29fdmFsdWUuX3N0YXJ0aW5nX3BhdHRlcm4uc291cmNlKTtcbiAgICBpdGVtcy5wdXNoKHRoaXMuX19wYXR0ZXJucy5kamFuZ29fY29tbWVudC5fc3RhcnRpbmdfcGF0dGVybi5zb3VyY2UpO1xuICB9XG4gIGlmICghdGhpcy5fZGlzYWJsZWQuc21hcnR5KSB7XG4gICAgaXRlbXMucHVzaCh0aGlzLl9fcGF0dGVybnMuc21hcnR5Ll9zdGFydGluZ19wYXR0ZXJuLnNvdXJjZSk7XG4gIH1cblxuICBpZiAodGhpcy5fdW50aWxfcGF0dGVybikge1xuICAgIGl0ZW1zLnB1c2godGhpcy5fdW50aWxfcGF0dGVybi5zb3VyY2UpO1xuICB9XG4gIHRoaXMuX190ZW1wbGF0ZV9wYXR0ZXJuID0gdGhpcy5faW5wdXQuZ2V0X3JlZ2V4cCgnKD86JyArIGl0ZW1zLmpvaW4oJ3wnKSArICcpJyk7XG59O1xuXG5UZW1wbGF0YWJsZVBhdHRlcm4ucHJvdG90eXBlLl9yZWFkX3RlbXBsYXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXN1bHRpbmdfc3RyaW5nID0gJyc7XG4gIHZhciBjID0gdGhpcy5faW5wdXQucGVlaygpO1xuICBpZiAoYyA9PT0gJzwnKSB7XG4gICAgdmFyIHBlZWsxID0gdGhpcy5faW5wdXQucGVlaygxKTtcbiAgICAvL2lmIHdlJ3JlIGluIGEgY29tbWVudCwgZG8gc29tZXRoaW5nIHNwZWNpYWxcbiAgICAvLyBXZSB0cmVhdCBhbGwgY29tbWVudHMgYXMgbGl0ZXJhbHMsIGV2ZW4gbW9yZSB0aGFuIHByZWZvcm1hdHRlZCB0YWdzXG4gICAgLy8gd2UganVzdCBsb29rIGZvciB0aGUgYXBwcm9wcmlhdGUgY2xvc2UgdGFnXG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZC5waHAgJiYgIXRoaXMuX2V4Y2x1ZGVkLnBocCAmJiBwZWVrMSA9PT0gJz8nKSB7XG4gICAgICByZXN1bHRpbmdfc3RyaW5nID0gcmVzdWx0aW5nX3N0cmluZyB8fFxuICAgICAgICB0aGlzLl9fcGF0dGVybnMucGhwLnJlYWQoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZC5lcmIgJiYgIXRoaXMuX2V4Y2x1ZGVkLmVyYiAmJiBwZWVrMSA9PT0gJyUnKSB7XG4gICAgICByZXN1bHRpbmdfc3RyaW5nID0gcmVzdWx0aW5nX3N0cmluZyB8fFxuICAgICAgICB0aGlzLl9fcGF0dGVybnMuZXJiLnJlYWQoKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYyA9PT0gJ3snKSB7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZC5oYW5kbGViYXJzICYmICF0aGlzLl9leGNsdWRlZC5oYW5kbGViYXJzKSB7XG4gICAgICByZXN1bHRpbmdfc3RyaW5nID0gcmVzdWx0aW5nX3N0cmluZyB8fFxuICAgICAgICB0aGlzLl9fcGF0dGVybnMuaGFuZGxlYmFyc19jb21tZW50LnJlYWQoKTtcbiAgICAgIHJlc3VsdGluZ19zdHJpbmcgPSByZXN1bHRpbmdfc3RyaW5nIHx8XG4gICAgICAgIHRoaXMuX19wYXR0ZXJucy5oYW5kbGViYXJzX3VuZXNjYXBlZC5yZWFkKCk7XG4gICAgICByZXN1bHRpbmdfc3RyaW5nID0gcmVzdWx0aW5nX3N0cmluZyB8fFxuICAgICAgICB0aGlzLl9fcGF0dGVybnMuaGFuZGxlYmFycy5yZWFkKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fZGlzYWJsZWQuZGphbmdvKSB7XG4gICAgICAvLyBkamFuZ28gY29mbGljdHMgd2l0aCBoYW5kbGViYXJzIGEgYml0LlxuICAgICAgaWYgKCF0aGlzLl9leGNsdWRlZC5kamFuZ28gJiYgIXRoaXMuX2V4Y2x1ZGVkLmhhbmRsZWJhcnMpIHtcbiAgICAgICAgcmVzdWx0aW5nX3N0cmluZyA9IHJlc3VsdGluZ19zdHJpbmcgfHxcbiAgICAgICAgICB0aGlzLl9fcGF0dGVybnMuZGphbmdvX3ZhbHVlLnJlYWQoKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fZXhjbHVkZWQuZGphbmdvKSB7XG4gICAgICAgIHJlc3VsdGluZ19zdHJpbmcgPSByZXN1bHRpbmdfc3RyaW5nIHx8XG4gICAgICAgICAgdGhpcy5fX3BhdHRlcm5zLmRqYW5nb19jb21tZW50LnJlYWQoKTtcbiAgICAgICAgcmVzdWx0aW5nX3N0cmluZyA9IHJlc3VsdGluZ19zdHJpbmcgfHxcbiAgICAgICAgICB0aGlzLl9fcGF0dGVybnMuZGphbmdvLnJlYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZC5zbWFydHkpIHtcbiAgICAgIC8vIHNtYXJ0eSBjYW5ub3QgYmUgZW5hYmxlZCB3aXRoIGRqYW5nbyBvciBoYW5kbGViYXJzIGVuYWJsZWRcbiAgICAgIGlmICh0aGlzLl9kaXNhYmxlZC5kamFuZ28gJiYgdGhpcy5fZGlzYWJsZWQuaGFuZGxlYmFycykge1xuICAgICAgICByZXN1bHRpbmdfc3RyaW5nID0gcmVzdWx0aW5nX3N0cmluZyB8fFxuICAgICAgICAgIHRoaXMuX19wYXR0ZXJucy5zbWFydHlfY29tbWVudC5yZWFkKCk7XG4gICAgICAgIHJlc3VsdGluZ19zdHJpbmcgPSByZXN1bHRpbmdfc3RyaW5nIHx8XG4gICAgICAgICAgdGhpcy5fX3BhdHRlcm5zLnNtYXJ0eV9saXRlcmFsLnJlYWQoKTtcbiAgICAgICAgcmVzdWx0aW5nX3N0cmluZyA9IHJlc3VsdGluZ19zdHJpbmcgfHxcbiAgICAgICAgICB0aGlzLl9fcGF0dGVybnMuc21hcnR5LnJlYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdGluZ19zdHJpbmc7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzLlRlbXBsYXRhYmxlUGF0dGVybiA9IFRlbXBsYXRhYmxlUGF0dGVybjtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXHRdKTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdC8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIFx0bGVnYWN5X2JlYXV0aWZ5X2pzID0gX193ZWJwYWNrX2V4cG9ydHNfXztcbi8qKioqKiovIFx0XG4vKioqKioqLyB9KSgpXG47XG52YXIganNfYmVhdXRpZnkgPSBsZWdhY3lfYmVhdXRpZnlfanM7XG4vKiBGb290ZXIgKi9cbmlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFkZCBzdXBwb3J0IGZvciBBTUQgKCBodHRwczovL2dpdGh1Yi5jb20vYW1kanMvYW1kanMtYXBpL3dpa2kvQU1EI2RlZmluZWFtZC1wcm9wZXJ0eS0gKVxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7IGpzX2JlYXV0aWZ5OiBqc19iZWF1dGlmeSB9O1xuICAgIH0pO1xufSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIC8vIEFkZCBzdXBwb3J0IGZvciBDb21tb25KUy4gSnVzdCBwdXQgdGhpcyBmaWxlIHNvbWV3aGVyZSBvbiB5b3VyIHJlcXVpcmUucGF0aHNcbiAgICAvLyBhbmQgeW91IHdpbGwgYmUgYWJsZSB0byBgdmFyIGpzX2JlYXV0aWZ5ID0gcmVxdWlyZShcImJlYXV0aWZ5XCIpLmpzX2JlYXV0aWZ5YC5cbiAgICBleHBvcnRzLmpzX2JlYXV0aWZ5ID0ganNfYmVhdXRpZnk7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAvLyBJZiB3ZSdyZSBydW5uaW5nIGEgd2ViIHBhZ2UgYW5kIGRvbid0IGhhdmUgZWl0aGVyIG9mIHRoZSBhYm92ZSwgYWRkIG91ciBvbmUgZ2xvYmFsXG4gICAgd2luZG93LmpzX2JlYXV0aWZ5ID0ganNfYmVhdXRpZnk7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAvLyBJZiB3ZSBkb24ndCBldmVuIGhhdmUgd2luZG93LCB0cnkgZ2xvYmFsLlxuICAgIGdsb2JhbC5qc19iZWF1dGlmeSA9IGpzX2JlYXV0aWZ5O1xufVxuXG59KCkpO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVE9ETzogZmluZCBwcm9wZXIgdHlwZXMgZm9yIGFjZVxuZGVjbGFyZSBjb25zdCBhY2U6IGFueTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cbi8vIGltcG9ydCAnYWNlL3dlYnBhY2stcmVzb2x2ZXInO1xuXG5pbXBvcnQgeyBjc3NfYmVhdXRpZnksIGh0bWxfYmVhdXRpZnksIGpzX2JlYXV0aWZ5IH0gZnJvbSAnanMtYmVhdXRpZnknO1xuXG5jb25zdCBpbml0QWNlRWRpdG9yID0gKHdpZGdldElEOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgaWYgKHdpZGdldElEKSB7XG4gICAgY29uc3QgZWRpdG9yTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3dpZGdldElEfS1hY2UtZWRpdG9yYCk7XG4gICAgY29uc3QgaW5wdXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2lkZ2V0SUQpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdCBnZXRCZWF1dGlmaWVkVmFsdWUgPSAobW9kZT86IHN0cmluZywgdmFsdWUgPSAnJykgPT4ge1xuICAgICAgaWYgKG1vZGUgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm4gaHRtbF9iZWF1dGlmeSh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2RlID09PSAnamF2YXNjcmlwdCcpIHtcbiAgICAgICAgcmV0dXJuIGpzX2JlYXV0aWZ5KHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZGUgPT09ICdjc3MnKSB7XG4gICAgICAgIHJldHVybiBjc3NfYmVhdXRpZnkodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGlmIChlZGl0b3JOb2RlICYmIGlucHV0Tm9kZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGVkaXRvck5vZGUuZGF0YXNldC5tb2RlO1xuICAgICAgICBhY2UuY29uZmlnLnNldCgnYmFzZVBhdGgnLCAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYWNlLzEuMTEuMi8nKTtcbiAgICAgICAgLy8gYWNlLmNvbmZpZy5zZXRNb2R1bGVVcmwoJ2FjZS9tb2RlL2h0bWwnLCAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYWNlLzEuMTEuMi9tb2RlLWh0bWwuanMnKTtcblxuICAgICAgICBjb25zdCBlZGl0b3IgPSBhY2UuZWRpdChlZGl0b3JOb2RlKTtcbiAgICAgICAgZWRpdG9yLnNldFRoZW1lKCdhY2UvdGhlbWUvbW9ub2thaScpOyAvL1RPRE86IHNldCB0aGVtZSBkeW5hbWljYWxseVxuICAgICAgICBlZGl0b3Iuc2Vzc2lvbi5zZXRNb2RlKGBhY2UvbW9kZS8ke21vZGV9YCk7XG4gICAgICAgIGVkaXRvci5zZXNzaW9uLnNldFZhbHVlKGdldEJlYXV0aWZpZWRWYWx1ZShtb2RlLCBlZGl0b3Iuc2Vzc2lvbi5nZXRWYWx1ZSgpKSk7XG5cbiAgICAgICAgZWRpdG9yLmdldFNlc3Npb24oKS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlucHV0Tm9kZS52YWx1ZSA9IGdldEJlYXV0aWZpZWRWYWx1ZShtb2RlLCBlZGl0b3IuZ2V0U2Vzc2lvbigpLmdldFZhbHVlKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGVkaXRvck5vZGUuaW5uZXJIVE1MID0gYFJlbmRlcmluZyBFcnJvcjogJHsoZXJyb3IgYXMgYW55KS5tZXNzYWdlfWA7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBpbml0QWNlRWRpdG9yIGFzIGluaXQgfTtcbiJdLCJuYW1lcyI6WyJjc3NfYmVhdXRpZnkiLCJodG1sX2JlYXV0aWZ5IiwianNfYmVhdXRpZnkiLCJpbml0QWNlRWRpdG9yIiwid2lkZ2V0SUQiLCJlZGl0b3JOb2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbmNhdCIsImlucHV0Tm9kZSIsImdldEJlYXV0aWZpZWRWYWx1ZSIsIm1vZGUiLCJ2YWx1ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRhdGFzZXQiLCJhY2UiLCJjb25maWciLCJzZXQiLCJlZGl0b3IiLCJlZGl0Iiwic2V0VGhlbWUiLCJzZXNzaW9uIiwic2V0TW9kZSIsInNldFZhbHVlIiwiZ2V0VmFsdWUiLCJnZXRTZXNzaW9uIiwib24iLCJlcnJvciIsImlubmVySFRNTCIsIm1lc3NhZ2UiLCJpbml0Il0sInNvdXJjZVJvb3QiOiIifQ==