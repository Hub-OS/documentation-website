# TurnGauge

### `TurnGauge.enabled()`

Returns true if the turn gauge is visible, automatically progressing, and allows the turn to end.

### `TurnGauge.set_enabled(enabled)`

Hides the turn gauge, disables automatic progression, and prevents the turn from ending when disabled.

### `TurnGauge.frozen()`

Returns true if time is frozen from [time freeze](/client/lua-api/attack-api/cards#card_propertiestime_freeze) [Actions](/client/lua-api/attack-api/action).

### `TurnGauge.progress()`

Returns a number representing the turn gauge's progress as a value between 0 and 1.

Same as `TurnGauge.time() / TurnGauge.max_time()`

### `TurnGauge.time()`

Returns a number representing the turn gauge's progress in elapsed frames.

### `TurnGauge.max_time()`

Returns a number representing the total elapsed frames required to end a turn.

### `TurnGauge.set_time(time)`

Sets the turn gauge's progress in elapsed frames.

### `TurnGauge.set_max_time(time)`

Sets the total elapsed frames required to end a turn.

### `TurnGauge.reset_max_time()`

Sets the total elapsed frames required to end a turn to the default (512).

### `TurnGauge.current_turn()`

Returns a number, represents the current turn number. Starts at 0 during the intro, increments when Card Select opens.

### `TurnGauge.complete_turn()`

Ends the turn, causing Card Select to appear.

### `TurnGauge.turn_limit()`

Returns a number or nil, modified through [encounter:set_turn_limit()](/client/lua-api/field-api/encounter#encounterset_turn_limitlimit).
