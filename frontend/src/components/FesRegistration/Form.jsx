import React from "react";
import { useState } from "react";
import useSubmit from "@/Hooks/useSubmit";
import Loader from "../Loader/Loader";

const Form = () => {
  const { loading, formverify } = useSubmit();

  //State Variable

  const [formFields, setFormFields] = useState({
    event1: {
      participants: [
        { name: "", contact: "" },
        { name: "", contact: "" },
      ],
    },

    event2: {
      participants: [{ name: "", contact: "" }],
    },

    event3: {
      participants: [{ name: "", contact: "" }],
    },

    event4: {
      participants: [
        { name: "", contact: "" },
        { name: "", contact: "" },
      ],
    },

    event5: {
      participants: [
        { name: "", contact: "" },
        { name: "", contact: "" },
      ],
    },

    event6: {
      participants: [
        { name: "", contact: "" },
        { name: "", contact: "" },
      ],
    },

    event7: {
      participants: [{ name: "", contact: "" }],
    },

    event8: {
      participants: [
        { name: "", contact: "" },
        { name: "", contact: "" },
        { name: "", contact: "" },
      ],
    },
  });

  // submit logics

  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   // errhandle(formFields);
  //   console.log(formFields);
  // };

  //adding participants on change

  const handleParticipantChange = (eventKey, index, field, value) => {
    setFormFields((prevState) => {
      const newState = { ...prevState };
      newState[eventKey].participants[index][field] = value;
      return newState;
    });
  };

  //adding extra participants

  const addParticipant = () => {
    if (formFields.event8.participants.length < 5) {
      setFormFields((prevState) => ({
        ...prevState,
        event8: {
          ...prevState.event8,
          participants: [
            ...prevState.event8.participants,
            { name: "", contact: "" },
          ],
        },
      }));
    } else {
      alert("Maximum 5 participants allowed");
    }
  };

  // remove participants

  const removeParticipant = (index) => {
    if (index >= 3) {
      setFormFields((prevState) => {
        const updatedParticipants = [...prevState.event8.participants];
        updatedParticipants.splice(index, 1);
        return {
          ...prevState,
          event8: {
            ...prevState.event8,
            participants: updatedParticipants,
          },
        };
      });
    }
  };

  //error handle for the name field

  const renderNameErrorMessage = (name) => {
    if (name.trim() === "") {
      return (
        <p className="text-red-500 text-sm">Participant name must be filled</p>
      );
    }
    if (name.trim() === "" || !/^[a-zA-Z]+$/.test(name)) {
      return (
        <p className="text-red-500 text-sm">
          Participant name must be a valid letter
        </p>
      );
    }
    return null;
  };

  //error handle for the contact field

  const renderContactErrorMessage = (phoneNumber) => {
    if (phoneNumber.trim() === "") {
      return (
        <p className="text-red-500 text-sm">
          Participant contact must be filled
        </p>
      );
    }
    if (phoneNumber.trim() === "" || !/^\d{10}$/.test(phoneNumber)) {
      return (
        <p className="text-red-500 text-sm">
          Phone number must be a valid 10-digit number
        </p>
      );
    }
    return null;
  };

  //focus and blur logic

  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(null);
  };

  //handle sumbit + errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    await formverify(formFields, setFormFields);
  };

  //return logic

  return (
    <div className="bg-black w-screen">
      {loading ? <Loader /> : null}
<>
      <h1 className="text-center text-4xl">Fest registration form</h1>
      <form
        onSubmit={handleSubmit}
        className="flex-cols mb-10 border-2 w-screen p-16 pt-8"
      >
        {/* ...................................................................... */}
        <div className="grid grid-cols-2 border-2">
          {/* ...................................................................... */}
          <div className="sm:flex-row sm:justify-evenly flex flex-col justify-center items-center w-full border-2 px-8">
            <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  w-full">
              <div class="p-6">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  IT Quiz(Individual)
                </h5>

                {formFields.event1.participants.map((participant, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={participant.name}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                      placeholder={`Participant ${index + 1} Name`}
                      onChange={(e) =>
                        handleParticipantChange(
                          `event1`,
                          index,
                          "name",
                          e.target.value
                        )
                      }
                      onFocus={() => handleFocus(index)}
                      onBlur={handleBlur}
                    />

                    {focusedIndex === index &&
                      renderNameErrorMessage(participant.name)}

                    <input
                      type="tel"
                      value={participant.contact}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                      placeholder={`Participant ${index + 1} Contact Number`}
                      onChange={(e) =>
                        handleParticipantChange(
                          "event1",
                          index,
                          "contact",
                          e.target.value
                        )
                      }
                      onFocus={() => handleFocus(index)}
                      onBlur={handleBlur}
                    />

                    {focusedIndex === index &&
                      renderContactErrorMessage(participant.contact)}
                  </div>
                ))}
              </div>
              <div class="p-6 pt-0">
                <button
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          {/* ...................................................................... */}
          <div className="sm:flex-row sm:justify-evenly flex flex-col justify-center items-center w-full border-2 px-8">
            <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  w-full">
              <div class="p-6">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Product Launch(Individual)
                </h5>
                

                {formFields.event2.participants.map((participant, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={participant.name}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                      placeholder={`Participant Name`}
                      onChange={(e) =>
                        handleParticipantChange(
                          "event2",
                          index,
                          "name",
                          e.target.value
                        )
                      }
                      onFocus={() => handleFocus(index)}
                      onBlur={handleBlur}
                    />

                    {focusedIndex === index &&
                      renderNameErrorMessage(participant.name)}

                    <input
                      type="tel"
                      value={participant.contact}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                      placeholder={`Participant Contact`}
                      onChange={(e) =>
                        handleParticipantChange(
                          "event2",
                          index,
                          "contact",
                          e.target.value
                        )
                      }
                      onFocus={() => handleFocus(index)}
                      onBlur={handleBlur}
                    />

                    {focusedIndex === index &&
                      renderContactErrorMessage(participant.contact)}
                  </div>
                ))}
              </div>
              <div class="p-6 pt-0">
                <button
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          {/* .................................................................. */}
        </div>

        {/* <div className="max-w-lg mx-auto flex-cols px-8 py-3 bg-slate-300 mt-6 text"> */}
  
          {/* <h3 className="mb-5">IT Manager(Individual)</h3>
          {formFields.event3.participants.map((participant, index) => (
            <div key={index}>
              <input
                type="text"
                value={participant.name}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                placeholder={`Participant Name`}
                onChange={(e) =>
                  handleParticipantChange(
                    "event3",
                    index,
                    "name",
                    e.target.value
                  )
                }
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
              />
              {focusedIndex === index &&
                renderNameErrorMessage(participant.name)}
              <input
                type="tel"
                value={participant.contact}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                placeholder={`Participant Contact`}
                onChange={(e) =>
                  handleParticipantChange(
                    "event3",
                    index,
                    "contact",
                    e.target.value
                  )
                }
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
              />
              {focusedIndex === index &&
                renderContactErrorMessage(participant.contact)}
            </div>
          ))}

          <h3 className="mb-5">Gaming(2 make a team)</h3>
          {formFields.event4.participants.map((participant, index) => (
            <div key={index}>
              <input
                type="text"
                value={participant.name}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                placeholder={`Participant ${index + 1} Name`}
                onChange={(e) =>
                  handleParticipantChange(
                    "event4",
                    index,
                    "name",
                    e.target.value
                  )
                }
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
              />
              {focusedIndex === index &&
                renderNameErrorMessage(participant.name)}
              <input
                type="tel"
                value={participant.contact}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                placeholder={`Partcipant ${index + 1} Contact Number`}
                onChange={(e) =>
                  handleParticipantChange(
                    "event4",
                    index,
                    "contact",
                    e.target.value
                  )
                }
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
              />
              {focusedIndex === index &&
                renderContactErrorMessage(participant.contact)}
            </div>
          ))}

          <h3 className="mb-5">Coding(2 make a team)</h3>
          {formFields.event5.participants.map((participant, index) => (
            <div key={index}>
              <input
                type="text"
                value={participant.name}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                placeholder={`Participant ${index + 1} Name`}
                onChange={(e) =>
                  handleParticipantChange(
                    "event5",
                    index,
                    "name",
                    e.target.value
                  )
                }
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
              />
              {focusedIndex === index &&
                renderNameErrorMessage(participant.name)}

              <input
                type="tel"
                value={participant.contact}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                placeholder={`Partcipant ${index + 1} Contact Number`}
                onChange={(e) =>
                  handleParticipantChange(
                    "event5",
                    index,
                    "contact",
                    e.target.value
                  )
                }
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
              />
              {focusedIndex === index &&
                renderContactErrorMessage(participant.contact)}
            </div>
          ))}

          <h3 className="mb-5">Web design(2 make a team)</h3>
          {formFields.event6.participants.map((participant, index) => (
            <div key={index}>
              <input
                type="text"
                value={participant.name}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                placeholder={`Participant ${index + 1} Name`}
                onChange={(e) =>
                  handleParticipantChange(
                    "event6",
                    index,
                    "name",
                    e.target.value
                  )
                }
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
              />
              {focusedIndex === index &&
                renderNameErrorMessage(participant.name)}
              <input
                type="tel"
                value={participant.contact}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                placeholder={`Partcipant ${index + 1} Contact Number`}
                onChange={(e) =>
                  handleParticipantChange(
                    "event6",
                    index,
                    "contact",
                    e.target.value
                  )
                }
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
              />
              {focusedIndex === index &&
                renderContactErrorMessage(participant.contact)}
            </div>
          ))}

          <h3 className="mb-5">Photography and Videography(Individual)</h3>
          {formFields.event7.participants.map((participant, index) => (
            <div key={index}>
              <input
                type="text"
                value={participant.name}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                placeholder={`Participant ${index + 1} Name`}
                onChange={(e) =>
                  handleParticipantChange(
                    "event7",
                    index,
                    "name",
                    e.target.value
                  )
                }
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
              />
              {focusedIndex === index &&
                renderNameErrorMessage(participant.name)}
              <input
                type="tel"
                value={participant.contact}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                placeholder={`Partcipant ${index + 1} Contact Number`}
                onChange={(e) =>
                  handleParticipantChange(
                    "event7",
                    index,
                    "contact",
                    e.target.value
                  )
                }
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
              />
              {focusedIndex === index &&
                renderContactErrorMessage(participant.contact)}
            </div>
          ))}

          <h3 className="mb-5">Dance or Fashion Show(3-5 members)</h3>
          {formFields.event8.participants.map((participant, index) => (
            <div key={index}>
              <input
                type="text"
                value={participant.name}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                placeholder={`Participant ${index + 1} Name`}
                onChange={(e) =>
                  handleParticipantChange(
                    "event8",
                    index,
                    "name",
                    e.target.value
                  )
                }
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                // required
              />
              {focusedIndex === index &&
                renderNameErrorMessage(participant.name)}
              <input
                type="tel"
                value={participant.contactNumber}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
                placeholder={`Participant ${index + 1} Contact Number`}
                onChange={(e) =>
                  handleParticipantChange(
                    "event8",
                    index,
                    "contact",
                    e.target.value
                  )
                }
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                // required
              />
              {focusedIndex === index &&
                renderContactErrorMessage(participant.contact)}

              {index >= 3 && index <= 5 && (
                <button
                  className="text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
                  type="button"
                  onClick={() => removeParticipant(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
            type="button"
            onClick={addParticipant}
          >
            Add Participant
          </button>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
          >
            Submit
          </button> */}
       
      </form>
      </>
    // </div>
  );
};

export default Form;
