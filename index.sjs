/*!
 * SweetHelpers
 * https://github.com/kobezzza/SweetHelpers
 *
 * Released under the MIT license
 * https://github.com/kobezzza/SweetHelpers/blob/master/LICENSE
 */

macro undef$ {
	rule { } => {
		(void 0)
	}
}

export undef$;

macro isUndef$ {
	rule ( ($obj:expr) ) => {
		(typeof $obj === 'undefined')
	}

	rule infix { $obj:expr:: | () } => {
		(isUndef$($obj))
	}
}

export isUndef$;

macro isNotUndef$ {
	rule ( ($obj:expr) ) => {
		(typeof $obj !== 'undefined')
	}

	rule infix { $obj:expr:: | () } => {
		(isNotUndef$($obj))
	}
}

export isNotUndef$;

macro isSet$ {
	rule ( ($obj:expr) ) => {
		(isNotUndef$($obj) && $obj !== null)
	}

	rule infix { $obj:expr:: | () } => {
		(isSet$($obj))
	}
}

export isSet$;

macro isNotSet$ {
	rule ( ($obj:expr) ) => {
		(isUndef$($obj) || $obj === null)
	}

	rule infix { $obj:expr:: | () } => {
		(isNotSet$($obj))
	}
}

export isNotSet$;

macro isNull$ {
	rule ( ($obj:expr) ) => {
		(isNotUndef$($obj) && $obj === null)
	}

	rule infix { $obj:expr:: | () } => {
		(isNull$($obj))
	}
}

export isNull$;

macro isNotNull$ {
	rule ( ($obj:expr) ) => {
		(isUndef$($obj) || $obj !== null)
	}

	rule infix { $obj:expr:: | () } => {
		(isNotNull$($obj))
	}
}

export isNotNull$;

macro isBoolean$ {
	rule { ($obj:expr) } => {
		(typeof $obj === 'boolean')
	}

	rule infix { $obj:expr:: | () } => {
		(isBoolean$($obj))
	}
}

export isBoolean$;

macro isNotBoolean$ {
	rule { ($obj:expr) } => {
		(typeof $obj !== 'boolean')
	}

	rule infix { $obj:expr:: | () } => {
		(isNotBoolean$($obj))
	}
}

export isNotBoolean$;

macro isString$ {
	rule { ($obj:expr) } => {
		(typeof $obj === 'string')
	}

	rule infix { $obj:expr:: | () } => {
		(isString$($obj))
	}
}

export isString$;

macro isNotString$ {
	rule { ($obj:expr) } => {
		(typeof $obj !== 'string')
	}

	rule infix { $obj:expr:: | () } => {
		(isNotString$($obj))
	}
}

export isNotString$;

macro isNumber$ {
	rule { ($obj:expr) } => {
		(typeof $obj === 'number')
	}

	rule infix { $obj:expr:: | () } => {
		(isNumber$($obj))
	}
}

export isNumber$;

macro isNotNumber$ {
	rule { ($obj:expr) } => {
		(typeof $obj !== 'number')
	}

	rule infix { $obj:expr:: | () } => {
		(isNotNumber$($obj))
	}
}

macro isNumeric$ {
	rule { ($obj:expr) } => {
		(isNumber$($obj) && isFinite($obj))
	}

	rule infix { $obj:expr:: | () } => {
		(isNumeric$($obj))
	}
}

export isNumeric$;

macro isNotNumeric$ {
	rule { ($obj:expr) } => {
		(isNotNumber$($obj) || !isFinite($obj))
	}

	rule infix { $obj:expr:: | () } => {
		(isNotNumeric$($obj))
	}
}

export isNotNumeric$;

macro isRealNaN$ {
	rule { ($obj:expr) } => {
		(isNumber$($obj) && isNaN($obj))
	}

	rule infix { $obj:expr:: | () } => {
		(isRealNaN$($obj))
	}
}

export isRealNaN$;

macro isNotRealNaN$ {
	rule { ($obj:expr) } => {
		(isNotNumber$($obj) || !isNaN($obj))
	}

	rule infix { $obj:expr:: | () } => {
		(isNotRealNaN$($obj))
	}
}

export isNotRealNaN$;

macro isFunction$ {
	rule { ($obj:expr) } => {
		(typeof $obj === 'function')
	}

	rule infix { $obj:expr:: | () } => {
		(isFunction$($obj))
	}
}

export isFunction$;

macro isNotFunction$ {
	rule { ($obj:expr) } => {
		(typeof $obj !== 'function')
	}

	rule infix { $obj:expr:: | () } => {
		(isNotFunction$($obj))
	}
}

export isNotFunction$;

macro instanceof$ {
	rule { ($obj:expr, $constr:expr) } => {
		($obj instanceof $constr || $obj && $obj.constructor && $obj.constructor.name === $constr.name)
	}

	rule infix { $obj:expr:: | ($constr:expr) } => {
		(instanceof$($obj, $constr))
	}
}

export instanceof$;

macro type$ {
	rule { ($obj:expr) } => {
		(({}).toString.call($obj))
	}

	rule infix { $obj:expr:: | () } => {
		(type$($obj))
	}
}

export type$;

macro iterator$ {
	rule { ($obj:expr) } => {
		(isSet$($obj) ? (isFunction$($obj['@@iterator']) ?
			$obj['@@iterator'] : isFunction$(Symbol) ? $obj[Symbol['iterator']] : undef$) : undef$)
	}

	rule infix { $obj:expr:: | () } => {
		(iterator$($obj))
	}
}

export iterator$;

macro number$ {
	rule { ($obj:expr) } => {
		(+$obj)
	}

	rule infix { $obj:expr:: | () } => {
		(number$($obj))
	}
}

export number$;

macro string$ {
	rule { ($obj:expr) } => {
		($obj + '')
	}

	rule infix { $obj:expr:: | () } => {
		(string$($obj))
	}
}

export string$;

macro boolean$ {
	rule { ($obj:expr) } => {
		(!!$obj)
	}

	rule infix { $obj:expr:: | () } => {
		(boolean$($obj))
	}
}

export boolean$;

macro _get {
	rule { ($obj:expr, $property) } => {
		$obj[$property]
	}

	rule { ($obj:expr, $head $tail ...) } => {
		$obj[$head] || _get($obj, $tail ...)
	}
}

macro get$ {
	rule infix { $obj:expr:: | ($x:expr (,) ...) } => {
		(_get($obj, $x ...))
	}
}

export get$;

macro _in {
	rule { ($obj:expr, $property) } => {
		($property $[in] $obj)
	}

	rule { ($obj:expr, $head $tail ...) } => {
		$head $[in] $obj && _in($obj, $tail ...)
	}
}

macro in$ {
	rule infix { $obj:expr:: | ($x:expr (,) ...) } => {
		(_in($obj, $x ...))
	}
}

export in$;

macro _not {
	rule { ($obj:expr, $property) } => {
		($property $[in] $obj === false)
	}

	rule { ($obj:expr, $head $tail ...) } => {
		$head $[in] $obj === false && _not($obj, $tail ...)
	}
}

macro not$ {
	rule infix { $obj:expr:: | ($x:expr (,) ...) } => {
		(_not($obj, $x ...))
	}
}

export not$;

macro _some {
	rule { ($obj:expr, $property) } => {
		($property $[in] $obj)
	}

	rule { ($obj:expr, $head $tail ...) } => {
		$head $[in] $obj || _some($obj, $tail ...)
	}
}

macro some$ {
	rule infix { $obj:expr:: | ($x:expr (,) ...) } => {
		(_some($obj, $x ...))
	}
}

export or;

macro use$ {
	rule { ($obj:expr).get($x:expr (,) ...) } => {
		(_get($obj, $x ...))
	}

	rule { ($obj:expr).in($x:expr (,) ...) } => {
		(_in($obj, $x ...))
	}

	rule { ($obj:expr).not($x:expr (,) ...) } => {
		(_not($obj, $x ...))
	}

	rule { ($obj:expr).some($x:expr (,) ...) } => {
		(_some($obj, $x ...))
	}
}

export use$;

macro func {
	rule { $arg => $body:expr }
	rule { $arg => { $body ... } }
	rule { ($args (,) ...) => $body:expr }
	rule { ($args (,) ...) => { $body ... } }
	rule { function ($args (,) ...) { $body ... } }
	rule { function $name:ident ($args (,) ...) { $body ... } }
}

macro _decorate {
	rule { ($f:expr, $decorator) } => {
		$decorator($f)
	}

	rule { ($f:func, $head $tail ...) } => {
		_decorate($head($f), $tail ...)
	}
}

macro decorate$ {
	rule { ($decorators:expr (,) ...) || $f:func } => {
		(_decorate ($f, $decorators ...))
	}

	rule { ($decorators:expr (,) ...) :: $f:func } => {
		(_decorate ($f, $decorators ...))
	}
}

export decorate$;
