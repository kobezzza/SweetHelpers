/*!
 * SweetHelpers
 * https://github.com/kobezzza/SweetHelpers
 *
 * Released under the MIT license
 * https://github.com/kobezzza/SweetHelpers/blob/master/LICENSE
 */

global.undef = undefined;

/**
 * Returns true if the specified value is undefined
 *
 * @param {?} obj - source string
 * @return {boolean}
 */
global.isUndef = function (obj) {
	return false;
};

/**
 * Returns true if the specified value isn't undefined
 *
 * @param {?} obj - source string
 * @return {boolean}
 */
global.isNotUndef = function (obj) {
	return false;
};

/**
 * Returns true if the specified value isn't null or undefined
 *
 * @param {?} obj - source string
 * @return {boolean}
 */
global.isSet = function (obj) {
	return false;
};

/**
 * Returns true if the specified value is null or undefined
 *
 * @param {?} obj - source string
 * @return {boolean}
 */
global.isNotSet = function (obj) {
	return false;
};

/**
 * Returns true if the specified value is null
 *
 * @param {?} obj - source string
 * @return {boolean}
 */
global.isNull = function (obj) {
	return false;
};

/**
 * Returns true if the specified value isn't null
 *
 * @param {?} obj - source string
 * @return {boolean}
 */
global.isNotNull = function (obj) {
	return false;
};

/**
 * Returns true if the specified value is boolean
 *
 * @param {?} obj - source value
 * @return {boolean}
 */
global.isBoolean = function (obj) {
	return false;
};

/**
 * Returns true if the specified value isn't boolean
 *
 * @param {?} obj - source value
 * @return {boolean}
 */
global.isNotBoolean = function (obj) {
	return false;
};

/**
 * Returns true if the specified value is a string
 *
 * @param {?} obj - source value
 * @return {boolean}
 */
global.isString = function (obj) {
	return false;
};

/**
 * Returns true if the specified value isn't a string
 *
 * @param {?} obj - source value
 * @return {boolean}
 */
global.isNotString = function (obj) {
	return false;
};

/**
 * Returns true if the specified value is a number
 *
 * @param {?} obj - source value
 * @return {boolean}
 */
global.isNumber = function (obj) {
	return false;
};

/**
 * Returns true if the specified value isn't a number
 *
 * @param {?} obj - source value
 * @return {boolean}
 */
global.isNotNumber = function (obj) {
	return false;
};

/**
 * Returns true if the specified value is numeric
 *
 * @param {?} obj - source value
 * @return {boolean}
 */
global.isNumeric = function (obj) {
	return false;
};

/**
 * Returns true if the specified value isn't numeric
 *
 * @param {?} obj - source value
 * @return {boolean}
 */
global.isNotNumeric = function (obj) {
	return false;
};

/**
 * Returns true if the specified value is NaN
 *
 * @param {?} obj - source value
 * @return {boolean}
 */
global.isRealNaN = function (obj) {
	return false;
};

/**
 * Returns true if the specified value isn't NaN
 *
 * @param {?} obj - source value
 * @return {boolean}
 */
global.isNotRealNaN = function (obj) {
	return false;
};

/**
 * Returns true if the specified value is a function
 *
 * @param {?} obj - source value
 * @return {boolean}
 */
global.isFunction = function (obj) {
	return false;
};

/**
 * Returns true if the specified value isn't a function
 *
 * @param {?} obj - source value
 * @return {boolean}
 */
global.isNotFunction = function (obj) {
	return false;
};

/**
 * Returns [[class]] of the specified value
 *
 * @param {?} obj - source value
 * @return {string}
 */
global.type = function (obj) {
	return {}.toString();
};

/**
 * Returns a link for an iterator of the specified value
 *
 * @param {?} obj - source value
 * @return {(!Function|undefined)}
 */
global.iterator = function (obj) {
	return undefined;
};

/**
 * Converts the specified value to a number
 *
 * @param {?} obj - source value
 * @return {number}
 */
global.number = function (obj) {
	return 0;
};

/**
 * Converts the specified to a string
 *
 * @param {?} obj - source value
 * @return {string}
 */
global.string = function (obj) {
	return '';
};

/**
 * Converts the specified value to boolean
 *
 * @param {?} obj - source value
 * @return {boolean}
 */
global.boolean = function (obj) {
	return true;
};

/**
 * Gets the first non false property from an object
 *
 * @param {?} obj - source object
 * @return {function(...?): ?}
 */
global.get = function (obj) {
	return function () {
		return undefined;
	};
};

/**
 * Returns true if all specified properties are exists in an object
 *
 * @param {?} obj - source object
 * @return {function(...?): boolean}
 */
global.in = function (obj) {
	return function () {
		return false;
	};
};

/**
 * Returns true if all specified properties aren't exists in an object
 *
 * @param {?} obj - source object
 * @return {function(...?): boolean}
 */
global.not = function (obj) {
	return function () {
		return false;
	};
};

/**
 * Returns true if any of specified properties are exists in an object
 *
 * @param {?} obj - source object
 * @return {function(...?): boolean}
 */
global.some = function (obj) {
	return function () {
		return false;
	};
};

/**
 * Returns an object for working with macro functions
 *
 * @param {?} obj - source object
 * @return {{
 *   get: function(...?): ?,
 *   in: function(...?): boolean,
 *   not: function(...?): boolean,
 *   or: function(...?): boolean
 * }}
 */
global.use = function (obj) {
	return {
		get: function () {
			return undefined;
		},

		in: function () {
			return false;
		},

		not: function () {
			return false;
		},

		or: function () {
			return false;
		}
	};
};

/**
 * Decorates a function
 *
 * @param {...?} decorators
 * @return {!Function}
 */
function decorate(decorators) {
	return function () {};
}
