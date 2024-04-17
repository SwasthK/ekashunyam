import React from "react";
// import { handleSubmit } from "./Form";

const Myform = () => {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto flex-cols mb-10"
      >
        <div className="max-w-lg mx-auto flex-cols px-8 py-3 bg-slate-300 mt-6 text">
          <h3 className="mb-5">Quiz(2 make a team)</h3>
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

          <h3 className="mb-5">Product Launch(Individual)</h3>
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

          <h3 className="mb-5">IT Manager(Individual)</h3>
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
          </button>
        </div>
      </form>
    </>
  );
};

export default Myform;
