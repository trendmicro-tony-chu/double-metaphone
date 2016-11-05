'use strict';

/* Dependencies. */
var doubleMetaphone = require('double-metaphone');

/* Nodes. */
var $input = document.getElementsByTagName('input')[0];
var $output = document.getElementsByTagName('output')[0];

/* Listen. */
$input.addEventListener('input', oninputchange);

/* Initial answer. */
oninputchange();

/* Calculate. */
function oninputchange() {
  $output.textContent = JSON.stringify(doubleMetaphone($input.value))
}
