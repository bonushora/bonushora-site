import AppLayout from "../../layouts/AppLayout";

export default function Manual() {
  return (
    <AppLayout>
      <div className="px-6 py-20 max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold">Manual do BônusHora</h1>

        <p className="mt-6 text-gray-600">
          Este manual define regras, arquitetura e filosofia do sistema.
        </p>

        <div className="mt-10 space-y-4 text-gray-700">
          <p>• Regras de compromisso</p>
          <p>• Sistema de reputação</p>
          <p>• Estrutura de dados</p>
          <p>• Evolução do ecossistema</p>
        </div>

      </div>
    </AppLayout>
  );
}
