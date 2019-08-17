# tsv

vl.<b>tsv</b>(<em>...values</em>)

Define a data source for <code>tsv</code> format data.

## <code>tsv</code> Method Overview

* <em>tsv</em>.<a href="#name">name</a>
* <em>tsv</em>.<a href="#parse">parse</a>
* <em>tsv</em>.<a href="#type">type</a>
* <em>tsv</em>.<a href="#url">url</a>
* <em>tsv</em>.<a href="#values">values</a>

## <code>tsv</code> API Reference

<a name="name">#</a>
<em>tsv</em>.<b>name</b>(<em>name</em>)

A name for this data source. Use this name to update the data via the runtime API.

<a name="parse">#</a>
<em>tsv</em>.<b>parse</b>(<em>value</em>)

If set to `null`, disable type inference based on the spec and only use type inference based on the data.
Alternatively, a parsing directive object can be provided for explicit data types. Each property of the object corresponds to a field name, and the value to the desired data type (one of `"number"`, `"boolean"`, `"date"`, or null (do not parse the field)).
For example, `"parse": {"modified_on": "date"}` parses the `modified_on` field in each input record a Date value.

For `"date"`, we parse data based using Javascript's [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
For Specific date formats can be provided (e.g., `{foo: "date:'%m%d%Y'"}`), using the [d3-time-format syntax](https://github.com/d3/d3-time-format#locale_format). UTC date format parsing is supported similarly (e.g., `{foo: "utc:'%m%d%Y'"}`). See more about [UTC time](https://vega.github.io/vega-lite/docs/timeunit.html#utc)

<a name="type">#</a>
<em>tsv</em>.<b>type</b>(<em>value</em>)

Type of input data: `"json"`, `"csv"`, `"tsv"`, `"dsv"`.

__Default value:__  The default format type is determined by the extension of the file URL.
If no extension is detected, `"json"` will be used by default.

<a name="url">#</a>
<em>tsv</em>.<b>url</b>(<em>url</em>)

A URL from which to load the data.

<a name="values">#</a>
<em>tsv</em>.<b>values</b>(<em>values</em>)

Provide loaded data values directly.
