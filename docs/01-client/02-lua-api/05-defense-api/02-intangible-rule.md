# IntangibleRule

See [living:set_intangible()](/client/lua-api/entity-api/living#livingset_intangibleintangible-intangible_rule)

### `IntangibleRule.new()`

Returns a new IntangibleRule.

### `intangible_rule.duration`

The maximum time the rule should last for in game frames.

The default value is 120.

### `intangible_rule.hit_weaknesses`

Hit flags combined into a single value see [HitProps](/client/lua-api/attack-api/hit-props)

The default value is `Hit.PierceInvis`

### `intangible_rule.element_weaknesses`

A list of [Elements](/client/lua-api/attack-api/hit-props#element)

The default value is `{}`

### `intangible_rule.on_deactivate_func = function()`

Called when the duration runs out, or when the defense is pierced.
