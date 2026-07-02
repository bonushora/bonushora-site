import AppLayout from "../layouts/AppLayout";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <AppLayout>
      
      {/* HERO */}
      <section className="text-center px-6 py-28">
        <h1 className="text-6xl font-bold">
          O tempo tem valor.
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          BônusHora é uma rede de colaboração baseada em compromisso, reputação e confiança entre profissionais.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button variant="primary">Conhecer o projeto</Button>
          <Button variant="outline">Entrar no app</Button>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-gray-50 px-6 py-20">
        <h2 className="text-3xl font-bold text-center">Como funciona</h2>

        <div className="mt-10 max-w-4xl mx-auto grid gap-4">
          <Card>1. Criação de conta</Card>
          <Card>2. Oferta ou solicitação de serviço</Card>
          <Card>3. Compromisso estabelecido</Card>
          <Card>4. Execução do serviço</Card>
          <Card>5. Registro do compromisso</Card>
          <Card>6. Evolução da reputação</Card>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Filosofia</h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600">
          O BônusHora não é dinheiro, não é crédito financeiro e não é dívida.
          É um sistema de registro de compromisso humano baseado em confiança e reputação.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 text-center bg-black text-white">
        <h2 className="text-3xl font-bold">
          Comece a construir sua reputação
        </h2>

        <p className="mt-4 text-gray-300">
          O futuro da colaboração é baseado em confiança.
        </p>

        <div className="mt-8">
          <Button variant="outline">Entrar no aplicativo</Button>
        </div>
      </section>

    </AppLayout>
  );
}
