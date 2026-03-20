import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <section className="w-full max-w-[460px] rounded-2xl border border-neutral-300 bg-neutral-100 p-8 shadow-2xl">
      <div className="mb-8">
        <h1 className="text-center text-3xl font-black uppercase tracking-wide text-black">
          Log in bij MARA
        </h1>
      </div>

      <LoginForm />
    </section>
  );
}
