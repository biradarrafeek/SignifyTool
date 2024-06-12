Signature App

The Signature App is a simple web application that allows users to draw signatures on a canvas, customize the text color, background color, and font size, and provides functionalities to clear, undo, redo, save, and retrieve the signature.
Features

    Text Color Picker: Change the color of the text drawn on the canvas.
    Background Color Picker: Change the background color of the canvas.
    Font Size Selector: Adjust the font size of the text.
    Clear Button: Clear the entire canvas.
    Undo/Redo Buttons: Undo and redo the drawing actions.
    Save & Download Button: Save the current signature and download it as a PNG image.
    Retrieve Button: Retrieve and display a previously saved signature from local storage.

Technologies Used

    HTML5
    CSS3
    JavaScript
    Bootstrap 4

Usage

    Clone the repository:

    bash

    git clone https://github.com/your-username/signature-app.git
    cd signature-app

    Open index.html in your browser:
    Simply open the index.html file in your preferred web browser.

File Structure

    index.html: The main HTML file that contains the structure of the app.
    style.css: The CSS file for styling the app.
    script.js: The JavaScript file that contains the logic for the app.

How It Works
Canvas Drawing

    The app initializes a canvas where users can draw their signatures using the mouse.
    Mouse events (mousedown, mousemove, mouseup) are used to handle drawing.

Color and Font Size

    Users can change the text color and background color using the color pickers.
    The font size can be adjusted using a dropdown selector.

Clear, Undo, and Redo

    The Clear button clears the canvas.
    The Undo and Redo buttons manage the drawing actions history to allow step-by-step undoing and redoing.

Save and Retrieve

    The Save & Download button saves the current canvas content to local storage and allows the user to download it as a PNG file.
    The Retrieve button loads the saved canvas content from local storage.

Event Listeners

    The app uses various event listeners to handle user interactions:
        colorPicker: Changes the stroke color.
        canvasColor: Changes the canvas background color.
        fontPicker: Changes the stroke width.
        clearButton: Clears the canvas and resets the drawing history.
        saveButton: Saves the current state of the canvas to local storage and triggers a download.
        retrieveButton: Retrieves the saved canvas state from local storage.
        undoButton and redoButton: Manage the undo and redo actions.

Drawing and Redrawing

    The drawLine function is used to draw lines on the canvas.
    The saveDrawingAction function saves the current state of the canvas to the drawing actions history.
    The redrawCanvas function redraws the canvas based on the current state in the drawing actions history.

Screenshots
![Screenshot (372)](https://github.com/biradarrafeek/SignifyTool/assets/90768585/8155dcc5-eea0-4a43-b9e0-cf73dd0d06a7)
![Screenshot (370)](https://github.com/biradarrafeek/SignifyTool/assets/90768585/b62ae2f1-e7b1-49b6-b1e7-91ea53ed5608)
![Screenshot (369)](https://github.com/biradarrafeek/SignifyTool/assets/90768585/31027b97-582f-4e33-bb7c-9ce90a9598db)
![Screenshot (368)](https://github.com/biradarrafeek/SignifyTool/assets/90768585/de07569c-c4dd-45b0-8e6c-68819100ddc3)
<br>
<br>
<br>
<br>




<b>Hit the Star button <b/>
