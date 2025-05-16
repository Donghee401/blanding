'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Schema for contact form validation
export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: '이름은 최소 2자 이상이어야 합니다' }),
  company: z.string().min(2, { message: '회사명은 최소 2자 이상이어야 합니다' }),
  category: z.string().optional(),
  email: z.string().email({ message: '유효한 이메일 주소를 입력해주세요' }),
  message: z
    .string()
    .min(10, { message: '메시지는 최소 10자 이상이어야 합니다' }),
})

export type ContactFormData = z.infer<typeof formSchema>

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      category: '',
      email: '',
      message: '',
    },
  })

  async function handleSubmit(values: ContactFormData) {
    try {
      await onSubmit(values);
      form.reset();
    } catch (error: any) {
      console.error('폼 제출 중 오류 발생:', error);
      toast.error(`메시지 전송에 실패했습니다: ${error.message || '알 수 없는 오류'}`);
    }
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card className="w-full mx-auto">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
              <div className="grid gap-6 md:gap-8">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid gap-2 md:gap-4">
                      <FormLabel htmlFor="name">이름</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="홍길동"
                          type="text"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* company Field */}
                <div className="grid gap-2 md:gap-4">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="grid gap-2 md:gap-4">
                        <FormLabel htmlFor="company">회사명</FormLabel>
                        <FormControl>
                          <Input
                            id="company"
                            placeholder="블랜딩 주식회사"
                            type="text"
                            autoComplete="organization"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="category">회사 유형</FormLabel>
                        <Select 
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger id="category">
                              <SelectValue placeholder="회사 유형 선택" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="법무법인">법무법인</SelectItem>
                            <SelectItem value="SaaS">SaaS</SelectItem>
                            <SelectItem value="Platform">플랫폼</SelectItem>
                            <SelectItem value="App">앱</SelectItem>
                            <SelectItem value="other">기타</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2 md:gap-4">
                      <FormLabel htmlFor="email">이메일</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="example@company.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid gap-2 md:gap-4">
                      <FormLabel htmlFor="message">프로젝트 내용</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="프로젝트에 대해 간략히 설명해주세요..."
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  제출하기
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
