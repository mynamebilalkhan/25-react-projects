# 25 React Projects in One App

### Overview

This repository contains a single React application that integrates 25 different projects, showcasing a variety of functionalities and techniques in modern web development. Each project is designed to demonstrate different aspects of React, state management, and user interface design.

### Project Structure

The app is organized into distinct components, each representing a different project. This modular approach allows for easy navigation and understanding of the individual projects while maintaining a cohesive application structure.

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

This repository aims to serve as a learning tool and a reference for building diverse React projects. Feel free to explore, modify, and expand upon the projects within this application!

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

## Project 5

### Load More Component

#### Overview

The `LoadMore` component is a React component that fetches and displays a list of products from an API with a "Load More" button to display additional products. It demonstrates efficient data fetching, state management, and conditional rendering in React.

#### Features

- **Data Fetching:** Retrieves product data from an external API upon component mount.
- **Pagination:** Displays a subset of products initially and loads additional products upon clicking the "Load More" button.
- **Loading State:** Shows a loading indicator while fetching additional products.
- **Disable Button:** The "Load More" button is disabled when all products have been loaded.

#### Functionality

1. **State Management:**
  - `products`: Holds the list of products fetched from the API.
  - `visibleProducts`: Controls the number of products displayed initially.
  - `loading`: Indicates whether the component is currently fetching additional products.

2. **Event Handlers:**
  - `loadMoreProducts`: Fetches and adds more products to the displayed list when the "Load More" button is clicked.
  - `fetchProducts`: Retrieves data from the API and updates the `products` state.

3. **Rendering:**
  - The component displays a list of products, each with its image and title.
  - The "Load More" button is displayed conditionally based on whether more products are available.

#### Usage

To use the `LoadMore` component, import it into your application and include it in your JSX:

```jsx
import LoadMore from './LoadMore';

function App() {
  return (
    <div>
      <LoadMore />
    </div>
  );
}

export default App;
```

#### Styling

The component uses the following CSS classes defined in `LoadMore.css`:
- `.wrapper`: Sets the layout and spacing for the component.
- `.product`: Styles for individual product cards.
- `.load-more-button`: Styles for the "Load More" button.

#### API Reference

The component fetches products from a sample API endpoint such as:

```json
[
  {
    "id": 1,
    "name": "Product 1",
    "image": "https://via.placeholder.com/150",
    "price": "$100"
  },
  {
    "id": 2,
    "name": "Product 2",
    "image": "https://via.placeholder.com/150",
    "price": "$150"
  },
  // Additional product objects...
]
```

## Project 6

### TreeView Component

#### Overview

The `TreeView` component is a dynamic and interactive navigation menu built using React. This component displays a hierarchical structure of menu items with nested submenus, allowing users to explore and navigate through various categories and subcategories of the application in a clean and organized manner.

#### Features

- **Expandable/Collapsible Items:** Users can expand or collapse menu items to view or hide nested submenus using intuitive icons.
- **Nested Structure Support:** The component can render any number of nested levels, making it suitable for complex navigation structures.
- **Dynamic Data Rendering:** The component dynamically renders the menu items based on the provided data structure, ensuring flexibility and scalability.

#### Project Structure

The component is divided into multiple files to maintain separation of concerns:

1. **TreeView.js:** The main container component that holds the entire TreeView structure and imports other components.
2. **MenuList.js:** A functional component that renders a list of `MenuItem` components based on the provided data.
3. **MenuItem.js:** The component responsible for rendering individual menu items, handling clicks, and managing their state (expanded/collapsed).
4. **data.js:** Contains the sample hierarchical data used for rendering the tree view.
5. **TreeView.css:** Styles the tree view, providing visual cues for expanded and collapsed states, nested levels, and menu item hierarchy.

#### Data Structure

The `TreeView` component expects a data structure with nested levels of menu items. Each item should have the following properties:

- `label`: The text label displayed on the menu item.
- `to`: The path or URL that the item links to.
- `children` (optional): An array of sub-items that will be displayed as nested submenus.

Here’s a sample data structure used in the project:

```js
export const treeViewData = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/details",
        children: [
          {
            label: "Location",
            to: "/location",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "/account",
      },
    ],
  },
  {
    label: "Security",
    to: "/security",
    children: [
      {
        label: "Login",
        to: "/login",
      },
      {
        label: "Register",
        to: "/register",
      },
    ],
  },
];
```

#### How It Works

1. **MenuItem Component:**
  - Each `MenuItem` receives an item object and uses the `useState` hook to manage the visibility of its child items.
  - Clicking on a menu item with children toggles the visibility of the nested submenu using icons (`FaPlus` and `FaMinus` from `react-icons`).

2. **MenuList Component:**
  - This component accepts a list of menu items and maps over them, rendering each as a `MenuItem` component.
  - If a menu item has children, `MenuList` recursively renders the nested submenus within the current menu.

3. **TreeView Component:**
  - The root component that serves as the entry point for the tree view.
  - It imports the hierarchical data and passes it as a prop to the `MenuList` component.

#### Usage

To use the `TreeView` component in your React application:

1. **Import the component:**

```jsx
import TreeView from './TreeView';
```

2. **Include it in your JSX:**

```jsx
function App() {
  return (
    <div className="App">
      <h1>TreeView Navigation Menu</h1>
      <TreeView />
    </div>
  );
}

export default App;
```

## Project 7

### QR Code Generator

#### Overview

The `QRCodeGenerator` component is a React application that generates a QR code based on user input. This tool is useful for converting text, URLs, or other information into a QR code format that can be scanned by QR code readers.

#### Features

- **Dynamic QR Code Generation:** The QR code is updated in real-time based on user input.
- **Customizable QR Code Size:** Users can select different sizes for the generated QR code.
- **Downloadable Image:** The component allows users to download the generated QR code as an image file.

#### Functionality

1. **State Management:**
   - `inputValue`: Tracks the current user input.
   - `qrCodeUrl`: Holds the URL for the generated QR code image.

2. **Event Handlers:**
   - `handleInputChange()`: Updates the inputValue state with the user's input.
   - `generateQRCode()`: Generates the QR code using a third-party library or API and updates the qrCodeUrl state.

3. **Rendering:**
   - Displays the input field, size selector, and QR code image based on the user's input and selected size.
   - The "Download" button allows the user to download the QR code as an image.

#### Usage

To use the `QRCodeGenerator` component, import it into your application and include it in your JSX:

```jsx
import QRCodeGenerator from './QRCodeGenerator';

function App() {
  return (
    <div>
      <QRCodeGenerator />
    </div>
  );
}

export default App;
```

## Project 8

### Light Dark Mode

#### Overview

The `LightDarkMode` component allows users to switch between light and dark themes for the application. This feature enhances the user experience by providing a more comfortable viewing option based on their preference.

#### Features

- **Theme Toggle:** Users can switch between light and dark themes with a single button click.
- **Persisted State:** The selected theme is stored in local storage, so the preference persists across page reloads.
- **Dynamic Styling:** The component dynamically adjusts the CSS based on the selected theme.

#### Functionality

1. **State Management:**
   - `theme`: Tracks the current theme (either "light" or "dark").

2. **Event Handlers:**
   - `toggleTheme()`: Toggles the theme state between "light" and "dark" and updates the local storage accordingly.

3. **Rendering:**
   - Applies different CSS classes or styles based on the current theme, affecting background color, text color, and other UI elements.

#### Usage

To use the `LightDarkMode` component, import it into your application and include it in your JSX:

```jsx
import LightDarkMode from './LightDarkMode';

function App() {
  return (
    <div>
      <LightDarkMode />
    </div>
  );
}

export default App;
```

#### Styling

The component uses CSS classes defined for both light and dark themes, making it easy to customize the appearance based on the current state.

## Project 9

### Scrollbar Indicator

#### Overview

The Scrollbar Indicator component provides a visual progress bar at the top of the viewport to indicate how far a user has scrolled down a page. This is a great UX enhancement for content-heavy pages, such as articles or documentation, as it helps users see their reading progress.

## Features

- **Dynamic Progress Bar:** The progress bar updates dynamically as the user scrolls through the page.
- **Smooth Transition:** The component uses smooth animations to show the progress visually.
- **Customizable Styles:** The progress bar's color, height, and other styling properties can be easily customized through CSS or props.

#### Functionality

1. State Management:
   - `scrollProgress`: A state value that tracks the current scroll position as a percentage of the total scrollable height of the page.

2. Event Listeners:
   - `handleScroll`: Updates the `scrollProgress` value when the user scrolls, providing real-time feedback.

3. Rendering:
   - The component renders a fixed-position div at the top of the page that visually indicates the user's scroll position as a colored progress bar.

#### Usage

To use the `ScrollbarIndicator` component, import it into your application and include it at the top level of your layout:

```jsx
import ScrollbarIndicator from './ScrollbarIndicator';

function App() {
  return (
    <div>
      <ScrollbarIndicator />
      {/* Your other content goes here */}
    </div>
  );
}

export default App;
```

#### Styling

The component uses the following CSS classes defined in `ScrollbarIndicator.css`:

- `.progress-bar-wrapper`: Applies styles to the container of the progress bar.
- `.progress-bar`: Styles the actual progress bar that reflects scroll progress.

#### Customization

You can customize the component by modifying the CSS or by passing in props for:

- **Bar Color:** Change the color of the progress bar.
- **Bar Height:** Adjust the height of the progress bar to suit your design needs.
- **Transition Speed:** Customize the smoothness of the animation for the scroll indicator.

## Project 10

### Tabs Component

#### Overview

The Tabs component is a reusable UI component that allows users to switch between different content sections using tabs. Each tab can display its own content, making it useful for organizing information in a compact and user-friendly way.

#### Features

- Multiple tabs can be created with corresponding content.
- Users can switch between tabs to view different content.
- Supports callback for tab change events.

## Project 11

### Modal

#### Overview

The `Modal` component is a reusable UI element that displays content in a popup dialog box over the current page. It can be used to show information, get user inputs, or display warnings and messages. The modal comes with customizable `header`, `body`, and `footer` sections, making it versatile for various use cases.

#### Features

- Customizable `header`, `body`, and `footer` sections.
- `Modal` can be opened and closed with ease.
- Easily integrate and use it within your projects.

## Project 12

### GitHub Profile Finder

#### Overview

The **GitHub Profile Finder** allows users to search for GitHub profiles by entering a username. The application fetches detailed information about the user, including their `repositories`, `followers`, `following`, and additional profile data such as `location`, `bio`, and hireable status. It's a great tool for quickly viewing key details of a GitHub user.

#### Features

- **Search Profiles by Username:** Users can enter a GitHub username to search for profiles and get detailed information.
- **Profile Details:** The application displays a variety of user details, including name, bio, company, location, and public repositories.
- **Social Links:** Users can view social links such as the user's Twitter account, blog, and email if available.
- **GitHub Stats:** A summary of the user's GitHub stats is presented visually, showing the number of repositories, gists, followers, and more.
- **User-Friendly UI:** The interface is designed to present the information in a well-structured and easy-to-read manner.

#### Usage

1. **Search Functionality:**
   - Enter a GitHub username in the search bar.
   - Click the "Search" button to fetch and display the profile information.

2. **Profile Overview:**
   - Displays the user's avatar, name, and bio.
   - Includes a direct link to the GitHub profile and social links (Twitter, blog, etc.) if available.

3. **Statistics and Repositories:**
   - Provides a visual summary of public repositories, gists, followers, and following.
   - Detailed lists of repositories can be displayed based on user preference.

#### Example User Data

When a user profile is successfully found, it displays details such as:

- **Name:** John Doe
- **Bio:** Full-stack developer passionate about open source.
- **Company:** Example Inc.
- **Location:** San Francisco, USA
- **Public Repositories:** 42
- **Followers:** 350
- **Following:** 180
- **Twitter:** @johndoe
- **Blog:** johndoe.dev
- **Email:** johndoe@example.com

#### How It Works

The application leverages the GitHub API to fetch real-time data for each user based on the username input. The fetched data is then displayed in a clean and organized format, making it easy to view key details at a glance.

## Project 13

### Search AutoComplete

#### Description

The **Search AutoComplete** project is an interactive application that dynamically provides user suggestions as you type in the search box. It helps users to find and select items quickly by displaying a dropdown of filtered suggestions based on their input. This project fetches a list of users from an external API and provides an intuitive auto-complete functionality.

#### Features

- **Dynamic Search and Filtering:** As you type in the search field, the app dynamically filters through a list of user names to display suggestions that match your input.
- **User-Friendly Dropdown:** The filtered user suggestions appear in a dropdown below the search box, making it easy for users to pick a suggestion.
- **Click to Select:** Users can click on any suggestion from the dropdown list to automatically fill the search box with the selected value.
- **Loading State Management:** A loading message is displayed while the user data is being fetched from the API.
- **Error Handling:** The application gracefully handles errors during data fetching, ensuring a smooth user experience.

#### Component Structure

`SearchAutoComplete`

This is the main component responsible for rendering the search bar and handling the state of the application. It includes:

- States:
   - `loading`: Boolean to indicate if the user data is being fetched.
   - `users`: Array to store the list of user names fetched from the API.
   - `error`: To store any errors encountered during data fetching.
   - `searchParam`: To store the current search query.
   - `showDropdown`: Boolean to manage the visibility of the suggestions dropdown.
   - `filterdUsers`: Array to store the filtered list of user names based on the search input.
- Functions:
   - `fetchUserList`: Asynchronously fetches the user data from the API and populates the users state.
   - `handleChange`: Filters the users list based on the user's input and displays the dropdown with suggestions.
   - `handleSuggestionClick`: Sets the selected suggestion as the search parameter and hides the dropdown.

`Suggestions`

This component receives the `data` (filtered user names) and `onSuggestionClick` function as props. It renders a list of suggestions, each of which is clickable and triggers the `onSuggestionClick` function.