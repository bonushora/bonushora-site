import AppLayout from "../../layouts/AppLayout";

export default function HowItWorks() {
  return (
    <AppLayout>
      <div className="px-6 py-20 max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold">Como funciona o BônusHora</h1>

        <p className="mt-6 text-gray-600">
          O BônusHora funciona como uma rede de compromisso entre profissionais.
          Cada ação realizada é registrada como um vínculo de confiança.
        </p>

        <div className="mt-10 space-y-6 text-gray-700">
          <p><b>1.</b> Um usuário cria um compromisso de serviço</p>
          <p><b>2.</b> Outro usuário aceita o compromisso</p>
          <p><b>3.</b> O serviço é executado</p>
          <p><b>4.</b> O sistema registra a conclusão</p>
          <p><b>5.</b> A reputação é atualizada automaticamente</p>
        </div>

      </div>
    </AppLayout>
  );
}
