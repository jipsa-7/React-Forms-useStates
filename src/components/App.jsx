import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  function handleOnChange(event) {
    //event is just an object name. We can give it any name.
    setName(event.target.value);
  }
  const [heading, setHeading] = useState("");
  function buttonClick(event) {
    setHeading(name);
    event.preventDefault(); //This method will prevent the default next behaviour of the event. In our case since the event onSubmit is coming from form component, its default behaviour just after submitting is refrushing. event.preventDefault() prevents that refreshing behaviour.
  }
  return (
    <div className="container">
      <h1>Hello {name} </h1>
      <h1>Hello {heading} </h1>
      <form onSubmit={buttonClick}>
        {/**Normally we put inputs and submit button inside the html form element */}
        {/**If we do that when we hit submit button name is added to heading then it quickly refresh the app automatically
         * This is the default behaviour of the HTML form component.
         */}
        <input
          onChange={handleOnChange}
          value={name}
          type="text"
          placeholder="What's your name?"
        />
        {/**In react value should be set through use state but in html value will be set by the element itself.*/}
        {/**When your input element triggers a function stored in an onchange event it also passes over an object and that object is corresponds to the event that triggers the onChange */}
        {/**We can consolelog various thing related to that event ie event.target.value,event.target.placeholder,event.target.type were event correponds to the event that triggers onchange,target reffers to the element and value, placeholder and type are the propertice of the element.   */}
        <button type="submit">
          {/**MAy be we have the type ="submit" so that if you have multiple buttons only this button will trigger the submission of the form. */}
          {/**When click on the submit button in the form component it will trigger onSubmit event of the form which inturns callsthe function buttonClick that we have written*/}
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
