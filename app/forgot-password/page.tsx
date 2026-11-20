import SiteFooter from "@/components/layout/site-footer";
import { Header } from "@/components/layout/header/header";
import ForgotPasswordForm from "@/components/auth/forgot-password/forgot-password-form";

export default function ForgotPassword() {
  return (
    <main className="flex flex-col w-full h-full font-medium">
      <div className="w-full h-3/4 flex flex-col justify-end p-5">
        <Header />
        <ForgotPasswordForm/>
      </div>
      <SiteFooter />
    </main>
  );
}
