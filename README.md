# rogain-component-if

```html
<If data={variable} or and not equal defined empty gt gte lt lte />
```

Passes its children through if `data` passes defined attribute tests.  Any trees defined after the `<Else />` will be passed through if `data` doesn't pass attributes tests.

The attributes `and`, `or`, and `not` can be used to define how all tests should logically be grouped. The attribute predicates `equal`, `defined`, `empty`, `gt`, `gte`, `lt`, `lte` can be used to test against the `data` attribute value.

__Attributes__

Attribute | Description
--- | ---
data | Variable or Expression.
and | Runs all tests with __AND__ logic, short circuits when any predicate fails. The default is `and` if `or` is not defined.
or | Runs all predicates with __OR__ logic, short cicuits when any predicate passes.
not | Negates the end result of all tests.

__Attribute Predicates__

Attribute | Description
--- | ---
equal | Variable or Expression. returns true if it's value is equal to `data`
defined | if defined, returns true if `data` is defined
empty | if defined, returns true if `data` is an empty array or object
gt | Variable or Expression. returns true if it's value is greater than `data`
gte |Variable or Expression. returns true if it's value is greater than or equal to `data`
lt | Variable or Expression. returns true if it's value is less than `data`
lte | Variable or Expression. returns true if it's value is thess than or equal to `data`

## Examples

__Default Predicates / Else__

If no tests are defined, the default predicates are `<If data={var} and defined empty="false"></If>`

```html
<If data={loggedIn} equal="true">
    <Dashboard />
<Else />
    <Login />
</If>
```

__Negated Predicates__

```html
<If data={error} defined="false">Way to go, no errors!</If>
<If data={error} not defined>Way to go, no errors!</If>
```

__Complex Predicates__

If `and` or `or` attributes aren't defined the predicates will be run using __AND__ logic by default.

```html
<If data={index} lt="100" gte="0">10 - 99</If>
<If data={index} lt="1000" gte="100">100 - 999</If>
<If data={index} gte="1000">1000+</If>
```

__OR Logic__

```html
<If data={mythings} or empty defined="false">MY THINGS BE MISSING</If>
```

## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-component-if
```

## License

MIT