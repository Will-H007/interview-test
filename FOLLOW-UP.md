# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?
Major libraries: React, ReactDom, useState and useEffect
    - React: Essential for building React components, managing component state, and handling lifecycle methods.
    - ReactDom: Render a React element into a DOM node. The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated(e.g. event handling)
    - The useState hook is used to initialize a state variable called data . This variable will store the data retrieved from an API endpoint. 
    - The useEffect hook is used to request data from the API endpoint once the component initially renders.
Minor libraries: TextField, ClearIcon, IconButton, InputAdornment and ReactAudioPlayer
    - These are just UI libraries for the design(the ReactAudioPlayer is used for the integrating audio into the app)
### Q) What is the command to run the project (only required if you changed the process)?

(Default) `docker-compose up --build`

---

# General:

### Q) How long, in hours, did you spend on the test?
9-10 hours (Took me a while to warm up and debug took me sometime)

### Q) If you had more time, what further improvements or new features would you add?
If I had more time, I might do the following:
    1. Measure performance of the code thoroughly
    2. Maybe make the searchbar more user friendly
    3. Spend more time in the UI/design and improve the scaling of the UI(i.e. for the audio I am using the ReactAudioPlayer library but it initially gives a different look than the design in the screenshot)

### Q) Which parts are you most proud of? And why?
Getting the filtered data send back from the server to the content page since even though I got stuck a bit I preserver it.

### Q) Which parts did you spend the most time with? What did you find most difficult?
Getting the filtered data send back from the server to the content page since the debugging took me a while(even though it is a silly mistake) but eventually I get through it.
Most parts are pretty trivial but among them probably the part(s) where I have to write functions/code for filtering the data

### Q) How did you find the test overall? If you have any suggestions on how we can improve the test, we'd love to hear them.
The test is pretty good. It is pretty straightforward and isn't overtly complicated or hard to understand but still test the basic skills of the coder.