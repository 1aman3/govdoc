# Indian Citizen Government Document Guide

This project is a Single-Page Application (SPA) designed to assist Indian citizens in navigating the process of obtaining or updating government documents. It provides bilingual step-by-step guidance for Aadhaar Card, PAN Card, Passport, Voter ID (EPIC), and Driving Licence.

## Features

- **Language Toggle**: Switch between English and Hindi for a better user experience.
- **Document Type Selector**: Choose Aadhaar Card, PAN Card, Passport, Voter ID (EPIC), or Driving Licence.
- **Action Selector**: Select the action to be taken (New Application, Update/Correction, Surrender/Cancel).
- **Process Type Toggle**: Choose between Online Process and Offline Process.
- **Step-by-Step Guide**: Displays required documents, official portal links, offline office details, fees, estimated time, and mode-specific sequential steps for the selected document and action in English or Hindi.

Fees and processing estimates that vary by state, eligibility, or service are identified as approximate; confirm current requirements with the official portal or relevant office before applying.

## File Structure

```
indian-document-guide
├── index.html       # Main HTML file for the SPA
├── style.css        # Styles for the application
├── data.js          # Data source containing document information
├── app.js           # JavaScript logic for interactivity
└── README.md        # Project documentation
```

## Getting Started

To run the application locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```
   cd indian-document-guide
   ```

3. **Open `index.html` in a web browser**:
   You can simply double-click the `index.html` file or open it using your preferred web browser.

## Usage

- Use the top navbar to toggle between English and Hindi.
- Select the type of document and the action you wish to perform.
- Choose whether you want to proceed with the online or offline process.
- The application will display the required information based on your selections.

## Contributing

Contributions are welcome! If you have suggestions for improvements or additional features, feel free to submit a pull request.

## License

This project is open-source and available under the MIT License.