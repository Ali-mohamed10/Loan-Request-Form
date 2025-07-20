export const ageWrrong = "Age is not allowed";
export const phoneWrrong = "Phone number format is incorrect";
export const successfullForm = "The form has been submitted successfully";
export let status = "";

export default function Popup({ title, clearLocalStorage }) {
  status = title;
  return (
    <dialog className="popup w-full sm:w-3/4 p-8">
      <p
        className={`text-2xl md:text-4xl text-center font-bold ${
          title === ageWrrong || title === phoneWrrong
            ? "text-red-500"
            : "text-green-700"
        }`}
      >
        {title}
      </p>
      <button
        className="py-1 px-2 bg-[oklch(0.21_0.03_263.45)] text-white absolute top-0 right-0"
        onClick={() => {
          document.querySelector("dialog").close();
          if (
            document.querySelector("dialog p").textContent === successfullForm
          ) {
            clearLocalStorage();
          }
        }}
      >
        X
      </button>
    </dialog>
  );
}
