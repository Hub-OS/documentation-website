# Lua Version And Changes

The Lua interpreter shipped with the server is version 5.4. Reference: https://www.lua.org/manual/5.4/#index

Small changes to the built-in Lua functions were made for improved development experience:

- `tostring` will format tables.
- `print`, `warn`, and `printerr` can display tables.
- `warn` will output yellow text to stdout.
- `printerr` will output red text to stdout.

Note: If you want to use io or interact with other programs see [Async](/server/lua-api/async). While Lua built-ins can be used they are blocking and can cause server hiccups.
