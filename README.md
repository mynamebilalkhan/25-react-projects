# 25 React Projects in One App

### Overview

This repository contains a single React application that integrates 25 different projects, showcasing a variety of functionalities and techniques in modern web development. Each project is designed to demonstrate different aspects of React, state management, and user interface design.

### Project Structure

The app is organized into distinct components, each representing a different project. This modular approach allows for easy navigation and understanding of the individual projects while maintaining a cohesive application structure.

### Accordion Component

#### Description

The Accordion component provides an interactive way for users to expand and collapse sections of content. It allows for both single and multi-selection of items, enhancing user experience by providing detailed information in a compact form. The component leverages React's state management to track selected items and toggle visibility.

#### Features

- **Single Selection Mode:** Users can click on an item to expand it and view its content. Clicking the same item again will collapse it.
- **Multi-Selection Mode:** Users can enable multi-selection, allowing them to expand multiple items simultaneously. Items can be toggled on or off by clicking.
- **Dynamic Content:** The component dynamically renders content based on the provided data set.

#### Usage

1 **State Management:**
 - The component maintains three pieces of state:
   - `selected`: Tracks the currently selected item for single selection.
   - `multiSelection`: A boolean that toggles between single and multi-selection modes.
   - `multiple`: An array that holds IDs of items currently expanded in multi-selection mode.

2 **Event Handlers:**

 - `handleSingleSelection`: Toggles the expansion of a single item based on its ID.
 - `handleMultiSelection`: Adds or removes an item from the multiple array based on its current state.

3 **Rendering:**

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

#### Installation

To get started with this project:

1 Clone the repository:

```
git clone <repository-url>
```

2 Navigate into the project directory:

```
cd 25-react-projects
```

3 Install the dependencies:

```
npm install
```

4 Start the development server:

```
npm run dev
```

#### Conclusion

The Accordion component exemplifies how to build interactive UIs in React. This repository aims to serve as a learning tool and a reference for building diverse React projects. Feel free to explore, modify, and expand upon the projects within this application!