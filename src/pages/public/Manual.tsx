import AppLayout from "../../layouts/AppLayout";

export default function Manual() {
  return (
    <AppLayout>
      <div className="px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Manual do BônusHora</h1>

        <p className="mt-6 text-gray-600">
          Este manual descreve as regras, filosofia e arquitetura do sistema BônusHora.
        </p>
      </div>
    </AppLayout>
  );
}
