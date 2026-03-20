export default function LoginForm() {
  return (
    <form className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-neutral-800">
          E-mailadres
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-xl border border-sky-500 bg-white px-4 py-3 outline-none transition focus:border-sky-600"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-neutral-800">
          Wachtwoord
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="w-full rounded-xl border border-sky-500 bg-white px-4 py-3 outline-none transition focus:border-sky-600"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-orange-600"
        >
          Login
        </button>
      </div>

      <div className="flex flex-col gap-2 pt-2 text-sm">
        <a href="/wachtwoord-vergeten" className="text-sky-700 underline underline-offset-4">
          Wachtwoord vergeten?
        </a>
        <a href="/demo" className="text-sky-700 underline underline-offset-4">
          Bekijk demo
        </a>
      </div>
    </form>
  );
}

