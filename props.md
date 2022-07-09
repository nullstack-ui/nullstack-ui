# Prop list

## Border
- border / bd
- borderB / bdB
- borderL / bdL
- borderR / bdR
- borderT / bdT
- borderX / bdX
- borderY / bdY
- borderColor / bdColor
- borderRadius / bdRadius
- borderStyle / bdStyle
- borderWidth / bdWidth
- rounded 

## Bg
- background / bg
- backgroundAttachment / bgAttachment
- backgroundImage / bgImage
- backgroundPosition / bgPosition
- backgroundRepeat / bgRepeat
- backgroundSize / bgSize
- background

## Color
- bgColor
- color
- textColor

## Height/width
- height / h
- maxHeight / maxH
- maxWidth / maxW
- minHeight / minH
- minWidth / minW
- width / w

## Margin
- margin / m
- marginB / mb
- marginL / ml
- marginR / mr
- marginT / mt
- marginX / mx
- marginY / my

## Outline
- outline
- outlineColor
- outlineOffset
- outlineStyle
- outlineWidth

## Padding
- padding / p
- paddingB / pb
- paddingL / pl
- paddingR / pr
- paddingT / pt
- paddingX / px
- paddingY / py

## Text
- ellipsis
- letterSpacing
- lineHeight / lineH
- lowerCase / lowercase
- noWrap / nowrap
- text
-- align
-- alignLast
-- color (or textColor)
-- decoration
--- color
--- line
--- style
--- thickness
-- direction
-- indent
-- letterSpacing (or letterSpacing)
-- lineHeight / lineH (or lineHeight)
-- transform (or lowerCase/upperCase)
-- wordSpacing (or wordSpacing)
- upperCase / uppercase
- verticalAlign
- whiteSpace
- wordSpacing

# All props usage
- bg
-- Accepts a string (url), an array (0 being the url and 1 being the bg properties) or an object (with `value` or `url` being the url and the rest of the object being the bg properties)
- bgColor
-- Accepts a string, an array (0 being the color and 1 being the color manipulation properties) or an object (with `value` being the color and the rest of the object being the color manipulation properties)
- border (alias bd)
-- Accepts a boolean (for default cases) or an object (`color`, `radius`, `style` and `width`)
- height (alias h)
-- Accepts a number (default for px unit) or a string (for values with units)
- margin (and all its variations)
-- Accepts a number (default for rem unit) or a string (for values with units)
- outline
-- Accepts a boolean (for default cases) or an object (`color`, `offset`, `style` and `width`)
-- Accepts 
- padding (and all its variations)
-- Accepts a number (default for rem unit) or a string (for values with units)
- textColor
-- Accepts a string, an array (0 being the color and 1 being the color manipulation properties) or an object (with `value` being the color and the rest of the object being the color manipulation properties)
- width (alias w)
-- Accepts a number (default for px unit) or a string (for values with units)

# Pseudo classes
- _firstChild
- _firstOfType
- _lastChild
- _lastOfType
- _not
- _nthChild
- _nthLastChild
- _nthLastOfType
- _nthOfType
- _onlyChild

# Pseudo elements
- _after
- _before
- _firstLetter
- _firstLine
- _selection

# States
- _active
- _checked
- _disabled
- _empty
- _hover
- _focus
- _link
- _optional
- _readOnly
- _visited

# Variants
Create variants on demand