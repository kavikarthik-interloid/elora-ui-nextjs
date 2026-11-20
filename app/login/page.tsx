import SiteFooter from "@/components/layout/site-footer";
import { Header } from "@/components/layout/header/header";
import LoginForm from "@/components/auth/login/login-form";

export default function LoginPage() {
  return (
    <main className="flex flex-col w-full h-full font-medium">
      <div className="w-full h-3/4 flex flex-col justify-end p-5">
        <Header />
        <LoginForm />
      </div>
      <SiteFooter />
    </main>
  );
}
