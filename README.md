# rogain-component-if

Returns it's children if `data` to `value` are equal. If the `<Else />` branch is defined, it will be returned when `data` and `value` are not equal.

If `value` is not defined, `If` will have the same behavior as `Defined`.

```html
<If data={loggedIn} value="true"><Dashboard /></If>
```

__Attributes__

___data___

Variable or Expression.

___value___

Variable or Expression. Optional.

## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-component-if
```

## License

MIT