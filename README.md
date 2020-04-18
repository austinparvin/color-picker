# Color Picker Objectives

- Respond to user events in React
- Use state in react to drive changes to a user interface
- Use props to drive inline styles to dynamically update the appearance of DOM elements
- Understand RGB vs HSL color models
- Use controlled form inputs in React

# Includes: 

- [REACT](https://reactjs.org/docs/getting-started.html)
- [REACT PROPS](https://reactjs.org/docs/components-and-props.html)

# Requirements 

- Represent the three values, hue, saturation, and lightness in your state.
- Add three sliders that update their respective values (hue, saturation, and lightness) in the state when changed.
- Display the color on the screen, in both text (i.e. hsl(50, 8%, 20%)) and the actual color as a background color on an element.
- Initialize the state to a random color when the page is loaded.
- Add a button that picks a new random color.
- In all cases, the sliders should be in the correct positions to represent this random color.
- Add a fourth slider for alpha, be sure to put some kind of pattern behind your color so the user can see the transparency effect.
- Add a section that displays a css class that applies the current background color to an element
- Only display the output color text in hsla() if the alpha value is less than 1.
 
## Live Site

[LIVE SITE](https://color-picker-austinparvin.netlify.app/)

![Color Picker](https://i.imgur.com/VVExi8w.png)

## Featured Code

### Displayed Color Section

```JSX
<section class="color">
          <h1 class="color-header">
            {(this.state.aValue < 100 ? 'hsla(' : 'hsl(') +
              this.state.hValue +
              ', ' +
              this.state.sValue +
              '%, ' +
              this.state.lValue +
              '%, ' +
              this.state.aValue / 100 +
              ')'}
          </h1>
          <div className="color-background">
            <div
              style={{
                backgroundColor:
                  'hsla(' +
                  this.state.hValue +
                  ', ' +
                  this.state.sValue +
                  '%, ' +
                  this.state.lValue +
                  '%, ' +
                  this.state.aValue / 100 +
                  ')',
              }}
              class="color-display"
            ></div>
          </div>
          <p className="color-text"></p>
        </section>
 ```
 
