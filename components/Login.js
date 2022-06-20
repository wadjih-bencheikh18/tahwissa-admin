export default function Login() {
  return (
    <div className="w-full max-w-md m-auto bg-[#8168DD] bg-opacity-95 text-white rounded-3xl shadow-default py-10 px-16">
      <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
        S'authentifier
      </h1>

      <form>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            id="email"
            placeholder="Votre e-mail"
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            id="password"
            placeholder="Votre mot de passe"
          />
        </div>

        <div className="flex justify-center items-center mt-6">
          <button className="last:bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
