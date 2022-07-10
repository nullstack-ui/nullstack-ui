# Colors
## Aliases
- danger
- info
- primary
- secondary
- success
- tertiary
- warning 

## Default colors
- blue
- cyan
- dark
- gray
- green
- pink
- orange
- red
- yellow 

## Color modifiers
- darken
- faded
- intensity (0, 100, 200, ...)
- lighten
- opacity

# Components
- accordion
- alert
- anchor
- avatar
- badge
- box
- button
-- bgColor
-- color
-- textColor
-- variant (filled, outline, rounded)
- buttonGroup
- checkbox
- closeButton
- container
- divider
- drawer
- dropdown
- fade, scaleFade, slide, slideFade
- formField (action, label, error, helper)
- heading
- highlight
- icon
- image
- input
- list
- modal
- numberInput
- pinInput
- popover
- portal
- progress
- radio
- rangeSlider
- select
- skeleton
- slider
- spacer
- spinner
- stack
- switch
- tabs
- table
- tag
- text
- textarea
- toast
- tooltip
- wrapper

# Prop list

## Animation
- animation / anim
- keyframes / kf
- transition

## Border
- border / bd
- borderB / bdB
- borderL / bdL
- borderR / bdR
- borderT / bdT
- borderX / bdX
- borderY / bdY
- borderColor / bdColor
- borderRadius / bdRadius / radius
- borderStyle / bdStyle
- borderWidth / bdWidth
- rounded 

## Bg
- background / bg
- backgroundAttachment / bgAttachment
- backgroundClip / bgClip
- backgroundGradient / bgGradient / gradient
- backgroundImage / bgImage
- backgroundPosition / bgPosition
- backgroundRepeat / bgRepeat
- backgroundSize / bgSize
- background

## Color
- bgColor
- color
- colorScheme (light, dark, etc)
- textColor

## Cursor
- cursor

## Display
- display / d

## Filter
- filter
-- blur
-- brightness
-- contrast
-- hueRotate
-- invert
-- saturate

## Flex
- flex
-- align / al
-- alignContent / alContent
-- alignH / alH
-- alignItems / alItems
-- alignSelf / alSelf
-- alignV / alV
-- basis
-- direction
-- flow
-- grow
-- justifyContent
-- justifySelf
-- order
-- shrink
-- wrap

## General
- _dark
- _light
- accentColor
- all
- resize

## Grid


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

## Placement
- inset
- position / pos (or bottom, left, right, top)
- zIndex / z

# Pseudo classes
- _even
- _firstChild
- _firstOfType
- _lastChild
- _lastOfType
- _not
- _nthChild
- _nthLastChild
- _nthLastOfType
- _nthOfType
- _odd
- _onlyChild

# Pseudo elements
- _after
- _before
- _firstLetter
- _firstLine
- _selection

## Responsiveness
- down (breakpoints: xs 576px, sm 768px, md 992px, lg 1200px, xl 1400px)
- on
- up

## Shadow
- boxShadow / shadow
- textShadow

## Spacing
- space / sp
- spaceX / spX
- spaceY / spY

# States
- _active
- _checked
- _disabled
- _empty
- _hover
- _focus
- _group (_active, _focus, _hover)
- _link
- _optional
- _peer (_active, _focus, _hover)
- _readOnly
- _visited

## Text
- ellipsis
- font
-- style (or fontStyle)
-- weight (or fontWeight)
- fontStyle (or italic, normal, oblique)
- fontWeight (or bold, regular, semibold)
- letterSpacing
- lineClamp
- lineHeight / lineH
- lowerCase / lowercase
- noWrap / nowrap
- size (based on the base size, in rems)
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

## Transform
- transform
-- scale
-- scaleX
-- scaleY
-- translate
-- translateX
-- translateY
-- rotate
-- rotateX
-- rotateY

## Visibility
- hidden
- invisible
- visibility / vis
- visible

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

# Variants
Create variants on demand