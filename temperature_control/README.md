# Temperature Control Application

This is a React-based temperature control application that allows users to increase or decrease the temperature and visually indicates temperature changes with color transitions.

## Features
- Display the current temperature.
- Increase and decrease the temperature using buttons.
- Dynamic background color change based on temperature:
  - **Red** for temperatures 19°C and above.
  - **Gray** for temperatures below 19°C.

## Screenshot
  - ![Image Description](https://github.com/KanchanCS/react-projects/blob/main/temperature_control/src/img/photo_2025-01-26_21-47-20.jpg)
## How to Run the Project
1. Clone the repository:
2. Navigate to the project directory:
     ```bash
     cd temperature-control
3. Install dependencies:
   ```bash
     npm install
4. Start the development server:
    ```bash
      npm start

## File Structure
        ├── TemperatureControl.js  # Main React component
        |── Temperature.css        # Component-specific styles
        ├── img/
        │   └── mobile.avif        # Image displayed in the UI
        └── App.js                 # Parent component

## How it Works
  - The TemperatureControl component uses React state to manage the temperature and background color.
  - The temperature changes with + and − buttons.
  - The background color dynamically updates based on the temperature value.

## Technologies Used
  - **React:** For building the UI components.
  - **CSS:** For styling the temperature control interface.



