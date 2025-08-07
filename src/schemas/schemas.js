import { z } from "zod";

export const loginSchema = z
  .object({
    email: z.string({ message: "* 必填" }).min(1, { message: "* 必填" }).pipe(z.email({ message: "無效的 Email 格式." })),
    password: z.string({ message: "* 必填" }).min(1, { message: "* 必填" }),
  });

export const signupSchema = z
  .object({
    email: z.string({ message: "* 必填" }).min(1, { message: "* 必填" }).pipe(z.email({ message: "無效的 Email 格式." })),
    password: z.string({ message: "* 必填" }).min(1, { message: "* 必填" }),
    confirm: z.string({ message: "* 必填" }).min(1, { message: "* 必填" }),
    ppaName: z.string({ message: "* 必填" }).min(1, { message: "* 必填" }),
    phone: z.string({ message: "* 必填" }).min(1, { message: "* 必填" }),
    tvUsername: z.string({ message: "* 必填" }).min(1, { message: "* 必填" }),
    telegramId: z.string({ message: "* 必填" }).min(1, { message: "* 必填" }),
  })
  .refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "請確認密碼",
  });
