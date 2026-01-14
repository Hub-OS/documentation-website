# Lua Cheat Sheet

For an official reference and documentation on standard lua functions see: https://www.lua.org/manual/5.4/

It's not necessary to understand everything on this page, but the more you understand the better you will be at debugging and collaborating.

It's best to take just what you need while creating a mod, and come back to study if you're curious.

## Variables

```lua
local a = 1

a = a + 1

print(a) -- 2
```

## Functions

```lua
local function add(a, b)
  return a + b
end
-- is the same as:
local add = function(a, b)
  return a + b
end

-- this may create a global, seen in the next section
function add(a, b)
  return a + b
end
-- is the same as:
add = function(a, b)
  return a + b
end

print(add(1, 2)) -- logs 3 in the console

-- multiple return
local function add_multi(a, b, c)
  return a + c, b + c
end

local a, b = add_multi(1, 2, 3)
print(a, b) -- 4 5
```

## Globals

```lua
function f()
  -- no local attached, modifies the outside world
  a = 1

  -- local used, does not modify the outside word
  local b = 1
  b = b + 1
end

f()
print(a, b) -- 1 nil
```

## Scopes

Access to local variables is limited by scope. This can make it easier to debug by limiting where you need to check for errors related to that variable. It also allows you to avoid unwanted external changes from other parts of your project using a variable with the same name.

Generally if a section of code ends with `end`, it qualifies as a scope.

```lua
for i = 1, 5 do -- scope start
  if true then -- scope start
    local c = 1
    print(i) -- 1-5

    local i = 1
    print(i) -- 1, shadows the other i variable
  end -- end scope

  print(i) -- 1-5
  print(c) -- nil, not in scope
end -- end scope

print(i) -- nil, not in scope
```

## Closures

Variables from a scope can escape by using a closure.

```lua
function create_closure()
  local v = 1

  local function inc()
    -- updates v for everyone
    v = v + 1
  end

  local function get()
    -- sees the updated value of v, even when inc updates it later
    return v
  end

  return inc, get
end

local inc, get = create_closure()
inc()
inc()
print(get()) -- 2

local inc2, get2 = create_closure()
inc2()
print(get(), get2()) -- 2 1
```

## Arrays and Iteration

```lua
-- logs 1 through 5
for i = 1, 5 do
  print(i)
end

-- logs 5 through 1
for i = 5, 1, -1 do
  print(i)
end

-- logs 1 and 3, we skipped two by incrementing by 2
for i = 1, 5, 2 do
  print(i)
end

local list = {"a", "b", "c"}

print(#list) -- 3, # is used to get the length of a list

-- prints "a", then "b", then "c"
for i = 1, #list do
  print(list[i])
end

-- prints "a", then "b", then "c"
for i, value in ipairs(list) do
  print(value)
end
```

## Conditions

```lua
-- nil and false are "falsy":

if nil then
  print("this never executes")
end

if false then
  print("this never executes")
end

-- everything else is truthy:

local f = function() end

if true and 0 and "" and {} and f then
  print("this executes")
end
```

## Guard Statements

Guard statements allow you to avoid nesting, which prevents code from travelling to the right and reduces the amount of overlapping scopes you need to be aware of while debugging.

The trade off is taller code, but it's generally easier to understand when more conditions are added.

Popular videos on the topic:

- https://www.youtube.com/watch?v=CFRhGnuXG-4
- https://www.youtube.com/watch?v=-AzSRHiV9Cc

```lua
function nested(x, y)
  local tile = Field.tile_at(x, y)

  if tile and tile:is_walkable() then
    local next_tile = tile:get_tile(tile:facing(), 1)

    if next_tile and next_tile:is_walkable() then
      print("hello!")
    end
  end
end
-- vs
function guarded(x, y)
  local tile = Field.tile_at(x, y)

  if tile and tile:is_walkable() then
    -- the rest of the function is skipped, and no values are returned
    -- making sure your inputs are valid and exiting early otherwise is called a guard
    return
  end

  local next_tile = tile:get_tile(tile:facing(), 1)

  if next_tile and next_tile:is_walkable() then
    print("hello!")
  end
end

for _, e in ipairs(entities) do
  if not e:deleted() then
    local next_tile = e:get_tile(e:facing(), 1)

    if next_tile and next_tile:is_walkable() then
      print("hello!")
    end
  end
end
-- vs
for _, e in ipairs(entities) do
  if e:deleted() then
    -- skips to the ::continue:: label
    goto continue
  end

  local next_tile = e:get_tile(e:facing(), 1)

  if next_tile and next_tile:is_walkable() then
    print("hello!")
  end

  ::continue::
end
```

## Math

```lua
print(1 + 1) -- 2
print(1 - 1) -- 0
print(2 ^ 4) -- 16.0, 2 to the power of 4
print(10 / 3) -- 3.333
print(10 // 3) -- 3, integer division
print(5 % 3) -- 2, the remainder of division

print(1 - 1 * 3) -- -2, operator precedence
print((1 - 1) * 3) -- 0

print(math.max(1, 2, 3)) -- 3, picks the larger number
print(math.min(1, 2, 3)) -- 1, picks the smaller number

print(math.ceil(1.1)) -- 2
print(math.floor(1.1)) -- 1

-- bitwise operations, lua works on 64 bit numbers, but we'll use 4 bits to simplify
-- 1 = 0001
-- 2 = 0010
-- 3 = 0011
-- 4 = 0100
-- 5 = 0101
-- 6 = 0110
-- 7 = 0111
print(1 & 1) -- 1, last bit was 1 in both
print(1 & 2) -- 0, no bits were 1 in the same column
print(1 & 3) -- 1, the last bit was 1 in both
print(3 & 2) -- 2, the second to last bit was 1 in both
print(3 & 7) -- 3, every bit in 3 matched against a bit in 7

print(1 | 2) -- 3, enabled the last two bits
print(1 | 3) -- 3, the matching bit was already on in 3
print(3 | 2) -- 3, the matching bit was already on in 3

print(~0) -- inverts bits, every bit is on in this number
print(~1) -- every bit except the last bit is on
print(3 ~ 2) -- 1, the matching bit was disabled and preserved the rest
print(3 ~ 1) -- 2, the matching bit was disabled and preserved the rest
print(7 ~ 3) -- 4, disabled matching bits and preserved the rest
print(3 ~ 7) -- 4, disabled matching bits and preserved the rest

print(7 & ~1) -- 6, inverted 1 so only other bits could pass / every bit in 1 was disabled
print(7 & ~3) -- 4, inverted 3 so only other bits could pass / every bit in 3 was disabled

-- hexadecimal
print(0xff) -- 255
```

## String Concatination

```lua
print("a".."b") -- "ab"
print("a"..1) -- "a1"
print(1.."b") -- error, but due to 1. parsing as 1.0
print(1 .."b") -- "1b", any separation or avoiding a literal value helps
print("a"..false) -- everything else errors

-- print accepts multiple values and will separate with a tab
print("a", "b") -- ~"a b"
```

## Removing values from a list while iterating

```lua
local list = {"a", "b", "c"}

-- incorrect: prints "a" -> "c" -> "nil", before creating an out of bounds error
for i = 1, #list do
  print(list[i])
  table.remove(list, i)
end

list = {"a", "b", "c"}

-- iterating in reverse to avoid issues with and reduced performance from shifting O(n)
-- prints "c" -> "b" -> "a"
for i = #list, 1, -1 do
  print(list[i])
  table.remove(list, i)
end

list = {"a", "b", "c"}

-- advanced: swap remove, zero performance penalty from shifting: O(1), but this can change the order of your list
-- prints "c" -> "b" -> "a"
for i = #list, 1, -1 do
  local value = list[i]

  list[i] = list[#list] -- move the last value to the current index
  list[#list] = nil -- setting the last element to nil shrinks the list

  print(value)
end
```

## Appending to a list

```lua
local list = {}

table.insert(list, "a") -- appends to the end
table.insert(list, "b") -- appends to the end
table.insert(list, 1, "c") -- inserts at 1, shifts everything at that position to the right
list[#list + 1] = "d" -- also appends to the end by setting the value at the next index
list[#list + 2] = "e" -- creates a gap and does not properly append

-- "c" -> "a" -> "b" -> "d"
for _, value in ipairs(list) do
  print(value)
end
```

## Random value from a list

```lua
local list = {"a", "b", "c"}

print(list[math.random(#list)])
```

## Wrapping values from a list

```lua
local list = {"a", "b", "c"}

-- "a" -> "b" -> "c" repeating
for i = 1, 6 do
  print(list[(i - 1) % #list + 1])
end
```

## Tables

Similar syntax to lists, as lists are a feature of tables.

Tables can store values with a key. If the key is a number within a sequence starting at 1, it will be stored in the "list" part of the table.

You can delete keys by setting its value to nil.

```lua
local key = "b"
local t = { a = 1, [key] = 2, ["Key with spaces"] = 3 }

print(t["a"], t["b"], t["Key with spaces"]) -- 1 2 3
print(t.a, t.b) -- 1 2

t.f = function() return "hi" end
-- same as:
function t.f() return "hi" end

print(t.f()) -- "hi"


-- using a colon creates a parameter called self
function t:f() return self.a end
print(t.f(t))
-- same as
function t.f(self) return self.a end
-- same as
function t.f(input) return input.a end
print(t.f(t))

-- using a colon when calling this function will assign the table to the first parameter
print(t:f())
```
