import AppLayout from "../../layouts/AppLayout";

export default function Roadmap() {
  return (
    <AppLayout>
      <div className="px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Roadmap</h1>

        <ul className="mt-6 space-y-3 text-gray-700">
          <li>✔ MVP do sistema</li>
          <li>⏳ App React completo</li>
          <li>⏳ Reputação avançada</li>
          <li>⏳ DAO BônusHora</li>
          <li>⏳ Blockchain própria</li>
        </ul>
      </div>
    </AppLayout>
  );
}
