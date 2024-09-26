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

```js
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

```jsx
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

```jsx
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

## Project 4

### Image Slider Component

#### Description

The `ImageSlider` component is an image carousel that allows users to navigate through a set of images fetched from a remote API. It provides a visually engaging way to present multiple images in a single view, with smooth transitions between images.

#### Features

- **Image Fetching:** Images are dynamically fetched from the [Picsum API](https://picsum.photos/v2/list) upon component mount.
- **Navigation:** Users can navigate through the images using left and right arrow buttons.
- **Circle Indicators:** Visual indicators at the bottom of the slider allow users to see the current slide and click to navigate directly to a specific image.
- **Loading State:** Displays a loading message while images are being fetched.
- **Auto-Wrap Navigation:** Automatically wraps around to the first image when navigating past the last image, and vice-versa.

#### Functionality

1. **State Management:**
   - `images`: Holds the array of image data fetched from the API.
   - `currentSlide`: Tracks the index of the currently visible image.
   - `loading`: A boolean state that indicates whether the component is currently fetching images.

2. **Event Handlers:**
   - `handlePrev`: Navigates to the previous image. If the current image is the first one, it wraps around to the last image.
   - `handleNext`: Navigates to the next image. If the current image is the last one, it wraps around to the first image.
   - `setCurrentSlide`: Directly sets the current slide based on user input from circle indicators.

3. **Rendering:**
   - The component conditionally renders either a loading message or the image slider based on the `loading` state.
   - Images are displayed with CSS classes to show or hide them based on the `currentSlide` state.
   - Navigation arrows and circle indicators allow users to easily navigate through the images.

#### Usage

To use the `ImageSlider` component, import it into your application and include it in your JSX:

```jsx
import ImageSlider from './ImageSlider';

function App() {
  return (
    <div>
      <ImageSlider />
    </div>
  );
}

export default App;
```

#### Styling

The component uses the following CSS classes defined in `ImageSlider.css`:

- `.wrapper`: The outer wrapper that sets the overall layout.
- `.container`: Centers the content within the wrapper.
- `.image-slider-container`: Contains the image slider, navigation arrows, and indicators.
- `.arrow`: Styles the left and right navigation arrows.
- `.current-slide`: Styles the currently visible image.
- `.hide`: Hides the images that are not currently visible.
- `.circle-indicator`: Contains the circle buttons for slide navigation.
- `.current-indicator`: Styles the active circle indicator.
- `.current-indicator.hide`: Styles inactive indicators.

#### API Reference

The component fetches images from the [Picsum API](https://picsum.photos/v2/list?page=1). You can adjust the API URL or modify the request to customize the images used in the slider.

```json
[
  {
    "id": "0",
    "author": "Alejandro Escamilla",
    "download_url": "https://picsum.photos/id/0/5616/3744"
  },
  {
    "id": "1",
    "author": "Alejandro Escamilla",
    "download_url": "https://picsum.photos/id/1/5616/3744"
  },
  // Additional image objects...
]
```

#### Customization

The component can be customized further by:
- **Adjusting Slide Transition:** Modify the CSS for `.current-slide` and `.hide` to create different transition effects.
- **Adding Auto-Slide Functionality:** Use the `setTimeout` function within `useEffect` to automatically move between slides.
- **Changing the Image Source:** Modify the `url` state to fetch images from a different API or local data source.

#### Installation

To get started with this project:

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate into the project directory:

```bash
cd 25-react-projects
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

#### Conclusion

The Accordion component exemplifies how to build interactive UIs in React. This repository aims to serve as a learning tool and a reference for building diverse React projects. Feel free to explore, modify, and expand upon the projects within this application!