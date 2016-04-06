# rogain-component-if

```html
<If data={variable} not|or|and equal defined empty gt gte !lt !lte>
```

Passes its children through if `data` passes defined attribute tests.  Any trees defined after the `<Else />` will be passed through if `data` doesn't pass attributes tests.

The attributes `and`, `or`, and `not` can be used to define how all tests should logically be grouped, `!` can be prefixed to negate individual tests. 

The tests `equal`, `defined`, `empty`, `gt`, `gte`, `lt`, `lte` can be used to test against the `data` attribute value.

__Attributes__

Attribute | Description
--- | ---
data | Variable or Expression.
and | Runs all tests with __AND__ logic, short circuits on any test failure. The default if `and` or `or` is not defined.
or | Runs all tests with __OR__ logic, short cicuits when any test passes.
not | Negates the end result of all tests.

__Tests__

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

__Default Tests / Else__

If no tests are defined, the default tests are `<If data={var} or defined !empty equal="true"></If>`

```html
<If data={loggedIn}>
    <Dashboard />
<Else />
    <Login />
</If>
```

__Negated Tests__

```html
<If data={error} !defined>Way to go, no errors!</If>
```

__Complex Tests__

```html
<If data={@index} lt="100" gte="0">10 - 99</If>
<If data={@index} lt="1000" gte="100">100 - 999</If>
<If data={@index} gte="1000">1000+</If>
```

## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-component-if
```

## License

MIT