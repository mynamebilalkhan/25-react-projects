# 25 React Projects in One App

### Overview

This repository contains a single React application that integrates 25 different projects, showcasing a variety of functionalities and techniques in modern web development. Each project is designed to demonstrate different aspects of React, state management, and user interface design.

### Project Structure

The app is organized into distinct components, each representing a different project. This modular approach allows for easy navigation and understanding of the individual projects while maintaining a cohesive application structure.

## Project 1

### Accordion Component

#### Description

The Accordion component provides an interactive way for users to expand and collapse sections of content. It allows for both single and multi-selection of items, enhancing user experience by providing detailed information in a compact form. The component leverages React's state management to track selected items and toggle visibility.

#### Features

- **Single Selection Mode:** Users can click on an item to expand it and view its content. Clicking the same item again will collapse it.
- **Multi-Selection Mode:** Users can enable multi-selection, allowing them to expand multiple items simultaneously. Items can be toggled on or off by clicking.
- **Dynamic Content:** The component dynamically renders content based on the provided data set.

#### Usage

1. **State Management:**
 - The component maintains three pieces of state:
   - `selected`: Tracks the currently selected item for single selection.
   - `multiSelection`: A boolean that toggles between single and multi-selection modes.
   - `multiple`: An array that holds IDs of items currently expanded in multi-selection mode.

2. **Event Handlers:**

 - `handleSingleSelection`: Toggles the expansion of a single item based on its ID.
 - `handleMultiSelection`: Adds or removes an item from the multiple array based on its current state.

3. **Rendering:**

- The component maps over the data array, creating an item for each entry. Each item has a title and an associated content section that is displayed based on user interaction.
- If no data is available, a "No Data Found!" message is displayed.

#### Example Data Structure

The Accordion component expects data in the following format:

```
const data = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    question: "What is a component?",
    answer: "A component is a reusable piece of code that returns a React element."
  },
  // Add more items as needed
];
```

## Project 2

### Random Color Component

The `RandomColor` component allows users to generate random colors in either HEX or RGB format. This interactive utility is designed to provide a quick and engaging way to explore color generation in React.

#### Features

- **Generate Random HEX Color:** Click the button to generate a random color in HEX format (e.g., `#FF5733`).
- **Generate Random RGB Color:** Click the button to generate a random color in RGB format (e.g., `rgb(255, 87, 51)`).
- **Dynamic Background Color:** The component's background color changes based on the generated color.

#### Functionality

1. **State Management:**
  - `typeOfColor`: Tracks the selected color format (HEX or RGB).
  - `color`: Holds the generated color value.

2. **Color Generation:**
  - The component generates random colors using utility functions for both HEX and RGB formats.
  - Users can switch between color types and generate a new random color with the click of a button.

#### How It Works
 - HEX Color Generation:
  - A random HEX color is created by selecting random characters from a predefined array of HEX digits (0-9, A-F).
 - RGB Color Generation:
  - A random RGB color is created by generating three random integers between 0 and 255 for the red, green, and blue channels.

#### Usage

To use the `RandomColor` component, import it into your application and include it in your JSX:

```
import RandomColor from './RandomColor';

function App() {
  return (
    <div>
      <RandomColor />
    </div>
  );
}

export default App;
```

#### Styling

The component uses the following CSS classes defined in RandomColor.css:

- `.wrapper`: Applies the background color and layout.
- `.container`: Contains the button group and color display.
- `.button-group`: Styles the group of buttons.
- `.colorDisplay`: Displays the currently generated color value.

## Project 3

### Star Rating Component

The `StarRating` component provides an interactive star rating system for users to evaluate or provide feedback on items or services. This component is visually appealing and enhances user experience by allowing easy and intuitive rating.

#### Features

- **Interactive Star Rating:** Users can click on stars to set their rating, providing immediate visual feedback.
- **Hover Feedback:** Stars change appearance when hovered over, allowing users to preview their rating selection.

#### Functionality

1. **State Management:**
  - `rating`: Keeps track of the selected rating by the user.
  - `hover`: Temporarily holds the rating while the user hovers over the stars.

2. **Event Handlers:**

  - `handleClick()`: Updates the rating state when a star is clicked.
  - `handleMouseEnter()`: Updates the hover state when the mouse enters a star, highlighting it and any previous stars.
  - `handleMouseLeave()`: Resets the hover state to the current rating when the mouse leaves the star area.

#### Usage

To use the `StarRating` component, import it into your application and include it in your JSX:

```
import StarRating from './StarRating';

function App() {
  return (
    <div>
      <StarRating stars={5} />
    </div>
  );
}

export default App;
```

#### Styling

The component uses the following CSS classes defined in `StarRating.css`:

- `.wrapper`: Applies overall layout styles.
- `.starRating`: Contains the star icons.
- `.active`: Styles for active (selected) stars.
- `.inactive`: Styles for inactive (unselected) stars.

#### Installation

To get started with this project:

1. Clone the repository:

```
git clone <repository-url>
```

2. Navigate into the project directory:

```
cd 25-react-projects
```

3. Install the dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

#### Conclusion

The Accordion component exemplifies how to build interactive UIs in React. This repository aims to serve as a learning tool and a reference for building diverse React projects. Feel free to explore, modify, and expand upon the projects within this application!