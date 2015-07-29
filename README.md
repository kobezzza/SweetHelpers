SweetHelpers
============

Collection of SweetJS macros.

## Macros
### undef

**Template**

```js
undef
```

**Result**

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

**Template**

```js
isNotUndef(foo)
```

Or

```js
foo::isNotUndef()
```

**Result**

```js
typeof foo !== 'undefined'
```

### isSet

Returns true if the specified value is null or undefined.

**Template**

```js
isSet(foo)
```

Or

```js
foo::isSet()
```

**Result**

```js
typeof foo !== 'undefined' && foo !== null
```

### isNotSet

Returns true if the specified value isn't null or undefined.

**Template**

```js
isNotSet(foo)
```

Or

```js
foo::isNotSet()
```

**Result**

```js
typeof foo === 'undefined' || foo === null
```

### isNull

Returns true if the specified value is null.

**Template**

```js
isNull(foo)
```

Or

```js
foo::isNull()
```

**Result**

```js
typeof foo !== 'undefined' && foo === null
```

### isNotNull

Returns true if the specified value isn't null.

**Template**

```js
isNotNull(foo)
```

Or

```js
foo::isNotNull()
```

**Result**

```js
typeof foo === 'undefined' || foo !== null
```

### isBoolean

Returns true if the specified value is boolean.

**Template**

```js
isBoolean(foo)
```

Or

```js
foo::isBoolean()
```

**Result**

```js
typeof foo === 'boolean'
```

### isNotBoolean

Returns true if the specified value isn't boolean.

**Template**

```js
isNotBoolean(foo)
```

Or

```js
foo::isNotBoolean()
```

**Result**

```js
typeof foo !== 'boolean'
```

### isString

Returns true if the specified value is a string.

**Template**

```js
isString(foo)
```

Or

```js
foo::isString()
```

**Result**

```js
typeof foo === 'string'
```

### isNotString

Returns true if the specified value isn't a string.

**Template**

```js
isNotString(foo)
```

Or

```js
foo::isNotString()
```

**Result**

```js
typeof foo !== 'string'
```

### isNumber

Returns true if the specified value is a number.

**Template**

```js
isNumber(foo)
```

Or

```js
foo::isNumber()
```

**Result**

```js
typeof foo === 'number'
```

### isNotNumber

Returns true if the specified value is a number.

**Template**

```js
isNotNumber(foo)
```

Or

```js
foo::isNotNumber()
```

**Result**

```js
typeof foo !== 'number'
```

### isNumeric

Returns true if the specified value is numeric.

**Template**

```js
isNumber(foo)
```

Or

```js
foo::isNumber()
```

**Result**

```js
typeof foo === 'number' && isFinite(foo)
```

### isNotNumeric

Returns true if the specified value isn't numeric.

**Template**

```js
isNotNumeric(foo)
```

Or

```js
foo::isNotNumeric()
```

**Result**

```js
typeof foo !== 'number' || !isFinite(foo)
```

### isRealNaN

Returns true if the specified value is NaN.

**Template**

```js
isRealNaN(foo)
```

Or

```js
foo::isRealNaN()
```

**Result**

```js
typeof foo === 'number' && isNaN(foo)
```

### isNotRealNaN

Returns true if the specified value isn't NaN.

**Template**

```js
isNotRealNaN(foo)
```

Or

```js
foo::isNotRealNaN()
```

**Result**

```js
typeof foo !== 'number' || !isNaN(foo)
```

### isFunction

Returns true if the specified value is a function.

**Template**

```js
isFunction(foo)
```

Or

```js
foo::isFunction()
```

**Result**

```js
typeof foo === 'function'
```

### isNotFunction

Returns true if the specified value isn't a function.

**Template**

```js
isNotFunction(foo)
```

Or

```js
foo::isNotFunction()
```

**Result**

```js
typeof foo !== 'function'
```

### type

Returns [[class]] of the specified value.

**Template**

```js
type(foo)
```

Or

```js
foo::type()
```

**Result**

```js
({}).toString.call(foo)
```

### iterator

Returns a link for an iterator of the specified value.

**Template**

```js
iterator(foo)
```

Or

```js
foo::iterator()
```

**Result**

```js
typeof foo !== 'undefined' && foo !== null ?
  (typeof foo['@@iterator'] === 'function' ?
    foo['@@iterator'] : typeof Symbol === 'function' ?
      foo[Symbol['iterator']] : void 0) : void 0
```

### number

Converts the specified value to a number.

**Template**

```js
number(foo)
```

Or

```js
foo::number()
```

**Result**

```js
(+foo)
```

### string

Converts the specified value to a string.

**Template**

```js
string(foo)
```

Or

```js
foo::string()
```

**Result**

```js
(foo + '')
```

### boolean

Converts the specified value to boolean.

**Template**

```js
boolean(foo)
```

Or

```js
foo::boolean()
```

**Result**

```js
!!foo
```

### use

Returns an object for working with macro functions.

#### get

Gets the first non false property from an object.

**Template**

```js
use(foo).get('foo', 'bar')
```

Or

```js
foo::get('foo', 'bar')
```

**Result**

```js
foo['foo'] || foo['bar']
```

#### in

Returns true if all specified properties are exists in an object.

**Template**

```js
use(foo).in('foo', 'bar')
```

Or

```js
foo::in('foo', 'bar')
```

**Result**

```js
'foo' in foo && 'bar' in foo
```

#### not

Returns true if all specified properties aren't exists in an object.

**Template**

```js
use(foo).not('foo', 'bar')
```

Or

```js
foo::not('foo', 'bar')
```

**Result**

```js
'foo' in foo === false && 'bar' in foo === false
```

#### some

Returns true if any of specified properties are exists in an object.

**Template**

```js
use(foo).or('foo', 'bar')
```

Or

```js
foo::or('foo', 'bar')
```

**Result**

```js
'foo' in foo || 'bar' in foo
```
