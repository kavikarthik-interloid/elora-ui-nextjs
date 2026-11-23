import RegisterForm from "@/components/auth/register/register-form";
import { Header } from "@/components/layout/header/header";
import SiteFooter from "@/components/layout/site-footer";

export default function registerPage() {
  return (
    <main className="flex flex-col w-full h-full font-medium">
      <div className="w-full h-3/4 flex flex-col justify-end p-5">
        <Header />
        <RegisterForm />
      </div>
      <SiteFooter />
    </main>
  );
}
