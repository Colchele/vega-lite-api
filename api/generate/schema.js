export function lookup(schema, ref) {
  if (!ref) return null;

  const path = ref.split('/');
  for (let i=1; i<path.length; ++i) {
    schema = schema[path[i]];
    if (schema == null) break;
  }
  return schema;
}

export function search(schema, type, check, get, gather, base) {
  let t;
  return !type
      ? base()
    : type.$ref
      ? search(schema, lookup(schema, type.$ref), check, get, gather, base)
    : check(type)
      ? get(type)
    : (t = type.anyOf || type.allOf || type.oneOf)
      ? gather(t.map(_ => search(schema, _, check, get, gather, base)))
    : base();
}

export function props(schema, type) {
  return search(schema, type,
    t => t.type === 'object',
    t => t.properties,
    a => Object.assign({}, ...a),
    () => null
  );
}

export function enums(schema, type) {
  return search(schema, type,
    t => t.enum,
    t => t.enum,
    a => [].concat(...a).sort(),
    () => []
  );
}

export function types(schema, type) {
  return search(schema, type,
    t => t.type === 'object' && (t = t.properties) && (t = t.type),
    t => t.properties.type.enum || [],
    a => [].concat(...a).sort(),
    () => []
  );
}

export function isArrayType(schema) {
  if (schema.type === 'array') {
    return true;
  } else if (schema = (schema.anyOf || schema.oneOf)) {
    // if there are two matching types (one scalar, one array)
    let index, types = schema.map(s => s.type);
    return types.length === 2
      && (index = types.indexOf('array')) >= 0
      && types[1-index] === (schema[index].items || {}).type;
  } else {
    return false;
  }
}
