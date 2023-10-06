
## Component Driven UI with ViewComponent gem [Radoslav Stankov]

https://rstankov.com/appearances - [Slides](https://speakerdeck.com/rstankov/component-driven-ui-with-viewcomponent-gem)

- Made [Angry Building](https://angrybuilding.com/en)
- Product Hunt uses React - GraphQL - Ruby stack
- Rails is good, but `app/helpers` ?
- [ViewComponent](https://viewcomponent.org) gem
    - Create reusable, testable, and encapsulated view components
```ruby
render MessageComponent.new(name: "World")
# or
component :message, name: "World"
```
- [Preview components](https://viewcomponent.org/guide/previews.html) (like Storybook)
- Use ViewComponent to DRY, not for replace plain html or pure functions.
- [Slots](https://viewcomponent.org/guide/slots.html) for nesting components : `renders_one` & `renders_many`
- `fetch_with_fallback` to handle fetch errors
- Have `before_render` [lifecycle](https://viewcomponent.org/guide/lifecycle.html) method
- PageHeader component
    - Breadcrumbs
    - Action buttons
- Yield data back by using Rails' `helpers.content_for`
- Render table results with component & slots
- Button components

## Learn to delegate; like a boss [Elle Meredith, Lachlan Hardy]

- Storytelling about Jack, sr dev turned eng. manager
- Delegation is...
    - Designating responsibility to someone else
    - An essential time management and team development strategy
    - Entrusting our authority to others... while remaining accountable for the outcome
- Thoughts e.g.
    - I feel bad about giving them more work
    - I'll do the best job here, so I'll do it myself
    - I don't have time to teach others
    - I don't know how to let go!
- Need mindset shift, learn to delegate
- Delegation is important
    - Higher revenue (33%)
    - Empowering employees
- For leader
    - Reduce burnout risks
    - Free up time
    - Deepen relationship & trust
- For team
    - Increased motivation engagement, productivity
    - Growing skill
- For [...]
- Autonomy vs Micromanagement
- Delegation != Abdication
- "Make yourself obsolete"
- Agree on DQR: Deadline/Quality/Reporting
- Learning how to lead, without being in control

## Error 418 - I'm a teapot [Matthew Lindfield Seager]

- 1st April curses
- HTCPCP (CP^2)
    - Request GET,POST -> WHEN,BREW
    - Responses
        - 406 Not Acceptable
        - 418 I'm a teapot
- Use [Rack](https://github.com/rack/rack) to build one in Ruby

## Big Corps, Big Worries. Some points on selling Ruby to Big Corps. [Chakrit Wichian]

- https://www.sawaddee.com
- "Ruby is Dead"
    - So what?
    - Ruby is Stable/mature
    - Java has some sayings
- "Ruby does not scale"
    - If your code on GitHub?
    - Have you ever buy from Shopify?
    - Did you book on AirBnB?
- "Ruby devs are expensive" / "Ruby devs are hard to find"
    - They are developers with "inflated skill"
    - Ruby Devs > Corp Devs
    - Much higher ROI

## Data Indexing with RGB (Ruby, Graphs & Bitmaps) [Benji Lewis]

([Previously talked in RubyConf Houston 2022](https://www.classcentral.com/classroom/youtube-rubyconf-2022-data-indexing-with-rgb-ruby-graphs-and-bitmaps-by-benjamin-lewis-235728))

- MeasureStore - Store measures
- Cross market analysis
- Cross comparison
- Harmonization
- Bitmap Store
- Store on Redis

## Keynote: Breaking Barriers — Empowering the Unbanked with Innovative Tech [Bernard Banta]

- https://rubycommunity.africa
- Understanding the challenges in unbanked people (~1.4B over the world)
    - Feature phones, low-end smartphones
- USSD (Unstructured Supplementary Service Data) via SMS
    - USSD App for feature phones