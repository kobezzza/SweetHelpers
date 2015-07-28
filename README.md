SweetHelpers
============

Collection of SweetJS macros.

## Macros
### undef

*Template*

```js
undef
```

*Result*

```js
void
```

### isUndef

Returns true if the specified value is undefined.

**Template**

```js
isUndef(foo)
```

Or

```js
foo::isUndef()
```

**Result**

```js
typeof foo === 'undefined'
```

### isNotUndef

Returns true if the specified value isn't undefined.

*Template*

```js
isNotUndef(foo)
```

Or

```js
foo::isNotUndef()
```

*Result*

```js
typeof foo !== 'undefined'
```

### isNull

Returns true if the specified value is null.

*Template*

```js
isNull(foo)
```

Or

```js
foo::isNull()
```

*Result*

```js
typeof foo !== 'undefined' && foo === null
```

### isNotNull

Returns true if the specified value isn't null.

*Template*

```js
isNotNull(foo)
```

Or

```js
foo::isNotNull()
```

*Result*

```js
typeof foo === 'undefined' || foo !== null
```

### isBoolean

Returns true if the specified value is boolean.

*Template*

```js
isBoolean(foo)
```

Or

```js
foo::isBoolean()
```

*Result*

```js
typeof foo === 'boolean'
```

### isNotBoolean

Returns true if the specified value isn't boolean.

*Template*

```js
isNotBoolean(foo)
```

Or

```js
foo::isNotBoolean()
```

*Result*

```js
typeof foo !== 'boolean'
```

### isString

Returns true if the specified value is a string.

*Template*

```js
isString(foo)
```

Or

```js
foo::isString()
```

*Result*

```js
typeof foo === 'string'
```

### isNotString

Returns true if the specified value isn't a string.

*Template*

```js
isNotString(foo)
```

Or

```js
foo::isNotString()
```

*Result*

```js
typeof foo !== 'string'
```

### isNumber

Returns true if the specified value is a number.

*Template*

```js
isNumber(foo)
```

Or

```js
foo::isNumber()
```

*Result*

```js
typeof foo === 'number'
```

### isNotNumber

Returns true if the specified value is a number.

*Template*

```js
isNotNumber(foo)
```

Or

```js
foo::isNotNumber()
```

*Result*

```js
typeof foo !== 'number'
```

### isNumeric

Returns true if the specified value is numeric.

*Template*

```js
isNumber(foo)
```

Or

```js
foo::isNumber()
```

*Result*

```js
typeof foo === 'number' && isFinite(foo)
```

### isNotNumeric

Returns true if the specified value isn't numeric.

*Template*

```js
isNotNumeric(foo)
```

Or

```js
foo::isNotNumeric()
```

*Result*

```js
typeof foo !== 'number' || !isFinite(foo)
```

### isRealNaN

Returns true if the specified value is NaN.

*Template*

```js
isRealNaN(foo)
```

Or

```js
foo::isRealNaN()
```

*Result*

```js
typeof foo === 'number' && isNaN(foo)
```

### isNotRealNaN

Returns true if the specified value isn't NaN.

*Template*

```js
isNotRealNaN(foo)
```

Or

```js
foo::isNotRealNaN()
```

*Result*

```js
typeof foo !== 'number' || !isNaN(foo)
```

### isFunction

Returns true if the specified value is a function.

*Template*

```js
isFunction(foo)
```

Or

```js
foo::isFunction()
```

*Result*

```js
typeof foo === 'function'
```

### isNotFunction

Returns true if the specified value isn't a function.

*Template*

```js
isNotFunction(foo)
```

Or

```js
foo::isNotFunction()
```

*Result*

```js
typeof foo !== 'function'
```

### isGenerator

Returns true if the specified value is a generator.

*Template*

```js
isGenerator(foo)
```

Or

```js
foo::isGenerator()
```

*Result*

```js
typeof foo === 'isFunction' && !!foo.constructor && foo.constructor.name === 'GeneratorFunction'
```

### isNotGenerator

Returns true if the specified value isn't a generator.

*Template*

```js
isNotGenerator(foo)
```

Or

```js
foo::isNotGenerator()
```

*Result*

```js
typeof foo !== 'function' || !foo.constructor || foo.constructor.name !== 'GeneratorFunction'
```

### isPlainObject

Returns true if the specified value is a plain object.

*Template*

```js
isPlainObject(foo)
```

Or

```js
foo::isPlainObject()
```

*Result*

```js
typeof foo !== 'undefined' && !!foo && !!foo.constructor && (foo.constructor === Object || foo.constructor.name === 'Object')
```

### isNotPlainObject

Returns true if the specified value isn't a plain object.

*Template*

```js
isPlainObject(foo)
```

Or

```js
foo::isPlainObject()
```

*Result*

```js
typeof foo === 'undefined' || !foo || !foo.constructor ||
(foo.constructor !== Object && foo.constructor.name !== 'Object')
```

### isArray

Returns true if the specified value is an array.

*Template*

```js
isArray(foo)
```

Or

```js
foo::isArray()
```

*Result*

```js
typeof foo !== 'undefined' && Array.isArray(foo)
```

### isNotArray

Returns true if the specified value isn't an array.

*Template*

```js
isNotArray(foo)
```

Or

```js
foo::isNotArray()
```

*Result*

```js
typeof foo === 'undefined' || !Array.isArray(foo)
```

### type

Returns [[class]] of the specified value.

*Template*

```js
type(foo)
```

Or

```js
foo::type()
```

*Result*

```js
({}).toString.call(foo)
```
