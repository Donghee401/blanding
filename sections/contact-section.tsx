import ContactForm, { ContactFormData } from "@/components/contact-form";
import { BorderTrail } from "@/components/motion-primitives/border-trail";
import { Button, MovingBorder } from "@/components/ui/moving-border";
import { MailIcon } from "lucide-react";
import { ClientFormWrapper } from "@/components/client-form-wrapper";

export function ContactSection() {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4 bg-background p-6">
            <div className="relative flex h-15 w-15 flex-col items-center justify-center rounded-md bg-zinc-200 px-5 py-2 dark:bg-foreground/5">
            <BorderTrail style={{
             boxShadow:
            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
             }}
            size={30}
             />
             <MailIcon className="w-7 h-7 text-foreground/80" />    
            </div>
            <h2 className="text-2xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">프로젝트 문의</h2>
            <p className="max-w-3xl text-muted-foreground md:text-3xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">브랜드의 첫 인상을 바꿀 한 페이지. 단순한 디자인을 넘어, 사용자의 행동을 이끌고 전환을 설계하는 실질적인 결과를 만들어 드립니다.</p>
          </div>
          <div className="bg-background rounded-lg p-6">
            <ClientFormWrapper />
          </div>
        </div>
      </div>
    </section>
  );
}
