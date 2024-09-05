import InputForm from "@/components/InputForm";
import RandomResult from "@/components/RandomResult";
import ValuesList from "@/components/ValuesList";

export default function Home() {
  return (
    <div className="p-3 w-full h-screen">
      <main className="flex  flex-col row-start-2 h-full items-start">
        <ValuesList />
        <div className="flex p-36 justify-between w-full h-full items-center">
          <InputForm />
          <RandomResult />
        </div>
      </main>
    </div>
  );
}
