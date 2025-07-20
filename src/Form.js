import { useState } from "react";
import Popup, * as all from "./Popup";
import { useEffect } from "react";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    age: "",
    employee: false,
    salary: "less than 500$",
  });
  useEffect(() => {
    if (localStorage.data) {
      setData(JSON.parse(localStorage.data));
    }
  }, []);
  function clearLocalStorage() {
    window.localStorage.clear();
    setData({
      name: "",
      phone: "",
      age: "",
      employee: false,
      salary: "less than 500$",
    });
  }
  const minLengthPhone = 10;
  const maxLengthPhone = 12;
  const minAge = 18;
  const maxAge = 100;
  return (
    <div className="form-section h-screen flex justify-center items-center">
      <Popup
        title={
          typeof data.age != "number" && data.age < minAge
            ? all.ageWrrong
            : data.age > maxAge
            ? all.ageWrrong
            : typeof data.phone != "number"
            ? all.phoneWrrong
            : data.phone.toString().length < minLengthPhone
            ? all.phoneWrrong
            : data.phone.toString().length > maxLengthPhone
            ? all.phoneWrrong
            : all.successfullForm
        }
        clearLocalStorage={clearLocalStorage}
      />
      <div className="form-content p-5 w-full md:w-1/2 rounded-lg m-auto bg-gradient-to-b from-indigo-500 to-purple-800">
        <h1 className="text-white text-3xl font-bold text-center mb-4">
          Requesting a Loan
        </h1>
        <hr />
        <form
          className="mt-5 flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            document.querySelector("dialog").showModal();
            if (all.status === all.successfullForm) {
              console.log(data);
            }
          }}
        >
          <div className={`text-center`}>
            <label className="block text-white text-center">Name:</label>
            <input
              className="w-full"
              id="name"
              type="text"
              name="Name"
              required
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
                window.localStorage.data = JSON.stringify({
                  ...data,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className={`text-center`}>
            <label className="block text-white text-center">
              Phone Number:
            </label>
            <input
              className="w-full"
              id="phone-number"
              type="text"
              name="Phone"
              required
              value={data.phone}
              onChange={(e) => {
                setData({ ...data, phone: +e.target.value });
                window.localStorage.data = JSON.stringify({
                  ...data,
                  phone: +e.target.value,
                });
              }}
            />
          </div>
          <div className={`text-center`}>
            <label className="block text-white text-center">Age:</label>
            <input
              className="w-full"
              id="age"
              type="text"
              name="Age"
              required
              value={data.age}
              onChange={(e) => {
                setData({ ...data, age: +e.target.value });
                window.localStorage.data = JSON.stringify({
                  ...data,
                  age: +e.target.value,
                });
              }}
            />
          </div>
          <div className={`text-center`}>
            <label className="block text-white text-center">
              Are you employee?
            </label>
            <input
              className="w-10 h-10"
              id="checkbox"
              type="checkbox"
              name="box"
              checked={data.employee}
              onChange={(e) => {
                setData({ ...data, employee: e.target.checked });
                window.localStorage.data = JSON.stringify({
                  ...data,
                  employee: e.target.checked,
                });
              }}
            />
          </div>
          <div className={`text-center`}>
            <label className="block text-white text-center">Salary</label>
            <select
              className="w-full text-black"
              id="salary"
              name="salary"
              required
              value={data.salary}
              onChange={(e) => {
                setData({ ...data, salary: e.target.value });
                window.localStorage.data = JSON.stringify({
                  ...data,
                  salary: e.target.value,
                });
              }}
            >
              <option
                className="bg-[oklch(0.21_0.03_263.45)] text-white"
                value="less than 500$"
              >
                less than 500$
              </option>
              <option
                className="bg-[oklch(0.21_0.03_263.45)] text-white"
                value="between 500$ and 2000$"
              >
                between 500$ and 2000$
              </option>
              <option
                className="bg-[oklch(0.21_0.03_263.45)] text-white"
                value="above 2000$"
              >
                above 2000$
              </option>
            </select>
          </div>
          <div>
            <div className="text-center">
              <input
                className={`py-1 px-2 cursor-pointer bg-[oklch(0.21_0.03_263.45)] rounded-md text-white`}
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
