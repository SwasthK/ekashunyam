import React from "react";
import { useState } from "react";
import useSignup from "@/Hooks/useSignup";
import { useSubmit } from "react-router-dom";

const Form = () => {
  const { loading, formverify } = useSubmit();
  const [loginmode, setloginmode] = useState(false);

  const [formFields, setFormFields] = useState({
    event1: {
      participants: [
        { name: "", number: "" },
        { name: "", number: "" },
      ],
    },
    event2: {
      participants: [
        { name: "", number: "" },
        { name: "", number: "" },
      ],
    },
    
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleChange = (event, index, field, value) => {
    setFormFields({
      ...formFields,
      [event]: {
        ...formFields[event],
        participants: formFields[event].participants.map((participant, i) =>
          i === index ? { ...participant, [field]: value } : participant
        )
      }
    });
  };

  return (
    <div>
      <h1 className="text-center text-4xl">Fest registration form</h1>
      <form
        onSubmit={handlesubmit}
        className="max-w-lg mx-auto flex-cols mb-10"
      >
        <div className="max-w-lg mx-auto flex-cols px-8 py-3 bg-slate-300 mt-6 text">
          <h3 className="mb-5">Product management(Individual)</h3>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Enter partcipant name"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Enter partcipant number"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
        </div>

        <div className="max-w-lg mx-auto flex-cols px-8 py-3 bg-slate-300 mt-6 text">
          <h3 className="mb-5">IT manager(Individual)</h3>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Enter partcipant name"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Enter partcipant number"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
        </div>

        <div className="max-w-lg mx-auto flex-cols px-8 py-3 bg-slate-300 mt-6 text">
          <h3 className="mb-5">Gaming(2 make a team)</h3>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="participant 1"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Contact 1"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Partcipant 1"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Contact 1"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
        </div>
        <div className="max-w-lg mx-auto flex-cols px-8 py-3 bg-slate-300 mt-6 text">
          <h3 className="mb-5">Coding(2 make a team)</h3>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="participant 1"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Contact 1"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Partcipant 2"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Contact 2"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
        </div>
        <div className="max-w-lg mx-auto flex-cols px-8 py-3 bg-slate-300 mt-6 text">
          <h3 className="mb-5">Web design(2 make a team)</h3>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="participant 1"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Contact 1"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Partcipant 2"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Contact 2"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
        </div>

        <div className="max-w-lg mx-auto flex-cols px-8 py-3 bg-slate-300 mt-6 text">
          <h3 className="mb-5">Photography and videography(Individual)</h3>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Enter partcipant name"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Enter partcipant number"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
        </div>
        <div className="max-w-lg mx-auto flex-cols px-8 py-3 bg-slate-300 mt-6 text">
          <h3 className="mb-5">
            Cultural competition(Group dance or Fashion show)(3-5 members)
          </h3>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="participant 1"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Contact 1"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Partcipant 2"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Contact 2"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Partcipant 3"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Contact 3"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Partcipant 4"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Contact 4"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Partcipant 5"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Contact 5"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Partcipant 6"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
            <input
              type="tel"
              id="text"
              value={signupcontent.college}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-3"
              placeholder="Contact 6"
              //   required
              onChange={(e) =>
                setsignupcontent({ ...signupcontent, college: e.target.value })
              }
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
