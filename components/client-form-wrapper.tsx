'use client';

import ContactForm, { ContactFormData } from "@/components/contact-form";
import { toast } from "sonner";
import { submitContactForm } from "../app/page";

export function ClientFormWrapper() {
  const handleSubmit = async (data: ContactFormData): Promise<void> => {
    try {
      const result = await submitContactForm(data);
      
      if (result.success) {
        toast.success('메시지가 성공적으로 전송되었습니다!');
      } else {
        throw new Error(result.error || '알 수 없는 오류가 발생했습니다');
      }
    } catch (error: any) {
      console.error('폼 제출 실패:', error);
      toast.error(`메시지 전송에 실패했습니다: ${error.message || '알 수 없는 오류'}`);
      throw error; // 에러를 상위로 전파하여 ContactForm에서 처리하도록 함
    }
  };

  return <ContactForm onSubmit={handleSubmit} />;
} 