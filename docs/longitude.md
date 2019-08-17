# longitude

vl.<b>longitude</b>(<em>...values</em>)

Specify the <code>longitude</code> encoding channel.

## <code>longitude</code> Method Overview

* <em>longitude</em>.<a href="#aggregate">aggregate</a>
* <em>longitude</em>.<a href="#argmax">argmax</a>
* <em>longitude</em>.<a href="#argmin">argmin</a>
* <em>longitude</em>.<a href="#average">average</a>
* <em>longitude</em>.<a href="#bin">bin</a>
* <em>longitude</em>.<a href="#ci0">ci0</a>
* <em>longitude</em>.<a href="#ci1">ci1</a>
* <em>longitude</em>.<a href="#count">count</a>
* <em>longitude</em>.<a href="#date">date</a>
* <em>longitude</em>.<a href="#day">day</a>
* <em>longitude</em>.<a href="#distinct">distinct</a>
* <em>longitude</em>.<a href="#field">field</a>
* <em>longitude</em>.<a href="#fieldN">fieldN</a>
* <em>longitude</em>.<a href="#fieldO">fieldO</a>
* <em>longitude</em>.<a href="#fieldQ">fieldQ</a>
* <em>longitude</em>.<a href="#fieldT">fieldT</a>
* <em>longitude</em>.<a href="#hours">hours</a>
* <em>longitude</em>.<a href="#if">if</a>
* <em>longitude</em>.<a href="#max">max</a>
* <em>longitude</em>.<a href="#mean">mean</a>
* <em>longitude</em>.<a href="#median">median</a>
* <em>longitude</em>.<a href="#milliseconds">milliseconds</a>
* <em>longitude</em>.<a href="#min">min</a>
* <em>longitude</em>.<a href="#minutes">minutes</a>
* <em>longitude</em>.<a href="#missing">missing</a>
* <em>longitude</em>.<a href="#month">month</a>
* <em>longitude</em>.<a href="#q1">q1</a>
* <em>longitude</em>.<a href="#q3">q3</a>
* <em>longitude</em>.<a href="#quarter">quarter</a>
* <em>longitude</em>.<a href="#seconds">seconds</a>
* <em>longitude</em>.<a href="#stderr">stderr</a>
* <em>longitude</em>.<a href="#stdev">stdev</a>
* <em>longitude</em>.<a href="#stdevp">stdevp</a>
* <em>longitude</em>.<a href="#sum">sum</a>
* <em>longitude</em>.<a href="#timeHM">timeHM</a>
* <em>longitude</em>.<a href="#timeHMS">timeHMS</a>
* <em>longitude</em>.<a href="#timeMD">timeMD</a>
* <em>longitude</em>.<a href="#timeMDH">timeMDH</a>
* <em>longitude</em>.<a href="#timeMS">timeMS</a>
* <em>longitude</em>.<a href="#timeQM">timeQM</a>
* <em>longitude</em>.<a href="#timeSMS">timeSMS</a>
* <em>longitude</em>.<a href="#timeUnit">timeUnit</a>
* <em>longitude</em>.<a href="#timeYM">timeYM</a>
* <em>longitude</em>.<a href="#timeYMD">timeYMD</a>
* <em>longitude</em>.<a href="#timeYMDH">timeYMDH</a>
* <em>longitude</em>.<a href="#timeYMDHM">timeYMDHM</a>
* <em>longitude</em>.<a href="#timeYMDHMS">timeYMDHMS</a>
* <em>longitude</em>.<a href="#timeYQ">timeYQ</a>
* <em>longitude</em>.<a href="#timeYQM">timeYQM</a>
* <em>longitude</em>.<a href="#title">title</a>
* <em>longitude</em>.<a href="#type">type</a>
* <em>longitude</em>.<a href="#utcHM">utcHM</a>
* <em>longitude</em>.<a href="#utcHMS">utcHMS</a>
* <em>longitude</em>.<a href="#utcMD">utcMD</a>
* <em>longitude</em>.<a href="#utcMDH">utcMDH</a>
* <em>longitude</em>.<a href="#utcMS">utcMS</a>
* <em>longitude</em>.<a href="#utcQM">utcQM</a>
* <em>longitude</em>.<a href="#utcSMS">utcSMS</a>
* <em>longitude</em>.<a href="#utcYM">utcYM</a>
* <em>longitude</em>.<a href="#utcYMD">utcYMD</a>
* <em>longitude</em>.<a href="#utcYMDH">utcYMDH</a>
* <em>longitude</em>.<a href="#utcYMDHM">utcYMDHM</a>
* <em>longitude</em>.<a href="#utcYMDHMS">utcYMDHMS</a>
* <em>longitude</em>.<a href="#utcYQ">utcYQ</a>
* <em>longitude</em>.<a href="#utcYQM">utcYQM</a>
* <em>longitude</em>.<a href="#utcdate">utcdate</a>
* <em>longitude</em>.<a href="#utcday">utcday</a>
* <em>longitude</em>.<a href="#utchours">utchours</a>
* <em>longitude</em>.<a href="#utcmilliseconds">utcmilliseconds</a>
* <em>longitude</em>.<a href="#utcminutes">utcminutes</a>
* <em>longitude</em>.<a href="#utcmonth">utcmonth</a>
* <em>longitude</em>.<a href="#utcquarter">utcquarter</a>
* <em>longitude</em>.<a href="#utcseconds">utcseconds</a>
* <em>longitude</em>.<a href="#utcyear">utcyear</a>
* <em>longitude</em>.<a href="#utcyearmonth">utcyearmonth</a>
* <em>longitude</em>.<a href="#valid">valid</a>
* <em>longitude</em>.<a href="#value">value</a>
* <em>longitude</em>.<a href="#variance">variance</a>
* <em>longitude</em>.<a href="#variancep">variancep</a>
* <em>longitude</em>.<a href="#year">year</a>
* <em>longitude</em>.<a href="#yearmonth">yearmonth</a>

## <code>longitude</code> API Reference

<a name="aggregate">#</a>
<em>longitude</em>.<b>aggregate</b>(<em>value</em>)

Aggregation function for the field
(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).

__Default value:__ `undefined` (None)

__See also:__ [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html) documentation.

<a name="argmax">#</a>
<em>longitude</em>.<b>argmax</b>(<em>field</em>)

Apply the <code>argmax</code> aggregate operation prior to encoding.

<a name="argmin">#</a>
<em>longitude</em>.<b>argmin</b>(<em>field</em>)

Apply the <code>argmin</code> aggregate operation prior to encoding.

<a name="average">#</a>
<em>longitude</em>.<b>average</b>(<em>field</em>)

Apply the <code>average</code> aggregate operation prior to encoding.

<a name="bin">#</a>
<em>longitude</em>.<b>bin</b>(<em>value</em>)

A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`"binned"`).

- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.

- If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.

__Default value:__ `false`

__See also:__ [`bin`](https://vega.github.io/vega-lite/docs/bin.html) documentation.

<a name="ci0">#</a>
<em>longitude</em>.<b>ci0</b>(<em>field</em>)

Apply the <code>ci0</code> aggregate operation prior to encoding.

<a name="ci1">#</a>
<em>longitude</em>.<b>ci1</b>(<em>field</em>)

Apply the <code>ci1</code> aggregate operation prior to encoding.

<a name="count">#</a>
<em>longitude</em>.<b>count</b>(<em></em>)

Apply the <code>count</code> aggregate operation prior to encoding.

<a name="date">#</a>
<em>longitude</em>.<b>date</b>(<em>field</em>)

Apply the <code>date</code> timeUnit operation prior to encoding.

<a name="day">#</a>
<em>longitude</em>.<b>day</b>(<em>field</em>)

Apply the <code>day</code> timeUnit operation prior to encoding.

<a name="distinct">#</a>
<em>longitude</em>.<b>distinct</b>(<em>field</em>)

Apply the <code>distinct</code> aggregate operation prior to encoding.

<a name="field">#</a>
<em>longitude</em>.<b>field</b>(<em>value</em>)

__Required.__ A string defining the name of the field from which to pull a data value
or an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.

__See also:__ [`field`](https://vega.github.io/vega-lite/docs/field.html) documentation.

__Notes:__
1)  Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
If field names contain dots or brackets but are not nested, you can use `\\` to escape dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
See more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).
2) `field` is not required if `aggregate` is `count`.

<a name="fieldN">#</a>
<em>longitude</em>.<b>fieldN</b>(<em>field</em>)

Encode the field as a nominal data type.

<a name="fieldO">#</a>
<em>longitude</em>.<b>fieldO</b>(<em>field</em>)

Encode the field as an ordinal data type.

<a name="fieldQ">#</a>
<em>longitude</em>.<b>fieldQ</b>(<em>field</em>)

Encode the field as a quantitative data type.

<a name="fieldT">#</a>
<em>longitude</em>.<b>fieldT</b>(<em>field</em>)

Encode the field as a temporal data type.

<a name="hours">#</a>
<em>longitude</em>.<b>hours</b>(<em>field</em>)

Apply the <code>hours</code> timeUnit operation prior to encoding.

<a name="if">#</a>
<em>longitude</em>.<b>if</b>(<em>...condition</em>)

Perform a conditional encoding. If the provided condition (first argument) evaluates to true, apply the provided encoding (second argument).

<a name="max">#</a>
<em>longitude</em>.<b>max</b>(<em>field</em>)

Apply the <code>max</code> aggregate operation prior to encoding.

<a name="mean">#</a>
<em>longitude</em>.<b>mean</b>(<em>field</em>)

Apply the <code>mean</code> aggregate operation prior to encoding.

<a name="median">#</a>
<em>longitude</em>.<b>median</b>(<em>field</em>)

Apply the <code>median</code> aggregate operation prior to encoding.

<a name="milliseconds">#</a>
<em>longitude</em>.<b>milliseconds</b>(<em>field</em>)

Apply the <code>milliseconds</code> timeUnit operation prior to encoding.

<a name="min">#</a>
<em>longitude</em>.<b>min</b>(<em>field</em>)

Apply the <code>min</code> aggregate operation prior to encoding.

<a name="minutes">#</a>
<em>longitude</em>.<b>minutes</b>(<em>field</em>)

Apply the <code>minutes</code> timeUnit operation prior to encoding.

<a name="missing">#</a>
<em>longitude</em>.<b>missing</b>(<em>field</em>)

Apply the <code>missing</code> aggregate operation prior to encoding.

<a name="month">#</a>
<em>longitude</em>.<b>month</b>(<em>field</em>)

Apply the <code>month</code> timeUnit operation prior to encoding.

<a name="q1">#</a>
<em>longitude</em>.<b>q1</b>(<em>field</em>)

Apply the <code>q1</code> aggregate operation prior to encoding.

<a name="q3">#</a>
<em>longitude</em>.<b>q3</b>(<em>field</em>)

Apply the <code>q3</code> aggregate operation prior to encoding.

<a name="quarter">#</a>
<em>longitude</em>.<b>quarter</b>(<em>field</em>)

Apply the <code>quarter</code> timeUnit operation prior to encoding.

<a name="seconds">#</a>
<em>longitude</em>.<b>seconds</b>(<em>field</em>)

Apply the <code>seconds</code> timeUnit operation prior to encoding.

<a name="stderr">#</a>
<em>longitude</em>.<b>stderr</b>(<em>field</em>)

Apply the <code>stderr</code> aggregate operation prior to encoding.

<a name="stdev">#</a>
<em>longitude</em>.<b>stdev</b>(<em>field</em>)

Apply the <code>stdev</code> aggregate operation prior to encoding.

<a name="stdevp">#</a>
<em>longitude</em>.<b>stdevp</b>(<em>field</em>)

Apply the <code>stdevp</code> aggregate operation prior to encoding.

<a name="sum">#</a>
<em>longitude</em>.<b>sum</b>(<em>field</em>)

Apply the <code>sum</code> aggregate operation prior to encoding.

<a name="timeHM">#</a>
<em>longitude</em>.<b>timeHM</b>(<em>field</em>)

Apply the <code>hoursminutes</code> timeUnit operation prior to encoding.

<a name="timeHMS">#</a>
<em>longitude</em>.<b>timeHMS</b>(<em>field</em>)

Apply the <code>hoursminutesseconds</code> timeUnit operation prior to encoding.

<a name="timeMD">#</a>
<em>longitude</em>.<b>timeMD</b>(<em>field</em>)

Apply the <code>monthdate</code> timeUnit operation prior to encoding.

<a name="timeMDH">#</a>
<em>longitude</em>.<b>timeMDH</b>(<em>field</em>)

Apply the <code>monthdatehours</code> timeUnit operation prior to encoding.

<a name="timeMS">#</a>
<em>longitude</em>.<b>timeMS</b>(<em>field</em>)

Apply the <code>minutesseconds</code> timeUnit operation prior to encoding.

<a name="timeQM">#</a>
<em>longitude</em>.<b>timeQM</b>(<em>field</em>)

Apply the <code>quartermonth</code> timeUnit operation prior to encoding.

<a name="timeSMS">#</a>
<em>longitude</em>.<b>timeSMS</b>(<em>field</em>)

Apply the <code>secondsmilliseconds</code> timeUnit operation prior to encoding.

<a name="timeUnit">#</a>
<em>longitude</em>.<b>timeUnit</b>(<em>value</em>)

Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
or [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).

__Default value:__ `undefined` (None)

__See also:__ [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html) documentation.

<a name="timeYM">#</a>
<em>longitude</em>.<b>timeYM</b>(<em>field</em>)

Apply the <code>yearmonth</code> timeUnit operation prior to encoding.

<a name="timeYMD">#</a>
<em>longitude</em>.<b>timeYMD</b>(<em>field</em>)

Apply the <code>yearmonthdate</code> timeUnit operation prior to encoding.

<a name="timeYMDH">#</a>
<em>longitude</em>.<b>timeYMDH</b>(<em>field</em>)

Apply the <code>yearmonthdatehours</code> timeUnit operation prior to encoding.

<a name="timeYMDHM">#</a>
<em>longitude</em>.<b>timeYMDHM</b>(<em>field</em>)

Apply the <code>yearmonthdatehoursminutes</code> timeUnit operation prior to encoding.

<a name="timeYMDHMS">#</a>
<em>longitude</em>.<b>timeYMDHMS</b>(<em>field</em>)

Apply the <code>yearmonthdatehoursminutesseconds</code> timeUnit operation prior to encoding.

<a name="timeYQ">#</a>
<em>longitude</em>.<b>timeYQ</b>(<em>field</em>)

Apply the <code>yearquarter</code> timeUnit operation prior to encoding.

<a name="timeYQM">#</a>
<em>longitude</em>.<b>timeYQM</b>(<em>field</em>)

Apply the <code>yearquartermonth</code> timeUnit operation prior to encoding.

<a name="title">#</a>
<em>longitude</em>.<b>title</b>(<em>value</em>)

A title for the field. If `null`, the title will be removed.

__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply the field name.

__Notes__:

1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).

2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.

<a name="type">#</a>
<em>longitude</em>.<b>type</b>(<em>value</em>)

The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or `"nominal"`).
It can also be a `"geojson"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).


__Note:__

- Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g., `1552199579097`).
- Data `type` describes the semantics of the data rather than the primitive data types (`number`, `string`, etc.). The same primitive data type can have different types of measurement. For example, numeric data can represent quantitative, ordinal, or nominal data.
- When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type` property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"` (for using an ordinal bin scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
- When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"` (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
- When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html), the `type` property refers to the post-aggregation data type. For example, we can calculate count `distinct` of a categorical field `"cat"` using `{"aggregate": "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate output is `"quantitative"`.
- Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`).

__See also:__ [`type`](https://vega.github.io/vega-lite/docs/type.html) documentation.

<a name="utcHM">#</a>
<em>longitude</em>.<b>utcHM</b>(<em>field</em>)

Apply the <code>utchoursminutes</code> timeUnit operation prior to encoding.

<a name="utcHMS">#</a>
<em>longitude</em>.<b>utcHMS</b>(<em>field</em>)

Apply the <code>utchoursminutesseconds</code> timeUnit operation prior to encoding.

<a name="utcMD">#</a>
<em>longitude</em>.<b>utcMD</b>(<em>field</em>)

Apply the <code>utcmonthdate</code> timeUnit operation prior to encoding.

<a name="utcMDH">#</a>
<em>longitude</em>.<b>utcMDH</b>(<em>field</em>)

Apply the <code>utcmonthdatehours</code> timeUnit operation prior to encoding.

<a name="utcMS">#</a>
<em>longitude</em>.<b>utcMS</b>(<em>field</em>)

Apply the <code>utcminutesseconds</code> timeUnit operation prior to encoding.

<a name="utcQM">#</a>
<em>longitude</em>.<b>utcQM</b>(<em>field</em>)

Apply the <code>utcquartermonth</code> timeUnit operation prior to encoding.

<a name="utcSMS">#</a>
<em>longitude</em>.<b>utcSMS</b>(<em>field</em>)

Apply the <code>utcsecondsmilliseconds</code> timeUnit operation prior to encoding.

<a name="utcYM">#</a>
<em>longitude</em>.<b>utcYM</b>(<em>field</em>)

Apply the <code>utcyearmonth</code> timeUnit operation prior to encoding.

<a name="utcYMD">#</a>
<em>longitude</em>.<b>utcYMD</b>(<em>field</em>)

Apply the <code>utcyearmonthdate</code> timeUnit operation prior to encoding.

<a name="utcYMDH">#</a>
<em>longitude</em>.<b>utcYMDH</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehours</code> timeUnit operation prior to encoding.

<a name="utcYMDHM">#</a>
<em>longitude</em>.<b>utcYMDHM</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehoursminutes</code> timeUnit operation prior to encoding.

<a name="utcYMDHMS">#</a>
<em>longitude</em>.<b>utcYMDHMS</b>(<em>field</em>)

Apply the <code>utcyearmonthdatehoursminutesseconds</code> timeUnit operation prior to encoding.

<a name="utcYQ">#</a>
<em>longitude</em>.<b>utcYQ</b>(<em>field</em>)

Apply the <code>utcyearquarter</code> timeUnit operation prior to encoding.

<a name="utcYQM">#</a>
<em>longitude</em>.<b>utcYQM</b>(<em>field</em>)

Apply the <code>utcyearquartermonth</code> timeUnit operation prior to encoding.

<a name="utcdate">#</a>
<em>longitude</em>.<b>utcdate</b>(<em>field</em>)

Apply the <code>utcdate</code> timeUnit operation prior to encoding.

<a name="utcday">#</a>
<em>longitude</em>.<b>utcday</b>(<em>field</em>)

Apply the <code>utcday</code> timeUnit operation prior to encoding.

<a name="utchours">#</a>
<em>longitude</em>.<b>utchours</b>(<em>field</em>)

Apply the <code>utchours</code> timeUnit operation prior to encoding.

<a name="utcmilliseconds">#</a>
<em>longitude</em>.<b>utcmilliseconds</b>(<em>field</em>)

Apply the <code>utcmilliseconds</code> timeUnit operation prior to encoding.

<a name="utcminutes">#</a>
<em>longitude</em>.<b>utcminutes</b>(<em>field</em>)

Apply the <code>utcminutes</code> timeUnit operation prior to encoding.

<a name="utcmonth">#</a>
<em>longitude</em>.<b>utcmonth</b>(<em>field</em>)

Apply the <code>utcmonth</code> timeUnit operation prior to encoding.

<a name="utcquarter">#</a>
<em>longitude</em>.<b>utcquarter</b>(<em>field</em>)

Apply the <code>utcquarter</code> timeUnit operation prior to encoding.

<a name="utcseconds">#</a>
<em>longitude</em>.<b>utcseconds</b>(<em>field</em>)

Apply the <code>utcseconds</code> timeUnit operation prior to encoding.

<a name="utcyear">#</a>
<em>longitude</em>.<b>utcyear</b>(<em>field</em>)

Apply the <code>utcyear</code> timeUnit operation prior to encoding.

<a name="utcyearmonth">#</a>
<em>longitude</em>.<b>utcyearmonth</b>(<em>field</em>)

Apply the <code>utcyearmonth</code> timeUnit operation prior to encoding.

<a name="valid">#</a>
<em>longitude</em>.<b>valid</b>(<em>field</em>)

Apply the <code>valid</code> aggregate operation prior to encoding.

<a name="value">#</a>
<em>longitude</em>.<b>value</b>(<em>value</em>)

A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between `0` to `1` for opacity).

<a name="variance">#</a>
<em>longitude</em>.<b>variance</b>(<em>field</em>)

Apply the <code>variance</code> aggregate operation prior to encoding.

<a name="variancep">#</a>
<em>longitude</em>.<b>variancep</b>(<em>field</em>)

Apply the <code>variancep</code> aggregate operation prior to encoding.

<a name="year">#</a>
<em>longitude</em>.<b>year</b>(<em>field</em>)

Apply the <code>year</code> timeUnit operation prior to encoding.

<a name="yearmonth">#</a>
<em>longitude</em>.<b>yearmonth</b>(<em>field</em>)

Apply the <code>yearmonth</code> timeUnit operation prior to encoding.
