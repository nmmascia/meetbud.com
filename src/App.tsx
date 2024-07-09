// @ts-ignore
import imgURL from "./assets/img.jpg";

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-800 py-10 h-screen w-screen mx-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Meet <b>Bud</b>
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark: dark:text-gray-200">
            Ruff! Ruff!
          </p>
        </div>
        <img
          src={imgURL}
          className="rounded-md border-gray-900 dark:border-white border-4 mt-6"
        />
      </div>
    </div>
  );
}
