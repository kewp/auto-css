
# auto layout

to run use vite:

```
vite
```

the idea is to ... find a new way to do layout.

one thing i just thought of - perhaps everything
is an _element_ and each element must have an
_anchor_ and you then say how you want to size
things based on the anchor: relative? so you
could have a pop-up, but then also internal ...

what happens when the size is ... when the inside
is too big?

should have a set of test-cases for all these.
also - right now it's all just a big bunch of
code but i want to be able to do this much
cleaner. how?

maybe ... one cool approach is to ... not
allow for the creation of any elements,
at least not at first. instead we ...
you just have a javascript function for
an element and you point it to another
element basically saying "please keep
this element relative to this element
in this way".

of course you'll need to ... have some
kind of fallback / callbacks when the
rules you're trying to enforce makes
no sense. in fact, perhaps you could
call the method and it returns success
or not whether it makes sense, e.g.
"element is too big to fit inside of
anchor".

this means this could be a useful little
tool. perhaps you could build it out
using auto to wrap the rules you want
to enforce.

## old readme

- part / window / block / square
- each has set of relationships
- can be
 -- inside
 -- next to
 -- distance-between (greater than / less than)
 -- bigger than?

and the system solves this
_incrementally_ - i.e. animation is built in

so step by step
it's trying to get to a state
that 'solves' all the constraints
you've put in (you've put between)
the system (between the blocks)


so we have a bunch of blocks
and each block has relationships to each block
and each block has a width, height, top, left.
and the 'system' is trying to adjust each of these
in order to get each constraint to be matched.


but how do we specify constraints
and how do we step things in a way that
will get closer to solving them?

perhaps if the constraint
is a formula or equation
we have a bunch of values
widths, heights, lefts, tops.
which do we change?

i mean what about just
non-overlapping and inside...?

and what if we ranks things
and some have minimum sizes
and so some pop away when
we run out of space.

and others have versions
that are smaller
that they pop into
if things are too small.

## what

every component wants to be seen.
so the task of the layout is to
ensure that it is, and to do so
the best way possible.

so instead of specifying how things
are layed out
we rather just put things into
other things (this must be inside
of this), perhaps specify something
like an order and a layout technique
like row and justify between ...

## two boxes

let's say you have two boxes.
and you have the window,
the browser window, which is
a special kind of box. and the
two boxes are inside of the
browser box. what should it look like?
how big are the boxes (this is for
_any_ particular size of window box)
and where are they positioned?

well, we could say - the boxes
must be along the same horizontal
line. we could say they should ...
well their centers should be along
the same vertical line. we could say ...
they must be touching. or the space
between them must be a certain amount.

you could call this _parametric contraints_
as they do in 2d drawing software, for
engineering component design.

## flex and grid

i mean, how do you make a box
inside another box
and have the box inside be exactly
big enough to be just inside the
outer box by a set margin?

i mean, how do you do that with
flex?

is this better? i mean, what am i even
suggesting is _this_ ?

the point is just a question - can't we
do better? and really, it's just this -
i have been trying to get things to
work using css for years. and no matter
how many things they build on, systems
they come up with, new standards ... it
just doesn't work. i keep ending up in the
same situation - clicking off different rules,
selecting `display:block` and then cycling
through all the different options, because
 i have _no idea_ why the layout isn't
 doing what i expect.

 yes - i'm sure someone who has a ton of
 experience would know exactly what has happened,
 knows all the tricks, all the things to try.
 but i don't. and those things are not part
 of the standard. they are not accessible
 to us. so the system is broken.

i mean, if you have to have experience in order
to use a system to do something as simple
then surely there is something wrong.

maybe i'm wrong. maybe the problem itself
is fundamentally hard and what we have
(cascading styles, and the rules that have
been developed) really is beautiful and elegant
and it's just hard to understand and any system
that is flexible and can do what you need will
be so. maybe that's true. and hopefully in
trying to come up with a better design i'll
learn that, perhaps even prove it, if that is
the case.

there is just no ground to stand on.
that is what bothers me the most - 
when flexbox says something will align
along a row
it's simply not true.
over and over again
i've put `display:flex` and `flex-direction:row`
and the elements do not change.
why? what did i do wrong?

i'm tired of trying to find out.
i shouldn't _have_ to find out.
if there is some kind of underlying logic behind
it, it should be implicit in the design. it should
be part of the design. but it's not.
there is some kind of ... fiendishly difficult
logic behind it all, some kind of alchemical
magic to knowing why things work when they work.
and that is not good design. the whole thing
is based on experience - you have to have hours
and hours of experience in order to use the system.

 ## new system

i'm not suggesting a new standard.
what i'm proposing is - what might something
look like that's better? or - is there an
underlying system we can devise so
we aren't all stuck using the same thing?

