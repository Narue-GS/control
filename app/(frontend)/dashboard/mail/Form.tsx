"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Switch } from "@/components/ui/switch"

import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { Textarea } from "@/components/ui/textarea"
import { Dialog } from "@/components/ui/dialog"
import { Confirm } from "@/components/ui/confirm"

import { IMail } from "@/app/(backend)/api/(modules)/mail/types"


const formSchema = z.object({
  receptor: z.string().min(2, {message:"Muito curto"}),
  arraival: z.string(),
  addressee:z.string().optional(),
  format: z.enum(["Carta", "Envelope", "Caixa", "Pacote", "Outro"]),
  email: z.string().email().optional(),
  sender: z.string().optional(),
  quantity: z.string(),
  identified: z.boolean(),
  delivered: z.boolean(),
  descart_date: z.string(),
})
 
export default function EntityForm({data, close, save, delete_}: {data: IMail, close:() => void, save:(data:IMail) => void, delete_:(id:number) => void}) {
  // let [selectedItem, setSelectedItem] = useState(data)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      receptor: data.receptor,
      arraival: data.arraival.replaceAll("/","-").split("-").reverse().join("-") || "",
      addressee: data.addressee,
      format: data.format,
      email: data.email,
      sender: data.sender,
      quantity: data.quantity.toString(),
      identified: data.identified,
      delivered: data.delivered,
      descart_date: data.descart_date.replaceAll("/","-").split("-").reverse().join("-") || "",
    },
  })
 
  // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      save({
        id:data.id,
        receptor: values.receptor,
        arraival: values.arraival.replaceAll("-", "/").split("/").reverse().join("/")|| "",
        addressee: values.addressee || "Não informado",
        format: values.format,
        email: values.email || "Não informado",
        sender: values.sender || "Não informado",
        quantity: +values.quantity,
        identified: values.identified,
        delivered: values.delivered,
        descart_date: values.descart_date.replaceAll("-", "/").split("/").reverse().join("/")|| "",
      })
      close()
    }

    
  return (
    <section className="flex w-screen h-screen fixed left-0 justify-center">
      <div onClick={close} className="w-screen h-screen top-0 left-0 backdrop-brightness-75"></div>

      <div className="w-[30rem] max-w-[90vw] max-h-[88vh] overflow-scroll animate-open-b  absolute top-10 z-20 bg-white p-4 rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField control={form.control} name="receptor" render={({ field }) => (
              <FormItem>
                <FormLabel>Quem recebeu</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
              </FormItem>
              )}
            />

            <FormField control={form.control} name="arraival" render={({ field }) => (
              <FormItem>
                <FormLabel>Data de chegada</FormLabel>
                <FormControl>
                  <Input type="date" placeholder="" defaultValue={"01-01-2024"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
            />

            <FormField control={form.control} name="addressee" render={({ field }) => (
              <FormItem>
                <FormLabel>Destinatário</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
            />

            <FormField control={form.control} name="sender" render={({ field }) => (
              <FormItem>
                <FormLabel>Rementente</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
            />

            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email para notificação</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
            />

            <FormField control={form.control} name="format" render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de correspondência</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o formato" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Carta">Carta</SelectItem>
                  <SelectItem value="Envelope">envelope</SelectItem>
                  <SelectItem value="Caixa">Caixa</SelectItem>
                  <SelectItem value="Pacote">Pacote</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              </FormItem>
              )}
            />

            <FormField control={form.control} name="quantity" render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
            />

            <FormField control={form.control} name="identified" render={({ field }) => (
              <FormItem>
                <FormLabel>identificado?</FormLabel><br />
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
              )}
            />
            <FormField control={form.control} name="delivered" render={({ field }) => (
              <FormItem>
                <FormLabel>Entregue?</FormLabel><br />
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
              )}
            />

            <FormField control={form.control} name="descart_date" render={({ field }) => (
              <FormItem>
                <FormLabel>Data de descarte</FormLabel>
                <FormControl>
                  <Input type="date" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
            />
            <Button variant={"destructive"} className="px-4 py-1 outline rounded-lg text-red-500 hover:scale-110 transition mr-5" type="button" onClick={close}>Cancelar</Button>
            <Button className="px-4 py-1 rounded-lg text-white hover:scale-110 transition" type="submit" >Confirmar</Button>
            <br />
            {data.id != 0 ?
              <Confirm confirmFunction={() => {delete_(data.id); close()}}>
                <Button className="px-4 py-0 w-full rounded-lg text-white bg-red-500 shadow hover:bg-red-600 transition" type="button" >Deletar</Button>
              </Confirm>
              : ""
            }
          </form>
        </Form> 
      </div>
    </section>
  )
}





/*

"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
})

export function SelectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

*/