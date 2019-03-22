import {
  transform, aggregateOp, timeUnitOp, windowOp,
  groupby, channel, mark, data, spec
} from './types';

export const api = {
  // tranforms
  aggregate:       transform('AggregateTransform', '...aggregate'),
  bin:             transform('BinTransform', 'field', ['bin', true]),
  calculate:       transform('CalculateTransform', 'calculate'),
  filter:          transform('FilterTransform', 'filter'),
  flatten:         transform('FlattenTransform', '...flatten'),
  fold:            transform('FoldTransform', '...fold'),
  impute:          transform('ImputeTransform', 'impute', 'key'),
  join:            transform('JoinAggregateTransform', '...joinaggregate'),
  joinaggregate:   transform('JoinAggregateTransform', '...joinaggregate'),
  sample:          transform('SampleTransform', 'sample'),
  stack:           transform('StackTransform', 'stack'),
  timeUnit:        transform('TimeUnitTransform', 'timeUnit', 'field'),
  window:          transform('WindowTransform', '...window'),
  groupby:         groupby(),

  // aggregate operations
  count:           aggregateOp('count'),
  valid:           aggregateOp('valid', 'field'),
  missing:         aggregateOp('missing', 'field'),
  distinct:        aggregateOp('distinct', 'field'),
  sum:             aggregateOp('sum', 'field'),
  mean:            aggregateOp('mean', 'field'),
  average:         aggregateOp('average', 'field'),
  variance:        aggregateOp('variance', 'field'),
  variancep:       aggregateOp('variancep', 'field'),
  stdev:           aggregateOp('stdev', 'field'),
  stdevp:          aggregateOp('stdevp', 'field'),
  stderr:          aggregateOp('stderr', 'field'),
  median:          aggregateOp('median', 'field'),
  q1:              aggregateOp('q1', 'field'),
  q3:              aggregateOp('q3', 'field'),
  ci0:             aggregateOp('ci0', 'field'),
  ci1:             aggregateOp('ci1', 'field'),
  min:             aggregateOp('min', 'field'),
  max:             aggregateOp('max', 'field'),
  argmin:          aggregateOp('argmin', 'field'),
  argmax:          aggregateOp('argmax', 'field'),

  // window operations
  row_number:      windowOp('row_number'),
  rank:            windowOp('rank'),
  dense_rank:      windowOp('dense_rank'),
  percent_rank:    windowOp('percent_rank'),
  cume_dist:       windowOp('cume_dist'),
  ntile:           windowOp('ntile', 'param'),
  lag:             windowOp('lag', 'field', 'param'),
  lead:            windowOp('lead', 'field', 'param'),
  first_value:     windowOp('first_value', 'field'),
  last_value:      windowOp('last_Value', 'field'),
  nth_value:       windowOp('nth_value', 'field', 'param'),

  // local timeunit operations
  year:            timeUnitOp('year'),
  quarter:         timeUnitOp('quarter'),
  month:           timeUnitOp('month'),
  day:             timeUnitOp('day'),
  date:            timeUnitOp('date'),
  hours:           timeUnitOp('hours'),
  minutes:         timeUnitOp('minutes'),
  seconds:         timeUnitOp('seconds'),
  milliseconds:    timeUnitOp('milliseconds'),
  timeYQ:          timeUnitOp('yearquarter'),
  timeYQM:         timeUnitOp('yearquartermonth'),
  timeYM:          timeUnitOp('yearmonth'),
  timeYMD:         timeUnitOp('yearmonthdate'),
  timeYMDH:        timeUnitOp('yearmonthdatehours'),
  timeYMDHM:       timeUnitOp('yearmonthdatehoursminutes'),
  timeYMDHMS:      timeUnitOp('yearmonthdatehoursminutesseconds'),
  timeQM:          timeUnitOp('quartermonth'),
  timeMD:          timeUnitOp('monthdate'),
  timeMDH:         timeUnitOp('monthdatehours'),
  timeHM:          timeUnitOp('hoursminutes'),
  timeHMS:         timeUnitOp('hoursminutesseconds'),
  timeMS:          timeUnitOp('minutesseconds'),
  timeSMS:         timeUnitOp('secondsmilliseconds'),

  // utc timeunit operations
  utcyear:         timeUnitOp('utcyear'),
  utcquarter:      timeUnitOp('utcquarter'),
  utcmonth:        timeUnitOp('utcmonth'),
  utcday:          timeUnitOp('utcday'),
  utcdate:         timeUnitOp('utcdate'),
  utchours:        timeUnitOp('utchours'),
  utcminutes:      timeUnitOp('utcminutes'),
  utcseconds:      timeUnitOp('utcseconds'),
  utcmilliseconds: timeUnitOp('utcmilliseconds'),
  utcYQ:           timeUnitOp('utcyearquarter'),
  utcYQM:          timeUnitOp('utcyearquartermonth'),
  utcYM:           timeUnitOp('utcyearmonth'),
  utcYMD:          timeUnitOp('utcyearmonthdate'),
  utcYMDH:         timeUnitOp('utcyearmonthdatehours'),
  utcYMDHM:        timeUnitOp('utcyearmonthdatehoursminutes'),
  utcYMDHMS:       timeUnitOp('utcyearmonthdatehoursminutesseconds'),
  utcQM:           timeUnitOp('utcquartermonth'),
  utcMD:           timeUnitOp('utcmonthdate'),
  utcMDH:          timeUnitOp('utcmonthdatehours'),
  utcHM:           timeUnitOp('utchoursminutes'),
  utcHMS:          timeUnitOp('utchoursminutesseconds'),
  utcMS:           timeUnitOp('utcminutesseconds'),
  utcSMS:          timeUnitOp('utcsecondsmillisecond'),

  // mark types
  mark:            mark(),
  markArea:        mark('area'),
  markBar:         mark('bar'),
  markLine:        mark('line'),
  markTrail:       mark('trail'),
  markPoint:       mark('point'),
  markText:        mark('text'),
  markTick:        mark('tick'),
  markRect:        mark('rect'),
  markRule:        mark('rule'),
  markCircle:      mark('circle'),
  markSquare:      mark('square'),
  markGeoshape:    mark('geoshape'),
  markBoxplot:     mark('boxplot'),
  markErrorbar:    mark('errorbar'),
  markErrorband:   mark('errorband'),

  // encoding channels
  color:           channel('color'),
  column:          channel('column'),
  detail:          channel('detail'),
  fill:            channel('fill'),
  fillOpacity:     channel('fillOpacity'),
  href:            channel('href'),
  key:             channel('key'),
  latitude:        channel('latitude'),
  latitude2:       channel('latitude2'),
  longitude:       channel('longitude'),
  longitude2:      channel('longitude2'),
  opacity:         channel('opacity'),
  order:           channel('order'),
  row:             channel('row'),
  shape:           channel('shape'),
  size:            channel('size'),
  stroke:          channel('stroke'),
  strokeOpacity:   channel('strokeOpacity'),
  strokeWidth:     channel('strokeWidth'),
  text:            channel('text'),
  tooltip:         channel('tooltip'),
  x:               channel('x'),
  x2:              channel('x2'),
  xError:          channel('xError'),
  xError2:         channel('xError2'),
  y:               channel('y'),
  y2:              channel('y2'),
  yError:          channel('yError'),
  yError2:         channel('yError2'),

  // top-level data
  data:            data(),

  // top-level specifications
  layer:           spec('TopLevelLayerSpec', '...layer'),
  hconcat:         spec('TopLevelHConcatSpec', '...hconcat'),
  vconcat:         spec('TopLevelVConcatSpec', '...vconcat'),
  facet:           spec('TopLevelFacetSpec', 'facet', 'spec'),
  repeat:          spec('TopLevelRepeatSpec', 'repeat', 'spec'),
  chart:           spec('TopLevelUnitSpec', 'data')
};